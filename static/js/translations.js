/* =============================================================
   translations.js
   All UI label strings for EN and FR.
   Project content (titles, descriptions) lives in projects.json
   with _fr suffix fields and is translated by main.js at runtime.
   ============================================================= */

var translations = {

  en: {
    /* Navigation */
    'nav.home':    'Home',
    'nav.about':   'About',
    'nav.projects':'Projects',
    'nav.skills':  'Skills',
    'nav.beyond':  'Beyond Tech',
    'nav.contact': 'Contact',
    'nav.theme':   'Theme',

    /* Hero */
    'hero.greeting': "Hello, I'm",
    'hero.title':    'Cloud Infrastructure Engineer',
    'hero.cta':      'View My Projects',

    /* About */
    'about.title': 'About Me',
    'about.bio':   "I'm a BCIT Computer Information Technology graduate (CGPA 90/100, With Distinction) with hands-on experience in cloud infrastructure, IT systems administration, and DevOps. My experience at York House School gave me real-world practice supporting 400+ users, managing 1,000+ devices, and leading infrastructure refreshes — while my academic projects pushed me into Kubernetes, Terraform, CI/CD, and beyond.",
    'about.callout': 'Cloud Infrastructure Engineer with strong IT foundations',
    'about.exp1.title': 'Cloud Engineering',
    'about.exp1.desc':  'Kubernetes, Docker, Terraform, AWS, GCP — designing and provisioning scalable cloud infrastructure.',
    'about.exp2.title': 'DevOps Practices',
    'about.exp2.desc':  'CI/CD pipelines with Jenkins and GitLab CI, containerisation, automation and rolling deploys.',
    'about.exp3.title': 'IT Support & Sysadmin',
    'about.exp3.desc':  'Windows Server (Active Directory, DNS, DHCP, Group Policy), Linux administration, Cisco Meraki networking.',
    'about.journey':     'Experience & Education',
    'about.job1.role':   'Junior Analyst, IT Intern',
    'about.job1.org':    'York House School — Vancouver, BC',
    'about.job1.date':   'May 2025 – Dec 2025',
    'about.job1.desc':   'Resolved 25–35 tickets/week within a 24-hour SLA for 400+ users. Managed 1,000+ Apple devices via Mosyle MDM. Administered Active Directory and led a campus-wide Cisco Meraki network refresh.',
    'about.edu1.role':   'Computer Information Technology, Diploma',
    'about.edu1.org':    'British Columbia Institute of Technology',
    'about.edu1.date':   'Jan 2024 – Apr 2026',
    'about.edu1.desc':   'CGPA 90/100, With Distinction. Coursework: Cloud Infrastructure, Windows Server, Network Administration, Systems Automation, ITIL. Certifications in progress: AZ-800, AZ-104, CompTIA Network+.',
    'about.job2.role':   'Customer Account Specialist',
    'about.job2.org':    'Shaw Communications — Vancouver, BC',
    'about.job2.date':   'Jul 2022 – Nov 2023',
    'about.job2.desc':   'Primary triage for 40+ daily technical contacts. Consistently exceeded 90%+ customer satisfaction KPI targets.',
    'about.edu2.role':   'Business Administration, Diploma',
    'about.edu2.org':    'Douglas College — New Westminster, BC',
    'about.edu2.date':   'Sep 2019 – Dec 2021',
    'about.edu2.desc':   'GPA 3.71/4.0.',

    /* Projects */
    'projects.title':    'Projects',
    'projects.featured': 'Featured Projects',
    'projects.labs':     'Labs & Additional Work',
    'project.view':      'View Details',
    'project.github':    'GitHub',
    'project.demo':      'Live Demo',
    'project.video':     'Watch Demo',
    'project.back':      'Back to Projects',

    /* Project Detail */
    'project.overview.title':    'Overview',
    'project.problem.title':     'The Problem',
    'project.solution.title':    'The Solution',
    'project.technologies.title':'Technologies',
    'project.challenges.title':  'Key Challenges',
    'project.impact.title':      'Impact & Results',
    'project.architecture.title':'Architecture Overview',
    'project.diagram.caption':   'System architecture diagram',
    'project.links.title':       'Project Links',

    /* Skills */
    'skills.title':              'Skills & Technologies',
    'skills.cat.containers':     'Containers & Orchestration',
    'skills.cat.cicd':           'CI/CD & DevOps',
    'skills.cat.iac':            'Infrastructure as Code',
    'skills.cat.cloud':          'Cloud Platforms',
    'skills.cat.backend':        'Backend & Web',
    'skills.cat.databases':      'Databases',
    'skills.cat.networking':     'Networking & Systems',
    'skills.cat.languages':      'Languages & Scripting',

    /* Beyond Tech */
    'beyond.title':    'Beyond Tech',
    'beyond.subtitle': 'Impact goes beyond lines of code — bringing people together through culture, food, and community.',
    'beyond.badge.culture':   'Culture & Community',
    'beyond.badge.volunteer': 'Volunteering',

    'beyond.culinary.title': 'Culinary Masterclass: Pilipili Cameroonian Samosas',
    'beyond.culinary.date':  '2025',
    'beyond.culinary.desc':  "Beyond lines of code, I had the incredible opportunity to share a piece of my Cameroonian heritage by hosting a culinary masterclass for fellow students, teaching them how to make Pilipili — traditional Cameroonian Samosas. It was a beautiful reminder that impact goes far beyond technology: bringing people together through food, culture, and shared experiences is just as meaningful as solving technical challenges.",
    'beyond.culinary.quote': '"A wonderful way to make an impact beyond tech — and to be known as more than just the tech person."',

    'beyond.volunteer.title':   'Event Volunteer — Canadian Professional Community Association',
    'beyond.volunteer.date':    'May 2026 · 1 month · Science and Technology',
    'beyond.volunteer.desc':    'Supported the successful execution of the CPCA 2026 Event by assisting with logistics, registration, and attendee coordination. Contributed to creating a welcoming environment for participants and speakers.',
    'beyond.volunteer.bullet1': 'Logistics coordination and on-site operational support',
    'beyond.volunteer.bullet2': 'Registration desk management and attendee check-in',
    'beyond.volunteer.bullet3': 'Contributed to a professional, welcoming conference atmosphere',

    /* Contact */
    'contact.title':    "Let's Connect",
    'contact.subtitle': "I'm always open to new opportunities, collaborations, and conversations.",
    'contact.email':    'Email',
    'contact.github':   'GitHub',
    'contact.linkedin': 'LinkedIn',

    /* Footer */
    'footer.tagline': 'Cloud Infrastructure Engineer',
    'footer.rights':  'All rights reserved.',

    /* 404 / 500 */
    'error.404.title': 'Page Not Found',
    'error.404.desc':  "The page you're looking for doesn't exist or has been moved.",
    'error.500.title': 'Server Error',
    'error.500.desc':  "Something went wrong on our end. Please try again shortly.",
    'error.go_home':   'Go Home'
  },

  fr: {
    /* Navigation */
    'nav.home':    'Accueil',
    'nav.about':   '\u00c0 propos',
    'nav.projects':'Projets',
    'nav.skills':  'Comp\u00e9tences',
    'nav.beyond':  'Au-del\u00e0 de la Tech',
    'nav.contact': 'Contact',
    'nav.theme':   'Th\u00e8me',

    /* Hero */
    'hero.greeting': 'Bonjour, je suis',
    'hero.title':    'Ing\u00e9nieure en Infrastructure Cloud',
    'hero.cta':      'Voir mes Projets',

    /* About */
    'about.title': '\u00c0 propos de moi',
    'about.bio':   "Dipl\u00f4m\u00e9e en Technologies de l'Information Informatique du BCIT (CGPA 90/100, Avec Distinction), j'ai une exp\u00e9rience pratique en infrastructure cloud, administration des syst\u00e8mes et DevOps. Mon experience \u00e0 York House School m'a permis d'accompagner plus de 400 utilisateurs, g\u00e9rer plus de 1\u00a0000 appareils et piloter des mises \u00e0 niveau d'infrastructure — tout en approfondissant mes comp\u00e9tences en Kubernetes, Terraform et CI/CD.",
    'about.callout': 'Ing\u00e9nieure Infrastructure Cloud avec de solides bases en sysadmin IT',
    'about.exp1.title': 'Ing\u00e9nierie Cloud',
    'about.exp1.desc':  'Kubernetes, Docker, Terraform, AWS, GCP — conception et provisionnement d\u2019infrastructures cloud \u00e9volutives.',
    'about.exp2.title': 'Pratiques DevOps',
    'about.exp2.desc':  'Pipelines CI/CD avec Jenkins et GitLab CI, conteneurisation, automatisation et d\u00e9ploiements progressifs.',
    'about.exp3.title': 'Support IT & Sysadmin',
    'about.exp3.desc':  'Windows Server (Active Directory, DNS, DHCP, Strat\u00e9gie de groupe), administration Linux, r\u00e9seau Cisco Meraki.',
    'about.journey':     'Exp\u00e9rience & Formation',
    'about.job1.role':   'Analyste Junior, Stage IT',
    'about.job1.org':    'York House School — Vancouver, CB',
    'about.job1.date':   'Mai 2025 – D\u00e9c. 2025',
    'about.job1.desc':   'R\u00e9solution de 25 \u00e0 35 tickets/semaine dans un SLA de 24\u00a0h pour 400+ utilisateurs. Gestion de 1\u00a0000+ appareils Apple via Mosyle MDM. Administration Active Directory et renouvellement du r\u00e9seau Cisco Meraki du campus.',
    'about.edu1.role':   'Technologies de l\u2019Information Informatique, Dipl\u00f4me',
    'about.edu1.org':    'British Columbia Institute of Technology',
    'about.edu1.date':   'Janv. 2024 – Avr. 2026',
    'about.edu1.desc':   'CGPA 90/100, Avec Distinction. Cours : Infrastructure Cloud, Windows Server, Administration R\u00e9seau, Automatisation, ITIL. Certifications en cours : AZ-800, AZ-104, CompTIA Network+.',
    'about.job2.role':   'Sp\u00e9cialiste Compte Client',
    'about.job2.org':    'Shaw Communications — Vancouver, CB',
    'about.job2.date':   'Juil. 2022 – Nov. 2023',
    'about.job2.desc':   'Triage principal pour 40+ contacts techniques quotidiens. D\u00e9pass\u00e9 r\u00e9guli\u00e8rement les objectifs de satisfaction client (90%+).',
    'about.edu2.role':   'Administration des Affaires, Dipl\u00f4me',
    'about.edu2.org':    'Douglas College — New Westminster, CB',
    'about.edu2.date':   'Sept. 2019 – D\u00e9c. 2021',
    'about.edu2.desc':   'GPA 3,71/4,0.',

    /* Projects */
    'projects.title':    'Projets',
    'projects.featured': 'Projets Mis en Avant',
    'projects.labs':     'Labs & Travaux Suppl\u00e9mentaires',
    'project.view':      'Voir les D\u00e9tails',
    'project.github':    'GitHub',
    'project.demo':      'D\u00e9mo en direct',
    'project.video':     'Voir la D\u00e9mo',
    'project.back':      'Retour aux Projets',

    /* Project Detail */
    'project.overview.title':    'Vue d\u2019ensemble',
    'project.problem.title':     'Le Probl\u00e8me',
    'project.solution.title':    'La Solution',
    'project.technologies.title':'Technologies',
    'project.challenges.title':  'D\u00e9fis Cl\u00e9s',
    'project.impact.title':      'Impact & R\u00e9sultats',
    'project.architecture.title':'Vue de l\u2019Architecture',
    'project.diagram.caption':   "Sch\u00e9ma d\u2019architecture du syst\u00e8me",
    'project.links.title':       'Liens du Projet',

    /* Skills */
    'skills.title':              'Comp\u00e9tences & Technologies',
    'skills.cat.containers':     'Conteneurs & Orchestration',
    'skills.cat.cicd':           'CI/CD & DevOps',
    'skills.cat.iac':            'Infrastructure en tant que Code',
    'skills.cat.cloud':          'Plateformes Cloud',
    'skills.cat.backend':        'Backend & Web',
    'skills.cat.databases':      'Bases de Donn\u00e9es',
    'skills.cat.networking':     'R\u00e9seaux & Syst\u00e8mes',
    'skills.cat.languages':      'Langages & Scripts',

    /* Beyond Tech */
    'beyond.title':    'Au-del\u00e0 de la Tech',
    'beyond.subtitle': 'L\u2019impact d\u00e9passe les lignes de code — rassembler les gens \u00e0 travers la culture, la cuisine et la communaut\u00e9.',
    'beyond.badge.culture':   'Culture & Communaut\u00e9',
    'beyond.badge.volunteer': 'B\u00e9n\u00e9volat',

    'beyond.culinary.title': 'Cours de cuisine\u00a0: Pilipili — Samosas camerounais',
    'beyond.culinary.date':  '2025',
    'beyond.culinary.desc':  "Au-del\u00e0 des lignes de code, j\u2019ai eu l\u2019incroyable opportunit\u00e9 de partager un pan de mon h\u00e9ritage camerounais en animant un cours de cuisine pour mes coll\u00e8gues \u00e9tudiants, en leur apprenant \u00e0 pr\u00e9parer les Pilipili — des samosas traditionnels camerounais. Ce fut un beau rappel que l\u2019impact va bien au-del\u00e0 de la technologie\u00a0: rassembler les gens autour de la nourriture, de la culture et d\u2019exp\u00e9riences partag\u00e9es est tout aussi significatif que r\u00e9soudre des d\u00e9fis techniques.",
    'beyond.culinary.quote': '\u00ab\u00a0Une fa\u00e7on merveilleuse d\u2019avoir un impact au-del\u00e0 de la tech — et d\u2019\u00eatre connue autrement que comme \u201cla personne technique\u201d.\u00a0\u00bb',

    'beyond.volunteer.title':   'B\u00e9n\u00e9vole — Association Professionnelle Canadienne (CPCA)',
    'beyond.volunteer.date':    'Mai 2026 · 1 mois · Sciences et Technologie',
    'beyond.volunteer.desc':    'Contribution \u00e0 la r\u00e9ussite de l\u2019\u00e9v\u00e9nement CPCA 2026 en assurant la logistique, l\u2019inscription et la coordination des participants. Participation \u00e0 la cr\u00e9ation d\u2019un environnement accueillant et professionnel.',
    'beyond.volunteer.bullet1': 'Coordination logistique et soutien op\u00e9rationnel sur site',
    'beyond.volunteer.bullet2': 'Gestion des inscriptions et accueil des participants',
    'beyond.volunteer.bullet3': 'Contribution \u00e0 une atmosph\u00e8re conf\u00e9rence professionnelle et chaleureuse',

    /* Contact */
    'contact.title':    'Connectons-nous',
    'contact.subtitle': "Je suis toujours ouverte aux nouvelles opportunit\u00e9s, collaborations et \u00e9changes.",
    'contact.email':    'Courriel',
    'contact.github':   'GitHub',
    'contact.linkedin': 'LinkedIn',

    /* Footer */
    'footer.tagline': 'Ing\u00e9nieure en Infrastructure Cloud',
    'footer.rights':  'Tous droits r\u00e9serv\u00e9s.',

    /* 404 / 500 */
    'error.404.title': 'Page introuvable',
    'error.404.desc':  "La page que vous cherchez n\u2019existe pas ou a \u00e9t\u00e9 d\u00e9plac\u00e9e.",
    'error.500.title': 'Erreur serveur',
    'error.500.desc':  "Une erreur s\u2019est produite de notre c\u00f4t\u00e9. Veuillez r\u00e9essayer.",
    'error.go_home':   'Accueil'
  }
};
