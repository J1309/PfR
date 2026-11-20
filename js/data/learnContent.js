// DSSSB TGT Computer Science (Post Code 41/26) — Complete Learn Hub Notes
// Covers ALL 5 Section A subjects + ALL 32 Official Section B Technical/BCA topics + ALL 10 B.Ed. Pedagogy topics

window.dsssbLearnModules = [
  // =========================================================================
  // SECTION A: GENERAL APTITUDE & LANGUAGES (5 Modules — 100 Marks)
  // =========================================================================
  {
    id: 'secA_ga',
    section: 'A',
    icon: '🌍',
    title: 'General Awareness',
    weightage: '20 Marks',
    priority: 'Section A',
    subtitle: 'Polity, History, Geography, Economy, Everyday Science, Art & Culture',
    topics: [
      {
        heading: '1. Indian Polity & Constitution (High-Yield)',
        points: [
          '<strong>Constituent Assembly:</strong> Adopted Constitution on 26 Nov 1949; came into force on 26 Jan 1950. Drafting Committee Chairman: Dr. B.R. Ambedkar.',
          '<strong>Fundamental Rights (Part III, Art. 12–35):</strong> Equality (14–18), Freedom (19–22), Against Exploitation (23–24), Freedom of Religion (25–28), Cultural & Educational (29–30), Constitutional Remedies (Art. 32 — Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto).',
          '<strong>DPSP (Part IV, Art. 36–51) & Fundamental Duties (Part IVA, Art. 51A):</strong> Added by 42nd Amendment (1976) on Swaran Singh Committee recommendation (initially 10, 11th added by 86th Amendment 2002 — RTE Art. 21A).',
          '<strong>Key Amendments:</strong> 42nd (Mini-Constitution: Socialist, Secular, Integrity), 44th (Right to Property moved to Art. 300A), 73rd (Panchayati Raj, 11th Schedule), 74th (Municipalities, 12th Schedule), 101st (GST).',
          '<strong>Parliament & Executive:</strong> President (Art. 52), Money Bill (Art. 110 — Lok Sabha Speaker decides), Joint Sitting (Art. 108 — presided by LS Speaker), Emergency (Art. 352 National, 356 President Rule, 360 Financial).'
        ]
      },
      {
        heading: '2. Indian History & National Movement',
        points: [
          '<strong>Indus Valley:</strong> Harappa (Ravi, Daya Ram Sahni), Mohenjodaro (Indus, R.D. Banerji, Great Bath), Lothal (Dockyard, Gujarat), Kalibangan (Ploughed field, Rajasthan).',
          '<strong>Vedic & Mahajanapadas:</strong> Rigveda (oldest, Gayatri Mantra), Buddhism (Gautama Buddha — 4 Noble Truths, 8-fold path; 1st Council Rajgir), Jainism (24th Tirthankara Mahavira).',
          '<strong>Medieval India:</strong> Delhi Sultanate (Slave, Khilji, Tughlaq, Sayyid, Lodi), Mughal Empire (Babur 1526 Panipat → Akbar Din-i-Ilahi → Shah Jahan → Aurangzeb), Bhakti & Sufi movements.',
          '<strong>Modern Freedom Struggle:</strong> 1857 Revolt, INC founded 1885 (A.O. Hume, W.C. Bonnerjee), Partition of Bengal (1905), Non-Cooperation (1920), Civil Disobedience / Dandi March (1930), Quit India (1942), Cabinet Mission (1946).'
        ]
      },
      {
        heading: '3. Geography, Economy & Everyday Science',
        points: [
          '<strong>Indian Geography:</strong> Tropic of Cancer (23.5°N) passes through 8 states (GJ, RJ, MP, CG, JH, WB, TR, MZ). Himalayan rivers (Indus, Ganga, Brahmaputra) vs Peninsular rivers (Godavari = Dakshin Ganga, Narmada & Tapi flow west into Arabian Sea).',
          '<strong>Economy Basics:</strong> GDP vs GNP, Repo Rate & Reverse Repo (RBI Monetary Policy), Fiscal Deficit = Total Expenditure − Total Receipts (excl. borrowings), NITI Aayog (est. Jan 1, 2015 replacing Planning Commission).',
          '<strong>Everyday Science:</strong> Vitamins (A-Night blindness, B1-Beriberi, C-Scurvy, D-Rickets, K-Clotting), Blood groups (O− universal donor, AB+ universal recipient), pH scale (<7 acidic, >7 basic), SI Units (Force-Newton, Power-Watt, Resistance-Ohm, Frequency-Hertz).'
        ]
      }
    ]
  },
  {
    id: 'secA_reasoning',
    section: 'A',
    icon: '🧠',
    title: 'General Intelligence & Reasoning',
    weightage: '20 Marks',
    priority: 'Section A',
    subtitle: 'Series, Syllogisms, Coding-Decoding, Blood Relations, Directions, Puzzles',
    topics: [
      {
        heading: '1. Number & Alphabet Series Patterns',
        points: [
          '<strong>Alphabet Positions (EJOTY = 5, 10, 15, 20, 25):</strong> Opposite letter pairs sum to 27 (A↔Z, B↔Y, C↔X, M↔N).',
          '<strong>Common Number Series:</strong> Prime numbers, Squares (n² ± 1), Cubes (n³ ± n), Alternating two-series, Difference of differences (2nd order AP), Multiplication + addition (×2 + 1, ×3 − 2).'
        ]
      },
      {
        heading: '2. Syllogisms, Blood Relations & Directions',
        points: [
          '<strong>Syllogism Venn Rules:</strong> "All A are B" → Some B are A (valid), All B are A (invalid). "No A is B" → No B is A. "Some A are not B" → does NOT imply "Some B are not A". For "Either-Or": both conclusions individually false + same elements + complementary pair (Some + No, or Some + Some Not).',
          '<strong>Directions:</strong> Pythagoras triples (3-4-5, 5-12-13, 8-15-17). Morning sun in East → shadow falls West; Evening sun in West → shadow falls East.',
          '<strong>Ranking & Seating:</strong> Total = Left + Right − 1. For circular seating facing center: Left = Clockwise, Right = Anti-clockwise.'
        ]
      },
      {
        heading: '3. Non-Verbal, Dice & Mirror/Water Images',
        points: [
          '<strong>Standard Dice:</strong> Opposite faces always sum to 7 (1↔6, 2↔5, 3↔4). If two views share one face, rotate clockwise from the common face to map opposite pairs.',
          '<strong>Mirror vs Water Image:</strong> Vertical mirror flips Left↔Right (top/bottom unchanged). Water image (horizontal mirror) flips Top↔Bottom (left/right unchanged).'
        ]
      }
    ]
  },
  {
    id: 'secA_math',
    section: 'A',
    icon: '📐',
    title: 'Arithmetical & Numerical Ability',
    weightage: '20 Marks',
    priority: 'Section A',
    subtitle: 'Percentages, Profit/Loss, Ratio, SI/CI, Time & Work, Speed, Mensuration',
    topics: [
      {
        heading: '1. Core Arithmetic Formulas',
        points: [
          '<strong>LCM & HCF:</strong> Product of two numbers = LCM × HCF. For fractions: LCM = LCM(num)/HCF(den); HCF = HCF(num)/LCM(den).',
          '<strong>Percentages & Successive Change:</strong> Net % change = a + b + (ab / 100). Key fractions: 1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/12 = 8.33%.',
          '<strong>Profit, Loss & Discount:</strong> Profit% = ((SP − CP) / CP) × 100. Discount% = ((MP − SP) / MP) × 100. Relation: CP / MP = (100 − D%) / (100 + P%).',
          '<strong>Simple & Compound Interest:</strong> SI = (P × R × T) / 100. CI Amount = P(1 + R/100)ᵀ. Difference between CI and SI for 2 years = P(R/100)².'
        ]
      },
      {
        heading: '2. Time, Work, Speed & Mensuration',
        points: [
          '<strong>Time & Work:</strong> If A takes x days and B takes y days, together = (xy) / (x + y). Chain rule: (M₁ × D₁ × H₁) / W₁ = (M₂ × D₂ × H₂) / W₂.',
          '<strong>Time, Speed & Distance:</strong> km/h to m/s → multiply by 5/18; m/s to km/h → multiply by 18/5. Average speed for equal distances = 2xy / (x + y). Boats: Downstream = u + v, Upstream = u − v.',
          '<strong>Mensuration Essentials:</strong> Circle Area = πr², Circumference = 2πr. Cylinder Vol = πr²h, Cone Vol = (1/3)πr²h, Sphere Vol = (4/3)πr³, Cube diagonal = a√3, Cuboid diagonal = √(l² + b² + h²).'
        ]
      }
    ]
  },
  {
    id: 'secA_hindi',
    section: 'A',
    icon: '📝',
    title: 'Hindi Language & Comprehension',
    weightage: '20 Marks',
    priority: 'Section A',
    subtitle: 'संधि, समास, उपसर्ग-प्रत्यय, पर्यायवाची, विलोम, मुहावरे, वर्तनी एवं वाक्य शुद्धि',
    topics: [
      {
        heading: '1. संधि (Sandhi) एवं समास (Samas)',
        points: [
          '<strong>संधि के 3 भेद:</strong> स्वर संधि (दीर्घ: विद्या+आलय=विद्यालय, गुण: महा+इन्द्र=महेन्द्र, वृद्धि: सदा+एव=सदैव, यण: इति+आदि=इत्यादि, अयादि: ने+अन=नयन), व्यंजन संधि (जगत्+नाथ=जगन्नाथ), विसर्ग संधि (मनः+रथ=मनोरथ)।',
          '<strong>समास के 6 भेद:</strong> अव्ययीभाव (पहला पद प्रधान: यथाशक्ति, प्रतिदिन), तत्पुरुष (दूसरा पद प्रधान, कारक लोप: राजपुत्र), कर्मधारय (विशेषण-विशेष्य: नीलकमल), द्विगु (संख्यावाचक पूर्वपद: चौराहा, त्रिभुज), द्वंद्व (दोनों पद प्रधान: माता-पिता), बहुव्रीहि (अन्य पद प्रधान: दशानन, पीताम्बर)।'
        ]
      },
      {
        heading: '2. विकारी शब्द, कारक, उपसर्ग एवं प्रत्यय',
        points: [
          '<strong>कारक (8 भेद):</strong> कर्ता (ने), कर्म (को), करण (से/द्वारा — साधन), संप्रदान (के लिए), अपादान (से — अलग होने का भाव: पेड़ से पत्ता गिरा), संबंध (का/के/की), अधिकरण (में/पर), संबोधन (हे/अरे)।',
          '<strong>उपसर्ग व प्रत्यय:</strong> उपसर्ग शब्द के आरंभ में लगते हैं (प्र+हार=प्रहार, अति+अधिक=अत्यधिक); प्रत्यय अंत में (लिख+आवट=लिखावट, समाज+इक=सामाजिक)।',
          '<strong>तत्सम व तद्भव:</strong> संस्कृत के मूल शब्द तत्सम (अग्नि, दुग्ध, कर्पूर, क्षेत्र) और परिवर्तित हिंदी रूप तद्भव (आग, दूध, कपूर, खेत)।'
        ]
      },
      {
        heading: '3. मुहावरे, वर्तनी शुद्धि व शब्द भेद',
        points: [
          '<strong>प्रमुख शुद्ध वर्तनी:</strong> कवयित्री (अशुद्ध: कवियत्री), उज्ज्वल (दोनों आधे ज), आशीर्वाद, शृंगार, ज्योत्स्ना, अनुगृहीत, वाल्मीकि।',
          '<strong>वाच्य के 3 भेद:</strong> कर्तृवाच्य (राम पुस्तक पढ़ता है), कर्मवाच्य (राम द्वारा पुस्तक पढ़ी जाती है), भाववाच्य (मुझसे चला नहीं जाता)।'
        ]
      }
    ]
  },
  {
    id: 'secA_english',
    section: 'A',
    icon: '🔤',
    title: 'English Language & Comprehension',
    weightage: '20 Marks',
    priority: 'Section A',
    subtitle: 'Grammar, Tenses, Voice, Narration, Prepositions, Vocabulary & Idioms',
    topics: [
      {
        heading: '1. High-Frequency Grammar & Error Spotting Rules',
        points: [
          '<strong>Subject-Verb Agreement:</strong> "Neither...nor / Either...or" agrees with the <em>nearest</em> subject. "As well as / Along with / Together with" agrees with the <em>first</em> subject. "One of the + plural noun + singular verb".',
          '<strong>Conditionals:</strong> Type 1 (If + Present, will + V1), Type 2 (If + Past/were, would + V1), Type 3 (If + had + V3, would have + V3).',
          '<strong>Fixed Prepositions:</strong> Senior/Junior/Prefer/Inferior + <code>to</code> (never "than"); Accused <code>of</code>; Abstain <code>from</code>; Comply <code>with</code>; Cope <code>with</code> (never "cope up with"); Die <code>of</code> (disease) vs Die <code>from</code> (cause).'
        ]
      },
      {
        heading: '2. Active/Passive Voice & Direct/Indirect Narration',
        points: [
          '<strong>Passive Voice Rule:</strong> Always uses <code>be-form + V3</code>. Present Continuous → <code>is/am/are + being + V3</code>; Present Perfect → <code>has/have + been + V3</code>; Modals → <code>modal + be + V3</code>.',
          '<strong>Narration Backshift:</strong> When reporting verb is in past ("said"), Present Simple → Past Simple, Present Perfect → Past Perfect, will → would, now → then, yesterday → the previous day. Universal truths never backshift.'
        ]
      }
    ]
  },

  // =========================================================================
  // SECTION B: ALL 32 OFFICIAL TECHNICAL/BCA TOPICS + 10 PEDAGOGY (100 Marks)
  // =========================================================================
  {
    id: 'secB_prog',
    section: 'B',
    icon: '💻',
    title: 'C, C++, Java, OOPs & Python',
    weightage: '15–20 Marks',
    priority: 'Highest Yield',
    subtitle: 'C Pointers & Storage Classes, C++ OOPs & Virtuals, Java JVM/Threads, Python',
    topics: [
      {
        heading: '1. C Programming Essentials',
        points: [
          '<strong>Storage Classes:</strong> <code>auto</code> (stack, garbage, block scope), <code>register</code> (CPU reg, no & operator), <code>static</code> (data segment, 0 init, retains value across calls), <code>extern</code> (global linkage across files).',
          '<strong>Pointers & Arrays:</strong> <code>arr[i]</code> ≡ <code>*(arr + i)</code> ≡ <code>i[arr]</code>. Pointer arithmetic scales by <code>sizeof(type)</code>. <code>malloc()</code> allocates uninitialized memory; <code>calloc()</code> zero-initializes; <code>free()</code> prevents memory leaks (dangling pointer if not set to NULL).',
          '<strong>Struct vs Union:</strong> Struct allocates separate memory for each member (size ≥ sum + padding); Union shares the same memory block (size = largest member).'
        ]
      },
      {
        heading: '2. C++ & Object-Oriented Programming (OOPs)',
        points: [
          '<strong>4 Pillars:</strong> Encapsulation (binding data + methods), Abstraction (hiding implementation), Inheritance (code reuse), Polymorphism (Compile-time: function/operator overloading; Run-time: virtual function overriding via vtable/vptr).',
          '<strong>Constructors & Destructors:</strong> Constructors can be overloaded (default, parameterized, copy); Destructors (<code>~Class()</code>) take NO parameters and CANNOT be overloaded. Virtual destructor is mandatory in polymorphic base classes.',
          '<strong>Special Keywords:</strong> <code>friend</code> breaks encapsulation selectively (not inherited, not symmetric); <code>inline</code> requests expansion at call site; Pure virtual function (<code>virtual void f() = 0;</code>) makes a class Abstract.',
          '<strong>Access Specifiers:</strong> Default in <code>class</code> is <code>private</code>; default in <code>struct</code> is <code>public</code>. Operator <code>::</code>, <code>.</code>, <code>.*</code>, <code>?:</code>, <code>sizeof</code> CANNOT be overloaded.'
        ]
      },
      {
        heading: '3. Java & Python (NCERT Class 11–12 Basics)',
        points: [
          '<strong>Java Architecture:</strong> Source (.java) → <code>javac</code> → Bytecode (.class) → JVM (JIT compiler). No multiple class inheritance (achieved via <code>interface</code>). <code>final</code> class cannot be inherited, <code>final</code> method cannot be overridden.',
          '<strong>Java Strings & Exceptions:</strong> <code>String</code> is immutable; <code>StringBuilder</code> is mutable (non-synchronized); <code>StringBuffer</code> is mutable (thread-safe). Checked exceptions (IOException, SQLException) vs Unchecked (NullPointerException, ArithmeticException).',
          '<strong>Python Quick Facts:</strong> Mutable types: <code>list</code>, <code>dict</code>, <code>set</code>. Immutable types: <code>int</code>, <code>float</code>, <code>str</code>, <code>tuple</code>. Floor division <code>//</code>, exponent <code>**</code>, slicing <code>s[start:stop:step]</code>.'
        ]
      }
    ]
  },
  {
    id: 'secB_dsa',
    section: 'B',
    icon: '🌳',
    title: 'Data Structures & Algorithms',
    weightage: '12–15 Marks',
    priority: 'Highest Yield',
    subtitle: 'Stacks, Queues, Linked Lists, Trees, Graphs, Sorting, Complexity, DAA',
    topics: [
      {
        heading: '1. Linear Data Structures',
        points: [
          '<strong>Array:</strong> Contiguous memory, O(1) random access, O(n) insertion/deletion. Row-major 2D address: <code>Base + w × [i × cols + j]</code>.',
          '<strong>Linked List:</strong> Dynamic size, O(1) insert/delete at head, O(n) search. Doubly linked list uses prev & next pointers; Circular LL last node points to head.',
          '<strong>Stack (LIFO):</strong> Applications — Recursion, Expression evaluation (Infix→Postfix), Parenthesis matching, Undo, DFS.',
          '<strong>Queue (FIFO):</strong> Applications — CPU scheduling, BFS, Print spooling. Circular queue of size N: Full when <code>(rear + 1) % N == front</code>; Empty when <code>front == -1</code>.'
        ]
      },
      {
        heading: '2. Trees & Graphs',
        points: [
          '<strong>Binary Tree Properties:</strong> Max nodes at level L (root=0) = 2ᴸ; Max nodes of height h = 2ʰ⁺¹ − 1. Strict/Full binary tree: every node has 0 or 2 children. Complete binary tree: all levels filled left-to-right.',
          '<strong>Traversals:</strong> Preorder (Root-L-R), Inorder (L-Root-R → gives sorted order in BST!), Postorder (L-R-Root). Unique tree needs Inorder + (Preorder OR Postorder).',
          '<strong>AVL & Heaps:</strong> AVL balance factor ∈ {−1, 0, +1} (rotations: LL, RR, LR, RL). Binary Max-Heap: parent ≥ children; build heap = O(n), insert/extract = O(log n).',
          '<strong>Graphs:</strong> BFS uses Queue (shortest path in unweighted graph); DFS uses Stack/Recursion (cycle detection, topological sort). MST: Prim’s & Kruskal’s (Greedy). Shortest path: Dijkstra (non-negative weights), Bellman-Ford (negative weights allowed), Floyd-Warshall (all-pairs, DP, O(V³)).'
        ]
      },
      {
        heading: '3. Sorting & Algorithm Design Paradigms',
        points: [
          '<strong>Complexity Table:</strong> Bubble/Insertion/Selection = O(n²) worst (Insertion best = O(n)); Merge Sort = O(n log n) always (stable, O(n) space); Quick Sort = O(n log n) avg, O(n²) worst (in-place, unstable); Heap Sort = O(n log n) always (in-place, unstable); Counting/Radix = O(n + k).',
          '<strong>Paradigms:</strong> Divide & Conquer (Merge, Quick, Binary Search, Strassen), Greedy (Kruskal, Prim, Dijkstra, Huffman, Fractional Knapsack), Dynamic Programming (0/1 Knapsack, LCS, Matrix Chain, Floyd-Warshall — overlapping subproblems + optimal substructure).'
        ]
      }
    ]
  },
  {
    id: 'secB_dbms',
    section: 'B',
    icon: '🗄️',
    title: 'DBMS & SQL',
    weightage: '12–15 Marks',
    priority: 'Highest Yield',
    subtitle: 'ER Model, Relational Algebra, Keys, Normalization (1NF–BCNF), SQL, ACID',
    topics: [
      {
        heading: '1. Relational Model, Keys & ER Concepts',
        points: [
          '<strong>Terminology:</strong> Tuple = Row, Attribute = Column, <strong>Cardinality</strong> = Number of rows, <strong>Degree</strong> = Number of columns, Domain = Set of permitted values.',
          '<strong>Keys Hierarchy:</strong> Super Key (uniquely identifies tuple) → Candidate Key (minimal super key) → Primary Key (chosen candidate key, NOT NULL & UNIQUE) → Alternate Key (other candidate keys) → Foreign Key (enforces Referential Integrity).',
          '<strong>ER Model:</strong> Specialization = Top-down (entity → sub-entities); Generalization = Bottom-up; Aggregation = relationship treated as entity. Weak entity (double rectangle) depends on owner entity via identifying relationship (double diamond).'
        ]
      },
      {
        heading: '2. Normalization & Functional Dependencies',
        points: [
          '<strong>1NF:</strong> Atomic (indivisible) attribute values; no repeating groups/multivalued attributes.',
          '<strong>2NF:</strong> In 1NF + No <em>partial dependency</em> (non-prime attribute depending on part of a composite candidate key).',
          '<strong>3NF:</strong> In 2NF + No <em>transitive dependency</em> (non-prime → non-prime). For X → Y: X is super key OR Y is prime attribute.',
          '<strong>BCNF:</strong> Stricter 3NF — for every non-trivial FD X → Y, X MUST be a super key. Always lossless-join decomposable, not always dependency-preserving.',
          '<strong>4NF / 5NF:</strong> 4NF removes Multi-Valued Dependencies (MVD); 5NF removes Join Dependencies.'
        ]
      },
      {
        heading: '3. SQL, Relational Algebra & Transactions',
        points: [
          '<strong>SQL Sub-languages:</strong> DDL (<code>CREATE, ALTER, DROP, TRUNCATE, RENAME</code> — auto-committed), DML (<code>SELECT, INSERT, UPDATE, DELETE</code>), DCL (<code>GRANT, REVOKE</code>), TCL (<code>COMMIT, ROLLBACK, SAVEPOINT</code>).',
          '<strong>WHERE vs HAVING:</strong> <code>WHERE</code> filters rows BEFORE <code>GROUP BY</code> (no aggregates); <code>HAVING</code> filters groups AFTER <code>GROUP BY</code> (uses COUNT, SUM, AVG, MAX, MIN).',
          '<strong>ACID Properties:</strong> Atomicity (all or nothing — Transaction Manager), Consistency (valid state), Isolation (concurrent transactions don’t interfere — Concurrency Control), Durability (committed data survives crash — Recovery Manager).',
          '<strong>Concurrency Issues:</strong> Dirty Read, Unrepeatable Read, Phantom Read. Strict 2PL guarantees conflict serializability and recoverability (cascadeless).'
        ]
      }
    ]
  },
  {
    id: 'secB_os',
    section: 'B',
    icon: '⚙️',
    title: 'Operating Systems & Linux',
    weightage: '10–12 Marks',
    priority: 'High Yield',
    subtitle: 'Scheduling, Synchronization, Deadlocks, Paging/Virtual Memory, Linux CLI',
    topics: [
      {
        heading: '1. Processes, Threads & CPU Scheduling',
        points: [
          '<strong>Process States:</strong> New → Ready → Running → Waiting/Blocked → Terminated. Long-term scheduler controls degree of multiprogramming; Short-term (CPU) scheduler selects from Ready queue.',
          '<strong>Threads:</strong> Share Code, Data, Open Files; have separate Register set, Stack, and Program Counter (PC). Context switch between threads is faster than processes.',
          '<strong>Scheduling Algorithms:</strong> FCFS (non-preemptive, Convoy effect), SJF (optimal min avg waiting time, starvation possible), SRTF (preemptive SJF), Round Robin (preemptive, time quantum q, ideal for time-sharing), Priority (aging prevents starvation).'
        ]
      },
      {
        heading: '2. Synchronization & Deadlocks',
        points: [
          '<strong>Critical Section Requirements:</strong> Mutual Exclusion, Progress, Bounded Waiting. Binary Semaphore (0/1, mutex) vs Counting Semaphore (resource pool).',
          '<strong>4 Coffman Deadlock Conditions (ALL 4 required):</strong> 1) Mutual Exclusion, 2) Hold and Wait, 3) <strong>No Preemption</strong>, 4) Circular Wait.',
          '<strong>Handling Deadlocks:</strong> Prevention (break one Coffman condition), Avoidance (<strong>Banker’s Algorithm</strong> — safe state check), Detection & Recovery, Ignorance (Ostrich Algorithm — used by Windows/Linux).'
        ]
      },
      {
        heading: '3. Memory Management, Disk & Linux Environment',
        points: [
          '<strong>Fragmentation:</strong> Paging eliminates External Fragmentation (has slight Internal Fragmentation); Segmentation has External Fragmentation. MMU translates Logical → Physical address using Page Table + TLB (fast cache).',
          '<strong>Page Replacement:</strong> FIFO (suffers from <strong>Belady’s Anomaly</strong> — more frames = more page faults!), Optimal (theoretical minimum), LRU (Least Recently Used — no Belady’s anomaly). Thrashing = excessive paging > useful CPU work.',
          '<strong>Linux Commands:</strong> <code>ls -la</code> (list all), <code>chmod 755</code> (r=4, w=2, x=1 for u/g/o), <code>chown</code>, <code>grep</code> (pattern search), <code>ps aux</code> / <code>top</code> (processes), <code>kill -9 PID</code>, <code>pwd</code>, <code>cat</code>, <code>rm -rf</code>, <code>pipe |</code>, <code>crontab</code>.'
        ]
      }
    ]
  },
  {
    id: 'secB_net',
    section: 'B',
    icon: '🌐',
    title: 'Computer Networks, TCP/IP & Security',
    weightage: '10–12 Marks',
    priority: 'High Yield',
    subtitle: 'OSI/TCP-IP, IPv4/Subnetting, Routing, Protocols, Ports, Cryptography & Security',
    topics: [
      {
        heading: '1. OSI & TCP/IP Layers + Devices',
        points: [
          '<strong>OSI 7 Layers:</strong> 1-Physical (Bits; Hub, Repeater), 2-Data Link (Frames, MAC; Switch, Bridge, NIC), 3-Network (Packets, IP; Router, L3 Switch), 4-Transport (Segments, Ports; TCP/UDP), 5-Session (Dialog control), 6-Presentation (Encryption/Compression), 7-Application (HTTP, DNS, SMTP, FTP).',
          '<strong>TCP/IP 4 Layers:</strong> Network Access (L1+L2), Internet (L3: IP, ICMP, ARP, RARP), Transport (L4: TCP, UDP), Application (L5+L6+L7).',
          '<strong>Collision vs Broadcast Domains:</strong> Hub = 1 collision, 1 broadcast. Switch = separate collision per port, 1 broadcast (VLAN splits broadcast). Router = separate collision AND separate broadcast per interface.'
        ]
      },
      {
        heading: '2. IP Addressing, Ports & Protocols',
        points: [
          '<strong>IPv4 Classes:</strong> Class A (1–126, /8, starts 0), Loopback (127.0.0.0/8), Class B (128–191, /16, starts 10), Class C (192–223, /24, starts 110), Class D (224–239, Multicast), Class E (240–255, Experimental).',
          '<strong>Private IP (RFC 1918):</strong> 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. APIPA = 169.254.0.0/16. Usable hosts in /n = 2⁽³²⁻ⁿ⁾ − 2.',
          '<strong>Well-Known Ports:</strong> FTP Data=20, FTP Control=21, SSH=22, Telnet=23, SMTP=25, DNS=53, DHCP=67/68, HTTP=80, POP3=110, NTP=123, IMAP=143, SNMP=161, HTTPS=443, RDP=3389.',
          '<strong>Routing & TCP:</strong> Distance Vector = RIP (Bellman-Ford, max 15 hops); Link State = OSPF (Dijkstra); Path Vector = BGP. TCP uses 3-Way Handshake (SYN → SYN-ACK → ACK), Sliding Window, Slow Start.'
        ]
      },
      {
        heading: '3. Computer Network Security',
        points: [
          '<strong>CIA Triad:</strong> Confidentiality (Encryption), Integrity (Hashing: SHA-256, Digital Signatures), Availability (DDoS protection, Redundancy).',
          '<strong>Cryptography:</strong> Symmetric (same key — AES, DES, 3DES, RC4; fast) vs Asymmetric (Public/Private key pair — RSA, Diffie-Hellman, ECC; used for key exchange & digital signatures).',
          '<strong>Defenses:</strong> Firewall (Packet filter, Stateful, NGFW), IDS (passive detection) vs IPS (inline active blocking), VPN (IPsec/SSL), SSL/TLS (HTTPS), Attacks: Phishing, MitM, SQLi, XSS, DoS/DDoS, ARP Spoofing.'
        ]
      }
    ]
  },
  {
    id: 'secB_coa',
    section: 'B',
    icon: '🔌',
    title: 'Digital Electronics, COA & IT Basics',
    weightage: '8–10 Marks',
    priority: 'High Yield',
    subtitle: 'Number Systems, Boolean/K-Map, Gates, Flip-Flops, CPU, Addressing Modes, Cache',
    topics: [
      {
        heading: '1. Digital Electronics & Number Systems',
        points: [
          '<strong>Number Systems:</strong> Binary (base 2), Octal (base 8, 3 bits), Hexadecimal (base 16, 4 bits). 2’s complement = 1’s complement + 1 (n-bit signed range: −2ⁿ⁻¹ to +2ⁿ⁻¹ − 1). IEEE 754 Single Precision (32-bit): 1 Sign + 8 Exponent (bias 127) + 23 Mantissa.',
          '<strong>Logic Gates & Boolean Laws:</strong> Universal Gates = <strong>NAND</strong> and <strong>NOR</strong>. XOR = A’B + AB’ (odd 1s detector). De Morgan’s Laws: (A+B)’ = A’·B’ and (A·B)’ = A’ + B’.',
          '<strong>Combinational vs Sequential Circuits:</strong> Combinational (no memory — Half/Full Adder, Multiplexer 2ⁿ:1, Demux, Decoder n:2ⁿ, Encoder). Sequential (uses clock & feedback memory — Flip-Flops: SR, JK [fixes SR=11 race], D [delay/data], T [toggle]; Registers, Counters).'
        ]
      },
      {
        heading: '2. Computer Organization & Architecture (COA)',
        points: [
          '<strong>CPU & Registers:</strong> PC (next instruction address), IR (current instruction), MAR (memory address), MBR/MDR (data buffer), Accumulator. RISC (fixed instruction size, load/store, more registers) vs CISC (variable length, microprogrammed).',
          '<strong>Addressing Modes:</strong> Immediate (operand in instruction), Direct (address in instruction), Indirect (address of address — pointers), Register, Indexed (arrays), Relative (PC + offset — branching).',
          '<strong>Memory & Cache Mapping:</strong> Hierarchy (Fastest→Slowest): Registers → L1/L2/L3 Cache (SRAM) → Main Memory (DRAM) → SSD/HDD. Cache Mapping: Direct, Fully Associative, Set-Associative. Write-through vs Write-back.',
          '<strong>I/O & Pipelining:</strong> Programmed I/O, Interrupt-driven I/O, DMA (Direct Memory Access — bypasses CPU for bulk transfer). Pipeline hazards: Structural, Data, Control.'
        ]
      }
    ]
  },
  {
    id: 'secB_web',
    section: 'B',
    icon: '🕸️',
    title: 'Web Tech, XML, Internet Prog & .NET',
    weightage: '6–8 Marks',
    priority: 'Medium-High',
    subtitle: 'HTML/XHTML, CSS, XML/DTD/Parsers, JS Event Model, IIS/PWS, Front-End & .NET',
    topics: [
      {
        heading: '1. HTML, XHTML, CSS & JavaScript Event Model',
        points: [
          '<strong>HTML & XHTML:</strong> XHTML is stricter XML-compliant HTML (all tags lowercase, properly nested, all tags closed, attributes quoted). Semantic HTML5 tags: <code>&lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;, &lt;footer&gt;</code>.',
          '<strong>CSS Specificity & Box Model:</strong> Specificity order: Inline (1000) > ID (100) > Class/Pseudo-class (10) > Element (1). Box model: Content → Padding → Border → Margin.',
          '<strong>JS & DOM Events:</strong> Event propagation phases: Capturing (top-down) → Target → Bubbling (bottom-up). <code>==</code> does type coercion; <code>===</code> checks value AND type strictly.'
        ]
      },
      {
        heading: '2. XML, DTD, Parsers & Web Servers (Official DSSSB Topics)',
        points: [
          '<strong>XML & DTD/XSD:</strong> XML stores/transports data (user-defined tags, case-sensitive, single root element). <strong>DTD</strong> (Document Type Definition) defines legal XML building blocks; XSD (XML Schema) supports data types and namespaces.',
          '<strong>XML Parsers:</strong> <strong>DOM Parser</strong> (loads entire XML tree in memory, read/write, high memory) vs <strong>SAX Parser</strong> (event-driven, streaming, read-only, low memory).',
          '<strong>Web Servers:</strong> IIS (Microsoft Internet Information Services), PWS (Personal Web Server), Apache HTTP Server, Nginx. HTTP methods: GET (idempotent, URL params), POST (body payload), PUT, DELETE.'
        ]
      },
      {
        heading: '3. .NET Programming & Front-End Design Tools',
        points: [
          '<strong>.NET Architecture:</strong> Languages (C#, VB.NET) compile to <strong>MSIL / CIL</strong> (Common Intermediate Language) → executed by <strong>CLR</strong> (Common Language Runtime) using JIT compiler. CTS (Common Type System) & CLS (Common Language Specification) enable cross-language interoperability.',
          '<strong>ADO.NET & ASP.NET:</strong> <code>DataSet</code> (disconnected, in-memory XML cache) vs <code>DataReader</code> (connected, forward-only, read-only, fast). ASP.NET ViewState preserves control state across postbacks.'
        ]
      }
    ]
  },
  {
    id: 'secB_se_cg',
    section: 'B',
    icon: '🎨',
    title: 'Software Engg, Graphics, Mobile & E-Comm',
    weightage: '8–10 Marks',
    priority: 'Medium-High',
    subtitle: 'SDLC, Testing, Cohesion/Coupling, Computer Graphics, Multimedia, Mobile, E-Commerce',
    topics: [
      {
        heading: '1. Software Engineering',
        points: [
          '<strong>SDLC Models:</strong> Waterfall (linear, frozen requirements), Prototype (unclear UI/requirements), Spiral (Boehm — risk-driven), Agile/Scrum (iterative sprints, adaptive).',
          '<strong>Design Quality:</strong> Goal is <strong>High Cohesion</strong> (best: Functional; worst: Coincidental) and <strong>Low Coupling</strong> (best: Data; worst: Content).',
          '<strong>Testing & Metrics:</strong> White-box (structural: statement/branch/path coverage, Cyclomatic Complexity V(G) = E − N + 2P) vs Black-box (functional: Equivalence Partitioning, Boundary Value Analysis). Levels: Unit → Integration → System → Acceptance. Regression testing checks after changes. COCOMO estimates effort.'
        ]
      },
      {
        heading: '2. Computer Graphics & Multimedia (Official DSSSB Topic)',
        points: [
          '<strong>Display & Scan Conversion:</strong> Raster Scan (frame buffer, pixel-by-pixel refresh) vs Random/Vector Scan (draws lines directly). Line algorithms: DDA (floating point) vs <strong>Bresenham’s</strong> (integer-only, faster). Midpoint algorithm for circles.',
          '<strong>2D/3D Transformations & Clipping:</strong> Homogeneous coordinates (3×3 matrix for 2D, 4×4 for 3D) unify Translation, Rotation, Scaling. Line Clipping: <strong>Cohen-Sutherland</strong> (4-bit region outcodes: TBRL), Liang-Barsky. Polygon Clipping: <strong>Sutherland-Hodgman</strong>.',
          '<strong>Curves & Solid Modeling:</strong> Bezier curves (control points, Bernstein polynomials), B-Splines (local control). Solid modeling: CSG (Constructive Solid Geometry), B-Rep (Boundary Representation). Multimedia formats: JPEG (lossy image), PNG (lossless), MPEG (video), MP3 (audio).'
        ]
      },
      {
        heading: '3. Mobile Computing & E-Commerce (Official DSSSB Topics)',
        points: [
          '<strong>Mobile Computing:</strong> Cellular concepts (frequency reuse, cells, Handover/Handoff — Hard vs Soft). GSM (TDMA/FDMA, SIM, HLR/VLR) vs CDMA (spread spectrum, unique codes). Mobile IP: Home Agent, Foreign Agent, Care-of-Address (CoA).',
          '<strong>E-Commerce:</strong> Models: B2B, B2C, C2C, C2B, G2C. Technologies: EDI (Electronic Data Interchange), Digital Certificates (CA, X.509), SET (Secure Electronic Transaction), Payment Gateways, SSL/TLS.'
        ]
      }
    ]
  },
  {
    id: 'secB_bca_support',
    section: 'B',
    icon: '📊',
    title: 'BCA Supporting: Acct, Econ, MIS, Stats & Physics',
    weightage: '5–8 Marks',
    priority: 'Official PDF Extras',
    subtitle: 'Financial Accounting, Business Economics, MIS, Statistics, Interpolation, Physics',
    topics: [
      {
        heading: '1. Financial Accounting & Business Economics',
        points: [
          '<strong>Accounting Equation & Golden Rules:</strong> Assets = Liabilities + Capital. Personal A/c (Debit receiver, Credit giver), Real A/c (Debit what comes in, Credit what goes out), Nominal A/c (Debit expenses/losses, Credit incomes/gains).',
          '<strong>Financial Statements:</strong> Journal (primary entry) → Ledger (posting) → Trial Balance (checks arithmetical accuracy) → Trading & P&L A/c → Balance Sheet (financial position on a date).',
          '<strong>Business Economics:</strong> Law of Demand (inverse price-quantity relation; Giffen goods are exception). Elasticity Ed = (%ΔQ / %ΔP). Market structures: Perfect Competition (price taker), Monopoly (single seller), Oligopoly (few firms, kinked demand).'
        ]
      },
      {
        heading: '2. MIS & Knowledge Management',
        points: [
          '<strong>Information Systems Pyramid:</strong> TPS (Transaction Processing — operational/daily data) → MIS (Management Info — routine summary reports for middle mgmt) → DSS (Decision Support — semi-structured what-if analysis) → ESS/EIS (Executive Support — strategic top mgmt).',
          '<strong>Knowledge Management:</strong> <strong>Explicit Knowledge</strong> (documented in manuals/databases) vs <strong>Tacit Knowledge</strong> (personal experience/skills in people’s heads). SECI Model (Nonaka & Takeuchi): Socialization, Externalization, Combination, Internalization.'
        ]
      },
      {
        heading: '3. Statistics, Numerical Methods & Interpolation',
        points: [
          '<strong>Statistics:</strong> Mean, Median, Mode (Empirical relation: <code>Mode = 3 Median − 2 Mean</code>). Variance σ² = avg squared deviation from mean; SD = √Variance. Distributions: Binomial (discrete, n trials), Poisson (rare events, mean = variance = λ), Normal (bell curve, symmetric).',
          '<strong>Numerical Methods & Interpolation:</strong> Root finding: Bisection (slow, guaranteed), Newton-Raphson (xₙ₊₁ = xₙ − f(xₙ)/f’(xₙ), quadratic convergence). Interpolation: <strong>Newton’s Forward/Backward</strong> (equal intervals), <strong>Lagrange’s Interpolation</strong> (unequal intervals). Integration: Trapezoidal Rule, Simpson’s 1/3 Rule (even subintervals).'
        ]
      },
      {
        heading: '4. Basics of Physics (Electronics & Optics for IT)',
        points: [
          '<strong>Semiconductors:</strong> Intrinsic (pure Si, Ge) vs Extrinsic — N-type (pentavalent dopant P/As, majority electrons) and P-type (trivalent dopant B/Al, majority holes). P-N junction diode conducts in Forward Bias, blocks in Reverse Bias (Rectifier converts AC → DC).',
          '<strong>Circuits & Fiber Optics:</strong> Ohm’s Law (V = IR), Power (P = VI = I²R). Optical Fiber transmits light pulses via <strong>Total Internal Reflection (TIR)</strong> — core has higher refractive index than cladding.'
        ]
      }
    ]
  },
  {
    id: 'secB_pedagogy',
    section: 'B',
    icon: '🎓',
    title: 'Teaching Education & Methodology (B.Ed.)',
    weightage: '10–15 Marks',
    priority: 'High Yield',
    subtitle: 'All 10 Official B.Ed. Modules: Learning Theories, Assessment, Inclusion, ICT, NCF/NEP',
    topics: [
      {
        heading: '1. Learning & Teaching + Childhood & Growing Up',
        points: [
          '<strong>Piaget’s Cognitive Stages:</strong> Sensorimotor (0–2, object permanence) → Pre-operational (2–7, egocentrism) → Concrete Operational (7–11, conservation/logic) → Formal Operational (11+, abstract reasoning).',
          '<strong>Vygotsky (Social Constructivism):</strong> <strong>ZPD</strong> (Zone of Proximal Development — gap between independent & assisted ability) and <strong>Scaffolding</strong> (temporary support).',
          '<strong>Learning Theories:</strong> Pavlov (Classical Conditioning), Skinner (Operant Conditioning — reinforcement), Thorndike (Trial & Error — Laws of Readiness, Exercise, Effect), Bandura (Social/Observational learning), Gardner (Multiple Intelligences).'
        ]
      },
      {
        heading: '2. Assessment for Learning, Bloom’s Taxonomy & Curriculum',
        points: [
          '<strong>Bloom’s Revised Taxonomy (Low → High):</strong> Remember → Understand → Apply → Analyze → Evaluate → Create. Three domains: Cognitive (head), Affective (heart), Psychomotor (hands).',
          '<strong>Assessment Types:</strong> <strong>Assessment FOR Learning</strong> = Formative (ongoing feedback during instruction); <strong>Assessment OF Learning</strong> = Summative (end-of-term grading); <strong>Assessment AS Learning</strong> = Self/peer reflection. Diagnostic testing identifies specific learning gaps before remedial teaching.',
          '<strong>NCF 2005 & NEP 2020:</strong> NCF 2005 promotes constructivism & learning without burden. NEP 2020 introduces <strong>5+3+3+4</strong> structure (Foundational, Preparatory, Middle, Secondary) and coding from Class 6.'
        ]
      },
      {
        heading: '3. Inclusive School, Gender, Language, Art & CS Pedagogy',
        points: [
          '<strong>Inclusive Education:</strong> Educating all children (including CWSN) together in mainstream schools with accommodations (UDL — Universal Design for Learning). Learning disabilities: Dyslexia (reading), Dysgraphia (writing), Dyscalculia (math), Dyspraxia (motor), ADHD (attention). RPwD Act 2016 lists 21 disabilities.',
          '<strong>Gender, Language & Drama/Art:</strong> Gender is a <em>social construct</em> (sex is biological); avoid gender stereotyping in textbooks/labs. Language Across the Curriculum (LAC) integrates reading/writing in every subject including CS. Drama & Art foster experiential, creative expression.',
          '<strong>CS Pedagogy & ICT:</strong> Inductive (specific examples → general rule) vs Deductive (rule → examples), Project Method (Kilpatrick), Problem-Solving, Lab/Demonstration method. <strong>TPACK</strong> framework = Technological + Pedagogical + Content Knowledge. Govt ICT platforms: DIKSHA, SWAYAM, e-Pathshala, NROER.'
        ]
      }
    ]
  }
];
