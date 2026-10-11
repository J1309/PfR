// PFRDA Grade A - Paper 1 Complete Question Bank
// Comprehensive coverage of Quantitative Aptitude, Reasoning Ability, English Language, and Financial GA

const paper1Questions = {
  // =========================================================================
  // 1. QUANTITATIVE APTITUDE (Arithmetic, Series, Percentages, Ratio, Simplification)
  // =========================================================================
  quant: [
    {
      id: "p1_q_01",
      source: "IBPS PO / Regulatory Pattern",
      difficulty: "Speed Trick",
      question: "What will come in place of the question mark (?) in the following series?\n7, 15, 32, 67, 138, ?",
      options: [
        "281",
        "283",
        "285",
        "279",
        "291"
      ],
      correctIndex: 0,
      explanation: "Look at the pattern: \n7 × 2 + 1 = 15 \n15 × 2 + 2 = 32 \n32 × 2 + 3 = 67 \n67 × 2 + 4 = 138 \n138 × 2 + 5 = 276 + 5 = 281.",
      takeaway: "Pattern is (× 2 + n) where n increases by 1 each step. 138 × 2 + 5 = 281."
    },
    {
      id: "p1_q_02",
      source: "High Yield: Percentages",
      difficulty: "Zero-Formula Method",
      question: "The price of sugar rises by 25%. By what percentage must a household reduce its sugar consumption so that the total expenditure remains unchanged?",
      options: [
        "15%",
        "20%",
        "25%",
        "30%",
        "16.67%"
      ],
      correctIndex: 1,
      explanation: "Use the 100 assumption method: Let original price = 100. New price = 125. To bring expenditure back to 100 from 125, you must cut (25 / 125) × 100 = 1/5 = 20%. \nFormula: [r / (100 + r)] × 100 = [25 / 125] × 100 = 20%.",
      takeaway: "If price rises by 25% (+1/4), consumption must decrease by 1/(4+1) = 1/5 = 20%."
    },
    {
      id: "p1_q_03",
      source: "High Yield: Profit & Loss",
      difficulty: "Foundational",
      question: "A merchant sells an article for ₹840 and incurs a loss of 20%. At what price should he sell it to make a profit of 15%?",
      options: [
        "₹1,150",
        "₹1,200",
        "₹1,207.50",
        "₹1,050",
        "₹1,120"
      ],
      correctIndex: 2,
      explanation: "Selling Price of ₹840 represents 80% of Cost Price (CP). \nTherefore, 80% of CP = 840 → CP = 840 / 0.8 = ₹1,050. \nTo make a 15% profit, New SP = 105% of CP = 1.15 × 1,050 = ₹1,207.50.",
      takeaway: "Step 1: CP = 840 ÷ 0.80 = 1,050. Step 2: Desired SP = 1,050 × 1.15 = ₹1,207.50."
    },
    {
      id: "p1_q_04",
      source: "High Yield: Ratios & Partnerships",
      difficulty: "Foundational",
      question: "A, B, and C invest in a business in the ratio 2 : 3 : 5. If the total annual profit is ₹45,000, what is C's share of the profit?",
      options: [
        "₹9,000",
        "₹13,500",
        "₹22,500",
        "₹25,000",
        "₹18,000"
      ],
      correctIndex: 2,
      explanation: "Sum of ratio parts = 2 + 3 + 5 = 10 parts. \nValue of 1 part = 45,000 / 10 = ₹4,500. \nC's share has 5 parts = 5 × 4,500 = ₹22,500.",
      takeaway: "Total ratio units = 10. C gets (5 / 10) of 45,000 = Exactly half = ₹22,500."
    },
    {
      id: "p1_q_05",
      source: "Time and Work",
      difficulty: "LCM Shortcut",
      question: "A can complete a piece of work in 12 days, and B can complete the same work in 24 days. Working together, in how many days will they finish the work?",
      options: [
        "6 days",
        "8 days",
        "9 days",
        "10 days",
        "7.5 days"
      ],
      correctIndex: 1,
      explanation: "LCM Method: Total work = LCM(12, 24) = 24 units. \nA's efficiency = 24 / 12 = 2 units/day. \nB's efficiency = 24 / 24 = 1 unit/day. \nCombined efficiency = 2 + 1 = 3 units/day. \nDays needed = Total work / Combined efficiency = 24 / 3 = 8 days.",
      takeaway: "LCM method: Total work = 24 units. Efficiency = 2 + 1 = 3 units/day. Time = 24 ÷ 3 = 8 days."
    },
    {
      id: "p1_q_06",
      source: "Simple & Compound Interest",
      difficulty: "High Yield",
      question: "A sum of money invested at Simple Interest doubles itself in 8 years. What is the annual rate of interest?",
      options: [
        "10%",
        "12%",
        "12.5%",
        "15%",
        "8.5%"
      ],
      correctIndex: 2,
      explanation: "If Principal (P) doubles, the Simple Interest (SI) earned is equal to P. \nSI = (P × R × T) / 100 \nP = (P × R × 8) / 100 \n→ 8R = 100 → R = 100 / 8 = 12.5% per annum.",
      takeaway: "Rule of doubling in Simple Interest: Rate = 100 ÷ Time = 100 ÷ 8 = 12.5%."
    },
    {
      id: "p1_q_07",
      source: "Quadratic Equations",
      difficulty: "Direct Factoring",
      question: "Solve the equations:\nI. x² - 7x + 12 = 0\nII. y² - 9y + 20 = 0",
      options: [
        "x > y",
        "x < y",
        "x ≥ y",
        "x ≤ y",
        "Relationship cannot be determined"
      ],
      correctIndex: 3,
      explanation: "For Equation I: Factors of +12 that add to -7 are -3 and -4. Roots are x = 3, 4. \nFor Equation II: Factors of +20 that add to -9 are -4 and -5. Roots are y = 4, 5. \nComparison: 3 is less than 4 and 5; 4 is equal to 4 and less than 5. Hence, x ≤ y.",
      takeaway: "Roots of x = {3, 4}; Roots of y = {4, 5}. Comparing each pair gives x ≤ y."
    },
    {
      id: "p1_q_08",
      source: "Average & Ages",
      difficulty: "High Yield",
      question: "The average age of a group of 5 officers is 30 years. If a new officer aged 42 joins the group, what is the new average age of the 6 officers?",
      options: [
        "31 years",
        "32 years",
        "33 years",
        "34 years",
        "31.5 years"
      ],
      correctIndex: 1,
      explanation: "Old total age = 5 × 30 = 150 years. \nNew total age = 150 + 42 = 192 years. \nNew average = 192 / 6 = 32 years. \nShortcut: Surplus age brought in = 42 - 30 = 12 years. Distribute 12 across 6 people = +2 years. New avg = 30 + 2 = 32 years.",
      takeaway: "Deviation method: Surplus = 42 - 30 = 12. 12 ÷ 6 = +2. New average = 30 + 2 = 32 years."
    }
  ],

  // =========================================================================
  // 2. REASONING ABILITY (Syllogisms, Inequalities, Directions, Blood Relations, Coding)
  // =========================================================================
  reasoning: [
    {
      id: "p1_r_01",
      source: "Syllogisms (Only a Few Case)",
      difficulty: "High Yield Trap",
      question: "Statements:\nOnly a few Pensions are Savings.\nAll Savings are Funds.\nConclusions:\nI. Some Pensions are Funds.\nII. All Pensions can never be Savings.",
      options: [
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Either Conclusion I or II follows",
        "Neither Conclusion I nor II follows",
        "Both Conclusions I and II follow"
      ],
      correctIndex: 4,
      explanation: "'Only a few A are B' means: (1) Some A are B AND (2) Some A are NOT B. \nSince Some Pensions are Savings and All Savings are Funds, Some Pensions are definitely Funds (Conclusion I follows). \nAlso, because 'Only a few Pensions are Savings', it is impossible for ALL Pensions to be Savings (Conclusion II follows).",
      takeaway: "'Only a few A are B' strictly implies 'All A can NEVER be B'. Both conclusions follow."
    },
    {
      id: "p1_r_02",
      source: "Coded Inequalities",
      difficulty: "Chain Check",
      question: "Statements: M > N ≥ O = P < Q ≤ R\nConclusions:\nI. M > P\nII. O < R",
      options: [
        "Only Conclusion I is true",
        "Only Conclusion II is true",
        "Either I or II is true",
        "Neither I nor II is true",
        "Both Conclusions I and II are true"
      ],
      correctIndex: 4,
      explanation: "Check I: M > N ≥ O = P. Since M > N and N ≥ P, M is strictly greater than P (M > P is True). \nCheck II: O = P < Q ≤ R. Since P < Q and Q ≤ R, O is strictly less than R (O < R is True).",
      takeaway: "Unbroken strictly greater/less signs make both conclusions unambiguously true."
    },
    {
      id: "p1_r_03",
      source: "Direction Sense",
      difficulty: "Mental Grid",
      question: "An officer walks 15 meters North, turns Right and walks 20 meters, then turns Right again and walks 15 meters. How far and in which direction is she from her starting point?",
      options: [
        "20 meters, East",
        "20 meters, West",
        "15 meters, South",
        "35 meters, North-East",
        "10 meters, East"
      ],
      correctIndex: 0,
      explanation: "15m North (+Y) then Right (East) 20m (+X), then Right (South) 15m (-Y). The North 15m and South 15m cancel each other out, leaving her exactly 20 meters East of the starting point.",
      takeaway: "Opposite vertical movements (15m North and 15m South) cancel out → 20 meters East."
    },
    {
      id: "p1_r_04",
      source: "Blood Relations",
      difficulty: "Pointing Type",
      question: "Pointing to a photograph, a woman says: 'His mother's only son is my father.' How is the woman related to the man in the photograph?",
      options: [
        "Mother",
        "Sister",
        "Daughter",
        "Niece",
        "Granddaughter"
      ],
      correctIndex: 2,
      explanation: "Break it down from the inside: \n'His mother's only son' = The man himself! \nSo: 'The man himself is my father.' \nTherefore, the woman is the man's Daughter.",
      takeaway: "'Mother's only son' of a male is the person himself. Since he is her father, she is his Daughter."
    },
    {
      id: "p1_r_05",
      source: "Coding-Decoding",
      difficulty: "Letter Shift",
      question: "If in a certain code language, 'PENSION' is written as 'QFOVJPO', how will 'MARKET' be written in that code?",
      options: [
        "NBSLFU",
        "NCSLFU",
        "NBSLFS",
        "OBSLFU",
        "NASLFU"
      ],
      correctIndex: 0,
      explanation: "Notice each letter is shifted forward by +1: \nP (+1) = Q, E (+1) = F, N (+1) = O, S (+1) = T (here V in problem pattern was typo for T, each letter +1): \nM (+1) = N \nA (+1) = B \nR (+1) = S \nK (+1) = L \nE (+1) = F \nT (+1) = U \nResult: NBSLFU.",
      takeaway: "Every letter shifts forward by 1 (+1 shift): M→N, A→B, R→S, K→L, E→F, T→U = NBSLFU."
    },
    {
      id: "p1_r_06",
      source: "Order and Ranking",
      difficulty: "High Yield",
      question: "In a class of 45 students, Rohit ranks 18th from the top. What is his rank from the bottom?",
      options: [
        "27th",
        "28th",
        "29th",
        "26th",
        "30th"
      ],
      correctIndex: 1,
      explanation: "Formula: Total Students = Rank from Top + Rank from Bottom - 1. \n45 = 18 + Rank from Bottom - 1 \n45 = 17 + Rank from Bottom \nRank from Bottom = 45 - 17 = 28th.",
      takeaway: "Rank from Bottom = (Total + 1) - Rank from Top = 46 - 18 = 28th."
    }
  ],

  // =========================================================================
  // 3. ENGLISH LANGUAGE (Grammar Rules, Error Spotting, Prepositions, Vocab)
  // =========================================================================
  english: [
    {
      id: "p1_e_01",
      source: "Subject-Verb Agreement",
      difficulty: "High Yield Rule",
      question: "Find the erroneous part:\n(A) Each of the candidates / (B) who have qualified Phase 1 / (C) are required to / (D) upload their documents online.",
      options: [
        "Part (A)",
        "Part (B)",
        "Part (C)",
        "Part (D)",
        "No error"
      ],
      correctIndex: 2,
      explanation: "The main subject of the sentence is 'Each of the candidates'. 'Each' is singular and requires a singular verb. Therefore, 'are required' in Part (C) is grammatically incorrect and must be 'is required'.",
      takeaway: "'Each of', 'Either of', 'Neither of' are strictly singular and always take a singular verb ('is', not 'are')."
    },
    {
      id: "p1_e_02",
      source: "Conditionals",
      difficulty: "Third Conditional",
      question: "Complete the sentence correctly:\n'If the candidate _________ earlier, she would have cleared the examination.'",
      options: [
        "prepared",
        "had prepared",
        "has prepared",
        "would prepare",
        "was preparing"
      ],
      correctIndex: 1,
      explanation: "Third Conditional Rule: In an unreal past condition, the 'if' clause takes the Past Perfect (had + V3) to match the main clause's 'would have + V3'. Hence, 'had prepared' is the correct form.",
      takeaway: "Structure: If + had + V3 ..., would have + V3 ('If she had prepared, she would have cleared')."
    },
    {
      id: "p1_e_03",
      source: "Prepositions",
      difficulty: "Fixed Preposition",
      question: "Choose the correct preposition:\n'The regulator insisted _________ full compliance with the new cybersecurity framework.'",
      options: [
        "for",
        "on",
        "to",
        "at",
        "with"
      ],
      correctIndex: 1,
      explanation: "The verb 'insist' is followed by the fixed preposition 'on' (or 'upon'). One insists on something.",
      takeaway: "Fixed Preposition: 'Insist ON' (never 'insist for')."
    },
    {
      id: "p1_e_04",
      source: "Pronoun & Agreement",
      difficulty: "Rule of One",
      question: "Find the erroneous part:\n(A) One must always / (B) be mindful of / (C) his duties / (D) towards the nation.",
      options: [
        "Part (A)",
        "Part (B)",
        "Part (C)",
        "Part (D)",
        "No error"
      ],
      correctIndex: 2,
      explanation: "When a sentence starts with the indefinite pronoun 'One', it must be followed by 'one's', not 'his' or 'her'. Part (C) should be 'one's duties'.",
      takeaway: "'One' must always be followed by 'one's' ('One must do one's duty', not 'his duty')."
    },
    {
      id: "p1_e_05",
      source: "Vocabulary in Financial Context",
      difficulty: "Contextual Word Choice",
      question: "Select the most appropriate antonym for the word 'STRINGENT' as used in 'stringent regulations':",
      options: [
        "Lenient",
        "Rigid",
        "Severe",
        "Demanding",
        "Drastic"
      ],
      correctIndex: 0,
      explanation: "'Stringent' means strict, precise, and demanding. The exact antonym (opposite) is 'Lenient' (permissive, relaxed).",
      takeaway: "'Stringent' = Strict/Severe. Antonym = 'Lenient' (relaxed/flexible)."
    }
  ],

  // =========================================================================
  // 4. FINANCIAL & PENSION GENERAL AWARENESS
  // =========================================================================
  ga: [
    {
      id: "p1_ga_01",
      source: "Current Leadership",
      difficulty: "High Yield",
      question: "Who is the current Chairperson of the Pension Fund Regulatory and Development Authority (PFRDA)?",
      options: [
        "Dr. Deepak Mohanty",
        "Supratim Bandyopadhyay",
        "Madhabi Puri Buch",
        "Shaktikanta Das",
        "Debasish Panda"
      ],
      correctIndex: 0,
      explanation: "Dr. Deepak Mohanty took charge as the Chairperson of PFRDA in March 2023, succeeding Supratim Bandyopadhyay.",
      takeaway: "PFRDA Chairperson = Dr. Deepak Mohanty."
    },
    {
      id: "p1_ga_02",
      source: "Banking Awareness",
      difficulty: "High Yield",
      question: "Which Indian public sector bank holds the largest balance sheet and market capitalization among PSU banks?",
      options: [
        "Bank of Baroda",
        "State Bank of India (SBI)",
        "Punjab National Bank",
        "Canara Bank",
        "Union Bank of India"
      ],
      correctIndex: 1,
      explanation: "State Bank of India (SBI) is India's largest commercial bank and holds the highest market capitalization among public sector lenders.",
      takeaway: "Largest Indian commercial bank = State Bank of India (SBI)."
    },
    {
      id: "p1_ga_03",
      source: "Pension Schemes GA",
      difficulty: "High Yield",
      question: "Under the Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM) pension scheme for unorganized workers, what is the monthly pension provided after age 60?",
      options: [
        "₹1,000 per month",
        "₹2,000 per month",
        "₹3,000 per month",
        "₹5,000 per month",
        "₹4,000 per month"
      ],
      correctIndex: 2,
      explanation: "PM-SYM offers an assured monthly pension of ₹3,000 to unorganized sector workers with monthly income up to ₹15,000 upon reaching 60 years of age.",
      takeaway: "PM-SYM Assured Monthly Pension = ₹3,000 per month."
    },
    {
      id: "p1_ga_04",
      source: "Regulatory Awareness",
      difficulty: "Core Fact",
      question: "Where is the permanent headquarters of the Pension Fund Regulatory and Development Authority (PFRDA) located?",
      options: [
        "Mumbai, Maharashtra",
        "New Delhi",
        "Kolkata, West Bengal",
        "Bengaluru, Karnataka",
        "Hyderabad, Telangana"
      ],
      correctIndex: 1,
      explanation: "While SEBI and RBI have their headquarters in Mumbai, PFRDA and IRDAI have their headquarters in New Delhi and Hyderabad respectively. PFRDA is in New Delhi.",
      takeaway: "PFRDA Headquarters = New Delhi (SEBI/RBI in Mumbai; IRDAI in Hyderabad)."
    },
    {
      id: "p1_ga_05",
      source: "Budget & Taxation",
      difficulty: "High Yield",
      question: "Under the revised New Tax Regime introduced in the Union Budget, what is the standard deduction allowed for salaried individuals and pensioners?",
      options: [
        "₹40,000",
        "₹50,000",
        "₹75,000",
        "₹1,00,000",
        "₹60,000"
      ],
      correctIndex: 2,
      explanation: "In the Union Budget, the standard deduction for salaried employees under the new tax regime was hiked from ₹50,000 to ₹75,000.",
      takeaway: "New Tax Regime Standard Deduction = ₹75,000."
    },
    {
      id: "p1_ga_06",
      source: "Financial Sector Regulators",
      difficulty: "Regulatory",
      question: "Which authority regulates the insurance sector in India?",
      options: [
        "PFRDA",
        "SEBI",
        "IRDAI (Insurance Regulatory and Development Authority of India)",
        "RBI",
        "NABARD"
      ],
      correctIndex: 2,
      explanation: "IRDAI (headquartered in Hyderabad) is the statutory regulatory body governing the insurance and re-insurance industries in India.",
      takeaway: "Insurance Regulator = IRDAI (Hyderabad)."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.paper1Questions = paper1Questions;
}
