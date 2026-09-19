import {
  PersonalInfo,
  StatItem,
  SkillCategory,
  ServiceItem,
  ProjectItem,
  TimelineItem,
  ValueCardItem,
  ProcessStepItem,
  TestimonialItem,
  GithubSectionData,
  KorvenzaTechInfo,
  DualPathData
} from '../types/portfolio.ts';

/**
 * =========================================================================
 * SULEMAN KHAN - CENTRAL PORTFOLIO CONFIGURATION DATA
 * =========================================================================
 * This centralized configuration file controls all text, contact links,
 * stats, skills, services, projects, case studies, KorvenzaTech company data,
 * and timeline information. Any updates made here will automatically reflect
 * across the entire site.
 */

export const personalInfo: PersonalInfo = {
  name: "Suleman Khan",
  professionalTitle: "CEO & Founder at KorvenzaTech | Software Engineer | Flutter Developer",
  shortStatement: "I build scalable mobile apps, modern websites, web applications, APIs and complete digital solutions that turn ideas into real products.",
  heroHeadline: "Building Technology. Leading Innovation. Creating Digital Products.",
  heroSupportingText: "Software Engineer and CEO & Founder of KorvenzaTech, focused on building modern software products, mobile applications, websites, web applications and scalable digital solutions.",
  aboutTextParagraphs: [
    "I am Suleman Khan, a Software Engineer, Flutter Developer and CEO & Founder of KorvenzaTech.",
    "With a background in Software Engineering, I work across mobile application development, web development, APIs, Firebase and custom software solutions.",
    "Through KorvenzaTech, I am also focused on turning technology ideas into practical digital products and business solutions.",
    "My approach combines technical development with product thinking, problem solving and business requirements to create software that is useful, scalable and easy to maintain."
  ],
  educationBadge: "BS in Software Engineering",
  location: "Available for Remote & International Engagements",
  availabilityStatus: "Available for KorvenzaTech Ventures, Technical Leadership & Product Builds",
  email: "khansulimankhan13@gmail.com",
  whatsapp: "+923329529097",
  github: "https://github.com/sulemankhan-dev",
  linkedin: "https://linkedin.com/in/sulemankhan-dev",
  fiverr: "https://fiverr.com/sulemankhan_dev",
  resumeDownloadUrl: "#download-cv",
  // Official uploaded portrait of Suleman Khan (CEO & Founder, KorvenzaTech)
  profileImage: "/images/suleman-khan-profile.jpeg",
  profileImageAlt: "Suleman Khan — CEO & Founder at KorvenzaTech and Software Engineer"
};

export const statisticsCards: StatItem[] = [
  {
    id: "stat-ceo",
    value: "CEO & Founder",
    label: "KorvenzaTech",
    category: "Executive Leadership",
    description: "Driving technology direction, digital product strategy, and commercial software solutions.",
    iconName: "Briefcase"
  },
  {
    id: "stat-education",
    value: "BS",
    label: "Software Engineering",
    category: "Formal Foundation",
    description: "Rigorous computer science foundation: OOP, data structures, algorithms, databases, and system design.",
    iconName: "GraduationCap"
  },
  {
    id: "stat-flutter",
    value: "Flutter",
    label: "Mobile Development",
    category: "Cross-Platform Engineering",
    description: "Production-ready Android & iOS applications with fluid UI, clean state management, and native performance.",
    iconName: "Smartphone"
  },
  {
    id: "stat-web",
    value: "Web",
    label: "Web Development",
    category: "Modern Stack & Cloud",
    description: "Responsive web apps, dashboards, business portals, REST APIs, and Firebase cloud integrations.",
    iconName: "Globe"
  }
];

export const korvenzaTechData: KorvenzaTechInfo = {
  companyName: "KorvenzaTech",
  role: "CEO & Founder",
  tagline: "Technology • Software • Digital Solutions",
  shortIntroduction: "KorvenzaTech is a technology-focused company founded to develop modern digital products and software solutions.",
  detailedOverview: "As the CEO & Founder of KorvenzaTech, I focus on combining software engineering, product development and business strategy to create practical digital solutions. My role extends beyond writing code. I work on product ideas, technical direction, development, project planning and creating solutions designed around real business requirements.",
  websiteUrl: "https://korvenzatech.com/",
  isWebsiteLive: true,
  contactEmail: "info@korvenzatech.com",
  coreSolutions: [
    "Mobile Applications (Flutter iOS & Android)",
    "Modern Web Applications & Responsive Portals",
    "Scalable API Architectures & Cloud Integrations",
    "Firebase Systems & Real-Time Databases",
    "Business Management & ERP Software Solutions"
  ],
  leadershipPillars: [
    {
      id: "pillar-tech-leadership",
      title: "Technology Leadership",
      subtitle: "Strategic Engineering",
      description: "Driving technical direction and software development.",
      iconName: "Cpu"
    },
    {
      id: "pillar-product-dev",
      title: "Product Development",
      subtitle: "Concept to Reality",
      description: "Turning ideas and business requirements into digital products.",
      iconName: "Layers"
    },
    {
      id: "pillar-innovation",
      title: "Innovation",
      subtitle: "Modern Standards",
      description: "Exploring modern technologies and practical solutions.",
      iconName: "Sparkles"
    },
    {
      id: "pillar-business-solutions",
      title: "Business Solutions",
      subtitle: "Commercial Impact",
      description: "Building software that addresses real-world business needs.",
      iconName: "TrendingUp"
    },
    {
      id: "pillar-team-project",
      title: "Team & Project Leadership",
      subtitle: "Disciplined Delivery",
      description: "Managing development direction, priorities and delivery.",
      iconName: "Users"
    }
  ]
};

export const dualPathData: DualPathData = {
  bridgeStatement: "Engineer → Builder → Founder → CEO",
  engineer: {
    title: "Engineer",
    roleTag: "Software Engineer & Flutter Developer",
    action: "I Build",
    items: [
      "Flutter Applications",
      "Websites",
      "Web Applications",
      "APIs",
      "Firebase Systems",
      "Dashboards",
      "Custom Software",
      "Business Systems"
    ]
  },
  ceo: {
    title: "CEO",
    roleTag: "CEO & Founder — KorvenzaTech",
    action: "I Lead",
    items: [
      "Product Strategy",
      "Technology Direction",
      "Business Solutions",
      "Project Planning",
      "Team Coordination",
      "Digital Innovation",
      "Client Solutions"
    ]
  }
};

export const skillCategories: SkillCategory[] = [
  {
    id: "mobile-dev",
    title: "Mobile Development",
    iconName: "Smartphone",
    description: "Building polished, responsive, and performant cross-platform mobile apps.",
    skills: [
      { name: "Flutter", level: "Production-Ready", highlight: "State management (BLoC / Riverpod / Provider), custom rendering" },
      { name: "Dart", level: "Advanced", highlight: "Asynchronous programming, null-safety, functional paradigms" },
      { name: "Android Native", level: "Proficient", highlight: "Gradle, Android SDK, device permissions, native bridging" },
      { name: "Firebase Mobile", level: "Production-Ready", highlight: "Auth, Firestore, Cloud Messaging (FCM), Crashlytics" },
      { name: "REST APIs", level: "Advanced", highlight: "HTTP/Dio clients, JSON serialization, cache management" }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    iconName: "Globe",
    description: "Crafting modern, accessible, and responsive user interfaces and web applications.",
    skills: [
      { name: "HTML5 & Semantic Web", level: "Advanced", highlight: "SEO-friendly structures, accessibility standards (WCAG)" },
      { name: "CSS3 & Modern Layouts", level: "Advanced", highlight: "Flexbox, CSS Grid, custom properties, smooth transitions" },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: "DOM manipulation, async/await, closures, modern toolchains" },
      { name: "Responsive Web Design", level: "Production-Ready", highlight: "Mobile-first development, adaptive multi-device layouts" },
      { name: "Modern Web Applications", level: "Advanced", highlight: "Component architectures, SPA workflows, dynamic data rendering" }
    ]
  },
  {
    id: "backend-integration",
    title: "Backend & Integration",
    iconName: "Database",
    description: "Connecting clients to scalable cloud services, databases, and secure APIs.",
    skills: [
      { name: "Firebase Services", level: "Production-Ready", highlight: "Firestore, Realtime DB, Storage, Security Rules" },
      { name: "REST APIs", level: "Advanced", highlight: "CRUD operations, pagination, rate-limiting, error handling" },
      { name: "Authentication", level: "Advanced", highlight: "JWT, OAuth, Firebase Auth, Role-Based Access (RBAC)" },
      { name: "Database Integration", level: "Advanced", highlight: "SQL (MySQL/PostgreSQL) and NoSQL schema modeling" },
      { name: "API Integration", level: "Production-Ready", highlight: "Payment gateways, 3rd-party webhooks, analytics" }
    ]
  },
  {
    id: "dev-tools",
    title: "Development Tools",
    iconName: "Terminal",
    description: "Leveraging industry-standard tooling for seamless workflows and version control.",
    skills: [
      { name: "Git & Version Control", level: "Production-Ready", highlight: "Branching strategies, merge conflict resolution, PR workflows" },
      { name: "GitHub", level: "Advanced", highlight: "Actions, repositories, issues tracking, releases" },
      { name: "VS Code", level: "Advanced", highlight: "Extensions, remote development, debugging suites" },
      { name: "Android Studio", level: "Advanced", highlight: "Emulators, Profiler, APK/AAB bundle signing & optimization" },
      { name: "Postman", level: "Advanced", highlight: "API testing, environment variables, automated collection runs" }
    ]
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    iconName: "Cpu",
    description: "Applying computer science fundamentals and disciplined engineering principles.",
    skills: [
      { name: "OOP (Object-Oriented)", level: "Production-Ready", highlight: "Polymorphism, encapsulation, inheritance, design patterns" },
      { name: "Database Design", level: "Advanced", highlight: "ER diagrams, normalization, index tuning, data integrity" },
      { name: "API Architecture", level: "Advanced", highlight: "Clean contracts, endpoint versioning, payload optimization" },
      { name: "Software Architecture", level: "Advanced", highlight: "Clean Architecture, MVC, Separation of Concerns" },
      { name: "Debugging & Profiling", level: "Production-Ready", highlight: "Memory leak analysis, network logging, stack trace isolation" },
      { name: "Problem Solving", level: "Advanced", highlight: "Algorithmic thinking, edge-case analysis, optimization" },
      { name: "Version Control", level: "Production-Ready", highlight: "Semantic versioning, release changelogs, reproducible builds" }
    ]
  }
];

export const servicesList: ServiceItem[] = [
  {
    id: "flutter-dev",
    title: "Flutter App Development",
    category: "Mobile",
    shortDescription: "Build modern, responsive and scalable Android/iOS applications using Flutter with pixel-perfect UI and native smoothness.",
    iconName: "Smartphone",
    deliverables: [
      "Cross-platform iOS & Android single codebase",
      "Custom UI components and smooth transitions",
      "Offline-first local caching and sync",
      "App Store & Google Play deployment readiness"
    ],
    featuredTech: ["Flutter", "Dart", "BLoC/Riverpod", "Android"]
  },
  {
    id: "website-dev",
    title: "Website Development",
    category: "Web",
    shortDescription: "Create responsive, fast and modern websites for businesses, startups and personal brands that elevate credibility.",
    iconName: "Globe",
    deliverables: [
      "Ultra-fast loading times and Core Web Vitals optimization",
      "Mobile-first responsive design across all screen sizes",
      "Accessible code complying with modern web standards",
      "Clean SEO structure and social share metadata"
    ],
    featuredTech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: "web-app-dev",
    title: "Web Application Development",
    category: "Web Applications",
    shortDescription: "Build interactive web applications, dashboards and business systems tailored to operational requirements.",
    iconName: "Layers",
    deliverables: [
      "Interactive data visualizations and analytics dashboards",
      "Role-based access control and user permission systems",
      "Real-time state updates and asynchronous operations",
      "Modular, maintainable front-end architectures"
    ],
    featuredTech: ["Web Components", "Modern JS", "Dashboards", "REST APIs"]
  },
  {
    id: "api-integration",
    title: "API Integration",
    category: "Backend",
    shortDescription: "Integrate REST APIs, third-party services and backend systems reliably with resilient error handling.",
    iconName: "Network",
    deliverables: [
      "Seamless payment gateway connectivity (Stripe/PayPal)",
      "Secure webhook listeners and token authentication",
      "Thorough request caching and rate-limit mitigation",
      "Comprehensive Postman documentation and testing"
    ],
    featuredTech: ["REST APIs", "Postman", "OAuth", "JSON Serialization"]
  },
  {
    id: "firebase-dev",
    title: "Firebase Development",
    category: "Cloud",
    shortDescription: "Authentication, database, storage, notifications and other Firebase services wired into cohesive cloud backends.",
    iconName: "Flame",
    deliverables: [
      "Cloud Firestore & Realtime Database architecture",
      "Firebase Auth (Email, Phone, Google OAuth)",
      "Cloud Messaging (FCM) for push notifications",
      "Granular Firestore security rules preventing unauthorized reads"
    ],
    featuredTech: ["Firestore", "Firebase Auth", "FCM", "Cloud Storage"]
  },
  {
    id: "bug-fixing",
    title: "Bug Fixing & Debugging",
    category: "Maintenance",
    shortDescription: "Fix Flutter, JavaScript, API, Firebase and application-related issues swiftly with systematic root-cause analysis.",
    iconName: "Bug",
    deliverables: [
      "Fix UI layout overflow errors, render glitches and jank",
      "Resolve API serialization and asynchronous race conditions",
      "Eliminate memory leaks and app crash triggers",
      "Provide clean regression tests and explanatory patch notes"
    ],
    featuredTech: ["DevTools", "Debugging", "Android Studio", "Console Profiling"]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    category: "Enterprise",
    shortDescription: "Develop customized software solutions based on specific business requirements from initial schema to delivery.",
    iconName: "Code",
    deliverables: [
      "End-to-end software architecture and DB schema design",
      "Bespoke workflows automating repetitive operational tasks",
      "Scalable infrastructure planned for business expansion",
      "Clear documentation and clean handover specifications"
    ],
    featuredTech: ["System Design", "OOP", "Database Architecture", "Clean Code"]
  }
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "paysphere-wallet",
    title: "PaySphere FinTech Wallet",
    subtitle: "Digital Wallet & Financial Transaction System",
    category: "Mobile Apps",
    description: "A secure cross-platform financial application offering frictionless peer-to-peer transfers, real-time account balances, biometric login, and transaction history filtering.",
    technologies: ["Flutter", "Firebase", "REST APIs", "SQLite/Database", "Biometrics"],
    githubUrl: "https://github.com/sulemankhan-dev/paysphere-wallet",
    liveDemoUrl: "https://paysphere-demo.web.app",
    isPlaceholder: true,
    statusBadge: "Architecture Concept / Editable Placeholder",
    accentColor: "from-cyan-500 to-blue-600",
    mockupType: "mobile-fintech",
    caseStudy: {
      overview: "PaySphere was architected as a prototype for modern fintech mobile experiences, emphasizing sub-second interface responses, bank-grade encryption conventions, and zero latency on ledger views.",
      problem: "Traditional digital banking interfaces often suffer from sluggish loading screens, complex navigation hierarchies, and inconsistent session states across unreliable mobile network conditions.",
      solution: "Engineered a Flutter mobile application utilizing Clean Architecture principles with a dedicated repository pattern. Offline-first local caching ensures transactions render immediately, synchronizing automatically when connectivity restores.",
      keyFeatures: [
        "Biometric authentication (Fingerprint & Face ID integration)",
        "Instant P2P fund transfer simulator with QR code scanning",
        "Interactive monthly expense breakdown charts and category tagging",
        "Real-time push notifications for credit/debit transaction alerts",
        "Multi-currency support with dynamic foreign exchange calculation"
      ],
      architecture: "Separated into Domain, Data, and Presentation layers using the BLoC pattern for state isolation. Network calls run through an interceptor with automated token refresh.",
      techStack: ["Flutter 3.x", "Dart", "Firebase Auth", "Cloud Firestore", "Dio HTTP Client", "Flutter Secure Storage"],
      developmentProcess: [
        "Phase 1: Requirements gathering, user flow mapping, and security threat modeling.",
        "Phase 2: UI/UX prototyping in high-contrast dark theme with financial clarity.",
        "Phase 3: Core state machine implementation and local cache synchronization logic.",
        "Phase 4: API integration, biometric security validation, and performance profiling."
      ],
      challenges: [
        "Ensuring idempotent financial transactions during sudden network disconnects.",
        "Smooth 60fps rendering of extensive transaction history lists with complex filtering."
      ],
      results: "Achieved seamless sub-second load times, modular codebase ready for real payment gateway API linkage, and flawless UI consistency on Android and iOS."
    }
  },
  {
    id: "demand-radar",
    title: "DemandRadar",
    subtitle: "Business Intelligence & Market Analytics Platform",
    category: "Web Apps",
    description: "A centralized business intelligence dashboard providing real-time data visualization, market demand trend forecasting, and exportable operational summaries.",
    technologies: ["JavaScript", "Node.js", "APIs", "Data Visualization", "CSS3 Grid"],
    githubUrl: "https://github.com/sulemankhan-dev/demand-radar",
    liveDemoUrl: "https://demandradar-demo.web.app",
    isPlaceholder: true,
    statusBadge: "Architecture Concept / Editable Placeholder",
    accentColor: "from-emerald-500 to-teal-600",
    mockupType: "web-analytics",
    caseStudy: {
      overview: "DemandRadar delivers actionable insights for retail and business operators, aggregating key performance indicators into dynamic, high-readability chart dashboards.",
      problem: "Business managers waste hours manually consolidating scattered spreadsheets and lack real-time visibility into shifting demand patterns and stock depletion rates.",
      solution: "Created an interactive web platform with responsive data visualization widgets, automated anomaly detection, and filterable data tables handling large datasets cleanly.",
      keyFeatures: [
        "Real-time KPIs: Revenue tracking, customer retention, and inventory velocity",
        "Interactive time-series charts with custom date-range slicing",
        "One-click PDF/CSV report generation for executive meetings",
        "Custom alert thresholds notifying teams of sudden trend surges",
        "Role-based view filters for department heads versus staff"
      ],
      architecture: "Event-driven front-end dashboard consuming structured REST endpoints with debounced state queries and memoized data calculations to prevent UI lag.",
      techStack: ["Modern JavaScript (ES6+)", "Node.js runtime", "Chart.js / SVG Canvas", "RESTful Endpoints", "Tailwind CSS"],
      developmentProcess: [
        "Phase 1: Defined data schema for inventory, sales velocity, and regional metrics.",
        "Phase 2: Developed modular chart widgets with responsive auto-resizing.",
        "Phase 3: Constructed robust mock API service simulating live business transactions.",
        "Phase 4: Optimization for high-DPI screens, desktop workstations, and mobile review."
      ],
      challenges: [
        "Rendering thousands of historical data points without dropping frame rates in browser.",
        "Establishing consistent color contrast for financial graphs under dark mode."
      ],
      results: "Instant data clarity with responsive interaction speeds under 100ms across dashboard widgets, easily adaptable to production SQL backends."
    }
  },
  {
    id: "ecommerce-mobile-app",
    title: "E-Commerce Mobile Application",
    subtitle: "High-Conversion Multi-Category Retail App",
    category: "Mobile Apps",
    description: "A comprehensive shopping mobile app engineered with Flutter, featuring product discovery, nested category filters, cart persistence, and order tracking.",
    technologies: ["Flutter", "Firebase", "REST API", "State Management", "Payment Gateways"],
    githubUrl: "https://github.com/sulemankhan-dev/ecommerce-flutter-app",
    liveDemoUrl: "https://ecommerce-preview.web.app",
    isPlaceholder: true,
    statusBadge: "Architecture Concept / Editable Placeholder",
    accentColor: "from-indigo-500 to-purple-600",
    mockupType: "mobile-ecommerce",
    caseStudy: {
      overview: "Designed as a modern retail application built to maximize user conversion through fluid gesture navigation, smart search, and instant cart state updates.",
      problem: "E-commerce apps frequently lose customers due to confusing multi-step checkout processes, slow product image rendering, and lost carts on app restarts.",
      solution: "Implemented an optimized Flutter retail client with persistent local storage, optimistic UI updates for instant feedback, and structured payment flows.",
      keyFeatures: [
        "Instant catalog search with tag-based auto-complete and multi-attribute filters",
        "Persistent cart across app restarts using encrypted key-value storage",
        "Interactive product showcase with swipeable galleries and zoom previews",
        "Integrated checkout flow supporting multiple simulated payment providers",
        "Order status timeline with simulated delivery progress tracking"
      ],
      architecture: "Layered architecture featuring Riverpod state providers, separating cart business logic from presentation widgets for maximum reusability and testing.",
      techStack: ["Flutter", "Dart", "Firebase Cloud Firestore", "REST API Client", "Shared Preferences"],
      developmentProcess: [
        "Phase 1: Wireframed customer journey from product discovery to receipt confirmation.",
        "Phase 2: Implemented responsive product grid with lazy image loading and placeholders.",
        "Phase 3: Engineered cart calculations (taxes, discounts, shipping tier thresholds).",
        "Phase 4: Integrated Firebase authentication and order history collection."
      ],
      challenges: [
        "Handling concurrent inventory availability checks when items reach low stock.",
        "Maintaining frictionless touch targets and intuitive bottom-sheet dialogs."
      ],
      results: "A streamlined consumer experience offering smooth transitions, zero shopping cart data loss, and modular codebase easily coupled with Shopify or WooCommerce APIs."
    }
  },
  {
    id: "gym-management-system",
    title: "Gym Management System",
    subtitle: "Operations, Memberships & Attendance Suite",
    category: "Websites",
    description: "A full-featured administrative web system for fitness centers, streamlining member registrations, subscription renewal alerts, trainer scheduling, and attendance logging.",
    technologies: ["Web", "JavaScript", "Database", "Dashboard", "CSS Grid"],
    githubUrl: "https://github.com/sulemankhan-dev/gym-management-system",
    liveDemoUrl: "https://gym-portal-demo.web.app",
    isPlaceholder: true,
    statusBadge: "Architecture Concept / Editable Placeholder",
    accentColor: "from-amber-500 to-orange-600",
    mockupType: "web-management",
    caseStudy: {
      overview: "An all-in-one administrative software solution designed to eliminate paper logs, automate membership billing dates, and provide gym owners total operational control.",
      problem: "Gym owners struggle with missed membership renewal payments, manual check-in bottlenecks at front desks, and lack of trainer scheduling visibility.",
      solution: "Created an intuitive, browser-accessible management portal with automated expiration flags, member profile cards, and trainer shift coordination calendars.",
      keyFeatures: [
        "Member directory with status badges (Active, Expiring Soon, Overdue)",
        "Automated subscription tracker with visual countdowns and renewal notices",
        "Front-desk quick attendance check-in system with member ID lookup",
        "Trainer booking calendar preventing double-booked personal training sessions",
        "Financial income summary reporting monthly dues collected and outstanding balances"
      ],
      architecture: "Clean component hierarchy with client-side relational schema simulation, fast search indexing, and exportable audit tables.",
      techStack: ["HTML5", "CSS3 / Modern Flexbox", "Modular JavaScript", "IndexedDB / Local Database", "Responsive Layout"],
      developmentProcess: [
        "Phase 1: Interviewed gym administrative workflows to map exact operational pain points.",
        "Phase 2: Designed dark-mode dashboard tailored for low-distraction front-desk operation.",
        "Phase 3: Developed automated date-calculation engine for membership renewals.",
        "Phase 4: Built one-click printable invoices and client progress sheets."
      ],
      challenges: [
        "Designing an ultra-fast check-in workflow allowing staff to check in members within 2 seconds.",
        "Handling grace period logic and custom freeze/pause membership rules."
      ],
      results: "Greatly simplifies daily desk operations, provides instant revenue tracking, and delivers clean code easily connected to cloud SQL databases."
    }
  },
  {
    id: "school-erp-system",
    title: "School ERP System",
    subtitle: "Academic Administration & Student Information Portal",
    category: "Software",
    description: "A scalable academic ERP platform uniting student enrollment, grade recording, fee management, attendance matrices, and teacher scheduling in one secure hub.",
    technologies: ["Web", "Dashboard", "Database", "REST APIs", "Role-Based Access"],
    githubUrl: "https://github.com/sulemankhan-dev/school-erp-system",
    liveDemoUrl: "https://school-erp-demo.web.app",
    isPlaceholder: true,
    statusBadge: "Architecture Concept / Editable Placeholder",
    accentColor: "from-emerald-600 to-cyan-700",
    mockupType: "web-erp",
    caseStudy: {
      overview: "Built to digitize complex educational administrative processes, this ERP platform provides dedicated portals for administrators, instructors, and parents.",
      problem: "Educational institutions suffer from fragmented data silos where attendance, examination grading, fee records, and parent notices exist across incompatible tools.",
      solution: "Engineered a consolidated web ERP architecture with role-based access control, academic term management, and automated report card generation.",
      keyFeatures: [
        "Comprehensive Student & Faculty directories with enrollment lifecycle tracking",
        "Examination grade entry matrices with automated GPA/percentage calculations",
        "Monthly tuition fee billing ledger with receipt generation and dues tracking",
        "Classroom timetable scheduler with conflict avoidance algorithms",
        "Parent noticeboard and notification broadcast center"
      ],
      architecture: "Enterprise-grade model-view structure with strictly typed data interfaces, permission verification middleware, and audit trail logging.",
      techStack: ["Modern Web Technologies", "JavaScript", "Relational Database Schema", "REST API Architecture", "Modern Dashboard UI"],
      developmentProcess: [
        "Phase 1: Analyzed school administration hierarchies and credential authorization levels.",
        "Phase 2: Structured database models for terms, classes, subjects, teachers, and students.",
        "Phase 3: Created multi-view dashboard interfaces tailored to each stakeholder role.",
        "Phase 4: Tested grade aggregation formulas and automated report card print stylesheets."
      ],
      challenges: [
        "Managing complex grading scales and varying weightings across diverse curriculum subjects.",
        "Structuring scalable database relationships between multi-year classes and student cohorts."
      ],
      results: "Delivers a robust, production-patterned administrative software suite that drastically cuts down clerical overhead and keeps records secure."
    }
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: "timeline-ceo-korvenzatech",
    period: "Current",
    title: "CEO & Founder",
    section: "Executive Leadership",
    focus: "KorvenzaTech • Technology Leadership & Digital Product Development",
    description: "Driving company vision, technical direction, and digital product delivery. Leading end-to-end software solutions, architectural planning, and business-focused software implementations across mobile and web platforms.",
    keySkills: [
      "Technology Leadership",
      "Software Product Development",
      "Business Strategy",
      "Product Planning",
      "Technical Architecture",
      "Client & Project Communication",
      "Development Management",
      "Digital Solution Strategy"
    ],
    typeBadge: "Current Leadership"
  },
  {
    id: "timeline-education",
    period: "Academic Degree",
    title: "BS Software Engineering",
    section: "Education",
    focus: "Formal University Degree in Software Engineering",
    description: "Completed comprehensive computer science and engineering coursework covering Object-Oriented Programming (OOP), Data Structures & Algorithms, Software Architecture & Design Patterns, Database Management Systems, Operating Systems, Computer Networks, and System Analysis.",
    keySkills: ["Software Engineering Principles", "OOP & System Modeling", "Database Design", "Algorithms & Complexity"],
    typeBadge: "Formal Degree"
  },
  {
    id: "timeline-flutter",
    period: "Core Specialization",
    title: "Flutter & Mobile App Development",
    section: "Development Journey",
    focus: "Cross-Platform Android & iOS Production Development",
    description: "Specialized in Flutter and Dart to engineer high-performance mobile applications. Mastered responsive widget trees, custom painters, clean state management architectures (BLoC, Riverpod), local persistence, native platform channels, and smooth 60fps animations.",
    keySkills: ["Flutter SDK", "Dart", "BLoC / Riverpod", "Mobile Performance Tuning", "Native Android Bridging"],
    typeBadge: "Mobile Engineering"
  },
  {
    id: "timeline-web",
    period: "Web Engineering",
    title: "Modern Web Development",
    section: "Web Development",
    focus: "Semantic HTML, CSS3, Modern JavaScript & Interactive Web Apps",
    description: "Built responsive, high-speed web interfaces and digital platforms. Deep command over semantic layouts, CSS Flexbox/Grid systems, modern ECMAScript standards, asynchronous DOM management, and interactive frontend dashboards tailored for business utility.",
    keySkills: ["Modern JavaScript", "HTML5 & CSS3", "Responsive UI Architecture", "Single Page Applications", "Web Performance"],
    typeBadge: "Web Development"
  },
  {
    id: "timeline-backend",
    period: "Full-Stack Integration",
    title: "Backend, APIs & Firebase Systems",
    section: "Software Development",
    focus: "APIs, Firebase, Databases & Business Systems",
    description: "Engineered full-stack solutions linking client frontends with reliable cloud backends. Skilled in REST API design, authentication flows (OAuth, JWT, Firebase Auth), Cloud Firestore architecture, database normalization, Postman testing, and custom business software workflows.",
    keySkills: ["REST API Architecture", "Firebase Services", "Database Integration", "Authentication & Security", "Postman Testing"],
    typeBadge: "Full-Stack & Cloud"
  }
];

export const whyWorkWithMe: ValueCardItem[] = [
  {
    id: "val-problem-solver",
    title: "Problem Solver",
    subtitle: "Value-Driven Engineering",
    description: "I focus on solving the actual business and technical problem, not just writing syntax. Every feature is tied to real user needs and product viability.",
    iconName: "CheckCircle2"
  },
  {
    id: "val-clean-code",
    title: "Clean Development",
    subtitle: "Maintainable Codebases",
    description: "Write maintainable, well-structured, and thoroughly organized code following SOLID principles, separation of concerns, and clean naming conventions.",
    iconName: "Code2"
  },
  {
    id: "val-modern-tech",
    title: "Modern Technology",
    subtitle: "Current Tools & Frameworks",
    description: "Use current development tools, modern frameworks (like Flutter and latest web standards), and modern patterns where appropriate for lasting durability.",
    iconName: "Sparkles"
  },
  {
    id: "val-communication",
    title: "Responsive Communication",
    subtitle: "Clear & Reliable",
    description: "Keep project communication transparent, proactive, and professional. You will always know current status, upcoming milestones, and delivery timelines.",
    iconName: "MessageSquare"
  },
  {
    id: "val-scalable",
    title: "Scalable Solutions",
    subtitle: "Built for Growth",
    description: "Build systems with future growth in mind — modular architectures, clean database schemas, and decoupled services that easily scale as users expand.",
    iconName: "TrendingUp"
  },
  {
    id: "val-complete",
    title: "Complete Development",
    subtitle: "Concept to Deployment",
    description: "From UI/UX translation to API integration, database configuration, and deployment-ready solutions, providing a complete product development cycle.",
    iconName: "Rocket"
  }
];

export const workProcessSteps: ProcessStepItem[] = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Discovery & Requirements",
    description: "Understand requirements, target audience, technical constraints, and business goals through detailed discovery.",
    outputs: ["Project Scope Clarification", "Feature Breakdown", "Technical Feasibility Assessment"]
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Architecture & Approach",
    description: "Plan architecture, choose appropriate technology stack, design database schemas, and map development milestones.",
    outputs: ["System Architecture Plan", "Data Models & Schema", "Development Timeline"]
  },
  {
    step: "03",
    title: "Design",
    subtitle: "UI/UX & User Flows",
    description: "Create the user experience, layout hierarchy, navigation paths, and interface states prioritizing clarity.",
    outputs: ["Interactive Component Specs", "Responsive Layout Models", "User Flow Diagrams"]
  },
  {
    step: "04",
    title: "Develop",
    subtitle: "Clean Code & Integration",
    description: "Build, integrate APIs, connect databases, implement business logic, and construct functionality with rigorous standards.",
    outputs: ["Modular Codebase", "API & Database Integration", "Clean State Management"]
  },
  {
    step: "05",
    title: "Test & Deliver",
    subtitle: "Quality Assurance & Launch",
    description: "Test edge cases, fix issues, optimize performance across devices, and prepare the final product for deployment.",
    outputs: ["Cross-Device Verification", "Bug Resolution", "Production-Ready Handover"]
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Client Testimonial",
    clientRole: "Upcoming Verification",
    companyOrPlatform: "International Project",
    quote: "Client testimonials will be added here upon completion of active international projects and verified client reviews.",
    rating: 5,
    isPlaceholder: true
  }
];

export const githubData: GithubSectionData = {
  username: "sulemankhan-dev",
  profileUrl: "https://github.com/sulemankhan-dev",
  headline: "Code. Build. Ship. Repeat.",
  subheadline: "A committed focus on writing clean, testable, and maintainable software across mobile and web ecosystems.",
  totalReposCount: 14,
  featuredRepos: [
    {
      name: "flutter-fintech-wallet-ui",
      description: "Clean Architecture FinTech wallet client built with Flutter, Riverpod, and custom biometric security hooks.",
      language: "Dart",
      languageColor: "#00B4AB",
      stars: 12,
      forks: 4,
      updated: "Recently updated",
      url: "https://github.com/sulemankhan-dev/flutter-fintech-wallet-ui",
      topics: ["flutter", "dart", "clean-architecture", "riverpod", "fintech"]
    },
    {
      name: "firebase-auth-api-starter",
      description: "Production-ready authentication and Firestore integration boilerplate with role-based security rules.",
      language: "JavaScript",
      languageColor: "#F7DF1E",
      stars: 8,
      forks: 2,
      updated: "Recently updated",
      url: "https://github.com/sulemankhan-dev/firebase-auth-api-starter",
      topics: ["firebase", "firestore", "auth", "rest-api", "security-rules"]
    },
    {
      name: "business-analytics-dashboard",
      description: "Interactive web analytics platform with custom SVG visualizers, data aggregation, and responsive layouts.",
      language: "JavaScript / Web",
      languageColor: "#3178C6",
      stars: 10,
      forks: 3,
      updated: "Recently updated",
      url: "https://github.com/sulemankhan-dev/business-analytics-dashboard",
      topics: ["dashboard", "data-visualization", "web-app", "charts"]
    },
    {
      name: "flutter-ecommerce-core",
      description: "Modular e-commerce store application featuring cart state machines, payment workflows, and offline caching.",
      language: "Dart",
      languageColor: "#00B4AB",
      stars: 15,
      forks: 5,
      updated: "Recently updated",
      url: "https://github.com/sulemankhan-dev/flutter-ecommerce-core",
      topics: ["flutter", "ecommerce", "offline-first", "mobile-app"]
    }
  ],
  technologiesDistribution: [
    { name: "Dart / Flutter", percentage: 48, color: "#02569B" },
    { name: "JavaScript / Web", percentage: 32, color: "#F7DF1E" },
    { name: "Firebase / Cloud", percentage: 12, color: "#FFA000" },
    { name: "SQL & Shell / Tools", percentage: 8, color: "#64748B" }
  ]
};
