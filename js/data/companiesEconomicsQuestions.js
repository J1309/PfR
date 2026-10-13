// PFRDA Grade A - Companies Act 2013 Question Bank
// Priority: 🟡 Medium

const companiesActQuestions = [
  {
    id: "co_01",
    source: "Companies Act 2013",
    difficulty: "High Yield",
    question: "Under the Companies Act, 2013, what is the minimum and maximum number of members permitted for a Private Company (excluding employee shareholders)?",
    options: [
      "Minimum 1, Maximum 50",
      "Minimum 2, Maximum 200",
      "Minimum 7, Maximum unlimited",
      "Minimum 2, Maximum 50",
      "Minimum 3, Maximum 100"
    ],
    correctIndex: 1,
    explanation: "Under Section 2(68) of the Companies Act, 2013, a private company must have a minimum of 2 members and can have a maximum of 200 members (excluding present and past employees).",
    takeaway: "Private Company: Min 2 members, Max 200 members. (Public Company: Min 7, Max Unlimited)."
  },
  {
    id: "co_02",
    source: "Companies Act 2013",
    difficulty: "High Yield",
    question: "What is the minimum number of directors required for a One Person Company (OPC), Private Company, and Public Company respectively?",
    options: [
      "1, 2, and 3",
      "1, 2, and 5",
      "1, 3, and 7",
      "2, 3, and 5",
      "1, 1, and 3"
    ],
    correctIndex: 0,
    explanation: "Under Section 149(1) of the Companies Act, 2013: A One Person Company requires at least 1 director; A Private Company requires at least 2 directors; A Public Company requires at least 3 directors. (Maximum limit is 15 directors, expandable by special resolution).",
    takeaway: "Minimum Directors: OPC = 1, Private = 2, Public = 3. (Max = 15 directors)."
  },
  {
    id: "co_03",
    source: "Companies Act 2013",
    difficulty: "High Yield",
    question: "Under Section 135 of the Companies Act, 2013, which companies must constitute a Corporate Social Responsibility (CSR) Committee and spend at least 2% of their average net profits?",
    options: [
      "Any company with paid-up capital of ₹50 Crore",
      "Companies with Net Worth ≥ ₹500 Cr OR Turnover ≥ ₹1,000 Cr OR Net Profit ≥ ₹5 Cr in the immediately preceding financial year",
      "All public limited companies without exception",
      "Companies with more than 1,000 employees",
      "Only central public sector enterprises"
    ],
    correctIndex: 1,
    explanation: "CSR is mandatory under Section 135 for companies having: Net Worth ≥ ₹500 Crore, OR Turnover ≥ ₹1,000 Crore, OR Net Profit ≥ ₹5 Crore during the immediately preceding fiscal year. Eligible firms must spend at least 2% of average net profits of preceding 3 financial years.",
    takeaway: "CSR Thresholds: Net Worth ≥ ₹500 Cr | Turnover ≥ ₹1,000 Cr | Net Profit ≥ ₹5 Cr. Spend = 2% of 3-year avg profits."
  },
  {
    id: "co_04",
    source: "Companies Act 2013",
    difficulty: "High Yield",
    question: "According to the Companies Act, 2013, what is the maximum permissible gap between two consecutive meetings of the Board of Directors?",
    options: [
      "60 days",
      "90 days",
      "120 days",
      "180 days",
      "30 days"
    ],
    correctIndex: 2,
    explanation: "Under Section 173(1), every company shall hold a minimum of four meetings of its Board of Directors every year in such a manner that not more than 120 days shall intervene between two consecutive meetings.",
    takeaway: "Board Meetings: Minimum 4 meetings per year; Maximum gap between meetings = 120 days."
  },
  {
    id: "co_05",
    source: "Companies Act 2013",
    difficulty: "High Yield",
    question: "What is the maximum permissible interval between two Annual General Meetings (AGMs) of a company?",
    options: [
      "12 months",
      "15 months",
      "18 months",
      "9 months",
      "24 months"
    ],
    correctIndex: 1,
    explanation: "Under Section 96(1), an AGM must be held every calendar year within 6 months from the closure of the financial year, and not more than 15 months shall elapse between the date of one AGM and that of the next.",
    takeaway: "AGM Rule: Every calendar year; Max gap between two AGMs = 15 months."
  },
  {
    id: "co_06",
    source: "Recent Company Law Amendment",
    difficulty: "Revised Threshold",
    question: "What are the revised thresholds defining a 'Small Company' under Section 2(85) of the Companies Act?",
    options: [
      "Paid-up capital ≤ ₹50 Lakh and Turnover ≤ ₹2 Crore",
      "Paid-up capital ≤ ₹2 Crore and Turnover ≤ ₹20 Crore",
      "Paid-up capital ≤ ₹4 Crore and Turnover ≤ ₹40 Crore",
      "Paid-up capital ≤ ₹10 Crore and Turnover ≤ ₹100 Crore",
      "Paid-up capital ≤ ₹1 Crore and Turnover ≤ ₹10 Crore"
    ],
    correctIndex: 2,
    explanation: "The Ministry of Corporate Affairs (MCA) revised the definition of a Small Company to: Paid-up capital not exceeding ₹4 Crore AND Turnover not exceeding ₹40 Crore.",
    takeaway: "Small Company Thresholds: Paid-up capital ≤ ₹4 Crore AND Turnover ≤ ₹40 Crore."
  },
  {
    id: "co_15",
    source: "Companies Act 2013",
    difficulty: "High Yield",
    question: "What is an 'Independent Director' under Section 149(6) of the Companies Act, 2013?",
    options: [
      "A director who is not paid any salary or sitting fees",
      "A non-executive director who has no pecuniary relationship with the company, its promoters, or management, ensuring objective board governance",
      "A director elected by the labor union",
      "A government officer deputed to inspect company records",
      "A director who owns more than 50% shares of the company"
    ],
    correctIndex: 1,
    explanation: "An Independent Director is a non-executive director who does not have any material pecuniary relationship or transaction with the company, its holding, subsidiary, or promoters, thereby bringing an impartial judgment to board deliberations.",
    takeaway: "Independent Director = Non-executive director with zero material financial ties to management."
  }
];

// Backward compatibility — keep the old name working
const companiesEconomicsQuestions = companiesActQuestions;

if (typeof window !== 'undefined') {
  window.companiesActQuestions = companiesActQuestions;
  window.companiesEconomicsQuestions = companiesActQuestions;
}
