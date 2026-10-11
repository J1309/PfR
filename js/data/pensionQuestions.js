// PFRDA Grade A - Pension Sector & PFRDA Question Bank
// High-Yield, Memory-Based & Statutory Questions with Detailed Explanations

const pensionQuestions = [
  {
    id: "pen_01",
    source: "PFRDA Memory-Based 2022",
    difficulty: "High Yield",
    question: "Under the PFRDA Act, 2013, the Pension Fund Regulatory and Development Authority consists of a Chairperson and not more than how many members?",
    options: [
      "5 members (at least 2 whole-time)",
      "6 members (at least 3 whole-time)",
      "4 members (at least 2 whole-time)",
      "7 members (at least 4 whole-time)",
      "3 members (all whole-time)"
    ],
    correctIndex: 1,
    explanation: "According to Section 3(3) of the PFRDA Act, 2013, the Authority consists of a Chairperson and not more than six members, of whom at least three shall be whole-time members, appointed by the Central Government.",
    takeaway: "Composition: 1 Chairperson + max 6 members (minimum 3 whole-time members)."
  },
  {
    id: "pen_02",
    source: "PFRDA Memory-Based 2022",
    difficulty: "High Yield",
    question: "What is the minimum and maximum entry age for an Indian citizen to join the National Pension System (NPS) under the All Citizen Model?",
    options: [
      "18 years to 60 years",
      "18 years to 65 years",
      "18 years to 70 years",
      "21 years to 65 years",
      "18 years to 75 years"
    ],
    correctIndex: 2,
    explanation: "Earlier, the maximum entry age was 65 years, but PFRDA revised it upwards to 70 years. Any Indian citizen (resident or non-resident) between 18 and 70 years can join the NPS.",
    takeaway: "NPS Entry Age: 18 to 70 years. (Can continue contributing up to 75 years)."
  },
  {
    id: "pen_03",
    source: "PFRDA Memory-Based 2021",
    difficulty: "High Yield",
    question: "Under Atal Pension Yojana (APY), what are the guaranteed monthly pension amounts available to subscribers upon attaining 60 years of age?",
    options: [
      "₹500, ₹1,000, ₹1,500, ₹2,000, or ₹2,500",
      "₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000",
      "₹2,000, ₹4,000, ₹6,000, ₹8,000, or ₹10,000",
      "₹1,500, ₹3,000, ₹4,500, ₹6,000, or ₹7,500",
      "Fixed ₹3,000 only"
    ],
    correctIndex: 1,
    explanation: "Atal Pension Yojana (APY) provides a guaranteed minimum monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 per month starting at age 60, depending on the subscriber's contribution.",
    takeaway: "APY Pension Slabs: ₹1,000 to ₹5,000 in multiples of ₹1,000."
  },
  {
    id: "pen_04",
    source: "Recent Regulation Update",
    difficulty: "Critical Trap",
    question: "With effect from October 1, 2022, which category of citizens is strictly barred from joining Atal Pension Yojana (APY)?",
    options: [
      "Employees of private sector firms",
      "Non-Resident Indians (NRIs)",
      "Any citizen who is or has been an Income Tax payer",
      "Self-employed individuals",
      "Women who are not formal workers"
    ],
    correctIndex: 2,
    explanation: "As per the Ministry of Finance notification, from October 1, 2022, any citizen who is or has been an income tax payer under the Income-tax Act is not eligible to join APY. If joined, the account is closed and accumulated corpus refunded.",
    takeaway: "APY Exclusions: Income tax payers cannot join after 1 Oct 2022."
  },
  {
    id: "pen_05",
    source: "PFRDA Concept Question",
    difficulty: "Core Architecture",
    question: "How many digits make up the Permanent Retirement Account Number (PRAN) issued to an NPS subscriber?",
    options: [
      "10 digits",
      "12 digits",
      "14 digits",
      "16 digits",
      "11 digits"
    ],
    correctIndex: 1,
    explanation: "PRAN (Permanent Retirement Account Number) is a unique 12-digit identification number allocated by the Central Recordkeeping Agency (CRA) to every individual subscriber under NPS.",
    takeaway: "PRAN length: Exactly 12 digits (portable across jobs and locations throughout India)."
  },
  {
    id: "pen_06",
    source: "PFRDA Memory-Based 2022",
    difficulty: "High Yield",
    question: "What is the key structural difference between an NPS Tier-I account and an NPS Tier-II account?",
    options: [
      "Tier-I is an equity account; Tier-II is a debt account",
      "Tier-I is non-withdrawable/locked until 60 with tax benefits; Tier-II is a voluntary withdrawable savings account",
      "Tier-I is only for government employees; Tier-II is for private citizens",
      "Tier-I has no tax deductions; Tier-II has 80C deductions",
      "Tier-I can be opened independently; Tier-II cannot have an associated Tier-I"
    ],
    correctIndex: 1,
    explanation: "Tier-I is the primary retirement account with lock-in until age 60 and dedicated tax benefits (80CCD). Tier-II is an open, voluntary investment account with no lock-in and complete liquidity (but generally no tax benefits for private citizens). You must have a Tier-I account to open a Tier-II.",
    takeaway: "Tier-I = Pension Account (Locked + Tax benefit); Tier-II = Flexible Investment/Savings (Liquid)."
  },
  {
    id: "pen_07",
    source: "PFRDA Statutory Knowledge",
    difficulty: "Moderate",
    question: "The PFRDA Act was passed by the Parliament in 2013. When did the Act formally come into force?",
    options: [
      "January 1, 2004",
      "September 19, 2013",
      "February 1, 2014",
      "April 1, 2015",
      "July 1, 2013"
    ],
    correctIndex: 2,
    explanation: "While the PFRDA Act was notified in September 2013, it came into force on February 1, 2014. The interim PFRDA was initially established via an executive order on October 10, 2003.",
    takeaway: "PFRDA Act came into force on: February 1, 2014."
  },
  {
    id: "pen_08",
    source: "Exit & Withdrawal Rules",
    difficulty: "High Yield",
    question: "At normal superannuation/retirement (age 60), what is the maximum percentage of accumulated corpus in NPS Tier-I that can be withdrawn tax-free as a lump sum?",
    options: [
      "40%",
      "50%",
      "60%",
      "80%",
      "100%"
    ],
    correctIndex: 2,
    explanation: "At age 60, up to 60% of the accumulated pension corpus can be withdrawn as a tax-exempt lump sum. The remaining minimum 40% must be used to purchase an annuity to receive monthly pension.",
    takeaway: "Normal Exit (Age 60): Max 60% Lump Sum (Tax-free) + Min 40% Annuity."
  },
  {
    id: "pen_09",
    source: "Exit & Withdrawal Rules",
    difficulty: "High Yield",
    question: "If an NPS subscriber opts for premature exit before attaining age 60 (or retirement), what percentage of the accumulated wealth must compulsorily be utilized to purchase an annuity?",
    options: [
      "40%",
      "50%",
      "60%",
      "80%",
      "100%"
    ],
    correctIndex: 3,
    explanation: "In case of premature exit before 60 years, at least 80% of the accumulated corpus must be compulsorily utilized for purchasing an annuity. Only a maximum of 20% can be withdrawn as a lump sum.",
    takeaway: "Premature Exit (< 60 years): Min 80% Annuity + Max 20% Lump Sum."
  },
  {
    id: "pen_10",
    source: "PFRDA Architecture",
    difficulty: "High Yield",
    question: "Which entity in the NPS architecture is responsible for issuing PRAN, maintaining records, and processing subscriber requests?",
    options: [
      "Pension Fund Manager (PFM)",
      "Central Recordkeeping Agency (CRA)",
      "Point of Presence (PoP)",
      "Trustee Bank",
      "Custodian"
    ],
    correctIndex: 1,
    explanation: "The Central Recordkeeping Agency (CRA) is the backbone responsible for recordkeeping, administration, PRAN issuance, account maintenance, and customer service. Current CRAs include Protean eGov, KFintech, and CAMS.",
    takeaway: "Recordkeeping & PRAN generation = Central Recordkeeping Agency (CRA)."
  },
  {
    id: "pen_11",
    source: "PFRDA Architecture",
    difficulty: "High Yield",
    question: "Which of the following functions as the 'Trustee Bank' for the National Pension System (NPS)?",
    options: [
      "State Bank of India (SBI)",
      "Reserve Bank of India (RBI)",
      "Axis Bank",
      "Punjab National Bank",
      "ICICI Bank"
    ],
    correctIndex: 2,
    explanation: "Axis Bank was appointed as the Trustee Bank for NPS with effect from July 1, 2021 (prior to which SBI was the trustee bank). The Trustee Bank handles the clearing and flow of funds between PoPs, PFMs, and subscribers.",
    takeaway: "Current NPS Trustee Bank = Axis Bank."
  },
  {
    id: "pen_12",
    source: "Investment Guidelines",
    difficulty: "High Yield",
    question: "Under the 'Active Choice' investment option in NPS for private citizens, what is the maximum permissible allocation to Equity (Asset Class E) up to age 50?",
    options: [
      "50%",
      "60%",
      "75%",
      "85%",
      "100%"
    ],
    correctIndex: 2,
    explanation: "In Active Choice, a subscriber can allocate up to a maximum of 75% in Equity (Asset Class E) up to the age of 50. After age 50, the cap tapers down by 2.5% every year until it stabilizes at 50% at age 60.",
    takeaway: "Max Equity Cap in Active Choice: 75% up to age 50."
  },
  {
    id: "pen_13",
    source: "Investment Guidelines",
    difficulty: "Moderate",
    question: "In the 'Auto Choice' (Life Cycle Fund) of NPS, which option is known as the 'Aggressive Life Cycle Fund'?",
    options: [
      "LC25",
      "LC50",
      "LC75",
      "LC85",
      "LC100"
    ],
    correctIndex: 2,
    explanation: "NPS offers 3 Auto Choice Life Cycle funds: LC75 (Aggressive - starts with 75% equity), LC50 (Moderate - starts with 50% equity, which is also the default option), and LC25 (Conservative - starts with 25% equity).",
    takeaway: "Auto Choice: LC75 = Aggressive, LC50 = Moderate (Default), LC25 = Conservative."
  },
  {
    id: "pen_14",
    source: "APY Scheme Details",
    difficulty: "High Yield",
    question: "What is the eligible age group for joining the Atal Pension Yojana (APY)?",
    options: [
      "18 to 35 years",
      "18 to 40 years",
      "21 to 45 years",
      "18 to 50 years",
      "18 to 60 years"
    ],
    correctIndex: 1,
    explanation: "The minimum entry age for APY is 18 years and the maximum entry age is 40 years. This ensures that every subscriber contributes for at least 20 years before the pension starts at age 60.",
    takeaway: "APY Entry Age: 18 to 40 years (Minimum contribution period: 20 years)."
  },
  {
    id: "pen_15",
    source: "Tax Provisions",
    difficulty: "High Yield",
    question: "An exclusive additional tax deduction of up to ₹50,000 for voluntary contributions in NPS Tier-I is available under which Section of the Income Tax Act?",
    options: [
      "Section 80C",
      "Section 80CCD(1)",
      "Section 80CCD(1B)",
      "Section 80CCD(2)",
      "Section 80E"
    ],
    correctIndex: 2,
    explanation: "Section 80CCD(1B) allows an additional tax deduction of up to ₹50,000 for investment in NPS Tier-I, over and above the ₹1.5 Lakh limit under Section 80C/80CCD(1).",
    takeaway: "Extra ₹50,000 NPS deduction = Section 80CCD(1B)."
  },
  {
    id: "pen_16",
    source: "Recent Initiative 2024",
    difficulty: "Current Affairs",
    question: "In Union Budget 2024-25, which new NPS initiative was announced for minors, allowing parents to invest towards a retirement corpus that automatically converts to regular NPS on turning 18?",
    options: [
      "NPS Balak",
      "NPS Vatsalya",
      "NPS Shishu",
      "NPS Sukanya",
      "NPS Yuva"
    ],
    correctIndex: 1,
    explanation: "Finance Minister Nirmala Sitharaman launched 'NPS Vatsalya' in Sept 2024. It is a pension plan for minors where parents contribute on behalf of the child, and on attaining 18 years, the account seamlessly converts into a regular NPS account.",
    takeaway: "NPS for minors = NPS Vatsalya (launched Sept 2024)."
  },
  {
    id: "pen_17",
    source: "Recent Policy 2024",
    difficulty: "High Yield",
    question: "In August 2024, the Union Cabinet approved the 'Unified Pension Scheme' (UPS) for Central Government employees. What is the assured pension provided under UPS for eligible employees with at least 25 years of service?",
    options: [
      "40% of the last drawn basic pay",
      "50% of the average basic pay drawn over the last 12 months prior to retirement",
      "60% of the last drawn basic pay",
      "45% of the average basic pay over the entire career",
      "Fixed ₹25,000 per month"
    ],
    correctIndex: 1,
    explanation: "Under the Unified Pension Scheme (UPS) approved in August 2024 (effective April 1, 2025), employees with minimum 25 years qualifying service get an assured pension of 50% of the average basic pay drawn for the last 12 months prior to retirement.",
    takeaway: "UPS Assured Pension = 50% of average basic pay of last 12 months (Min 25 yrs service)."
  },
  {
    id: "pen_18",
    source: "PFRDA Ombudsman",
    difficulty: "Regulatory",
    question: "Under the PFRDA (Redressal of Subscriber Grievance) Regulations, what is the maximum compensation an Ombudsman can award for grievance redressal?",
    options: [
      "₹5,00,000",
      "₹10,00,000",
      "₹20,00,000",
      "₹25,00,000",
      "₹50,00,000"
    ],
    correctIndex: 1,
    explanation: "The PFRDA Ombudsman can award compensation up to a maximum amount of ₹10,00,000 (Rupees Ten Lakhs) for loss suffered by the complainant.",
    takeaway: "PFRDA Ombudsman Compensation Limit = Up to ₹10 Lakhs."
  },
  {
    id: "pen_19",
    source: "Historical Roots",
    difficulty: "Static",
    question: "The introduction of the New Pension System (now NPS) in India was based on the recommendations of which famous committee?",
    options: [
      "Kelkar Committee",
      "OASIS (Old Age Social and Income Security) Project",
      "Narsimham Committee",
      "Bimal Jalan Committee",
      "Rangarajan Committee"
    ],
    correctIndex: 1,
    explanation: "The Project OASIS (Old Age Social & Income Security) Committee headed by Dr. S.A. Dave submitted its report in 2000, recommending a defined-contribution, privately managed pension system, which laid the foundation for NPS in 2004.",
    takeaway: "NPS foundation = Project OASIS Committee (chaired by Dr. S.A. Dave)."
  },
  {
    id: "pen_20",
    source: "PFRDA Act Provisions",
    difficulty: "High Yield",
    question: "Under Section 28 of the PFRDA Act, where can an appeal against any order made by the PFRDA be filed?",
    options: [
      "Directly to the Supreme Court",
      "Securities Appellate Tribunal (SAT)",
      "High Court of Delhi",
      "Reserve Bank of India",
      "National Company Law Appellate Tribunal (NCLAT)"
    ],
    correctIndex: 1,
    explanation: "Under Section 36 of the PFRDA Act, 2013, appeals against decisions or orders of the PFRDA are made to the Securities Appellate Tribunal (SAT). SAT has the jurisdiction to hear appeals for SEBI, IRDAI, and PFRDA.",
    takeaway: "Appeals against PFRDA decisions go to = Securities Appellate Tribunal (SAT)."
  },
  {
    id: "pen_21",
    source: "NPS Small Corpus Exemption",
    difficulty: "Moderate",
    question: "If an NPS Tier-I subscriber attains the age of 60 and their total accumulated pension wealth is equal to or less than what amount, are they permitted to withdraw 100% of the corpus as a lump sum without purchasing an annuity?",
    options: [
      "₹1,00,000",
      "₹2,50,000",
      "₹5,00,000",
      "₹7,50,000",
      "₹10,00,000"
    ],
    correctIndex: 2,
    explanation: "PFRDA revised the small-corpus threshold: if the total corpus at age 60/superannuation is equal to or less than ₹5 Lakhs, the subscriber has the option to withdraw the entire corpus (100%) as a lump sum without mandatory annuitization.",
    takeaway: "100% Lump Sum Withdrawal limit at age 60 = Corpus up to ₹5,00,000."
  },
  {
    id: "pen_22",
    source: "NPS Premature Small Corpus",
    difficulty: "Tricky",
    question: "In case of premature exit before age 60, what is the maximum corpus limit up to which 100% lump sum withdrawal is allowed without annuity?",
    options: [
      "₹1,00,000",
      "₹2,50,000",
      "₹5,00,000",
      "₹50,000",
      "No 100% withdrawal allowed"
    ],
    correctIndex: 1,
    explanation: "In case of premature exit (before age 60), if the total accumulated pension wealth is up to ₹2.5 Lakhs, 100% lump sum withdrawal is permitted without mandatory annuity purchase.",
    takeaway: "Premature 100% withdrawal limit = Corpus up to ₹2,50,000."
  },
  {
    id: "pen_23",
    source: "Point of Presence (PoP)",
    difficulty: "Operational",
    question: "What is the primary role of a 'Point of Presence' (PoP) in the NPS ecosystem?",
    options: [
      "To invest funds in stock and debt markets",
      "To act as the first point of contact for customer registration, KYC verification, and receiving contributions",
      "To hold all securities in custody",
      "To audit the pension funds every quarter",
      "To decide the repo rate for pension accounts"
    ],
    correctIndex: 1,
    explanation: "PoPs (such as commercial banks, post offices, and financial institutions) are registered entities that interface with the public. They accept subscriber forms, conduct KYC verification, and facilitate fund collection.",
    takeaway: "PoP (Point of Presence) = Customer interface for registration, KYC, and contribution."
  },
  {
    id: "pen_24",
    source: "PFM Capital Requirements",
    difficulty: "Regulatory",
    question: "What is the minimum net worth requirement prescribed by PFRDA for a Pension Fund Manager (PFM)?",
    options: [
      "₹25 Crores",
      "₹50 Crores",
      "₹100 Crores",
      "₹200 Crores",
      "₹500 Crores"
    ],
    correctIndex: 1,
    explanation: "Under PFRDA regulations, a sponsor applying to set up a Pension Fund Manager (PFM) must have a minimum net worth of ₹50 Crores (increased from the earlier ₹25 Crores).",
    takeaway: "PFM Minimum Net Worth = ₹50 Crores."
  },
  {
    id: "pen_25",
    source: "APY Default and Penalty",
    difficulty: "High Yield",
    question: "Under Atal Pension Yojana (APY), what happens if a subscriber delays or defaults on their monthly contribution?",
    options: [
      "The account is permanently cancelled immediately",
      "A nominal penalty of ₹1 to ₹10 per month is charged depending on contribution size",
      "A flat penalty of ₹100 per month is debited",
      "The government stops guaranteed pension permanently",
      "5% interest penalty is charged annually"
    ],
    correctIndex: 1,
    explanation: "Under APY, banks levy a small overdue penalty of ₹1 per month for contributions up to ₹100/month, ₹2 for up to ₹500/month, and so on up to ₹10/month for contributions above ₹1,001/month.",
    takeaway: "APY Default Penalty = Nominal ₹1 to ₹10 per month (deducted by auto-debit bank)."
  }
];

if (typeof window !== 'undefined') {
  window.pensionQuestions = pensionQuestions;
}
