// PFRDA Grade A Exam Readiness Platform — Core Application Logic

// Global State
const state = {
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
  bookmarks: JSON.parse(localStorage.getItem('pfrda_bookmarks') || '[]')
};

// Initialize App on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  updateBookmarkCount();
  selectTopic('pension');
  showCheatSheet('pension');
  setupKeyboardShortcuts();
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
    case 'companies':
      return window.companiesEconomicsQuestions || [];
    case 'commerce':
      return window.commerceCostingQuestions || [];
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
    pension: { title: 'Pension Sector & PFRDA (High Priority)', desc: 'PFRDA Act 2013, NPS Tier 1 & 2, APY Rules, CRAs, PFMs' },
    management: { title: 'Management & Leadership', desc: 'Motivation theories, Leadership styles, Communication, Fayol & Taylor' },
    finance: { title: 'Finance & Financial System', desc: 'Money Market Instruments, Regulators (RBI, SEBI, IFSCA), Monetary Policy' },
    companies: { title: 'Companies Act, Economics & Emerging Tech', desc: 'Company types, Board meetings, CSR Section 135, CPI/WPI, Account Aggregators' },
    commerce: { title: 'Commerce, Accounting & Costing Essentials', desc: 'Golden Rules, Accounting Standards, Break-even analysis, P/V ratio formulas' },
    paper1_quant: { title: 'Paper 1: Quantitative Aptitude (Speed Math)', desc: 'Number series, Percentages, Profit & Loss, Time & Work, Quadratic roots' },
    paper1_reasoning: { title: 'Paper 1: Reasoning Ability (Logic & Puzzles)', desc: 'Syllogisms (Only a few), Inequalities, Directions, Blood Relations' },
    paper1_english: { title: 'Paper 1: English Language (Grammar & Rules)', desc: 'Subject-Verb agreement, Conditionals, Prepositions, Error spotting' },
    paper1_ga: { title: 'Paper 1: Financial & Pension General Awareness', desc: 'PFRDA leadership, current regulatory developments, Union Budget facts' }
  };

  const info = topicTitles[topic] || topicTitles.pension;
  document.getElementById('current-topic-title').textContent = info.title;
  document.getElementById('current-topic-desc').textContent = info.desc;

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
}

function navigateDrill(delta) {
  const newIdx = state.drill.currentIndex + delta;
  if (newIdx >= 0 && newIdx < state.drill.questions.length) {
    state.drill.currentIndex = newIdx;
    renderCurrentDrillQuestion();
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
    // 50 Questions from Paper 2 domains
    pool = [
      ...window.pensionQuestions,
      ...window.managementQuestions,
      ...window.financeQuestions,
      ...window.companiesEconomicsQuestions,
      ...window.commerceCostingQuestions
    ];
    pool = pool.slice(0, 50);
    state.cbt.secondsLeft = 40 * 60; // 40 Minutes
    document.getElementById('cbt-paper-title').textContent = 'Paper 2: Professional Knowledge (50 Qs | 100 Marks | 40 Mins)';
  } else {
    // Combined mock (Paper 1 + Paper 2)
    pool = [
      ...window.pensionQuestions,
      ...window.managementQuestions,
      ...window.financeQuestions,
      ...window.companiesEconomicsQuestions,
      ...window.commerceCostingQuestions,
      ...(window.paper1Questions.quant || []),
      ...(window.paper1Questions.reasoning || []),
      ...(window.paper1Questions.english || []),
      ...(window.paper1Questions.ga || [])
    ];
    pool = pool.slice(0, 75);
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
  if (badge) badge.textContent = state.bookmarks.length;
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
    if (state.currentView === 'drill') {
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
  });
}
