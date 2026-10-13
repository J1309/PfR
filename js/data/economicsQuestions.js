// PFRDA Grade A - Economics, Union Budget & Economic Survey Question Bank
// Priority: 🟡 Medium-High

const economicsQuestions = [
  {
    id: "eco_01",
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
    id: "eco_02",
    source: "Union Budget",
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
    id: "eco_03",
    source: "Union Budget",
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
    id: "eco_04",
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
    id: "eco_05",
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
    id: "eco_06",
    source: "Union Budget",
    difficulty: "High Yield",
    question: "What is 'Revenue Deficit' in the Union Budget?",
    options: [
      "Fiscal Deficit minus Capital Receipts",
      "Revenue Expenditure minus Revenue Receipts",
      "Total Expenditure minus Total Revenue",
      "Plan Expenditure minus Plan Revenue",
      "Tax Revenue minus Non-Tax Revenue"
    ],
    correctIndex: 1,
    explanation: "Revenue Deficit = Revenue Expenditure − Revenue Receipts. It indicates that the government's ordinary income is not sufficient to meet its day-to-day running expenses, meaning it must borrow even for current consumption.",
    takeaway: "Revenue Deficit = Revenue Expenditure − Revenue Receipts. Shows borrowing for current spending."
  },
  {
    id: "eco_07",
    source: "Economic Survey",
    difficulty: "High Yield",
    question: "The Economic Survey of India is presented in Parliament by which body, and when?",
    options: [
      "By the Finance Minister, one day before the Union Budget",
      "By the RBI Governor, during the Monetary Policy review",
      "By the NITI Aayog CEO, every quarter",
      "By the Prime Minister, on Independence Day",
      "By the CAG, alongside the annual audit report"
    ],
    correctIndex: 0,
    explanation: "The Economic Survey is presented by the Finance Minister (prepared by the Chief Economic Adviser's office in DEA, Ministry of Finance) typically one day before the Union Budget is tabled in Parliament.",
    takeaway: "Economic Survey: Prepared by Chief Economic Adviser → presented by FM → one day before Budget."
  },
  {
    id: "eco_08",
    source: "Macroeconomics",
    difficulty: "Conceptual",
    question: "What is 'Stagflation'?",
    options: [
      "High economic growth combined with deflation",
      "A simultaneous occurrence of economic stagnation (low/negative growth, high unemployment) along with high inflation",
      "Rapid GDP growth with moderate inflation",
      "Zero inflation with full employment",
      "Declining stock markets with stable prices"
    ],
    correctIndex: 1,
    explanation: "Stagflation is a rare and challenging economic condition characterized by stagnant economic output (slow or negative GDP growth, high unemployment) occurring simultaneously with rising prices (inflation).",
    takeaway: "Stagflation = Stagnation + Inflation → Low growth + High unemployment + Rising prices."
  },
  {
    id: "eco_09",
    source: "Union Budget",
    difficulty: "High Yield",
    question: "What is the 'Effective Revenue Deficit' introduced in the Union Budget?",
    options: [
      "Revenue Deficit minus Grants for creation of capital assets",
      "Fiscal Deficit minus Revenue Deficit",
      "Primary Deficit plus Interest Payments",
      "Total Revenue minus Capital Expenditure",
      "Revenue Deficit plus Disinvestment proceeds"
    ],
    correctIndex: 0,
    explanation: "Effective Revenue Deficit = Revenue Deficit − Grants for creation of capital assets. This concept, introduced in Union Budget 2011-12, excludes grants given to states/bodies for capital asset creation from the revenue deficit, giving a truer picture of non-productive government spending.",
    takeaway: "Effective Revenue Deficit = Revenue Deficit − Grants for capital assets. A cleaner measure of wasteful spending."
  },
  {
    id: "eco_10",
    source: "Macroeconomics",
    difficulty: "High Yield",
    question: "The 'Monetary Policy Committee' (MPC) of RBI consists of how many members, and who has the casting vote?",
    options: [
      "5 members; Finance Secretary has the casting vote",
      "6 members (3 from RBI + 3 external); RBI Governor has the casting vote",
      "7 members; Deputy Governor has the casting vote",
      "4 members; Chief Economic Adviser has the casting vote",
      "9 members; PM-appointed chairperson has the casting vote"
    ],
    correctIndex: 1,
    explanation: "The MPC comprises 6 members: 3 from RBI (Governor as chairperson, one Deputy Governor, one RBI officer) and 3 external members appointed by the Government. In case of a tie, the RBI Governor has the casting vote.",
    takeaway: "MPC = 6 members (3 RBI + 3 Govt). Governor = Chairperson & casting vote."
  },
  {
    id: "eco_11",
    source: "Macroeconomics",
    difficulty: "Conceptual",
    question: "What is the difference between GDP at Market Prices and GDP at Factor Cost?",
    options: [
      "GDP at FC = GDP at MP + Subsidies − Indirect Taxes",
      "GDP at FC = GDP at MP − Subsidies + Indirect Taxes",
      "GDP at FC = GDP at MP + Indirect Taxes",
      "They are the same",
      "GDP at FC = NDP + Depreciation"
    ],
    correctIndex: 0,
    explanation: "GDP at Factor Cost = GDP at Market Price + Subsidies − Indirect Taxes. Factor cost strips out the effect of government intervention (taxes and subsidies) to show the true earnings of factors of production.",
    takeaway: "GDP at FC = GDP at MP + Subsidies − Indirect Taxes."
  },
  {
    id: "eco_12",
    source: "Union Budget",
    difficulty: "High Yield",
    question: "Which Article of the Indian Constitution mandates the presentation of the Annual Financial Statement (Union Budget) before Parliament?",
    options: [
      "Article 110",
      "Article 112",
      "Article 280",
      "Article 300A",
      "Article 352"
    ],
    correctIndex: 1,
    explanation: "Article 112 of the Constitution requires the President to cause to be laid before both Houses of Parliament a statement of estimated receipts and expenditure for each financial year — this is the 'Annual Financial Statement' or Union Budget.",
    takeaway: "Union Budget = Article 112 (Annual Financial Statement). Article 110 = Money Bill definition."
  },
  {
    id: "eco_13",
    source: "Economic Survey",
    difficulty: "Conceptual",
    question: "What does the 'Gini Coefficient' measure, and what do values of 0 and 1 represent?",
    options: [
      "GDP growth; 0 = recession, 1 = boom",
      "Income/wealth inequality; 0 = perfect equality, 1 = absolute inequality",
      "Inflation rate; 0 = deflation, 1 = hyperinflation",
      "Employment ratio; 0 = full unemployment, 1 = full employment",
      "Trade balance; 0 = balanced trade, 1 = complete import dependence"
    ],
    correctIndex: 1,
    explanation: "The Gini Coefficient (or Gini Index) measures income or wealth inequality in a society. A value of 0 represents perfect equality (everyone has the same income), while 1 represents perfect inequality (one person has all the income).",
    takeaway: "Gini Coefficient: 0 = Perfect Equality, 1 = Maximum Inequality. Used to track income distribution."
  },
  {
    id: "eco_14",
    source: "Macroeconomics",
    difficulty: "High Yield",
    question: "What is 'Current Account Deficit' (CAD) and why is it significant for India?",
    options: [
      "Excess of government spending over tax revenue",
      "Excess of imports of goods, services, and transfers over exports — indicating a country is a net borrower from the rest of the world",
      "The difference between bank deposits and bank lending",
      "Deficit in the central bank's gold reserves",
      "Shortfall in planned capital expenditure"
    ],
    correctIndex: 1,
    explanation: "Current Account Deficit occurs when the total value of goods, services, and transfers a country imports exceeds the total it exports. A high CAD makes a country dependent on foreign capital inflows and puts pressure on its currency.",
    takeaway: "CAD = Imports > Exports (goods + services + transfers). High CAD → Currency depreciation pressure."
  },
  {
    id: "eco_15",
    source: "Macroeconomics",
    difficulty: "High Yield",
    question: "What is the 'Laffer Curve' concept in taxation theory?",
    options: [
      "Higher tax rates always increase tax revenue",
      "There exists an optimal tax rate beyond which further increases in rates actually reduce total revenue collected",
      "Tax revenue and GDP always move in opposite directions",
      "Cutting subsidies always increases government revenue",
      "Flat taxes are always more efficient than progressive taxes"
    ],
    correctIndex: 1,
    explanation: "The Laffer Curve illustrates that as tax rates rise from 0%, revenue initially increases, but beyond an optimal point, excessively high rates discourage economic activity and compliance, causing revenue to fall.",
    takeaway: "Laffer Curve: Revenue rises with tax rate up to a point, then falls. Too-high rates = less revenue."
  }
];

if (typeof window !== 'undefined') {
  window.economicsQuestions = economicsQuestions;
}
