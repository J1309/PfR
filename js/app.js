// DSSSB TGT Computer Science (Post Code 41/26) — Core Application Engine
// Separate Learn Hub + Unbiased Shuffled Practice + Authentic 20-Q Section-Lock CBT Simulator

const state = {
  theme: localStorage.getItem('dsssb_theme') || 'dark',
  currentView: 'learn',
  studiedModules: JSON.parse(localStorage.getItem('dsssb_studied') || '{}'),
  bookmarks: JSON.parse(localStorage.getItem('dsssb_bookmarks') || '[]'),
  learn: {
    moduleId: 'secA_ga',
    searchQuery: ''
  },
  practice: {
    moduleId: 'secB_prog',
    questions: [],
    currentIndex: 0,
    answers: {} // { qId: { selectedIdx, isCorrect } }
  },
  cbt: {
    active: false,
    mode: 'full',
    sectionLock: true,
    questions: [], // array of { ...q, blockIdx, blockName, section }
    blocks: [],    // [{ idx, name, section, start, end, locked }]
    activeBlock: 0,
    currentIndex: 0,
    responses: {}, // { qIndex: optionIdx }
    statuses: {},  // { qIndex: 'not-visited' | 'not-answered' | 'answered' | 'review' | 'ans-review' }
    secondsLeft: 7200,
    timerId: null,
    submitted: false
  }
};

// Combine all question banks into one lookup map
function getAllQuestionBanks() {
  return Object.assign(
    {},
    window.dsssbSectionAQuestions || {},
    window.dsssbSectionB_CoreCS || {},
    window.dsssbSectionB_AppliedPedagogy || {}
  );
}

// Fisher-Yates shuffle helper that ALSO shuffles options and updates correctIndex
function cloneAndShuffleOptions(q) {
  const indexed = q.options.map((text, i) => ({ text, isCorrect: i === q.correctIndex }));
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  return {
    ...q,
    options: indexed.map(o => o.text),
    correctIndex: indexed.findIndex(o => o.isCorrect)
  };
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  renderLearnSidebar();
  renderPracticeSidebar();
  selectLearnModule('secA_ga');
  selectPracticeModule('secB_prog');
  updateStudiedPill();
  updateBookmarkBadge();
  setupKeyboardShortcuts();
});

function applyTheme(name) {
  state.theme = name;
  localStorage.setItem('dsssb_theme', name);
  document.body.classList.toggle('theme-light', name === 'light');
  document.body.classList.toggle('theme-dark', name !== 'light');
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}

function switchView(viewName) {
  if (state.cbt.active && !state.cbt.submitted && viewName !== 'test') {
    if (!confirm('A CBT test is currently running. Leave the test screen? (Timer will keep running)')) {
      return;
    }
  }
  state.currentView = viewName;
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const panel = document.getElementById(`view-${viewName}`);
  const nav = document.getElementById(`nav-${viewName}`);
  if (panel) panel.classList.add('active');
  if (nav) nav.classList.add('active');

  if (viewName === 'bookmarks') renderBookmarks();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ==========================================================================
// 1. LEARN HUB
// ==========================================================================
function renderLearnSidebar() {
  const list = document.getElementById('learn-module-list');
  const modules = window.dsssbLearnModules || [];
  if (!list) return;

  const secA = modules.filter(m => m.section === 'A');
  const secB = modules.filter(m => m.section === 'B');

  const renderBtn = m => `
    <button class="topic-btn ${m.id === state.learn.moduleId ? 'active' : ''}" data-learn-id="${m.id}" onclick="selectLearnModule('${m.id}')">
      <span class="t-icon">${m.icon}</span>
      <div class="t-info">
        <span class="t-name">${m.title}</span>
        <div class="t-meta">
          <span>${m.weightage}</span>
          <span class="studied-check">${state.studiedModules[m.id] ? '✓ Studied' : ''}</span>
        </div>
      </div>
    </button>
  `;

  list.innerHTML = `
    <div class="module-group-label">SECTION A — GENERAL (100 Marks)</div>
    ${secA.map(renderBtn).join('')}
    <div class="module-group-label">SECTION B — CS, BCA &amp; PEDAGOGY (100 Marks)</div>
    ${secB.map(renderBtn).join('')}
  `;
}

function selectLearnModule(moduleId) {
  state.learn.moduleId = moduleId;
  state.learn.searchQuery = '';
  const searchInput = document.getElementById('learn-search-input');
  if (searchInput) searchInput.value = '';

  const mod = (window.dsssbLearnModules || []).find(m => m.id === moduleId);
  if (!mod) return;

  document.querySelectorAll('[data-learn-id]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-learn-id') === moduleId);
  });

  document.getElementById('learn-section-badge').textContent = `Section ${mod.section} • ${mod.priority}`;
  document.getElementById('learn-weight-badge').textContent = mod.weightage;
  document.getElementById('learn-title').textContent = `${mod.icon} ${mod.title}`;
  document.getElementById('learn-subtitle').textContent = mod.subtitle;

  const studiedBtn = document.getElementById('btn-mark-studied');
  const isStudied = !!state.studiedModules[moduleId];
  studiedBtn.textContent = isStudied ? '✓ Studied' : '☐ Mark Studied';
  studiedBtn.classList.toggle('active', isStudied);

  renderLearnCards(mod.topics);
}

function renderLearnCards(topics) {
  const container = document.getElementById('learn-cards-container');
  if (!container) return;
  if (!topics.length) {
    container.innerHTML = `<div class="learn-card"><p>No matching study notes found.</p></div>`;
    return;
  }
  container.innerHTML = topics.map(t => `
    <article class="learn-card">
      <h3>${t.heading}</h3>
      <ul>
        ${t.points.map(pt => `<li>${pt}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

function filterLearnContent(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    selectLearnModule(state.learn.moduleId);
    return;
  }
  const matches = [];
  (window.dsssbLearnModules || []).forEach(mod => {
    mod.topics.forEach(t => {
      const hitPoints = t.points.filter(p => p.toLowerCase().includes(q));
      if (t.heading.toLowerCase().includes(q) || hitPoints.length) {
        matches.push({
          heading: `${mod.icon} ${mod.title} — ${t.heading}`,
          points: hitPoints.length ? hitPoints : t.points
        });
      }
    });
  });
  document.getElementById('learn-title').textContent = `Search Results for "${query}"`;
  document.getElementById('learn-subtitle').textContent = `Found ${matches.length} matching topic section(s) across all 15 modules.`;
  renderLearnCards(matches);
}

function toggleCurrentModuleStudied() {
  const id = state.learn.moduleId;
  state.studiedModules[id] = !state.studiedModules[id];
  localStorage.setItem('dsssb_studied', JSON.stringify(state.studiedModules));
  updateStudiedPill();
  renderLearnSidebar();
  selectLearnModule(id);
}

function updateStudiedPill() {
  const total = (window.dsssbLearnModules || []).length;
  const done = Object.values(state.studiedModules).filter(Boolean).length;
  const el = document.getElementById('studied-pill-text');
  if (el) el.textContent = `${done}/${total} Studied`;
}

function jumpToPracticeFromLearn() {
  selectPracticeModule(state.learn.moduleId);
  switchView('practice');
}

// ==========================================================================
// 2. TOPIC PRACTICE (UNBIASED SHUFFLED OPTIONS)
// ==========================================================================
function renderPracticeSidebar() {
  const list = document.getElementById('practice-module-list');
  const banks = getAllQuestionBanks();
  const modules = window.dsssbLearnModules || [];
  if (!list) return;

  let totalQ = 0;
  Object.values(banks).forEach(arr => totalQ += arr.length);
  const badge = document.getElementById('practice-total-badge');
  if (badge) badge.textContent = `${totalQ} MCQs`;

  const secA = modules.filter(m => m.section === 'A');
  const secB = modules.filter(m => m.section === 'B');

  const renderBtn = m => {
    const count = (banks[m.id] || []).length;
    return `
      <button class="topic-btn ${m.id === state.practice.moduleId ? 'active' : ''}" data-prac-id="${m.id}" onclick="selectPracticeModule('${m.id}')">
        <span class="t-icon">${m.icon}</span>
        <div class="t-info">
          <span class="t-name">${m.title}</span>
          <div class="t-meta"><span>${count} MCQs</span><span>${m.weightage}</span></div>
        </div>
      </button>
    `;
  };

  list.innerHTML = `
    <div class="module-group-label">SECTION A — GENERAL (100 MCQs)</div>
    ${secA.map(renderBtn).join('')}
    <div class="module-group-label">SECTION B — CS, BCA &amp; PEDAGOGY (200 MCQs)</div>
    ${secB.map(renderBtn).join('')}
  `;
}

function selectPracticeModule(moduleId) {
  const banks = getAllQuestionBanks();
  const raw = banks[moduleId] || [];
  const mod = (window.dsssbLearnModules || []).find(m => m.id === moduleId);

  state.practice.moduleId = moduleId;
  state.practice.questions = raw.map(q => cloneAndShuffleOptions({ ...q, moduleId, section: mod ? mod.section : 'B' }));
  state.practice.currentIndex = 0;
  state.practice.answers = {};

  document.querySelectorAll('[data-prac-id]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-prac-id') === moduleId);
  });

  if (mod) {
    document.getElementById('practice-topic-title').textContent = `${mod.icon} ${mod.title}`;
    document.getElementById('practice-topic-desc').textContent = mod.subtitle;
  }

  renderPracticeQuestion();
}

function shufflePracticeModule() {
  state.practice.questions = shuffleArray(state.practice.questions).map(cloneAndShuffleOptions);
  state.practice.currentIndex = 0;
  state.practice.answers = {};
  renderPracticeQuestion();
}

function renderPracticeQuestion() {
  const qs = state.practice.questions;
  const idx = state.practice.currentIndex;
  if (!qs.length) return;

  const q = qs[idx];
  document.getElementById('practice-curr-idx').textContent = idx + 1;
  document.getElementById('practice-total-idx').textContent = qs.length;
  document.getElementById('practice-q-subtopic').textContent = q.topic;
  document.getElementById('practice-q-section').textContent = `Section ${q.section}`;
  document.getElementById('practice-q-text').textContent = q.question;

  // Accuracy chip
  const answeredList = Object.values(state.practice.answers);
  const correctCount = answeredList.filter(a => a.isCorrect).length;
  document.getElementById('practice-accuracy-chip').textContent = `Score: ${correctCount}/${answeredList.length}`;

  // Star state
  const isStarred = state.bookmarks.some(b => b.id === q.id);
  const starBtn = document.getElementById('btn-star-practice');
  starBtn.textContent = isStarred ? '⭐ Starred' : '☆ Star';
  starBtn.classList.toggle('active', isStarred);

  // Options
  const ans = state.practice.answers[q.id];
  const keys = ['A', 'B', 'C', 'D'];
  const container = document.getElementById('practice-options-container');
  container.innerHTML = q.options.map((opt, i) => {
    let cls = 'option-item';
    if (ans) {
      cls += ' locked';
      if (i === q.correctIndex) cls += ' correct';
      else if (i === ans.selectedIdx) cls += ' incorrect';
    }
    return `
      <div class="${cls}" onclick="handlePracticeAnswer(${i})">
        <span class="option-key">${keys[i]}</span>
        <span>${opt}</span>
      </div>
    `;
  }).join('');

  // Explanation box
  const expBox = document.getElementById('practice-explanation-box');
  if (ans) {
    expBox.classList.remove('hidden');
    const st = document.getElementById('practice-exp-status');
    st.textContent = ans.isCorrect ? '✅ Correct (+1.00)' : `❌ Incorrect (−0.25) • Correct Answer: (${keys[q.correctIndex]})`;
    st.style.color = ans.isCorrect ? 'var(--status-success)' : 'var(--status-danger)';
    document.getElementById('practice-exp-text').textContent = q.explanation;
  } else {
    expBox.classList.add('hidden');
  }

  document.getElementById('btn-practice-prev').disabled = idx === 0;
  document.getElementById('btn-practice-next').disabled = idx === qs.length - 1;
}

function handlePracticeAnswer(optIdx) {
  const q = state.practice.questions[state.practice.currentIndex];
  if (!q || state.practice.answers[q.id]) return;

  state.practice.answers[q.id] = {
    selectedIdx: optIdx,
    isCorrect: optIdx === q.correctIndex
  };
  renderPracticeQuestion();
}

function navigatePractice(delta) {
  const next = state.practice.currentIndex + delta;
  if (next >= 0 && next < state.practice.questions.length) {
    state.practice.currentIndex = next;
    renderPracticeQuestion();
  }
}

// ==========================================================================
// 3. DSSSB CBT TEST SIMULATOR (WITH 20-Q SECTION LOCKOUT)
// ==========================================================================
function startCbtTest(mode) {
  const banks = getAllQuestionBanks();
  const sectionLock = document.getElementById('cbt-section-lock-toggle').checked;

  const buildBlock = (name, section, rawQs, limit) => {
    const picked = shuffleArray(rawQs).slice(0, limit).map(q => cloneAndShuffleOptions({ ...q, section, blockName: name }));
    return { name, section, questions: picked };
  };

  const blockDefs = [];
  let durationSec = 7200;

  if (mode === 'full') {
    durationSec = 120 * 60;
    blockDefs.push(buildBlock('Sec A: General Awareness', 'A', banks.secA_ga, 20));
    blockDefs.push(buildBlock('Sec A: Reasoning', 'A', banks.secA_reasoning, 20));
    blockDefs.push(buildBlock('Sec A: Numerical Ability', 'A', banks.secA_math, 20));
    blockDefs.push(buildBlock('Sec A: Hindi', 'A', banks.secA_hindi, 20));
    blockDefs.push(buildBlock('Sec A: English', 'A', banks.secA_english, 20));

    // Section B: 100 Qs sampled across all 10 Section B modules in 5 blocks of 20
    const secB1 = [...shuffleArray(banks.secB_prog).slice(0, 12), ...shuffleArray(banks.secB_dsa).slice(0, 8)];
    const secB2 = [...shuffleArray(banks.secB_dbms).slice(0, 11), ...shuffleArray(banks.secB_os).slice(0, 9)];
    const secB3 = [...shuffleArray(banks.secB_net).slice(0, 11), ...shuffleArray(banks.secB_coa).slice(0, 9)];
    const secB4 = [...shuffleArray(banks.secB_web).slice(0, 10), ...shuffleArray(banks.secB_se_cg).slice(0, 10)];
    const secB5 = [...shuffleArray(banks.secB_bca_support).slice(0, 8), ...shuffleArray(banks.secB_pedagogy).slice(0, 12)];

    blockDefs.push(buildBlock('Sec B-1: Prog & DSA', 'B', secB1, 20));
    blockDefs.push(buildBlock('Sec B-2: DBMS & OS', 'B', secB2, 20));
    blockDefs.push(buildBlock('Sec B-3: Networks & COA', 'B', secB3, 20));
    blockDefs.push(buildBlock('Sec B-4: Web, SE & CG', 'B', secB4, 20));
    blockDefs.push(buildBlock('Sec B-5: BCA & Pedagogy', 'B', secB5, 20));
  } else if (mode === 'secA') {
    durationSec = 60 * 60;
    blockDefs.push(buildBlock('General Awareness', 'A', banks.secA_ga, 20));
    blockDefs.push(buildBlock('Reasoning Ability', 'A', banks.secA_reasoning, 20));
    blockDefs.push(buildBlock('Numerical Ability', 'A', banks.secA_math, 20));
    blockDefs.push(buildBlock('Hindi Language', 'A', banks.secA_hindi, 20));
    blockDefs.push(buildBlock('English Language', 'A', banks.secA_english, 20));
  } else if (mode === 'secB') {
    durationSec = 60 * 60;
    const b1 = [...shuffleArray(banks.secB_prog).slice(0, 10), ...shuffleArray(banks.secB_dsa).slice(0, 10)];
    const b2 = [...shuffleArray(banks.secB_dbms).slice(0, 10), ...shuffleArray(banks.secB_os).slice(0, 10)];
    const b3 = [...shuffleArray(banks.secB_net).slice(0, 10), ...shuffleArray(banks.secB_coa).slice(0, 10)];
    const b4 = [...shuffleArray(banks.secB_web).slice(0, 10), ...shuffleArray(banks.secB_se_cg).slice(0, 10)];
    const b5 = [...shuffleArray(banks.secB_bca_support).slice(0, 10), ...shuffleArray(banks.secB_pedagogy).slice(0, 10)];
    blockDefs.push(buildBlock('B1: Prog & DSA', 'B', b1, 20));
    blockDefs.push(buildBlock('B2: DBMS & OS', 'B', b2, 20));
    blockDefs.push(buildBlock('B3: Networks & COA', 'B', b3, 20));
    blockDefs.push(buildBlock('B4: Web, SE & CG', 'B', b4, 20));
    blockDefs.push(buildBlock('B5: BCA & Pedagogy', 'B', b5, 20));
  } else {
    durationSec = 25 * 60;
    const allA = [...banks.secA_ga, ...banks.secA_reasoning, ...banks.secA_math, ...banks.secA_hindi, ...banks.secA_english];
    const allB = [...banks.secB_prog, ...banks.secB_dsa, ...banks.secB_dbms, ...banks.secB_os, ...banks.secB_net, ...banks.secB_coa, ...banks.secB_web, ...banks.secB_se_cg, ...banks.secB_bca_support, ...banks.secB_pedagogy];
    blockDefs.push(buildBlock('Speed Block 1: Sec A', 'A', allA, 20));
    blockDefs.push(buildBlock('Speed Block 2: Sec B', 'B', allB, 20));
  }

  // Flatten into ordered questions + block metadata
  const flatQs = [];
  const blocks = [];
  blockDefs.forEach((bd, bIdx) => {
    const start = flatQs.length;
    bd.questions.forEach(q => flatQs.push({ ...q, blockIdx: bIdx, blockName: bd.name, section: bd.section }));
    blocks.push({ idx: bIdx, name: bd.name, section: bd.section, start, end: flatQs.length - 1, locked: false });
  });

  clearInterval(state.cbt.timerId);
  state.cbt = {
    active: true,
    mode,
    sectionLock,
    questions: flatQs,
    blocks,
    activeBlock: 0,
    currentIndex: 0,
    responses: {},
    statuses: { 0: 'not-answered' },
    secondsLeft: durationSec,
    timerId: null,
    submitted: false
  };

  document.getElementById('cbt-lobby').classList.add('hidden');
  document.getElementById('cbt-results').classList.add('hidden');
  document.getElementById('cbt-active-wrapper').classList.remove('hidden');

  startCbtTimer();
  renderCbtInterface();
}

function startCbtTimer() {
  updateCbtTimerDisplay();
  state.cbt.timerId = setInterval(() => {
    state.cbt.secondsLeft--;
    updateCbtTimerDisplay();
    if (state.cbt.secondsLeft <= 0) {
      clearInterval(state.cbt.timerId);
      submitCbtExam();
    }
  }, 1000);
}

function updateCbtTimerDisplay() {
  const s = Math.max(0, state.cbt.secondsLeft);
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  const el = document.getElementById('cbt-timer-display');
  if (el) el.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function renderCbtInterface() {
  const cbt = state.cbt;
  const block = cbt.blocks[cbt.activeBlock];
  const q = cbt.questions[cbt.currentIndex];
  if (!q || !block) return;

  if (!cbt.statuses[cbt.currentIndex] || cbt.statuses[cbt.currentIndex] === 'not-visited') {
    cbt.statuses[cbt.currentIndex] = 'not-answered';
  }

  // Block tabs
  const tabsEl = document.getElementById('cbt-block-tabs');
  tabsEl.innerHTML = cbt.blocks.map(b => {
    const isCurrent = b.idx === cbt.activeBlock;
    const isLocked = cbt.sectionLock && (b.locked || b.idx > cbt.activeBlock);
    return `
      <button class="block-tab ${isCurrent ? 'active' : ''} ${b.locked ? 'locked' : ''}"
        ${isLocked ? 'disabled' : `onclick="cbtSwitchBlock(${b.idx})"`}>
        ${b.locked ? '🔒 ' : ''}${b.name}
      </button>
    `;
  }).join('');

  // Question area
  document.getElementById('cbt-q-number').textContent = `Question ${cbt.currentIndex + 1} of ${cbt.questions.length}`;
  document.getElementById('cbt-q-section-label').textContent = `${q.blockName} • ${q.topic}`;
  document.getElementById('cbt-q-text').textContent = q.question;

  const selected = cbt.responses[cbt.currentIndex];
  const keys = ['A', 'B', 'C', 'D'];
  document.getElementById('cbt-options-container').innerHTML = q.options.map((opt, i) => `
    <div class="option-item ${selected === i ? 'selected' : ''}" onclick="cbtSelectOption(${i})">
      <span class="option-key">${keys[i]}</span>
      <span>${opt}</span>
    </div>
  `).join('');

  // Prev button
  document.getElementById('btn-cbt-prev').disabled = cbt.currentIndex <= block.start;

  // Lock & Next Block button
  const lockBtn = document.getElementById('btn-lock-next-block');
  const hasNextBlock = cbt.activeBlock < cbt.blocks.length - 1;
  if (cbt.sectionLock && hasNextBlock) {
    lockBtn.classList.remove('hidden');
    lockBtn.textContent = `Submit Block ${cbt.activeBlock + 1} & Unlock Next →`;
  } else {
    lockBtn.classList.add('hidden');
  }

  // Palette for current block
  document.getElementById('cbt-block-title').textContent = `${block.name} (Q${block.start + 1}–Q${block.end + 1})`;
  const pal = document.getElementById('cbt-palette-grid');
  let palHtml = '';
  for (let i = block.start; i <= block.end; i++) {
    const st = cbt.statuses[i] || 'not-visited';
    palHtml += `
      <button class="pal-btn ${st} ${i === cbt.currentIndex ? 'current' : ''}" onclick="cbtJumpTo(${i})">
        ${i + 1}
      </button>
    `;
  }
  pal.innerHTML = palHtml;
}

function cbtSelectOption(optIdx) {
  const idx = state.cbt.currentIndex;
  state.cbt.responses[idx] = optIdx;
  const st = state.cbt.statuses[idx];
  state.cbt.statuses[idx] = (st === 'review' || st === 'ans-review') ? 'ans-review' : 'answered';
  renderCbtInterface();
}

function cbtClearResponse() {
  const idx = state.cbt.currentIndex;
  delete state.cbt.responses[idx];
  state.cbt.statuses[idx] = 'not-answered';
  renderCbtInterface();
}

function cbtMarkForReview() {
  const idx = state.cbt.currentIndex;
  const hasAns = state.cbt.responses[idx] !== undefined;
  state.cbt.statuses[idx] = hasAns ? 'ans-review' : 'review';
  cbtNavigate(1);
}

function cbtSaveAndNext() {
  const idx = state.cbt.currentIndex;
  if (state.cbt.responses[idx] !== undefined) {
    state.cbt.statuses[idx] = 'answered';
  }
  cbtNavigate(1);
}

function cbtNavigate(delta) {
  const cbt = state.cbt;
  const block = cbt.blocks[cbt.activeBlock];
  const target = cbt.currentIndex + delta;

  if (target >= block.start && target <= block.end) {
    cbt.currentIndex = target;
    renderCbtInterface();
  } else if (delta > 0 && target > block.end && cbt.activeBlock < cbt.blocks.length - 1) {
    if (cbt.sectionLock) {
      cbtLockAndAdvanceBlock();
    } else {
      cbt.activeBlock++;
      cbt.currentIndex = cbt.blocks[cbt.activeBlock].start;
      renderCbtInterface();
    }
  }
}

function cbtJumpTo(qIdx) {
  state.cbt.currentIndex = qIdx;
  renderCbtInterface();
}

function cbtSwitchBlock(bIdx) {
  if (state.cbt.sectionLock) return;
  state.cbt.activeBlock = bIdx;
  state.cbt.currentIndex = state.cbt.blocks[bIdx].start;
  renderCbtInterface();
}

function cbtLockAndAdvanceBlock() {
  const cbt = state.cbt;
  const currBlock = cbt.blocks[cbt.activeBlock];
  if (!confirm(`Lock "${currBlock.name}" and move to the next 20-question block? You CANNOT return to this block (DSSSB rule).`)) {
    return;
  }
  currBlock.locked = true;
  cbt.activeBlock++;
  cbt.currentIndex = cbt.blocks[cbt.activeBlock].start;
  renderCbtInterface();
}

function confirmSubmitCbt() {
  const attempted = Object.keys(state.cbt.responses).length;
  const total = state.cbt.questions.length;
  if (confirm(`Submit your exam now?\nAttempted: ${attempted} / ${total}\nUnattempted: ${total - attempted}`)) {
    submitCbtExam();
  }
}

function submitCbtExam() {
  clearInterval(state.cbt.timerId);
  state.cbt.submitted = true;
  state.cbt.active = false;

  document.getElementById('cbt-active-wrapper').classList.add('hidden');
  document.getElementById('cbt-results').classList.remove('hidden');

  const cbt = state.cbt;
  let correct = 0, wrong = 0, unattempted = 0;
  let secAScore = 0, secATotal = 0;
  let secBScore = 0, secBTotal = 0;

  const blockStats = cbt.blocks.map(b => ({
    name: b.name,
    section: b.section,
    total: b.end - b.start + 1,
    correct: 0,
    wrong: 0,
    score: 0
  }));

  cbt.questions.forEach((q, idx) => {
    const resp = cbt.responses[idx];
    const bStat = blockStats[q.blockIdx];
    if (q.section === 'A') secATotal++;
    else secBTotal++;

    if (resp === undefined) {
      unattempted++;
    } else if (resp === q.correctIndex) {
      correct++;
      bStat.correct++;
      bStat.score += 1;
      if (q.section === 'A') secAScore += 1;
      else secBScore += 1;
    } else {
      wrong++;
      bStat.wrong++;
      bStat.score -= 0.25;
      if (q.section === 'A') secAScore -= 0.25;
      else secBScore -= 0.25;
    }
  });

  const netScore = correct - (wrong * 0.25);
  const accuracy = (correct + wrong) ? Math.round((correct / (correct + wrong)) * 100) : 0;
  const secBPct = secBTotal ? ((secBScore / secBTotal) * 100).toFixed(1) : 'N/A';
  const secBPass = secBTotal === 0 ? true : (secBScore / secBTotal) >= 0.40;

  document.getElementById('cbt-results-summary').innerHTML = `
    <div class="stat-card">
      <div class="stat-lbl">Net Score</div>
      <div class="stat-val" style="color:var(--accent-secondary)">${netScore.toFixed(2)} / ${cbt.questions.length}</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">Correct / Wrong</div>
      <div class="stat-val"><span style="color:var(--status-success)">${correct}</span> / <span style="color:var(--status-danger)">${wrong}</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">Negative Penalty</div>
      <div class="stat-val" style="color:var(--status-danger)">−${(wrong * 0.25).toFixed(2)}</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">Accuracy</div>
      <div class="stat-val">${accuracy}%</div>
    </div>
    <div class="stat-card">
      <div class="stat-lbl">Sec B 40% UR Rule</div>
      <div class="stat-val" style="color:${secBPass ? 'var(--status-success)' : 'var(--status-danger)'}">
        ${secBTotal ? `${secBPct}% (${secBPass ? 'PASS' : 'FAIL'})` : 'N/A'}
      </div>
    </div>
  `;

  document.getElementById('cbt-results-breakdown').innerHTML = `
    <h4 style="margin-bottom:0.75rem;">Block-Wise Breakdown</h4>
    <table class="breakdown-table">
      <thead>
        <tr><th>Block / Subject</th><th>Total</th><th>Correct</th><th>Wrong</th><th>Net Marks</th></tr>
      </thead>
      <tbody>
        ${blockStats.map(b => `
          <tr>
            <td><strong>${b.name}</strong></td>
            <td>${b.total}</td>
            <td style="color:var(--status-success)">${b.correct}</td>
            <td style="color:var(--status-danger)">${b.wrong}</td>
            <td><strong>${b.score.toFixed(2)}</strong></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  filterCbtReview('all');
}

function filterCbtReview(mode) {
  const cbt = state.cbt;
  const keys = ['A', 'B', 'C', 'D'];
  const container = document.getElementById('cbt-results-review');

  const items = cbt.questions.map((q, idx) => ({ q, idx, resp: cbt.responses[idx] })).filter(item => {
    if (mode === 'wrong') return item.resp !== undefined && item.resp !== item.q.correctIndex;
    if (mode === 'unattempted') return item.resp === undefined;
    return true;
  });

  if (!items.length) {
    container.innerHTML = `<div class="review-card"><p>No questions match this filter.</p></div>`;
    return;
  }

  container.innerHTML = items.map(({ q, idx, resp }) => {
    const isCorrect = resp === q.correctIndex;
    const statusText = resp === undefined ? '⚪ Unattempted (0)' : (isCorrect ? '✅ Correct (+1.00)' : '❌ Incorrect (−0.25)');
    const statusColor = resp === undefined ? 'var(--text-muted)' : (isCorrect ? 'var(--status-success)' : 'var(--status-danger)');
    return `
      <div class="review-card">
        <div class="question-meta">
          <span class="pill-tag">Q${idx + 1}</span>
          <span class="pill-tag accent">${q.blockName} • ${q.topic}</span>
          <strong style="color:${statusColor};font-size:0.82rem;">${statusText}</strong>
        </div>
        <div class="question-text" style="font-size:0.96rem;">${q.question}</div>
        <div style="font-size:0.86rem;color:var(--text-muted);">
          <div><strong>Your Answer:</strong> ${resp !== undefined ? `(${keys[resp]}) ${q.options[resp]}` : 'Not Attempted'}</div>
          <div style="color:var(--status-success)"><strong>Correct Answer:</strong> (${keys[q.correctIndex]}) ${q.options[q.correctIndex]}</div>
        </div>
        <div class="exp-body" style="padding-top:0.4rem;border-top:1px solid var(--border-subtle);">
          <strong>Explanation:</strong> ${q.explanation}
        </div>
      </div>
    `;
  }).join('');
}

function resetCbtToLobby() {
  clearInterval(state.cbt.timerId);
  state.cbt.active = false;
  state.cbt.submitted = false;
  document.getElementById('cbt-active-wrapper').classList.add('hidden');
  document.getElementById('cbt-results').classList.add('hidden');
  document.getElementById('cbt-lobby').classList.remove('hidden');
}

// ==========================================================================
// 4. STARRED BOOKMARKS
// ==========================================================================
function toggleStarPracticeQuestion() {
  const q = state.practice.questions[state.practice.currentIndex];
  if (!q) return;
  const idx = state.bookmarks.findIndex(b => b.id === q.id);
  if (idx > -1) state.bookmarks.splice(idx, 1);
  else state.bookmarks.push(q);

  localStorage.setItem('dsssb_bookmarks', JSON.stringify(state.bookmarks));
  updateBookmarkBadge();
  renderPracticeQuestion();
}

function updateBookmarkBadge() {
  const el = document.getElementById('bookmark-count');
  if (el) el.textContent = state.bookmarks.length;
}

function renderBookmarks() {
  const list = document.getElementById('bookmarks-list');
  if (!list) return;
  if (!state.bookmarks.length) {
    list.innerHTML = `<div class="review-card"><p style="color:var(--text-muted)">No starred questions yet. Click "☆ Star" during Topic Practice to save tricky MCQs here.</p></div>`;
    return;
  }
  const keys = ['A', 'B', 'C', 'D'];
  list.innerHTML = state.bookmarks.map((q, i) => `
    <div class="review-card">
      <div class="question-meta">
        <span class="pill-tag">Starred #${i + 1}</span>
        <span class="pill-tag accent">${q.topic}</span>
        <button class="action-btn danger" style="margin-left:auto;padding:0.25rem 0.6rem;font-size:0.74rem;" onclick="removeBookmark('${q.id}')">Remove</button>
      </div>
      <div class="question-text" style="font-size:0.98rem;">${q.question}</div>
      <div style="color:var(--status-success);font-size:0.88rem;"><strong>Answer:</strong> (${keys[q.correctIndex]}) ${q.options[q.correctIndex]}</div>
      <div class="exp-body">${q.explanation}</div>
    </div>
  `).join('');
}

function removeBookmark(id) {
  state.bookmarks = state.bookmarks.filter(b => b.id !== id);
  localStorage.setItem('dsssb_bookmarks', JSON.stringify(state.bookmarks));
  updateBookmarkBadge();
  renderBookmarks();
}

function clearAllBookmarks() {
  if (!state.bookmarks.length) return;
  if (!confirm('Remove all starred questions?')) return;
  state.bookmarks = [];
  localStorage.setItem('dsssb_bookmarks', '[]');
  updateBookmarkBadge();
  renderBookmarks();
}

// ==========================================================================
// 5. KEYBOARD SHORTCUTS (PRACTICE MODE)
// ==========================================================================
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    if (state.currentView !== 'practice') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const k = e.key;
    if (k >= '1' && k <= '4') handlePracticeAnswer(parseInt(k, 10) - 1);
    else if (k === 'ArrowRight' || k === 'n' || k === 'N') navigatePractice(1);
    else if (k === 'ArrowLeft' || k === 'p' || k === 'P') navigatePractice(-1);
    else if (k === 's' || k === 'S') toggleStarPracticeQuestion();
  });
}
