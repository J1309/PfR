// DSSSB TGT Computer Science (41/26) — Section B Applied CS, BCA Supporting & B.Ed. Pedagogy (100 Balanced MCQs)
// Covers: COA/Digital, Web/XML/.NET, SE/Graphics/Mobile/E-Comm, BCA Extras (Acct/Econ/MIS/Stats/Interp/Physics), & 10 Pedagogy Topics

window.dsssbSectionB_AppliedPedagogy = {
  secB_coa: [
    {
      id: "coa_01",
      topic: "Number Systems",
      question: "What is the hexadecimal equivalent of the binary number `(11011010)₂`?",
      options: ["CA", "DA", "DB", "EA"],
      correctIndex: 1,
      explanation: "Group into 4 bits: 1101 = 13 (D) and 1010 = 10 (A) → DA."
    },
    {
      id: "coa_02",
      topic: "Signed Representation",
      question: "What is the 8-bit 2's complement representation of the decimal number `−18`?",
      options: ["11101101", "11101110", "10010010", "11101100"],
      correctIndex: 1,
      explanation: "+18 = 00010010. 1's complement = 11101101. Add 1 → 11101110."
    },
    {
      id: "coa_03",
      topic: "Logic Gates",
      question: "Which pair of logic gates are known as Universal Gates because any Boolean function can be built using only one of them?",
      options: ["AND and OR", "XOR and XNOR", "NAND and NOR", "NOT and XOR"],
      correctIndex: 2,
      explanation: "NAND and NOR are functionally complete (Universal Gates)."
    },
    {
      id: "coa_04",
      topic: "Boolean Algebra",
      question: "According to De Morgan's Theorem, the expression `(A + B)'` is logically equivalent to:",
      options: ["A' + B'", "A' · B'", "(A · B)'", "A · B'"],
      correctIndex: 1,
      explanation: "De Morgan's Law states: (A + B)' = A' · B' and (A · B)' = A' + B'."
    },
    {
      id: "coa_05",
      topic: "Boolean Simplification",
      question: "Simplify the Boolean expression `A + A'B`:",
      options: ["A", "B", "A + B", "A · B"],
      correctIndex: 2,
      explanation: "By Distributive Law: A + A'B = (A + A')(A + B) = 1 · (A + B) = A + B."
    },
    {
      id: "coa_06",
      topic: "Combinational Circuits",
      question: "How many select lines are required for a `16 : 1` Multiplexer (MUX)?",
      options: ["2", "4", "8", "16"],
      correctIndex: 1,
      explanation: "A 2ⁿ : 1 multiplexer requires n select lines. Since 16 = 2⁴, it needs 4 select lines."
    },
    {
      id: "coa_07",
      topic: "Combinational Circuits",
      question: "A Full Adder circuit has how many inputs and outputs respectively?",
      options: ["2 inputs, 2 outputs", "3 inputs, 2 outputs", "2 inputs, 3 outputs", "3 inputs, 3 outputs"],
      correctIndex: 1,
      explanation: "A Full Adder takes 3 inputs (A, B, Carry-in) and produces 2 outputs (Sum, Carry-out)."
    },
    {
      id: "coa_08",
      topic: "Sequential Circuits",
      question: "Which flip-flop eliminates the invalid/indeterminate state (`S=1, R=1`) of an SR flip-flop by toggling its output?",
      options: ["D Flip-Flop", "JK Flip-Flop", "Master-Slave SR", "Latch"],
      correctIndex: 1,
      explanation: "In a JK Flip-Flop, J=1 and K=1 toggles the previous state (Q'ₙ) instead of entering an invalid state."
    },
    {
      id: "coa_09",
      topic: "Counters",
      question: "What is the minimum number of flip-flops required to construct a MOD-12 binary counter?",
      options: ["3", "4", "6", "12"],
      correctIndex: 1,
      explanation: "Number of states N ≤ 2ⁿ → 12 ≤ 2⁴ (16), so 4 flip-flops are required."
    },
    {
      id: "coa_10",
      topic: "IEEE 754",
      question: "In IEEE 754 Single Precision (32-bit) floating-point format, how many bits are allocated to Sign, Exponent, and Mantissa?",
      options: ["1, 7, 24", "1, 8, 23", "1, 11, 20", "2, 8, 22"],
      correctIndex: 1,
      explanation: "IEEE 754 32-bit float uses 1 sign bit, 8 exponent bits (bias 127), and 23 mantissa/fraction bits."
    },
    {
      id: "coa_11",
      topic: "CPU Registers",
      question: "Which CPU register holds the memory address of the NEXT instruction to be fetched?",
      options: ["Instruction Register (IR)", "Program Counter (PC)", "Accumulator (AC)", "Memory Buffer Register (MBR)"],
      correctIndex: 1,
      explanation: "The Program Counter (PC) tracks the address of the next instruction; IR holds the currently executing instruction."
    },
    {
      id: "coa_12",
      topic: "Addressing Modes",
      question: "Which addressing mode is most suitable for implementing pointer variables in C/C++?",
      options: ["Immediate", "Direct", "Register Indirect", "Implied"],
      correctIndex: 2,
      explanation: "Indirect / Register Indirect addressing stores the effective memory address of the operand inside a register or memory word, matching pointers."
    },
    {
      id: "coa_13",
      topic: "Addressing Modes",
      question: "In which addressing mode is the operand value embedded directly inside the instruction itself?",
      options: ["Immediate", "Direct", "Indexed", "Relative"],
      correctIndex: 0,
      explanation: "Immediate addressing encodes the constant operand directly in the instruction's address field (e.g., ADD R1, #5)."
    },
    {
      id: "coa_14",
      topic: "Cache Memory",
      question: "Cache memory bridges the speed gap between CPU and RAM using which type of semiconductor memory?",
      options: ["DRAM", "SRAM", "EEPROM", "Flash"],
      correctIndex: 1,
      explanation: "Cache uses Static RAM (SRAM) built with flip-flops (faster, no refresh needed); main memory uses DRAM (capacitors)."
    },
    {
      id: "coa_15",
      topic: "Cache Write Policy",
      question: "In which cache write policy is main memory updated ONLY when a modified ('dirty') cache block is evicted?",
      options: ["Write-Through", "Write-Back", "Write-Around", "Direct Mapping"],
      correctIndex: 1,
      explanation: "Write-Back writes to cache and sets a dirty bit, updating main memory only on replacement; Write-Through updates both immediately."
    },
    {
      id: "coa_16",
      topic: "I/O Transfer",
      question: "Which I/O transfer mode allows high-speed peripherals to transfer blocks directly to RAM without continuous CPU intervention?",
      options: ["Programmed I/O", "Interrupt-Driven I/O", "DMA Transfer", "CPU Polling"],
      correctIndex: 2,
      explanation: "DMA hands bus control to a DMA controller to move bulk data directly between I/O and memory, interrupting the CPU only on completion."
    },
    {
      id: "coa_17",
      topic: "CPU Architecture",
      question: "Which characteristic is typical of a RISC (Reduced Instruction Set Computer) architecture?",
      options: [
        "Variable-length instructions",
        "Load-Store memory architecture",
        "Microprogrammed control unit",
        "Minimal number of registers"
      ],
      correctIndex: 1,
      explanation: "RISC uses fixed-length instructions, hardwired control, a large register file, and Load-Store architecture (ALU ops only on registers)."
    },
    {
      id: "coa_18",
      topic: "Pipelining",
      question: "A branch instruction causing wrong instructions to be prefetched into an instruction pipeline creates a:",
      options: ["Structural hazard", "Data hazard", "Control hazard", "Memory hazard"],
      correctIndex: 2,
      explanation: "Control (branch) hazards occur when the pipeline makes decisions based on branch targets before the branch outcome is resolved."
    },
    {
      id: "coa_19",
      topic: "Locality of Reference",
      question: "Accessing array elements sequentially in a loop primarily exhibits which principle of locality?",
      options: ["Temporal locality", "Spatial locality", "Random locality", "Dynamic locality"],
      correctIndex: 1,
      explanation: "Spatial locality means accessing memory locations physically close to recently accessed addresses; Temporal means reusing the same location soon."
    },
    {
      id: "coa_20",
      topic: "Fundamentals of IT",
      question: "Which component stores the firmware (BIOS/UEFI) responsible for POST during computer boot-up?",
      options: ["RAM", "ROM / Flash", "CPU Cache", "Hard Disk"],
      correctIndex: 1,
      explanation: "BIOS/UEFI firmware resides in non-volatile ROM/EEPROM/Flash memory on the motherboard."
    }
  ],

  secB_web: [
    {
      id: "web_01",
      topic: "HTML & XHTML",
      question: "Which rule is strictly mandatory in XHTML compared to traditional HTML?",
      options: [
        "Tag names must be uppercase",
        "All elements must be closed and lowercase",
        "Attribute values must be unquoted",
        "CSS cannot be linked externally"
      ],
      correctIndex: 1,
      explanation: "XHTML follows XML syntax: tags must be lowercase, properly nested, explicitly closed, and attribute values must be quoted."
    },
    {
      id: "web_02",
      topic: "HTML5",
      question: "Which HTML5 element is specifically intended to define a block of major navigation links?",
      options: ["<section>", "<nav>", "<aside>", "<article>"],
      correctIndex: 1,
      explanation: "The semantic <nav> element represents a section of a page whose purpose is to provide navigation links."
    },
    {
      id: "web_03",
      topic: "CSS Specificity",
      question: "Which CSS selector carries the highest specificity weight among the following?",
      options: ["Element selector (p)", "Class selector (.box)", "ID selector (#header)", "Universal selector (*)"],
      correctIndex: 2,
      explanation: "CSS specificity order: Inline style (1000) > ID (100) > Class/Pseudo-class (10) > Element (1) > Universal (0)."
    },
    {
      id: "web_04",
      topic: "CSS Box Model",
      question: "Moving from innermost to outermost, what is the correct order of the CSS Box Model layers?",
      options: [
        "Content → Border → Padding → Margin",
        "Content → Padding → Border → Margin",
        "Margin → Border → Padding → Content",
        "Padding → Content → Border → Margin"
      ],
      correctIndex: 1,
      explanation: "The CSS box model wraps outward as: Content → Padding → Border → Margin."
    },
    {
      id: "web_05",
      topic: "JavaScript",
      question: "What does the expression `\"5\" === 5` evaluate to in JavaScript?",
      options: ["true", "false", "undefined", "NaN"],
      correctIndex: 1,
      explanation: "The strict equality operator (===) checks both value and data type without coercion; string !== number → false."
    },
    {
      id: "web_06",
      topic: "JS Event Model",
      question: "In the W3C DOM Event Model, when an event travels from the target element upward to the `window` object, it is called:",
      options: ["Event Capturing", "Event Bubbling", "Event Hoisting", "Event Polling"],
      correctIndex: 1,
      explanation: "Capturing travels top-down (window → target); Bubbling travels bottom-up (target → ancestors → window)."
    },
    {
      id: "web_07",
      topic: "XML Basics",
      question: "Which statement accurately describes a well-formed XML document?",
      options: [
        "Tags are case-insensitive",
        "It must have exactly one root element",
        "It uses only predefined HTML tags",
        "Closing tags are optional"
      ],
      correctIndex: 1,
      explanation: "XML is case-sensitive, supports user-defined tags, requires closing tags, and must contain a single root element."
    },
    {
      id: "web_08",
      topic: "XML & DTD",
      question: "What is the primary purpose of a DTD (Document Type Definition) in XML?",
      options: [
        "Styling XML elements with colors",
        "Defining the legal structure and elements of XML",
        "Encrypting XML payloads over HTTP",
        "Converting XML into binary executables"
      ],
      correctIndex: 1,
      explanation: "A DTD specifies the valid elements, attributes, nesting hierarchy, and entities permitted in an XML document."
    },
    {
      id: "web_09",
      topic: "XML Parsers",
      question: "How does a SAX XML parser differ from a DOM XML parser?",
      options: [
        "SAX loads the entire tree into memory; DOM streams events",
        "SAX is event-driven with low memory; DOM builds an in-memory tree",
        "SAX supports editing XML nodes; DOM is read-only",
        "SAX validates JSON; DOM validates SQL"
      ],
      correctIndex: 1,
      explanation: "SAX (Simple API for XML) parses sequentially via events using minimal RAM (read-only); DOM loads the whole document tree in memory."
    },
    {
      id: "web_10",
      topic: "Web Servers",
      question: "IIS (Internet Information Services) is a web server developed and maintained by:",
      options: ["Apache Foundation", "Oracle", "Microsoft", "Mozilla"],
      correctIndex: 2,
      explanation: "IIS (and its legacy lightweight counterpart PWS) is Microsoft's extensible web server for Windows."
    },
    {
      id: "web_11",
      topic: "HTTP Protocol",
      question: "Which HTTP status code indicates 'Resource Not Found' on the server?",
      options: ["200", "301", "403", "404"],
      correctIndex: 3,
      explanation: "200 = OK, 301 = Moved Permanently, 403 = Forbidden, 404 = Not Found."
    },
    {
      id: "web_12",
      topic: "HTTP Methods",
      question: "Which HTTP request method appends form parameters visibly to the URL query string and is idempotent?",
      options: ["GET", "POST", "PATCH", "CONNECT"],
      correctIndex: 0,
      explanation: "GET passes parameters in the URL query string and should only retrieve data (idempotent); POST sends data in the request body."
    },
    {
      id: "web_13",
      topic: ".NET Architecture",
      question: "In the .NET Framework, languages like C# and VB.NET are first compiled into:",
      options: ["Native x86 code", "Java Bytecode", "MSIL / CIL", "Assembly Macros"],
      correctIndex: 2,
      explanation: ".NET compilers translate source code into Microsoft Intermediate Language (MSIL/CIL), which the CLR JIT-compiles at runtime."
    },
    {
      id: "web_14",
      topic: ".NET Runtime",
      question: "Which component of .NET manages memory garbage collection, type safety, and JIT compilation?",
      options: ["BCL", "CLR", "ADO.NET", "WCF"],
      correctIndex: 1,
      explanation: "The Common Language Runtime (CLR) is the execution engine responsible for GC, exception handling, security, and JIT compilation."
    },
    {
      id: "web_15",
      topic: ".NET Interoperability",
      question: "Which .NET specification defines how data types are declared and managed to allow seamless cross-language interoperability?",
      options: ["CTS", "IIS", "DTD", "DOM"],
      correctIndex: 0,
      explanation: "CTS (Common Type System) standardizes value and reference types across all .NET-compliant languages."
    },
    {
      id: "web_16",
      topic: "ADO.NET",
      question: "Which ADO.NET object provides a disconnected, in-memory cache of database tables stored as XML?",
      options: ["DataReader", "DataSet", "SqlCommand", "SqlConnection"],
      correctIndex: 1,
      explanation: "DataSet works in a disconnected architecture (in-memory tables), whereas DataReader is connected, forward-only, and read-only."
    },
    {
      id: "web_17",
      topic: "ASP.NET",
      question: "Which client-side mechanism in ASP.NET Web Forms preserves page and control property values across postbacks?",
      options: ["ViewState", "SessionState", "ApplicationState", "CacheState"],
      correctIndex: 0,
      explanation: "ViewState stores serialized control values in a hidden __VIEWSTATE form field inside the rendered HTML page."
    },
    {
      id: "web_18",
      topic: "Front-End Tools",
      question: "In Visual Basic / .NET Windows Forms, the coding paradigm where execution flow responds to button clicks and keystrokes is called:",
      options: ["Procedural programming", "Event-driven programming", "Logic programming", "Batch processing"],
      correctIndex: 1,
      explanation: "GUI front-end design tools (VB/.NET) use event-driven programming where handlers trigger on user/system events."
    },
    {
      id: "web_19",
      topic: "Cookies vs Sessions",
      question: "Where is HTTP Session data primarily stored compared to browser Cookies?",
      options: [
        "Session on client; Cookie on server",
        "Session on server; Cookie on client",
        "Both strictly inside CSS files",
        "Both strictly inside DNS cache"
      ],
      correctIndex: 1,
      explanation: "Session variables are stored on the web server (referenced via a session ID), whereas Cookies are stored on the user's browser."
    },
    {
      id: "web_20",
      topic: "XSLT",
      question: "Which technology is used to transform an XML document into HTML or another XML format?",
      options: ["XSLT", "DTD", "SOAP", "AJAX"],
      correctIndex: 0,
      explanation: "XSLT (Extensible Stylesheet Language Transformations) transforms XML trees into HTML, plain text, or other XML schemas."
    }
  ],

  secB_se_cg: [
    {
      id: "secg_01",
      topic: "SDLC Models",
      question: "Which Software Development Life Cycle model explicitly incorporates iterative Risk Analysis in every cycle?",
      options: ["Waterfall Model", "Spiral Model", "V-Model", "Big Bang Model"],
      correctIndex: 1,
      explanation: "Barry Boehm's Spiral Model combines iterative prototyping with systematic risk assessment in every quadrant."
    },
    {
      id: "secg_02",
      topic: "Software Design",
      question: "Good modular software design strives to achieve:",
      options: [
        "Low cohesion and high coupling",
        "High cohesion and low coupling",
        "High cohesion and high coupling",
        "Low cohesion and low coupling"
      ],
      correctIndex: 1,
      explanation: "High cohesion (focused modules) and low coupling (minimal inter-module dependency) maximize maintainability."
    },
    {
      id: "secg_03",
      topic: "Cohesion Types",
      question: "Which type of module cohesion is considered the STRONGEST (most desirable) in software engineering?",
      options: ["Coincidental", "Logical", "Temporal", "Functional"],
      correctIndex: 3,
      explanation: "Functional cohesion (all elements contribute to a single well-defined task) is the strongest; Coincidental is the weakest."
    },
    {
      id: "secg_04",
      topic: "Software Testing",
      question: "Equivalence Partitioning and Boundary Value Analysis are techniques used in:",
      options: ["White-box testing", "Black-box testing", "Static code analysis", "Mutation testing"],
      correctIndex: 1,
      explanation: "Black-box (functional) testing derives test cases from input/output specifications without viewing internal source code."
    },
    {
      id: "secg_05",
      topic: "Software Testing",
      question: "Re-running previously passed test cases after a code fix to ensure no existing functionality broke is called:",
      options: ["Alpha testing", "Smoke testing", "Regression testing", "Stress testing"],
      correctIndex: 2,
      explanation: "Regression testing verifies that recent code modifications have not adversely impacted existing working features."
    },
    {
      id: "secg_06",
      topic: "Software Metrics",
      question: "For a control flow graph with E = 12 edges, N = 10 nodes, and P = 1 connected component, what is McCabe's Cyclomatic Complexity?",
      options: ["2", "4", "6", "8"],
      correctIndex: 1,
      explanation: "V(G) = E − N + 2P = 12 − 10 + 2(1) = 4 linearly independent paths."
    },
    {
      id: "secg_07",
      topic: "Cost Estimation",
      question: "COCOMO (Constructive Cost Model) developed by Barry Boehm is used to estimate:",
      options: ["Network bandwidth", "Software effort and schedule", "Database normalization", "CPU clock speed"],
      correctIndex: 1,
      explanation: "COCOMO estimates development effort (person-months) and schedule based on KLOC (Organic, Semi-detached, Embedded modes)."
    },
    {
      id: "secg_08",
      topic: "Computer Graphics",
      question: "Why is Bresenham's line-drawing algorithm generally faster than the DDA algorithm?",
      options: [
        "It uses only integer arithmetic",
        "It skips pixel plotting altogether",
        "It uses floating-point division",
        "It draws only horizontal lines"
      ],
      correctIndex: 0,
      explanation: "Bresenham's algorithm avoids costly floating-point arithmetic and rounding by using incremental integer decision parameters."
    },
    {
      id: "secg_09",
      topic: "Graphics Clipping",
      question: "The Cohen-Sutherland line clipping algorithm divides the 2D plane into 9 regions using a:",
      options: ["2-bit region code", "4-bit region code", "8-bit region code", "16-bit region code"],
      correctIndex: 1,
      explanation: "Cohen-Sutherland assigns a 4-bit outcode (Top, Bottom, Right, Left — TBRL) to each endpoint."
    },
    {
      id: "secg_10",
      topic: "Polygon Clipping",
      question: "Which algorithm is specifically designed for clipping polygons against a rectangular window?",
      options: ["Bresenham", "Sutherland-Hodgman", "Midpoint Circle", "Flood Fill"],
      correctIndex: 1,
      explanation: "Sutherland-Hodgman clips a polygon sequentially against each of the four window boundary edges."
    },
    {
      id: "secg_11",
      topic: "2D Transformations",
      question: "Why are homogeneous coordinates (3×3 matrices) used in 2D computer graphics transformations?",
      options: [
        "To eliminate rotation matrices",
        "To represent translation as matrix multiplication",
        "To compress bitmap images",
        "To reduce color depth to 8 bits"
      ],
      correctIndex: 1,
      explanation: "In Cartesian coordinates, translation is addition while rotation/scaling are multiplication; homogeneous coordinates unify all three as 3×3 matrix multiplications."
    },
    {
      id: "secg_12",
      topic: "Curves & Surfaces",
      question: "Bezier curves in computer graphics are mathematically defined using which class of blending polynomials?",
      options: ["Lagrange polynomials", "Bernstein polynomials", "Chebyshev polynomials", "Taylor polynomials"],
      correctIndex: 1,
      explanation: "Bezier curves blend control points using Bernstein basis polynomials."
    },
    {
      id: "secg_13",
      topic: "Solid Modeling",
      question: "Combining primitive 3D shapes (cubes, spheres, cylinders) via Boolean operations (Union, Intersection, Difference) is called:",
      options: ["Wireframe modeling", "Solid CSG modeling", "Ray tracing", "Gouraud shading"],
      correctIndex: 1,
      explanation: "Constructive Solid Geometry (CSG) constructs complex 3D solids using Boolean set operations on primitives."
    },
    {
      id: "secg_14",
      topic: "Multimedia",
      question: "Which of the following image file formats uses LOSSLESS compression?",
      options: ["JPEG", "PNG", "MPEG", "MP3"],
      correctIndex: 1,
      explanation: "PNG uses lossless DEFLATE compression; JPEG (images), MPEG (video), and MP3 (audio) are lossy formats."
    },
    {
      id: "secg_15",
      topic: "Graphics Hardware",
      question: "In a Raster Scan display system, the dedicated memory area that holds pixel intensity values for the entire screen is called the:",
      options: ["Lookup table", "Frame buffer", "Vector register", "Z-axis stack"],
      correctIndex: 1,
      explanation: "The Frame Buffer (refresh buffer) stores the bitmap of pixel values scanned onto the display screen."
    },
    {
      id: "secg_16",
      topic: "Mobile Computing",
      question: "In cellular mobile networks, the process of transferring an active call from one base station to another as the user moves is called:",
      options: ["Multiplexing", "Handover (Handoff)", "Modulation", "Roaming"],
      correctIndex: 1,
      explanation: "Handover (Handoff) transfers an ongoing voice/data session across cell boundaries without dropping the call."
    },
    {
      id: "secg_17",
      topic: "Mobile Computing",
      question: "In GSM cellular architecture, which database permanently stores subscriber profile and authentication data?",
      options: ["VLR", "HLR", "MSC", "BSC"],
      correctIndex: 1,
      explanation: "HLR (Home Location Register) permanently stores subscriber details; VLR (Visitor Location Register) temporarily tracks roaming users."
    },
    {
      id: "secg_18",
      topic: "Mobile IP",
      question: "In Mobile IP, the temporary IP address assigned to a mobile node while visiting a foreign network is called the:",
      options: ["Home Address", "Care-of-Address (CoA)", "Loopback Address", "Broadcast Address"],
      correctIndex: 1,
      explanation: "The Foreign Agent (or DHCP) provides a Care-of-Address (CoA) to which the Home Agent tunnels packets."
    },
    {
      id: "secg_19",
      topic: "E-Commerce",
      question: "The standardized computer-to-computer exchange of structured business documents (like invoices and purchase orders) is known as:",
      options: ["ERP", "EDI", "CRM", "SEO"],
      correctIndex: 1,
      explanation: "EDI (Electronic Data Interchange) enables automated B2B exchange of standard business documents without human intervention."
    },
    {
      id: "secg_20",
      topic: "E-Commerce Models",
      question: "An online auction platform where individual consumers sell goods directly to other consumers represents which E-Commerce model?",
      options: ["B2B", "B2C", "C2C", "G2B"],
      correctIndex: 2,
      explanation: "Consumer-to-Consumer (C2C) platforms (e.g., OLX, eBay auctions) facilitate direct transactions between individuals."
    }
  ],

  secB_bca_support: [
    {
      id: "bca_01",
      topic: "Financial Accounting",
      question: "According to the Golden Rules of Accounting, 'Debit what comes in, Credit what goes out' applies to which type of account?",
      options: ["Personal Account", "Real Account", "Nominal Account", "Suspense Account"],
      correctIndex: 1,
      explanation: "Real Accounts (tangible/intangible assets like Cash, Machinery) follow: Debit what comes in, Credit what goes out."
    },
    {
      id: "bca_02",
      topic: "Financial Accounting",
      question: "Which fundamental accounting equation always holds true in double-entry bookkeeping?",
      options: [
        "Assets = Liabilities − Capital",
        "Assets = Liabilities + Capital",
        "Capital = Assets + Liabilities",
        "Liabilities = Assets + Capital"
      ],
      correctIndex: 1,
      explanation: "The Balance Sheet equation is Assets = Liabilities + Owner's Equity (Capital)."
    },
    {
      id: "bca_03",
      topic: "Financial Accounting",
      question: "What is the primary purpose of preparing a Trial Balance at the end of an accounting period?",
      options: [
        "Calculate net profit directly",
        "Check arithmetical accuracy of ledger postings",
        "Determine market share price",
        "Record daily cash receipts"
      ],
      correctIndex: 1,
      explanation: "A Trial Balance verifies that total debits equal total credits across all ledger accounts."
    },
    {
      id: "bca_04",
      topic: "Financial Accounting",
      question: "Under Nominal Accounts, salaries paid and rent paid are treated as:",
      options: ["Debited as expenses", "Credited as incomes", "Debited as assets", "Credited as liabilities"],
      correctIndex: 0,
      explanation: "Nominal Account rule: Debit all expenses and losses, Credit all incomes and gains."
    },
    {
      id: "bca_05",
      topic: "Business Economics",
      question: "If a 10% rise in price causes a 20% fall in quantity demanded, the price elasticity of demand is:",
      options: ["Inelastic (0.5)", "Unitary elastic (1.0)", "Elastic (2.0)", "Perfectly inelastic (0)"],
      correctIndex: 2,
      explanation: "|Ed| = %ΔQ / %ΔP = 20% / 10% = 2.0 (> 1, hence Elastic demand)."
    },
    {
      id: "bca_06",
      topic: "Business Economics",
      question: "In which market structure is an individual firm a pure 'price taker' facing a perfectly elastic horizontal demand curve?",
      options: ["Monopoly", "Oligopoly", "Perfect Competition", "Monopolistic Competition"],
      correctIndex: 2,
      explanation: "Under Perfect Competition, many sellers offer homogeneous products, so no single firm can influence market price."
    },
    {
      id: "bca_07",
      topic: "Business Economics",
      question: "Goods whose quantity demanded INCREASES when their price rises (violating the Law of Demand) are known as:",
      options: ["Normal goods", "Substitute goods", "Giffen goods", "Complementary goods"],
      correctIndex: 2,
      explanation: "Giffen goods are rare inferior staples where the negative income effect outweighs the substitution effect."
    },
    {
      id: "bca_08",
      topic: "MIS",
      question: "Which type of information system handles high-volume routine daily business operations such as billing and payroll?",
      options: ["TPS", "DSS", "ESS", "Expert System"],
      correctIndex: 0,
      explanation: "TPS (Transaction Processing System) operates at the operational level recording daily routine transactions."
    },
    {
      id: "bca_09",
      topic: "MIS",
      question: "Which information system is specifically designed to support semi-structured managerial decisions using 'what-if' models?",
      options: ["TPS", "OAS", "DSS", "BIOS"],
      correctIndex: 2,
      explanation: "Decision Support Systems (DSS) combine analytical models and data for interactive semi-structured decision-making."
    },
    {
      id: "bca_10",
      topic: "Knowledge Management",
      question: "Personal expertise, intuition, and unwritten skills held in an employee's mind are categorized as:",
      options: ["Explicit knowledge", "Tacit knowledge", "Procedural metadata", "Static data"],
      correctIndex: 1,
      explanation: "Tacit knowledge is personal and hard to codify; Explicit knowledge is documented in manuals, databases, and reports."
    },
    {
      id: "bca_11",
      topic: "Statistics",
      question: "For a moderately skewed distribution with Mean = 20 and Median = 22, what is the approximate Mode using the empirical relation?",
      options: ["24", "26", "28", "18"],
      correctIndex: 1,
      explanation: "Mode = 3(Median) − 2(Mean) = 3(22) − 2(20) = 66 − 40 = 26."
    },
    {
      id: "bca_12",
      topic: "Statistics",
      question: "For which discrete probability distribution are the Mean and Variance mathematically equal (both equal to λ)?",
      options: ["Binomial distribution", "Poisson distribution", "Normal distribution", "Uniform distribution"],
      correctIndex: 1,
      explanation: "In a Poisson distribution (modeling rare events), Mean = λ and Variance = λ."
    },
    {
      id: "bca_13",
      topic: "Statistics",
      question: "If the variance of a dataset is 49, what is its Standard Deviation?",
      options: ["7", "24.5", "49", "2401"],
      correctIndex: 0,
      explanation: "Standard Deviation is the positive square root of Variance: √49 = 7."
    },
    {
      id: "bca_14",
      topic: "Numerical Techniques",
      question: "What is the iterative formula for finding a root of `f(x) = 0` using the Newton-Raphson method?",
      options: [
        "xₙ₊₁ = xₙ + f(xₙ) / f'(xₙ)",
        "xₙ₊₁ = xₙ − f(xₙ) / f'(xₙ)",
        "xₙ₊₁ = xₙ − f'(xₙ) / f(xₙ)",
        "xₙ₊₁ = (xₙ + f(xₙ)) / 2"
      ],
      correctIndex: 1,
      explanation: "Newton-Raphson uses the tangent approximation: xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ) with quadratic convergence."
    },
    {
      id: "bca_15",
      topic: "Interpolation",
      question: "Which interpolation formula is specifically applicable when the given data points are UNEQUALLY spaced?",
      options: [
        "Newton's Forward formula",
        "Newton's Backward formula",
        "Lagrange's Interpolation formula",
        "Gauss Forward formula"
      ],
      correctIndex: 2,
      explanation: "Lagrange's Interpolation (and Newton's Divided Difference) handles unequally spaced data points; Newton's Forward/Backward require equal intervals."
    },
    {
      id: "bca_16",
      topic: "Numerical Integration",
      question: "Simpson's 1/3 Rule for numerical integration requires the number of subintervals `n` to be:",
      options: ["Any odd integer", "Any even integer", "A multiple of 3", "A prime number"],
      correctIndex: 1,
      explanation: "Simpson's 1/3 rule fits parabolas across pairs of intervals, requiring an even number of subintervals (Simpson's 3/8 requires multiples of 3)."
    },
    {
      id: "bca_17",
      topic: "Basics of Physics",
      question: "Adding a pentavalent impurity (like Phosphorus or Arsenic) to pure Silicon produces which type of semiconductor?",
      options: ["Intrinsic semiconductor", "P-type semiconductor", "N-type semiconductor", "Superconductor"],
      correctIndex: 2,
      explanation: "Pentavalent (Group 15) dopants donate extra free electrons, creating an N-type semiconductor (majority carriers = electrons)."
    },
    {
      id: "bca_18",
      topic: "Basics of Physics",
      question: "Optical fiber cables transmit high-speed light signals over long distances based on which optical phenomenon?",
      options: ["Refraction", "Diffraction", "Total Internal Reflection", "Polarization"],
      correctIndex: 2,
      explanation: "Light stays trapped inside the higher-refractive-index fiber core via Total Internal Reflection (TIR)."
    },
    {
      id: "bca_19",
      topic: "Basics of Physics",
      question: "A P-N junction diode used in a power supply rectifier primarily performs which conversion?",
      options: ["DC to AC", "AC to DC", "Low voltage to high frequency", "Analog to binary"],
      correctIndex: 1,
      explanation: "Because a diode conducts only in forward bias, a rectifier circuit converts Alternating Current (AC) into Direct Current (DC)."
    },
    {
      id: "bca_20",
      topic: "Foundation English",
      question: "In technical and organizational communication, the response sent back by the receiver confirming message comprehension is called:",
      options: ["Encoding", "Channel", "Feedback", "Noise"],
      correctIndex: 2,
      explanation: "Feedback closes the communication loop by letting the sender verify whether the receiver understood the message."
    }
  ],

  secB_pedagogy: [
    {
      id: "ped_01",
      topic: "Childhood & Growing Up",
      question: "According to Jean Piaget, during which stage of cognitive development do children develop 'object permanence'?",
      options: ["Sensorimotor (0–2 yrs)", "Pre-operational (2–7 yrs)", "Concrete Operational (7–11 yrs)", "Formal Operational (11+ yrs)"],
      correctIndex: 0,
      explanation: "Object permanence (understanding objects exist even when out of sight) develops during the Sensorimotor stage."
    },
    {
      id: "ped_02",
      topic: "Learning & Teaching",
      question: "The concept of 'Zone of Proximal Development (ZPD)' and social constructivism was proposed by:",
      options: ["Jean Piaget", "Lev Vygotsky", "B. F. Skinner", "Ivan Pavlov"],
      correctIndex: 1,
      explanation: "Lev Vygotsky defined ZPD as the gap between what a learner can do independently and what they can achieve with guided support (scaffolding)."
    },
    {
      id: "ped_03",
      topic: "Learning & Teaching",
      question: "In Vygotsky's theory, temporary structured assistance given by a teacher to help a student master a coding concept is called:",
      options: ["Conditioning", "Scaffolding", "Assimilation", "Maturation"],
      correctIndex: 1,
      explanation: "Scaffolding provides temporary guidance that is gradually removed as the student becomes independent."
    },
    {
      id: "ped_04",
      topic: "Learning & Teaching",
      question: "Operant Conditioning, which emphasizes reinforcement and punishment to shape behavior, was formulated by:",
      options: ["Ivan Pavlov", "B. F. Skinner", "Albert Bandura", "Howard Gardner"],
      correctIndex: 1,
      explanation: "B. F. Skinner developed Operant Conditioning; Pavlov proposed Classical Conditioning."
    },
    {
      id: "ped_05",
      topic: "Assessment for Learning",
      question: "In Bloom's Revised Taxonomy (2001), which level represents the HIGHEST order of cognitive thinking?",
      options: ["Analyze", "Evaluate", "Apply", "Create"],
      correctIndex: 3,
      explanation: "Revised Bloom's hierarchy from lowest to highest: Remember → Understand → Apply → Analyze → Evaluate → Create."
    },
    {
      id: "ped_06",
      topic: "Assessment for Learning",
      question: "Ongoing quizzes and lab feedback conducted DURING instruction to improve learning are best described as:",
      options: ["Assessment OF learning", "Assessment FOR learning", "Summative grading", "Placement testing"],
      correctIndex: 1,
      explanation: "Formative assessment (Assessment FOR learning) provides real-time feedback to improve instruction; Summative is Assessment OF learning."
    },
    {
      id: "ped_07",
      topic: "Assessment for Learning",
      question: "Which type of test is specifically administered to pinpoint a student's exact conceptual errors before planning remedial teaching?",
      options: ["Achievement test", "Diagnostic test", "Aptitude test", "Norm-referenced test"],
      correctIndex: 1,
      explanation: "Diagnostic testing identifies specific strengths and learning gaps so targeted remedial instruction can follow."
    },
    {
      id: "ped_08",
      topic: "Creating an Inclusive School",
      question: "A specific learning disability that primarily affects reading fluency, decoding, and spelling is:",
      options: ["Dysgraphia", "Dyscalculia", "Dyslexia", "Dyspraxia"],
      correctIndex: 2,
      explanation: "Dyslexia affects reading; Dysgraphia affects writing; Dyscalculia affects math; Dyspraxia affects motor coordination."
    },
    {
      id: "ped_09",
      topic: "Creating an Inclusive School",
      question: "The Rights of Persons with Disabilities (RPwD) Act, 2016 in India recognizes how many specified categories of disabilities?",
      options: ["7", "14", "21", "28"],
      correctIndex: 2,
      explanation: "The RPwD Act 2016 expanded recognized disabilities from 7 (under the 1995 Act) to 21 categories."
    },
    {
      id: "ped_10",
      topic: "Creating an Inclusive School",
      question: "Providing screen readers, captioned tutorials, and flexible assessment formats in a CS lab aligns with which framework?",
      options: [
        "Segregated Education",
        "Universal Design (UDL)",
        "Rote Memorization",
        "Standardized Tracking"
      ],
      correctIndex: 1,
      explanation: "UDL provides multiple means of engagement, representation, and expression so every learner can access the curriculum."
    },
    {
      id: "ped_11",
      topic: "Knowledge & Curriculum",
      question: "The National Education Policy (NEP) 2020 restructures school education from 10+2 into which curricular stage pattern?",
      options: ["5 + 3 + 3 + 4", "5 + 4 + 3 + 3", "6 + 3 + 3 + 2", "4 + 4 + 4 + 3"],
      correctIndex: 0,
      explanation: "NEP 2020 introduces the 5+3+3+4 structure: Foundational (5), Preparatory (3), Middle (3), and Secondary (4)."
    },
    {
      id: "ped_12",
      topic: "Knowledge & Curriculum",
      question: "Under NEP 2020, from which grade is coding and vocational exposure recommended to be introduced in schools?",
      options: ["Class 3", "Class 6", "Class 9", "Class 11"],
      correctIndex: 1,
      explanation: "NEP 2020 recommends introducing coding and computational thinking from the Middle Stage (Class 6 onward)."
    },
    {
      id: "ped_13",
      topic: "Knowledge & Curriculum",
      question: "Which foundational principle guides the National Curriculum Framework (NCF) 2005?",
      options: [
        "Teacher-centered lecturing",
        "Connecting knowledge to life outside school",
        "Strict textbook-only testing",
        "Eliminating practical lab work"
      ],
      correctIndex: 1,
      explanation: "NCF 2005's five guiding principles emphasize constructivism, connecting knowledge to real life, and shifting away from rote methods."
    },
    {
      id: "ped_14",
      topic: "Pedagogy of Computer Science",
      question: "Presenting several working Python loop examples first and guiding students to derive the syntax rule themselves is the:",
      options: ["Deductive method", "Inductive method", "Lecture method", "Drill method"],
      correctIndex: 1,
      explanation: "Inductive teaching moves from specific examples to a general rule; Deductive moves from general rule to examples."
    },
    {
      id: "ped_15",
      topic: "Pedagogy of Computer Science",
      question: "In the TPACK framework for effective ICT-integrated teaching, what does the acronym stand for?",
      options: [
        "Technical Programming and Coding Knowledge",
        "Technological Pedagogical and Content Knowledge",
        "Teaching Practice and Curriculum Knowledge",
        "Theoretical Pedagogy and Assessment Knowledge"
      ],
      correctIndex: 1,
      explanation: "TPACK (Mishra & Koehler) integrates Technology, Pedagogy, and Content knowledge for meaningful classroom ICT use."
    },
    {
      id: "ped_16",
      topic: "Pedagogy of Computer Science",
      question: "Which national digital platform launched by NCERT / Ministry of Education provides e-content and QR-linked textbooks for teachers and students?",
      options: ["DIKSHA", "UMANG", "BHIM", "FASTag"],
      correctIndex: 0,
      explanation: "DIKSHA (Digital Infrastructure for Knowledge Sharing) is India's national platform for school education e-resources."
    },
    {
      id: "ped_17",
      topic: "Understanding Discipline & Subjects",
      question: "What distinguishes an 'interdisciplinary' curriculum approach from a strict single-discipline approach?",
      options: [
        "Teaching only one isolated textbook",
        "Integrating concepts across multiple subjects",
        "Replacing theory entirely with sports",
        "Eliminating student assessments"
      ],
      correctIndex: 1,
      explanation: "Interdisciplinary learning connects knowledge across subjects (e.g., applying Python data analysis to Geography/Science datasets)."
    },
    {
      id: "ped_18",
      topic: "Language Across the Curriculum",
      question: "What is the core idea of 'Language Across the Curriculum (LAC)' in a Computer Science classroom?",
      options: [
        "Only language teachers should correct communication",
        "Reading, writing, and vocabulary are built in every subject",
        "Technical terms should never be explained",
        "Programming should be taught without documentation"
      ],
      correctIndex: 1,
      explanation: "LAC holds that language comprehension and precise expression are integral to learning every discipline, including CS."
    },
    {
      id: "ped_19",
      topic: "Gender, School & Society",
      question: "In educational sociology, 'Gender' is best understood as a _____ construct, whereas 'Sex' is a _____ attribute.",
      options: [
        "biological, social",
        "social, biological",
        "genetic, legal",
        "economic, hereditary"
      ],
      correctIndex: 1,
      explanation: "Sex refers to biological differences, while Gender refers to socially constructed roles, behaviors, and expectations."
    },
    {
      id: "ped_20",
      topic: "Drama & Art in Education",
      question: "How does integrating role-play or visual storytelling (e.g., students acting out TCP packet routing) benefit a Computer Science class?",
      options: [
        "It replaces all written examinations",
        "It builds experiential understanding of abstract concepts",
        "It eliminates the need for computers",
        "It slows down syllabus coverage without benefit"
      ],
      correctIndex: 1,
      explanation: "Drama and Art in Education foster experiential learning, creativity, empathy, and deeper visualization of abstract processes."
    }
  ]
};
