// CGPDTM Dwarka - Networking & Cybersecurity Interview Question Bank & Data
// Office of Controller General of Patents, Designs and Trade Marks (Boudhik Sampada Bhawan, Dwarka Sec 14, New Delhi)
// Tailored for Network Support / IT Infrastructure / Security Trainee Interview

const cgpdtmModules = {
  // =========================================================================
  // 1. NETWORKING FUNDAMENTALS (10 Core Questions)
  // =========================================================================
  networking_core: [
    {
      id: "cg_net_01",
      topic: "OSI Reference Model",
      priority: "Must Know",
      question: "Explain the 7 layers of the OSI model and why it is still used in practical troubleshooting.",
      spokenAnswer: "The OSI model is a 7-layer reference framework used to standardize network communications and isolate faults systematically from the bottom up.\n\nThe layers are:\n1. Physical: Raw bitstream transmission over cables/fiber/wireless (Hubs, cables, RJ-45).\n2. Data Link: Node-to-node frame delivery using MAC addresses and error detection (Switches, NICs, VLANs).\n3. Network: Logical addressing and routing of packets across networks (Routers, IPv4/IPv6, ICMP).\n4. Transport: End-to-end communication, reliability, and flow control (TCP segments, UDP datagrams, port numbers).\n5. Session: Establishes, manages, and terminates sessions between applications (RPC, NetBIOS).\n6. Presentation: Data translation, formatting, encryption, and compression (SSL/TLS, ASCII, JPEG).\n7. Application: User-facing network protocols and interfaces (HTTP/HTTPS, DNS, DHCP, SSH, FTP).\n\nIn troubleshooting, it allows a structured approach: we verify physical link first (Layer 1), then IP & gateway (Layer 3), then port/service reachability (Layer 4), and finally application settings (Layer 7).",
      keywords: ["Physical, Data Link, Network, Transport, Session, Presentation, Application", "MAC addresses at L2, IP packets at L3, Ports at L4", "Bottom-up troubleshooting methodology", "Isolation of network faults"],
      trapFollowUp: "Interviewer Trap: 'At which layer does a standard switch work versus a router versus a firewall?' Answer: Standard switch = Layer 2 (Data Link); Router = Layer 3 (Network); Stateful/Next-Gen Firewall = Layer 3, 4, up to Layer 7 (Application)."
    },
    {
      id: "cg_net_02",
      topic: "OSI vs TCP/IP Model",
      priority: "Must Know",
      question: "What is the difference between the OSI model and the TCP/IP model?",
      spokenAnswer: "The OSI model is a 7-layer theoretical reference architecture, whereas the TCP/IP model is a practical 4-layer (or 5-layer) implementation that powers the internet today.\n\nThe mapping is:\n• OSI Application, Presentation, and Session layers combine into the TCP/IP Application Layer (HTTP, DNS, SSH).\n• OSI Transport layer maps directly to the TCP/IP Transport Layer (TCP, UDP).\n• OSI Network layer corresponds to the TCP/IP Internet Layer (IP, ICMP, ARP).\n• OSI Data Link and Physical layers correspond to the TCP/IP Network Access (or Link) Layer (Ethernet, Wi-Fi).\n\nOSI provides a strict conceptual boundary, while TCP/IP was built around real-world protocols where boundaries are more practical and protocol-centric.",
      keywords: ["4 Layers: Application, Transport, Internet, Network Access", "OSI is theoretical/conceptual, TCP/IP is practical/protocol-driven", "Upper 3 OSI layers collapsed into Application layer"],
      trapFollowUp: "Follow-up: 'Which layer does ICMP (ping) belong to?' Answer: Internet Layer in TCP/IP (Layer 3 Network in OSI), encapsulated directly inside IP packets."
    },
    {
      id: "cg_net_03",
      topic: "TCP vs UDP",
      priority: "High Yield",
      question: "Compare TCP and UDP in detail. How does the 3-Way Handshake work, and when is each used?",
      spokenAnswer: "TCP (Transmission Control Protocol) is a connection-oriented, reliable protocol. It guarantees delivery, maintains packet order through sequence numbers, and provides flow/congestion control. Before data transfer, it performs a 3-Way Handshake:\n1. Client sends SYN (Synchronize sequence number).\n2. Server responds with SYN-ACK (Synchronize + Acknowledge).\n3. Client sends ACK (Acknowledge) — connection is ESTABLISHED.\n\nUDP (User Datagram Protocol) is connectionless, lightweight, and 'fire-and-forget'. It has minimal header overhead (8 bytes vs 20+ bytes in TCP) and does not guarantee delivery, order, or retransmissions.\n\nUse cases:\n• TCP is used where data integrity is critical: Web browsing (HTTP/HTTPS), file transfer (FTP/SFTP), remote access (SSH), email (SMTP).\n• UDP is used where speed and low latency matter more than 100% reliability: DNS queries, DHCP, VoIP calls, video streaming, and NTP.",
      keywords: ["Connection-oriented vs Connectionless", "3-Way Handshake: SYN -> SYN-ACK -> ACK", "Sequence numbers, Acknowledgment, Windowing, Retransmission", "8-byte UDP header vs 20-60 byte TCP header", "Reliability vs Low Latency"],
      trapFollowUp: "Interviewer Trap: 'Does DNS use TCP or UDP?' Answer: DNS primarily uses UDP port 53 for standard queries (<512 bytes) for speed, but uses TCP port 53 for Zone Transfers between DNS servers and responses exceeding 512 bytes (EDNS0)."
    },
    {
      id: "cg_net_04",
      topic: "Router vs Switch vs Hub",
      priority: "Core Fundamental",
      question: "What is the difference between a Router, a Switch, and a Hub in terms of collision and broadcast domains?",
      spokenAnswer: "A Hub is a Layer 1 physical device that blindly broadcasts incoming signals to all ports. All ports share a single collision domain and a single broadcast domain, causing collisions and network congestion.\n\nA Switch is a Layer 2 Data Link device. It inspects incoming Ethernet frames, learns MAC addresses, and stores them in a MAC/CAM table to forward unicast frames directly to the intended destination port. Every port on a switch is its own separate Collision Domain, but by default all ports belong to one single Broadcast Domain.\n\nA Router is a Layer 3 Network device. It inspects IP packet headers and forwards traffic between different logical IP subnets using routing tables. A router breaks both collision domains AND broadcast domains — broadcast frames do not pass through a router by default.",
      keywords: ["Hub: 1 collision domain, 1 broadcast domain (Layer 1)", "Switch: Per-port collision domain, 1 broadcast domain (Layer 2)", "Router: Separates broadcast domains and collision domains (Layer 3)", "MAC address table / CAM table"],
      trapFollowUp: "Follow-up: 'What is a Layer 3 Switch?' Answer: A switch that has hardware-based (ASIC) routing capabilities, allowing high-speed inter-VLAN routing inside a LAN without needing an external router."
    },
    {
      id: "cg_net_05",
      topic: "MAC Address vs IP Address",
      priority: "Core Fundamental",
      question: "What is a MAC address, how is it structured, and how does it differ from an IP address?",
      spokenAnswer: "A MAC (Media Access Control) address is a permanent physical hardware identifier burned into a device's Network Interface Card (NIC) at Layer 2. It is 48 bits (6 bytes) long, represented in hexadecimal (e.g., `00:1A:2B:3C:4D:5E`).\n• The first 24 bits represent the OUI (Organizationally Unique Identifier) identifying the manufacturer (Cisco, Intel, Realtek).\n• The last 24 bits represent the unique device serial number assigned by the vendor.\n\nKey differences from an IP address:\n1. Scope: MAC addresses are only used for local delivery on the same physical link/LAN. Once a packet crosses a router, the destination MAC address changes to the next hop's MAC, but the source and destination IP addresses remain unchanged.\n2. Hierarchy: MAC addresses are flat and non-hierarchical, whereas IP addresses are logical and hierarchical (Network ID + Host ID) to enable global internet routing.",
      keywords: ["48-bit (6-octet) Hexadecimal address", "OUI (first 24 bits) + Vendor serial (last 24 bits)", "Layer 2 local link scope vs Layer 3 end-to-end logical routing", "MAC changes hop-by-hop; IP remains constant"],
      trapFollowUp: "Follow-up: 'How does a PC find the MAC address of another PC on the same LAN?' Answer: Through ARP (Address Resolution Protocol) — it sends an ARP broadcast: 'Who has IP X.X.X.X? Tell my IP'."
    },
    {
      id: "cg_net_06",
      topic: "VLANs (Virtual Local Area Networks)",
      priority: "Must Know for Office LAN",
      question: "What is a VLAN? Why is it implemented in an organization like CGPDTM, and what is the difference between Access and Trunk ports?",
      spokenAnswer: "A VLAN (Virtual LAN) is a logical grouping of network devices within the same physical switch infrastructure that creates separate broadcast domains regardless of physical location.\n\nWhy CGPDTM uses VLANs:\n1. Security & Segmentation: Isolates sensitive patent examination databases from general staff computers, guest Wi-Fi, and public kiosks.\n2. Traffic Optimization: Restricts broadcast storms and multicast traffic to its specific VLAN, preserving bandwidth.\n3. Administration: Facilitates role-based access control and subnet management without physical recabling.\n\nAccess Port vs Trunk Port:\n• Access Port: Carries traffic for only one single VLAN. Used to connect end-user devices like workstations, IP phones, and printers. Traffic on access ports is untagged.\n• Trunk Port: Carries traffic for multiple VLANs simultaneously over a single link (e.g., between switch-to-switch or switch-to-router). It uses the IEEE 802.1Q standard to insert a 4-byte VLAN tag into the Ethernet frame header.",
      keywords: ["Logical broadcast domain segmentation", "IEEE 802.1Q tagging", "Access Port (single untagged VLAN for endpoints)", "Trunk Port (multiple tagged VLANs for inter-switch links)", "Security isolation and broadcast containment"],
      trapFollowUp: "Follow-up: 'If PC 1 is on VLAN 10 and PC 2 is on VLAN 20 on the same switch, can they communicate directly?' Answer: No, not without a Layer 3 device (Router or L3 Switch) performing Inter-VLAN Routing."
    },
    {
      id: "cg_net_07",
      topic: "Subnet Mask & CIDR",
      priority: "High Yield",
      question: "What is a subnet mask, what is CIDR notation, and how do you calculate usable host addresses in a /24 or /26 network?",
      spokenAnswer: "A subnet mask is a 32-bit binary number that divides an IPv4 address into two portions: the Network portion (consecutive 1s) and the Host portion (consecutive 0s).\n\nCIDR (Classless Inter-Domain Routing) represents the subnet mask by counting the number of masked 1-bits with a slash (e.g., `/24`).\n\nHow to calculate usable hosts:\n• Total addresses in a subnet = 2^H (where H is the number of host bits, 32 - prefix).\n• Usable hosts = 2^H - 2 (subtracting 2: one for the Network ID where all host bits are 0, and one for the Directed Broadcast address where all host bits are 1).\n\nExamples:\n• For `/24` (255.255.255.0): H = 32 - 24 = 8 bits. Total = 2^8 = 256. Usable hosts = 256 - 2 = 254 hosts.\n• For `/26` (255.255.255.192): H = 32 - 26 = 6 bits. Total = 2^6 = 64. Usable hosts = 64 - 2 = 62 hosts.",
      keywords: ["Network bits vs Host bits", "2^H - 2 formula", "Subtract Network Address (all 0s) and Broadcast Address (all 1s)", "CIDR prefix notation (/24 = 254 hosts, /26 = 62 hosts, /30 = 2 hosts for point-to-point)"],
      trapFollowUp: "Follow-up: 'What subnet mask would you use for a point-to-point connection between two routers?' Answer: `/30` (255.255.255.252) which provides 4 total addresses and exactly 2 usable host addresses."
    },
    {
      id: "cg_net_08",
      topic: "Default Gateway",
      priority: "Must Know",
      question: "What is a Default Gateway? What happens if a workstation's gateway is missing or misconfigured?",
      spokenAnswer: "A Default Gateway is the router interface IP address within a local subnet that a host uses to forward packets destined for any IP address outside its own local subnet.\n\nWhen a workstation wants to send a packet:\n1. It compares the destination IP against its own IP using its subnet mask.\n2. If the destination is on the same local subnet, it delivers directly via Layer 2 ARP.\n3. If the destination is on a remote subnet or the internet, it sends the packet to the Default Gateway's MAC address.\n\nIf the Default Gateway is missing or incorrect:\n• The workstation CAN still communicate with other computers, printers, and servers on the SAME local LAN.\n• However, it CANNOT reach any outside network, internal portals on different VLANs, or the internet.",
      keywords: ["Router interface IP on the local subnet", "Next-hop forwarder for remote networks", "Same-subnet traffic works without gateway; cross-subnet/internet fails without gateway"],
      trapFollowUp: "Scenario follow-up: 'A user can access office printers on 192.168.1.50, but cannot open Google or the corporate portal on 10.10.2.1. What is the prime suspect?' Answer: Misconfigured or unreachable Default Gateway!"
    },
    {
      id: "cg_net_09",
      topic: "LAN vs WAN vs MAN",
      priority: "Fundamental",
      question: "Distinguish between LAN, MAN, and WAN with practical examples in a government organization.",
      spokenAnswer: "• LAN (Local Area Network): High-speed, privately-owned network covering a limited geographical area, such as the Boudhik Sampada Bhawan building in Dwarka. Connects workstations, printers, and local file servers using Ethernet cables and Wi-Fi.\n• MAN (Metropolitan Area Network): Interconnects multiple offices across a city (e.g., connecting Dwarka office with other Delhi ministry offices across New Delhi via dedicated leased lines or optical rings).\n• WAN (Wide Area Network): Connects geographically dispersed networks across states or countries (e.g., connecting CGPDTM Dwarka headquarters with regional Patent Offices in Mumbai, Chennai, and Kolkata, often over government WAN links like NICNET or secure MPLS/VPN tunnels).\n\nKey differences are geographical span, ownership of cabling (private LAN vs telecom/leased provider WAN), latency, and bandwidth.",
      keywords: ["LAN (single building/office, Ethernet/Wi-Fi, high speed)", "MAN (city-scale optical ring/leased)", "WAN (inter-city/inter-branch, MPLS/VPN, NICNET)", "Owned infrastructure vs Telecom provider circuits"],
      trapFollowUp: "Follow-up: 'What network technology connects branch offices securely across the public internet?' Answer: Site-to-Site IPsec VPN Tunnels."
    },
    {
      id: "cg_net_10",
      topic: "MTU and Packet Fragmentation",
      priority: "Technical Edge",
      question: "What is MTU (Maximum Transmission Unit) and what is the consequence of mismatched MTU sizes?",
      spokenAnswer: "MTU (Maximum Transmission Unit) is the largest size (in bytes) of a protocol data unit that a network layer can pass forwards over a physical link without fragmentation. For standard Ethernet, the default MTU is 1500 bytes.\n\nWhen a packet exceeds a link's MTU:\n• If the 'Don't Fragment' (DF) bit is NOT set: The router fragments the packet into smaller pieces, which increases CPU overhead and latency.\n• If the 'Don't Fragment' (DF) bit IS set: The router drops the packet and sends back an ICMP 'Fragmentation Needed' message (Path MTU Discovery).\n\nMismatched MTUs (especially over VPN tunnels like IPsec, where VPN encryption headers add 50-70 bytes) cause 'black hole' connections: ping works because small packets pass, but large web pages, portal logins, and SSH sessions freeze because packets are silently dropped.",
      keywords: ["Default Ethernet MTU = 1500 bytes", "Don't Fragment (DF) flag in IP header", "Path MTU Discovery (PMTUD)", "VPN tunnel header overhead causing black hole connections"],
      trapFollowUp: "Follow-up: 'Why would ping with 32 bytes work over a VPN, but a file transfer freezes?' Answer: MTU mismatch — the small ping packets fit under the MTU, but the 1500-byte data packets exceed the VPN MTU and are dropped."
    }
  ],

  // =========================================================================
  // 2. IP ADDRESSING, SERVICES & PORT NUMBERS (10 Questions)
  // =========================================================================
  ip_services_ports: [
    {
      id: "cg_ip_01",
      topic: "Private IP Ranges (RFC 1918)",
      priority: "Must Know",
      question: "What are the RFC 1918 Private IPv4 address ranges? Why are they used, and can they be routed over the public internet?",
      spokenAnswer: "RFC 1918 reserves three private address spaces for internal networks:\n1. Class A: `10.0.0.0` to `10.255.255.255` (`10.0.0.0/8`) — 16.7 million addresses.\n2. Class B: `172.16.0.0` to `172.31.255.255` (`172.16.0.0/12`) — 16 contiguous /16 blocks (approx 1 million addresses).\n3. Class C: `192.168.0.0` to `192.168.255.255` (`192.168.0.0/16`) — 256 contiguous /24 blocks (approx 65,536 addresses).\n\nWhy they are used:\n• Conserves global public IPv4 addresses.\n• Provides internal security, as private addresses cannot be routed directly over the public internet.\n\nInternet Service Provider (ISP) and public core routers are configured to drop any packets with RFC 1918 source or destination addresses. To access the internet, internal private IPs must be translated to a public IP using NAT (Network Address Translation).",
      keywords: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "Non-routable on the public internet", "Requires NAT to reach internet", "RFC 1918"],
      trapFollowUp: "Interviewer Trap: 'Is 172.32.0.1 a private IP?' Answer: NO! Class B private range stops at 172.31.255.255. 172.32.0.1 is a public IP address!"
    },
    {
      id: "cg_ip_02",
      topic: "APIPA (169.254.x.x)",
      priority: "Must Know Diagnostic",
      question: "What is an APIPA address, what is its range, and what does it tell you when you see it on a workstation?",
      spokenAnswer: "APIPA stands for Automatic Private IP Addressing. Its designated IPv4 range is `169.254.0.1` to `169.254.255.254` with a `/16` subnet mask (`255.255.0.0`).\n\nWhen you see a `169.254.x.x` address on a client workstation:\n• It means the workstation is configured to obtain an IP automatically via DHCP, but it DID NOT receive a response from any DHCP server.\n• The operating system (Windows/macOS) assigned itself an APIPA address as a fallback.\n\nDiagnostic conclusion: The workstation has a link-layer connection, but cannot reach the DHCP server. Immediate checks: Is the Ethernet cable connected to the right switch port/VLAN? Is the DHCP server down or has the DHCP scope exhausted its pool of IP addresses? Is there an IP helper address missing on the router?",
      keywords: ["Automatic Private IP Addressing", "Range: 169.254.0.0/16", "Indicates DHCP failure / no DHCP response", "Cannot route to internet or default gateway"],
      trapFollowUp: "Quick Follow-up: 'Can two PCs with APIPA addresses on the same switch ping each other?' Answer: Yes! Because they share the same 169.254.0.0/16 broadcast domain, local Layer 2 ARP and ICMP communication will work."
    },
    {
      id: "cg_ip_03",
      topic: "DHCP & The DORA Process",
      priority: "Must Know",
      question: "Explain the complete DHCP DORA process and port numbers. What is a DHCP Lease?",
      spokenAnswer: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to client devices.\n\nIt works via the 4-step DORA process:\n1. D - Discover: Client broadcasts an unconfigured `DHCPDISCOVER` packet (Source: `0.0.0.0:68`, Dest: `255.255.255.255:67`).\n2. O - Offer: The DHCP server responds with a `DHCPOFFER` proposing an available IP address, lease time, and server identifier.\n3. R - Request: Client broadcasts a `DHCPREQUEST` confirming it accepts the offered IP from that specific server.\n4. A - Acknowledge: The DHCP server sends a `DHCPACK` committing the IP lease and supplying network options (Gateway, DNS).\n\nPorts used: UDP Port 67 (Server) and UDP Port 68 (Client).\n\nA DHCP Lease is the allotted duration a client can use the assigned IP. At 50% of the lease time (T1 timer), the client attempts unicast renewal with the DHCP server.",
      keywords: ["DORA: Discover, Offer, Request, Acknowledge", "UDP Port 67 (Server) and UDP Port 68 (Client)", "Broadcasts for Discover & Request", "Lease duration & 50% T1 renewal"],
      trapFollowUp: "Interviewer Trap: 'What if the client and DHCP server are on different VLANs?' Answer: Routers do not forward broadcasts. We must configure a 'DHCP Relay Agent' (or `ip helper-address` on Cisco) to convert the client broadcast into a unicast packet sent directly to the DHCP server."
    },
    {
      id: "cg_ip_04",
      topic: "DNS Resolution Flow",
      priority: "Must Know",
      question: "Explain step-by-step what happens when a user types 'https://ipindia.gov.in' into a browser. How does DNS resolution work?",
      spokenAnswer: "The step-by-step process:\n1. Browser Cache & OS Cache: The browser checks its local DNS cache, then the OS DNS resolver cache, and the local `hosts` file.\n2. Query to Local DNS Resolver: If not cached, the client queries its configured local DNS server (e.g., office DNS server or ISP resolver).\n3. Iterative Resolution Hierarchy:\n   • The local resolver queries a Root Name Server (`.`). The root server directs it to the Top-Level Domain (TLD) server for `.gov.in` / `.in`.\n   • The resolver queries the TLD Server, which returns the Authoritative Name Server for `ipindia.gov.in`.\n   • The resolver queries the Authoritative Name Server, which returns the 'A' record (e.g., `164.100.x.x`).\n4. Caching & Client Response: The local resolver caches the record with its TTL (Time to Live) and returns the IP to the client.\n5. TCP Connection: Browser initiates a 3-way handshake to the server IP on TCP Port 443.\n6. TLS Handshake: Client and server negotiate TLS version, cipher suites, verify the SSL certificate, and establish encrypted communication.\n7. HTTP GET: Browser sends `GET /` and renders the received webpage.",
      keywords: ["Browser cache -> OS cache -> Local DNS Resolver", "Root Server -> TLD Server -> Authoritative Server", "A record resolution", "TCP 3-way handshake on Port 443 -> TLS handshake"],
      trapFollowUp: "Follow-up: 'What command clears the local DNS cache in Windows?' Answer: `ipconfig /flushdns`."
    },
    {
      id: "cg_ip_05",
      topic: "DNS Record Types",
      priority: "High Yield",
      question: "What are the common DNS record types and what are their functions?",
      spokenAnswer: "The fundamental DNS records are:\n• A Record: Maps a hostname to an IPv4 address (e.g., `portal.ipindia.gov.in` -> `164.100.1.10`).\n• AAAA Record: Maps a hostname to a 128-bit IPv6 address.\n• CNAME (Canonical Name): An alias that points one domain name to another domain name (e.g., `www.ipindia.gov.in` -> `ipindia.gov.in`).\n• MX (Mail Exchange): Specifies the mail servers responsible for accepting incoming email for a domain, with priority values.\n• PTR (Pointer Record): Used for Reverse DNS lookup — resolves an IP address back to its associated hostname (located in `in-addr.arpa`).\n• NS (Name Server): Delegating authority by identifying which authoritative name servers hold the DNS records for the domain.\n• TXT Record: Holds arbitrary text, heavily used for email security: SPF (Sender Policy Framework), DKIM, and DMARC to combat phishing and spoofing.",
      keywords: ["A (IPv4) vs AAAA (IPv6)", "CNAME (Alias)", "MX (Email server with priority)", "PTR (Reverse lookup)", "TXT (SPF/DKIM/DMARC anti-spoofing)"],
      trapFollowUp: "Follow-up: 'Can you create a CNAME record pointing to an IP address?' Answer: No! A CNAME record must point to another canonical domain name, never directly to an IP (an A record is used for IP mapping)."
    },
    {
      id: "cg_ip_06",
      topic: "NAT (Network Address Translation)",
      priority: "Must Know",
      question: "What is NAT? Differentiate between Static NAT, Dynamic NAT, and PAT (Port Address Translation).",
      spokenAnswer: "NAT (Network Address Translation) is a method of modifying network address information in IP packet headers while in transit across a traffic routing device. It allows private RFC 1918 internal addresses to communicate over the public internet.\n\nThree main types:\n1. Static NAT: A one-to-one mapping between a private IP and a designated public IP. Commonly used for internal servers (like an internal web server) that need to be consistently accessible from the outside.\n2. Dynamic NAT: A many-to-many mapping from a pool of registered public IP addresses. Internal hosts obtain a public IP from the pool on a first-come, first-served basis while active.\n3. PAT (Port Address Translation / NAT Overload): The most widely used type in enterprise and home networks. It maps multiple internal private IP addresses to a SINGLE public IP address by tracking distinct source port numbers for each session.",
      keywords: ["Static NAT (1:1 mapping for servers)", "Dynamic NAT (Pool of public IPs)", "PAT / NAT Overload (Many private IPs to 1 public IP using unique source ports)", "IPv4 address conservation"],
      trapFollowUp: "Follow-up: 'How does a router know which internal computer gets which reply packet under PAT?' Answer: It maintains a NAT Translation Table mapping `Internal IP + Internal Port` to `Public IP + Translated External Port`."
    },
    {
      id: "cg_ip_07",
      topic: "ARP (Address Resolution Protocol)",
      priority: "Core Fundamental",
      question: "How does ARP work, what is the ARP cache, and what is ARP Spoofing / Poisoning?",
      spokenAnswer: "ARP (Address Resolution Protocol) resolves a known Layer 3 logical IP address to a physical Layer 2 MAC address on the same local broadcast domain.\n\nHow it works:\n1. PC A wants to send data to PC B (on the same subnet). It checks its local ARP Cache (`arp -a`).\n2. If not found, PC A broadcasts an ARP Request: 'Who has 192.168.1.50? Tell 192.168.1.10' (Destination MAC: `FF:FF:FF:FF:FF:FF`).\n3. PC B recognizes its own IP and unicasts an ARP Reply back to PC A with its MAC address.\n4. PC A stores this mapping in its ARP Cache with a timer to avoid repeated broadcasts.\n\nARP Spoofing / Poisoning:\nARP has no built-in authentication. An attacker can send forged, unsolicited ARP replies to poison the ARP cache of victims, associating the attacker's MAC address with the Default Gateway's IP. This enables Man-in-the-Middle (MitM) attacks, packet eavesdropping, or denial of service.",
      keywords: ["Resolves IP to MAC address", "Broadcast request (FF:FF:FF:FF:FF:FF) -> Unicast reply", "ARP Cache (arp -a)", "ARP Spoofing/Poisoning (MitM attack)"],
      trapFollowUp: "Follow-up: 'How do enterprise network switches mitigate ARP Poisoning?' Answer: Dynamic ARP Inspection (DAI), which validates ARP packets against the switch's trusted DHCP Snooping binding database."
    },
    {
      id: "cg_ip_08",
      topic: "Top 12 Critical Port Numbers",
      priority: "Must Know Rapid Recall",
      question: "State the default port numbers and transport protocol for: HTTP, HTTPS, DNS, DHCP, SSH, Telnet, FTP, SMTP, RDP.",
      spokenAnswer: "Rapid recall of essential ports:\n• HTTP: Port 80 (TCP) — unencrypted web traffic\n• HTTPS: Port 443 (TCP) — encrypted web traffic (TLS/SSL)\n• DNS: Port 53 (UDP for queries; TCP for zone transfers)\n• DHCP: Port 67 (Server UDP), Port 68 (Client UDP)\n• SSH: Port 22 (TCP) — secure encrypted remote terminal\n• Telnet: Port 23 (TCP) — unencrypted legacy remote terminal (insecure)\n• FTP: Port 21 (TCP Control channel) & Port 20 (TCP Data transfer)\n• SMTP: Port 25 (TCP Server-to-server email delivery); Port 587 (Submission)\n• RDP (Remote Desktop): Port 3389 (TCP/UDP) — Windows Remote Desktop\n• NTP (Network Time Protocol): Port 123 (UDP) — time synchronization\n• SNMP: Port 161 (UDP) — network management and monitoring\n• Kerberos: Port 88 (TCP/UDP) — Active Directory authentication.",
      keywords: ["HTTP: 80", "HTTPS: 443", "DNS: 53", "DHCP: 67/68", "SSH: 22", "Telnet: 23", "FTP: 20/21", "SMTP: 25", "RDP: 3389"],
      trapFollowUp: "Interviewer Trap: 'Why is Telnet banned in modern secure enterprise networks like CGPDTM?' Answer: Telnet transmits all data, including usernames and passwords, in cleartext. Anyone sniffing network traffic with Wireshark can read administrative credentials in plaintext. SSH (Port 22) must always be used instead."
    },
    {
      id: "cg_ip_09",
      topic: "IPv4 vs IPv6",
      priority: "High Yield",
      question: "What are the key differences between IPv4 and IPv6?",
      spokenAnswer: "The primary differences:\n1. Address Length: IPv4 is 32 bits (approx 4.3 billion addresses, represented as 4 decimal octets, e.g., `192.168.1.1`). IPv6 is 128 bits (approx 3.4 x 10^38 addresses, represented as 8 groups of 4 hexadecimal digits, e.g., `2001:0db8::1`).\n2. Header Simplicity: IPv6 has a fixed 40-byte base header with no checksum, simplifying router processing and forwarding speed compared to IPv4's variable header.\n3. Address Auto-configuration: IPv6 supports SLAAC (Stateless Address Autoconfiguration) allowing devices to configure themselves automatically without a DHCP server.\n4. No Broadcast: IPv6 eliminates broadcasts completely; it uses Multicast and Anycast instead, preventing broadcast storms.\n5. Built-in Security: IPsec was designed natively into the IPv6 protocol suite.\n6. Elimination of NAT: With virtually unlimited addresses, every device can have an end-to-end globally unique address.",
      keywords: ["32 bits vs 128 bits", "Dotted decimal vs Hexadecimal with colons", "No broadcast in IPv6 (uses Multicast)", "SLAAC (Stateless auto-config)", "Fixed 40-byte header"],
      trapFollowUp: "Follow-up: 'What is the loopback address in IPv6?' Answer: `::1` (equivalent to `127.0.0.1` in IPv4)."
    },
    {
      id: "cg_ip_10",
      topic: "ICMP & Path Ping",
      priority: "Technical Edge",
      question: "What is ICMP, what layer does it operate at, and what are its primary message types?",
      spokenAnswer: "ICMP (Internet Control Message Protocol) is a network utility protocol used by network devices to send error messages and operational information indicating, for example, that a requested service is unavailable or that a host could not be reached.\n\n• Layer: It operates at Layer 3 (Network Layer) and is encapsulated directly inside IP packets (Protocol number 1 in IPv4).\n\nKey Message Types:\n• Type 8 (Echo Request) & Type 0 (Echo Reply): Used by the `ping` command to test reachability and round-trip time.\n• Type 3 (Destination Unreachable): Returned when a router or host cannot deliver a packet (Code 0: Net unreachable, Code 1: Host unreachable, Code 3: Port unreachable).\n• Type 11 (Time Exceeded): Returned when a packet's TTL (Time to Live) reaches 0 in transit. This is the foundational mechanism that allows `traceroute` / `tracert` to discover each hop on a path.",
      keywords: ["Internet Control Message Protocol", "Layer 3 (Encapsulated in IP, Protocol 1)", "Echo Request (Type 8) & Echo Reply (Type 0)", "Time Exceeded (Type 11 used by traceroute)", "Destination Unreachable (Type 3)"],
      trapFollowUp: "Follow-up: 'Why do some corporate routers drop ICMP?' Answer: Security hardening to prevent network reconnaissance, ping sweeps, and ICMP flood Denial-of-Service attacks."
    }
  ],

  // =========================================================================
  // 3. CLI DIAGNOSTICS & NETWORK TOOLS (10 Questions)
  // =========================================================================
  cli_tools_diagnostics: [
    {
      id: "cg_cli_01",
      topic: "ipconfig Deep Dive",
      priority: "Must Know Windows Command",
      question: "Explain the purpose of: `ipconfig`, `ipconfig /all`, `ipconfig /release`, `ipconfig /renew`, and `ipconfig /flushdns`.",
      spokenAnswer: "These are the fundamental Windows network diagnostic commands:\n• `ipconfig`: Displays basic IP address, subnet mask, and default gateway for all active network adapters.\n• `ipconfig /all`: Displays complete adapter configuration, including MAC (Physical) address, DHCP server IP, lease obtain/expire timestamps, DNS server IPs, NetBIOS status, and whether DHCP is enabled.\n• `ipconfig /release`: Sends a DHCPRELEASE message to the DHCP server to forfeit the current IP configuration and drop the lease.\n• `ipconfig /renew`: Broadcasts a new DHCPREQUEST to renegotiate and acquire a fresh IP configuration from the DHCP server.\n• `ipconfig /flushdns`: Clears the local Windows DNS Client Resolver Cache, forcing the PC to perform fresh DNS lookups (crucial after DNS record changes or resolving stale/poisoned entries).",
      keywords: ["ipconfig /all shows MAC, DHCP, and DNS servers", "/release drops IP lease", "/renew requests new IP from DHCP", "/flushdns purges cached DNS records"],
      trapFollowUp: "Scenario: 'A user's workstation had its VLAN changed by the switch administrator, but the user still has an old IP. What command sequence fixes it?' Answer: `ipconfig /release` followed by `ipconfig /renew`."
    },
    {
      id: "cg_cli_02",
      topic: "ping & Why ping Fails When Web Works",
      priority: "Classic Interview Question",
      question: "How does ping work? Why might ping to a server fail even if its website opens perfectly in the browser?",
      spokenAnswer: "`ping` uses ICMP (Internet Control Message Protocol) to send Echo Request (Type 8) packets to a destination IP and awaits Echo Reply (Type 0) packets, measuring round-trip time (RTT) and packet loss.\n\nWhy ping fails while the website works:\n1. ICMP Filtering: The web server or an intermediate firewall (corporate firewall or cloud security group) has a rule configured to BLOCK or drop ICMP traffic to prevent reconnaissance and Denial-of-Service attacks, while explicitly PERMITTING HTTP (TCP port 80) and HTTPS (TCP port 443).\n2. Rate Limiting: Some routers rate-limit or prioritize TCP over ICMP.\n\nTherefore, ping failure does NOT necessarily mean the server or service is down — it only means ICMP is unreachable or blocked.",
      keywords: ["ICMP Echo Request/Reply", "Firewall drops ICMP (Protocol 1) but allows TCP 80/443", "Ping failure != Service down", "Security hardening against network discovery"],
      trapFollowUp: "Follow-up: 'How do you test if port 443 is open if ping is blocked?' Answer: In Windows PowerShell: `Test-NetConnection -ComputerName ipindia.gov.in -Port 443` or use `curl -I https://ipindia.gov.in`."
    },
    {
      id: "cg_cli_03",
      topic: "tracert / traceroute Mechanics",
      priority: "Must Know",
      question: "How does tracert (traceroute) work under the hood? What does `* * * Request timed out` mean?",
      spokenAnswer: "`tracert` (Windows) maps the path packets take to a destination using the IP header's TTL (Time-to-Live) field:\n1. It sends the first packet with `TTL = 1`. The first hop router decrements TTL to 0, drops the packet, and returns an ICMP 'Time Exceeded' (Type 11) message. `tracert` records that router's IP and RTT.\n2. It sends the next packet with `TTL = 2`. The second router drops it and returns ICMP Time Exceeded.\n3. It increments TTL by 1 sequentially until the packet reaches the destination, which returns an ICMP Echo Reply.\n\nWhat `* * * Request timed out` means:\nIt does not necessarily mean the network is broken. Many intermediate transit routers intentionally drop or deprioritize ICMP Time Exceeded messages to conserve CPU cycles, or are configured behind a firewall that drops ICMP. If subsequent hops respond, the intermediate timeout is harmless.",
      keywords: ["TTL (Time-to-Live) manipulation", "ICMP Type 11 Time Exceeded", "Sequential increment of TTL (1, 2, 3...)", "Timeouts often mean router refuses to respond to ICMP, not broken link"],
      trapFollowUp: "Follow-up: 'What is the difference between Windows tracert and Linux traceroute?' Answer: Windows `tracert` uses ICMP Echo Requests by default; Linux `traceroute` uses UDP packets to high-numbered ports (33434+) by default."
    },
    {
      id: "cg_cli_04",
      topic: "nslookup DNS Diagnostics",
      priority: "Must Know Command",
      question: "How do you use `nslookup` to diagnose DNS resolution issues? How do you test with an alternate DNS server?",
      spokenAnswer: "`nslookup` (Name Server Lookup) queries DNS servers to test name resolution, find IP mappings, and troubleshoot DNS server availability.\n\nKey usages:\n1. Basic lookup: `nslookup portal.ipindia.gov.in` — returns the Default Server used and the resolved IP address.\n2. Testing with a specific/alternative DNS server: `nslookup portal.ipindia.gov.in 8.8.8.8` (queries Google DNS directly) or `nslookup portal.ipindia.gov.in 10.10.1.5` (internal DNS server).\n   • If internal DNS fails but 8.8.8.8 succeeds: The problem is with the internal office DNS server or forwarder.\n   • If both fail: The domain record does not exist or external internet routing is down.\n3. Querying specific record types: Entering interactive mode `nslookup`, typing `set type=MX` (for mail servers) or `set type=TXT` (for SPF/DKIM records), then entering the domain name.",
      keywords: ["Queries DNS records directly", "Syntax: nslookup <domain> <server-ip>", "Isolates client issue vs local resolver vs authoritative DNS", "set type=A / MX / TXT"],
      trapFollowUp: "Scenario: 'User cannot open internal portal by name, but CAN open it by IP address (http://10.10.2.15). What is the exact problem?' Answer: DNS resolution failure! Test with `nslookup` to check if the internal DNS server has an A record for the portal."
    },
    {
      id: "cg_cli_05",
      topic: "netstat and Listening Ports",
      priority: "High Yield Command",
      question: "What does `netstat -ano` show in Windows? How do you find which process is holding a specific port?",
      spokenAnswer: "`netstat -ano` displays all active network connections and listening ports on a computer:\n• `-a`: Displays all active connections and listening ports.\n• `-n`: Displays addresses and port numbers in numerical format instead of trying to resolve names (much faster).\n• `-o`: Displays the owning Process ID (PID) associated with each connection.\n\nHow to find what is holding a port (e.g., port 80 or 8080):\n1. Run: `netstat -ano | findstr :80`\n2. Note the PID in the rightmost column (e.g., PID `4128`).\n3. Match PID to program name: Run `tasklist | findstr 4128` or open Task Manager -> Details tab -> sort by PID.\n\nIn Linux, the modern replacement is `ss -tuln` or `ss -tulpn` (Socket Statistics), which shows TCP/UDP listening sockets with PIDs.",
      keywords: ["netstat -ano (all, numeric, PID)", "findstr filter in Windows", "tasklist to match PID to executable", "Linux equivalent: ss -tuln / ss -tulpn"],
      trapFollowUp: "Follow-up: 'What state indicates a server application is waiting for incoming client connections?' Answer: `LISTENING` (TCP)."
    },
    {
      id: "cg_cli_06",
      topic: "Linux Networking Commands",
      priority: "Must Know Linux",
      question: "What are the modern Linux network commands to check IP addresses, routes, and network sockets (replacing ifconfig and route)?",
      spokenAnswer: "In modern Linux distributions, the legacy `net-tools` package (`ifconfig`, `route`, `netstat`) has been replaced by the `iproute2` suite:\n1. IP Address inspection: `ip addr` (or `ip a`) replaces `ifconfig`. Shows interface state (UP/DOWN), MAC address, and assigned IPv4/IPv6 addresses.\n2. Routing Table: `ip route` (or `ip r`) replaces `route -n`. Shows the default gateway (e.g., `default via 192.168.1.1 dev eth0`) and static routes.\n3. Interface statistics: `ip link` shows MAC addresses and packet drop/error counters.\n4. Sockets & Listening Ports: `ss -tuln` replaces `netstat -tuln`:\n   • `-t`: TCP sockets\n   • `-u`: UDP sockets\n   • `-l`: Listening sockets\n   • `-n`: Numeric ports/IPs\n   • `-p`: Process name / PID (requires sudo).\n5. Connectivity: `curl -I <url>` to test HTTP response headers from terminal; `nc -zv <host> <port>` (netcat) to test raw port reachability.",
      keywords: ["ip addr (replaces ifconfig)", "ip route (replaces route)", "ss -tuln (replaces netstat)", "ip link (interface status and errors)", "curl -I / netcat"],
      trapFollowUp: "Follow-up: 'How do you bring an interface up or down in Linux using the ip command?' Answer: `sudo ip link set dev eth0 up` and `sudo ip link set dev eth0 down`."
    },
    {
      id: "cg_cli_07",
      topic: "Wireshark Packet Analysis",
      priority: "High Yield Tool",
      question: "What is Wireshark? How would you use it to troubleshoot an office network issue, and what are basic capture filters?",
      spokenAnswer: "Wireshark is an open-source packet analyzer used for network troubleshooting, protocol analysis, and security auditing. It captures packet data traversing a network interface in real time and decodes protocol headers.\n\nHow to use it in office troubleshooting:\n1. Capture traffic during the issue: Replicate the fault (e.g., user attempts to log into the portal).\n2. Filter traffic: Use display filters to isolate relevant packets:\n   • `ip.addr == 192.168.1.100` (traffic to/from specific host)\n   • `tcp.port == 80 || tcp.port == 443` (web traffic)\n   • `dns` (view DNS queries and response codes like NXDOMAIN)\n   • `http.response.code >= 400` (find web server errors)\n   • `tcp.flags.reset == 1` (identify rejected TCP connections / firewall resets)\n   • `arp.duplicate-address-detected` (detect IP address conflicts).\n3. Follow TCP Stream: Right-click a packet -> Follow -> TCP Stream to view the full conversational exchange in human-readable order.\n\nImportant rule: Packet capture must be authorized, as it can capture sensitive credentials and payloads on unencrypted links.",
      keywords: ["Promiscuous mode packet capture", "Display filters (ip.addr, tcp.port, dns, http)", "Follow TCP Stream", "Detecting TCP Resets, retransmissions, and ARP conflicts"],
      trapFollowUp: "Interviewer Trap: 'Can Wireshark read passwords transmitted over HTTPS?' Answer: No. HTTPS encrypts the payload using TLS. Wireshark will only see the TLS handshake and encrypted application data, unless you provide the private server key or client SSL session log key."
    },
    {
      id: "cg_cli_08",
      topic: "Nmap Basics & Security Scanning",
      priority: "Security Tool",
      question: "What is Nmap, what is the difference between a Ping Sweep and a SYN Stealth Scan, and what is the authorization rule?",
      spokenAnswer: "Nmap (Network Mapper) is a network discovery and vulnerability scanning tool used to discover hosts, open ports, and running services on a network.\n\nKey scan types:\n1. Ping Sweep (`nmap -sn 192.168.1.0/24`): Disables port scanning; only determines which IP addresses are online/responsive in a subnet using ICMP echo, ARP, and TCP ACK/SYN probes.\n2. TCP SYN Stealth Scan (`nmap -sS -p- <target>`): Default and most popular scan. Sends a SYN packet to each port:\n   • If SYN-ACK returned: Port is OPEN (Nmap immediately sends an RST packet to tear down connection without completing 3-way handshake, minimizing log footprint).\n   • If RST returned: Port is CLOSED.\n   • If no response / ICMP unreachable: Port is FILTERED (blocked by firewall).\n3. Service Version & OS Detection (`nmap -sV -O`): Probes open ports to fingerprint software versions and operating system.\n\nCritical Golden Rule: In a government IT environment like CGPDTM, scanning systems without explicit prior written authorization is strictly prohibited and can be treated as a security violation.",
      keywords: ["Host discovery vs Port scanning", "Ping sweep (-sn)", "SYN Stealth Scan (-sS): half-open scan", "Open (SYN-ACK), Closed (RST), Filtered (Firewall drop)", "Never scan without authorization"],
      trapFollowUp: "Follow-up: 'What does a state of FILTERED mean in Nmap output?' Answer: A firewall, router ACL, or host packet filter is blocking the probe, preventing Nmap from determining if the port is open or closed."
    },
    {
      id: "cg_cli_09",
      topic: "Windows Event Viewer for IT Diagnostics",
      priority: "Must Know Windows",
      question: "How do you use Windows Event Viewer to diagnose network and security incidents? What are key Event IDs?",
      spokenAnswer: "Windows Event Viewer (`eventvwr.msc`) is a centralized log repository that records system, security, and application logs.\n\nKey areas for network & IT support:\n1. System Log:\n   • Filter by Source: `Dhcp-Client` to check IP lease renewals and DHCP timeouts.\n   • Check `Tcpip` events: Identifies IP address conflicts (Event ID 4199: System detected an IP address conflict).\n   • Check network adapter disconnects (Netwtw / e1dexpress link down events).\n2. Security Log (Audit logs):\n   • Event ID 4624: Successful Account Logon.\n   • Event ID 4625: Failed Account Logon — crucial for detecting brute-force password guessing attacks, account lockouts, or compromised credentials.\n   • Event ID 4720: User account created.\n   • Event ID 4740: User account locked out.\n3. Application Log: Internal portal application crashes and service failures.\n\nDiagnostic workflow: When a user reports intermittent disconnection or logon refusal, open Event Viewer, filter by time window of the incident, and inspect System & Security logs.",
      keywords: ["eventvwr.msc", "System log (DHCP timeouts, IP conflict ID 4199)", "Security log (Logon Success ID 4624, Logon Failure ID 4625)", "Account lockout ID 4740"],
      trapFollowUp: "Follow-up: 'If you see 500 instances of Event ID 4625 within 2 minutes for an administrator account, what is happening?' Answer: A brute-force or credential-stuffing dictionary attack!"
    },
    {
      id: "cg_cli_10",
      topic: "Active Directory Fundamentals",
      priority: "Must Know Enterprise IT",
      question: "What is Active Directory Domain Services (AD DS), and what roles do Domain Controllers, DNS, and Group Policy play in an office?",
      spokenAnswer: "Active Directory (AD) is Microsoft's centralized directory service used in enterprise and government networks to manage users, computers, permissions, and security policies.\n\nKey components:\n1. Domain Controller (DC): The server running AD DS that responds to security authentication requests (verifying usernames and passwords using Kerberos protocol).\n2. DNS: Active Directory CANNOT function without DNS. DCs register SRV (Service) records in DNS so workstations can locate the domain controller (`_ldap._tcp.dc._msdcs.domain`).\n3. Group Policy Objects (GPOs): Centrally configures and enforces operating system settings, security restrictions (e.g., disabling USB storage, enforcing password complexity), network proxy settings, and software installations across all domain-joined PCs.\n4. Organizational Units (OUs): Logical containers inside AD used to organize users and computers (e.g., 'Examiners', 'Finance', 'Administration') and link specific GPOs.\n\nIn daily IT support: We manage user accounts (password resets, account unlocks), join new workstations to the domain, and verify Group Policy updates (`gpupdate /force`).",
      keywords: ["Centralized identity and access management", "Domain Controller (Kerberos on port 88)", "Active Directory requires DNS (SRV records)", "GPO (Group Policy) for security baseline", "gpupdate /force"],
      trapFollowUp: "Scenario: 'A workstation fails to join the domain with the error: An Active Directory Domain Controller for the domain could not be contacted. What is the #1 cause?' Answer: DNS misconfiguration! The workstation is pointing to an external DNS (like 8.8.8.8) instead of the internal Domain Controller's DNS IP!"
    }
  ],

  // =========================================================================
  // 4. CYBERSECURITY & NETWORK CONTROLS (10 Questions)
  // =========================================================================
  cyber_security: [
    {
      id: "cg_sec_01",
      topic: "CIA Triad",
      priority: "Core Fundamental",
      question: "Explain the CIA Triad with practical examples relevant to an Intellectual Property Office like CGPDTM.",
      spokenAnswer: "The CIA Triad is the foundational model for information security:\n1. Confidentiality: Ensuring sensitive data is accessible only to authorized personnel and protected from unauthorized disclosure.\n   • CGPDTM Example: Unpublished patent applications and trademark submissions must be strictly confidential. Protected via role-based access control, encryption in transit (TLS 1.3), encryption at rest (AES-256), and network segmentation.\n2. Integrity: Ensuring data is accurate, authentic, and protected from unauthorized modification, deletion, or tampering.\n   • CGPDTM Example: The filing date, timestamp, and legal claims of a patent docket cannot be altered. Ensured via cryptographic hashing (SHA-256), audit logs, and digital signatures.\n3. Availability: Ensuring authorized users have timely and reliable access to systems, networks, and data when needed.\n   • CGPDTM Example: The public patent filing portal and internal examiner database must remain operational. Protected via redundant power, dual internet uplinks, server clustering, regular backups, and DDoS mitigation.",
      keywords: ["Confidentiality (protect from disclosure via encryption/access control)", "Integrity (protect from tampering via hashing/digital signatures)", "Availability (protect uptime via redundancy/backups/DDoS protection)"],
      trapFollowUp: "Follow-up: 'Which pillar is violated if a ransomware encrypts all files on a server?' Answer: Availability (files cannot be accessed) AND Integrity (files have been maliciously altered/encrypted)!"
    },
    {
      id: "cg_sec_02",
      topic: "Firewalls: Stateless vs Stateful vs WAF",
      priority: "Must Know",
      question: "What is a Firewall? Differentiate between Stateless Packet Filtering, Stateful Inspection, and a Web Application Firewall (WAF).",
      spokenAnswer: "A Firewall is a network security device that monitors, filters, and controls incoming and outgoing traffic based on predetermined security rules.\n\nThree major types:\n1. Stateless Packet Filtering (Layer 3/4): Inspects individual packets in isolation based on static rules (Source IP, Destination IP, Protocol, Port). It does NOT remember the state of previous packets. If you allow outbound traffic on port 80, you must explicitly create a separate rule to allow inbound reply traffic on high ephemeral ports.\n2. Stateful Inspection (Layer 3/4): Maintains a State Table of active connections. When an internal workstation initiates an outbound connection (e.g., to `https://google.com`), the firewall records the connection. When Google's reply arrives, the firewall recognizes it as part of an ESTABLISHED connection and automatically permits it back in, while blocking unsolicited incoming packets.\n3. WAF (Web Application Firewall - Layer 7): Inspects application-layer HTTP/HTTPS payload traffic specifically to protect web servers from application-level attacks such as SQL Injection (SQLi), Cross-Site Scripting (XSS), and CSRF.",
      keywords: ["Stateless (individual packet inspection, no memory)", "Stateful (State Table, tracks established sessions)", "WAF (Layer 7 application protection against SQLi and XSS)"],
      trapFollowUp: "Follow-up: 'Where is a WAF placed relative to an office perimeter firewall?' Answer: The perimeter firewall guards the entire network edge; the WAF is positioned in front of the public web application servers (in the DMZ or reverse proxy) to inspect HTTP/HTTPS payloads."
    },
    {
      id: "cg_sec_03",
      topic: "IDS vs IPS",
      priority: "Must Know",
      question: "What is the difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?",
      spokenAnswer: "The core difference is placement and active response capability:\n\n• IDS (Intrusion Detection System): Passive and out-of-band.\n  - It connects to a switch SPAN/mirror port or network TAP.\n  - It inspects a copy of network traffic.\n  - Action: If it detects malicious patterns or policy violations, it generates alerts/logs for security administrators, but does NOT stop the traffic.\n  - Advantage: Zero impact on network latency; false positives do not disrupt legitimate business operations.\n\n• IPS (Intrusion Prevention System): Active and in-line.\n  - It sits directly in the path of network traffic (traffic flows through the IPS).\n  - It inspects packets in real time.\n  - Action: If an attack signature or anomaly is detected, it actively BLOCKS or drops the packets, resets the TCP connection (`TCP RST`), and alerts the SIEM.\n  - Risk: A false positive can block legitimate users or traffic, and hardware failure can impact throughput.",
      keywords: ["IDS: Passive, out-of-band, mirror port, alerts only", "IPS: Active, in-line, directly in traffic path, drops/blocks packets", "Span/mirror port vs In-line placement", "Alerting vs Prevention"],
      trapFollowUp: "Follow-up: 'What are the two detection methods used by IDS/IPS?' Answer: 1. Signature-based (compares against known attack patterns/CVEs); 2. Anomaly-based (baselines normal traffic and alerts on statistical deviations)."
    },
    {
      id: "cg_sec_04",
      topic: "VPN Technologies (IPsec vs SSL/TLS)",
      priority: "High Yield",
      question: "What is a VPN? Compare Remote Access VPN vs Site-to-Site VPN, and IPsec vs SSL/TLS VPN.",
      spokenAnswer: "A VPN (Virtual Private Network) creates an encrypted, secure virtual tunnel across an untrusted network (such as the public internet) to protect confidentiality and integrity of transmitted data.\n\nArchitectures:\n• Remote Access VPN: Connects individual remote workers back to the office network using client software (e.g., an examiner working from home connecting securely to the CGPDTM intranet).\n• Site-to-Site VPN: Connects two permanent networks together over the internet (e.g., linking the Dwarka office to regional patent offices in Mumbai or Chennai).\n\nProtocols:\n• IPsec (Layer 3): Operates at the network layer. Uses ESP (Encapsulating Security Payload) for encryption and IKE (Internet Key Exchange) for authentication. Secures all IP traffic, ideal for Site-to-Site tunnels and dedicated client software.\n• SSL/TLS (Layer 4-7): Operates at the transport/session layer. Can be clientless through any standard web browser (Port 443) or via lightweight agent. Easier to deploy through corporate firewalls and proxies because TCP port 443 is almost universally permitted.",
      keywords: ["Encrypted communication tunnel over untrusted network", "Remote Access (client-to-site) vs Site-to-Site (network-to-network)", "IPsec (Layer 3, ESP/IKE) vs SSL/TLS (Port 443, browser-accessible)"],
      trapFollowUp: "Follow-up: 'What is Split Tunneling in a Remote Access VPN?' Answer: Routing corporate traffic through the encrypted VPN tunnel while routing regular internet traffic directly through the user's local ISP. In high-security government environments, Split Tunneling is often disabled to ensure all traffic is monitored by enterprise firewalls."
    },
    {
      id: "cg_sec_05",
      topic: "Network Segmentation & DMZ",
      priority: "Architecture",
      question: "What is Network Segmentation, and what is a DMZ (Demilitarized Zone)?",
      spokenAnswer: "Network Segmentation is the architectural practice of dividing an organization's network into smaller, isolated sub-networks (zones or VLANs) controlled by firewalls and access control lists.\n\nBenefits:\n• Prevents lateral movement: If an attacker compromises a workstation in guest Wi-Fi, segmentation prevents them from directly reaching internal patent database servers.\n• Reduces attack surface and contains broadcast domains.\n\nA DMZ (Demilitarized Zone) is a perimeter sub-network that acts as a buffer zone between an untrusted network (the public internet) and the trusted internal corporate LAN.\n• Devices placed in DMZ: Public-facing services like web servers (`ipindia.gov.in`), external DNS servers, and email gateways.\n• Security rule: The internet can access the DMZ, and the internal LAN can access the DMZ, but devices in the DMZ are NEVER permitted to initiate unsolicited connections into the internal trusted LAN.",
      keywords: ["Isolating sub-networks to prevent lateral movement", "DMZ: Perimeter buffer between Internet and Internal LAN", "Hosts public servers (Web, DNS, Mail)", "DMZ cannot initiate connections into internal trusted network"],
      trapFollowUp: "Follow-up: 'If a web server in the DMZ needs to query a database in the internal LAN, how is that handled?' Answer: The database is kept in the internal LAN. A strict firewall rule allows ONLY the DMZ web server IP to communicate with the Database IP on the specific database port (e.g., TCP 1433 or 3306), rejecting all other traffic."
    },
    {
      id: "cg_sec_06",
      topic: "Encryption vs Hashing",
      priority: "Must Know",
      question: "What is the difference between Encryption and Cryptographic Hashing? Where is each used?",
      spokenAnswer: "The fundamental difference is reversibility:\n\n• Encryption is a TWO-WAY mathematical function designed to preserve confidentiality. Data is converted from plaintext to ciphertext and CAN be decrypted back to plaintext using the appropriate key.\n  - Symmetric Encryption: Single shared key for encryption and decryption (AES-256). Very fast; used for bulk data, VPNs, and disk encryption.\n  - Asymmetric Encryption: Key pair — Public key encrypts, Private key decrypts (RSA, ECC). Used for key exchange, SSL/TLS handshakes, and digital signatures.\n\n• Hashing is a ONE-WAY mathematical function that takes variable-length input and converts it into a unique, fixed-size string (digest). It CANNOT be reversed back to plaintext.\n  - Algorithms: SHA-256, SHA-3 (MD5 and SHA-1 are deprecated).\n  - Properties: Deterministic, fast, collision-resistant, avalanche effect.\n  - Uses: Storing user passwords securely (salted hashes), verifying file and patent docket integrity, digital signatures.",
      keywords: ["Encryption is two-way (reversible with key)", "Hashing is one-way (irreversible fixed-length digest)", "Symmetric (AES) vs Asymmetric (RSA)", "Hashing uses: password storage and file integrity (SHA-256)"],
      trapFollowUp: "Interviewer Trap: 'Can you decrypt an MD5 or SHA-256 hash?' Answer: NO! Hashing is mathematically one-way and cannot be decrypted. (Online 'hash crackers' simply search pre-computed rainbow tables of known plaintext hashes)."
    },
    {
      id: "cg_sec_07",
      topic: "Principle of Least Privilege & Access Control",
      priority: "Govt IT Security",
      question: "What is the Principle of Least Privilege, and what is the difference between Authentication and Authorization?",
      spokenAnswer: "The Principle of Least Privilege (PoLP) states that users, applications, and system processes should be granted only the minimum necessary permissions, access rights, and network paths required to perform their specific job functions, and nothing more.\n\nIn CGPDTM:\n• Regular office staff should run with standard user accounts, NEVER permanent local administrator privileges.\n• IT support staff should use dedicated administrative credentials only when performing administrative tasks, not for everyday web browsing or email.\n\nAuthentication vs Authorization:\n• Authentication (AuthN): The process of verifying WHO a user is (e.g., entering username and password + MFA OTP).\n• Authorization (AuthZ): The process of determining WHAT an authenticated user is permitted to do or access (e.g., user is authenticated, but authorized only to read patent dockets, not delete them).",
      keywords: ["Principle of Least Privilege (PoLP)", "No default administrator rights", "Authentication (Who are you? - Identity verification)", "Authorization (What can you do? - Permissions)"],
      trapFollowUp: "Follow-up: 'What is Multi-Factor Authentication (MFA)?' Answer: Verifying identity using at least two different factors: 1. Something you know (password); 2. Something you have (hardware token / authenticator app OTP); 3. Something you are (biometrics/fingerprint)."
    },
    {
      id: "cg_sec_08",
      topic: "Incident Response Lifecycle",
      priority: "Security Operations",
      question: "What are the standard phases of Incident Response (NIST / SANS framework)? What is your first action upon discovering a compromised endpoint?",
      spokenAnswer: "The standard 6-phase Incident Response lifecycle (SANS / NIST):\n1. Preparation: Establishing incident response policies, tools, communication channels, and training.\n2. Identification (Detection): Detecting abnormal activity via alerts, SIEM, or user reports, and confirming a security incident.\n3. Containment: Isolating the affected system to prevent lateral spread to the rest of the network (e.g., unplugging network cable or placing in quarantine VLAN), while preserving volatile RAM.\n4. Eradication: Removing malware, closing compromised accounts, patching vulnerabilities, and eliminating attacker persistence.\n5. Recovery: Restoring systems from trusted clean backups, verifying normal operation, and monitoring for re-infection.\n6. Lessons Learned: Documenting what occurred, reviewing team response, and updating security controls to prevent recurrence.\n\nFirst action on a compromised machine:\nImmediately ISOLATE the endpoint from the network (disconnect Ethernet / disable Wi-Fi) to stop command-and-control communication and lateral movement. DO NOT reboot or power off abruptly, as this destroys volatile forensic memory (RAM). Document findings and notify the security lead.",
      keywords: ["6 Phases: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned", "First action: Isolate from network (disconnect cable)", "Do NOT power off/reboot (preserves volatile memory in RAM)", "Document and escalate"],
      trapFollowUp: "Interviewer Trap: 'Why should you NOT immediately format and reinstall a compromised machine?' Answer: Because formatting destroys all forensic evidence, logs, and artifacts needed to determine how the attacker breached the system, what data was accessed, and whether other machines are compromised."
    },
    {
      id: "cg_sec_09",
      topic: "SIEM & Log Management",
      priority: "Security Operations",
      question: "What is a SIEM (Security Information and Event Management) and why is centralized logging critical in an enterprise?",
      spokenAnswer: "A SIEM (Security Information and Event Management) system centrally collects, aggregates, normalizes, and correlates log and event data from across an entire enterprise infrastructure — including firewalls, routers, switches, domain controllers, servers, and antivirus/EDR agents.\n\nWhy centralized logging is critical:\n1. Threat Detection & Correlation: Correlates separate events that look harmless in isolation. For example: 5 failed logins on a workstation + 1 successful login from an unusual IP + a sudden outbound transfer on port 4444 = High-severity automated alert.\n2. Tamper-Proof Evidence: If an attacker compromises a local workstation or server, their first action is to clear local event logs (`wevtutil cl security`). A SIEM preserves these logs off-host in a write-once, tamper-resistant central repository.\n3. Compliance & Auditing: Government standards (CERT-In, ISO 27001) require organizations to retain access and network logs for designated audit periods (typically 180+ days).\n4. Fast Incident Investigation: Provides SOC analysts with a single search interface to trace an IP or user activity across all network devices.",
      keywords: ["Security Information and Event Management", "Log aggregation, normalization, and correlation", "Tamper-resistant off-host storage", "Compliance (CERT-In 180-day log mandate)"],
      trapFollowUp: "Follow-up: 'What protocol is commonly used to forward log messages from routers and Linux servers to a central SIEM?' Answer: Syslog (UDP/TCP port 514)."
    },
    {
      id: "cg_sec_10",
      topic: "Common Attacks: Phishing, DoS, and Man-in-the-Middle",
      priority: "Threat Landscape",
      question: "Briefly explain: Phishing, DoS/DDoS, and Man-in-the-Middle (MitM) attacks, and how to defend against them.",
      spokenAnswer: "1. Phishing: A social engineering attack using deceptive emails or fake login portals mimicking legitimate services to trick users into revealing credentials or executing malicious payloads.\n   • Defense: Email filtering (SPF/DKIM/DMARC), anti-phishing gateways, multi-factor authentication (MFA), and user security awareness training.\n\n2. DoS / DDoS (Denial of Service): Overwhelming a network device, server, or bandwidth with flood traffic (SYN floods, UDP amplification, HTTP requests) to cause service outage for legitimate users.\n   • Defense: Traffic scrubbing services, rate limiting at edge firewalls, ISP upstream filtering, and DDoS mitigation appliances.\n\n3. Man-in-the-Middle (MitM): An attack where the attacker secretly intercepts and potentially alters communication between two parties who believe they are communicating directly.\n   • Defense: End-to-end encryption using TLS/HTTPS, Dynamic ARP Inspection (DAI) on switches, and 802.1X network access control.",
      keywords: ["Phishing: Social engineering (MFA + SPF/DKIM/DMARC defense)", "DDoS: Flooding resource (Rate limiting + scrubbing defense)", "MitM: Eavesdropping/tampering (TLS encryption + DAI defense)"],
      trapFollowUp: "Follow-up: 'If you receive an email claiming to be from the IT Administrator asking you to verify your password, what do you do?' Answer: Never reply or enter credentials. Report it to the official cybersecurity/IT team immediately, as legitimate IT administrators will NEVER ask for a user's password."
    }
  ],

  // =========================================================================
  // 5. BEHAVIORAL, PROJECT DEFENSE & GOVT IT ETHICS (6 Questions)
  // =========================================================================
  behavioral_govt_it: [
    {
      id: "cg_beh_01",
      topic: "60-90 Second Self Introduction",
      priority: "Must Practice Aloud",
      question: "Introduce yourself and summarize your technical background for this networking role.",
      spokenAnswer: "Good morning/afternoon to the panel. My name is [Your Name], and I have completed my Master of Computer Applications (MCA) with a strong foundation in computer networking, systems infrastructure, and IT security.\n\nDuring my academic and project work, I have developed a solid hands-on understanding of the TCP/IP suite, routing and switching concepts, subnetting, and network services like DNS and DHCP. I regularly work with operating systems across both Windows and Linux environments, and I am comfortable using network diagnostic utilities like ping, tracert, nslookup, netstat, and Wireshark for protocol inspection.\n\nI am particularly enthusiastic about this opportunity at the Office of CGPDTM because it offers the chance to apply structured troubleshooting, network maintenance, and security best practices within a premier national intellectual property institution. I am disciplined, eager to learn organizational workflows, and ready to contribute reliably to the team's IT operations from day one.",
      keywords: ["MCA background", "TCP/IP, routing, switching, DNS/DHCP foundation", "Windows & Linux CLI diagnostic proficiency", "Enthusiasm for CGPDTM's institutional mandate", "Disciplined troubleshooting mindset"],
      trapFollowUp: "Tip: Keep your delivery calm, professional, and within 60 to 90 seconds. Do NOT oversell or claim certifications you do not have."
    },
    {
      id: "cg_beh_02",
      topic: "Technical Project Defense (60-Sec Framework)",
      priority: "Must Know Structure",
      question: "Describe a technical networking or software project you have worked on. Explain the architecture and how data flows.",
      spokenAnswer: "Use this proven 5-step framework to describe your project:\n\n1. Objective: 'In my project [Project Name], the goal was to build [e.g., a secure client-server portal / network monitoring dashboard / vulnerability assessment scanner].'\n2. Architecture: 'It was built using a client-server architecture with [Technology Stack: e.g., Python/Node.js, PostgreSQL/SQLite, running on Linux/Windows].'\n3. Network Communication: 'The client communicated with the backend service via RESTful API calls over HTTPS (TCP port 443). I implemented JSON-based request/response payloads with parameter validation on every endpoint.'\n4. Security Controls: 'To protect communication, we enforced TLS encryption, parameterized database queries to prevent SQL injection, and hashed user credentials using bcrypt with unique salts.'\n5. Challenges Overcome: 'One key challenge was handling connection timeouts and network latency during high concurrent requests, which I solved by implementing connection pooling and proper HTTP status error codes.'",
      keywords: ["Problem -> Architecture -> Data flow -> Security controls -> Challenge resolved", "Clear explanation of client-to-server request flow", "Honest scope (do not claim automated AI if it was rule-based)"],
      trapFollowUp: "Interviewer Trap: 'What were the limitations of your project?' Answer: Always have a genuine limitation ready: e.g., 'Currently it operates on a single subnet and lacks multi-tenant role-based access control, which would be the next enhancement.'"
    },
    {
      id: "cg_beh_03",
      topic: "Handling Unauthorized Change Requests",
      priority: "Critical Govt IT Ethics",
      question: "What would you do if a senior officer asks you to bypass firewall rules, disable web filtering, or install unauthorized software on their office PC?",
      spokenAnswer: "I would handle this professionally, respectfully, and in strict accordance with organizational security policy:\n\n1. Polite Explanation: I would respectfully explain that the security controls and firewall policies are established by the organization to protect the integrity of the network and government data.\n2. Do NOT Implement Silently: I would NEVER make an ad-hoc, unauthorized configuration change or install unapproved software, as this violates government security baselines and could introduce malware or policy non-compliance.\n3. Official Procedure: I would guide the officer through the formal request process: 'Sir/Ma'am, for security and audit compliance, requests for policy exceptions or specific software installations require a formal request ticket or approval from the Head of IT / Competent Authority.'\n4. Document & Escalate: I would inform my immediate supervisor about the request so they are aware and can facilitate the authorized review.",
      keywords: ["Respectful and firm adherence to security policy", "Never make unauthorized ad-hoc changes", "Follow formal change-control / exception request workflow", "Escalate to supervisor / Head of IT"],
      trapFollowUp: "Tip: This is a favorite government interview question. Interviewers want to see that you understand that policies override personal hierarchies in IT security."
    },
    {
      id: "cg_beh_04",
      topic: "Confidentiality of Patent & Trademark Data",
      priority: "Institutional Ethics",
      question: "In an office like CGPDTM, how would you handle encountering confidential patent documents or trade secrets while troubleshooting a user's workstation?",
      spokenAnswer: "Confidentiality is paramount in an intellectual property office like CGPDTM, where unpublished patent applications hold immense legal and commercial value.\n\nMy approach:\n1. Strict Need-to-Know: While troubleshooting, my focus is strictly on network connectivity, operating system logs, and software functionality. I do NOT open, browse, copy, or read any user documents, patent dockets, or personal files.\n2. Non-Disclosure: Under no circumstances would I ever discuss, disclose, or transfer any information observed during IT maintenance to any third party or outside the office.\n3. User Presence: Where possible, I prefer troubleshooting while the user or officer is present at their workstation so all actions are transparent.\n4. Device Security: I would never plug in unauthorized personal USB drives or external storage to copy files.\n5. Professional Integrity: I treat all data as government property subject to official non-disclosure and cybersecurity protocols.",
      keywords: ["Strict need-to-know basis", "Never open or read user files/patent dockets", "No personal USB drives or data extraction", "Troubleshoot in user presence when possible"],
      trapFollowUp: "Key point: Reinforce that technical support focuses on the infrastructure layer (ports, sockets, OS services), not application data content."
    },
    {
      id: "cg_beh_05",
      topic: "What to Do When You Don't Know the Answer",
      priority: "Interview Honesty",
      question: "What do you do if you are asked a technical question in the interview or on the job and you genuinely do not know the answer?",
      spokenAnswer: "I believe in professional honesty rather than guessing or providing incorrect technical information:\n\n1. Honest Admission: I would acknowledge candidly: 'I do not know the exact answer or command syntax off the top of my head.'\n2. Logical Deduction: I would share what I DO know about the underlying concept or how I would reason through it.\n3. Troubleshooting / Research Method: I would explain the steps I would take to find the verified answer: 'In an operational environment, I would refer to official documentation, check standard operating procedure manuals, or consult senior team members.'\n4. On the job: In IT support, guessing or experimenting on production systems can cause outages or security breaches. The correct approach is always to verify before executing.",
      keywords: ["Candid honesty over guessing", "Explain foundational reasoning", "Consult official documentation and SOPs", "Never experiment on production systems without certainty"],
      trapFollowUp: "Tip: Interviewers respect a candidate who says 'I haven't encountered that specific protocol, but based on Layer 3 routing principles...' far more than someone who makes up facts."
    },
    {
      id: "cg_beh_06",
      topic: "Prioritizing Multiple Concurrent IT Requests",
      priority: "Operational Triage",
      question: "How would you prioritize support requests if five different officers call simultaneously with network and computer issues?",
      spokenAnswer: "I would use a structured IT triage approach based on Impact, Urgency, and Scope:\n\n1. Assess Scope First:\n   • Priority 1 (Critical / High Impact): Issues affecting multiple users or core infrastructure — e.g., an entire floor has lost internet, or the main patent filing gateway is unreachable. This takes precedence over single-user issues.\n   • Priority 2 (High Urgency): Time-sensitive statutory deadlines — e.g., an officer facing an imminent hearing or statutory filing deadline that cannot proceed without access.\n   • Priority 3 (Standard User Support): Routine single-workstation issues (printer configuration, password reset, routine software installation).\n2. Communicate Acknowledgment: Never leave users ignored. Acknowledge every request: 'Sir/Ma'am, we have logged your ticket and are resolving a high-priority network issue affecting the floor; we will address your workstation immediately after.'\n3. Leverage Team & Escalation: If multiple high-severity issues occur, escalate and distribute tickets with team members.",
      keywords: ["Triage by Impact, Urgency, and Scope", "Enterprise/infrastructure wide before single workstation", "Statutory/legal deadlines prioritized", "Transparent communication with ticket tracking"],
      trapFollowUp: "Follow-up: 'What is SLA (Service Level Agreement)?' Answer: The agreed time commitment within which IT support must acknowledge and resolve an incident based on its severity level."
    }
  ],

  // =========================================================================
  // 6. QUESTIONS TO ASK THE INTERVIEWER (Smart Endings)
  // =========================================================================
  interviewer_questions: [
    {
      id: "cg_ask_01",
      topic: "Role & Daily Responsibilities",
      question: "Questions you can ask the interview panel at the end of the interview:",
      spokenAnswer: "When the panel asks 'Do you have any questions for us?', asking thoughtful questions demonstrates genuine interest and professionalism:\n\n1. 'Could you tell me a little about the day-to-day balance of responsibilities — will the role primarily focus on local office LAN and workstation support, or will it also involve network monitoring and security operations?'\n2. 'Which primary network operating systems, equipment vendors (e.g., Cisco, HP), and management tools does the IT team at Boudhik Sampada Bhawan utilize?'\n3. 'What are the main priorities or key technical challenges the IT team hopes the new joiner will assist with in the first couple of months?'\n4. 'Is there an established ticketing and change-management system (such as an internal helpdesk portal) used to log and escalate support requests?'",
      keywords: ["Demonstrates professionalism and engagement", "Clarifies scope of duties", "Focuses on tools, processes, and team expectations"],
      trapFollowUp: "Tip: Do NOT ask about salary or leave policies during the technical round. Focus on the work environment, tools, and learning opportunities."
    }
  ]
};

// =========================================================================
// INTERACTIVE DIAGNOSTIC SCENARIOS (5 Core Scenarios)
// =========================================================================
const cgpdtmScenarios = [
  {
    id: "sc_01",
    title: "Scenario 1: Single Workstation Has No Internet Access",
    subtitle: "The #1 Most Frequently Asked Interview Troubleshooting Question",
    context: "A patent examiner at Room 204 calls IT support stating: 'My computer cannot access the internet or any internal portals.' Other colleagues in the same room have normal internet access.",
    steps: [
      {
        stepNum: 1,
        title: "Step 1: Physical Link & Layer 1 Inspection",
        instruction: "What is your very first diagnostic step?",
        options: [
          "Format the computer and reinstall Windows.",
          "Check the physical Ethernet cable connection, RJ-45 latch, switch port link LED, and ensure Wi-Fi/Airplane mode is not toggled.",
          "Change the router's default gateway IP address.",
          "Run a traceroute to 8.8.8.8."
        ],
        correctIndex: 1,
        explanation: "Always start at Layer 1 (Physical). Verify that the RJ-45 network cable is firmly seated (listen for the click), check if the green/amber link LEDs on the network card and wall jack are lit, and ensure the network adapter is enabled in Network Connections."
      },
      {
        stepNum: 2,
        title: "Step 2: Check IP Configuration with `ipconfig /all`",
        instruction: "Physical lights are blinking normally. You open CMD. What command do you run and what do you look for?",
        options: [
          "Run `ping google.com` immediately.",
          "Run `ipconfig /all` to inspect the IP address, subnet mask, default gateway, and DNS servers.",
          "Run `format c:` to wipe temporary files.",
          "Run `netstat -ano` to list listening web ports."
        ],
        correctIndex: 1,
        explanation: "`ipconfig /all` tells you if the PC received a valid IP from DHCP. If the IP starts with `169.254.x.x` (APIPA), the PC failed to reach the DHCP server! If it has a valid IP like `192.168.1.45`, verify that the Default Gateway and DNS IPs match the room's network subnet."
      },
      {
        stepNum: 3,
        title: "Step 3: Test Local TCP/IP Protocol Stack",
        instruction: "The PC has a static IP configured. You want to test if the workstation's own internal network card and software protocol stack are functioning. What do you ping?",
        options: [
          "Ping `192.168.1.1` (Gateway).",
          "Ping `127.0.0.1` (or `ping localhost`) — the internal loopback address.",
          "Ping `8.8.8.8` (Google public DNS).",
          "Ping `ipindia.gov.in`."
        ],
        correctIndex: 1,
        explanation: "`ping 127.0.0.1` tests the internal loopback adapter. If it responds, the workstation's NIC driver and TCP/IP protocol stack are functioning properly. If loopback fails, the network driver or OS protocol stack is corrupted."
      },
      {
        stepNum: 4,
        title: "Step 4: Test Local LAN Connectivity to Default Gateway",
        instruction: "Loopback succeeds. What is the next logical target to ping to verify local LAN connectivity?",
        options: [
          "Ping the Default Gateway IP (e.g., `ping 192.168.1.1`).",
          "Ping an external website like `ping yahoo.com`.",
          "Ping the root DNS server `198.41.0.4`.",
          "Ping the print server in another city."
        ],
        correctIndex: 0,
        explanation: "Pinging the Default Gateway tests communication between the workstation and the local router interface. If gateway ping SUCCEEDS: Local cabling, switch, and VLAN connectivity are healthy. If gateway ping FAILS: The issue is local (wrong VLAN port, bad switch port, or wrong gateway IP)."
      },
      {
        stepNum: 5,
        title: "Step 5: Test External WAN Routing via Public IP",
        instruction: "Gateway ping succeeds with 1ms latency. Now you want to test whether packets can exit the office out to the internet, bypassing DNS. What do you ping?",
        options: [
          "Ping a known public IP like `ping 8.8.8.8` or `ping 1.1.1.1`.",
          "Ping `google.com` by domain name.",
          "Ping `127.0.0.1` again.",
          "Restart the local switch."
        ],
        correctIndex: 0,
        explanation: "Pinging a raw public IP (like `8.8.8.8`) tests Layer 3 routing out through the firewall and ISP, without relying on DNS name resolution. If `8.8.8.8` responds, WAN routing is operational!"
      },
      {
        stepNum: 6,
        title: "Step 6: Test DNS Name Resolution",
        instruction: "Pinging `8.8.8.8` succeeds, but when the user opens `google.com` or `ipindia.gov.in` in the browser, it displays 'Server IP address could not be found'. What is the exact problem and command to test?",
        options: [
          "The network cable is faulty; replace the cable.",
          "DNS Resolution failure! Test using `nslookup google.com` and run `ipconfig /flushdns`.",
          "The hard drive is full; delete user downloads.",
          "The switch has run out of MAC addresses."
        ],
        correctIndex: 1,
        explanation: "Since raw IP ping works, internet connectivity is UP, but the workstation cannot translate domain names to IP addresses. Test with `nslookup google.com`. If it times out, inspect the configured DNS server IP, test an alternate DNS, and flush the cache with `ipconfig /flushdns`."
      }
    ]
  },
  {
    id: "sc_02",
    title: "Scenario 2: Internet Works, But Internal IP India Portal Fails",
    subtitle: "Internal Network & Name Resolution Triage",
    context: "A user can browse public websites (like Google or PIB) without issue, but cannot open the internal patent docket portal `http://portal.ipindia.gov.in`.",
    steps: [
      {
        stepNum: 1,
        title: "Step 1: Check Scope & Other Users",
        instruction: "What should you check first before altering any workstation settings?",
        options: [
          "Immediately reboot the internal portal web server.",
          "Check if other users in the same department or adjacent rooms can access the portal.",
          "Format the user's hard drive.",
          "Call the Internet Service Provider (ISP) to report an outage."
        ],
        correctIndex: 1,
        explanation: "Always determine scope first! If EVERYONE cannot access the portal, the server, service, or central internal switch is down. If ONLY THIS USER cannot access it, the issue is local to this workstation's DNS, proxy, or route."
      },
      {
        stepNum: 2,
        title: "Step 2: Check DNS Resolution vs IP Reachability",
        instruction: "Other users CAN access the portal. You test `nslookup portal.ipindia.gov.in` on the problematic PC. What are you looking for?",
        options: [
          "Verify whether the internal DNS server resolves `portal.ipindia.gov.in` to the correct internal IP (e.g., `10.10.2.15`).",
          "Check how many RAM gigabytes the server has.",
          "Check if the user has installed Spotify.",
          "Count how many emails the user received."
        ],
        correctIndex: 0,
        explanation: "If the PC is mistakenly pointing to an external public DNS (like `8.8.8.8` or `1.1.1.1`), the public DNS will NOT know the internal private domain name `portal.ipindia.gov.in`! The PC must use the internal office DNS server."
      },
      {
        stepNum: 3,
        title: "Step 3: Check Browser Proxy Settings & Exceptions",
        instruction: "DNS resolves correctly to `10.10.2.15`, but the browser displays 'Proxy server refusing connections' or 504 Gateway Timeout. What do you inspect?",
        options: [
          "Check Windows Proxy Settings (`inetcpl.cpl` -> Connections -> LAN settings) to ensure internal domains (`*.ipindia.gov.in` or `10.*`) bypass the proxy.",
          "Replace the graphics card.",
          "Reinstall the operating system.",
          "Upgrade the CPU speed."
        ],
        correctIndex: 0,
        explanation: "In government enterprise environments, internet traffic goes through a proxy server. If the proxy configuration does not have an exception (Bypass proxy for local addresses), the browser will send requests for internal portals to the external proxy, which fails to reach internal private subnets."
      }
    ]
  },
  {
    id: "sc_03",
    title: "Scenario 3: Entire Floor or Multiple PCs Disconnect Simultaneously",
    subtitle: "High-Impact Infrastructure Incident Triage",
    context: "At 11:30 AM, multiple calls come in from the 2nd floor: 25 workstations across multiple rooms have all lost network connectivity at the same time.",
    steps: [
      {
        stepNum: 1,
        title: "Step 1: Identify Common Single Point of Failure",
        instruction: "Since 25 workstations failed simultaneously, what is the most logical cause?",
        options: [
          "All 25 network cables were severed by mice simultaneously.",
          "All 25 users accidentally clicked Airplane mode at the exact same second.",
          "A shared infrastructure component failed: 2nd floor access switch power/hardware fault, uplink cable to core switch, or floor distribution switch.",
          "Google's global servers shut down."
        ],
        correctIndex: 2,
        explanation: "When multiple users drop at once, suspect a common dependency: The floor access switch (power outage, blown fuse, hardware lockup), the fiber/copper uplink cable connecting the floor switch to the core server room, or the floor's distribution switch."
      },
      {
        stepNum: 2,
        title: "Step 2: Physical Inspection of Floor Network Rack",
        instruction: "You walk to the 2nd floor server/network rack. What do you immediately inspect?",
        options: [
          "Check if the rack UPS and switch power LEDs are green, check for amber/red fault lights, and verify the uplink port LED activity to the core rack.",
          "Unscrew all switch screws and dismantle the circuit board.",
          "Cut all cables with scissors to replace them.",
          "Turn off building main power."
        ],
        correctIndex: 0,
        explanation: "Inspect power status (did the rack PDU trip?), look at the status LEDs on the switch, and inspect the uplink port (SFP transceiver / fiber patch). If the switch is completely unpowered, check the rack power strip. If the uplink LED is unlit, test the uplink cable or check the core switch port."
      },
      {
        stepNum: 3,
        title: "Step 3: Verification of DHCP Scope Exhaustion",
        instruction: "Switch LEDs are green, but users report they have yellow exclamation marks on their network icons. You run `ipconfig` on a PC and see `169.254.x.x`. What is a likely DHCP cause?",
        options: [
          "The DHCP scope has run out of available IP addresses (100% pool exhaustion).",
          "The keyboard is unplugged.",
          "The computer screen brightness is too low.",
          "The mouse battery is dead."
        ],
        correctIndex: 0,
        explanation: "If the DHCP pool has exhausted all available IP addresses (e.g., /24 pool of 254 addresses fully allocated due to visiting laptops, mobile devices, or stale leases), new and renewing workstations cannot get an IP and fall back to APIPA (169.254.x.x). Action: Check DHCP server console, clear inactive leases, or expand scope."
      }
    ]
  },
  {
    id: "sc_04",
    title: "Scenario 4: Suspicious Login Attempts in Event Viewer",
    subtitle: "Cybersecurity Triage & Incident Handling",
    context: "During routine log inspection or after a user report, you notice hundreds of failed logon events occurring within minutes on an internal administration workstation.",
    steps: [
      {
        stepNum: 1,
        title: "Step 1: Event Log Verification",
        instruction: "Which Windows Event ID confirms failed logon attempts?",
        options: [
          "Event ID 4625 (An account failed to log on).",
          "Event ID 4624 (An account was successfully logged on).",
          "Event ID 7036 (Service entered running state).",
          "Event ID 1000 (Application crash)."
        ],
        correctIndex: 0,
        explanation: "Windows Event ID 4625 specifically logs failed logons. Inspect the event details: Check the 'Account Name' targeted, the 'Workstation Name', and crucially the 'Source Network Address' (Caller IP) to see where the login attempts are originating from."
      },
      {
        stepNum: 2,
        title: "Step 2: Immediate Containment Action",
        instruction: "You see continuous failed attempts followed by one successful login (Event ID 4624) from an unrecognized internal IP at 2:00 AM. What is your immediate containment action?",
        options: [
          "Delete the event logs to clean up space.",
          "Power off the PC immediately using the physical wall switch.",
          "Disconnect the workstation from the network (unplug network cable / disable Wi-Fi) to isolate it from lateral movement, keeping system power ON to preserve RAM.",
          "Send an email to the attacker asking them to stop."
        ],
        correctIndex: 2,
        explanation: "Disconnect the network cable to immediately stop data exfiltration or lateral movement. Do NOT power off or reboot the machine, because volatile forensic artifacts stored in RAM (running processes, active network connections, injected malware code) will be permanently lost."
      },
      {
        stepNum: 3,
        title: "Step 3: Escalation and Documentation",
        instruction: "With the machine isolated, what must you do next in a government IT environment?",
        options: [
          "Keep it a secret so nobody finds out.",
          "Document timestamped observations, capture log excerpts, and immediately escalate to the Head of IT / Security Lead according to the official Incident Response protocol.",
          "Post about it on public social media forums.",
          "Format the machine immediately without saving logs."
        ],
        correctIndex: 1,
        explanation: "Document all findings: affected account, source IP, timestamps, and actions taken. Escalate immediately through official channels. Preserve all logs for forensics. Never tamper with evidence."
      }
    ]
  },
  {
    id: "sc_05",
    title: "Scenario 5: Unusually Slow Network & Latency Spikes",
    subtitle: "Bandwidth & Performance Bottleneck Triage",
    context: "Users report that opening files from the local server and loading internal dockets has become extremely sluggish throughout the morning.",
    steps: [
      {
        stepNum: 1,
        title: "Step 1: Pinpoint Scope & Hop Latency with ping and tracert",
        instruction: "How do you determine WHERE the latency is being introduced?",
        options: [
          "Run continuous pings (`ping -t <gateway_ip>`) to the local gateway, and simultaneously run `tracert` to the destination server to observe round-trip times at each hop.",
          "Reboot the building's main electrical generator.",
          "Replace all computer monitors.",
          "Check the weather forecast."
        ],
        correctIndex: 0,
        explanation: "Continuous ping to local gateway (`ping -t 192.168.1.1`): If local gateway RTT is high (>100ms) or dropping packets, the issue is on the local LAN/switch. If gateway RTT is 1ms but server RTT is high, the bottleneck is on an intermediate link or the server itself."
      },
      {
        stepNum: 2,
        title: "Step 2: Check for Duplex Mismatch or Link Errors",
        instruction: "What common physical layer issue causes high packet loss, slow speeds, and retransmissions on a switch port?",
        options: [
          "Duplex Mismatch (e.g., Switch port hardcoded to Full-Duplex while client auto-negotiates to Half-Duplex), resulting in late collisions.",
          "The PC color theme is set to dark mode.",
          "The room ceiling lights are fluorescent.",
          "The keyboard cord is coiled."
        ],
        correctIndex: 0,
        explanation: "A Duplex Mismatch occurs when one side operates at Half-Duplex and the other at Full-Duplex. The half-duplex side experiences massive collisions and drops packets under load. Inspect switch interface statistics for CRC errors and collision counters."
      }
    ]
  }
];

// =========================================================================
// MUST-KNOW READINESS CHECKLIST FOR TOMORROW (15 Critical Checkpoints)
// =========================================================================
const cgpdtmChecklist = [
  { id: "chk_01", text: "Explain all 7 OSI layers and describe top-down vs bottom-up troubleshooting.", category: "Networking" },
  { id: "chk_02", text: "Compare Router vs Switch vs Hub in terms of collision and broadcast domains.", category: "Networking" },
  { id: "chk_03", text: "Explain TCP vs UDP, the 3-Way Handshake (SYN, SYN-ACK, ACK), and when each is used.", category: "Networking" },
  { id: "chk_04", text: "Identify RFC 1918 Private IPv4 ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16).", category: "IP & Ports" },
  { id: "chk_05", text: "Explain what an APIPA address (169.254.x.x) signifies and how to troubleshoot it.", category: "IP & Ports" },
  { id: "chk_06", text: "Walk through the 4-step DHCP DORA process and port numbers (UDP 67/68).", category: "IP & Ports" },
  { id: "chk_07", text: "Explain DNS resolution from Root (.) -> TLD (.in) -> Authoritative name server.", category: "IP & Ports" },
  { id: "chk_08", text: "Rapid recall of top ports: 80 (HTTP), 443 (HTTPS), 53 (DNS), 22 (SSH), 23 (Telnet), 3389 (RDP).", category: "IP & Ports" },
  { id: "chk_09", text: "Explain how to diagnose a 'no internet' problem step by step (Physical -> IP -> Gateway -> DNS).", category: "Troubleshooting" },
  { id: "chk_10", text: "Explain why ping might fail to a web server even though the website works normally in a browser.", category: "Troubleshooting" },
  { id: "chk_11", text: "Recall core CLI commands: ipconfig /all, ping, tracert, nslookup, netstat -ano, and Linux ss -tuln.", category: "Commands" },
  { id: "chk_12", text: "Distinguish between IDS (passive detection/alert) and IPS (active inline blocking).", category: "Cybersecurity" },
  { id: "chk_13", text: "Explain the CIA Triad with examples relevant to patent and trademark confidentiality.", category: "Cybersecurity" },
  { id: "chk_14", text: "Prepare 60-second verbal answer for: 'Introduce yourself and your background.'", category: "Behavioral" },
  { id: "chk_15", text: "Prepare professional response on handling unauthorized change requests and patent document confidentiality.", category: "Behavioral" }
];

// =========================================================================
// CRAMMING CHEATSHEET TABLES
// =========================================================================
const cgpdtmCheatSheets = {
  ports: [
    { port: "20, 21", protocol: "TCP", service: "FTP (File Transfer Protocol)", notes: "Port 21 for Control/commands, Port 20 for Data transfer." },
    { port: "22", protocol: "TCP", service: "SSH (Secure Shell)", notes: "Encrypted remote terminal, replaces insecure Telnet." },
    { port: "23", protocol: "TCP", service: "Telnet", notes: "Cleartext remote terminal (INSECURE - Banned in secure networks)." },
    { port: "25", protocol: "TCP", service: "SMTP (Simple Mail Transfer)", notes: "Server-to-server email delivery (Port 587 for authenticated submission)." },
    { port: "53", protocol: "UDP & TCP", service: "DNS (Domain Name System)", notes: "UDP for standard queries (<512B); TCP for zone transfers and large responses." },
    { port: "67, 68", protocol: "UDP", service: "DHCP (Dynamic Host Config)", notes: "Port 67 = DHCP Server; Port 68 = DHCP Client." },
    { port: "80", protocol: "TCP", service: "HTTP (Hypertext Transfer)", notes: "Unencrypted web traffic." },
    { port: "123", protocol: "UDP", service: "NTP (Network Time Protocol)", notes: "Clock synchronization across network devices." },
    { port: "161, 162", protocol: "UDP", service: "SNMP (Simple Network Mgmt)", notes: "Network monitoring and telemetry alerts." },
    { port: "443", protocol: "TCP", service: "HTTPS (HTTP Secure / TLS)", notes: "Encrypted web browsing with SSL/TLS." },
    { port: "3389", protocol: "TCP / UDP", service: "RDP (Remote Desktop)", notes: "Microsoft Remote Desktop connection." }
  ],
  commands: [
    { win: "ipconfig /all", linux: "ip addr (or ip a)", purpose: "View complete IP address, subnet mask, MAC address, and DNS servers." },
    { win: "route print", linux: "ip route", purpose: "View local routing table and default gateway." },
    { win: "ping -t <host>", linux: "ping <host>", purpose: "Continuous test of network reachability and latency via ICMP." },
    { win: "tracert <host>", linux: "traceroute <host>", purpose: "Trace every router hop to destination using TTL expiration." },
    { win: "nslookup <domain>", linux: "dig <domain> (or nslookup)", purpose: "Query DNS server to test domain name resolution." },
    { win: "netstat -ano", linux: "ss -tuln", purpose: "Display active connections, listening ports, and associated Process IDs (PID)." },
    { win: "arp -a", linux: "ip neigh (or arp -a)", purpose: "Display local Layer 2 ARP cache (IP-to-MAC mappings)." },
    { win: "ipconfig /flushdns", linux: "resolvectl flush-caches", purpose: "Clear local DNS resolver cache to force fresh lookups." },
    { win: "Test-NetConnection -Port <p>", linux: "nc -zv <host> <p>", purpose: "Test if a specific TCP port is open and accepting connections." }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.cgpdtmModules = cgpdtmModules;
  window.cgpdtmScenarios = cgpdtmScenarios;
  window.cgpdtmChecklist = cgpdtmChecklist;
  window.cgpdtmCheatSheets = cgpdtmCheatSheets;
}
