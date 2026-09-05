export interface Project {
  id: string;
  number: string;
  name: string;
  subtitle?: string;
  timeline: string;
  domain: string;
  technologies: string[];
  description: string;
  problem: string;
  solution: string;
  outcomes: string[];
  architecture: {
    nodes: { id: string; label: string; role: string; type?: 'input' | 'process' | 'engine' | 'storage' | 'output' }[];
    connections: { from: string; to: string }[];
  };
  githubUrl: string;
  status?: 'Featured' | 'Supporting';
  featured?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: 'System Security' | 'Software Engineering' | 'Enterprise Apps' | 'Networking' | 'Databases' | 'Cybersecurity';
}

export interface Competition {
  title: string;
  organizer: string;
  type: string;
  highlights: string[];
}

export interface Leadership {
  title: string;
  role: string;
  organization: string;
  skills: string[];
}

export interface Education {
  year: string;
  degree: string;
  institution: string;
  grade: string;
}

export const RESUME_DATA = {
  personal: {
    fullName: "JAYAVARAM LAKSHMI RANGA KAVITHA SREE",
    shortName: "KAVITHA SREE",
    headline: "CYBERSECURITY × AI × SOFTWARE ENGINEERING",
    tagline: "I build security-focused software systems across threat detection, intelligent automation, and backend engineering.",
    tags: ["Python", "Cybersecurity", "Linux", "Machine Learning", "Full-Stack Development"],
    email: "lj6237@srmist.edu.in",
    statusProfile: {
      role: "Cybersecurity / Software Engineering",
      focus: "Secure Systems • Threat Detection • Software Development",
      primaryStack: "Python • Java • C/C++ • Linux",
      currentStatus: "Building → Learning → Engineering"
    },
    socialLinks: {
      linkedin: "",
      github: "https://github.com/kavithasreejayavaram",
      leetcode: "",
      codechef: "",
      hackerrank: ""
    }
  },
  
  about: {
    story: "I am a Computer Science and Engineering student specializing in Cyber Security, building practical software at the intersection of security engineering, AI/ML, and backend development. My work spans Linux, networking, packet analysis, secure APIs, and data-driven threat detection.",
    currentDegree: "B.Tech in Computer Science and Engineering — Cyber Security",
    institution: "SRM Institute of Science and Technology",
    gradYear: "2027",
    cgpa: "8.53 / 10"
  },

  skills: {
    programming: ["Python", "C", "Java", "C++"],
    cybersecurity: [
      "Cybersecurity Fundamentals",
      "Threat Analysis",
      "Vulnerability Assessment",
      "Cyber Forensics",
      "System Security",
      "Networking"
    ],
    development: [
      "FastAPI",
      "Flask",
      "React",
      "Vite",
      "Tailwind CSS",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    dataAndDb: [
      "MySQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Data Cleaning",
      "Data Visualization"
    ],
    systemsAndTools: [
      "Linux",
      "GitHub",
      "Firebase",
      "Git"
    ],
    relationshipMap: [
      {
        root: "PYTHON",
        children: ["Flask", "FastAPI", "Scapy", "Pandas", "NumPy", "Scikit-learn"],
        description: "Primary language powering cybersecurity packet analysis, ML threat detection, and RESTful APIs."
      },
      {
        root: "CYBERSECURITY & LINUX",
        children: ["Threat Analysis", "Vulnerability Assessment", "System Security", "Networking", "Cyber Forensics", "RHCSA"],
        description: "Core security focus on OS administration, packet inspection, and vulnerability identification."
      },
      {
        root: "FULL-STACK & DATABASE",
        children: ["React", "FastAPI", "Flask", "PHP", "MySQL", "Firebase", "Tailwind CSS"],
        description: "Building responsive, secure backend services, database operations, and modern frontend interfaces."
      }
    ]
  },

  projects: [
    {
      id: "wireless-intrusion-detection",
      number: "01",
      name: "Wireless Intrusion Detection",
      timeline: "February 2026 – May 2026",
      domain: "Cybersecurity + Machine Learning",
      technologies: ["Python", "Flask", "Scapy", "Pandas", "NumPy", "Scikit-learn"],
      description: "Developed a Python-based Wireless Intrusion Detection System using rule-based detection and machine learning to identify Wi-Fi attacks through a Flask dashboard.",
      problem: "Wireless Wi-Fi networks are vulnerable to rogue APs, deauthentication attacks, and packet injection that traditional perimeter firewalls often fail to detect in real-time.",
      solution: "Engineered a live packet sniffing and inspection engine using Python and Scapy, extracted network feature vectors using Pandas and NumPy, applied dual-layer classification (rule engine + trained Scikit-learn ML model), and rendered real-time threat intelligence on a clean Flask web dashboard.",
      outcomes: [
        "Constructed custom Scapy packet processing pipeline for 802.11 frames",
        "Implemented hybrid threat classification combining rule-based heuristics and machine learning algorithms",
        "Visualized active threats, packet metrics, and detection events on an intuitive Flask dashboard interface"
      ],
      architecture: {
        nodes: [
          { id: "net", label: "WIRELESS TRAFFIC", role: "Captures ambient 802.11 wireless network frames.", type: "input" },
          { id: "cap", label: "PACKET CAPTURE", role: "Raw frame ingestion & interface listening.", type: "process" },
          { id: "scapy", label: "SCAPY", role: "Parses headers, frame subtypes & payload data.", type: "process" },
          { id: "feat", label: "FEATURE EXTRACTION", role: "Transforms packet statistics into feature vectors via Pandas/NumPy.", type: "process" },
          { id: "rule", label: "RULE ENGINE", role: "Checks known signatures & protocol anomaly rules.", type: "engine" },
          { id: "ml", label: "ML MODEL", role: "Evaluates Scikit-learn model for complex anomaly patterns.", type: "engine" },
          { id: "analysis", label: "THREAT ANALYSIS", role: "Aggregates rule and ML verdicts to determine risk score.", type: "process" },
          { id: "dash", label: "FLASK DASHBOARD", role: "Live monitoring console rendering alerts & metrics.", type: "output" }
        ],
        connections: [
          { from: "net", to: "cap" },
          { from: "cap", to: "scapy" },
          { from: "scapy", to: "feat" },
          { from: "feat", to: "rule" },
          { from: "feat", to: "ml" },
          { from: "rule", to: "analysis" },
          { from: "ml", to: "analysis" },
          { from: "analysis", to: "dash" }
        ]
      },
      githubUrl: "",
      status: "Featured",
      featured: true
    },
    {
      id: "expense-tracker",
      number: "02",
      name: "Expense Tracker",
      subtitle: "Full-Stack Financial Management Application",
      timeline: "February 2026 – May 2026",
      domain: "Web Development",
      technologies: ["Python", "FastAPI", "React (Vite)", "Tailwind CSS", "MySQL"],
      description: "Developed a full-stack expense tracking application using FastAPI, React, and MySQL to enable secure user authentication, expense management, and real-time financial tracking through a responsive web interface.",
      problem: "Users require a fast, modern platform to log expenses, categorize spending, and maintain data security without server overhead or sluggish database synchronization.",
      solution: "Designed a modular decoupled architecture featuring a Vite React frontend with Tailwind CSS styled components, backed by high-performance FastAPI async routes, token-based authentication, and normalized MySQL relational schema.",
      outcomes: [
        "Architected scalable REST endpoints with FastAPI and Pydantic schema validation",
        "Built responsive client interface in React + Tailwind CSS with dynamic spending charts",
        "Ensured secure user authentication and data persistence with MySQL"
      ],
      architecture: {
        nodes: [
          { id: "react", label: "REACT (VITE)", role: "Interactive frontend interface built with Tailwind CSS.", type: "input" },
          { id: "fastapi", label: "FASTAPI", role: "High-performance Python backend API framework.", type: "process" },
          { id: "auth", label: "AUTHENTICATION", role: "Handles token verification & secure route access.", type: "engine" },
          { id: "logic", label: "BUSINESS LOGIC", role: "Calculates totals, category splits & summary metrics.", type: "process" },
          { id: "mysql", label: "MYSQL", role: "Relational database persisting users, expenses & categories.", type: "storage" }
        ],
        connections: [
          { from: "react", to: "fastapi" },
          { from: "fastapi", to: "auth" },
          { from: "auth", to: "logic" },
          { from: "logic", to: "mysql" }
        ]
      },
      githubUrl: "",
      status: "Supporting"
    },
    {
      id: "garage-guru",
      number: "03",
      name: "Garage Guru",
      subtitle: "Mechanic Shop Management Application",
      timeline: "August 2024 – November 2024",
      domain: "Mobile Application Development",
      technologies: ["Java", "Firebase", "Android", "HTML", "CSS"],
      description: "Built a role-based mechanic shop management application using Java and Firebase to automate attendance, payroll, inventory management, and real-time data synchronization.",
      problem: "Automotive repair shops often struggle with paper-based worker logs, untracked replacement parts inventory, and error-prone weekly payroll calculations.",
      solution: "Engineered an Android mobile application utilizing Java and Firebase Realtime Database with strict role-based access control (Admin vs Mechanic), streamlining daily check-ins, automated salary calculations, and live stock tracking.",
      outcomes: [
        "Implemented role-based permissions separating shop owners from technician views",
        "Automated attendance-based payroll calculation logic",
        "Integrated Firebase real-time data sync for instant inventory updates across shop devices"
      ],
      architecture: {
        nodes: [
          { id: "admin", label: "ADMIN / USER", role: "Shop manager or technician mobile interface.", type: "input" },
          { id: "rbac", label: "ROLE-BASED ACCESS", role: "Enforces view permissions & authorization limits.", type: "engine" },
          { id: "modules", label: "ATTENDANCE / PAYROLL / INVENTORY", role: "Core shop operations management logic.", type: "process" },
          { id: "firebase", label: "FIREBASE", role: "Cloud database providing real-time data synchronization.", type: "storage" }
        ],
        connections: [
          { from: "admin", to: "rbac" },
          { from: "rbac", to: "modules" },
          { from: "modules", to: "firebase" }
        ]
      },
      githubUrl: "",
      status: "Supporting"
    },
    {
      id: "routemate",
      number: "04",
      name: "RouteMate",
      subtitle: "Online Bus Reservation System",
      timeline: "February 2025 – May 2025",
      domain: "Web Application & Database Systems",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      description: "Developed a web-based bus reservation system enabling real-time seat booking, route management, fare calculation, and administrative operations.",
      problem: "Intercity transit passengers and operators need a reliable web portal for seat selection, ticket booking, fare calculation, and route schedule management.",
      solution: "Created a full web application combining responsive HTML/CSS/JS frontend forms with server-side PHP query processing and MySQL transaction management for seat availability and ticketing.",
      outcomes: [
        "Designed relational database tables for routes, buses, passenger schedules, and bookings",
        "Developed server-side PHP scripts for dynamic seat availability checking",
        "Built administrative controls for adding bus routes, managing departure times, and updating fares"
      ],
      architecture: {
        nodes: [
          { id: "user", label: "USER / PASSENGER", role: "Web interface for browsing routes & selecting seats.", type: "input" },
          { id: "web", label: "WEB INTERFACE", role: "HTML5, CSS3 & JavaScript dynamic seat picker.", type: "process" },
          { id: "php", label: "PHP BACKEND", role: "Server-side transaction & query engine.", type: "process" },
          { id: "mysql", label: "MYSQL DATABASE", role: "Stores bus schedules, seat states, & booking records.", type: "storage" },
          { id: "ops", label: "BOOKING / ROUTES / FARES", role: "Core transactional outputs & ticket generation.", type: "output" }
        ],
        connections: [
          { from: "user", to: "web" },
          { from: "web", to: "php" },
          { from: "php", to: "mysql" },
          { from: "mysql", to: "ops" }
        ]
      },
      githubUrl: "",
      status: "Supporting"
    }
  ] as Project[],

  securityLab: [
    {
      id: "net-sec",
      title: "NETWORK SECURITY",
      icon: "Network",
      focusAreas: ["Networking", "Wireless Security", "Packet Analysis"],
      details: "Inspection of network communications, 802.11 wireless frame decoding, protocol breakdown, and traffic pattern monitoring to detect eavesdropping and unauthorized access.",
      tools: ["Scapy", "Wireshark", "Packet Sniffing", "Socket API"],
      connectedProject: "Wireless Intrusion Detection",
      flow: [
        "Network Interface Listening",
        "802.11 Frame Parsing",
        "Header & Beacon Analysis",
        "Anomaly Detection"
      ]
    },
    {
      id: "sys-sec",
      title: "SYSTEM SECURITY",
      icon: "ShieldAlert",
      focusAreas: ["Linux", "System Security", "RHCSA"],
      details: "Operating system hardening, Linux user permission management, service isolation, process auditing, and storage file system management backed by RHCSA training.",
      tools: ["Linux / Bash", "RHCSA System Admin", "Permission Control", "Systemd Services"],
      connectedProject: "Wireless Intrusion Detection & System Labs",
      flow: [
        "Kernel / System Audit",
        "User Permission Isolation",
        "Service & Firewall Hardening",
        "Log Verification"
      ]
    },
    {
      id: "threat-det",
      title: "THREAT DETECTION",
      icon: "Radar",
      focusAreas: ["Intrusion Detection", "Rule-Based Detection", "Machine Learning"],
      details: "Developing automated threat detection routines combining deterministic rule sets with supervised machine learning classifiers to spot zero-day anomalies.",
      tools: ["Python", "Scikit-learn", "Pandas / NumPy", "Feature Engineering"],
      connectedProject: "Wireless Intrusion Detection",
      flow: [
        "Raw Signal / Log Input",
        "Feature Vector Extraction",
        "Rule Heuristic Evaluation",
        "ML Classifier Scoring"
      ]
    },
    {
      id: "sec-dev",
      title: "SECURE DEVELOPMENT",
      icon: "Code2",
      focusAreas: ["Authentication", "APIs", "Database Systems", "Application Security"],
      details: "Building backend REST services, token authentication, secure input sanitization, dynamic database querying, and role-based access control.",
      tools: ["FastAPI", "Flask", "React", "MySQL / Firebase"],
      connectedProject: "Expense Tracker & RouteMate & Garage Guru",
      flow: [
        "Client Interface Input",
        "API Schema Validation",
        "Auth Token & RBAC Check",
        "Sanitized Database Query"
      ]
    }
  ],

  certifications: [
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      date: "October 2024",
      category: "System Security"
    },
    {
      title: "NPTEL: Programming in Java",
      issuer: "Ministry of Education / NPTEL",
      date: "October 2024",
      category: "Software Engineering"
    },
    {
      title: "Extending SAP S/4HANA with SAP Build Apps and Key User Extensibility",
      issuer: "SAP",
      date: "April 2025",
      category: "Enterprise Apps"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "July 2025",
      category: "Networking"
    },
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      date: "December 2025",
      category: "Databases"
    },
    {
      title: "Cybersecurity 3.0",
      issuer: "Fortinet Training Institute",
      date: "January 2026",
      category: "Cybersecurity"
    }
  ] as Certification[],

  competitions: [
    {
      title: "Hack Fusion 2024",
      organizer: "NIT Jamshedpur",
      type: "National-level Hackathon",
      highlights: [
        "Collaborated in a time-bound engineering sprint to formulate and build functional solutions",
        "Demonstrated technical problem-solving, rapid prototyping, and peer code integration"
      ]
    },
    {
      title: "IDEATHON 4.0",
      organizer: "SRM Institute of Science and Technology",
      type: "Innovation & Pitching Competition",
      highlights: [
        "Developed and pitched technological concepts addressing real-world operational challenges",
        "Engaged in rapid idea iteration, technical architecture planning, and presentation"
      ]
    }
  ] as Competition[],

  leadership: [
    {
      title: "Aaruush '25",
      role: "Committee Head",
      organization: "SRM Institute of Science and Technology",
      skills: ["Leadership", "Team Coordination", "Event Management", "Organization"]
    }
  ] as Leadership[],

  volunteering: [
    "Sri Vasavi Old Age Home",
    "Directorate of Hostels, SRM Institute of Science and Technology"
  ],

  education: [
    {
      year: "2027",
      degree: "B.Tech in Computer Science and Engineering — Cyber Security",
      institution: "SRM Institute of Science and Technology",
      grade: "CGPA: 8.53 / 10"
    },
    {
      year: "2023",
      degree: "Class XII (Senior Secondary)",
      institution: "Rao's Junior College",
      grade: "92.5%"
    },
    {
      year: "2021",
      degree: "Class X (Secondary School)",
      institution: "Sri Chaitanya EM High School",
      grade: "98%"
    }
  ] as Education[]
};
