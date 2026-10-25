# CGPDTM, Dwarka — Networking & Cybersecurity Interview Guide

> **Status:** Preparation briefing based on publicly available organization information and likely entry-level IT responsibilities. The specific designation, duties, employment terms and interview syllabus have **not** been independently confirmed.

## 1. Organization overview

**Office:** Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM)  
**Building:** Boudhik Sampada Bhawan  
**Address:** Plot No. 32, Sector 14, Dwarka, New Delhi – 110078  
**Department:** Department for Promotion of Industry and Internal Trade (DPIIT)  
**Ministry:** Ministry of Commerce & Industry, Government of India  
**Website:** https://ipindia.gov.in/

The office oversees functions associated with intellectual property, including patents, trademarks, copyright and semiconductor integrated circuit layout designs. Its official directory identifies an IT and Finance head, confirming an organizational IT function. This does **not**, by itself, confirm any specific networking vacancy.

Official references:

- Organization and personnel directory: https://ipindia.gov.in/who-is-who
- Office contact and location: https://ipindia.gov.in/contact-us
- Recruitment, internship and contractual categories: https://ipindia.gov.in/career

## 2. Opportunity overview and assumptions

| Field | Assessment |
|---|---|
| Work location | Intellectual Property Office, Dwarka Sector 14 |
| Broad technical area | Computer networking |
| Possible related area | Network security / cybersecurity |
| Approximate duration | Six months (to be confirmed formally) |
| Current stage | Interview |
| Exact job designation | Unconfirmed |
| Employment category | Could be fixed-term training, contractual technical support, or third-party IT staffing |
| Work model | Likely on-site, but unconfirmed |

**Interpretation:** The broad term *networking* most likely relates to maintenance, monitoring and troubleshooting of computers and network infrastructure. It does not establish that the post is a dedicated cybersecurity analyst position. The exact position must be clarified during the interview.

### Plausible roles

1. **Network Support Engineer / Trainee — highly plausible:** Office LAN, routers, switches, connectivity, endpoint configuration and incident tickets.
2. **IT Infrastructure / System Support — highly plausible:** Workstations, Windows/Linux, accounts, internal applications, printers and servers.
3. **Network Security Support / Trainee — plausible:** Firewall policies, access controls, network monitoring, logging and incident escalation.

These are qualitative assumptions, **not verified vacancy titles or statistical probabilities**.

## 3. Potential day-to-day responsibilities

| Area | Example activities | Supporting knowledge |
|---|---|---|
| Connectivity | Diagnose workstation connection failures | Ethernet, TCP/IP, DHCP |
| LAN support | Investigate switch ports and cabling | Switching, VLANs |
| IP configuration | Check addresses, gateways and DNS settings | IPv4, DNS, subnetting |
| Server access | Troubleshoot access to internal systems | Routing, name resolution |
| User support | Help with approved accounts and shared resources | Windows, directory services |
| Security operations | Observe alerts and escalate suspicious activity | Firewalls, IDS/IPS, logs |
| System hygiene | Assist with approved patching and routine checks | Windows/Linux basics |
| Documentation | Record issues, changes and resolutions | Troubleshooting discipline |

### Example workflow: An internal portal is inaccessible

1. Confirm what fails and whether other users are affected.
2. Inspect the workstation's physical or wireless connection.
3. Check IP address, subnet, DNS server and default gateway.
4. Test reachability to the gateway and an approved internal address.
5. Verify DNS resolution and the internal service's availability.
6. Check approved proxy/firewall information and available logs.
7. Escalate to the responsible administrator if needed.
8. Record the findings and any authorized resolution.

## 4. Interview syllabus — recommended study priorities

This is a **proposed study syllabus, not an official recruitment syllabus**.

| Priority | Topic | What to know |
|---|---|---|
| Essential | Networking fundamentals | LAN/WAN, OSI, TCP/IP, routers, switches, TCP vs UDP |
| Essential | IP addressing | IPv4, masks, CIDR, private/public IP, gateways, NAT |
| Essential | Network services | DNS, DHCP, ARP, HTTP/HTTPS, ports |
| Very high | Troubleshooting | Ping, IP configuration, traceroute, DNS diagnosis |
| Very high | Network security | Firewalls, VPNs, IDS/IPS, segmentation, logging |
| High | Cybersecurity principles | CIA triad, access control, vulnerabilities, incidents |
| High | Systems | Windows/Linux fundamentals, user accounts, SSH |
| High | Diagnostic tools | Wireshark, Nmap concepts, system logs |
| Secondary | Advanced infrastructure | Enterprise routing, cloud networking, advanced VLAN design |

## 5. Networking fundamentals — questions and answers

### Q1. What is a computer network?

A group of interconnected devices that exchange data and share services or resources.

### Q2. What is the OSI model?

A seven-layer reference model: **Physical, Data Link, Network, Transport, Session, Presentation, Application**. It helps organize and troubleshoot communication functions.

### Q3. What is the TCP/IP model?

A practical protocol architecture often represented by **Link, Internet, Transport and Application** layers. IP provides addressing/routing; transport protocols include TCP and UDP.

### Q4. TCP vs UDP?

**TCP** is connection-oriented and provides reliable, ordered delivery. **UDP** is connectionless with less protocol overhead but does not guarantee delivery or ordering.

### Q5. Router vs switch?

A **switch** commonly forwards Ethernet frames between devices within a LAN using MAC addresses. A **router** forwards IP packets between different networks.

### Q6. What is a MAC address?

A data-link-layer interface identifier used by technologies such as Ethernet.

### Q7. What is a VLAN?

A **Virtual LAN** logically separates a switched network into distinct broadcast domains, supporting organization and segmentation.

### Q8. LAN vs WAN?

A **LAN** connects devices within a limited location, such as an office. A **WAN** interconnects networks across a larger geographic area.

### Q9. What is a subnet mask?

It specifies which bits of an IPv4 address represent the network portion. CIDR expresses the prefix length, such as `192.168.1.10/24`.

### Q10. What is a default gateway?

Usually the router through which a host sends traffic destined outside its directly connected subnet.

## 6. IP addressing, services and protocols

### Core definitions

- **IPv4:** 32-bit Internet Protocol addressing, commonly shown as four decimal octets.
- **IPv6:** 128-bit Internet Protocol addressing.
- **Private IPv4:** Used within private networks; examples include `10.0.0.0/8`, `172.16.0.0/12` and `192.168.0.0/16`.
- **DHCP:** Automatically provides device network configuration such as IP address, gateway and DNS server.
- **DNS:** Resolves names such as `example.com` into IP addresses.
- **NAT:** Translates network addresses, often used between private and public networks.
- **ARP:** Resolves an IPv4 address to a link-layer MAC address on a local network.

### Common ports

| Service | Default/common port | Notes |
|---|---|---|
| HTTP | 80/TCP | Unencrypted web traffic |
| HTTPS | 443/TCP | Encrypted web traffic; HTTP/3 commonly uses UDP 443 |
| DNS | 53/UDP or TCP | Name resolution |
| DHCPv4 | 67/68 UDP | Server/client |
| SSH | 22/TCP | Secure remote access |
| FTP control | 21/TCP | FTP control channel |
| SMTP | 25/TCP | Server-to-server email delivery |
| RDP | 3389/TCP or UDP | Remote Desktop |

### Q11. What happens when a URL is entered into a browser?

The browser typically resolves the hostname through DNS, connects to the server, negotiates TLS for HTTPS when needed, sends an HTTP request, receives a response and renders the page. Caching and connection reuse can change the exact sequence.

### Q12. Static vs dynamic IP address?

A **static address** is manually configured or consistently assigned; a **dynamic address** is typically leased through DHCP.

### Q13. What if a user can reach an IP address but not a domain name?

This can indicate DNS resolution or DNS configuration trouble. Compare direct IP connectivity with `nslookup` output and verify the configured DNS resolver.

## 7. Cybersecurity and network security

### Fundamental concepts

- **CIA triad:** Confidentiality, Integrity and Availability.
- **Authentication:** Verifying identity.
- **Authorization:** Determining permitted actions after identity is established.
- **Least privilege:** Grant only the permissions necessary for authorized work.
- **Firewall:** Enforces policies that allow, deny or otherwise control traffic.
- **IDS:** Detects suspicious activity and alerts.
- **IPS:** Detects and can actively block selected activity.
- **VPN:** Provides a secure encrypted communication tunnel between endpoints/networks, depending on its configuration.
- **Network segmentation:** Separates systems or traffic into security/operational zones.
- **Vulnerability:** A weakness that could be exploited.
- **Threat:** A potential cause of harm.
- **Risk:** The potential for loss or harm considering threats, vulnerabilities and impact.
- **SIEM:** Collects and correlates security-related events for monitoring and investigation.
- **Incident response:** Detect, triage, contain, eradicate, recover and learn, according to organizational procedures.

### Q14. What is the difference between IDS and IPS?

IDS primarily identifies and reports suspicious activity. IPS is positioned to take prevention actions such as blocking traffic under a configured policy.

### Q15. What is a firewall rule?

A condition that controls traffic according to parameters such as source/destination address, protocol, port and direction. Changes should follow authorization and change-control procedures.

### Q16. What is a VPN used for?

Secure remote access, encrypted communication between offices, or protected connections across untrusted networks.

### Q17. What is a vulnerability assessment?

An authorized process of identifying, validating and prioritizing security weaknesses so they can be remediated.

### Q18. What would you do after seeing suspicious network traffic?

Follow incident-response procedures, document observations, preserve relevant evidence where authorized, and notify the responsible security personnel. Do not scan, intercept, disconnect or alter production systems without authorization.

### Q19. What is phishing?

A social engineering attack using deceptive communications to trick recipients into disclosing information, opening malicious content or taking unsafe actions.

### Q20. What is the difference between encryption and hashing?

**Encryption** is designed to be reversible with the appropriate key. **Cryptographic hashing** produces a fixed-size digest and is not designed to be reversed.

## 8. Operating systems, tools and commands

| Tool / command | Main purpose |
|---|---|
| `ipconfig` (Windows) | Show local network configuration |
| `ipconfig /all` | Show more complete adapter information |
| `ping` | Test reachability with ICMP; filtering can affect results |
| `tracert` (Windows) | Explore the network path to a destination |
| `nslookup` | Query DNS records/resolvers |
| `netstat` | Show socket, connection and related statistics |
| `arp -a` | Show local ARP cache |
| `ip addr` (Linux) | Show interface addresses |
| `ip route` | Show the Linux routing table |
| `ss -tuln` | Show listening TCP/UDP sockets numerically |
| `ssh` | Establish encrypted remote shell sessions |
| Wireshark | Inspect permitted packet captures and protocol behavior |
| Nmap | Authorized network discovery/security auditing |
| Event Viewer | Inspect Windows system/application event logs |

Study also: Windows network settings, network adapters, Windows services, Active Directory concepts, Linux users and permissions, patching, process monitoring and basic SSH hygiene.

### Q21. What is Active Directory?

Microsoft's directory service technology for centrally managing organizational identities, groups, computers and access policies in a Windows domain environment.

### Q22. Why might `ping` fail even if a website works?

The target or an intermediate firewall may block or rate-limit ICMP echo traffic, while HTTP/HTTPS remains reachable.

## 9. Practical scenario questions

### Scenario A — One computer has no internet

1. Check cable, Wi-Fi association and adapter status.
2. View IP, mask, gateway and DNS (`ipconfig /all`).
3. Test loopback/local stack if necessary.
4. Test default gateway connectivity.
5. Test an approved external IP and then DNS resolution.
6. Inspect proxy/VPN/firewall settings as permitted.
7. Document and escalate if necessary.

### Scenario B — Internet works but one internal portal fails

Check name resolution, internal routes, VPN/segmentation requirements, proxy settings, service reachability, certificate errors and whether other users have the same issue.

### Scenario C — Many workstations lose connectivity simultaneously

Suspect a common dependency: switch, uplink, DHCP service, gateway, firewall, shared power or configuration fault. Determine the scope before modifying anything.

### Scenario D — Suspicious login attempts appear in logs

Record time, source and affected account/system; verify log context; report through the incident-response chain; and preserve evidence according to policy. Do not experiment on live systems.

### Scenario E — The network is unusually slow

Establish whether the problem is specific to a device, subnet, service or the entire site. Inspect interface errors, bandwidth/latency, DNS resolution, utilization and sanctioned monitoring data.

## 10. Technical projects: preparing explanations

Projects demonstrating HTTP communication, backend services, network requests, security analysis or infrastructure monitoring may be useful examples.

For each project, prepare a **60–90 second explanation** covering:

1. Problem addressed.
2. Architecture and technology choices.
3. How data or network requests flow.
4. Security concerns and implemented safeguards.
5. Difficulties encountered and how they were resolved.
6. Limitations and possible improvements.

### Project questions to practice

- What security issues does your project detect or prevent?
- How does the client communicate with the server?
- Why did you select the chosen backend framework or database?
- What does an HTTP request and response contain?
- How would you secure authentication and secrets?
- What is the difference between a vulnerability scanner and a firewall?
- How do you avoid false positives?
- What testing was authorized and what was out of scope?

**Important:** An HTTP request library does not discover vulnerabilities automatically. Findings depend on the actual checks implemented. Never exaggerate the scope or reliability of a project.

## 11. General and behavioral interview questions

1. Introduce yourself and summarize your technical interests.
2. Why do you want to work in networking?
3. How does cybersecurity relate to computer networking?
4. What networking or security tools have you personally used?
5. Describe a difficult technical issue you solved.
6. What do you do when you don't know an answer?
7. How would you prioritize multiple support requests?
8. How would you handle confidential information?
9. How would you respond if asked to make an unauthorized configuration change?
10. What technical skills do you hope to improve during the assignment?

**Answering approach:** Be precise, candid about hands-on experience, and structured in troubleshooting. Government-related IT environments may place special importance on confidentiality, change control, documentation and escalation.

## 12. Seven-day interview preparation plan

| Day | Main focus | Activities |
|---|---|---|
| 1 | Networking models and equipment | LAN/WAN, OSI, TCP/IP, routers, switches, TCP/UDP |
| 2 | Addressing and services | IPv4, CIDR, subnet masks, DNS, DHCP, NAT, port numbers |
| 3 | Troubleshooting practice | `ping`, `ipconfig`, `nslookup`, `tracert`, connectivity scenarios |
| 4 | Cybersecurity | CIA triad, firewalls, IDS/IPS, VPN, incidents, least privilege |
| 5 | Systems and diagnostics | Windows/Linux, SSH, logs, Wireshark on permitted sample captures |
| 6 | Project and behavioral answers | Project walkthrough, technical explanation, situational questions |
| 7 | Mock interview and review | Answer 20–30 questions aloud; revisit weak topics |

**Suggested effort:** Approximately three to four hours daily. If time is limited, cover Days 1–4 first and practice troubleshooting aloud.

## 13. Questions to ask the interviewer

- What is the official designation and team?
- Is the work mainly network support, system administration or network security?
- Which operating systems, devices and tools does the team use?
- What would the first month's responsibilities look like?
- Is there structured training or a supervisor?
- What are the escalation and change-approval procedures?
- What is the formal employment/training category?
- What are the working hours, expected duration and extension conditions?
- Is a completion or experience certificate issued?

An assignment at a government office does not automatically imply permanent government employment or government-service benefits. The written appointment terms determine the formal status.

## 14. Longer-term skills and career directions

| Career path | Particularly valuable experience |
|---|---|
| Network Engineer | Switching, routing, VLANs, troubleshooting |
| System Administrator | Windows/Linux, accounts, servers, patching |
| IT Infrastructure Engineer | Networks, endpoints and operational support |
| Network Security Engineer | Segmentation, firewalls, traffic analysis |
| SOC Analyst | Monitoring, alert triage, logs, incident response |
| Cybersecurity Analyst | Vulnerability management and risk prioritization |

The practical value of a short assignment depends on real responsibilities, mentoring, tool access and documented outcomes—not solely on the office's name.

## 15. Final readiness checklist

- [ ] Explain all seven OSI layers and their relevance.
- [ ] Compare router, switch, firewall and access point.
- [ ] Explain TCP/UDP and major protocols.
- [ ] Understand IPv4, private ranges and `/24` notation.
- [ ] Explain DNS, DHCP, NAT and default gateway.
- [ ] Recall common ports and their purposes.
- [ ] Describe the CIA triad and least privilege.
- [ ] Compare IDS/IPS and explain firewall rules.
- [ ] Explain the basic use of a VPN.
- [ ] Troubleshoot a hypothetical no-internet problem step by step.
- [ ] Identify the role of logs and Wireshark.
- [ ] Explain at least one technical project accurately.
- [ ] Prepare honest responses about current skills and limitations.
- [ ] Clarify role title, duties, training and formal appointment conditions.

---

**Bottom line:** For an unconfirmed entry-level networking role with a possible cybersecurity component, the strongest preparation sequence is **TCP/IP and networking fundamentals → IP/DNS/DHCP → troubleshooting → security controls → operating systems and monitoring**. Focus on clear explanations and sensible, authorized diagnostic procedures.
