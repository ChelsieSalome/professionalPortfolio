/* =============================================================
   main.js
   Theme, i18n (full project content translation), animations,
   active nav, smooth scroll, accordion, footer year.
   ============================================================= */

/* ----------------------------------------------------------------
   HELPERS
   ---------------------------------------------------------------- */
function t(key) {
  var lang = currentLang || 'en';
  if (translations && translations[lang] && translations[lang][key] !== undefined) return translations[lang][key];
  if (translations && translations.en && translations.en[key] !== undefined) return translations.en[key];
  return key;
}

/** Return the FR field if available, else the EN field. */
function getProjectField(project, field, lang) {
  if (!project) return '';
  if (lang === 'fr') {
    var frKey = field + '_fr';
    if (project[frKey] && String(project[frKey]).trim() !== '') return project[frKey];
  }
  return project[field] || '';
}

/* ----------------------------------------------------------------
   STATE
   ---------------------------------------------------------------- */
var currentLang  = 'en';
var currentTheme = 'dark';

/* ----------------------------------------------------------------
   THEME
   ---------------------------------------------------------------- */
function initTheme() {
  var stored = null;
  try { stored = localStorage.getItem('portfolio-theme'); } catch(e) {}
  if (stored === 'light' || stored === 'dark') {
    currentTheme = stored;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    currentTheme = 'light';
  } else {
    currentTheme = 'dark';
  }
  applyTheme(currentTheme);
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      try { if (!localStorage.getItem('portfolio-theme')) applyTheme(e.matches ? 'dark' : 'light'); } catch(e2) {}
    });
  }
}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('portfolio-theme', theme); } catch(e) {}
  updateThemeIcon();
}

function toggleTheme() { applyTheme(currentTheme === 'dark' ? 'light' : 'dark'); }

function updateThemeIcon() {
  var isDark = currentTheme === 'dark';
  document.querySelectorAll('.icon-sun').forEach(function(el)  { el.style.display = isDark ? 'block' : 'none'; });
  document.querySelectorAll('.icon-moon').forEach(function(el) { el.style.display = isDark ? 'none' : 'block'; });
  document.querySelectorAll('.theme-toggle').forEach(function(btn) {
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

/* ----------------------------------------------------------------
   LANGUAGE — translates EVERYTHING including accordion bodies
   ---------------------------------------------------------------- */
function initLanguage() {
  var stored = null;
  try { stored = localStorage.getItem('portfolio-lang'); } catch(e) {}
  currentLang = (stored === 'en' || stored === 'fr') ? stored : 'en';
  applyLanguage(currentLang, true);
}

function setLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  try { localStorage.setItem('portfolio-lang', lang); } catch(e) {}
  applyLanguage(lang, false);
}

function applyLanguage(lang, isInit) {
  /* 1. UI labels via data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var val = t(el.getAttribute('data-i18n'));
    if (val !== el.getAttribute('data-i18n')) el.textContent = val;
  });

  /* 2. Language button active state */
  var bEn = document.getElementById('lang-en');
  var bFr = document.getElementById('lang-fr');
  if (bEn) { bEn.classList.toggle('active', lang === 'en'); bEn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false'); }
  if (bFr) { bFr.classList.toggle('active', lang === 'fr'); bFr.setAttribute('aria-pressed', lang === 'fr' ? 'true' : 'false'); }

  /* 3. Translate project cards on homepage */
  translateProjectCards(lang);

  /* 4. Translate project detail page (accordion bodies + header fields) */
  translateDetailPage(lang);

  /* 5. html lang attribute */
  document.documentElement.setAttribute('lang', lang);
}

/* ---- Homepage project cards ---- */
function translateProjectCards(lang) {
  if (typeof window.PROJECTS_DATA === 'undefined') return;
  document.querySelectorAll('.project-card[data-project-id]').forEach(function(card) {
    var projId = parseInt(card.getAttribute('data-project-id'), 10);
    var proj = null;
    for (var j = 0; j < window.PROJECTS_DATA.length; j++) {
      if (window.PROJECTS_DATA[j].id === projId) { proj = window.PROJECTS_DATA[j]; break; }
    }
    if (!proj) return;
    var badge = card.querySelector('.project-type-badge');
    var title = card.querySelector('.project-card-title');
    var desc  = card.querySelector('.project-card-desc');
    if (badge) badge.textContent = getProjectField(proj, 'type', lang);
    if (title) title.textContent = getProjectField(proj, 'title', lang);
    if (desc)  desc.textContent  = getProjectField(proj, 'short_description', lang);
  });
}

/* ---- Project detail page ----
   Each accordion body has data-field="full_description|problem|solution|challenges|impact"
   The header span has class proj-title / proj-type.
   We update ALL of them so switching language mid-page works instantly. */
function translateDetailPage(lang) {
  if (typeof window.CURRENT_PROJECT === 'undefined') return;
  var proj = window.CURRENT_PROJECT;

  /* Header title and type badge */
  var titleEl = document.querySelector('.proj-title');
  var typeEl  = document.querySelector('.proj-type');
  if (titleEl) titleEl.textContent = getProjectField(proj, 'title', lang);
  if (typeEl)  typeEl.textContent  = getProjectField(proj, 'type', lang);

  /* All accordion bodies — targeted by data-field attribute */
  document.querySelectorAll('.accordion-body[data-field]').forEach(function(body) {
    var field = body.getAttribute('data-field');
    body.textContent = getProjectField(proj, field, lang);
  });

  /* Page <title> */
  var titleTag = document.querySelector('title');
  if (titleTag) titleTag.textContent = getProjectField(proj, 'title', lang) + ' | Chelsie Salome';
}

/* ----------------------------------------------------------------
   SCROLL ANIMATIONS
   ---------------------------------------------------------------- */
function initScrollAnimations() {
  if (!window.IntersectionObserver) {
    document.querySelectorAll('.animate-on-scroll').forEach(function(el) { el.classList.add('visible'); });
    return;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.animate-on-scroll').forEach(function(el) { obs.observe(el); });
}

/* ----------------------------------------------------------------
   ACTIVE NAV
   ---------------------------------------------------------------- */
function initActiveNav() {
  var sections = document.querySelectorAll('section[id]');
  var links    = document.querySelectorAll('.nav-link[data-section], .mobile-tab[data-section]');
  if (!sections.length || !window.IntersectionObserver) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        links.forEach(function(l) { l.classList.toggle('active', l.getAttribute('data-section') === id); });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(function(s) { obs.observe(s); });
}

/* ----------------------------------------------------------------
   SMOOTH SCROLL
   ---------------------------------------------------------------- */
function initSmoothScroll() {
  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href) return;
    var hash = '';
    if (href.startsWith('#')) hash = href;
    else if (href.includes('/#')) hash = '#' + href.split('/#')[1];
    else return;
    var target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    var offset = window.innerWidth <= 767 ? 0 : 72;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
  });
}

/* ----------------------------------------------------------------
   ACCORDION
   ---------------------------------------------------------------- */
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item   = btn.closest('.accordion-item');
      var body   = item.querySelector('.accordion-body');
      var isOpen = item.classList.contains('open');
      /* close all */
      document.querySelectorAll('.accordion-item').forEach(function(i) {
        i.classList.remove('open');
        var b = i.querySelector('.accordion-body'); if (b) b.hidden = true;
        var h = i.querySelector('.accordion-header'); if (h) h.setAttribute('aria-expanded', 'false');
      });
      /* open clicked one if it was closed */
      if (!isOpen) {
        item.classList.add('open');
        body.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
  /* Open first by default */
  var first = document.querySelector('.accordion-item');
  if (first) {
    first.classList.add('open');
    var fb = first.querySelector('.accordion-body'); if (fb) fb.hidden = false;
    var fh = first.querySelector('.accordion-header'); if (fh) fh.setAttribute('aria-expanded', 'true');
  }
}

/* ----------------------------------------------------------------
   MOBILE SCROLL DOTS
   ---------------------------------------------------------------- */
function initScrollDots() {
  var grid = document.getElementById('featured-grid');
  var dotsWrap = document.getElementById('featured-dots');
  if (!grid || !dotsWrap) return;
  var dots = dotsWrap.querySelectorAll('.scroll-dot');
  if (!dots.length) return;
  var timer;
  grid.addEventListener('scroll', function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      var w   = grid.firstElementChild ? (grid.firstElementChild.offsetWidth + 24) : grid.offsetWidth;
      var idx = Math.min(Math.round(grid.scrollLeft / w), dots.length - 1);
      dots.forEach(function(d, i) { d.classList.toggle('active', i === idx); });
    }, 60);
  }, { passive: true });
}

/* ----------------------------------------------------------------
   FOOTER YEAR
   ---------------------------------------------------------------- */
function initFooterYear() {
  var el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ----------------------------------------------------------------
   BOOTSTRAP
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initLanguage();

  document.querySelectorAll('.theme-toggle').forEach(function(btn) { btn.addEventListener('click', toggleTheme); });
  var bEn = document.getElementById('lang-en');
  var bFr = document.getElementById('lang-fr');
  if (bEn) bEn.addEventListener('click', function() { setLanguage('en'); });
  if (bFr) bFr.addEventListener('click', function() { setLanguage('fr'); });

  initFooterYear();
  initScrollAnimations();
  initActiveNav();
  initSmoothScroll();
  initAccordion();
  initScrollDots();
});
