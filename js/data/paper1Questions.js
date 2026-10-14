// PFRDA Grade A - Paper 1 Complete Question Bank
// Comprehensive coverage of Quantitative Aptitude, Reasoning Ability, English Language, and Financial GA

const paper1Questions = {
  // =========================================================================
  // 1. QUANTITATIVE APTITUDE: 25 SPEED MATH & SHORTCUT DRILLS
  // =========================================================================
  quant: [
    {
      id: "p1_q_01",
      source: "Number Series: Difference Pattern",
      difficulty: "Speed Hack",
      question: "What will come in place of the question mark (?) in the following series?\n6, 14, 36, 98, 276, ?",
      options: [
        "780",
        "814",
        "796",
        "832",
        "764"
      ],
      correctIndex: 0,
      explanation: "Method: Look at the successive differences:\n14 - 6 = 8\n36 - 14 = 22\n98 - 36 = 62\n276 - 98 = 178\nNow check the multiplier between differences: 8 × 3 - 2 = 22; 22 × 3 - 4 = 62; 62 × 3 - 8 = 178.\nNext difference = 178 × 3 - 16 = 534 - 16 = 518.\nNext term = 276 + 518 = 780.",
      takeaway: "When single differences don't yield an AP, check multiplication (×3 - 2, ×3 - 4, ×3 - 8, ×3 - 16) on differences."
    },
    {
      id: "p1_q_02",
      source: "Number Series: Decimal Jump Pattern",
      difficulty: "High Yield Trap",
      question: "What will come in place of the question mark (?) in the following series?\n8, 4, 4, 6, 12, 30, ?",
      options: [
        "60",
        "75",
        "90",
        "105",
        "120"
      ],
      correctIndex: 2,
      explanation: "Method: Classic IBPS decimal multiplier series:\n8 × 0.5 = 4\n4 × 1.0 = 4\n4 × 1.5 = 6\n6 × 2.0 = 12\n12 × 2.5 = 30\nNext multiplier is 3.0: 30 × 3.0 = 90.",
      takeaway: "If a series halves once, stays equal, then grows rapidly, it is ALWAYS the decimal factor: ×0.5, ×1.0, ×1.5, ×2.0, ×2.5, ×3.0."
    },
    {
      id: "p1_q_03",
      source: "Number Series: Powers Pattern",
      difficulty: "5-Second Spot",
      question: "What will come in place of the question mark (?) in the following series?\n2, 9, 28, 65, 126, ?",
      options: [
        "197",
        "217",
        "215",
        "224",
        "216"
      ],
      correctIndex: 1,
      explanation: "Method: Identify cubes immediately:\n1³ + 1 = 2\n2³ + 1 = 9\n3³ + 1 = 28\n4³ + 1 = 65\n5³ + 1 = 126\nNext term is 6³ + 1 = 216 + 1 = 217.",
      takeaway: "Spot cubes nearby: 2, 9, 28, 65, 126 are all n³ + 1. (6³ + 1 = 217)."
    },
    {
      id: "p1_q_04",
      source: "Quadratic Equations: 2-Second Rule",
      difficulty: "Instant Free Mark",
      question: "Solve the equations and mark the correct relationship:\nI. x² + 7x - 18 = 0\nII. y² - 5y - 24 = 0",
      options: [
        "x > y",
        "x < y",
        "x ≥ y",
        "x ≤ y",
        "Relationship cannot be established (x = y or CND)"
      ],
      correctIndex: 4,
      explanation: "Method: Look at the constant terms. In Eq I, c = -18 (negative). In Eq II, c = -24 (negative).\nWhen both constant terms are negative, each equation MUST produce one positive root and one negative root:\nRoots of x = {-9, +2}\nRoots of y = {+8, -3}\nSince +2 > -3 but +2 < +8, neither is strictly larger. Never solve factoring when both constants are negative!",
      takeaway: "GOLDEN RULE: If both constants (c) are negative in a quadratic comparison, answer is ALWAYS 'Relationship cannot be established'!"
    },
    {
      id: "p1_q_05",
      source: "Quadratic Equations: Sign Chart Trick",
      difficulty: "5-Second Inspection",
      question: "Solve the equations without standard factoring:\nI. x² - 11x + 30 = 0\nII. y² + 13y + 40 = 0",
      options: [
        "x > y",
        "x < y",
        "x ≥ y",
        "x ≤ y",
        "Relationship cannot be established"
      ],
      correctIndex: 0,
      explanation: "Method: Use the Sign Chart:\nEquation I has signs (-, +) → Roots are BOTH POSITIVE (+, +): x = +5, +6.\nEquation II has signs (+, +) → Roots are BOTH NEGATIVE (-, -): y = -5, -8.\nEvery positive number is strictly greater than every negative number. Therefore, x > y without comparing pairs!",
      takeaway: "Sign Chart: (-, +) gives (+, +) roots. (+, +) gives (-, -) roots. Positive roots are always greater than negative roots → x > y."
    },
    {
      id: "p1_q_06",
      source: "Quadratic Equations: Coefficient Handling",
      difficulty: "High Yield",
      question: "Solve the equations:\nI. 2x² - 9x + 10 = 0\nII. 2y² - 13y + 21 = 0",
      options: [
        "x > y",
        "x < y",
        "x ≥ y",
        "x ≤ y",
        "Relationship cannot be established"
      ],
      correctIndex: 1,
      explanation: "Method: Both have same leading coefficient (2), so you don't even need to divide by 2!\nEq I: 2 × 10 = 20. Factors adding to -9 are -4, -5. Roots x = 4/2 = 2.0, 5/2 = 2.5.\nEq II: 2 × 21 = 42. Factors adding to -13 are -6, -7. Roots y = 6/2 = 3.0, 7/2 = 3.5.\nSince {2.0, 2.5} are both strictly less than {3.0, 3.5}, x < y.",
      takeaway: "When x² and y² have the same coefficient (2), simply compare raw factor values: x = {4, 5} vs y = {6, 7} → x < y."
    },
    {
      id: "p1_q_07",
      source: "Simplification: Percentage Multiplication Swap",
      difficulty: "Mental Math Hack",
      question: "Find the value of:\n64% of 250 + 28% of 500 = ?",
      options: [
        "280",
        "300",
        "320",
        "290",
        "310"
      ],
      correctIndex: 1,
      explanation: "Method: Use x% of y = y% of x.\n64% of 250 = 250% of 64 = 2.5 × 64 = 160.\n28% of 500 = 500% of 28 = 5 × 28 = 140.\nTotal = 160 + 140 = 300.",
      takeaway: "Swap percentages: 64% of 250 is difficult; 250% of 64 is easy (64 × 2.5 = 160). 28% of 500 = 28 × 5 = 140. 160 + 140 = 300."
    },
    {
      id: "p1_q_08",
      source: "Simplification: Unit Digit Elimination",
      difficulty: "3-Second Elimination",
      question: "Find the value of:\n456 + 789 - 324 + 112 = ?",
      options: [
        "1,029",
        "1,033",
        "1,035",
        "1,031",
        "1,043"
      ],
      correctIndex: 1,
      explanation: "Method: Calculate ONLY the unit digits before touching full numbers:\nUnit digits: 6 + 9 - 4 + 2 = 15 - 4 + 2 = 11 + 2 = 13 → Unit digit is 3!\nChecking the options:\n1,029 (ends in 9), 1,035 (ends in 5), 1,031 (ends in 1), 1,043 (ends in 3), 1,033 (ends in 3).\nFull sum: 456 + 789 = 1,245. 1,245 - 324 = 921. 921 + 112 = 1,033.",
      takeaway: "Always check unit digits first: (6 + 9 - 4 + 2 = 13 → ends in 3). Eliminates 3 options instantly."
    },
    {
      id: "p1_q_09",
      source: "Approximation: Regulatory Standard",
      difficulty: "High Speed",
      question: "What approximate value should come in place of (?) in the following question?\n√1023 × 4.98 + 19.89% of 450.12 = ?",
      options: [
        "220",
        "250",
        "280",
        "190",
        "310"
      ],
      correctIndex: 1,
      explanation: "Method: Round to the nearest friendly benchmark:\n√1023 ≈ √1024 = 32.\n4.98 ≈ 5.\n32 × 5 = 160.\n19.89% ≈ 20% = 1/5.\n450.12 ≈ 450.\n20% of 450 = 450 / 5 = 90.\nTotal = 160 + 90 = 250.",
      takeaway: "Never compute decimal fractions in approximation: √1023 ≈ 32 (32 × 5 = 160) + 20% of 450 (90) = 250."
    },
    {
      id: "p1_q_10",
      source: "Percentages: Price-Consumption Fraction Shift",
      difficulty: "Zero Calculation",
      question: "The price of petrol increases by 25%. By what percentage must a motorist reduce petrol consumption so that monthly fuel expenditure does not change?",
      options: [
        "15%",
        "20%",
        "25%",
        "18.75%",
        "16.67%"
      ],
      correctIndex: 1,
      explanation: "Method: Fraction Ladder Rule:\nIf price increases by a/b, consumption must reduce by a/(a + b).\n25% increase = +1/4.\nRequired reduction = 1/(4 + 1) = 1/5 = 20%.\nProof: Old cost: 100 × 100 = 10,000. New price = 125. 10,000 / 125 = 80 litres. Drop = 20 litres (20%).",
      takeaway: "Fraction Shift: Price rises by 1/4 → Consumption drops by 1/(4+1) = 1/5 = 20%. If price rose by 1/3 (33.3%), drop = 1/4 (25%)."
    },
    {
      id: "p1_q_11",
      source: "Percentages: Successive Change Formula",
      difficulty: "High Yield",
      question: "The length of a rectangular plot is increased by 20% while its breadth is decreased by 10%. What is the net percentage change in the area of the plot?",
      options: [
        "10% increase",
        "8% increase",
        "12% increase",
        "8% decrease",
        "No change"
      ],
      correctIndex: 1,
      explanation: "Method: Use net effect formula: A + B + (A × B) / 100.\nA = +20, B = -10.\nNet change = 20 - 10 + (20 × -10) / 100\n= 10 - 200 / 100 = 10 - 2 = +8% (8% increase).",
      takeaway: "Net % effect = A + B + (AB / 100). 20 - 10 - 2 = +8% increase."
    },
    {
      id: "p1_q_12",
      source: "Profit & Loss: Successive Discounts",
      difficulty: "High Yield",
      question: "An e-commerce retailer offers two successive discounts of 20% and 15% on a financial calculator. What is the single equivalent overall discount percentage?",
      options: [
        "35%",
        "32%",
        "33.5%",
        "30%",
        "31.5%"
      ],
      correctIndex: 1,
      explanation: "Method: Equivalent discount formula: D1 + D2 - (D1 × D2) / 100.\nEquivalent Discount = 20 + 15 - (20 × 15) / 100\n= 35 - 300 / 100 = 35 - 3 = 32%.\nAlternatively, assume marked price = 100: 100 × 0.80 × 0.85 = 68. Discount = 100 - 68 = 32%.",
      takeaway: "Equivalent Discount = D1 + D2 - (D1 × D2)/100 = 20 + 15 - 3 = 32% (NOT 35%!)."
    },
    {
      id: "p1_q_13",
      source: "Profit & Loss: Dishonest Dealer Trick",
      difficulty: "High Yield Shortcut",
      question: "A merchant claims to sell pulses at cost price, but uses a false weight of 900 grams instead of 1 kilogram (1000 grams). What is his true profit percentage?",
      options: [
        "10%",
        "11.11%",
        "9.09%",
        "12.5%",
        "15%"
      ],
      correctIndex: 1,
      explanation: "Method: Dishonest dealer formula: [Error / (True Weight - Error)] × 100.\nError = 1000 - 900 = 100 grams.\nTrue profit = [100 / 900] × 100 = 1/9 = 11.11%.\nWhy? Because he only invests the cost of 900g to collect the price of 1000g. Profit = 100g on an investment of 900g.",
      takeaway: "Dishonest seller profit = (Error ÷ Actual weight delivered) × 100 = (100 ÷ 900) × 100 = 11.11% (NOT 10%!)."
    },
    {
      id: "p1_q_14",
      source: "Simple Interest: Multi-Doubling Rule",
      difficulty: "Speed Formula",
      question: "A sum of money invested under Simple Interest doubles itself in 5 years. In how many years will it become 4 times (quadruple) itself at the same interest rate?",
      options: [
        "10 years",
        "12 years",
        "15 years",
        "20 years",
        "16 years"
      ],
      correctIndex: 2,
      explanation: "Method: In Simple Interest, only INTEREST is earned linearly!\nTo double (2P): Interest earned = 2P - P = 1P. Time taken = 5 years.\nTo become 4 times (4P): Interest needed = 4P - P = 3P.\nIf 1P interest takes 5 years, 3P interest takes 3 × 5 = 15 years!",
      takeaway: "In SI, compare interest units, NOT total amount: 1 unit interest = 5 yrs → 3 units interest (to become 4x) = 3 × 5 = 15 yrs."
    },
    {
      id: "p1_q_15",
      source: "Compound vs Simple Interest: 2-Year Difference",
      difficulty: "Formula Direct",
      question: "What is the difference between Compound Interest and Simple Interest on a principal of ₹8,000 for 2 years at 10% per annum?",
      options: [
        "₹60",
        "₹75",
        "₹80",
        "₹90",
        "₹100"
      ],
      correctIndex: 2,
      explanation: "Method: Direct 2-year difference formula: Difference = P × (R / 100)².\nDifference = 8,000 × (10 / 100)²\n= 8,000 × (1 / 10)² = 8,000 × 1 / 100 = ₹80.\nVerification: SI for 2 yrs = 20% of 8,000 = 1,600. CI for 2 yrs = 10 + 10 + 1 = 21% of 8,000 = 1,680. Diff = 1,680 - 1,600 = ₹80.",
      takeaway: "2-Year CI - SI difference formula = P × (R / 100)². For 10% rate, Difference is always exactly 1% of Principal = ₹80."
    },
    {
      id: "p1_q_16",
      source: "Ages: Invariant Age Difference Method",
      difficulty: "No-Algebra Method",
      question: "The present ages of Aman and Bharat are in the ratio 3 : 5. After 6 years, the ratio of their ages becomes 2 : 3. What is Aman's present age?",
      options: [
        "15 years",
        "18 years",
        "24 years",
        "12 years",
        "20 years"
      ],
      correctIndex: 1,
      explanation: "Method: The age difference between two people NEVER changes across time!\nRatio 1 (Present): 3 : 5 → Difference is 2 units.\nRatio 2 (In 6 yrs): 2 : 3 → Difference is 1 unit.\nMultiply Ratio 2 by 2 so differences match: 2 × (2 : 3) = 4 : 6.\nNow compare: Aman goes from 3 units to 4 units (+1 unit). Bharat goes from 5 units to 6 units (+1 unit).\n1 unit change = 6 years.\nAman's present age = 3 units = 3 × 6 = 18 years.",
      takeaway: "Equalize ratio differences: (3:5, diff 2) vs (4:6, diff 2). Each grew by 1 unit = 6 years. Aman = 3 × 6 = 18 years."
    },
    {
      id: "p1_q_17",
      source: "Time and Work: Leaving Work Before Completion",
      difficulty: "LCM Units Master",
      question: "A can complete a project in 12 days and B can complete it in 18 days. They begin working together, but A leaves 2 days before the project is completed. How many total days did it take to complete the project?",
      options: [
        "7.2 days",
        "8.4 days",
        "8.0 days",
        "9.0 days",
        "6.5 days"
      ],
      correctIndex: 1,
      explanation: "Method: LCM Total Units.\nTotal Work = LCM(12, 18) = 36 units.\nA's efficiency = 36 / 12 = 3 units/day.\nB's efficiency = 36 / 18 = 2 units/day.\n'A leaves 2 days before completion' means B worked ALONE for the final 2 days!\nWork done by B alone in last 2 days = 2 days × 2 units/day = 4 units.\nRemaining work done together = 36 - 4 = 32 units.\nCombined efficiency of A and B = 3 + 2 = 5 units/day.\nDays worked together = 32 / 5 = 6.4 days.\nTotal project time = 6.4 days + 2 days = 8.4 days.",
      takeaway: "Work backwards: B worked alone for the last 2 days (4 units). Remaining 32 units done together at 5 units/day = 6.4 days. Total = 8.4 days."
    },
    {
      id: "p1_q_18",
      source: "Time and Work: Men / Women Equivalence",
      difficulty: "High Yield",
      question: "4 men or 6 women can complete an audit assignment in 16 days. In how many days can 2 men and 9 women complete the same assignment?",
      options: [
        "8 days",
        "10 days",
        "12 days",
        "6 days",
        "14 days"
      ],
      correctIndex: 0,
      explanation: "Method: Convert to a single gender unit.\n4 Men = 6 Women → 1 Man = 6/4 = 1.5 Women (or 2 Men = 3 Women).\nTarget team: 2 Men + 9 Women = 3 Women + 9 Women = 12 Women.\nOriginal: 6 Women take 16 days.\nNew team: 12 Women (twice as many workers!).\nSince workers are doubled, time is halved: 16 / 2 = 8 days.",
      takeaway: "2 Men = 3 Women. Target team = 3 + 9 = 12 Women. 6 Women take 16 days → 12 Women take 16 ÷ 2 = 8 days."
    },
    {
      id: "p1_q_19",
      source: "Pipes & Cisterns: Net Flow Rate",
      difficulty: "LCM Units",
      question: "Inlet Pipe A fills a reservoir in 6 hours, while Drain Pipe B empties it in 9 hours. If both pipes are opened together when the reservoir is empty, in how many hours will it be filled?",
      options: [
        "12 hours",
        "15 hours",
        "18 hours",
        "24 hours",
        "16 hours"
      ],
      correctIndex: 2,
      explanation: "Method: Total capacity = LCM(6, 9) = 18 units.\nInlet A rate = +18 / 6 = +3 units/hour.\nDrain B rate = -18 / 9 = -2 units/hour.\nNet rate when both open = +3 - 2 = +1 unit/hour.\nTime to fill 18 units = 18 / 1 = 18 hours.",
      takeaway: "Capacity = 18 units. Pipe A (+3), Pipe B (-2) → Net filling rate = +1 unit/hr. Time = 18 ÷ 1 = 18 hours."
    },
    {
      id: "p1_q_20",
      source: "Speed, Time & Distance: Harmonic Average Speed",
      difficulty: "Classic Trap",
      question: "An inspection officer travels from Head Office to a branch at 60 km/h and returns along the exact same route at 40 km/h. What is her average speed for the round trip?",
      options: [
        "50 km/h",
        "48 km/h",
        "52 km/h",
        "45 km/h",
        "46.5 km/h"
      ],
      correctIndex: 1,
      explanation: "Method: Never take arithmetic average (60 + 40)/2 = 50 is FALSE because time spent at slower speed is longer!\nWhen distance is equal, Average Speed is the Harmonic Mean: [2xy / (x + y)].\nAverage Speed = (2 × 60 × 40) / (60 + 40)\n= 4,800 / 100 = 48 km/h.",
      takeaway: "Equal distance average speed = 2xy / (x + y). (2 × 60 × 40)/100 = 48 km/h (NEVER 50 km/h!)."
    },
    {
      id: "p1_q_21",
      source: "Trains: Relative Speed",
      difficulty: "High Yield",
      question: "Two trains of length 120 meters and 180 meters are travelling towards each other on parallel tracks at 54 km/h and 36 km/h respectively. In how many seconds will they completely cross each other?",
      options: [
        "10 seconds",
        "12 seconds",
        "15 seconds",
        "8 seconds",
        "14 seconds"
      ],
      correctIndex: 1,
      explanation: "Method: Relative speed in opposite direction = Sum of speeds.\nRelative Speed = 54 + 36 = 90 km/h.\nConvert to m/s: 90 × (5/18) = 25 m/s.\nTotal distance to clear = Sum of lengths = 120 + 180 = 300 meters.\nTime = Distance / Speed = 300 / 25 = 12 seconds.",
      takeaway: "Total distance = 120 + 180 = 300m. Relative speed = 90 km/h × 5/18 = 25 m/s. Time = 300 ÷ 25 = 12 seconds."
    },
    {
      id: "p1_q_22",
      source: "Boats & Streams: Basic Formulas",
      difficulty: "5-Second Formula",
      question: "A motorboat travels 24 km downstream in 2 hours and 16 km upstream in 2 hours. What is the speed of the water stream?",
      options: [
        "1 km/h",
        "2 km/h",
        "3 km/h",
        "1.5 km/h",
        "2.5 km/h"
      ],
      correctIndex: 1,
      explanation: "Method: Downstream speed (D) = 24 / 2 = 12 km/h.\nUpstream speed (U) = 16 / 2 = 8 km/h.\nSpeed of stream = (D - U) / 2 = (12 - 8) / 2 = 4 / 2 = 2 km/h.\n(Speed of boat in still water = (D + U) / 2 = (12 + 8) / 2 = 10 km/h).",
      takeaway: "Stream Speed = (Downstream - Upstream) ÷ 2 = (12 - 8) ÷ 2 = 2 km/h. Boat Speed = (D + U) ÷ 2 = 10 km/h."
    },
    {
      id: "p1_q_23",
      source: "Mixtures & Alligation: Water Addition",
      difficulty: "Ratio Inspection",
      question: "In a 40-litre mixture of milk and water, the ratio of milk to water is 3 : 1. How much water must be added to this mixture so that the ratio becomes 2 : 1?",
      options: [
        "4 litres",
        "5 litres",
        "6 litres",
        "8 litres",
        "10 litres"
      ],
      correctIndex: 1,
      explanation: "Method: In 40L at 3:1 ratio (4 parts):\nMilk = (3/4) × 40 = 30 litres.\nWater = (1/4) × 40 = 10 litres.\nWe are adding ONLY water, so milk quantity stays at 30 litres!\nIn the new ratio (2 : 1), 2 parts = 30 litres → 1 part = 15 litres.\nNew water quantity must be 15 litres.\nWater to add = 15 - 10 = 5 litres.",
      takeaway: "Milk is unchanged (30L). In new 2:1 ratio, 2 parts = 30L → 1 part water = 15L. Added water = 15 - 10 = 5 litres."
    },
    {
      id: "p1_q_24",
      source: "Data Interpretation: Rapid Ratio Reading",
      difficulty: "No Calculator Hack",
      question: "In an exam table, Branch X has 450 total candidates with 180 cleared, and Branch Y has 600 total candidates with 270 cleared. What is the ratio of clearing percentage of Branch X to Branch Y?",
      options: [
        "8 : 9",
        "9 : 8",
        "4 : 5",
        "5 : 6",
        "3 : 4"
      ],
      correctIndex: 0,
      explanation: "Method: Branch X rate = 180 / 450 = 18/45 = 2/5 = 40%.\nBranch Y rate = 270 / 600 = 27/60 = 9/20 = 45%.\nRatio = 40% : 45% = 8 : 9.",
      takeaway: "Simplify fractions before multiplying: 180/450 = 2/5 (40%) and 270/600 = 9/20 (45%). 40 : 45 = 8 : 9."
    },
    {
      id: "p1_q_25",
      source: "Probability: Combinations Without Replacement",
      difficulty: "High Yield Formula",
      question: "A box contains 4 red balls and 6 green balls (total 10 balls). If 2 balls are drawn at random without replacement, what is the probability that both are red?",
      options: [
        "2/15",
        "1/15",
        "3/10",
        "1/5",
        "4/25"
      ],
      correctIndex: 0,
      explanation: "Method: Multiplication rule without replacement:\nProbability of 1st red = 4 / 10.\nProbability of 2nd red = 3 / 9.\nCombined Probability = (4 / 10) × (3 / 9) = (2 / 5) × (1 / 3) = 2 / 15.\n(Alternatively via combinations: 4C2 / 10C2 = 6 / 45 = 2 / 15).",
      takeaway: "Without replacement: P(both red) = (4/10) × (3/9) = 12/90 = 2/15."
    }
  ],

  // =========================================================================
  // 2. REASONING ABILITY: 25 HIGH-SPEED ELIMINATION & TRICK DRILLS
  // =========================================================================
  reasoning: [
    {
      id: "p1_r_01",
      source: "Syllogisms: Only a Few Case",
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
      explanation: "Method: 'Only a few A are B' means two statements simultaneously: (1) Some A are B AND (2) Some A are NOT B.\nSince Some Pensions are Savings and all Savings are Funds, the overlapping pensions are definitely Funds (I follows).\nAlso, because 'Some Pensions are NOT Savings', ALL Pensions can NEVER be Savings (II follows).",
      takeaway: "'Only a few A are B' strictly implies 'All A can NEVER be B'. Both conclusions follow."
    },
    {
      id: "p1_r_02",
      source: "Syllogisms: Exclusive 'Only A are B'",
      difficulty: "Examiner Trap",
      question: "Statements:\nOnly Audits are Reports.\nSome Audits are Reviews.\nConclusions:\nI. Some Reviews are Reports.\nII. All Reports being Audits is a certainty.",
      options: [
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Either I or II follows",
        "Neither I nor II follows",
        "Both follow"
      ],
      correctIndex: 1,
      explanation: "Method: 'Only A are B' converts to 'All B are A' with an EXCLUSIVE LOCK — no other category can ever touch B!\nSo 'Only Audits are Reports' means All Reports are inside Audits, and NO other element (Reviews) can EVER touch Reports.\nConclusion I (Some Reviews are Reports) is FALSE.\nConclusion II (All Reports are Audits) is a 100% certainty (TRUE).",
      takeaway: "'Only A are B' = All B are A, and B has an electric fence preventing any third category from touching it."
    },
    {
      id: "p1_r_03",
      source: "Syllogisms: Either-Or Complementary Pair",
      difficulty: "5-Second Spot",
      question: "Statements:\nSome Officers are Managers.\nSome Managers are Directors.\nConclusions:\nI. Some Officers are Directors.\nII. No Officer is a Director.",
      options: [
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Either Conclusion I or II follows",
        "Neither follows",
        "Both follow"
      ],
      correctIndex: 2,
      explanation: "Method: Check the 3 rules of Either-Or:\n1. Same subject and predicate (Officers and Directors in both).\n2. Both individual conclusions are uncertain / don't follow independently.\n3. Form a complementary pair: (Some + No).\nSince all 3 conditions are satisfied, exactly one must be true → Either I or II follows.",
      takeaway: "Either-Or conditions: Same elements + both doubtful + complementary pair (Some + No or Some + Some Not)."
    },
    {
      id: "p1_r_04",
      source: "Syllogisms: Possibility with Negative Boundary",
      difficulty: "High Yield",
      question: "Statements:\nNo Bond is Equity.\nAll Equities are Shares.\nConclusions:\nI. Some Shares are not Bonds.\nII. All Bonds being Shares is a possibility.",
      options: [
        "Only Conclusion I follows",
        "Only Conclusion II follows",
        "Either I or II follows",
        "Neither follows",
        "Both Conclusions I and II follow"
      ],
      correctIndex: 4,
      explanation: "Method: All Equities are inside Shares. But NO Equity can touch Bond. Therefore, that portion of Shares which is Equity can NEVER be Bond → Conclusion I is True!\nCan all Bonds go inside the non-equity part of Shares? Yes, as long as they don't touch Equity. So 'All Bonds being Shares is a possibility' is True (Conclusion II follows).",
      takeaway: "Bonds cannot touch Equity, but Bonds CAN sit inside the remaining region of Shares. Both follow."
    },
    {
      id: "p1_r_05",
      source: "Inequalities: Open Gate King Method",
      difficulty: "5-Second Inspection",
      question: "Statements: P > Q ≥ R = S > T\nConclusions:\nI. P > S\nII. Q > T",
      options: [
        "Only Conclusion I is true",
        "Only Conclusion II is true",
        "Either I or II is true",
        "Neither is true",
        "Both Conclusions I and II are true"
      ],
      correctIndex: 4,
      explanation: "Method: Open Gate traversal:\nConclusion I (P > S): Can we go P → Q → R → S? Yes, all gates open (> and ≥ and =). Is there at least one strict '>' (King) along the way? Yes (P > Q) → True!\nConclusion II (Q > T): Can we go Q → R → S → T? Yes, all gates open. Is there at least one strict '>' (King)? Yes (S > T) → True!",
      takeaway: "Open Gate Rule: If path is open and at least one strict '>' is present, the '>' conclusion is TRUE."
    },
    {
      id: "p1_r_06",
      source: "Inequalities: Blocked Path Rule",
      difficulty: "2-Second Elimination",
      question: "Statements: A ≥ B > C < D ≤ E\nConclusions:\nI. A > D\nII. B ≤ E",
      options: [
        "Only Conclusion I is true",
        "Only Conclusion II is true",
        "Either I or II is true",
        "Neither Conclusion I nor II is true",
        "Both are true"
      ],
      correctIndex: 3,
      explanation: "Method: Spot opposite arrows: B > C < D.\nBetween A and D: At 'C < D', the gate is closed from the left. Path blocked → Conclusion I is False!\nBetween B and E: At 'C < D', opposite directions meet. Path blocked → Conclusion II is False!\nNeither conclusion is true.",
      takeaway: "Whenever opposite signs face each other (> and <), the path is BLOCKED. No definite relation can ever exist!"
    },
    {
      id: "p1_r_07",
      source: "Inequalities: Weak vs Strict Sign Check",
      difficulty: "High Yield",
      question: "Statements: K ≥ L ≥ M = N\nConclusions:\nI. K > N\nII. K = N",
      options: [
        "Only Conclusion I is true",
        "Only Conclusion II is true",
        "Either Conclusion I or II is true",
        "Neither is true",
        "Both are true"
      ],
      correctIndex: 2,
      explanation: "Method: Traversing K to N gives K ≥ N (since only ≥ and = are present, no strict > exists).\nK ≥ N means EITHER K > N OR K = N.\nNeither conclusion is true alone, but together they cover both possibilities (K > N or K = N) → Either I or II is true!",
      takeaway: "When statement yields K ≥ N, individual conclusions K > N and K = N form an 'Either / Or' pair!"
    },
    {
      id: "p1_r_08",
      source: "Inequalities: Combined Broken Chain",
      difficulty: "High Speed",
      question: "Statements: X > Y ≥ Z; W < Y ≤ V\nConclusions:\nI. X > W\nII. V ≥ Z",
      options: [
        "Only Conclusion I is true",
        "Only Conclusion II is true",
        "Either I or II is true",
        "Neither is true",
        "Both Conclusions I and II are true"
      ],
      correctIndex: 4,
      explanation: "Method: Connect through common term Y:\nChain 1: X > Y > W (since W < Y means Y > W) → Path X to W is open with strict '>' → X > W is True!\nChain 2: V ≥ Y ≥ Z (since Y ≤ V means V ≥ Y) → Path V to Z is open with only '≥' → V ≥ Z is True!",
      takeaway: "Link separate statements via the bridge variable (Y): X > Y > W (so X > W is True). V ≥ Y ≥ Z (so V ≥ Z is True)."
    },
    {
      id: "p1_r_09",
      source: "Direction Sense: Clockwise Turns",
      difficulty: "No Drawing Hack",
      question: "A compliance auditor starts from Point A, walks 10m North, turns Right and walks 15m, turns Right and walks 10m, and finally turns Left and walks 5m to reach Point B. In which direction and distance is Point B from Point A?",
      options: [
        "20m, East",
        "25m, East",
        "15m, South",
        "20m, North",
        "10m, West"
      ],
      correctIndex: 0,
      explanation: "Method: Net vector math:\nVertical: 10m North (+Y) then Right twice = 10m South (-Y). Net vertical = 10 - 10 = 0!\nHorizontal: First Right = 15m East (+X). From facing South, a Left turn = East (+X) for 5m. Total East = 15 + 5 = 20m.\nPoint B is exactly 20m East of Point A.",
      takeaway: "Opposite directions cancel: 10m North and 10m South = 0. Horizontal = 15m East + 5m East = 20m East."
    },
    {
      id: "p1_r_10",
      source: "Direction Sense: Pythagorean Triplet Shortcut",
      difficulty: "5-Second Triplet",
      question: "Rahul walks 9 meters West, then turns to his left (South) and walks 12 meters. What is the shortest straight-line distance between Rahul and his starting point?",
      options: [
        "21 meters",
        "15 meters",
        "18 meters",
        "16 meters",
        "14 meters"
      ],
      correctIndex: 1,
      explanation: "Method: Right triangle with legs 9 and 12.\nRecognize the 3-4-5 triplet scaled by 3: (3×3 = 9, 4×3 = 12, 5×3 = 15).\nShortest distance = √(9² + 12²) = √(81 + 144) = √225 = 15 meters.",
      takeaway: "Memorize triplets: 3-4-5 scaled by 3 gives (9, 12, 15). Shortest distance = 15m."
    },
    {
      id: "p1_r_11",
      source: "Direction Sense: Sunrise Shadow Rule",
      difficulty: "High Yield",
      question: "One morning after sunrise, Priya and Vikram were standing in a park talking to each other face-to-face. If Vikram's shadow fell exactly to the left of Priya, which direction was Priya facing?",
      options: [
        "East",
        "West",
        "North",
        "South",
        "North-East"
      ],
      correctIndex: 2,
      explanation: "Method: Step 1: In the morning (sunrise), the sun is in the East, so all shadows fall towards the WEST.\nStep 2: The shadow is to Priya's LEFT. That means Priya's LEFT side is facing West.\nStep 3: If West is to your left, you MUST be facing NORTH!",
      takeaway: "Morning shadow is always in the WEST. If West = Left of person, person is facing NORTH. If West = Right, person faces SOUTH."
    },
    {
      id: "p1_r_12",
      source: "Blood Relations: Inside-Out Pronoun Breakdown",
      difficulty: "Mental Deduction",
      question: "Pointing to a man, a woman says: 'His only brother is the father of my daughter's father.' How is the man related to the woman's husband?",
      options: [
        "Father",
        "Uncle",
        "Brother",
        "Grandfather",
        "Father-in-law"
      ],
      correctIndex: 1,
      explanation: "Method: Break down from the back:\n1. 'My daughter's father' = Woman's Husband.\n2. 'Father of my daughter's father' = Husband's Father (Father-in-law of woman).\n3. 'His only brother is [Husband's Father]' → The man's brother is the husband's father.\nTherefore, the man is the Uncle (Paternal Uncle) of the husband!",
      takeaway: "Husband's father = Father. Father's brother = Uncle."
    },
    {
      id: "p1_r_13",
      source: "Blood Relations: Coded Family Tree",
      difficulty: "High Yield",
      question: "Read the codes: A + B means A is brother of B; A - B means A is mother of B; A × B means A is sister of B. Which of the following expressions indicates that 'P is the maternal uncle of Q'?",
      options: [
        "P + R - Q",
        "P - R + Q",
        "P × R - Q",
        "Q + R - P",
        "P + R × Q"
      ],
      correctIndex: 0,
      explanation: "Method: Maternal Uncle means P must be the brother (+) of Q's mother (-).\nP + R → P is brother of R.\nR - Q → R is mother of Q.\nSince P is the brother of Q's mother R, P is strictly the maternal uncle of Q!",
      takeaway: "Maternal uncle = Mother's brother. 'P + R' (P is brother of R) and 'R - Q' (R is mother of Q) → P + R - Q."
    },
    {
      id: "p1_r_14",
      source: "Blood Relations: Gender Assumption Trap",
      difficulty: "Examiner Trap",
      question: "A is the brother of B. B is the child of C. How is B related to A?",
      options: [
        "Brother",
        "Sister",
        "Son",
        "Cannot be determined",
        "Cousin"
      ],
      correctIndex: 3,
      explanation: "Method: Classic IBPS Trap! We know A is male (brother of B). But what is B's gender? B could be a male (brother of A) or a female (sister of A). The statement only says 'B is the child of C'.\nWithout knowing B's gender, B's relationship to A cannot be determined!",
      takeaway: "NEVER assume gender from sibling or child statements unless explicitly indicated as male/female. Answer is CND."
    },
    {
      id: "p1_r_15",
      source: "Order & Ranking: Basic Total Formula",
      difficulty: "5-Second Formula",
      question: "In a merit list of qualified candidates, Ananya ranks 14th from the top and 32nd from the bottom. How many total candidates are in the list?",
      options: [
        "46",
        "45",
        "47",
        "44",
        "48"
      ],
      correctIndex: 1,
      explanation: "Method: Total = (Rank from Top + Rank from Bottom) - 1.\nTotal = (14 + 32) - 1 = 46 - 1 = 45 candidates.\n(Subtract 1 because Ananya was counted twice: once from the top and once from the bottom).",
      takeaway: "Total in row = Top + Bottom - 1 = 14 + 32 - 1 = 45."
    },
    {
      id: "p1_r_16",
      source: "Order & Ranking: Position Swap Method",
      difficulty: "High Yield",
      question: "In a row of students, Karan is 11th from the left and Suman is 17th from the right. When they interchange their positions, Karan becomes 23rd from the left. What is the total number of students in the row?",
      options: [
        "38",
        "39",
        "40",
        "41",
        "37"
      ],
      correctIndex: 1,
      explanation: "Method: Position swap shortcut:\nWhen Karan moves to Suman's original position, that single spot is known from BOTH ends:\n- From Left: Karan's new position = 23rd.\n- From Right: Suman's original position = 17th.\nTotal = (New Left + Original Right) - 1 = 23 + 17 - 1 = 40 - 1 = 39 students!",
      takeaway: "Swap total formula = (New position of 1st person + Original position of 2nd person) - 1 = 23 + 17 - 1 = 39."
    },
    {
      id: "p1_r_17",
      source: "Order & Ranking: Overlapping Row Count",
      difficulty: "High Yield Trap",
      question: "In a row of 40 students, Rakesh is 24th from the left and Suresh is 22nd from the right. How many students are sitting between Rakesh and Suresh?",
      options: [
        "4",
        "6",
        "5",
        "8",
        "3"
      ],
      correctIndex: 0,
      explanation: "Method: Check for overlap: Sum of positions = 24 + 22 = 46.\nSince 46 > 40 (Total), this is an OVERLAPPING row!\nOverlapping Between Formula: (Left + Right) - Total - 2.\nBetween count = (24 + 22) - 40 - 2 = 46 - 42 = 4 students.",
      takeaway: "If (L + R) > Total, row overlaps! Between count = (L + R) - Total - 2 = 46 - 40 - 2 = 4."
    },
    {
      id: "p1_r_18",
      source: "Coding-Decoding: Alternating Shift",
      difficulty: "Speed Hack",
      question: "In a certain code, 'REGULATOR' is written as 'SFHVKBUNS'. What is the code for 'PENSION' in that system?",
      options: [
        "QDORHPM",
        "QFMTHPO",
        "QDMTHPO",
        "QFMTHPM",
        "QFMTHPN"
      ],
      correctIndex: 1,
      explanation: "Method: Analyze the pattern in REGULATOR:\nR(+1)=S, E(+1)=F, G(+1)=H, U(+1)=V, L(-1)=K, A(+1)=B, T(+1)=U, O(-1)=N, R(+1)=S.\nFor PENSION (shift +1 across letters with specific phonetic consonants):\nP(+1)=Q, E(+1)=F, N(-1)=M, S(+1)=T, I(-1)=H, O(+1)=P, N(+1)=O → QFMTHPO.",
      takeaway: "Check first and last letters first: P(+1) = Q, N(+1) = O. Instantly rules out options."
    },
    {
      id: "p1_r_19",
      source: "Coding-Decoding: Reverse Alphabet Pairs",
      difficulty: "Mental Reflex",
      question: "If 'MONEY' is coded as 'NLMVB', how is 'FUNDS' coded in that system?",
      options: [
        "UFMWH",
        "UFMVH",
        "VFNWH",
        "UEMWH",
        "UFMVG"
      ],
      correctIndex: 0,
      explanation: "Method: Opposite letter pairs in alphabet (Sum of positions = 27):\nM (13) ↔ N (14)\nO (15) ↔ L (12)\nN (14) ↔ M (13)\nE (5) ↔ V (22)\nY (25) ↔ B (2)\nApply opposite pairs to FUNDS:\nF ↔ U (Fair-Unfair)\nU ↔ F (Unfair-Fair)\nN ↔ M (Man)\nD ↔ W (Door-Window)\nS ↔ H (High-School)\nResult: UFMWH.",
      takeaway: "Opposite alphabet pairs: F-U, U-F, N-M, D-W, S-H = UFMWH."
    },
    {
      id: "p1_r_20",
      source: "Coding-Decoding: Chinese Elimination",
      difficulty: "20-Second Elimination",
      question: "In a code language:\n'pension fund scheme' is coded as 'ti ro na'\n'nps fund market' is coded as 'ro da ku'\n'scheme interest rate' is coded as 'na pa ze'\nWhat is the code for 'pension'?",
      options: [
        "ro",
        "na",
        "ti",
        "da",
        "ku"
      ],
      correctIndex: 2,
      explanation: "Method: Common word elimination:\nBetween sentence 1 and 2: Common word is 'fund' → Common code is 'ro'. So fund = ro.\nBetween sentence 1 and 3: Common word is 'scheme' → Common code is 'na'. So scheme = na.\nIn sentence 1 ('pension fund scheme' = 'ti ro na'), 'ro' and 'na' are used up. The only remaining word is 'pension', and only remaining code is 'ti'!\nTherefore, pension = ti.",
      takeaway: "Eliminate common words: fund = ro, scheme = na → Remaining word 'pension' = 'ti'."
    },
    {
      id: "p1_r_21",
      source: "Alpha-Numeric Series: Directional Math Rule",
      difficulty: "Formula Direct",
      question: "In the sequence: A 5 B % C 8 D # E 2 F & G 9 H @ J 4 K\nWhich element is the 4th to the right of the 11th element from the left end?",
      options: [
        "F",
        "&",
        "G",
        "9",
        "H"
      ],
      correctIndex: 3,
      explanation: "Method: Directional Math Shortcut:\nOpposite directions (Left and Right) → ADD: 11 + 4 = 15th from left end!\n(Rule: Left + Right = Add; Left + Left = Subtract; Right + Right = Subtract).\nCount 15 elements from the left end:\n1(A), 2(5), 3(B), 4(%), 5(C), 6(8), 7(D), 8(#), 9(E), 10(2), 11(F), 12(&), 13(G), 14(9)... 15th is 9 (or G depending on count index: 11+4=15). In this sequence 15th element is 9.",
      takeaway: "Rule: 'Right of Left' = ADD (11 + 4 = 15th from left). 'Left of Left' = SUBTRACT."
    },
    {
      id: "p1_r_22",
      source: "Seating Arrangement: Linear Row Parallel Cases",
      difficulty: "Parallel Cases Method",
      question: "7 officers (P, Q, R, S, T, U, V) sit in a straight line facing North. R sits 3rd from the extreme left end. Only two people sit between R and T. Who can possibly sit at the extreme right end if T is to the right of R?",
      options: [
        "T",
        "R",
        "Either U, V, Q, or S",
        "P only",
        "Cannot be seated"
      ],
      correctIndex: 2,
      explanation: "Method: 7 positions: [1, 2, 3, 4, 5, 6, 7].\nR is at position 3: [_ , _ , R , _ , _ , _ , _ ].\nTwo people between R and T: T can be at position 6 (3 + 2 + 1 = 6).\nPositions are: [1, 2, R, 4, 5, T, 7].\nPosition 7 is the extreme right end. Any remaining officer (U, V, Q, S, P) can sit at position 7.",
      takeaway: "Draw 7 fixed slots [1..7]. Place R at 3, skip two (4, 5), T is at 6. Position 7 is the extreme right end."
    },
    {
      id: "p1_r_23",
      source: "Seating Arrangement: Circular Clockwise Rule",
      difficulty: "High Yield",
      question: "6 officers (A, B, C, D, E, F) sit around a circular table facing the center. A sits second to the left of D. B sits opposite to A. C sits immediately to the right of D. Who sits opposite to C?",
      options: [
        "A",
        "E",
        "F",
        "Cannot be determined without E/F position",
        "B"
      ],
      correctIndex: 3,
      explanation: "Method: 6 seats facing center:\nPlace D at 6 o'clock. A sits second to left (clockwise) → A is at 2 o'clock.\nB is opposite A → B is at 8 o'clock.\nC sits immediately right (anti-clockwise) of D → C is at 4 o'clock.\nThe seat opposite C is 10 o'clock. Either E or F can occupy this seat because no clue specifies their relative order.\nHence, the exact person cannot be determined without additional information.",
      takeaway: "Facing center: Left = Clockwise, Right = Anti-Clockwise. If two people (E/F) have no distinguishing clue, individual seat is CND."
    },
    {
      id: "p1_r_24",
      source: "Floor Puzzle: Odd/Even Placement Triage",
      difficulty: "Strategy Rule",
      question: "In a 6-floor building (floors 1 to 6), Ankit lives on an odd-numbered floor above floor 3. How many possible floors can Ankit live on?",
      options: [
        "1 floor (Floor 5 only)",
        "2 floors (Floor 3 and 5)",
        "3 floors (Floor 1, 3, 5)",
        "2 floors (Floor 4 and 6)",
        "1 floor (Floor 6 only)"
      ],
      correctIndex: 0,
      explanation: "Method: Floors are 1, 2, 3, 4, 5, 6.\nCondition 1: Above floor 3 → Options are 4, 5, 6.\nCondition 2: Odd-numbered floor → Of {4, 5, 6}, only 5 is odd!\nTherefore, Ankit must live on Floor 5. Exactly 1 possible floor.",
      takeaway: "Eliminate by constraints: Above 3 = {4, 5, 6}. Odd = {5}. Eliminates multiple cases in 5 seconds."
    },
    {
      id: "p1_r_25",
      source: "Critical Reasoning: Implicit Assumption",
      difficulty: "Regulatory Logic",
      question: "Statement: 'PFRDA launched an extensive nationwide multimedia campaign to educate citizens on the long-term compounding benefits of NPS Tier-I.'\nWhich of the following is an implicit assumption?",
      options: [
        "Citizens will entirely stop investing in bank fixed deposits",
        "Multimedia campaigns can effectively influence public awareness and financial decision-making",
        "NPS Tier-I offers higher returns than all mutual funds in India",
        "Citizens only care about immediate tax deductions",
        "The government will make NPS mandatory for all private citizens"
      ],
      correctIndex: 1,
      explanation: "Method: An assumption is something taken for granted by the author when making the decision.\nWhy would any regulator spend money on a nationwide multimedia campaign? Because they assume that multimedia campaigns ARE capable of reaching and influencing public awareness!\nExtreme statements ('entirely stop', 'higher returns than all', 'mandatory for all') are NEVER valid assumptions.",
      takeaway: "Valid assumptions are logical prerequisites, never extreme generalizations ('all', 'never', 'entirely')."
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
