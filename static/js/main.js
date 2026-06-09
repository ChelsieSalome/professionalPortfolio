/* =============================================================
   PORTFOLIO MAIN.JS
   Theme switching, language (i18n), scroll animations,
   navigation active states, mobile swipe dots, smooth scroll,
   footer year, accordion.
   ============================================================= */

/* =============================================================
   TRANSLATIONS OBJECT
   Every data-i18n key used in HTML must appear here.
   ============================================================= */
var translations = {

  /* ---- NAVIGATION ---- */
  'nav.home':     { en: 'Home',        fr: 'Accueil' },
  'nav.about':    { en: 'About',       fr: '\u00c0 propos' },
  'nav.projects': { en: 'Projects',    fr: 'Projets' },
  'nav.skills':   { en: 'Skills',      fr: 'Comp\u00e9tences' },
  'nav.beyond':   { en: 'Beyond Tech', fr: 'Au-del\u00e0 de la Tech' },
  'nav.contact':  { en: 'Contact',     fr: 'Contact' },
  'nav.theme':    { en: 'Theme',       fr: 'Th\u00e8me' },

  /* ---- HERO ---- */
  'hero.greeting':    { en: "Hello, I'm", fr: 'Bonjour, je suis' },
  'hero.title':       { en: 'IT Professional \u00b7 Cloud Engineering & Systems Administration', fr: 'Professionnelle IT \u00b7 Ing\u00e9nierie Cloud & Administration Syst\u00e8mes' },
  'hero.cta_projects':{ en: 'View My Projects', fr: 'Voir mes Projets' },
  'hero.cta_contact': { en: 'Get in Touch',     fr: 'Me Contacter' },

  /* ---- ABOUT ---- */
  'about.title':  { en: 'About Me', fr: '\u00c0 propos de moi' },
  'about.bio':    {
    en: "I'm a BCIT Computer Information Technology graduate (CGPA 90/100, With Distinction) with hands-on experience across cloud infrastructure, IT systems administration, and DevOps practices. My background spans a Junior Analyst IT co-op at York House School, academic cloud engineering projects, and a drive to build systems that are reliable, automated, and maintainable.",
    fr: "Dipl\u00f4m\u00e9e en Technologies de l\u0027Information Informatique du BCIT (CGPA 90/100, Avec Distinction) avec une exp\u00e9rience pratique en infrastructure cloud, administration des syst\u00e8mes informatiques et pratiques DevOps. Mon parcours comprend un stage de Analyste Junior IT \u00e0 York House School, des projets acad\u00e9miques d\u0027ing\u00e9nierie cloud, et la passion de construire des syst\u00e8mes fiables, automatis\u00e9s et maintenables."
  },
  'about.callout': {
    en: 'Cloud Infrastructure Engineer with strong foundations in IT Systems Administration',
    fr: 'Ing\u00e9nieure en Infrastructure Cloud avec de solides bases en Administration des Syst\u00e8mes IT'
  },
  'about.col1.title': { en: 'Cloud Engineering',     fr: 'Ing\u00e9nierie Cloud' },
  'about.col1.desc':  { en: 'Kubernetes, Docker, Terraform, AWS, Azure, GCP, and IaC \u2014 provisioning and orchestrating cloud infrastructure at scale.', fr: 'Kubernetes, Docker, Terraform, AWS, Azure, GCP et IaC \u2014 provisionnement et orchestration d\u0027une infrastructure cloud \u00e0 grande \u00e9chelle.' },
  'about.col2.title': { en: 'DevOps Practices',       fr: 'Pratiques DevOps' },
  'about.col2.desc':  { en: 'CI/CD pipelines with Jenkins and GitLab CI, containerization, automation, and rolling deployment strategies.', fr: 'Pipelines CI/CD avec Jenkins et GitLab CI, conteneurisation, automatisation et strat\u00e9gies de d\u00e9ploiement progressif.' },
  'about.col3.title': { en: 'IT Support & Sysadmin', fr: 'Support IT & Administration Syst\u00e8me' },
  'about.col3.desc':  { en: 'Proficient in Windows Server environments (Active Directory, DNS, DHCP), Linux administration, and network troubleshooting. Experienced in system configuration, user management, and resolving technical issues in enterprise IT settings.', fr: 'Ma\u00eetrise des environnements Windows Server (Active Directory, DNS, DHCP), administration Linux et d\u00e9pannage r\u00e9seau. Exp\u00e9rience en configuration syst\u00e8me, gestion des utilisateurs et r\u00e9solution de probl\u00e8mes techniques en entreprise.' },

  /* ---- ABOUT TIMELINE ---- */
  'about.timeline.title': { en: 'Experience & Education', fr: 'Exp\u00e9rience & Formation' },
  'about.timeline.job1.title': { en: 'Junior Analyst, IT Intern', fr: 'Analyste Junior, Stage IT' },
  'about.timeline.job1.org':   { en: 'York House School \u2014 Vancouver, BC', fr: 'York House School \u2014 Vancouver, CB' },
  'about.timeline.job1.b1':    { en: 'Resolved 25\u201335 tickets/week within a 24-hour SLA across a 400-person campus via Jitbit.', fr: 'R\u00e9solution de 25\u201335 tickets/semaine dans un SLA de 24 heures sur un campus de 400 personnes via Jitbit.' },
  'about.timeline.job1.b2':    { en: 'Managed 1,000+ Apple devices with Mosyle MDM and built Bash/Python automation scripts.', fr: 'Gestion de plus de 1 000 appareils Apple avec Mosyle MDM et d\u00e9veloppement de scripts d\u0027automatisation Bash/Python.' },
  'about.timeline.job1.b3':    { en: 'Administered Active Directory: provisioning, deprovisioning, OU structure, Group Policy.', fr: 'Administration Active Directory : provisionnement, d\u00e9provisionnement, structure OU, Strat\u00e9gie de groupe.' },
  'about.timeline.job1.b4':    { en: 'Led a network infrastructure refresh across three buildings using Cisco Meraki.', fr: 'Dirig\u00e9 le renouvellement de l\u0027infrastructure r\u00e9seau dans trois b\u00e2timents avec Cisco Meraki.' },
  'about.timeline.edu1.title': { en: 'Computer Information Technology, Diploma', fr: 'Technologies de l\u0027Information Informatique, Dipl\u00f4me' },
  'about.timeline.edu1.org':   { en: 'British Columbia Institute of Technology \u2014 Vancouver, BC', fr: 'Institut de Technologie de la Colombie-Britannique \u2014 Vancouver, CB' },
  'about.timeline.edu1.b1':    { en: 'CGPA 90/100 \u00b7 With Distinction', fr: 'CGPA 90/100 \u00b7 Avec Distinction' },
  'about.timeline.edu1.b2':    { en: 'Coursework: Cloud Infrastructure, Windows Server Administration, Network Administration, Systems Automation, IT Service Management (ITIL).', fr: 'Cours : Infrastructure Cloud, Administration Windows Server, Administration R\u00e9seau, Automatisation des Syst\u00e8mes, Gestion des Services IT (ITIL).' },
  'about.timeline.edu1.b3':    { en: 'Certifications in progress: AZ-800, AZ-104, CompTIA Network+ (expected Jun 2026).', fr: 'Certifications en cours : AZ-800, AZ-104, CompTIA Network+ (pr\u00e9vues juin 2026).' },
  'about.timeline.job2.title': { en: 'Customer Account Specialist', fr: 'Sp\u00e9cialiste Compte Client' },
  'about.timeline.job2.org':   { en: 'Shaw Communications \u2014 Vancouver, BC', fr: 'Shaw Communications \u2014 Vancouver, CB' },
  'about.timeline.job2.b1':    { en: 'Primary triage for 40+ daily technical support contacts; resolved hardware, connectivity, and software issues.', fr: 'Triage principal pour plus de 40 contacts de support technique quotidiens; r\u00e9solution de probl\u00e8mes mat\u00e9riels, de connectivit\u00e9 et logiciels.' },
  'about.timeline.job2.b2':    { en: 'Consistently exceeded customer satisfaction KPI targets (90%+).', fr: 'D\u00e9pass\u00e9 r\u00e9guli\u00e8rement les cibles KPI de satisfaction client (90%+).' },
  'about.timeline.edu2.title': { en: 'Business Administration, Diploma', fr: 'Administration des Affaires, Dipl\u00f4me' },
  'about.timeline.edu2.org':   { en: 'Douglas College \u2014 New Westminster, BC', fr: 'Douglas College \u2014 New Westminster, CB' },

  /* ---- PROJECTS ---- */
  'projects.title':         { en: 'Projects',          fr: 'Projets' },
  'projects.featured_label':{ en: 'Featured Projects', fr: 'Projets Mis en Avant' },
  'projects.labs_label':    { en: 'Labs & Additional Work', fr: 'Labs & Travaux Suppl\u00e9mentaires' },
  'projects.view_details':  { en: 'View Details',      fr: 'Voir D\u00e9tails' },
  'projects.github':        { en: 'GitHub',            fr: 'GitHub' },
  'projects.watch':         { en: 'Watch Demo',        fr: 'Voir D\u00e9mo' },
  'projects.none':          { en: 'No featured projects found.', fr: 'Aucun projet mis en avant trouv\u00e9.' },
  'projects.live_demo':     { en: 'Live Demo',         fr: 'D\u00e9mo en Direct' },

  /* ---- PROJECT DETAIL ---- */
  'project.back':           { en: 'Back to Projects',    fr: 'Retour aux Projets' },
  'project.overview':       { en: 'Overview',            fr: 'Vue d\u0027ensemble' },
  'project.problem':        { en: 'Problem Statement',   fr: '\u00c9nonc\u00e9 du Probl\u00e8me' },
  'project.solution':       { en: 'Solution Approach',   fr: 'Approche de Solution' },
  'project.challenges':     { en: 'Technical Challenges', fr: 'D\u00e9fis Techniques' },
  'project.impact':         { en: 'Impact & Results',    fr: 'Impact & R\u00e9sultats' },
  'project.diagram.caption':{ en: 'Architecture Overview', fr: 'Vue d\u0027ensemble de l\u0027Architecture' },
  'project.video':          { en: 'Video Walkthrough',   fr: 'Pr\u00e9sentation Vid\u00e9o' },

  /* ---- SKILLS ---- */
  'skills.title':         { en: 'Skills & Technologies', fr: 'Comp\u00e9tences & Technologies' },
  'skills.windows_title': { en: 'Windows Server Administration', fr: 'Administration Windows Server' },
  'skills.windows_desc':  { en: 'Hands-on experience: Active Directory, Group Policy, DNS, DHCP, IIS', fr: 'Exp\u00e9rience pratique : Active Directory, Strat\u00e9gie de groupe, DNS, DHCP, IIS' },
  'skills.cat1': { en: 'Container & Orchestration',  fr: 'Conteneurs & Orchestration' },
  'skills.cat2': { en: 'CI/CD & DevOps',              fr: 'CI/CD & DevOps' },
  'skills.cat3': { en: 'Infrastructure as Code',      fr: 'Infrastructure en tant que Code' },
  'skills.cat4': { en: 'Cloud Platforms',             fr: 'Plateformes Cloud' },
  'skills.cat5': { en: 'Backend & Web',               fr: 'Backend & Web' },
  'skills.cat6': { en: 'Databases',                   fr: 'Bases de Donn\u00e9es' },
  'skills.cat7': { en: 'Networking & Systems',        fr: 'R\u00e9seaux & Syst\u00e8mes' },
  'skills.cat8': { en: 'Languages & Scripting',       fr: 'Langages & Scripts' },
  'skills.cat9': { en: 'Version Control',             fr: 'Contr\u00f4le de Version' },

  /* ---- BEYOND TECH ---- */
  'beyond.title':    { en: 'Beyond Tech', fr: 'Au-del\u00e0 de la Tech' },
  'beyond.subtitle': { en: 'Impact goes beyond lines of code.', fr: 'L\u0027impact va au-del\u00e0 des lignes de code.' },
  'beyond.img_placeholder': { en: 'Image coming soon', fr: 'Image \u00e0 venir' },

  'beyond.culinary_badge': { en: 'Culture & Community', fr: 'Culture et Communaut\u00e9' },
  'beyond.culinary_title': { en: 'Culinary Masterclass: Pilipili Cameroonian Samosas', fr: 'Cours de Cuisine : Pilipili Camerounais - Samosas Traditionnels' },
  'beyond.culinary_date':  { en: '2025', fr: '2025' },
  'beyond.culinary_desc':  {
    en: "Beyond lines of code, I had the incredible opportunity to share a piece of my Cameroonian heritage by hosting a culinary masterclass for fellow students, teaching them how to make Pilipili \u2014 traditional Cameroonian Samosas. It was a beautiful reminder that making an impact goes far beyond technology: bringing people together through food, culture, and shared experiences is just as meaningful as solving technical challenges.",
    fr: "Au-del\u00e0 des lignes de code, j\u0027ai eu l\u0027incroyable opportunit\u00e9 de partager un aspect de mon h\u00e9ritage camerounais en animant un cours de cuisine pour mes coll\u00e8gues \u00e9tudiants, en leur apprenant \u00e0 pr\u00e9parer les Pilipili \u2014 des samosas traditionnels camerounais. Ce fut un magnifique rappel que l\u0027impact va bien au-del\u00e0 de la technologie : r\u00e9unir les gens autour de la nourriture, de la culture et des exp\u00e9riences partag\u00e9es est tout aussi significatif que r\u00e9soudre des d\u00e9fis techniques."
  },
  'beyond.culinary_quote': {
    en: "\u201cA wonderful way to make an impact beyond tech \u2014 and to be known as more than just the tech person.\u201d",
    fr: "\u201cUne fa\u00e7on merveilleuse d\u0027avoir un impact au-del\u00e0 de la tech \u2014 et d\u0027\u00eatre connue comme bien plus que la personne tech.\u201d"
  },

  'beyond.volunteer_badge': { en: 'Volunteering', fr: 'B\u00e9n\u00e9volat' },
  'beyond.volunteer_title': { en: 'Volunteer \u2014 Canadian Professional Association', fr: 'B\u00e9n\u00e9vole \u2014 Association Professionnelle Canadienne' },
  'beyond.volunteer_date':  { en: 'May 2026 \u00b7 1 month \u00b7 Science and Technology', fr: 'Mai 2026 \u00b7 1 mois \u00b7 Sciences et Technologie' },
  'beyond.volunteer_desc':  {
    en: 'Supported the successful execution of the CPCA 2026 Event by assisting with logistics, registration, and attendee coordination. Contributed to creating a welcoming environment and ensuring smooth operations for participants and speakers.',
    fr: 'Soutenu la bonne ex\u00e9cution de l\u0027\u00e9v\u00e9nement CPCA 2026 en aidant avec la logistique, l\u0027inscription et la coordination des participants. Contribu\u00e9 \u00e0 cr\u00e9er un environnement accueillant et assurer le bon d\u00e9roulement pour les participants et les intervenants.'
  },
  'beyond.volunteer_b1': { en: 'Logistics coordination and on-site operational support', fr: 'Coordination logistique et soutien op\u00e9rationnel sur site' },
  'beyond.volunteer_b2': { en: 'Registration desk management and attendee check-in', fr: 'Gestion du bureau d\u0027inscription et accueil des participants' },
  'beyond.volunteer_b3': { en: 'Contributed to a professional, welcoming conference atmosphere', fr: 'Contribution \u00e0 une atmosph\u00e8re conf\u00e9rence professionnelle et accueillante' },

  /* ---- CONTACT ---- */
  'contact.title':     { en: "Let's Connect",      fr: 'Connectons-nous' },
  'contact.subtitle':  { en: "I'm always open to new opportunities and collaborations.", fr: 'Je suis toujours ouverte aux nouvelles opportunit\u00e9s et collaborations.' },
  'contact.github':    { en: 'GitHub',   fr: 'GitHub' },
  'contact.linkedin':  { en: 'LinkedIn', fr: 'LinkedIn' },
  'contact.email':     { en: 'Email',    fr: 'Courriel' },
  'contact.cta_email':   { en: 'Send Me an Email',      fr: 'Envoyez-moi un Email' },
  'contact.cta_linkedin':{ en: 'Connect on LinkedIn',   fr: 'Me Rejoindre sur LinkedIn' },

  /* ---- FOOTER ---- */
  'footer.tagline': { en: 'Cloud Infrastructure Engineer', fr: 'Ing\u00e9nieure en Infrastructure Cloud' },
  'footer.rights':  { en: 'All rights reserved.', fr: 'Tous droits r\u00e9serv\u00e9s.' }
};

/* =============================================================
   THEME SYSTEM
   ============================================================= */
function getStoredTheme() {
  try { return localStorage.getItem('portfolio-theme'); } catch(e) { return null; }
}

function setStoredTheme(val) {
  try { localStorage.setItem('portfolio-theme', val); } catch(e) {}
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  var btnDesktop = document.getElementById('theme-toggle');
  var btnMobile  = document.getElementById('mobile-theme-toggle');
  var label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  if (btnDesktop) btnDesktop.setAttribute('aria-label', label);
  if (btnMobile)  btnMobile.setAttribute('aria-label', label);
}

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme') || 'dark';
  var next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  setStoredTheme(next);
}

function initTheme() {
  var stored = getStoredTheme();
  if (stored === 'light' || stored === 'dark') {
    applyTheme(stored);
  } else {
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!getStoredTheme()) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

/* =============================================================
   LANGUAGE / i18n SYSTEM
   ============================================================= */
var currentLang = 'en';

function getStoredLang() {
  try { return localStorage.getItem('portfolio-lang'); } catch(e) { return null; }
}

function setStoredLang(val) {
  try { localStorage.setItem('portfolio-lang', val); } catch(e) {}
}

function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  var elements = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  }
  var btnEn = document.getElementById('lang-en');
  var btnFr = document.getElementById('lang-fr');
  if (btnEn) {
    btnEn.classList.toggle('active', lang === 'en');
    btnEn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
  }
  if (btnFr) {
    btnFr.classList.toggle('active', lang === 'fr');
    btnFr.setAttribute('aria-pressed', lang === 'fr' ? 'true' : 'false');
  }
}

function initLanguage() {
  var stored = getStoredLang();
  var lang = (stored === 'en' || stored === 'fr') ? stored : 'en';
  applyTranslations(lang);
}

/* =============================================================
   SCROLL ANIMATIONS (IntersectionObserver)
   ============================================================= */
function initScrollAnimations() {
  if (!window.IntersectionObserver) {
    var els = document.querySelectorAll('.animate-on-scroll');
    for (var i = 0; i < els.length; i++) {
      els[i].classList.add('visible');
    }
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
    observer.observe(el);
  });
}

/* =============================================================
   ACTIVE NAV LINK
   ============================================================= */
function initActiveNav() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link[data-section], .mobile-nav-item[data-section]');

  if (!sections.length || !navLinks.length) return;
  if (!window.IntersectionObserver) return;

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');
        navLinks.forEach(function(link) {
          link.classList.toggle('active', link.getAttribute('data-section') === id);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(function(s) { obs.observe(s); });
}

/* =============================================================
   MOBILE SCROLL DOTS
   ============================================================= */
function initScrollDots() {
  var grid = document.getElementById('featured-grid');
  var dotsContainer = document.getElementById('featured-dots');
  if (!grid || !dotsContainer) return;

  var dots = dotsContainer.querySelectorAll('.scroll-dot');
  if (!dots.length) return;

  var debounceTimer;
  grid.addEventListener('scroll', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() {
      var cardWidth = grid.firstElementChild ? grid.firstElementChild.offsetWidth + 16 : grid.offsetWidth;
      var idx = Math.round(grid.scrollLeft / cardWidth);
      idx = Math.max(0, Math.min(idx, dots.length - 1));
      dots.forEach(function(d, i) { d.classList.toggle('active', i === idx); });
    }, 50);
  }, { passive: true });
}

/* =============================================================
   SMOOTH SCROLL
   ============================================================= */
function initSmoothScroll() {
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href^="#"], a[href*="/#"]');
    if (!link) return;
    var href = link.getAttribute('href');
    var hash = href.indexOf('#') !== -1 ? '#' + href.split('#')[1] : null;
    if (!hash) return;
    var target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();

    var isMobile = window.innerWidth < 769;
    var offset = isMobile ? 0 : 64;
    var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
}

/* =============================================================
   FOOTER YEAR
   ============================================================= */
function initFooterYear() {
  var el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* =============================================================
   INIT
   ============================================================= */
document.addEventListener('DOMContentLoaded', function() {

  /* Theme */
  initTheme();

  /* Language */
  initLanguage();

  /* Theme toggle buttons */
  var btnDesktop = document.getElementById('theme-toggle');
  var btnMobile  = document.getElementById('mobile-theme-toggle');
  if (btnDesktop) btnDesktop.addEventListener('click', toggleTheme);
  if (btnMobile)  btnMobile.addEventListener('click', toggleTheme);

  /* Language toggle buttons */
  var btnEn = document.getElementById('lang-en');
  var btnFr = document.getElementById('lang-fr');
  if (btnEn) {
    btnEn.addEventListener('click', function() {
      applyTranslations('en');
      setStoredLang('en');
    });
  }
  if (btnFr) {
    btnFr.addEventListener('click', function() {
      applyTranslations('fr');
      setStoredLang('fr');
    });
  }

  /* Footer year */
  initFooterYear();

  /* Scroll animations */
  initScrollAnimations();

  /* Active nav */
  initActiveNav();

  /* Scroll dots (mobile featured gallery) */
  initScrollDots();

  /* Smooth scroll */
  initSmoothScroll();
});
