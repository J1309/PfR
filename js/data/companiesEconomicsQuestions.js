// PFRDA Grade A - Companies Act, Economics & Emerging Tech Question Bank
// High-Yield Questions on Companies Act 2013, Macroeconomics, and Financial AI/Media

const companiesEconomicsQuestions = [
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
    id: "co_07",
    source: "Macroeconomics",
    difficulty: "High Yield",
    question: "What is the official inflation metric used as the nominal anchor by the RBI's Monetary Policy Committee, and what is its target band?",
    options: [
      "Wholesale Price Index (WPI); target 3% ± 1%",
      "Consumer Price Index - Combined (CPI-C); target 4% with a tolerance band of ± 2% (2% to 6%)",
      "GDP Deflator; target 5% ± 2%",
      "Index of Industrial Production (IIP); target 4% ± 1%",
      "Core CPI; target 2% ± 1%"
    ],
    correctIndex: 1,
    explanation: "Under the flexible inflation targeting framework adopted under the RBI Act, the official target is CPI-Combined inflation at 4% with a tolerance band of +/- 2% (i.e., a range of 2% to 6%).",
    takeaway: "RBI Inflation Target: Headline CPI = 4% (Tolerance band: 2% to 6%)."
  },
  {
    id: "co_08",
    source: "Macroeconomics",
    difficulty: "High Yield",
    question: "What does 'Fiscal Deficit' represent in the Union Budget of India?",
    options: [
      "Total Revenue Receipts minus Total Revenue Expenditure",
      "Total Expenditure minus Total Receipts excluding Borrowings (i.e., Net borrowing requirement of the government)",
      "Fiscal Deficit minus Interest Payments",
      "Total Imports minus Total Exports",
      "Budget Deficit plus Currency in Circulation"
    ],
    correctIndex: 1,
    explanation: "Fiscal Deficit is the excess of total budget expenditure over total receipts excluding borrowings. In essence, it measures the total borrowing and debt liability incurred by the government during the fiscal year.",
    takeaway: "Fiscal Deficit = Total Expenditure − (Total Receipts excluding borrowings). It equals total borrowings."
  },
  {
    id: "co_09",
    source: "Macroeconomics",
    difficulty: "Foundational",
    question: "What is 'Primary Deficit' in public finance?",
    options: [
      "Fiscal Deficit minus Interest Payments",
      "Revenue Deficit minus Capital Expenditure",
      "Fiscal Deficit plus Subsidies",
      "Gross Tax Revenue minus State Transfers",
      "Trade Deficit minus Current Account Deficit"
    ],
    correctIndex: 0,
    explanation: "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates how much government borrowing is needed to meet expenses other than ongoing interest liabilities on past debts.",
    takeaway: "Primary Deficit = Fiscal Deficit − Interest Payments."
  },
  {
    id: "co_10",
    source: "Microeconomics",
    difficulty: "Conceptual",
    question: "Goods for which quantity demanded increases when the price of the good increases (violating the traditional Law of Demand) are termed:",
    options: [
      "Normal Goods",
      "Complementary Goods",
      "Giffen Goods or Veblen Goods",
      "Substitute Goods",
      "Public Goods"
    ],
    correctIndex: 2,
    explanation: "Giffen goods (highly inferior staple goods where negative income effect outweighs substitution effect) and Veblen goods (luxury/status goods) show an upward-sloping demand curve, violating the standard downward-sloping law of demand.",
    takeaway: "Violation of Law of Demand = Giffen Goods (inferior staple) & Veblen Goods (conspicuous luxury)."
  },
  {
    id: "co_11",
    source: "Balance of Payments",
    difficulty: "High Yield",
    question: "Which of the following items is recorded in the 'Capital Account' of the Balance of Payments (BoP) rather than the 'Current Account'?",
    options: [
      "Export of merchandise software",
      "Import of crude oil",
      "Inward worker remittances from abroad",
      "Foreign Direct Investment (FDI) inflows",
      "Payment of interest on foreign sovereign loans"
    ],
    correctIndex: 3,
    explanation: "The Current Account records trade in goods, services, and transfer payments/remittances/interest. The Capital Account records asset transfers and financial claims, such as Foreign Direct Investment (FDI), Foreign Portfolio Investment (FPI), and External Commercial Borrowings (ECB).",
    takeaway: "FDI, FPI, and External Loans = Capital Account. Goods, Services, Remittances = Current Account."
  },
  {
    id: "co_12",
    source: "Financial Tech & AI",
    difficulty: "Recent Addition",
    question: "In the modern Indian financial ecosystem, what is the role of an 'Account Aggregator' (AA) regulated by the Reserve Bank of India?",
    options: [
      "To lend personal loans directly from its own balance sheet",
      "To act as a consent-based financial data-sharing intermediary that facilitates encrypted sharing of financial information across institutions without storing customer data",
      "To merge multiple bank accounts into one single account number",
      "To invest customer funds in high-yield mutual funds",
      "To act as a debt collection agency for NPA accounts"
    ],
    correctIndex: 1,
    explanation: "An Account Aggregator (AA) is an RBI-regulated entity (NBFC-AA) that facilitates seamless, encrypted, consent-based retrieval and sharing of financial information between Financial Information Providers (FIPs) and Financial Information Users (FIUs). It does not store or see the customer's data.",
    takeaway: "Account Aggregator (AA) = Consent-driven, encrypted financial data sharing intermediary."
  },
  {
    id: "co_13",
    source: "Financial Communication & Media",
    difficulty: "Recent Addition",
    question: "What is 'Greenwashing' in sustainable finance and corporate financial reporting?",
    options: [
      "Using eco-friendly paper to print annual financial statements",
      "Misleading investors by exaggerating or falsely claiming environmentally friendly, green, or ESG-compliant practices to gain financial advantage",
      "Investing 100% of corporate profits in solar projects",
      "Laundering illicit funds through agricultural trade",
      "Waiving environmental clearance fees for manufacturing units"
    ],
    correctIndex: 1,
    explanation: "Greenwashing refers to the practice of providing deceptive, misleading, or unsubstantiated claims about the environmental benefits or ESG credentials of a company's products, services, or investments.",
    takeaway: "Greenwashing = Deceptively portraying products/investments as eco-friendly or ESG-compliant."
  },
  {
    id: "co_14",
    source: "Financial AI & Algo Trading",
    difficulty: "Recent Addition",
    question: "What is 'Algorithmic Trading' (Algo Trading) in securities and commodities markets?",
    options: [
      "Trading based on tips shared over social media channels",
      "Executing trading orders using automated pre-programmed software instructions accounting for variables like time, price, and volume without human intervention",
      "Investing only in artificial intelligence startups",
      "Fixing stock prices using blockchain consensus",
      "A banking protocol for clearing checks"
    ],
    correctIndex: 1,
    explanation: "Algorithmic trading (or automated/black-box trading) uses computer algorithms to automatically execute trades at high speed and frequency based on predefined rules regarding price, timing, and mathematical models.",
    takeaway: "Algo Trading = Automated execution of stock/derivative orders via pre-programmed computer code."
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

if (typeof window !== 'undefined') {
  window.companiesEconomicsQuestions = companiesEconomicsQuestions;
}
