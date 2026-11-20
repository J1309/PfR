// DSSSB TGT Computer Science (41/26) — Section B Core CS Question Bank (100 Balanced MCQs: 20 per Module)
// Strict Anti-Flaw Standard: Balanced option lengths, genuine technical distractors, even answer distribution.

window.dsssbSectionB_CoreCS = {
  secB_prog: [
    {
      id: "prg_01",
      topic: "C Pointers",
      question: "What is the output of the following C++ snippet?\n\nint arr[] = {10, 20, 30, 40, 50};\nint *p = arr;\np++;\ncout << *p << \" \";\np = p + 2;\ncout << *p;",
      options: ["10 30", "20 40", "20 50", "30 50"],
      correctIndex: 1,
      explanation: "Initially p points to arr[0] (10). After p++, p points to arr[1] (20). After p = p + 2, p points to arr[3] (40). Output: 20 40."
    },
    {
      id: "prg_02",
      topic: "C Storage Classes",
      question: "Which storage class in C retains its variable value between multiple calls to the same function?",
      options: ["auto", "register", "static", "extern"],
      correctIndex: 2,
      explanation: "A static local variable is stored in the data segment, initialized once to 0, and preserves its value across function invocations."
    },
    {
      id: "prg_03",
      topic: "C Memory Allocation",
      question: "What is the key difference between malloc() and calloc() in C?",
      options: [
        "malloc() allocates on stack; calloc() allocates on heap",
        "malloc() leaves memory uninitialized; calloc() initializes to zero",
        "malloc() returns int*; calloc() returns void*",
        "malloc() frees memory automatically; calloc() requires free()"
      ],
      correctIndex: 1,
      explanation: "Both allocate on the heap and return void*. malloc() leaves allocated bytes uninitialized (garbage), whereas calloc() zero-initializes all bits."
    },
    {
      id: "prg_04",
      topic: "C Struct vs Union",
      question: "On a system where int = 4 bytes, char = 1 byte, and double = 8 bytes, what is the minimum size of `union Data { int a; char b; double c; };`?",
      options: ["4 bytes", "8 bytes", "13 bytes", "16 bytes"],
      correctIndex: 1,
      explanation: "All members of a union share the same memory location, so its size equals the size of its largest member (double = 8 bytes)."
    },
    {
      id: "prg_05",
      topic: "C++ OOPs",
      question: "Which of the following C++ operators CANNOT be overloaded?",
      options: ["+", "==", "::", "[]"],
      correctIndex: 2,
      explanation: "The scope resolution operator (::), member access (.), pointer-to-member (.*), ternary (?:), and sizeof cannot be overloaded in C++."
    },
    {
      id: "prg_06",
      topic: "C++ Constructors",
      question: "Which statement is true regarding constructors and destructors in C++?",
      options: [
        "Both constructors and destructors can be overloaded",
        "Constructors can be overloaded, destructors cannot",
        "Destructors can take default arguments, constructors cannot",
        "Both constructors and destructors have explicit return types"
      ],
      correctIndex: 1,
      explanation: "A class can have multiple overloaded constructors, but only one destructor which takes zero parameters and cannot be overloaded."
    },
    {
      id: "prg_07",
      topic: "C++ Polymorphism",
      question: "Run-time polymorphism (dynamic binding) in C++ is achieved using:",
      options: ["Function overloading", "Operator overloading", "Virtual functions", "Inline functions"],
      correctIndex: 2,
      explanation: "Virtual functions use a vtable/vptr mechanism to resolve overridden methods at runtime based on the actual object type."
    },
    {
      id: "prg_08",
      topic: "C++ Abstract Class",
      question: "How is a pure virtual function declared inside a C++ base class?",
      options: [
        "virtual void show() = NULL;",
        "virtual void show() = 0;",
        "abstract void show();",
        "void virtual show() const;"
      ],
      correctIndex: 1,
      explanation: "Appending '= 0' to a virtual function declaration makes it a pure virtual function, turning the class into an abstract class."
    },
    {
      id: "prg_09",
      topic: "C++ Access Specifiers",
      question: "In C++, what is the default access specifier for members of a `class` and a `struct` respectively?",
      options: ["public, private", "private, public", "protected, public", "private, protected"],
      correctIndex: 1,
      explanation: "In C++, class members default to private, whereas struct members default to public."
    },
    {
      id: "prg_10",
      topic: "C++ Friend Function",
      question: "Which property holds true for a `friend` function in C++?",
      options: [
        "It is inherited by derived classes",
        "It is called using the object dot operator",
        "It can access private members of the class",
        "It must be defined inside the class body"
      ],
      correctIndex: 2,
      explanation: "A friend function is not a member of the class, is not inherited, and is called normally, yet it is granted access to private and protected members."
    },
    {
      id: "prg_11",
      topic: "C Output",
      question: "What will the following C code print?\n\nint x = 5;\nprintf(\"%d %d\", x++, ++x);",
      options: ["5 7", "6 7", "5 6", "Undefined behavior"],
      correctIndex: 3,
      explanation: "Modifying the same variable multiple times without an intervening sequence point in C/C++ results in Undefined Behavior."
    },
    {
      id: "prg_12",
      topic: "C Operators",
      question: "What is the result of the bitwise expression `12 & 10` in C?",
      options: ["8", "10", "14", "6"],
      correctIndex: 0,
      explanation: "12 in binary is 1100 and 10 is 1010. Bitwise AND (1100 & 1010) = 1000 = 8."
    },
    {
      id: "prg_13",
      topic: "Java Basics",
      question: "Which component of the Java platform converts compiled bytecode (.class) into native machine code at runtime?",
      options: ["javac", "JDK", "JVM", "Javadoc"],
      correctIndex: 2,
      explanation: "The Java Virtual Machine (JVM), using its interpreter and JIT compiler, executes bytecode on the host platform."
    },
    {
      id: "prg_14",
      topic: "Java Inheritance",
      question: "How does Java support multiple inheritance of type without the diamond problem of classes?",
      options: ["Abstract classes", "Interfaces", "Final classes", "Static methods"],
      correctIndex: 1,
      explanation: "Java does not allow a class to extend multiple classes, but a class can implement multiple interfaces."
    },
    {
      id: "prg_15",
      topic: "Java Strings",
      question: "Which Java class is both mutable and thread-safe (synchronized)?",
      options: ["String", "StringBuilder", "StringBuffer", "CharSequence"],
      correctIndex: 2,
      explanation: "String is immutable; StringBuilder is mutable but not synchronized; StringBuffer is mutable and thread-safe."
    },
    {
      id: "prg_16",
      topic: "Java Keywords",
      question: "If a class in Java is declared with the `final` keyword, what does it signify?",
      options: [
        "The class cannot be instantiated",
        "The class cannot be subclassed",
        "All methods are abstract",
        "The class runs on a single thread"
      ],
      correctIndex: 1,
      explanation: "A final class cannot be inherited (subclassed), such as java.lang.String."
    },
    {
      id: "prg_17",
      topic: "Java Exceptions",
      question: "Which of the following is an unchecked (runtime) exception in Java?",
      options: ["IOException", "SQLException", "NullPointerException", "ClassNotFoundException"],
      correctIndex: 2,
      explanation: "NullPointerException extends RuntimeException and is unchecked; IOException, SQLException, and ClassNotFoundException are checked exceptions."
    },
    {
      id: "prg_18",
      topic: "Python Basics",
      question: "Which of the following built-in data types in Python is immutable?",
      options: ["list", "dict", "set", "tuple"],
      correctIndex: 3,
      explanation: "Tuples cannot be modified after creation, whereas lists, dictionaries, and sets are mutable."
    },
    {
      id: "prg_19",
      topic: "Python Output",
      question: "What is the output of `print(7 // 2, 2 ** 3)` in Python 3?",
      options: ["3.5 6", "3 8", "3.5 8", "3 6"],
      correctIndex: 1,
      explanation: "// performs integer floor division (7 // 2 = 3) and ** performs exponentiation (2 ** 3 = 8)."
    },
    {
      id: "prg_20",
      topic: "C Recursion",
      question: "Which data structure is implicitly used by the runtime environment to manage recursive function calls?",
      options: ["Queue", "Stack", "Binary Tree", "Hash Table"],
      correctIndex: 1,
      explanation: "Each recursive call pushes an activation record (stack frame) onto the call stack and pops it upon return."
    }
  ],

  secB_dsa: [
    {
      id: "dsa_01",
      topic: "Stack Applications",
      question: "What is the postfix equivalent of the infix expression `A + B * C - D`?",
      options: ["AB+C*D-", "ABC*+D-", "ABC+*D-", "AB+CD-*"],
      correctIndex: 1,
      explanation: "Multiplication has higher precedence: B*C → BC*. Then A + BC* → ABC*+. Finally subtract D → ABC*+D-."
    },
    {
      id: "dsa_02",
      topic: "Circular Queue",
      question: "In a circular queue implemented using an array of size N, what is the standard condition for the queue being FULL?",
      options: [
        "rear == N - 1",
        "(rear + 1) % N == front",
        "front == rear",
        "(front + 1) % N == rear"
      ],
      correctIndex: 1,
      explanation: "A circular queue wraps around modulo N; it is full when advancing rear by 1 modulo N equals front."
    },
    {
      id: "dsa_03",
      topic: "Linked Lists",
      question: "What is the time complexity of inserting a new node at the beginning of a singly linked list?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 0,
      explanation: "Inserting at the head only requires updating the new node's next pointer and the head pointer — constant time O(1)."
    },
    {
      id: "dsa_04",
      topic: "Binary Trees",
      question: "What is the maximum number of nodes possible in a binary tree of height h (where root has height 0)?",
      options: ["2^h", "2^h - 1", "2^(h+1) - 1", "2^(h-1) + 1"],
      correctIndex: 2,
      explanation: "Summing 2⁰ + 2¹ + ... + 2ʰ gives 2^(h+1) − 1 maximum nodes."
    },
    {
      id: "dsa_05",
      topic: "BST Traversal",
      question: "Which traversal of a Binary Search Tree (BST) always produces its keys in ascending sorted order?",
      options: ["Preorder", "Inorder", "Postorder", "Level-order"],
      correctIndex: 1,
      explanation: "Inorder traversal visits Left subtree → Root → Right subtree, outputting BST keys in strictly increasing order."
    },
    {
      id: "dsa_06",
      topic: "Tree Reconstruction",
      question: "Given Preorder `G B Q A C K F P D` and Inorder `Q B A G K C F D P`, which node is the immediate left child of the root?",
      options: ["Q", "B", "C", "K"],
      correctIndex: 1,
      explanation: "Root is G (first in Preorder). Left subtree in Inorder is {Q, B, A}. The first of these appearing in Preorder after G is B."
    },
    {
      id: "dsa_07",
      topic: "AVL Trees",
      question: "In an AVL tree, the balance factor of every node must belong to which set?",
      options: ["{0, 1}", "{-1, 0, 1}", "{-2, -1, 0, 1, 2}", "{0, 1, 2}"],
      correctIndex: 1,
      explanation: "An AVL tree is height-balanced such that |height(Left) − height(Right)| ≤ 1, so balance factor ∈ {-1, 0, +1}."
    },
    {
      id: "dsa_08",
      topic: "Heaps",
      question: "In a 0-indexed array representation of a binary heap, what is the index of the left child of a node at index `i`?",
      options: ["2i", "2i + 1", "2i + 2", "(i - 1) / 2"],
      correctIndex: 1,
      explanation: "For 0-based indexing: left child = 2i + 1, right child = 2i + 2, parent = floor((i − 1) / 2)."
    },
    {
      id: "dsa_09",
      topic: "Sorting Complexity",
      question: "What is the worst-case time complexity of Quick Sort, Merge Sort, and Heap Sort respectively?",
      options: [
        "O(n log n), O(n²), O(n log n)",
        "O(n²), O(n log n), O(n log n)",
        "O(n²), O(n²), O(n log n)",
        "O(n log n), O(n log n), O(n²)"
      ],
      correctIndex: 1,
      explanation: "Quick Sort degrades to O(n²) on already sorted/bad pivot partitions, while Merge Sort and Heap Sort guarantee O(n log n) worst-case."
    },
    {
      id: "dsa_10",
      topic: "Stable Sorting",
      question: "Which of the following sorting algorithms is guaranteed to be STABLE in its standard implementation?",
      options: ["Quick Sort", "Heap Sort", "Selection Sort", "Merge Sort"],
      correctIndex: 3,
      explanation: "Merge Sort preserves the relative order of equal elements; standard Quick Sort, Heap Sort, and Selection Sort are unstable."
    },
    {
      id: "dsa_11",
      topic: "Best-Case Sorting",
      question: "Which sorting algorithm achieves O(n) best-case time complexity when the input array is already sorted?",
      options: ["Selection Sort", "Insertion Sort", "Merge Sort", "Heap Sort"],
      correctIndex: 1,
      explanation: "Insertion Sort performs only n − 1 comparisons and 0 shifts on an already sorted array, giving O(n) best-case time."
    },
    {
      id: "dsa_12",
      topic: "Graph Traversal",
      question: "Breadth-First Search (BFS) on a graph is implemented using which primary data structure?",
      options: ["Stack", "Queue", "Priority Queue", "Binary Search Tree"],
      correctIndex: 1,
      explanation: "BFS explores vertices level by level using a FIFO Queue (whereas DFS uses a LIFO Stack / recursion)."
    },
    {
      id: "dsa_13",
      topic: "Minimum Spanning Tree",
      question: "Kruskal's and Prim's algorithms are classic examples of which algorithmic paradigm?",
      options: ["Divide and Conquer", "Dynamic Programming", "Greedy Method", "Backtracking"],
      correctIndex: 2,
      explanation: "Both Kruskal's and Prim's algorithms make locally optimal edge choices at each step to construct a Minimum Spanning Tree (Greedy)."
    },
    {
      id: "dsa_14",
      topic: "Shortest Path",
      question: "Which shortest-path algorithm can correctly handle graphs containing negative edge weights (and detect negative cycles)?",
      options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Prim's Algorithm", "BFS"],
      correctIndex: 1,
      explanation: "Bellman-Ford relaxes all edges V − 1 times and works with negative edge weights; Dijkstra's algorithm fails on negative weights."
    },
    {
      id: "dsa_15",
      topic: "Dynamic Programming",
      question: "Which of the following problems is solved using Dynamic Programming rather than the Greedy method?",
      options: ["Fractional Knapsack", "0/1 Knapsack", "Huffman Coding", "Activity Selection"],
      correctIndex: 1,
      explanation: "0/1 Knapsack cannot be solved optimally by greedy ratios and requires Dynamic Programming; the other three are Greedy."
    },
    {
      id: "dsa_16",
      topic: "Binary Search",
      question: "What is the maximum number of comparisons required by Binary Search on a sorted array of 1024 elements?",
      options: ["10", "11", "32", "512"],
      correctIndex: 1,
      explanation: "Worst-case comparisons = floor(log₂ 1024) + 1 = 10 + 1 = 11."
    },
    {
      id: "dsa_17",
      topic: "Hashing",
      question: "Which collision resolution technique in hashing suffers from primary clustering?",
      options: ["Separate Chaining", "Linear Probing", "Double Hashing", "Cuckoo Hashing"],
      correctIndex: 1,
      explanation: "Linear probing checks consecutive slots (h(k) + i) % m, causing long contiguous runs of occupied slots called primary clustering."
    },
    {
      id: "dsa_18",
      topic: "Asymptotic Notation",
      question: "Which asymptotic notation represents a tight bound (both upper and lower bound) on an algorithm's running time?",
      options: ["Big-O (O)", "Big-Omega (Ω)", "Big-Theta (Θ)", "Little-o (o)"],
      correctIndex: 2,
      explanation: "Big-O is upper bound, Big-Omega is lower bound, and Big-Theta (Θ) denotes an asymptotically tight bound."
    },
    {
      id: "dsa_19",
      topic: "2D Array Addressing",
      question: "For a 2D array `A[10][20]` stored in row-major order with base address 1000 and element size 4 bytes, what is the address of `A[2][5]`?",
      options: ["1140", "1180", "1220", "1260"],
      correctIndex: 1,
      explanation: "Address = 1000 + 4 × (2 × 20 + 5) = 1000 + 4 × 45 = 1180."
    },
    {
      id: "dsa_20",
      topic: "All-Pairs Shortest Path",
      question: "What is the time complexity of the Floyd-Warshall algorithm for a graph with V vertices?",
      options: ["O(V²)", "O(V² log V)", "O(V³)", "O(V · E)"],
      correctIndex: 2,
      explanation: "Floyd-Warshall uses three nested loops over all V vertices, yielding O(V³) time complexity."
    }
  ],

  secB_dbms: [
    {
      id: "db_01",
      topic: "Relational Model",
      question: "In a relational database table, the number of tuples is called its _____, and the number of attributes is called its _____.",
      options: ["Degree, Cardinality", "Cardinality, Degree", "Domain, Schema", "Instance, Key"],
      correctIndex: 1,
      explanation: "Cardinality = number of rows (tuples); Degree = number of columns (attributes)."
    },
    {
      id: "db_02",
      topic: "ER Model",
      question: "A top-down design process in which a higher-level entity is split into lower-level specialized entities is called:",
      options: ["Generalization", "Specialization", "Aggregation", "Normalization"],
      correctIndex: 1,
      explanation: "Specialization is top-down (e.g., Employee → Teacher, Clerk); Generalization is bottom-up."
    },
    {
      id: "db_03",
      topic: "Keys & Integrity",
      question: "Foreign key constraints in a relational database enforce which type of integrity?",
      options: ["Entity Integrity", "Domain Integrity", "Referential Integrity", "Semantic Integrity"],
      correctIndex: 2,
      explanation: "Referential integrity ensures every non-null foreign key value matches an existing primary/candidate key in the referenced table."
    },
    {
      id: "db_04",
      topic: "Keys",
      question: "A minimal super key of a relation (no proper subset of which is also a super key) is known as a:",
      options: ["Foreign Key", "Candidate Key", "Composite Key", "Secondary Key"],
      correctIndex: 1,
      explanation: "A Candidate Key is a minimal super key. One candidate key is chosen as the Primary Key."
    },
    {
      id: "db_05",
      topic: "Normalization",
      question: "A relation in 1NF is in Second Normal Form (2NF) if and only if it has no:",
      options: ["Transitive dependency", "Partial dependency", "Multivalued dependency", "Join dependency"],
      correctIndex: 1,
      explanation: "2NF eliminates partial functional dependencies of non-prime attributes on a proper subset of a composite candidate key."
    },
    {
      id: "db_06",
      topic: "Normalization",
      question: "Third Normal Form (3NF) specifically eliminates which type of functional dependency?",
      options: ["Partial dependency", "Transitive dependency", "Multivalued dependency", "Trivial dependency"],
      correctIndex: 1,
      explanation: "3NF removes transitive dependencies where a non-prime attribute depends on another non-prime attribute."
    },
    {
      id: "db_07",
      topic: "BCNF",
      question: "For a relation to be in Boyce-Codd Normal Form (BCNF), for every non-trivial functional dependency X → Y:",
      options: [
        "Y must be a prime attribute",
        "X must be a super key",
        "X must be a foreign key",
        "Y must be a composite key"
      ],
      correctIndex: 1,
      explanation: "BCNF requires that the determinant X of every non-trivial functional dependency X → Y must be a super key."
    },
    {
      id: "db_08",
      topic: "SQL Commands",
      question: "Which of the following SQL commands belongs to Data Manipulation Language (DML)?",
      options: ["CREATE", "ALTER", "TRUNCATE", "UPDATE"],
      correctIndex: 3,
      explanation: "UPDATE (along with INSERT, DELETE, SELECT) is DML. CREATE, ALTER, DROP, and TRUNCATE are DDL."
    },
    {
      id: "db_09",
      topic: "SQL Commands",
      question: "Which SQL command is classified under Data Control Language (DCL)?",
      options: ["COMMIT", "ROLLBACK", "REVOKE", "SAVEPOINT"],
      correctIndex: 2,
      explanation: "GRANT and REVOKE are DCL commands for permissions. COMMIT, ROLLBACK, and SAVEPOINT are TCL."
    },
    {
      id: "db_10",
      topic: "SQL Clauses",
      question: "Which SQL clause is used to filter grouped records based on an aggregate condition like `COUNT(*) > 5`?",
      options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
      correctIndex: 1,
      explanation: "WHERE filters individual rows before grouping; HAVING filters groups after GROUP BY using aggregate functions."
    },
    {
      id: "db_11",
      topic: "SQL Joins",
      question: "Which join returns all rows from the left table and matched rows from the right table, filling unmatched right columns with NULL?",
      options: ["INNER JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "CROSS JOIN"],
      correctIndex: 1,
      explanation: "LEFT OUTER JOIN preserves every tuple from the left relation and pads unmatched right attributes with NULL."
    },
    {
      id: "db_12",
      topic: "SQL DELETE vs TRUNCATE",
      question: "How does `TRUNCATE TABLE` differ from `DELETE FROM` without a WHERE clause?",
      options: [
        "TRUNCATE is DML and fires row triggers",
        "TRUNCATE is DDL and deallocates data pages",
        "DELETE removes the table schema permanently",
        "TRUNCATE supports a WHERE condition"
      ],
      correctIndex: 1,
      explanation: "TRUNCATE is a DDL operation that quickly removes all rows by deallocating pages without logging individual row deletions."
    },
    {
      id: "db_13",
      topic: "Relational Algebra",
      question: "In Relational Algebra, which operator is used to select specific columns (attributes) from a relation?",
      options: ["Selection (σ)", "Projection (π)", "Cartesian Product (×)", "Rename (ρ)"],
      correctIndex: 1,
      explanation: "Projection (π) picks specific columns; Selection (σ) filters specific rows satisfying a predicate."
    },
    {
      id: "db_14",
      topic: "Transactions (ACID)",
      question: "Which ACID property guarantees that once a transaction commits, its changes survive a system crash or power failure?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      correctIndex: 3,
      explanation: "Durability ensures committed updates are permanently written to non-volatile storage (via write-ahead logging)."
    },
    {
      id: "db_15",
      topic: "Concurrency Control",
      question: "Reading data written by an uncommitted transaction that later rolls back is known as a:",
      options: ["Lost Update", "Dirty Read", "Phantom Read", "Deadlock"],
      correctIndex: 1,
      explanation: "A Dirty Read (WR conflict) occurs when Transaction T2 reads a value modified by T1 before T1 commits or aborts."
    },
    {
      id: "db_16",
      topic: "Locking Protocols",
      question: "Two-Phase Locking (2PL) protocol guarantees which property for concurrent schedules?",
      options: ["Deadlock freedom", "Conflict serializability", "Starvation freedom", "Zero rollback"],
      correctIndex: 1,
      explanation: "2PL (growing phase + shrinking phase) guarantees conflict serializability, though deadlocks can still occur."
    },
    {
      id: "db_17",
      topic: "Indexing",
      question: "Why are B+ Trees preferred over B-Trees for database indexing?",
      options: [
        "B+ Trees store data pointers only at leaf nodes linked sequentially",
        "B+ Trees do not require balancing after insertion",
        "B+ Trees allow O(1) direct hash lookups",
        "B+ Trees store keys only at the root node"
      ],
      correctIndex: 0,
      explanation: "In B+ Trees, internal nodes hold only keys (higher fan-out, lower height) and leaf nodes form a linked list for fast range queries."
    },
    {
      id: "db_18",
      topic: "ER Notation",
      question: "In an ER diagram, a weak entity set is represented by a:",
      options: ["Single rectangle", "Double rectangle", "Dashed oval", "Double diamond"],
      correctIndex: 1,
      explanation: "Weak entity = double rectangle; identifying relationship = double diamond; derived attribute = dashed oval."
    },
    {
      id: "db_19",
      topic: "Three-Schema Architecture",
      question: "Modifying the physical storage structure without affecting the conceptual schema is known as:",
      options: [
        "Logical data independence",
        "Physical data independence",
        "Referential independence",
        "View independence"
      ],
      correctIndex: 1,
      explanation: "Physical data independence insulates the conceptual schema from changes in internal/physical storage."
    },
    {
      id: "db_20",
      topic: "SQL Aggregates",
      question: "What does `COUNT(column_name)` return if a table has 10 rows and 3 of those rows contain NULL in `column_name`?",
      options: ["3", "7", "10", "NULL"],
      correctIndex: 1,
      explanation: "COUNT(column_name) ignores NULL values and returns 7, whereas COUNT(*) counts all 10 rows."
    }
  ],

  secB_os: [
    {
      id: "os_01",
      topic: "CPU Scheduling",
      question: "Which of the following CPU scheduling algorithms is strictly non-preemptive?",
      options: ["Round Robin", "SRTF", "FCFS", "Multilevel Feedback Queue"],
      correctIndex: 2,
      explanation: "First-Come, First-Served (FCFS) is non-preemptive; once a process gets the CPU, it holds it until completion or I/O wait."
    },
    {
      id: "os_02",
      topic: "CPU Scheduling",
      question: "Which scheduling algorithm suffers from the 'Convoy Effect' when a long CPU-bound process arrives first?",
      options: ["SJF", "Round Robin", "FCFS", "Priority"],
      correctIndex: 2,
      explanation: "In FCFS, short I/O-bound processes get stuck waiting behind one long CPU-bound process (Convoy Effect)."
    },
    {
      id: "os_03",
      topic: "CPU Scheduling",
      question: "Which technique is used in Priority Scheduling to prevent indefinite blocking (starvation) of low-priority processes?",
      options: ["Swapping", "Aging", "Spooling", "Thrashing"],
      correctIndex: 1,
      explanation: "Aging gradually increases the priority of processes that wait in the ready queue for a long time."
    },
    {
      id: "os_04",
      topic: "Deadlocks",
      question: "Banker's Algorithm in Operating Systems is used for:",
      options: ["Deadlock Prevention", "Deadlock Avoidance", "Deadlock Detection", "Deadlock Recovery"],
      correctIndex: 1,
      explanation: "Banker's Algorithm checks whether granting a resource request leaves the system in a safe state — classic Deadlock Avoidance."
    },
    {
      id: "os_05",
      topic: "Deadlocks",
      question: "Which of the following is NOT one of the four Coffman necessary conditions for a deadlock?",
      options: ["Mutual Exclusion", "Hold and Wait", "Preemption", "Circular Wait"],
      correctIndex: 2,
      explanation: "The third Coffman condition is 'No Preemption', not 'Preemption'."
    },
    {
      id: "os_06",
      topic: "Memory Management",
      question: "In a paging system, which hardware component translates a logical address into a physical address?",
      options: ["ALU", "MMU", "DMA Controller", "Control Unit"],
      correctIndex: 1,
      explanation: "The Memory Management Unit (MMU) maps CPU-generated logical addresses to physical RAM addresses using the page table."
    },
    {
      id: "os_07",
      topic: "Page Replacement",
      question: "Which page replacement algorithm suffers from Belady's Anomaly (more frames causing more page faults)?",
      options: ["LRU", "Optimal", "FIFO", "LFU"],
      correctIndex: 2,
      explanation: "FIFO is not a stack algorithm and can exhibit Belady's Anomaly; LRU and Optimal never suffer from it."
    },
    {
      id: "os_08",
      topic: "Virtual Memory",
      question: "A state where the system spends more time swapping pages between disk and RAM than executing instructions is called:",
      options: ["Paging", "Compaction", "Thrashing", "Fragmentation"],
      correctIndex: 2,
      explanation: "Thrashing occurs when active processes lack enough frames to hold their working sets, causing continuous page faults."
    },
    {
      id: "os_09",
      topic: "Fragmentation",
      question: "Pure Paging completely eliminates _____, while pure Segmentation eliminates _____.",
      options: [
        "Internal fragmentation, External fragmentation",
        "External fragmentation, Internal fragmentation",
        "Page faults, Context switching",
        "Deadlocks, Starvation"
      ],
      correctIndex: 1,
      explanation: "Fixed-size frames in paging eliminate external fragmentation (leaving small internal fragmentation in the last page); variable-sized segments eliminate internal fragmentation."
    },
    {
      id: "os_10",
      topic: "Threads",
      question: "Which of the following resources is NOT shared among threads of the same process?",
      options: ["Code section", "Heap memory", "Open files", "Stack"],
      correctIndex: 3,
      explanation: "Each thread has its own private stack, registers, and program counter, while sharing code, data/heap, and open files."
    },
    {
      id: "os_11",
      topic: "Schedulers",
      question: "Which OS scheduler controls the degree of multiprogramming by admitting processes from disk into main memory?",
      options: ["Short-term scheduler", "Medium-term scheduler", "Long-term scheduler", "I/O scheduler"],
      correctIndex: 2,
      explanation: "The Long-term (job) scheduler selects jobs from the job pool and loads them into memory, controlling the degree of multiprogramming."
    },
    {
      id: "os_12",
      topic: "Synchronization",
      question: "The atomic operations defined on a Semaphore `S` by Dijkstra are `wait(S)` (P) and `signal(S)` (V). What does `wait(S)` do?",
      options: [
        "Increments S unconditionally",
        "Decrements S when S > 0, else blocks",
        "Resets S to zero",
        "Deletes the semaphore from memory"
      ],
      correctIndex: 1,
      explanation: "wait(S) / P(S) waits while S ≤ 0, then decrements S by 1; signal(S) / V(S) increments S by 1."
    },
    {
      id: "os_13",
      topic: "Memory Allocation",
      question: "Which contiguous memory allocation strategy allocates the smallest free hole that is large enough for the process?",
      options: ["First Fit", "Best Fit", "Worst Fit", "Next Fit"],
      correctIndex: 1,
      explanation: "Best Fit searches for the smallest sufficient hole to minimize wasted space, though it tends to leave tiny unusable slivers."
    },
    {
      id: "os_14",
      topic: "Disk Scheduling",
      question: "The Elevator Algorithm in disk scheduling is formally known as:",
      options: ["FCFS", "SSTF", "SCAN", "LOOK"],
      correctIndex: 2,
      explanation: "SCAN moves the disk arm back and forth across the platter servicing requests in one direction until the end, like an elevator."
    },
    {
      id: "os_15",
      topic: "System Calls",
      question: "In UNIX/Linux, what does the `fork()` system call return to the newly created child process?",
      options: ["-1", "0", "Parent PID", "Child PID"],
      correctIndex: 1,
      explanation: "fork() returns 0 to the child process, the child's positive PID to the parent process, and −1 on failure."
    },
    {
      id: "os_16",
      topic: "Linux Permissions",
      question: "In Linux, what permissions does the command `chmod 755 script.sh` assign?",
      options: [
        "rwxr-xr-x",
        "rwxrw-rw-",
        "rw-r--r--",
        "rwxrwxr-x"
      ],
      correctIndex: 0,
      explanation: "7 = 4+2+1 (rwx) for owner; 5 = 4+0+1 (r-x) for group; 5 = 4+0+1 (r-x) for others → rwxr-xr-x."
    },
    {
      id: "os_17",
      topic: "Linux Commands",
      question: "Which Linux command is used to search for lines matching a specific text pattern inside files?",
      options: ["find", "grep", "diff", "chmod"],
      correctIndex: 1,
      explanation: "grep (Global Regular Expression Print) searches file contents for matching patterns; find locates files by name/attributes."
    },
    {
      id: "os_18",
      topic: "Linux Processes",
      question: "Which signal number is sent by `kill -9 <PID>` in Linux to forcibly terminate a process immediately?",
      options: ["SIGTERM", "SIGINT", "SIGKILL", "SIGHUP"],
      correctIndex: 2,
      explanation: "Signal 9 is SIGKILL, which cannot be caught or ignored by the process; signal 15 is SIGTERM."
    },
    {
      id: "os_19",
      topic: "Address Translation",
      question: "A system uses 32-bit logical addresses and a page size of 4 KB (2¹² bytes). How many bits are used for the page number?",
      options: ["12 bits", "16 bits", "20 bits", "24 bits"],
      correctIndex: 2,
      explanation: "Page offset takes 12 bits (4 KB = 2¹²). Remaining bits for page number = 32 − 12 = 20 bits."
    },
    {
      id: "os_20",
      topic: "IPC",
      question: "A process that has finished execution but still has an entry in the process table waiting for its parent to read its exit status is a:",
      options: ["Orphan process", "Zombie process", "Daemon process", "Blocked process"],
      correctIndex: 1,
      explanation: "A Zombie process has terminated but awaits parent wait() collection; an Orphan process's parent terminated before it."
    }
  ],

  secB_net: [
    {
      id: "net_01",
      topic: "OSI Model",
      question: "Which layer of the OSI model is responsible for end-to-end process-to-process delivery, segmentation, and port addressing?",
      options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
      correctIndex: 2,
      explanation: "Layer 4 (Transport Layer) provides process-to-process communication via TCP/UDP port numbers."
    },
    {
      id: "net_02",
      topic: "Network Devices",
      question: "Which networking device operates at OSI Layer 2 and forwards frames using MAC addresses?",
      options: ["Repeater", "Hub", "Switch", "Router"],
      correctIndex: 2,
      explanation: "A Switch operates at Layer 2 (Data Link) using a MAC address table; Hub/Repeater are Layer 1; Router is Layer 3."
    },
    {
      id: "net_03",
      topic: "Port Numbers",
      question: "What are the standard TCP port numbers used by FTP for data transfer and control commands respectively?",
      options: ["20 and 21", "21 and 22", "22 and 23", "80 and 443"],
      correctIndex: 0,
      explanation: "FTP uses TCP Port 20 for Data transfer and TCP Port 21 for Control/commands."
    },
    {
      id: "net_04",
      topic: "Port Numbers",
      question: "Which well-known port numbers are used by DNS and HTTPS respectively?",
      options: ["25 and 80", "53 and 443", "67 and 443", "53 and 80"],
      correctIndex: 1,
      explanation: "DNS uses Port 53 (UDP/TCP) and HTTPS uses TCP Port 443."
    },
    {
      id: "net_05",
      topic: "IPv4 Addressing",
      question: "Which IPv4 address class starts with leading bits `10` and covers the first-octet range 128 to 191?",
      options: ["Class A", "Class B", "Class C", "Class D"],
      correctIndex: 1,
      explanation: "Class A: 0 (1–126), Class B: 10 (128–191), Class C: 110 (192–223), Class D: 1110 (224–239)."
    },
    {
      id: "net_06",
      topic: "Subnetting",
      question: "How many usable host IP addresses are available in a `/26` IPv4 subnet?",
      options: ["30", "62", "64", "126"],
      correctIndex: 1,
      explanation: "Host bits = 32 − 26 = 6. Usable hosts = 2⁶ − 2 = 64 − 2 = 62 (excluding network and broadcast addresses)."
    },
    {
      id: "net_07",
      topic: "Special IPs",
      question: "An IP address in the range `169.254.0.0/16` assigned automatically by Windows indicates:",
      options: [
        "Loopback diagnostic address",
        "APIPA due to DHCP failure",
        "Class B public multicast",
        "Default gateway address"
      ],
      correctIndex: 1,
      explanation: "169.254.x.x is APIPA (Automatic Private IP Addressing), assigned when a client cannot reach a DHCP server."
    },
    {
      id: "net_08",
      topic: "Protocols",
      question: "Which protocol maps a known logical IPv4 address to its corresponding physical MAC address on a LAN?",
      options: ["DNS", "DHCP", "ARP", "ICMP"],
      correctIndex: 2,
      explanation: "ARP (Address Resolution Protocol) broadcasts an IP to discover the target host's Layer 2 MAC address."
    },
    {
      id: "net_09",
      topic: "DHCP",
      question: "What is the correct sequence of messages in the DHCP DORA IP lease process?",
      options: [
        "Discover → Offer → Request → Acknowledge",
        "Discover → Request → Offer → Acknowledge",
        "Detect → Offer → Reply → Accept",
        "Dial → Open → Request → Assign"
      ],
      correctIndex: 0,
      explanation: "DHCP DORA stands for Discover (Client) → Offer (Server) → Request (Client) → Acknowledge (Server)."
    },
    {
      id: "net_10",
      topic: "Routing Protocols",
      question: "Which interior gateway routing protocol is a Link-State protocol based on Dijkstra's shortest path algorithm?",
      options: ["RIP", "OSPF", "BGP", "ARP"],
      correctIndex: 1,
      explanation: "OSPF (Open Shortest Path First) is a Link-State protocol using Dijkstra; RIP is Distance Vector (Bellman-Ford); BGP is Path Vector."
    },
    {
      id: "net_11",
      topic: "TCP Handshake",
      question: "Which sequence of flags establishes a reliable TCP connection between a client and a server?",
      options: [
        "SYN → ACK → FIN",
        "SYN → SYN-ACK → ACK",
        "ACK → SYN → RST",
        "REQ → ACK → EST"
      ],
      correctIndex: 1,
      explanation: "TCP uses a 3-way handshake: Client sends SYN, Server replies SYN-ACK, Client confirms with ACK."
    },
    {
      id: "net_12",
      topic: "Data Link Layer",
      question: "Which medium access control protocol is used by traditional wired Ethernet (IEEE 802.3) vs Wi-Fi (IEEE 802.11)?",
      options: [
        "CSMA/CA and CSMA/CD",
        "CSMA/CD and CSMA/CA",
        "Token Ring and ALOHA",
        "TDMA and CDMA"
      ],
      correctIndex: 1,
      explanation: "Wired Ethernet uses CSMA/CD (Collision Detection); Wireless 802.11 uses CSMA/CA (Collision Avoidance)."
    },
    {
      id: "net_13",
      topic: "Error Detection",
      question: "Which error-detection technique treats a data frame as a binary polynomial divided by a generator polynomial?",
      options: ["Parity Bit", "Checksum", "CRC", "Hamming Code"],
      correctIndex: 2,
      explanation: "Cyclic Redundancy Check (CRC) uses modulo-2 polynomial division to detect burst errors reliably at Layer 2."
    },
    {
      id: "net_14",
      topic: "IPv6",
      question: "What is the bit length of an IPv6 address?",
      options: ["32 bits", "64 bits", "128 bits", "256 bits"],
      correctIndex: 2,
      explanation: "IPv6 addresses are 128 bits long, written as eight 16-bit hexadecimal groups separated by colons."
    },
    {
      id: "net_15",
      topic: "Email Protocols",
      question: "Which protocol is used specifically for SENDING outgoing emails from a mail client to a mail server?",
      options: ["POP3", "IMAP", "SMTP", "SNMP"],
      correctIndex: 2,
      explanation: "SMTP (Simple Mail Transfer Protocol, port 25/587) pushes outgoing mail; POP3 (110) and IMAP (143) retrieve mail."
    },
    {
      id: "net_16",
      topic: "Cryptography",
      question: "Which of the following is an ASYMMETRIC (public-key) cryptographic algorithm?",
      options: ["AES", "DES", "RSA", "3DES"],
      correctIndex: 2,
      explanation: "RSA uses a public/private key pair (asymmetric); AES, DES, and 3DES are symmetric block ciphers."
    },
    {
      id: "net_17",
      topic: "Network Security",
      question: "What is the primary operational difference between an IDS and an IPS?",
      options: [
        "IDS encrypts packets; IPS compresses packets",
        "IDS passively alerts; IPS actively blocks inline",
        "IDS works at Layer 1; IPS works at Layer 7",
        "IDS is hardware-only; IPS is software-only"
      ],
      correctIndex: 1,
      explanation: "An Intrusion Detection System (IDS) monitors copies of traffic and generates alerts; an Intrusion Prevention System (IPS) sits inline and drops malicious traffic."
    },
    {
      id: "net_18",
      topic: "Security Triad",
      question: "Cryptographic hash functions like SHA-256 primarily enforce which pillar of the CIA Triad?",
      options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
      correctIndex: 1,
      explanation: "Hashing produces a fixed-length digest to verify that data has not been tampered with (Integrity)."
    },
    {
      id: "net_19",
      topic: "Diagnostics",
      question: "The `tracert` (Windows) / `traceroute` (Linux) utility identifies intermediate routers along a path by manipulating which IP header field?",
      options: ["Header Checksum", "Time To Live (TTL)", "Protocol", "Fragment Offset"],
      correctIndex: 1,
      explanation: "Traceroute sends packets with incrementing TTL values (1, 2, 3...) and records the ICMP Time Exceeded replies from each hop."
    },
    {
      id: "net_20",
      topic: "Domain Separation",
      question: "A 24-port Layer 2 Ethernet switch (with default single VLAN) creates how many collision domains and broadcast domains?",
      options: [
        "1 collision, 1 broadcast",
        "24 collision, 1 broadcast",
        "1 collision, 24 broadcast",
        "24 collision, 24 broadcast"
      ],
      correctIndex: 1,
      explanation: "Each switch port is its own collision domain (24), while all ports in the same VLAN share 1 broadcast domain."
    }
  ]
};
