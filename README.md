# PFRDA Grade A (Assistant Manager) Exam Readiness Platform 🎯

A high-performance, offline-first exam readiness and CBT (Computer-Based Test) simulation platform built for candidates preparing for the **PFRDA Grade A Assistant Manager (Phase 1)** examination.

---

## 🌟 Key Features

### 1. 🎯 Learn & Drill Mode (Active Recall)
* **Paper 2 Prioritized Topic Architecture:**
  | Priority | Topic | Key Focus |
  |---|---|---|
  | 🔴 **Highest** | **Pension Sector & PFRDA Architecture** | PFRDA Act 2013, NPS Tier 1 & 2, APY, UPS 2024, NPS Vatsalya, CRA, PFM |
  | 🔴 **High** | **Management & Leadership** | Maslow, Herzberg, McGregor, Vroom, Blake & Mouton, Fayol, Taylor |
  | 🔴 **High** | **Finance & Financial System** | Money Market, Capital Market, RBI, SEBI, IFSCA, Monetary Policy |
  | 🟡 **Medium-High** | **Economics, Budget & Economic Survey** | Macroeconomics, Union Budget 2024-25, Deficits, Inflation, Survey 2024 |
  | 🟡 **Medium** | **Companies Act 2013** | Company Types (OPC/Pvt/Public), Board Meetings, CSR Sec 135 |
  | 🟡 **Medium** | **AI / ML & FinTech** | ML Types, Neural Nets, Algo Trading, Robo-Advisory, IndiaAI Mission |
  | 🟠 **Medium** | **Commerce & Costing Essentials** | Golden Rules, Trial Balance, Break-Even Analysis, P/V Ratio, Marginal Costing |
  | 🟢 **Quick Revision** | **Media, Marketing & Communication** | Kotler 4Ps & 7Ps, STP, Push vs Pull, IMC, Digital Marketing, ASCI |
* **Paper 1 (Aptitude & Awareness):**
  * Quantitative Aptitude (Speed Math, Series, %, Profit/Loss)
  * Reasoning Ability (Logic, Syllogisms, Inequalities, Puzzles)
  * English Language (10 Golden Grammar Rules, Error Spotting)
  * Financial & Pension General Awareness (Union Budget, Regulators, Social Schemes)
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
  * 📊 **Side-by-Side Comparison Tables:** NPS Tier-I vs Tier-II, Motivation Theorists, Deficit Hierarchy, ML Paradigms, Marketing 4Ps vs 7Ps.
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
        ├── pensionQuestions.js          # 🔴 Highest: PFRDA Act, NPS, APY, UPS, Vatsalya
        ├── managementQuestions.js       # 🔴 High: Motivation, Leadership, Fayol & Taylor
        ├── financeQuestions.js          # 🔴 High: Money Market, RBI, Banking, Financial System
        ├── economicsQuestions.js        # 🟡 Med-High: Macroeconomics, Union Budget, Survey
        ├── companiesEconomicsQuestions.js # 🟡 Med: Companies Act 2013 (Directors, CSR, Meetings)
        ├── aiMlQuestions.js             # 🟡 Med: AI/ML, Algo Trading, FinTech, IndiaAI Mission
        ├── commerceCostingQuestions.js  # 🟠 Med: Accounting Standards, Marginal Costing, BEP
        ├── mediaMarketingQuestions.js   # 🟢 Quick Rev: Kotler 4Ps/7Ps, STP, IMC, ASCI
        ├── paper1Questions.js           # Quant, Reasoning, English, Financial GA
        └── cheatSheets.js               # Comprehensive visual revision cheat sheets
```
