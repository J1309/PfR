# PFRDA Grade A (Assistant Manager) Exam Readiness Platform 🎯

A high-performance, offline-first exam readiness and CBT (Computer-Based Test) simulation platform built for candidates preparing for the **PFRDA Grade A Assistant Manager (Phase 1)** examination.

---

## 🌟 Key Features

### 1. 🎯 Learn & Drill Mode (Active Recall)
* **Complete Syllabus Coverage:**
  * **Paper 2 (Domain Knowledge):** Pension Sector & PFRDA Act 2013, Management & Leadership, Finance & Financial Markets, Companies Act 2013, Commerce & Costing Essentials, Macroeconomics.
  * **Paper 1 (Aptitude & Awareness):** Quantitative Aptitude (Speed Math), Reasoning Ability (Logic & Puzzles), English Language (10 Golden Grammar Rules), Financial & Pension General Awareness.
* **Instant Explanations:** Immediate answer validation with comprehensive concept explanations, traps to avoid, and 1-line memory takeaways.
* **Keyboard Navigation:** Rapid drills using keys `1`–`5` for options, `N` for next, `P` for previous, and `S` to star.

### 2. ⚡ Authentic IBPS Exam Simulator
* Replicates the exact **IBPS Computer-Based Test (CBT)** interface:
  * Color-coded question palette (Answered, Not Answered, Not Visited, Marked for Review, Answered & Marked for Review).
  * Real-time countdown timer.
  * Choice of **Paper 1 Speed Mock** (60 Mins | 100 Marks), **Paper 2 Master Test** (40 Mins | 100 Marks), or **Combined Phase 1 Mock** (100 Mins | 200 Marks).
  * **Penalty Engine & Cut-Off Predictor:** Factoring in the official -0.25 negative marking penalty to track marks lost to guessing and predict cutoff clearance.

### 3. 📖 High-Yield Cheat Sheets Hub
* Visual, structured revision notes:
  * ⚡ **60-Second Flash Numbers:** Quick numbers at a glance.
  * 📊 **Side-by-Side Comparison Tables:** NPS Tier-I vs Tier-II, Theory X vs Theory Y, Money Market Instruments, Company Forms.
  * ⚠️ **Classic IBPS Traps:** Highlighting subtle tricks examiners use in multiple-choice options.
  * 💡 **Memory Mnemonics:** Easy mental shortcuts.
  * 🔍 **Real-Time Concept Search:** Search across all cheat sheets instantly.

### 4. ⭐ Starred Revision Deck
* Bookmark tricky questions with one click to build a customized last-minute revision deck saved to `localStorage`.

---

## 🚀 How to Run Locally

This application has zero external dependencies.

### Option 1: Direct File Open
Simply double-click `index.html` in your file explorer to open it directly in any modern browser (Chrome, Edge, Firefox, Brave, Safari).

### Option 2: Lightweight Local Server
```bash
# Python
python -m http.server 3000

# Node.js
npx serve .
```
Then navigate to `http://localhost:3000`.

---

## 📂 Project Structure

```
├── index.html                           # Main application layout and views
├── styles.css                           # Design system (Dark Mode & IBPS CBT layout)
├── README.md                            # Documentation
└── js/
    ├── app.js                           # Core application engine & CBT simulation logic
    └── data/
        ├── pensionQuestions.js          # PFRDA Act, NPS, APY, CRAs, PFMs
        ├── managementQuestions.js       # Motivation, Leadership, Fayol & Taylor
        ├── financeQuestions.js          # Money Market, RBI, Banking, Financial System
        ├── companiesEconomicsQuestions.js # Companies Act 2013, Macroeconomics, FinTech
        ├── commerceCostingQuestions.js  # Accounting Standards, Marginal Costing, BEP
        ├── paper1Questions.js           # Quant, Reasoning, English, Financial GA
        └── cheatSheets.js               # Comprehensive 1-page visual revision notes
```
