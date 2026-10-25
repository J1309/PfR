// PFRDA Grade A & CGPDTM Exam Readiness Platform — Core Application Logic

// Global State
const state = {
  activeExam: localStorage.getItem('active_exam_track') || 'cgpdtm', // Defaults to CGPDTM for tomorrow's interview
  currentView: 'drill',
  theme: 'dark',
  drill: {
    topic: 'pension',
    questions: [],
    currentIndex: 0,
    userAnswers: {} // { qId: selectedOptionIndex }
  },
  cbt: {
    mode: 'paper2', // 'paper2' or 'full'
    questions: [],
    currentIndex: 0,
    responses: {}, // { qId: selectedOptionIndex }
    statuses: {},  // { qId: 'not-visited' | 'not-answered' | 'answered' | 'review' | 'ans-review' }
    timerInterval: null,
    secondsLeft: 2400, // 40 mins default for Paper 2
    isSubmitted: false
  },
  bookmarks: JSON.parse(localStorage.getItem('pfrda_bookmarks') || '[]'),
  cgpdtm: {
    currentView: 'qa', // 'qa', 'sim', 'cheats', 'check', 'bookmarks'
    currentTopic: 'networking_core',
    currentIndex: 0,
    revealedAnswers: {}, // { qId: boolean }
    scenarioId: 'sc_01',
    scenarioStep: 0,
    scenarioAnswers: {}, // { 'sc_01_0': selectedIndex }
    checklist: JSON.parse(localStorage.getItem('cgpdtm_checklist') || '{}'),
    bookmarks: JSON.parse(localStorage.getItem('cgpdtm_bookmarks') || '[]')
  }
};

// Initialize App on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  updateBookmarkCount();
  selectTopic('pension');
  showCheatSheet('pension');
  setupKeyboardShortcuts();
  initChecklist();

  // Initialize CGPDTM Studio
  initCgpdtm();

  // Apply saved or default exam track
  const initialTrack = localStorage.getItem('active_exam_track') || 'cgpdtm';
  switchExamTrack(initialTrack);
});

// ==========================================================================
// 1. Navigation & Theme Functions
// ==========================================================================
function switchView(viewName) {
  state.currentView = viewName;
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  const activePanel = document.getElementById(`view-${viewName}`);
  const activeNav = document.getElementById(`nav-${viewName}`);
  if (activePanel) activePanel.classList.add('active');
  if (activeNav) activeNav.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'instant' });

  if (viewName === 'bookmarks') {
    renderBookmarks();
  }
}

function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('theme-dark')) {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    state.theme = 'light';
  } else {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    state.theme = 'dark';
  }
}

function initCountdown() {
  const targetDate = new Date('2026-10-15T09:00:00+05:30').getTime();
  const timerElem = document.getElementById('countdown-timer');

  function update() {
    if (state.activeExam === 'cgpdtm') {
      if (timerElem) timerElem.textContent = '🔥 Interview Tomorrow!';
      return;
    }
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0) {
      if (timerElem) timerElem.textContent = 'Exam Day Today!';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (timerElem) timerElem.textContent = `${days}d ${hours}h until Exam`;
  }
  update();
  setInterval(update, 60000);
}

// ==========================================================================
// 2. Drill & Learn Mode Logic
// ==========================================================================
function getQuestionsForTopic(topic) {
  switch (topic) {
    case 'pension':
      return window.pensionQuestions || [];
    case 'management':
      return window.managementQuestions || [];
    case 'finance':
      return window.financeQuestions || [];
    case 'economics':
      return window.economicsQuestions || [];
    case 'companies':
      return window.companiesActQuestions || window.companiesEconomicsQuestions || [];
    case 'aiml':
      return window.aiMlQuestions || [];
    case 'commerce':
      return window.commerceCostingQuestions || [];
    case 'marketing':
      return window.mediaMarketingQuestions || [];
    case 'paper1_quant':
      return (window.paper1Questions && window.paper1Questions.quant) || [];
    case 'paper1_reasoning':
      return (window.paper1Questions && window.paper1Questions.reasoning) || [];
    case 'paper1_english':
      return (window.paper1Questions && window.paper1Questions.english) || [];
    case 'paper1_ga':
      return (window.paper1Questions && window.paper1Questions.ga) || [];
    default:
      return window.pensionQuestions || [];
  }
}

function selectTopic(topic) {
  state.drill.topic = topic;
  state.drill.questions = [...getQuestionsForTopic(topic)];
  state.drill.currentIndex = 0;
  state.drill.userAnswers = {};

  // Update active topic button
  document.querySelectorAll('.topic-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.topic === topic);
  });

  // Update topic titles
  const topicTitles = {
    pension: { 
      title: 'Pension Sector & PFRDA Architecture (🔴 Highest Priority)', 
      desc: 'PFRDA Act 2013, NPS Tier 1 & 2, APY Rules, CRAs, PFMs, UPS 2024, NPS Vatsalya' 
    },
    management: { 
      title: 'Management & Leadership (🔴 High Priority)', 
      desc: 'Motivation Theories (Maslow, Herzberg, McGregor, Vroom), Leadership Styles, Communication, Fayol & Taylor' 
    },
    finance: { 
      title: 'Finance & Financial System (🔴 High Priority)', 
      desc: 'Money Market Instruments (T-Bills, CP, CD), Capital Market, Regulators (RBI, SEBI, IFSCA), Monetary Policy' 
    },
    economics: { 
      title: 'Economics, Union Budget & Survey (🟡 Medium-High Priority)', 
      desc: 'Macroeconomics, CPI/WPI Inflation, Union Budget 2024-25, Deficits, Economic Survey 2024' 
    },
    companies: { 
      title: 'Companies Act 2013 (🟡 Medium Priority)', 
      desc: 'Company Types (OPC, Pvt, Public), Board Meetings, Director Limits, CSR Section 135, Share Capital' 
    },
    aiml: { 
      title: 'AI / ML & FinTech (🟡 Medium Priority)', 
      desc: 'Machine Learning Models, Neural Networks, Algo Trading, Robo-Advisory, SEBI Frameworks, IndiaAI Mission' 
    },
    commerce: { 
      title: 'Commerce & Costing Essentials (🟠 Medium Priority)', 
      desc: 'Golden Rules of Accounting, Trial Balance, Break-Even Analysis, P/V Ratio, Marginal Costing, Sunk Costs' 
    },
    marketing: { 
      title: 'Media, Marketing & Communication (🟢 Quick Revision)', 
      desc: 'Kotler’s 4Ps & 7Ps, STP Framework, Push vs Pull, Integrated Marketing Communication, Digital Metrics, ASCI' 
    },
    paper1_quant: { 
      title: 'Paper 1: Quantitative Aptitude (Speed Math)', 
      desc: 'Number series, Percentages, Profit & Loss, Time & Work, Quadratic roots' 
    },
    paper1_reasoning: { 
      title: 'Paper 1: Reasoning Ability (Logic & Puzzles)', 
      desc: 'Syllogisms (Only a few), Inequalities, Directions, Blood Relations' 
    },
    paper1_english: { 
      title: 'Paper 1: English Language (Grammar & Rules)', 
      desc: 'Subject-Verb agreement, Conditionals, Prepositions, Error spotting' 
    },
    paper1_ga: { 
      title: 'Paper 1: Financial & Pension General Awareness', 
      desc: 'PFRDA leadership, current regulatory developments, Union Budget facts' 
    }
  };

  const info = topicTitles[topic] || topicTitles.pension;
  document.getElementById('current-topic-title').textContent = info.title;
  document.getElementById('current-topic-desc').textContent = info.desc;

  // Center selected topic chip horizontally on mobile
  if (window.innerWidth <= 900) {
    const activeBtn = document.querySelector(`.topic-btn[data-topic="${topic}"]`);
    if (activeBtn && typeof activeBtn.scrollIntoView === 'function') {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  renderCurrentDrillQuestion();
}

function renderCurrentDrillQuestion() {
  const questions = state.drill.questions;
  const idx = state.drill.currentIndex;
  if (!questions.length) return;

  const q = questions[idx];
  document.getElementById('drill-curr-idx').textContent = idx + 1;
  document.getElementById('drill-total-idx').textContent = questions.length;
  document.getElementById('drill-q-source').textContent = q.source || 'PFRDA Pattern';
  document.getElementById('drill-q-difficulty').textContent = q.difficulty || 'High Yield';
  document.getElementById('drill-q-text').textContent = q.question;

  // Star button state
  const isStarred = state.bookmarks.some(b => b.id === q.id);
  const starBtn = document.getElementById('btn-star-question');
  if (starBtn) {
    starBtn.textContent = isStarred ? '⭐ Starred' : '☆ Star Question';
    starBtn.classList.toggle('active', isStarred);
  }

  // Render options
  const container = document.getElementById('drill-options-container');
  container.innerHTML = '';

  const keys = ['A', 'B', 'C', 'D', 'E'];
  const answered = state.drill.userAnswers[q.id] !== undefined;
  const selectedIdx = state.drill.userAnswers[q.id];

  q.options.forEach((optText, optIdx) => {
    const optDiv = document.createElement('div');
    optDiv.className = 'option-item';
    if (answered) optDiv.classList.add('locked');

    if (answered) {
      if (optIdx === q.correctIndex) {
        optDiv.classList.add('correct');
      } else if (optIdx === selectedIdx) {
        optDiv.classList.add('incorrect');
      }
    }

    optDiv.innerHTML = `
      <span class="option-key">${keys[optIdx]}</span>
      <span class="option-text">${optText}</span>
    `;

    optDiv.onclick = () => {
      if (!answered) handleDrillAnswer(optIdx);
    };

    container.appendChild(optDiv);
  });

  // Explanation Box
  const expBox = document.getElementById('drill-explanation-box');
  if (answered) {
    expBox.classList.remove('hidden');
    document.getElementById('drill-exp-content').textContent = q.explanation;
    document.getElementById('drill-exp-takeaway').innerHTML = `<strong>Memory Takeaway:</strong> ${q.takeaway}`;
    const statusTag = document.getElementById('exp-status-tag');
    if (selectedIdx === q.correctIndex) {
      statusTag.textContent = '✅ Correct Answer';
      statusTag.style.color = 'var(--status-success)';
    } else {
      statusTag.textContent = '❌ Incorrect Answer';
      statusTag.style.color = 'var(--status-danger)';
    }
  } else {
    expBox.classList.add('hidden');
  }

  // Prev / Next button states
  document.getElementById('btn-prev-q').disabled = idx === 0;
  document.getElementById('btn-next-q').disabled = idx === questions.length - 1;
}

function handleDrillAnswer(selectedIdx) {
  const q = state.drill.questions[state.drill.currentIndex];
  state.drill.userAnswers[q.id] = selectedIdx;
  renderCurrentDrillQuestion();

  // On mobile or small viewports, smoothly reveal explanation
  if (window.innerWidth <= 900) {
    const expBox = document.getElementById('drill-explanation-box');
    if (expBox && !expBox.classList.contains('hidden')) {
      setTimeout(() => {
        expBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 60);
    }
  }
}

function navigateDrill(delta) {
  const newIdx = state.drill.currentIndex + delta;
  if (newIdx >= 0 && newIdx < state.drill.questions.length) {
    state.drill.currentIndex = newIdx;
    renderCurrentDrillQuestion();

    if (window.innerWidth <= 900) {
      const card = document.getElementById('drill-question-card');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}

function shuffleCurrentTopic() {
  state.drill.questions.sort(() => Math.random() - 0.5);
  state.drill.currentIndex = 0;
  state.drill.userAnswers = {};
  renderCurrentDrillQuestion();
}

function toggleStarCurrentQuestion() {
  const q = state.drill.questions[state.drill.currentIndex];
  if (!q) return;

  const existsIdx = state.bookmarks.findIndex(b => b.id === q.id);
  if (existsIdx >= 0) {
    state.bookmarks.splice(existsIdx, 1);
  } else {
    state.bookmarks.push(q);
  }

  localStorage.setItem('pfrda_bookmarks', JSON.stringify(state.bookmarks));
  updateBookmarkCount();
  renderCurrentDrillQuestion();
}

// ==========================================================================
// 3. IBPS Exam Simulation Logic
// ==========================================================================
function selectCbtTestMode(mode) {
  state.cbt.mode = mode;
  document.querySelectorAll('.mode-card').forEach((card, idx) => {
    card.classList.toggle('active', 
      (mode === 'paper2' && idx === 0) || 
      (mode === 'paper1' && idx === 1) || 
      (mode === 'full' && idx === 2)
    );
  });
}

function startCbtExam() {
  // Build test questions based on selected mode
  let pool = [];
  if (state.cbt.mode === 'paper1') {
    // Paper 1 pool: Quant + Reasoning + English + GA
    pool = [
      ...(window.paper1Questions.quant || []),
      ...(window.paper1Questions.reasoning || []),
      ...(window.paper1Questions.english || []),
      ...(window.paper1Questions.ga || [])
    ];
    state.cbt.secondsLeft = 60 * 60; // 60 Minutes
    document.getElementById('cbt-paper-title').textContent = 'Paper 1: Aptitude & Awareness (100 Marks | 60 Mins)';
  } else if (state.cbt.mode === 'paper2') {
    // 50 Questions from Paper 2 domains, allocated according to priority
    const pensionPool = window.pensionQuestions || [];
    const mgmtPool = window.managementQuestions || [];
    const finPool = window.financeQuestions || [];
    const ecoPool = window.economicsQuestions || [];
    const compPool = window.companiesActQuestions || window.companiesEconomicsQuestions || [];
    const aimlPool = window.aiMlQuestions || [];
    const commPool = window.commerceCostingQuestions || [];
    const mktPool = window.mediaMarketingQuestions || [];

    // Prioritized balanced sampling for Paper 2 (50 Qs):
    // 🔴 Highest: 14 | 🔴 High: 8+8 | 🟡 Med-High: 6 | 🟡 Med: 4+4 | 🟠 Med: 4 | 🟢 Quick Rev: 2 = 50 Qs
    pool = [
      ...pensionPool.slice(0, 14),
      ...mgmtPool.slice(0, 8),
      ...finPool.slice(0, 8),
      ...ecoPool.slice(0, 6),
      ...compPool.slice(0, 4),
      ...aimlPool.slice(0, 4),
      ...commPool.slice(0, 4),
      ...mktPool.slice(0, 2)
    ];

    if (pool.length < 50) {
      const allP2 = [
        ...pensionPool, ...mgmtPool, ...finPool, ...ecoPool,
        ...compPool, ...aimlPool, ...commPool, ...mktPool
      ];
      const usedIds = new Set(pool.map(q => q.id));
      const remaining = allP2.filter(q => !usedIds.has(q.id));
      pool = [...pool, ...remaining.slice(0, 50 - pool.length)];
    }

    state.cbt.secondsLeft = 40 * 60; // 40 Minutes
    document.getElementById('cbt-paper-title').textContent = 'Paper 2: Professional Knowledge (50 Qs | 100 Marks | 40 Mins)';
  } else {
    // Combined mock (Paper 1 + Paper 2 = 75 Qs)
    const pensionPool = window.pensionQuestions || [];
    const mgmtPool = window.managementQuestions || [];
    const finPool = window.financeQuestions || [];
    const ecoPool = window.economicsQuestions || [];
    const compPool = window.companiesActQuestions || window.companiesEconomicsQuestions || [];
    const aimlPool = window.aiMlQuestions || [];
    const commPool = window.commerceCostingQuestions || [];
    const mktPool = window.mediaMarketingQuestions || [];

    const paper2Sample = [
      ...pensionPool.slice(0, 10),
      ...mgmtPool.slice(0, 6),
      ...finPool.slice(0, 6),
      ...ecoPool.slice(0, 5),
      ...compPool.slice(0, 3),
      ...aimlPool.slice(0, 4),
      ...commPool.slice(0, 4),
      ...mktPool.slice(0, 2)
    ]; // 40 Qs

    const paper1Sample = [
      ...(window.paper1Questions.quant || []).slice(0, 9),
      ...(window.paper1Questions.reasoning || []).slice(0, 9),
      ...(window.paper1Questions.english || []).slice(0, 9),
      ...(window.paper1Questions.ga || []).slice(0, 8)
    ]; // 35 Qs

    pool = [...paper2Sample, ...paper1Sample];
    state.cbt.secondsLeft = 100 * 60; // 100 mins
    document.getElementById('cbt-paper-title').textContent = 'Phase 1 Combined Mock Test (Paper 1 + Paper 2)';
  }

  state.cbt.questions = pool;
  state.cbt.currentIndex = 0;
  state.cbt.responses = {};
  state.cbt.statuses = {};
  state.cbt.isSubmitted = false;

  // Initialize statuses to 'not-visited'
  pool.forEach((q, i) => {
    state.cbt.statuses[q.id] = i === 0 ? 'not-answered' : 'not-visited';
  });

  // Switch screens
  document.getElementById('cbt-pre-screen').classList.add('hidden');
  document.getElementById('cbt-result-screen').classList.add('hidden');
  document.getElementById('cbt-exam-screen').classList.remove('hidden');
  document.body.classList.add('cbt-active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  renderCbtPalette();
  renderCbtQuestion();
  startCbtTimer();
}

function startCbtTimer() {
  if (state.cbt.timerInterval) clearInterval(state.cbt.timerInterval);

  state.cbt.timerInterval = setInterval(() => {
    if (state.cbt.secondsLeft <= 0) {
      clearInterval(state.cbt.timerInterval);
      submitCbtExam();
      return;
    }
    state.cbt.secondsLeft--;
    updateCbtTimerDisplay();
  }, 1000);

  updateCbtTimerDisplay();
}

function updateCbtTimerDisplay() {
  const m = Math.floor(state.cbt.secondsLeft / 60);
  const s = state.cbt.secondsLeft % 60;
  const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  const elem = document.getElementById('cbt-timer');
  if (elem) elem.textContent = formatted;
}

function renderCbtPalette() {
  const grid = document.getElementById('cbt-palette-grid');
  grid.innerHTML = '';

  state.cbt.questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = idx + 1;
    const status = state.cbt.statuses[q.id] || 'not-visited';
    btn.classList.add(`status-${status}`);

    if (idx === state.cbt.currentIndex) {
      btn.classList.add('current');
    }

    btn.onclick = () => jumpToCbtQuestion(idx);
    grid.appendChild(btn);
  });

  updateCbtLegendStats();
}

function updateCbtLegendStats() {
  const counts = { answered: 0, 'not-answered': 0, 'not-visited': 0, review: 0, 'ans-review': 0 };
  Object.values(state.cbt.statuses).forEach(st => {
    if (counts[st] !== undefined) counts[st]++;
  });

  const legendBadges = document.querySelectorAll('.palette-legend .legend-badge');
  if (legendBadges.length >= 5) {
    legendBadges[0].textContent = counts.answered;
    legendBadges[1].textContent = counts['not-answered'];
    legendBadges[2].textContent = counts['not-visited'];
    legendBadges[3].textContent = counts.review;
    legendBadges[4].textContent = counts['ans-review'];
  }
}

function renderCbtQuestion() {
  const q = state.cbt.questions[state.cbt.currentIndex];
  if (!q) return;

  document.getElementById('cbt-q-number-title').textContent = `Question No. ${state.cbt.currentIndex + 1}`;
  document.getElementById('cbt-question-text').textContent = q.question;

  const container = document.getElementById('cbt-options-container');
  container.innerHTML = '';

  const userChoice = state.cbt.responses[q.id];

  q.options.forEach((optText, optIdx) => {
    const label = document.createElement('label');
    label.className = 'cbt-opt-label';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = `cbt-option-${q.id}`;
    radio.value = optIdx;
    radio.checked = userChoice === optIdx;

    radio.onchange = () => {
      state.cbt.responses[q.id] = optIdx;
    };

    label.appendChild(radio);
    label.appendChild(document.createTextNode(optText));
    container.appendChild(label);
  });

  const countEl = document.getElementById('palette-summary-count');
  if (countEl) countEl.textContent = state.cbt.questions.length;

  renderCbtPalette();
}

function jumpToCbtQuestion(idx) {
  const currQ = state.cbt.questions[state.cbt.currentIndex];
  if (state.cbt.statuses[currQ.id] === 'not-visited') {
    state.cbt.statuses[currQ.id] = 'not-answered';
  }

  state.cbt.currentIndex = idx;
  const newQ = state.cbt.questions[idx];
  if (state.cbt.statuses[newQ.id] === 'not-visited') {
    state.cbt.statuses[newQ.id] = 'not-answered';
  }

  renderCbtQuestion();

  // Scroll back to question top on mobile so candidate isn't stuck at the palette
  if (window.innerWidth <= 900) {
    const qPane = document.querySelector('.ibps-q-pane');
    if (qPane) {
      qPane.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function toggleCbtPaletteMobile() {
  const palettePane = document.querySelector('.ibps-palette-pane');
  if (palettePane) {
    palettePane.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function scrollBackToQuestionMobile() {
  const qPane = document.querySelector('.ibps-q-pane');
  if (qPane) {
    qPane.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function exitCbtExam() {
  if (confirm('Are you sure you want to exit the simulation test? Current progress will be discarded.')) {
    clearInterval(state.cbt.timerInterval);
    document.body.classList.remove('cbt-active');
    document.getElementById('cbt-exam-screen').classList.add('hidden');
    document.getElementById('cbt-result-screen').classList.add('hidden');
    document.getElementById('cbt-pre-screen').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function cbtSaveAndNext() {
  const q = state.cbt.questions[state.cbt.currentIndex];
  if (state.cbt.responses[q.id] !== undefined) {
    state.cbt.statuses[q.id] = 'answered';
  } else {
    state.cbt.statuses[q.id] = 'not-answered';
  }

  if (state.cbt.currentIndex < state.cbt.questions.length - 1) {
    jumpToCbtQuestion(state.cbt.currentIndex + 1);
  } else {
    renderCbtPalette();
  }
}

function cbtMarkForReview() {
  const q = state.cbt.questions[state.cbt.currentIndex];
  if (state.cbt.responses[q.id] !== undefined) {
    state.cbt.statuses[q.id] = 'ans-review';
  } else {
    state.cbt.statuses[q.id] = 'review';
  }

  if (state.cbt.currentIndex < state.cbt.questions.length - 1) {
    jumpToCbtQuestion(state.cbt.currentIndex + 1);
  } else {
    renderCbtPalette();
  }
}

function cbtClearResponse() {
  const q = state.cbt.questions[state.cbt.currentIndex];
  delete state.cbt.responses[q.id];
  state.cbt.statuses[q.id] = 'not-answered';
  renderCbtQuestion();
}

function confirmSubmitCbt() {
  const answeredCount = Object.keys(state.cbt.responses).length;
  const total = state.cbt.questions.length;
  if (confirm(`You have answered ${answeredCount} out of ${total} questions. Are you sure you want to submit the exam?`)) {
    submitCbtExam();
  }
}

function submitCbtExam() {
  clearInterval(state.cbt.timerInterval);
  state.cbt.isSubmitted = true;
  document.body.classList.remove('cbt-active');

  // Calculate scores
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  state.cbt.questions.forEach(q => {
    const userAns = state.cbt.responses[q.id];
    if (userAns === undefined) {
      unattemptedCount++;
    } else if (userAns === q.correctIndex) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  // Determine marking scheme based on mode
  let marksPerQ = 2.0;
  let penaltyPerQ = 0.50;
  let cutoffBenchmark = 20.0;
  let testName = "Paper 2 (Professional Knowledge)";

  if (state.cbt.mode === 'paper1') {
    marksPerQ = 1.0;
    penaltyPerQ = 0.25;
    cutoffBenchmark = 25.0;
    testName = "Paper 1 (Aptitude & GA)";
  } else if (state.cbt.mode === 'full') {
    marksPerQ = 1.5;
    penaltyPerQ = 0.375;
    cutoffBenchmark = 40.0;
    testName = "Combined Phase 1";
  }

  const rawPositive = correctCount * marksPerQ;
  const penalties = incorrectCount * penaltyPerQ;
  const netScore = Math.max(0, rawPositive - penalties);

  const isQualified = netScore >= cutoffBenchmark;

  // Render Result Screen
  const resultContainer = document.getElementById('cbt-result-screen');
  resultContainer.innerHTML = `
    <div class="result-card">
      <div class="result-header">
        <div>
          <h2>Phase 1 Simulation Performance Card: ${testName}</h2>
          <span class="banner-sub">Official IBPS Marking (+${marksPerQ.toFixed(1)} correct, -${penaltyPerQ.toFixed(2)} penalty)</span>
        </div>
        <div class="verdict-pill ${isQualified ? 'qualified' : 'danger'}">
          ${isQualified ? `🎉 STATUS: QUALIFIED (Cleared ${testName} Cut-off of ${cutoffBenchmark})` : `⚠️ STATUS: BORDERLINE / DANGER (Below ${cutoffBenchmark} Marks Cut-off)`}
        </div>
      </div>

      <div class="score-stats-grid">
        <div class="stat-box highlight">
          <div class="lbl">NET SCORE</div>
          <div class="val">${netScore.toFixed(2)} / 100</div>
        </div>
        <div class="stat-box">
          <div class="lbl">CORRECT ATTEMPTS</div>
          <div class="val" style="color: var(--status-success);">${correctCount} (+${rawPositive.toFixed(1)})</div>
        </div>
        <div class="stat-box">
          <div class="lbl">WRONG ATTEMPTS</div>
          <div class="val" style="color: var(--status-danger);">${incorrectCount} (-${penalties.toFixed(2)})</div>
        </div>
        <div class="stat-box">
          <div class="lbl">UNATTEMPTED</div>
          <div class="val" style="color: var(--text-dim);">${unattemptedCount}</div>
        </div>
      </div>

      <div class="penalty-analysis">
        <h4>🚨 Negative Marking Penalty Breakdown</h4>
        <p>You attempted <strong>${correctCount + incorrectCount}</strong> questions. Your wild guesses cost you <strong>${penalties.toFixed(2)} marks</strong> in deductions! 
        ${incorrectCount > 8 ? '<strong>Critical Advice:</strong> Your incorrect attempts are too high. In PFRDA, crossing the sectional cutoff requires accuracy over volume. Only attempt questions where you can eliminate down to two choices!' : 'Good accuracy discipline! Keep avoiding random guesses.'}</p>
      </div>

      <div class="result-actions">
        <button class="btn-nav primary" onclick="retakeCbt()">🔄 Retake Simulator</button>
        <button class="btn-nav" onclick="switchView('drill')">🎯 Back to Learn Mode</button>
        <button class="btn-nav" onclick="switchView('cheatsheet')">📖 Revise Cheat Sheets</button>
      </div>
    </div>
  `;

  document.getElementById('cbt-exam-screen').classList.add('hidden');
  resultContainer.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function retakeCbt() {
  document.getElementById('cbt-result-screen').classList.add('hidden');
  document.getElementById('cbt-pre-screen').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// 4. Cheat Sheets Logic
// ==========================================================================
state.currentCheatTopic = 'pension';

function showCheatSheet(topic) {
  state.currentCheatTopic = topic;
  const searchInput = document.getElementById('cheat-search-input');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.cheat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('onclick').includes(topic));
  });

  const contentDiv = document.getElementById('cheatsheet-content');
  if (contentDiv && window.cheatSheets && window.cheatSheets[topic]) {
    contentDiv.innerHTML = window.cheatSheets[topic];
  }

  // Smoothly center active cheat tab in mobile scroller
  if (window.innerWidth <= 900) {
    const activeTab = document.querySelector('.cheat-tab.active');
    if (activeTab && typeof activeTab.scrollIntoView === 'function') {
      activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
}

function filterCheatSheets(query) {
  const contentDiv = document.getElementById('cheatsheet-content');
  if (!contentDiv) return;

  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    showCheatSheet(state.currentCheatTopic || 'pension');
    return;
  }

  // Deselect tabs when searching
  document.querySelectorAll('.cheat-tab').forEach(tab => tab.classList.remove('active'));

  // Search across all cheat sheets
  let matchedHtml = '';
  let matchCount = 0;

  Object.entries(window.cheatSheets || {}).forEach(([topicKey, html]) => {
    // Create temporary DOM to inspect cards
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const cards = temp.querySelectorAll('.cheat-card, .cheat-flash-box');

    cards.forEach(card => {
      if (card.textContent.toLowerCase().includes(trimmed)) {
        matchedHtml += card.outerHTML;
        matchCount++;
      }
    });
  });

  if (matchCount === 0) {
    contentDiv.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-muted); background: var(--bg-secondary); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No exact match for "${query}"</p>
        <p style="font-size: 0.85rem;">Try searching for keywords like <strong>NPS</strong>, <strong>APY</strong>, <strong>Maslow</strong>, <strong>T-Bill</strong>, <strong>Section 135</strong>, or <strong>BEP</strong>.</p>
      </div>
    `;
  } else {
    contentDiv.innerHTML = `
      <div style="font-size: 0.85rem; color: var(--accent-secondary); font-weight: 700; margin-bottom: 0.5rem;">
        🔍 Found ${matchCount} matching study sections for "${query}":
      </div>
      ${matchedHtml}
    `;
  }
}

// ==========================================================================
// 5. Starred Bookmarks Logic
// ==========================================================================
function updateBookmarkCount() {
  const badge = document.getElementById('bookmark-count');
  const badgeMobile = document.getElementById('bookmark-count-mobile');
  if (badge) badge.textContent = state.bookmarks.length;
  if (badgeMobile) badgeMobile.textContent = state.bookmarks.length;
}

function renderBookmarks() {
  const container = document.getElementById('bookmarks-list');
  if (!container) return;

  if (state.bookmarks.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No starred questions yet.</p>
        <p style="font-size: 0.85rem;">Click the ⭐ Star Question button during your drill sessions to save questions for your October 14 revision deck!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.bookmarks.map((q, idx) => `
    <div class="question-card" style="padding: 1.25rem 1.5rem;">
      <div class="question-meta">
        <span class="badge-source">${q.source || 'Saved Question'}</span>
        <span class="badge-difficulty">${q.difficulty || 'High Yield'}</span>
      </div>
      <div class="question-text" style="font-size: 0.95rem;">${idx + 1}. ${q.question}</div>
      <div style="background: var(--status-success-bg); border-left: 3px solid var(--status-success); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--text-main);">
        <strong>Correct Answer:</strong> ${q.options[q.correctIndex]}
      </div>
      <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">
        ${q.explanation}
      </div>
      <div class="exp-takeaway" style="margin-top: 0.25rem;">
        <strong>Takeaway:</strong> ${q.takeaway}
      </div>
    </div>
  `).join('');
}

function clearAllBookmarks() {
  if (confirm('Are you sure you want to clear all starred questions?')) {
    state.bookmarks = [];
    localStorage.removeItem('pfrda_bookmarks');
    updateBookmarkCount();
    renderBookmarks();
  }
}

// ==========================================================================
// 6. Keyboard Shortcuts
// ==========================================================================
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // If active track is PFRDA
    if (state.activeExam === 'pfrda' && state.currentView === 'drill') {
      const key = e.key;
      // 1 to 5 for options
      if (['1', '2', '3', '4', '5'].includes(key)) {
        const optIdx = parseInt(key) - 1;
        const q = state.drill.questions[state.drill.currentIndex];
        if (q && state.drill.userAnswers[q.id] === undefined) {
          handleDrillAnswer(optIdx);
        }
      }
      // N or ArrowRight for next
      if (key === 'n' || key === 'N' || key === 'ArrowRight') {
        navigateDrill(1);
      }
      // P or ArrowLeft for prev
      if (key === 'p' || key === 'P' || key === 'ArrowLeft') {
        navigateDrill(-1);
      }
      // S for star
      if (key === 's' || key === 'S') {
        toggleStarCurrentQuestion();
      }
    }

    // If active track is CGPDTM Interview Studio
    if (state.activeExam === 'cgpdtm' && state.cgpdtm.currentView === 'qa') {
      const key = e.key;
      if (key === 'ArrowRight' || key === 'n' || key === 'N' || key === ' ' || key === 'Enter') {
        if ((key === ' ' || key === 'Enter') && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
          return;
        }
        if (key === ' ') e.preventDefault();
        navigateCgpdtmQuestion(1);
      }
      if (key === 'ArrowLeft' || key === 'p' || key === 'P') {
        navigateCgpdtmQuestion(-1);
      }
      if (key === 's' || key === 'S') {
        toggleStarCgpdtmCurrentQuestion();
      }
    }
  });
}

// ==========================================================================
// 7. Exam Day Checklist Persistence (PFRDA)
// ==========================================================================
function initChecklist() {
  try {
    const saved = JSON.parse(localStorage.getItem('pfrda_exam_checklist') || '{}');
    document.querySelectorAll('#exam-checklist input[type="checkbox"]').forEach(cb => {
      const id = cb.getAttribute('data-check-id');
      if (id && saved[id]) {
        cb.checked = true;
      }
    });
  } catch (e) {
    console.error('Error loading checklist', e);
  }
}

function toggleChecklistItem(cb) {
  try {
    const saved = JSON.parse(localStorage.getItem('pfrda_exam_checklist') || '{}');
    const id = cb.getAttribute('data-check-id');
    if (id) {
      saved[id] = cb.checked;
      localStorage.setItem('pfrda_exam_checklist', JSON.stringify(saved));
    }
  } catch (e) {
    console.error('Error saving checklist', e);
  }
}

// ==========================================================================
// 8. CGPDTM INTERVIEW STUDIO CONTROLLERS & ENGINE
// ==========================================================================

function switchExamTrack(track) {
  state.activeExam = track;
  localStorage.setItem('active_exam_track', track);

  const btnPfrda = document.getElementById('btn-track-pfrda');
  const btnCgpdtm = document.getElementById('btn-track-cgpdtm');
  const pfrdaNav = document.getElementById('pfrda-header-nav');
  const cgpdtmNav = document.getElementById('cgpdtm-header-nav');
  const brandBadge = document.getElementById('app-brand-badge');
  const brandTitle = document.getElementById('app-brand-title');
  const brandSub = document.getElementById('app-brand-sub');
  const countdownTimer = document.getElementById('countdown-timer');

  if (track === 'cgpdtm') {
    if (btnPfrda) btnPfrda.classList.remove('active');
    if (btnCgpdtm) btnCgpdtm.classList.add('active');
    if (pfrdaNav) pfrdaNav.classList.add('hidden');
    if (cgpdtmNav) cgpdtmNav.classList.remove('hidden');

    if (brandBadge) brandBadge.textContent = 'CGPDTM 2026';
    if (brandTitle) brandTitle.textContent = 'Networking & Cybersecurity Interview';
    if (brandSub) brandSub.textContent = 'Boudhik Sampada Bhawan, Dwarka Sec 14';
    if (countdownTimer) countdownTimer.textContent = '🔥 Interview Tomorrow!';

    // Hide all views first
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    switchCgpdtmView(state.cgpdtm.currentView || 'qa');
  } else {
    if (btnPfrda) btnPfrda.classList.add('active');
    if (btnCgpdtm) btnCgpdtm.classList.remove('active');
    if (pfrdaNav) pfrdaNav.classList.remove('hidden');
    if (cgpdtmNav) cgpdtmNav.classList.add('hidden');

    if (brandBadge) brandBadge.textContent = 'PFRDA 2026';
    if (brandTitle) brandTitle.textContent = 'Grade A Assistant Manager';
    if (brandSub) brandSub.textContent = 'Phase 1 Completed • Phase 2 Prep';
    if (countdownTimer) countdownTimer.textContent = 'Phase 2 Preparation';

    // Hide all views first
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    switchView(state.currentView || 'drill');
  }
}

function initCgpdtm() {
  if (!window.cgpdtmModules) return;

  // Render scenario pills
  const simPillsContainer = document.getElementById('scenario-selector-pills');
  if (simPillsContainer && window.cgpdtmScenarios) {
    simPillsContainer.innerHTML = window.cgpdtmScenarios.map((sc, idx) => {
      const shortTitle = sc.title.includes(':') ? sc.title.split(':')[1].trim() : sc.title;
      return `
        <button class="scenario-pill-btn ${idx === 0 ? 'active' : ''}" data-scid="${sc.id}" onclick="selectCgpdtmScenario('${sc.id}')">
          Ticket #${101 + idx}: ${shortTitle}
        </button>
      `;
    }).join('');
  }

  // Render checklist
  renderCgpdtmChecklist();

  // Render initial Q&A
  renderCgpdtmQuestion();

  // Render initial scenario
  renderCgpdtmScenario();

  // Render initial cheatsheet
  renderCgpdtmCheats('ports');

  // Update badges
  updateCgpdtmBadges();
}

function switchCgpdtmView(viewName) {
  state.cgpdtm.currentView = viewName;
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#cgpdtm-header-nav .nav-btn').forEach(btn => btn.classList.remove('active'));

  const activePanel = document.getElementById(`view-cgpdtm-${viewName}`);
  const activeNav = document.getElementById(`nav-cgpdtm-${viewName}`);
  if (activePanel) activePanel.classList.add('active');
  if (activeNav) activeNav.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'instant' });

  if (viewName === 'qa') {
    renderCgpdtmQuestion();
  } else if (viewName === 'sim') {
    renderCgpdtmScenario();
  } else if (viewName === 'cheats') {
    renderCgpdtmCheats('ports');
  } else if (viewName === 'check') {
    renderCgpdtmChecklist();
  } else if (viewName === 'bookmarks') {
    renderCgpdtmBookmarks();
  }
}

// --------------------------------------------------------------------------
// CGPDTM Verbal Q&A Studio Controller
// --------------------------------------------------------------------------

function selectCgpdtmTopic(topicKey) {
  state.cgpdtm.currentTopic = topicKey;
  state.cgpdtm.currentIndex = 0;

  // Update topic buttons active state
  document.querySelectorAll('.topic-btn[data-cgtopic]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cgtopic') === topicKey);
  });

  const topicTitles = {
    networking_core: {
      title: 'Networking Fundamentals (Must Know)',
      desc: 'OSI 7-Layer, TCP/IP, Switches, VLANs, and Core Infrastructure'
    },
    ip_services_ports: {
      title: 'IP Addressing & Services (High Yield)',
      desc: 'RFC 1918 Private Ranges, DHCP DORA, DNS Resolution, NAT, and Critical Ports'
    },
    cli_tools_diagnostics: {
      title: 'CLI Diagnostics & Tools (Hands-on CLI)',
      desc: 'ipconfig /all, ping, tracert, nslookup, netstat -ano, Linux ss -tuln, Wireshark'
    },
    cyber_security: {
      title: 'Cybersecurity Controls (Security Operations)',
      desc: 'CIA Triad, Stateful Firewalls, IDS vs IPS, VPN IPsec/SSL, SIEM, Incident Response'
    },
    behavioral_govt_it: {
      title: 'Behavioral & Govt IT Ethics (Interview Practice)',
      desc: '60s Introduction, Project Defense, Unauthorized Requests, Patent Confidentiality'
    },
    interviewer_questions: {
      title: 'Questions for the Interview Panel (Smart Endings)',
      desc: 'Professional questions to ask the interview board at Boudhik Sampada Bhawan'
    }
  };

  const info = topicTitles[topicKey] || topicTitles.networking_core;
  const titleElem = document.getElementById('cgpdtm-topic-title');
  const descElem = document.getElementById('cgpdtm-topic-desc');
  if (titleElem) titleElem.textContent = info.title;
  if (descElem) descElem.textContent = info.desc;

  // Center button in scroll on mobile
  if (window.innerWidth <= 900) {
    const activeBtn = document.querySelector(`.topic-btn[data-cgtopic="${topicKey}"]`);
    if (activeBtn && typeof activeBtn.scrollIntoView === 'function') {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  renderCgpdtmQuestion();
}

function renderCgpdtmQuestion() {
  if (!window.cgpdtmModules) return;
  const questions = window.cgpdtmModules[state.cgpdtm.currentTopic] || [];
  const idx = state.cgpdtm.currentIndex;
  if (!questions.length) return;

  const q = questions[idx];
  const currIdxElem = document.getElementById('cgpdtm-curr-idx');
  const totalIdxElem = document.getElementById('cgpdtm-total-idx');
  const topicElem = document.getElementById('cgpdtm-q-topic');
  const priorityElem = document.getElementById('cgpdtm-q-priority');
  const textElem = document.getElementById('cgpdtm-q-text');

  if (currIdxElem) currIdxElem.textContent = idx + 1;
  if (totalIdxElem) totalIdxElem.textContent = questions.length;
  if (topicElem) topicElem.textContent = q.topic || 'Networking';
  if (priorityElem) priorityElem.textContent = q.priority || 'High Yield';
  if (textElem) textElem.textContent = q.question;

  // Star button state
  const isStarred = state.cgpdtm.bookmarks.some(b => b.id === q.id);
  const starBtn = document.getElementById('btn-star-cgpdtm');
  if (starBtn) {
    starBtn.textContent = isStarred ? '⭐ Starred' : '☆ Star Question';
    starBtn.classList.toggle('active', isStarred);
  }

  // Spoken Answer Card — Always visible directly below question for instant cramming
  const answerBox = document.getElementById('cgpdtm-answer-box');
  if (answerBox) {
    answerBox.classList.remove('hidden');

    // Populate content
    const contentElem = document.getElementById('cgpdtm-answer-content');
    if (contentElem) contentElem.textContent = q.spokenAnswer;

    // Populate keywords
    const kwContainer = document.getElementById('cgpdtm-keywords-container');
    if (kwContainer) {
      kwContainer.innerHTML = (q.keywords || []).map(kw => `<span class="keyword-tag">${kw}</span>`).join('');
    }

    // Populate trap follow-up
    const trapElem = document.getElementById('cgpdtm-trap-content');
    if (trapElem) trapElem.textContent = q.trapFollowUp || 'No trap recorded.';
  }

  // Prev / Next button states
  const btnPrev = document.getElementById('btn-cgpdtm-prev');
  const btnNext = document.getElementById('btn-cgpdtm-next');
  if (btnPrev) btnPrev.disabled = idx === 0;
  if (btnNext) btnNext.disabled = idx === questions.length - 1;
}

function toggleCgpdtmRevealAnswer() {
  // Spoken answers are now always visible directly on each card
}

function navigateCgpdtmQuestion(delta) {
  const questions = window.cgpdtmModules[state.cgpdtm.currentTopic] || [];
  const newIdx = state.cgpdtm.currentIndex + delta;
  if (newIdx >= 0 && newIdx < questions.length) {
    state.cgpdtm.currentIndex = newIdx;
    renderCgpdtmQuestion();

    if (window.innerWidth <= 900) {
      const card = document.getElementById('cgpdtm-question-card');
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function shuffleCgpdtmCurrentTopic() {
  const questions = window.cgpdtmModules[state.cgpdtm.currentTopic] || [];
  questions.sort(() => Math.random() - 0.5);
  state.cgpdtm.currentIndex = 0;
  renderCgpdtmQuestion();
}

function toggleStarCgpdtmCurrentQuestion() {
  const questions = window.cgpdtmModules[state.cgpdtm.currentTopic] || [];
  const q = questions[state.cgpdtm.currentIndex];
  if (!q) return;

  const idx = state.cgpdtm.bookmarks.findIndex(b => b.id === q.id);
  if (idx > -1) {
    state.cgpdtm.bookmarks.splice(idx, 1);
  } else {
    state.cgpdtm.bookmarks.push({ ...q, topicKey: state.cgpdtm.currentTopic });
  }

  localStorage.setItem('cgpdtm_bookmarks', JSON.stringify(state.cgpdtm.bookmarks));
  updateCgpdtmBadges();
  renderCgpdtmQuestion();
}

function renderCgpdtmBookmarks() {
  const container = document.getElementById('cgpdtm-bookmarks-list');
  if (!container) return;

  const bookmarks = state.cgpdtm.bookmarks || [];
  if (!bookmarks.length) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">⭐</div>
        <h3>No Starred Questions Yet</h3>
        <p style="font-size: 0.88rem; max-width: 400px; margin: 0 auto;">While practicing in the Verbal Q&A Studio, click "☆ Star Question" on any concept you want to quickly review tomorrow morning before your interview.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = bookmarks.map((q, i) => `
    <div class="question-card" style="margin-bottom: 1.5rem;">
      <div class="question-meta">
        <span class="badge-source">${q.topic || 'Interview'}</span>
        <span class="badge-difficulty">${q.priority || 'Starred'}</span>
      </div>
      <div class="question-text" style="font-size: 1.05rem;">${i + 1}. ${q.question}</div>
      <div style="background: var(--bg-tertiary); border-left: 4px solid var(--accent-secondary); padding: 1rem 1.25rem; border-radius: var(--radius-sm); font-size: 0.92rem; line-height: 1.6; white-space: pre-line;">
        <strong>Ideal Verbal Answer:</strong>\n${q.spokenAnswer}
      </div>
      ${q.trapFollowUp ? `
        <div class="cgpdtm-trap-box" style="margin-top: 0.75rem;">
          <div class="cgpdtm-trap-title">⚠️ Common Trap / Follow-up:</div>
          <div class="cgpdtm-trap-content">${q.trapFollowUp}</div>
        </div>
      ` : ''}
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// CGPDTM Troubleshooting Simulator Controller
// --------------------------------------------------------------------------

function selectCgpdtmScenario(scenarioId) {
  state.cgpdtm.scenarioId = scenarioId;
  state.cgpdtm.scenarioStep = 0;

  // Update pills
  document.querySelectorAll('#scenario-selector-pills .scenario-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-scid') === scenarioId);
  });

  renderCgpdtmScenario();
}

function renderCgpdtmScenario() {
  if (!window.cgpdtmScenarios) return;
  const scenario = window.cgpdtmScenarios.find(s => s.id === state.cgpdtm.scenarioId) || window.cgpdtmScenarios[0];
  if (!scenario) return;

  const ticketIdElem = document.getElementById('sim-ticket-id');
  const ticketTitleElem = document.getElementById('sim-ticket-title');
  const ticketContextElem = document.getElementById('sim-ticket-context');
  const stepBadgeElem = document.getElementById('sim-step-badge');
  const stepTitleElem = document.getElementById('sim-step-title');
  const stepInstructionElem = document.getElementById('sim-step-instruction');
  const optionsContainer = document.getElementById('sim-options-container');
  const feedbackBox = document.getElementById('sim-feedback-box');

  const stepIdx = state.cgpdtm.scenarioStep;
  const totalSteps = scenario.steps.length;

  const scenarioIndex = (window.cgpdtmScenarios || []).findIndex(s => s.id === scenario.id);
  const ticketNum = scenarioIndex > -1 ? 101 + scenarioIndex : 101;
  if (ticketIdElem) ticketIdElem.textContent = `TICKET #${ticketNum}`;
  if (ticketTitleElem) ticketTitleElem.textContent = scenario.title;
  if (ticketContextElem) ticketContextElem.textContent = scenario.context;

  // Check if scenario is completed
  if (stepIdx >= totalSteps) {
    if (stepBadgeElem) stepBadgeElem.textContent = 'COMPLETED';
    if (stepTitleElem) stepTitleElem.textContent = 'Incident Successfully Resolved!';
    if (stepInstructionElem) stepInstructionElem.textContent = 'Congratulations! You methodically diagnosed and resolved this issue using proper Layer 1 to Layer 7 protocols.';
    if (optionsContainer) {
      optionsContainer.innerHTML = `
        <div style="background: rgba(16, 185, 129, 0.1); border: 1.5px solid var(--status-success); padding: 1.5rem; border-radius: var(--radius-md); text-align: center;">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🎉</div>
          <h4 style="color: var(--status-success); font-size: 1.1rem; margin-bottom: 0.5rem;">Methodology Mastered</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">You verified physical links first, checked IP & DHCP, tested gateway connectivity, and isolated DNS resolution.</p>
          <button class="btn-nav primary" onclick="selectCgpdtmScenario('${getNextScenarioId(scenario.id)}')">
            Advance to Next Real-World Ticket →
          </button>
        </div>
      `;
    }
    if (feedbackBox) feedbackBox.classList.add('hidden');
    return;
  }

  const step = scenario.steps[stepIdx];
  if (stepBadgeElem) stepBadgeElem.textContent = `Step ${stepIdx + 1} of ${totalSteps}`;
  if (stepTitleElem) stepTitleElem.textContent = step.title;
  if (stepInstructionElem) stepInstructionElem.textContent = step.instruction;

  const answerKey = `${scenario.id}_${stepIdx}`;
  const userAnswer = state.cgpdtm.scenarioAnswers[answerKey];
  const hasAnswered = userAnswer !== undefined;

  if (optionsContainer) {
    optionsContainer.innerHTML = step.options.map((optText, optIdx) => {
      let extraClass = '';
      if (hasAnswered) {
        extraClass = 'locked ';
        if (optIdx === step.correctIndex) extraClass += 'correct';
        else if (optIdx === userAnswer) extraClass += 'incorrect';
      }
      return `
        <div class="sim-option-item ${extraClass}" onclick="handleCgpdtmScenarioChoice(${optIdx})">
          <span class="option-key">${String.fromCharCode(65 + optIdx)}</span>
          <span class="option-text">${optText}</span>
        </div>
      `;
    }).join('');
  }

  if (feedbackBox) {
    if (hasAnswered) {
      feedbackBox.classList.remove('hidden');
      const isCorrect = userAnswer === step.correctIndex;
      const statusElem = document.getElementById('sim-feedback-status');
      const textElem = document.getElementById('sim-feedback-text');

      if (statusElem) {
        statusElem.textContent = isCorrect ? '✅ Excellent Diagnostic Choice' : '❌ Sub-optimal / Premature Action';
        statusElem.style.color = isCorrect ? 'var(--status-success)' : 'var(--status-danger)';
      }
      if (textElem) textElem.textContent = step.explanation;
    } else {
      feedbackBox.classList.add('hidden');
    }
  }
}

function handleCgpdtmScenarioChoice(optIdx) {
  const scenario = window.cgpdtmScenarios.find(s => s.id === state.cgpdtm.scenarioId);
  if (!scenario) return;

  const stepIdx = state.cgpdtm.scenarioStep;
  const answerKey = `${scenario.id}_${stepIdx}`;
  if (state.cgpdtm.scenarioAnswers[answerKey] !== undefined) return;

  state.cgpdtm.scenarioAnswers[answerKey] = optIdx;
  renderCgpdtmScenario();
}

function advanceCgpdtmScenarioStep() {
  state.cgpdtm.scenarioStep++;
  renderCgpdtmScenario();
}

function getNextScenarioId(currentId) {
  const list = window.cgpdtmScenarios || [];
  const idx = list.findIndex(s => s.id === currentId);
  if (idx > -1 && idx < list.length - 1) {
    return list[idx + 1].id;
  }
  return list[0].id;
}

// --------------------------------------------------------------------------
// CGPDTM Cheatsheets Controller
// --------------------------------------------------------------------------

function switchCgpdtmCheatTab(tabKey) {
  const btnPorts = document.getElementById('btn-cheat-ports');
  const btnCommands = document.getElementById('btn-cheat-commands');
  const btnGolden = document.getElementById('btn-cheat-golden');

  if (btnPorts) btnPorts.classList.toggle('active', tabKey === 'ports');
  if (btnCommands) btnCommands.classList.toggle('active', tabKey === 'commands');
  if (btnGolden) btnGolden.classList.toggle('active', tabKey === 'golden');

  renderCgpdtmCheats(tabKey);
}

function renderCgpdtmCheats(tabKey) {
  const container = document.getElementById('cgpdtm-cheats-display');
  if (!container || !window.cgpdtmCheatSheets) return;

  if (tabKey === 'ports') {
    const ports = window.cgpdtmCheatSheets.ports || [];
    container.innerHTML = `
      <div class="table-responsive">
        <table class="cgpdtm-table">
          <thead>
            <tr>
              <th>Port Number</th>
              <th>Protocol</th>
              <th>Service / Purpose</th>
              <th>High-Yield Exam & Troubleshooting Notes</th>
            </tr>
          </thead>
          <tbody>
            ${ports.map(p => `
              <tr>
                <td><span class="port-pill">Port ${p.port}</span></td>
                <td><span class="proto-pill">${p.protocol}</span></td>
                <td><strong style="color: var(--text-main);">${p.service}</strong></td>
                <td>${p.notes}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  } else if (tabKey === 'commands') {
    const cmds = window.cgpdtmCheatSheets.commands || [];
    container.innerHTML = `
      <div class="table-responsive">
        <table class="cgpdtm-table">
          <thead>
            <tr>
              <th>Windows CLI Command</th>
              <th>Linux Equivalent Command</th>
              <th>Diagnostic Action / Purpose</th>
            </tr>
          </thead>
          <tbody>
            ${cmds.map(c => `
              <tr>
                <td><span class="cmd-code">${c.win}</span></td>
                <td><span class="cmd-code" style="color: #4ade80; border-color: rgba(74, 222, 128, 0.3);">${c.linux}</span></td>
                <td>${c.purpose}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  } else if (tabKey === 'golden') {
    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-top: 4px solid var(--accent-primary); padding: 1.25rem; border-radius: var(--radius-md);">
          <h4 style="color: var(--accent-primary); margin-bottom: 0.4rem;">Rule 1: Always Start at Layer 1</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">Never reconfigure software or reboot routers until physical link lights (LEDs), Ethernet cables, and adapter toggles are verified.</p>
        </div>
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-top: 4px solid var(--accent-secondary); padding: 1.25rem; border-radius: var(--radius-md);">
          <h4 style="color: var(--accent-secondary); margin-bottom: 0.4rem;">Rule 2: Determine Scope First</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">Check if the problem affects one PC, the room, or the entire floor. Single-host = local config/cable; Multi-host = switch, DHCP, or uplink.</p>
        </div>
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-top: 4px solid var(--status-warning); padding: 1.25rem; border-radius: var(--radius-md);">
          <h4 style="color: var(--status-warning); margin-bottom: 0.4rem;">Rule 3: Separate IP Ping vs DNS</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">Always ping a raw public IP (8.8.8.8) to test Layer 3 WAN routing, and use nslookup to test DNS. Do not conflate routing failure with name resolution.</p>
        </div>
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-top: 4px solid var(--status-danger); padding: 1.25rem; border-radius: var(--radius-md);">
          <h4 style="color: var(--status-danger); margin-bottom: 0.4rem;">Rule 4: Never Experiment on Production</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">In a government office like CGPDTM, never make ad-hoc unauthorized firewall/proxy changes. Always follow change-control procedures and document tickets.</p>
        </div>
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-top: 4px solid var(--status-success); padding: 1.25rem; border-radius: var(--radius-md);">
          <h4 style="color: var(--status-success); margin-bottom: 0.4rem;">Rule 5: Isolate Compounding Incidents</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5;">If malware or suspicious login bursts are detected, isolate the endpoint immediately from the network, but preserve power to retain volatile forensic RAM.</p>
        </div>
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// CGPDTM Must-Know Checklist Controller
// --------------------------------------------------------------------------

function toggleCgpdtmChecklistItem(chkId) {
  state.cgpdtm.checklist[chkId] = !state.cgpdtm.checklist[chkId];
  localStorage.setItem('cgpdtm_checklist', JSON.stringify(state.cgpdtm.checklist));
  renderCgpdtmChecklist();
  updateCgpdtmBadges();
}

function renderCgpdtmChecklist() {
  const container = document.getElementById('cgpdtm-checklist-grid');
  if (!container || !window.cgpdtmChecklist) return;

  const items = window.cgpdtmChecklist;
  const saved = state.cgpdtm.checklist || {};
  let doneCount = 0;

  container.innerHTML = items.map(item => {
    const isChecked = !!saved[item.id];
    if (isChecked) doneCount++;
    return `
      <div class="check-item-card ${isChecked ? 'checked' : ''}" onclick="toggleCgpdtmChecklistItem('${item.id}')">
        <div class="check-box-custom">
          ${isChecked ? '✓' : ''}
        </div>
        <div class="check-text">${item.text}</div>
        <span class="check-cat-badge">${item.category}</span>
      </div>
    `;
  }).join('');

  // Update progress bar
  const total = items.length;
  const pct = Math.round((doneCount / total) * 100);
  const doneElem = document.getElementById('chk-done-count');
  const totalElem = document.getElementById('chk-total-count');
  const fillElem = document.getElementById('chk-progress-fill');

  if (doneElem) doneElem.textContent = doneCount;
  if (totalElem) totalElem.textContent = total;
  if (fillElem) fillElem.style.width = `${pct}%`;

  const badgeElem = document.getElementById('cgpdtm-check-badge');
  if (badgeElem) badgeElem.textContent = `${doneCount}/${total}`;
}

function updateCgpdtmBadges() {
  const starCount = (state.cgpdtm.bookmarks || []).length;
  const starBadge = document.getElementById('cgpdtm-star-badge');
  if (starBadge) starBadge.textContent = starCount;

  const totalCheck = (window.cgpdtmChecklist || []).length;
  const doneCheck = Object.values(state.cgpdtm.checklist || {}).filter(Boolean).length;
  const checkBadge = document.getElementById('cgpdtm-check-badge');
  if (checkBadge) checkBadge.textContent = `${doneCheck}/${totalCheck}`;
}

