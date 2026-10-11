// PFRDA Grade A - Commerce, Accounting & Costing Essentials Question Bank
// High-Yield Questions on Accounting Standards, Golden Rules, Marginal Costing, and Formulas

const commerceCostingQuestions = [
  {
    id: "com_01",
    source: "Golden Rules of Accounting",
    difficulty: "Foundational",
    question: "Under double-entry bookkeeping, what is the golden rule of accounting for a 'Nominal Account' (such as Rent, Salaries, Commission)?",
    options: [
      "Debit what comes in, Credit what goes out",
      "Debit the receiver, Credit the giver",
      "Debit all expenses and losses, Credit all incomes and gains",
      "Debit assets, Credit liabilities",
      "Debit capital, Credit drawings"
    ],
    correctIndex: 2,
    explanation: "Golden Rules of Accounting: 1. Real Account: Debit what comes in, Credit what goes out. 2. Personal Account: Debit the receiver, Credit the giver. 3. Nominal Account: Debit all expenses and losses, Credit all incomes and gains.",
    takeaway: "Nominal Account Rule: Debit all expenses & losses, Credit all incomes & gains."
  },
  {
    id: "com_02",
    source: "Accounting Conventions",
    difficulty: "High Yield",
    question: "Which accounting convention requires that accountants must 'anticipate no profits, but provide for all possible losses' (e.g., creating a provision for doubtful debts)?",
    options: [
      "Convention of Materiality",
      "Convention of Consistency",
      "Convention of Prudence (Conservatism)",
      "Convention of Full Disclosure",
      "Accrual Concept"
    ],
    correctIndex: 2,
    explanation: "The Prudence (or Conservatism) convention states that revenues and profits are not anticipated or recorded until realized, whereas all potential losses and liabilities are provided for immediately.",
    takeaway: "Provide for all losses, anticipate no profits = Prudence / Conservatism convention."
  },
  {
    id: "com_03",
    source: "Accounting Standards (AS)",
    difficulty: "High Yield",
    question: "According to Accounting Standard 2 (AS 2) / Ind AS 2, how should inventories be valued in the balance sheet?",
    options: [
      "At historical cost only",
      "At net realizable value (market price) only",
      "At the lower of Cost and Net Realizable Value (NRV)",
      "At replacement cost",
      "At standard cost plus markup"
    ],
    correctIndex: 2,
    explanation: "Under AS 2, inventory must be valued at the 'lower of Cost and Net Realizable Value (NRV)', following the fundamental principle of prudence.",
    takeaway: "AS 2 Inventory Valuation = Lower of Cost and Net Realizable Value (NRV)."
  },
  {
    id: "com_04",
    source: "Cash Flow Statement (AS 3)",
    difficulty: "High Yield",
    question: "Under AS 3 / Ind AS 7, into which three distinct categories is a Cash Flow Statement classified?",
    options: [
      "Current, Non-Current, and Contingent activities",
      "Operating, Investing, and Financing activities",
      "Trading, Manufacturing, and Balance Sheet activities",
      "Revenue, Capital, and Deferred activities",
      "Direct, Indirect, and Neutral activities"
    ],
    correctIndex: 1,
    explanation: "Cash Flow Statement segregates cash flows into: 1. Operating Activities (primary revenue-producing activities), 2. Investing Activities (acquisition/disposal of long-term assets), 3. Financing Activities (changes in equity size and borrowings).",
    takeaway: "Cash Flow Statement (AS 3) = Operating, Investing, and Financing activities."
  },
  {
    id: "com_05",
    source: "Marginal Costing Formulas",
    difficulty: "High Yield",
    question: "In Marginal Costing, how is 'Contribution' mathematically calculated?",
    options: [
      "Sales minus Total Cost",
      "Sales minus Variable Cost",
      "Fixed Cost plus Profit",
      "Both (b) and (c)",
      "Gross Profit minus Operating Expenses"
    ],
    correctIndex: 3,
    explanation: "Contribution = Sales − Variable Cost. Also, since Total Sales = Variable Cost + Fixed Cost + Profit, Contribution is also equal to Fixed Cost + Profit.",
    takeaway: "Contribution = Sales − Variable Cost = Fixed Cost + Profit."
  },
  {
    id: "com_06",
    source: "Marginal Costing Formulas",
    difficulty: "High Yield",
    question: "What is the formula for the Break-Even Point (BEP in units) where an organization incurs neither profit nor loss?",
    options: [
      "Fixed Cost ÷ Contribution per unit",
      "Fixed Cost ÷ Variable Cost per unit",
      "Total Sales ÷ Fixed Cost",
      "Profit ÷ P/V Ratio",
      "Variable Cost ÷ Selling Price"
    ],
    correctIndex: 0,
    explanation: "Break-Even Point in quantity/units = Fixed Cost / Contribution per unit. At this output level, total contribution exactly covers total fixed costs.",
    takeaway: "Break-Even Point (Units) = Fixed Cost ÷ Contribution per unit."
  },
  {
    id: "com_07",
    source: "Marginal Costing Formulas",
    difficulty: "High Yield",
    question: "What does the 'Margin of Safety' (MOS) represent in cost accounting?",
    options: [
      "The buffer between planned sales and actual production",
      "The excess of actual sales over break-even sales (Actual Sales − BEP Sales)",
      "The maximum credit limit allowed to customers",
      "The minimum inventory required to avoid stockouts",
      "The difference between total assets and total liabilities"
    ],
    correctIndex: 1,
    explanation: "Margin of Safety (MOS) = Actual Sales − Break-Even Sales. It shows how much sales can drop before the business begins making a loss. It can also be computed as Profit / (P/V Ratio).",
    takeaway: "Margin of Safety (MOS) = Actual Sales − Break-Even Sales = Profit ÷ P/V Ratio."
  },
  {
    id: "com_08",
    source: "Cost Concepts",
    difficulty: "Conceptual",
    question: "A historical expenditure that has already been incurred in the past and cannot be recovered or altered by any future managerial decision is known as a:",
    options: [
      "Opportunity Cost",
      "Sunk Cost",
      "Marginal Cost",
      "Replacement Cost",
      "Differential Cost"
    ],
    correctIndex: 1,
    explanation: "A Sunk Cost is a past expenditure that cannot be changed by future decisions and is therefore irrelevant for decision-making (e.g., past R&D expense on an abandoned project).",
    takeaway: "Already incurred, unrecoverable past cost = Sunk Cost (irrelevant for future decisions)."
  },
  {
    id: "com_09",
    source: "Cost Concepts",
    difficulty: "Foundational",
    question: "What is 'Opportunity Cost'?",
    options: [
      "The cost of seizing an unexpected business discount",
      "The value or benefit foregone of the next best alternative course of action",
      "The accounting cost recorded in the general ledger",
      "The overtime pay disbursed to production workers",
      "The cost of advertising in prime-time media"
    ],
    correctIndex: 1,
    explanation: "Opportunity cost represents the potential benefits an individual, investor, or business misses out on when choosing one alternative over another.",
    takeaway: "Opportunity Cost = Value of the next best alternative foregone."
  },
  {
    id: "com_10",
    source: "Accounting Errors",
    difficulty: "High Yield",
    question: "If an entry is made in violation of fundamental accounting principles (such as treating capital expenditure as revenue expenditure, e.g., debiting purchase of machinery to Repairs Account), it is an:",
    options: [
      "Error of Omission",
      "Error of Commission",
      "Error of Principle",
      "Compensating Error",
      "Transposition Error"
    ],
    correctIndex: 2,
    explanation: "An Error of Principle arises when transactions are recorded in disregard of fundamental accounting principles—such as failing to differentiate between capital and revenue expenditure.",
    takeaway: "Treating capital expenditure as revenue expenditure = Error of Principle."
  },
  {
    id: "com_11",
    source: "Standard Costing",
    difficulty: "Moderate",
    question: "In Standard Costing variance analysis, what is the formula for 'Material Cost Variance' (MCV)?",
    options: [
      "Standard Cost minus Actual Cost [ (SQ × SP) − (AQ × AP) ]",
      "Actual Quantity × (Standard Price − Actual Price)",
      "Standard Price × (Standard Quantity − Actual Quantity)",
      "Actual Cost minus Standard Cost",
      "Fixed Overhead minus Actual Overhead"
    ],
    correctIndex: 0,
    explanation: "Material Cost Variance (MCV) is the difference between the standard cost of direct materials specified for actual output and the actual cost incurred: MCV = (Standard Quantity × Standard Price) − (Actual Quantity × Actual Price).",
    takeaway: "Material Cost Variance = Standard Cost − Actual Cost. (Favorable if Standard > Actual)."
  },
  {
    id: "com_12",
    source: "Accounting Conventions",
    difficulty: "High Yield",
    question: "Which accounting concept dictates that a business is assumed to operate indefinitely and will not be liquidated in the near future?",
    options: [
      "Entity Concept",
      "Going Concern Concept",
      "Periodicity Concept",
      "Cost Concept",
      "Dual Aspect Concept"
    ],
    correctIndex: 1,
    explanation: "The Going Concern assumption presumes that the enterprise will continue in operational existence for the foreseeable future, providing the basis for depreciating assets over their useful life rather than valuing them at distress liquidation value.",
    takeaway: "Business will continue indefinitely = Going Concern Concept."
  },
  {
    id: "com_13",
    source: "Financial Statements",
    difficulty: "Foundational",
    question: "Under the Fundamental Accounting Equation, what does 'Owner's Equity' equal?",
    options: [
      "Assets + Liabilities",
      "Assets − Liabilities",
      "Liabilities − Assets",
      "Revenue − Expenses",
      "Current Assets − Current Liabilities"
    ],
    correctIndex: 1,
    explanation: "Fundamental Balance Sheet Equation: Assets = Liabilities + Capital (Owner's Equity). Therefore, Owner's Equity = Assets − Liabilities.",
    takeaway: "Accounting Equation: Assets = Liabilities + Equity (or Equity = Assets − Liabilities)."
  },
  {
    id: "com_14",
    source: "Depreciation Methods",
    difficulty: "Moderate",
    question: "Under which method of depreciation does the annual depreciation expense decline progressively each year over the useful life of the asset?",
    options: [
      "Straight Line Method (SLM)",
      "Written Down Value Method (WDV) / Reducing Balance Method",
      "Annuity Method",
      "Sinking Fund Method",
      "Units of Production Method"
    ],
    correctIndex: 1,
    explanation: "Under the Written Down Value (WDV) or Diminishing Balance method, depreciation is computed on the beginning book value of each year, resulting in decreasing depreciation expense over time.",
    takeaway: "Decreasing annual depreciation = Written Down Value (WDV) method."
  },
  {
    id: "com_15",
    source: "Marginal Costing",
    difficulty: "High Yield",
    question: "If Selling Price per unit is ₹100, Variable Cost per unit is ₹60, and Fixed Costs are ₹2,00,000, what is the Profit-Volume (P/V) Ratio?",
    options: [
      "25%",
      "40%",
      "50%",
      "60%",
      "66.67%"
    ],
    correctIndex: 1,
    explanation: "Contribution per unit = Selling Price − Variable Cost = ₹100 − ₹60 = ₹40. P/V Ratio = (Contribution / Selling Price) × 100 = (40 / 100) × 100 = 40%.",
    takeaway: "P/V Ratio = (Contribution ÷ Sales) × 100 = (40 ÷ 100) × 100 = 40%."
  }
];

if (typeof window !== 'undefined') {
  window.commerceCostingQuestions = commerceCostingQuestions;
}
