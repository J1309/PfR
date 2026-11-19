# Prep Studio 🎯 | Modular Exam & Interview Preparation Platform

A high-performance, offline-first web platform for competitive examination drills, IBPS-style CBT simulations, and technical interview preparation.

---

## 🌟 Current Status: Clean Slate

All previous datasets for **PFRDA Grade A (Phase 1)** and **CGPDTM (Networking & Cybersecurity Interview)** have been completed and cleared.

The repository is now reset to a clean, modular starter state ready to receive your next exam curriculum, question banks, or interview topics.

---

## 🛠️ Platform Features Ready for Reuse

1. **🎯 Interactive Drill Mode (Active Recall):**
   * Multi-choice questions with instant validation, explanations, and trap callouts.
   * Full keyboard navigation support (1–5 for options, N for Next, P for Previous, S to Star).
2. **⚡ Authentic CBT Exam Simulator:**
   * Timed section simulation with full IBPS-style palette (Answered, Not Answered, Marked for Review).
   * Penalty engine calculating negative marking and aggregate scores.
3. **📖 High-Yield Cheatsheets:**
   * Side-by-side comparison tables, 60-second flash numbers, and mnemonics.
   * Real-time search across topics.
4. **🎙️ Verbal Interview Flashcard Studio:**
   * 60-second spoken answer scripts, keyword-dropping checklists, and interviewer trap defenses.
   * Interactive troubleshooting ticket simulations with step-by-step diagnostic feedback.

---

## 🚀 How to Add a New Exam Track

1. **Add Data File:**
   Create a new file in `js/data/yourExamData.js` containing your questions, syllabus modules, or cheatsheets.
2. **Include in HTML:**
   Add `<script src="js/data/yourExamData.js"></script>` in `index.html` before `js/app.js`.
3. **Run Locally:**
   Simply open `index.html` in any browser or launch a local server:
   ```bash
   python -m http.server 3000
   ```
   and navigate to `http://localhost:3000`.

---

## 📂 Project Structure

```
├── index.html                           # Clean starter landing page
├── styles.css                           # Polished design system (Dark & Light themes)
├── README.md                            # Documentation
└── js/
    ├── app.js                           # Core application engine
    └── data/                            # Target directory for new exam question banks
```
