// PFRDA Grade A - Management & Organizational Behavior Question Bank
// High-Yield Theoretical & Practical Questions with Explanations

const managementQuestions = [
  {
    id: "mgmt_01",
    source: "PFRDA / SEBI Memory-Based",
    difficulty: "High Yield",
    question: "According to Herzberg's Two-Factor Theory, which of the following is categorized as a 'Hygiene Factor' rather than a 'Motivator'?",
    options: [
      "Recognition for achievement",
      "Salary and working conditions",
      "Challenging work itself",
      "Personal growth and advancement",
      "Sense of responsibility"
    ],
    correctIndex: 1,
    explanation: "Herzberg distinguished between Hygiene factors (extrinsic factors like salary, company policies, supervision, working conditions) which only prevent dissatisfaction, and Motivators (intrinsic factors like recognition, achievement, advancement, responsibility) which truly motivate employees.",
    takeaway: "Hygiene Factors = Salary, working conditions, job security (prevent dissatisfaction, do not create motivation)."
  },
  {
    id: "mgmt_02",
    source: "PFRDA / SEBI Memory-Based",
    difficulty: "High Yield",
    question: "In Douglas McGregor's Theory X and Theory Y, which statement accurately reflects an assumption of Theory X?",
    options: [
      "Employees naturally seek responsibility and exercise self-direction",
      "Work is as natural to employees as play or rest",
      "Employees are inherently lazy, dislike work, and must be coerced or closely supervised",
      "Employees possess creativity and ingenuity that are widely distributed",
      "Employees are motivated by social and esteem needs"
    ],
    correctIndex: 2,
    explanation: "Theory X represents a pessimistic view: employees dislike work, lack ambition, avoid responsibility, and require continuous supervision and threats of punishment. Theory Y represents an optimistic, self-motivated view.",
    takeaway: "Theory X = Authoritarian/Pessimistic view (dislike work); Theory Y = Participative/Optimistic view (self-motivated)."
  },
  {
    id: "mgmt_03",
    source: "Core Theory",
    difficulty: "High Yield",
    question: "In Maslow's Hierarchy of Needs, what is the highest-level need at the pinnacle of the pyramid?",
    options: [
      "Safety and Security needs",
      "Social / Belongingness needs",
      "Esteem needs",
      "Self-Actualization needs",
      "Physiological needs"
    ],
    correctIndex: 3,
    explanation: "Maslow's hierarchy from lowest to highest: 1. Physiological -> 2. Safety -> 3. Social/Belonging -> 4. Esteem -> 5. Self-Actualization (realizing one's full personal potential).",
    takeaway: "Top of Maslow's pyramid = Self-Actualization (growth and peak potential)."
  },
  {
    id: "mgmt_04",
    source: "PFRDA Memory-Based",
    difficulty: "High Yield",
    question: "On the Blake and Mouton Managerial Grid, which coordinates represent 'Team Management' (high concern for both production and people)?",
    options: [
      "(1, 1)",
      "(9, 1)",
      "(1, 9)",
      "(5, 5)",
      "(9, 9)"
    ],
    correctIndex: 4,
    explanation: "Blake & Mouton Grid: (1,1) is Impoverished Management; (9,1) is Authority-Compliance / Task Management; (1,9) is Country Club Management; (5,5) is Middle-of-the-Road Management; (9,9) is Team Management (optimal style).",
    takeaway: "(9,9) = Team Management (High People, High Production - Ideal Style)."
  },
  {
    id: "mgmt_05",
    source: "Leadership Theories",
    difficulty: "Conceptual",
    question: "A leadership style where the leader gives complete freedom to subordinates to make decisions with minimal or no interference is called:",
    options: [
      "Autocratic / Authoritarian leadership",
      "Democratic / Participative leadership",
      "Laissez-Faire / Free-Rein leadership",
      "Transactional leadership",
      "Paternalistic leadership"
    ],
    correctIndex: 2,
    explanation: "Laissez-faire (French for 'let them do') or free-rein leadership gives complete autonomy to the group with minimal leader involvement or guidance.",
    takeaway: "Complete freedom / hands-off style = Laissez-Faire leadership."
  },
  {
    id: "mgmt_06",
    source: "PFRDA / SEBI Memory-Based",
    difficulty: "High Yield",
    question: "In Victor Vroom's Expectancy Theory of Motivation, the motivational force is a product of which three variables?",
    options: [
      "Effort, Performance, and Reward",
      "Expectancy, Instrumentality, and Valence",
      "Existence, Relatedness, and Growth",
      "Needs, Drives, and Incentives",
      "Perception, Attitude, and Values"
    ],
    correctIndex: 1,
    explanation: "Vroom's formula is Motivation = Expectancy (effort leads to performance) × Instrumentality (performance leads to reward) × Valence (value placed on the reward).",
    takeaway: "Vroom's Formula = Expectancy × Instrumentality × Valence."
  },
  {
    id: "mgmt_07",
    source: "Foundations of Management",
    difficulty: "Static",
    question: "Who is universally recognized as the 'Father of Scientific Management'?",
    options: [
      "Henri Fayol",
      "Max Weber",
      "Frederick Winslow Taylor (F.W. Taylor)",
      "Elton Mayo",
      "Peter Drucker"
    ],
    correctIndex: 2,
    explanation: "F.W. Taylor is the Father of Scientific Management (known for time-and-motion studies, piece-rate wage system, and functional foremanship). Henri Fayol is the Father of Modern Administrative Management.",
    takeaway: "F.W. Taylor = Scientific Management; Henri Fayol = Administrative Management."
  },
  {
    id: "mgmt_08",
    source: "Foundations of Management",
    difficulty: "High Yield",
    question: "Henri Fayol proposed 14 Principles of Management. What is the key distinction between 'Unity of Command' and 'Unity of Direction'?",
    options: [
      "Unity of Command means all employees get equal pay; Unity of Direction means one manager",
      "Unity of Command states an employee should receive orders from only one superior; Unity of Direction states one head and one plan for a group of activities having the same objective",
      "They are identical terms with no practical difference",
      "Unity of Command applies to top management; Unity of Direction applies to lower workers",
      "Unity of Command is about communication; Unity of Direction is about discipline"
    ],
    correctIndex: 1,
    explanation: "Unity of Command: One subordinate should report to and receive orders from only ONE boss (prevents conflicting orders). Unity of Direction: One head and one common plan for all activities aimed at the same goal (prevents overlapping efforts).",
    takeaway: "Unity of Command = One Boss per subordinate; Unity of Direction = One Plan for one objective."
  },
  {
    id: "mgmt_09",
    source: "Organizational Communication",
    difficulty: "Moderate",
    question: "In organizational informal communication (the Grapevine), which pattern involves an individual selectively communicating information to a few chosen persons, who then pass it to other selected individuals?",
    options: [
      "Single Strand network",
      "Gossip network",
      "Probability network",
      "Cluster network",
      "Wheel network"
    ],
    correctIndex: 3,
    explanation: "The 'Cluster chain' is the most common grapevine pattern: person A tells select individuals (B, C, D), and each of them passes it on to another select few. In Gossip, one tells all. In Single Strand, info moves in a single line.",
    takeaway: "Most popular grapevine network in corporations = Cluster Network."
  },
  {
    id: "mgmt_10",
    source: "HR & Interpersonal Dynamics",
    difficulty: "Moderate",
    question: "In the Johari Window model of interpersonal communication, the quadrant known to oneself but hidden from others is termed the:",
    options: [
      "Open Area / Arena",
      "Blind Area / Blind Spot",
      "Hidden Area / Facade",
      "Unknown Area",
      "Private Arena"
    ],
    correctIndex: 2,
    explanation: "Johari Window: 1. Open (known to self & others), 2. Blind Spot (unknown to self, known to others), 3. Hidden/Facade (known to self, hidden from others), 4. Unknown (unknown to both).",
    takeaway: "Known to self, unknown to others = Hidden Area (Facade)."
  },
  {
    id: "mgmt_11",
    source: "Motivation Theories",
    difficulty: "High Yield",
    question: "Clayton Alderfer condensed Maslow's 5 needs into the ERG Theory. What does 'ERG' stand for, and what unique concept does it introduce?",
    options: [
      "Energy, Resilience, Growth; introduces the Plateau effect",
      "Existence, Relatedness, Growth; introduces the Frustration-Regression principle",
      "Esteem, Recognition, Guidance; introduces the Equity principle",
      "Effort, Reward, Goal; introduces Goal-Setting",
      "Execution, Results, Governance; introduces Lean management"
    ],
    correctIndex: 1,
    explanation: "ERG = Existence (Physiological + Safety), Relatedness (Social + external Esteem), Growth (internal Esteem + Self-actualization). Unlike Maslow, ERG introduces the 'Frustration-Regression' principle: if a higher-order need cannot be satisfied, an individual regresses to fulfilling lower-order needs.",
    takeaway: "ERG Theory = Existence, Relatedness, Growth + Frustration-Regression principle."
  },
  {
    id: "mgmt_12",
    source: "McClelland's Theory",
    difficulty: "High Yield",
    question: "David McClelland's Acquired Needs Theory posits that individuals are driven by three primary needs. What are they?",
    options: [
      "Need for Survival, Affection, and Control",
      "Need for Achievement (nAch), Affiliation (nAff), and Power (nPower)",
      "Need for Autonomy, Mastery, and Purpose",
      "Need for Food, Security, and Self-Esteem",
      "Need for Status, Wealth, and Authority"
    ],
    correctIndex: 1,
    explanation: "McClelland's three acquired/learned needs are: nAch (Need for Achievement - drive to excel), nAff (Need for Affiliation - desire for friendly relationships), and nPower (Need for Power - desire to influence/lead others).",
    takeaway: "McClelland's 3 Needs: Achievement (nAch), Affiliation (nAff), Power (nPower)."
  },
  {
    id: "mgmt_13",
    source: "Leadership Concepts",
    difficulty: "Moderate",
    question: "What is the defining characteristic of a 'Transformational Leader' compared to a 'Transactional Leader'?",
    options: [
      "Transformational leaders rely on rewards and punishments; Transactional leaders inspire change",
      "Transformational leaders inspire followers to transcend personal interests for the organizational vision; Transactional leaders focus on routine, structured exchanges and contractual rewards",
      "Transformational leaders manage day-to-day operations; Transactional leaders only handle crises",
      "Transformational leaders use coercive power; Transactional leaders use referent power",
      "There is no functional difference"
    ],
    correctIndex: 1,
    explanation: "Transactional leadership is based on exchange ('you do this work, I give you this salary/bonus'). Transformational leadership inspires, motivates through vision, intellectual stimulation, and individualized consideration to achieve extraordinary outcomes.",
    takeaway: "Transformational = Vision & Inspiration; Transactional = Contracts, Contingent Rewards & Exchanges."
  },
  {
    id: "mgmt_14",
    source: "Communication Barriers",
    difficulty: "Practical",
    question: "A misunderstanding arising from the ambiguity of words, technical jargon, or differences in language interpretation is categorized under which type of communication barrier?",
    options: [
      "Psychological barrier",
      "Semantic barrier",
      "Organizational barrier",
      "Physical barrier",
      "Sociological barrier"
    ],
    correctIndex: 1,
    explanation: "Semantic barriers relate to the meaning of words, symbols, dialects, or technical jargon. When the sender and receiver attach different meanings to words, a semantic breakdown occurs.",
    takeaway: "Words, symbols, and technical jargon errors = Semantic Barriers."
  },
  {
    id: "mgmt_15",
    source: "Organizational Structure",
    difficulty: "High Yield",
    question: "What does the term 'Span of Control' (or Span of Management) refer to?",
    options: [
      "The duration of time an executive remains in office",
      "The number of levels in an organizational hierarchy",
      "The number of subordinates who report directly to a single manager or supervisor",
      "The budget allocated to a single departmental unit",
      "The geographic territory covered by a regional office"
    ],
    correctIndex: 2,
    explanation: "Span of Control refers to the number of direct subordinates a manager can effectively supervise. A narrow span creates a tall organizational hierarchy; a wide span creates a flat organization.",
    takeaway: "Span of Control = Number of direct subordinates reporting to one manager."
  }
];

if (typeof window !== 'undefined') {
  window.managementQuestions = managementQuestions;
}
