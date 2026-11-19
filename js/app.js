// Prep Studio — Minimal Modular Application Engine

// Global State
const state = {
  theme: localStorage.getItem('prep_studio_theme') || 'dark',
  activeTrack: null
};

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  console.log('Prep Studio initialized: Ready for new exam tracks.');
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('prep_studio_theme') || 'dark';
  applyTheme(savedTheme);
}

function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

function applyTheme(themeName) {
  state.theme = themeName;
  localStorage.setItem('prep_studio_theme', themeName);
  
  if (themeName === 'light') {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
  } else {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
  }
}
