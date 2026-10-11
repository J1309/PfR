// PFRDA Grade A - Finance & Financial System Question Bank
// High-Yield Questions on Financial Markets, Money Market, Regulators, and Banking

const financeQuestions = [
  {
    id: "fin_01",
    source: "PFRDA / SEBI Memory-Based",
    difficulty: "High Yield",
    question: "What are the standard three tenors (maturities) in which Treasury Bills (T-Bills) are currently issued by the Government of India through the RBI?",
    options: [
      "14 days, 28 days, and 91 days",
      "91 days, 182 days, and 364 days",
      "30 days, 60 days, and 90 days",
      "180 days, 270 days, and 365 days",
      "45 days, 91 days, and 182 days"
    ],
    correctIndex: 1,
    explanation: "Treasury Bills (T-Bills) are short-term money market debt instruments issued by the Government of India in three specific tenors: 91 days, 182 days, and 364 days. They are zero-coupon securities issued at a discount to face value and redeemed at par.",
    takeaway: "T-Bill Tenors: 91-day, 182-day, and 364-day (Issued at discount, redeemed at par)."
  },
  {
    id: "fin_02",
    source: "PFRDA / SEBI Memory-Based",
    difficulty: "High Yield",
    question: "Commercial Paper (CP) is an unsecured money market instrument issued by top-rated corporates. What is the minimum denomination in which Commercial Paper can be issued in India?",
    options: [
      "₹1,00,000",
      "₹5,00,000",
      "₹10,00,000",
      "₹25,00,000",
      "₹50,000"
    ],
    correctIndex: 1,
    explanation: "Commercial Paper (CP) can be issued in denominations of ₹5 Lakh or multiples thereof. The minimum maturity period is 7 days, and the maximum is up to 1 year from the date of issue.",
    takeaway: "Commercial Paper (CP): Min denomination = ₹5 Lakh; Maturity = 7 days to 1 year."
  },
  {
    id: "fin_03",
    source: "Money Market Terms",
    difficulty: "High Yield",
    question: "In the Indian interbank money market, borrowing and lending of funds for an 'overnight' (1 day) duration is formally referred to as:",
    options: [
      "Notice Money",
      "Term Money",
      "Call Money",
      "Repo Money",
      "Commercial Paper"
    ],
    correctIndex: 2,
    explanation: "Interbank money market classification: Call Money = funds borrowed/lent for 1 day (overnight); Notice Money = funds borrowed/lent for 2 days to 14 days; Term Money = funds borrowed/lent for more than 14 days (up to 1 year).",
    takeaway: "1 day = Call Money; 2–14 days = Notice Money; >14 days = Term Money."
  },
  {
    id: "fin_04",
    source: "Monetary Policy Instruments",
    difficulty: "High Yield",
    question: "What is the 'Repo Rate' in the context of the Reserve Bank of India's monetary policy?",
    options: [
      "The rate at which banks park surplus funds with the RBI without collateral",
      "The rate at which the RBI lends short-term liquidity to commercial banks against government securities",
      "The penalty rate charged on commercial banks for failing to maintain CRR",
      "The long-term lending rate for commercial housing loans",
      "The discount rate applicable to foreign exchange transactions"
    ],
    correctIndex: 1,
    explanation: "Repo (Repurchase Option) rate is the interest rate at which the RBI lends short-term money to commercial banks against collateral of approved government securities.",
    takeaway: "Repo Rate = RBI lends to banks against G-Secs (short-term liquidity injection)."
  },
  {
    id: "fin_05",
    source: "Monetary Policy Evolution",
    difficulty: "Critical Update",
    question: "In April 2022, the RBI introduced the Standing Deposit Facility (SDF) as the floor of the Liquidity Adjustment Facility (LAF) corridor. What makes the SDF distinct from the traditional Reverse Repo Rate?",
    options: [
      "SDF requires banks to pledge gold as collateral",
      "SDF absorbs surplus liquidity from banks WITHOUT requiring the RBI to provide government securities as collateral",
      "SDF provides emergency loans to primary dealers only",
      "SDF is exclusively for foreign institutional investors",
      "SDF has a fixed maturity of 3 years"
    ],
    correctIndex: 1,
    explanation: "The Standing Deposit Facility (SDF) allows the RBI to absorb surplus liquidity from commercial banks without having to provide government securities (collateral) in return. It replaced the fixed Reverse Repo as the lower operating band of the LAF.",
    takeaway: "Standing Deposit Facility (SDF) = Absorbs liquidity without collateral from RBI."
  },
  {
    id: "fin_06",
    source: "Banking Ratios",
    difficulty: "High Yield",
    question: "What is the key functional difference between the Cash Reserve Ratio (CRR) and the Statutory Liquidity Ratio (SLR)?",
    options: [
      "CRR is maintained in government securities, while SLR is kept only in cash",
      "CRR is maintained as cash balances solely with the RBI (earns 0% interest), while SLR is maintained by banks themselves in liquid assets like G-Secs, cash, and gold",
      "CRR applies only to public sector banks; SLR applies only to private banks",
      "CRR can be withdrawn daily; SLR is permanently locked until bank liquidation",
      "There is no difference; they are interchangeable terms"
    ],
    correctIndex: 1,
    explanation: "CRR is the percentage of Net Demand and Time Liabilities (NDTL) that banks must deposit with the RBI strictly in cash (earns zero interest). SLR is the percentage of NDTL that banks maintain with themselves in specified liquid assets (approved G-Secs, gold, cash), which yields returns to the bank.",
    takeaway: "CRR = Cash kept with RBI (0% return); SLR = Liquid assets (G-Secs/gold/cash) kept with banks."
  },
  {
    id: "fin_07",
    source: "Regulatory Architecture",
    difficulty: "High Yield",
    question: "Which statutory authority serves as the unified regulator for financial products, financial services, and financial institutions in International Financial Services Centres (IFSCs) like GIFT City in India?",
    options: [
      "SEBI",
      "RBI",
      "IFSCA (International Financial Services Centres Authority)",
      "PFRDA",
      "NITI Aayog"
    ],
    correctIndex: 2,
    explanation: "The IFSCA (headquartered at GIFT City, Gandhinagar, Gujarat) was established under the IFSCA Act, 2019 as the single unified regulator for all financial activities in IFSCs, taking over regulatory powers from RBI, SEBI, IRDAI, and PFRDA for offshore units.",
    takeaway: "Unified regulator for GIFT City / IFSCs = IFSCA (Gandhinagar)."
  },
  {
    id: "fin_08",
    source: "Primary vs Secondary Markets",
    difficulty: "Foundational",
    question: "When an already listed public company issues new shares to its existing shareholders in proportion to their existing shareholding, the process is called:",
    options: [
      "Initial Public Offering (IPO)",
      "Follow-on Public Offering (FPO)",
      "Rights Issue",
      "Private Placement",
      "Bonus Issue"
    ],
    correctIndex: 2,
    explanation: "A Rights Issue is an offering of rights to the company's existing shareholders, enabling them to purchase additional shares directly from the company in proportion to their existing holding, usually at a discounted price.",
    takeaway: "New shares offered proportionally to existing shareholders = Rights Issue."
  },
  {
    id: "fin_09",
    source: "Monetary Policy Committee (MPC)",
    difficulty: "High Yield",
    question: "How many members constitute the Monetary Policy Committee (MPC) of the Reserve Bank of India, and who serves as its ex-officio Chairperson?",
    options: [
      "5 members; Union Finance Minister",
      "6 members (3 from RBI, 3 appointed by Central Govt); Governor of the RBI",
      "7 members; Chief Economic Adviser",
      "6 members; Deputy Governor in charge of monetary policy",
      "4 members; Finance Secretary"
    ],
    correctIndex: 1,
    explanation: "Section 45ZB of the amended RBI Act, 1934 provides for a 6-member Monetary Policy Committee: 3 members from the RBI and 3 external members appointed by the Central Government. The RBI Governor is the ex-officio Chairperson.",
    takeaway: "MPC = 6 members (3 RBI + 3 Govt appointed). Chairperson = RBI Governor."
  },
  {
    id: "fin_10",
    source: "Banking Safety Norms",
    difficulty: "Regulatory",
    question: "Under the DICGC (Deposit Insurance and Credit Guarantee Corporation), what is the maximum insurance coverage provided per depositor per insured bank (covering both principal and interest)?",
    options: [
      "₹1,00,000",
      "₹2,00,000",
      "₹5,00,000",
      "₹10,00,000",
      "₹25,00,000"
    ],
    correctIndex: 2,
    explanation: "The deposit insurance limit was raised from ₹1 Lakh to ₹5 Lakh per depositor per bank (including all savings, current, recurring, and fixed deposit accounts across all branches of that bank).",
    takeaway: "DICGC Bank Deposit Insurance Limit = ₹5,00,000 per depositor per bank."
  },
  {
    id: "fin_11",
    source: "Money Market Instruments",
    difficulty: "High Yield",
    question: "What are 'Cash Management Bills' (CMBs) issued by the Reserve Bank of India on behalf of the Government of India?",
    options: [
      "Perpetual debt instruments to finance rural roads",
      "Non-marketable bonds to fund military operations",
      "Short-term securities with maturities of less than 91 days to meet temporary cash flow mismatches of the Central Government",
      "Instruments issued exclusively to state governments",
      "Paper currencies issued during currency shortages"
    ],
    correctIndex: 2,
    explanation: "Cash Management Bills (CMBs) are non-standard short-term money market instruments with tenors of less than 91 days, introduced in 2010 to help the Central Government manage temporary cash flow mismatches.",
    takeaway: "Cash Management Bills (CMBs) = Short-term government debt with maturity < 91 days."
  },
  {
    id: "fin_12",
    source: "Financial Derivatives",
    difficulty: "Conceptual",
    question: "In options trading, what does an investor holding a 'Call Option' have the right (but not obligation) to do?",
    options: [
      "Sell an underlying asset at a specified price within a specified time",
      "Buy an underlying asset at a specified strike price within a specified time",
      "Cancel the stock trade if prices crash",
      "Convert debt into equity shares",
      "Receive fixed dividends indefinitely"
    ],
    correctIndex: 1,
    explanation: "A Call Option gives the buyer the right, but not the obligation, to BUY an underlying asset at a predetermined strike price. A Put Option gives the right to SELL the underlying asset.",
    takeaway: "Call Option = Right to BUY; Put Option = Right to SELL."
  },
  {
    id: "fin_13",
    source: "Financial Ratios",
    difficulty: "High Yield",
    question: "What is the 'Current Ratio' used for in corporate financial analysis, and what is the standard ideal benchmark?",
    options: [
      "Measures long-term debt solvency; benchmark is 5:1",
      "Measures short-term liquidity (Current Assets / Current Liabilities); traditional benchmark is 2:1",
      "Measures profitability per share; benchmark is 10%",
      "Measures asset turnover rate; benchmark is 1:1",
      "Measures market capitalisation to book value; benchmark is 3:1"
    ],
    correctIndex: 1,
    explanation: "Current Ratio = Current Assets / Current Liabilities. It evaluates a firm's ability to cover its short-term obligations due within one year. A ratio of 2:1 is traditionally considered a healthy standard.",
    takeaway: "Current Ratio = Current Assets ÷ Current Liabilities (Ideal benchmark ~ 2:1)."
  },
  {
    id: "fin_14",
    source: "Foreign Exchange",
    difficulty: "Macro Finance",
    question: "Under the Liberalised Remittance Scheme (LRS) of the RBI, what is the maximum permissible foreign exchange remittance limit for a resident individual per financial year?",
    options: [
      "USD 100,000",
      "USD 250,000",
      "USD 500,000",
      "USD 1,000,000",
      "USD 50,000"
    ],
    correctIndex: 1,
    explanation: "Under the LRS, resident individuals (including minors) can freely remit up to USD 250,000 per financial year (April–March) for any permissible current or capital account transactions.",
    takeaway: "LRS Annual Remittance Limit = USD 250,000 per person per fiscal year."
  },
  {
    id: "fin_15",
    source: "Certificates of Deposit",
    difficulty: "Money Market",
    question: "Certificates of Deposit (CDs) can be issued by Scheduled Commercial Banks in India. What is the minimum amount for a Certificate of Deposit?",
    options: [
      "₹10,000",
      "₹50,000",
      "₹1,00,000",
      "₹5,00,000",
      "₹10,00,000"
    ],
    correctIndex: 2,
    explanation: "Certificates of Deposit (CDs) are issued in minimum denominations of ₹1 Lakh and multiples of ₹1 Lakh thereafter. Minimum tenor for banks is 7 days, and maximum is up to 1 year.",
    takeaway: "Certificate of Deposit (CD) min amount = ₹1 Lakh (vs. Commercial Paper which is ₹5 Lakh)."
  }
];

if (typeof window !== 'undefined') {
  window.financeQuestions = financeQuestions;
}
