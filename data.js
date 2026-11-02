/*
  EDIT THIS FILE when you want to update your website.
  You do not need to change index.html for normal content updates.
*/
const siteData = {
  name: "Bruno Pereira",
  email: "bruno.f.pereira@inesctec.pt",
  phone: "+351 915 637 395",
  location: "Braga, Portugal",
  languages: ["Portuguese", "English"],

  summary:
    "Research Assistant at INESC TEC working on cybersecurity and operating systems, with a focus on ransomware analysis, detection, and protection.",

  about:
    //"Since 2022, I have been working as a Research Assistant at INESC TEC, focusing primarily on security and operating systems. My research has increasingly centered on ransomware analysis and protection, driven by the growing impact of ransomware attacks on society and critical infrastructures. I am particularly motivated by the need to develop more effective protection strategies against this evolving threat.",
    "I have been a research assistant at INESC TEC since 2022. My research focuses on ransomware analysis, detection, and recovery. I have performed behavioural analyses of ransomware on Linux and Android Operating Systems and tested different machine learning detection solutions. From 2019 to 2022, I completed my bachelor’s degree in Informatics Engineering at the University of Minho. I then pursued a master’s degree from 2022 to 2025, during which I developed my thesis titled “Towards Optimized Development and Testing of Ransomware Detection Solutions”. My research analysed the development process of ransomware detection solutions and introduced a prototype aimed at optimizing the reproducibility of existing and new ML-based detection solutions. From May to June 2024, I joined the DistriNet research unit from KU Leuven University in Belgium as a visiting scholar. During this time, I collaborated closely with researchers Vera Rimmer and Lieven Desmet on topics related to Machine Learning explainability in the field of malware detection. This experience provided me with valuable insights that significantly contributed to the development of my master’s thesis. In March 2025, I started a PhD in Informatics, enrolling in the PDINF program. My research targets the development of ransomware-resilient storage solutions capable not only of detecting attacks but also of recovering from them with a zero-data-loss guarantee.",

  research_interests: [
    "Ransomware Analysis",
    "Operating systems",
    "Data Security",
    "Storage Protection"
  ],

  skills: [
    "Ransomware analysis and detection",
    "Operating systems, data security, and encryption",
    "Python, C, Haskell, C++, Java, Prolog, Erlang, SpringBoot",
    "Time management, communication, and team collaboration"
  ],

  education: [
    {
      degree: "Doctoral Program on Informatics",
      period: "Mar 2025 — Current",
      institution: "University of Minho",
      description: ""
    },
    {
      degree: "MSc in Informatics Engineering",
      period: "Oct 2022 — Feb 2025",
      institution: "University of Minho",
      description:
        'Thesis: "Towards Optimized Development of Ransomware Detection Solutions", awarded a final grade of 18/20. The work proposed an approach to developing ML-based ransomware detection solutions and analyzed the benefits and limitations of current detection methodologies.'
    },
    {
      degree: "BSc in Informatics Engineering",
      period: "Oct 2019 — Jul 2022",
      institution: "University of Minho",
      description:
        "Built a strong foundation in computer systems, including operating systems, computer networks, functional, imperative, and object-oriented programming, as well as introductory artificial intelligence."
    }
  ],

  experience: [
    {
      role: "Research Assistant",
      period: "2022 — Current",
      organization: "HASLab — INESC TEC",
      description:
        "Research focused on understanding ransomware attacks and detection measures. I characterized ransomware behaviour by analysing I/O patterns and operating-system behaviour, studied machine-learning-based detection tools, and developed a methodology to optimize the development of new detection pipelines."
    },
    {
      role: "Project - Rescueware: Intelligent and Self-configurable Cybersecurity and Data Recovery for Ransomware Resilience",
      period: "Feb 2026 -  Current",
      organization: "HASLab - INESC TEC",
      description: "The project goal is to develop a new storage recovery solution capable of protecting storage systems from ransomware attacks"
    },
    {
      role: "Project - BCD.S+M: Sistema Modular de Armazenamento e Gestão de Dados em Blockchain com IA",
      period: "May 2025 - Nov 2025",
      organization: "HASLab - INESC TEC",
      description: "Contributions centered on developing a new modular storage library"
    },
    {
      role: "Project — Aliança para a Transição Energética",
      period: "Jan 2024 — May 2025",
      organization: "HASLab — INESC TEC",
      description:
        "Contributions centered on improving data security while in transit and at rest for machine-learning pipelines, including work with data-security and encryption mechanisms."
    },
    {
      role: "Visiting Scholar",
      period: "May 2024 — Jul 2024",
      organization: "DistriNet — KU Leuven, Belgium",
      description:
        "Collaborated with researchers Vera Rimmer and Lieven Desmet during the development of my master's thesis, exploring machine-learning explainability applied to ransomware detection solutions."
    }
  ],

  publications: [
    {
      title: "It Works on My Machine: A Systematization of Knowledge on Reproducibility and Replicability in ML-Based Ransomware Detection",
      date: "Jul 2026",
      venue: "2026 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)",
      authors: "B. Pereira, B. Cepa, C. Brito, J. Marco, V. Rimmer, J. Paulo, T. Esteves",
      link: "https://ieeexplore.ieee.org/document/11632096"
    },
    {
      title: "Polylayer: the Next 700 Storage Configurations",
      date: "Oct 2025",
      venue: "2025 44th International Symposium on Reliable Distributed Systems (SRDS)",
      authors: "J. Lopes, B. Pereira, F. Pereira, V. Muñoz, T. Gomes, R. Ribeiro, F. Costa, M. Bonjardim, F. Cruz, J. Paulo, F. Maia",
      link: "https://ieeexplore.ieee.org/document/11360379"
    },
    {
      title: "CRIBA: A Tool for Comprehensive Analysis of Cryptographic Ransomware’s I/O Behavior",
      date: "Feb 2024",
      venue: "2025 44th International Symposium on Reliable Distributed Systems (SRDS)",
      authors: "T. Esteves, B. Pereira, R. P. Oliveira, J. Marco and J. Paulo",
      link: "https://ieeexplore.ieee.org/document/10419262"
    }
  ]
};
