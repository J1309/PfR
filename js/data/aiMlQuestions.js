// PFRDA Grade A - AI / ML / FinTech Question Bank
// Priority: 🟡 Medium — New addition to Paper 2 syllabus

const aiMlQuestions = [
  {
    id: "ai_01",
    source: "AI/ML Fundamentals",
    difficulty: "High Yield",
    question: "What is 'Machine Learning' in the context of Artificial Intelligence?",
    options: [
      "Programming every rule manually into a computer system",
      "A subset of AI where systems learn from data to improve performance on a task without being explicitly programmed for each decision",
      "A hardware upgrade that makes processors faster",
      "A type of database management system",
      "An internet protocol for connecting devices"
    ],
    correctIndex: 1,
    explanation: "Machine Learning is a branch of AI that enables systems to automatically learn and improve from experience (data) without being explicitly programmed. The system identifies patterns in training data and uses them to make predictions or decisions.",
    takeaway: "ML = Learns from data → Improves automatically → No explicit rule-coding needed."
  },
  {
    id: "ai_02",
    source: "AI/ML Fundamentals",
    difficulty: "High Yield",
    question: "Which of the following correctly describes the three main types of Machine Learning?",
    options: [
      "Coding, Testing, Deployment",
      "Supervised Learning (labelled data), Unsupervised Learning (unlabelled data), Reinforcement Learning (reward-based)",
      "Input, Process, Output",
      "Classification, Clustering, Compilation",
      "Neural, Linear, Quantum"
    ],
    correctIndex: 1,
    explanation: "Supervised Learning uses labelled training data (input-output pairs). Unsupervised Learning finds hidden patterns in unlabelled data. Reinforcement Learning trains an agent via rewards and penalties for its actions in an environment.",
    takeaway: "3 types: Supervised (labelled) → Unsupervised (unlabelled) → Reinforcement (rewards/penalties)."
  },
  {
    id: "ai_03",
    source: "AI in Financial Services",
    difficulty: "High Yield",
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
    id: "ai_04",
    source: "AI in Finance",
    difficulty: "High Yield",
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
    id: "ai_05",
    source: "AI/ML Concepts",
    difficulty: "Conceptual",
    question: "What is a 'Neural Network' in AI?",
    options: [
      "A physical wiring system connecting computer servers",
      "A computing system inspired by the biological neural networks of the human brain, consisting of layers of interconnected nodes (neurons) that process information",
      "A social media network used by data scientists",
      "A type of database query language",
      "An internet network topology"
    ],
    correctIndex: 1,
    explanation: "Artificial Neural Networks (ANNs) are computing systems loosely modeled on the brain. They have an input layer, one or more hidden layers, and an output layer. Deep Learning uses neural networks with many hidden layers.",
    takeaway: "Neural Network: Input layer → Hidden layers → Output layer. 'Deep Learning' = Many hidden layers."
  },
  {
    id: "ai_06",
    source: "AI Ethics & Regulation",
    difficulty: "High Yield",
    question: "What is 'AI Bias' and why is it a regulatory concern in financial services?",
    options: [
      "AI systems intentionally favouring one political party",
      "Systematic errors in AI models that produce unfair outcomes due to prejudiced assumptions in training data or algorithm design, potentially causing discriminatory lending/credit decisions",
      "Hardware malfunction in AI chips",
      "Excessive electricity consumption by AI data centres",
      "The tendency of AI to always give correct results"
    ],
    correctIndex: 1,
    explanation: "AI Bias occurs when machine learning models reflect and amplify biases present in their training data or design assumptions. In finance, this can lead to discriminatory credit scoring, loan rejections based on race/gender, or unfair insurance pricing — violating fair lending regulations.",
    takeaway: "AI Bias = Biased training data → Discriminatory outcomes. Major risk in lending/credit/insurance."
  },
  {
    id: "ai_07",
    source: "AI/ML in PFRDA context",
    difficulty: "Applied",
    question: "How can AI/ML potentially be used in the pension sector and by PFRDA?",
    options: [
      "Only for replacing all human employees",
      "Fraud detection in NPS transactions, automated KYC verification, chatbot-based subscriber grievance handling, and predictive analytics for fund performance monitoring",
      "Printing admit cards for exams",
      "Manufacturing pension cards",
      "Replacing the PFRDA chairman with an AI bot"
    ],
    correctIndex: 1,
    explanation: "AI/ML has practical applications in the pension sector: detecting fraudulent withdrawal claims, automated document verification for eKYC, NLP-based chatbots for subscriber queries, and predictive models to forecast fund returns and assess risk profiles of Pension Fund Managers.",
    takeaway: "AI in pensions: Fraud detection + eKYC automation + Chatbot grievance + Fund analytics."
  },
  {
    id: "ai_08",
    source: "FinTech",
    difficulty: "High Yield",
    question: "What is 'Natural Language Processing' (NLP) and how is it used in finance?",
    options: [
      "A foreign language translation course",
      "A branch of AI enabling computers to understand, interpret, and generate human language — used in sentiment analysis of markets, chatbots, and automated report generation",
      "A new programming language for financial software",
      "A type of encryption algorithm",
      "A protocol for bank-to-bank communication"
    ],
    correctIndex: 1,
    explanation: "NLP is a field of AI that gives computers the ability to understand text and spoken words. In finance, NLP is used for: sentiment analysis of news/social media to predict stock movements, chatbots for customer service, and automated parsing of financial reports.",
    takeaway: "NLP = AI understanding human language. Finance uses: Sentiment analysis, Chatbots, Report parsing."
  },
  {
    id: "ai_09",
    source: "Blockchain & FinTech",
    difficulty: "Conceptual",
    question: "What is 'Blockchain' technology and its key feature?",
    options: [
      "A centralized database controlled by one bank",
      "A distributed, decentralized ledger that records transactions across many computers in a way that makes the records tamper-resistant and transparent",
      "A type of cloud storage for photos",
      "An email encryption method",
      "A hardware component in ATM machines"
    ],
    correctIndex: 1,
    explanation: "A blockchain is a distributed ledger technology (DLT) where transactions are recorded in 'blocks' that are cryptographically linked in a 'chain.' The key features are: decentralization, transparency, immutability (once recorded, data cannot be altered), and consensus-based verification.",
    takeaway: "Blockchain = Distributed ledger → Decentralized + Immutable + Transparent + Consensus-based."
  },
  {
    id: "ai_10",
    source: "AI/ML Concepts",
    difficulty: "Conceptual",
    question: "What is 'Generative AI' that has become prominent with tools like ChatGPT?",
    options: [
      "AI that only classifies data into categories",
      "AI that can create new content — text, images, code, audio — by learning patterns from vast training data, unlike traditional AI that only analyzes or classifies existing data",
      "AI used exclusively for power generation",
      "A type of anti-virus software",
      "An accounting software"
    ],
    correctIndex: 1,
    explanation: "Generative AI refers to AI models (like GPT, DALL-E) that can generate new, original content — text, images, music, code — by learning the underlying patterns and structures from massive datasets during training. This is distinct from discriminative AI which only classifies or predicts from existing data.",
    takeaway: "Generative AI = Creates new content (text/images/code). Examples: ChatGPT, DALL-E, Gemini."
  },
  {
    id: "ai_11",
    source: "FinTech Regulation",
    difficulty: "High Yield",
    question: "SEBI's framework on Algorithmic Trading requires brokers to:",
    options: [
      "Have no controls at all",
      "Obtain exchange approval for each algo strategy, implement risk management controls, and ensure proper audit trails",
      "Only trade manually during market hours",
      "Use only government-approved hardware",
      "Share their algorithms publicly"
    ],
    correctIndex: 1,
    explanation: "SEBI requires that all algorithmic trading strategies be approved by the stock exchange before deployment. Brokers must have proper risk management systems, order limits, and maintain audit trails for all algo orders.",
    takeaway: "SEBI Algo Rules: Exchange approval mandatory + Risk controls + Audit trail required."
  },
  {
    id: "ai_12",
    source: "Digital India",
    difficulty: "High Yield",
    question: "What is India's 'IndiaAI Mission' launched in 2024?",
    options: [
      "A space exploration program",
      "A comprehensive national program to build AI compute infrastructure, develop foundational models, promote AI in governance, create datasets, and skill the workforce in AI — with an outlay of over ₹10,000 Crore",
      "A social media platform",
      "A new cryptocurrency launched by RBI",
      "A defence missile program"
    ],
    correctIndex: 1,
    explanation: "The IndiaAI Mission, approved by the Cabinet in March 2024 with an outlay of ₹10,371.92 Crore, aims to build public AI compute capacity (10,000+ GPUs), establish AI datasets platform, develop foundational AI models, promote AI applications in governance, and upskill the workforce.",
    takeaway: "IndiaAI Mission: ₹10,371 Cr → 10,000+ GPUs + Datasets + Foundational models + Skilling."
  }
];

if (typeof window !== 'undefined') {
  window.aiMlQuestions = aiMlQuestions;
}
