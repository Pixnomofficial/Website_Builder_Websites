// ==================== TEMPLATE: GLASSMORPHISM ====================
function buildGlassmorphism(biz, D, reviews, imgs, portfolioItems, faqItems, typeName, imgBase, imgP, imgPs, navScript) {
  const A = '#fcd303';
  const GRN = '#10b981';
  const BG = '#ffffff';
  const TC = '#000000';
  const MU = '#9f9fa6';
  const BD = '#e8edf3';
  const SF = '#e8edf3';
  const SFS = '#f7f7f7';
  const heroImg = resolveImageUrl(imgs.hero, imgP);
  const aboutImg = resolveImageUrl(imgs.about, imgP);
  const typeNameLower = typeName.toLowerCase();
  const year = new Date().getFullYear();
  const startYear = year - parseInt(biz.years || 15);

  const serviceIcons = ['⚡', '🔌', '💡', '🌀', '🔧', '🚗'];
  const serviceDescs = [
    `Professional wiring services tailored to your needs. Licensed, insured, and guaranteed.`,
    `Upgrade your electrical panel to handle modern demands safely and efficiently.`,
    `Improve your space with professional indoor and outdoor lighting installation.`,
    `Professional ceiling fan installation and replacement.`,
    `Fast repairs for damaged, loose, or unsafe outlets.`,
    `Electric vehicle charging station installation.`
  ];

  const serviceCards = biz.services.map((s, i) => `
    <article class="card reveal${i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : ''}">
      <div class="card-icon">${serviceIcons[i % serviceIcons.length]}</div>
      <h3>${s}</h3>
      <p>${serviceDescs[i % serviceDescs.length]}</p>
    </article>`).join('');

  const whyIcons = ['🏆', '⚡', '💰'];
  const whyTitles = ['Expert Team', 'Quick Response', 'Honest Pricing'];
  const whyDescs = [
    `Certified professionals with years of hands-on experience.`,
    `Bookings confirmed quickly with emergency support available.`,
    `Transparent quotes, competitive rates, and no surprise charges.`
  ];
  const whyCards = whyTitles.map((t, i) => `
    <article class="card reveal${i === 1 ? ' delay-1' : i === 2 ? ' delay-2' : ''}">
      <div class="card-icon">${whyIcons[i]}</div>
      <h3>${t}</h3>
      <p>${whyDescs[i]}</p>
    </article>`).join('');

  const portfolioImgs = [
    'photo-1621905252507-b35492cc74b4', 'photo-1621905251189-08b45d6a269e',
    'photo-1621905251918-48416bd8575a'
  ];
  const portfolioTitles = ['Modern Home Wiring', 'Commercial Panel Upgrade', 'LED Lighting Design'];
  const workCards = portfolioItems.slice(0, 3).map((p, i) => `
    <article class="card project-card reveal${i === 1 ? ' delay-1' : i === 2 ? ' delay-2' : ''}">
      <img class="project-image" src="${resolveImageUrl(p.img || portfolioImgs[i], imgP)}" alt="${p.title || portfolioTitles[i]}">
      <div class="project-content">
        <h3>${p.title || portfolioTitles[i]}</h3>
        <small>${year - i} · ${biz.city}</small>
      </div>
    </article>`).join('');

  const reviewCards = reviews.slice(0, 3).map((r, i) => `
    <article class="review-card reveal${i === 1 ? ' delay-1' : i === 2 ? ' delay-2' : ''}">
      <div class="stars">★★★★★</div>
      <p class="review-text">"${r.text || r}"</p>
      <div class="review-author">
        <div class="avatar">${(r.name || r.author || 'A').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}</div>
        <div><strong>${r.name || r.author || 'Client'}</strong><br><small>${r.title || r.date || ''}</small></div>
      </div>
    </article>`).join('');

  const faqHtml = faqItems.slice(0, 6).map(([q, a], i) => `
    <div class="faq-item reveal${i === 1 ? ' delay-1' : i === 2 ? ' delay-2' : i === 3 ? ' delay-3' : ''}">
      <button class="faq-question" type="button" onclick="toggleFaq(this)">${q}<span class="faq-icon">+</span></button>
      <div class="faq-answer">${a}</div>
    </div>`).join('');

  const allServiceOpts = biz.services.map(s => `<option>${s}</option>`).join('');

  return `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${biz.name} — ${typeName}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root{--bg:${BG};--surface:${SF};--surface-soft:${SFS};--text:${TC};--muted:${MU};--yellow:${A};--green:${GRN};--border:${BD};--radius:16px;--button-radius:10px;--container:1200px;--ease:cubic-bezier(.19,1,.22,1)}
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:Geist,Arial,sans-serif;line-height:1.5;overflow-x:hidden;-webkit-font-smoothing:antialiased}
body.menu-open{overflow:hidden}
a{color:inherit;text-decoration:none}button,input,textarea,select{font:inherit}button,a{-webkit-tap-highlight-color:transparent}
img{display:block;max-width:100%}.container{width:min(100% - 48px,var(--container));margin-inline:auto}
body::before{content:"";position:fixed;inset:0;z-index:-2;pointer-events:none;opacity:.42;background-image:linear-gradient(to right,rgba(232,237,243,.75) 1px,transparent 1px),linear-gradient(to bottom,rgba(232,237,243,.75) 1px,transparent 1px);background-size:40px 40px}
header{position:sticky;top:0;z-index:900;width:100%;background:rgba(255,255,255,.94);border-bottom:1px solid var(--border);backdrop-filter:blur(16px);transition:padding .3s ease,box-shadow .3s ease}
header.scrolled{box-shadow:0 8px 30px rgba(0,0,0,.06)}
.nav-inner{min-height:78px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.logo{flex-shrink:0;font-size:21px;font-weight:800;letter-spacing:-1px}
.nav-links{display:flex;align-items:center;gap:28px;margin-left:auto}
.nav-link{position:relative;padding:8px 0;color:var(--muted);font-size:15px;font-weight:500;transition:color .25s ease}
.nav-link::after{content:"";position:absolute;left:0;bottom:0;width:0;height:2px;border-radius:10px;background:var(--yellow);transition:width .3s var(--ease)}
.nav-link:hover,.nav-link.active{color:var(--text)}.nav-link:hover::after,.nav-link.active::after{width:100%}
.nav-actions{display:flex;align-items:center;gap:14px;margin-left:24px}
.menu-button{display:none;width:44px;height:44px;border:0;border-radius:10px;background:var(--surface);color:var(--text);cursor:pointer;font-size:22px}
.btn{display:inline-flex;min-height:46px;align-items:center;justify-content:center;gap:8px;padding:12px 24px;border:0;border-radius:var(--button-radius);cursor:pointer;font-size:15px;font-weight:700;transition:transform .3s var(--ease),box-shadow .3s ease,background .3s ease,color .3s ease}
.btn:hover{transform:translateY(-3px)}.btn-primary{background:var(--yellow);color:#000;box-shadow:0 8px 24px rgba(252,211,3,.25)}
.btn-primary:hover{box-shadow:0 14px 32px rgba(252,211,3,.38)}
.btn-dark{background:#000;color:var(--yellow)}.btn-secondary{background:var(--surface-soft);border:1px solid var(--border);color:#000}
.btn-secondary:hover{background:var(--surface)}
.mobile-overlay{display:none;position:fixed;inset:0;z-index:1100;background:rgba(0,0,0,.35);opacity:0;transition:opacity .3s ease}
.mobile-overlay.open{display:block;opacity:1}
.mobile-menu{display:none;position:fixed;top:0;right:0;z-index:1200;width:min(86vw,340px);height:100vh;padding:90px 32px 32px;background:#fff;box-shadow:-20px 0 50px rgba(0,0,0,.12);transform:translateX(100%);transition:transform .45s var(--ease)}
.mobile-menu.open{transform:translateX(0)}
.mobile-close{position:absolute;top:20px;right:22px;width:42px;height:42px;border:0;border-radius:50%;background:var(--surface);cursor:pointer;font-size:20px}
.mobile-link{display:block;margin-bottom:24px;color:#000;font-size:22px;font-weight:600;opacity:0;transform:translateX(20px);transition:opacity .35s ease,transform .35s var(--ease)}
.mobile-menu.open .mobile-link{opacity:1;transform:translateX(0)}
.mobile-menu.open .mobile-link:nth-of-type(1){transition-delay:.05s}.mobile-menu.open .mobile-link:nth-of-type(2){transition-delay:.1s}
.mobile-menu.open .mobile-link:nth-of-type(3){transition-delay:.15s}.mobile-menu.open .mobile-link:nth-of-type(4){transition-delay:.2s}
.mobile-menu.open .mobile-link:nth-of-type(5){transition-delay:.25s}.mobile-menu.open .mobile-link:nth-of-type(6){transition-delay:.3s}
.mobile-menu.open .mobile-link:nth-of-type(7){transition-delay:.35s}
.hero{min-height:calc(90vh - 42px);display:flex;align-items:center;justify-content:center;padding:110px 0 120px;text-align:center}
.hero-content{max-width:900px}
.hero-badge,.section-label{display:inline-flex;align-items:center;gap:8px;width:fit-content;margin-bottom:26px;padding:7px 15px;border-radius:100px;background:rgba(252,211,3,.14);color:#8b7000;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.hero-badge::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--yellow)}
h1,h2,h3,h4{font-family:Geist,Arial,sans-serif;line-height:1.08;letter-spacing:-.04em}
h1{max-width:900px;margin-inline:auto;font-size:clamp(48px,8vw,82px);font-weight:300;letter-spacing:-5px}
.hero-description{max-width:610px;margin:28px auto 38px;color:var(--muted);font-size:clamp(18px,2vw,23px);line-height:1.55}
.hero-buttons{display:flex;justify-content:center;flex-wrap:wrap;gap:14px}
.section{padding:120px 0}.section-alt{background:var(--surface)}
.section-header{max-width:720px;margin:0 auto 64px;text-align:center}
.section-header h2{margin-bottom:16px;font-size:clamp(38px,5vw,60px);font-weight:400}
.section-header p{color:var(--muted);font-size:18px}
.stats{padding:48px 0;background:var(--surface)}.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px}
.stat{text-align:center}.stat-number{display:block;margin-bottom:5px;font-size:36px;font-weight:700;letter-spacing:-2px}
.stat-label{color:var(--muted);font-size:14px}
.cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.card{position:relative;overflow:hidden;padding:36px;border:1px solid var(--border);border-radius:var(--radius);background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.04),0 1px 2px rgba(0,0,0,.05);transition:transform .45s var(--ease),border-color .3s ease,box-shadow .45s ease}
.card::before{content:"";position:absolute;top:0;left:0;width:100%;height:4px;background:var(--yellow);transform:scaleX(0);transform-origin:left;transition:transform .45s var(--ease)}
.card:hover{border-color:var(--yellow);box-shadow:0 22px 45px rgba(0,0,0,.08);transform:translateY(-9px)}
.card:hover::before{transform:scaleX(1)}
.card-icon{width:52px;height:52px;display:grid;place-items:center;margin-bottom:28px;border-radius:14px;background:var(--surface);font-size:25px;transition:transform .4s var(--ease),background .3s ease}
.card:hover .card-icon{background:var(--yellow);transform:rotate(8deg) scale(1.08)}
.card h3{margin-bottom:12px;font-size:28px;font-weight:400}.card p{color:var(--muted);font-size:16px;line-height:1.65}
.project-card{padding:0}.project-card::before{z-index:2}
.project-image{width:100%;height:230px;object-fit:cover;transition:transform .7s var(--ease)}.project-card:hover .project-image{transform:scale(1.06)}
.project-content{padding:26px}.project-content h3{font-size:23px}.project-content small{color:var(--muted)}
.review-card{padding:32px;border-radius:var(--radius);background:var(--surface);transition:transform .35s var(--ease),box-shadow .35s ease}
.review-card:hover{transform:translateY(-7px);box-shadow:0 18px 35px rgba(0,0,0,.07)}
.stars{margin-bottom:18px;color:#d5ad00;letter-spacing:3px}
.review-text{margin-bottom:26px;color:#55555d;font-size:17px;font-style:italic;line-height:1.7}
.review-author{display:flex;align-items:center;gap:12px}
.avatar{width:42px;height:42px;display:grid;place-items:center;border-radius:50%;background:#000;color:#fff;font-size:13px;font-weight:700}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
.about-image{width:100%;border-radius:var(--radius);box-shadow:22px 22px 0 var(--surface);transition:transform .6s var(--ease)}
.about-image:hover{transform:translate(-8px,-8px)}
.about-content h2{margin-bottom:24px;font-size:clamp(38px,5vw,58px)}
.about-content p{margin-bottom:18px;color:var(--muted);font-size:17px;line-height:1.7}
.check-list{display:grid;gap:15px;margin-top:28px}.check-list li{display:flex;align-items:center;gap:12px;font-size:16px}
.check{width:22px;height:22px;display:grid;flex-shrink:0;place-items:center;border-radius:50%;background:var(--yellow);font-size:13px;font-weight:800}
.faq-list{max-width:800px;margin-inline:auto}
.faq-item{overflow:hidden;margin-bottom:14px;border:1px solid var(--border);border-radius:var(--radius);background:#fff}
.faq-question{width:100%;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:24px;border:0;background:transparent;color:#000;cursor:pointer;text-align:left;font-size:17px;font-weight:600}
.faq-icon{flex-shrink:0;font-size:25px;font-weight:300;transition:transform .3s ease}
.faq-answer{display:none;padding:0 24px 24px;color:var(--muted);line-height:1.7}
.faq-item.open .faq-answer{display:block}.faq-item.open .faq-icon{transform:rotate(45deg)}
.contact-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:40px;align-items:start}
.form-box{padding:38px;border-radius:var(--radius);background:var(--surface)}
.form-box h3{margin-bottom:26px;font-size:30px}
.form-group{margin-bottom:18px}.form-group label{display:block;margin-bottom:7px;font-size:13px;font-weight:600}
.form-input,.form-select,.form-textarea{width:100%;padding:14px 16px;border:1px solid #d9e0e8;border-radius:10px;outline:0;background:#fff;color:#000;transition:border-color .25s ease,box-shadow .25s ease}
.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--yellow);box-shadow:0 0 0 4px rgba(252,211,3,.2)}
.form-textarea{min-height:120px;resize:vertical}
.contact-details{padding:15px 0}.contact-detail{padding:20px 0;border-bottom:1px solid var(--border)}
.contact-detail span{display:block;margin-bottom:5px;color:var(--muted);font-size:13px}.contact-detail strong{font-size:18px}
.cta{padding:100px 24px;background:var(--yellow);text-align:center}
.cta h2{margin-bottom:16px;font-size:clamp(36px,5vw,58px);font-weight:400}
.cta p{margin-bottom:30px;color:rgba(0,0,0,.65);font-size:18px}
footer{padding:80px 0 30px;background:#242429;color:#fff}
.footer-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1fr;gap:42px;padding-bottom:55px}
.footer-brand .logo{color:#fff}.footer-brand p{max-width:290px;margin-top:18px;color:#9f9fa6;font-size:15px;line-height:1.7}
.footer-col h4{margin-bottom:20px;font-size:15px;font-weight:700;letter-spacing:0}
.footer-col a{display:block;margin-bottom:12px;color:#9f9fa6;font-size:14px;transition:color .2s ease}.footer-col a:hover{color:var(--yellow)}
.footer-bottom{display:flex;justify-content:space-between;gap:20px;padding-top:22px;border-top:1px solid rgba(255,255,255,.12);color:#9f9fa6;font-size:13px}
.bottom-nav{display:none}
.reveal{opacity:0;transform:translateY(35px);transition:opacity .8s var(--ease),transform .8s var(--ease)}.reveal.visible{opacity:1;transform:translateY(0)}
.delay-1{transition-delay:.1s}.delay-2{transition-delay:.2s}.delay-3{transition-delay:.3s}.delay-4{transition-delay:.4s}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;scroll-behavior:auto !important;transition-duration:.01ms !important}}
@media(max-width:950px){.nav-links{gap:16px}.nav-actions{margin-left:10px}.cards-grid{grid-template-columns:repeat(2,1fr)}.footer-grid{grid-template-columns:1.5fr 1fr 1fr}}
@media(max-width:768px){.container{width:min(100% - 36px,var(--container))}.nav-inner{min-height:68px}.nav-links,.nav-actions .btn{display:none}.nav-actions{margin-left:auto}.menu-button{display:block}.mobile-menu{display:block}
.hero{min-height:auto;padding:100px 0 110px}h1{font-size:clamp(44px,13vw,68px);letter-spacing:-3px}.hero-description{font-size:18px}
.section{padding:85px 0}.stats{padding:35px 0}.stats-grid{grid-template-columns:repeat(2,1fr);gap:28px 12px}.stat-number{font-size:30px}
.cards-grid{grid-template-columns:1fr;gap:18px}.card{padding:28px}.about-grid,.contact-grid{grid-template-columns:1fr;gap:45px}
.footer-grid{grid-template-columns:1fr 1fr;gap:35px 20px}.footer-brand{grid-column:1/-1}.footer-bottom{flex-direction:column}
.bottom-nav{position:fixed;right:0;bottom:0;left:0;z-index:800;display:flex;justify-content:space-around;padding:9px 8px 14px;border-top:1px solid var(--border);background:rgba(255,255,255,.95);backdrop-filter:blur(12px)}
.bottom-item{display:flex;flex-direction:column;align-items:center;gap:4px;color:var(--muted);cursor:pointer;font-size:11px;font-weight:600}.bottom-item.active{color:#000}.bottom-icon{font-size:20px;line-height:1}
body{padding-bottom:65px}}
@media(max-width:460px){.hero-buttons{flex-direction:column}.hero-buttons .btn{width:100%}.footer-grid{grid-template-columns:1fr}.footer-brand{grid-column:auto}}
</style></head><body>

<header id="site-header"><div class="container nav-inner">
<a class="logo" href="#">${biz.name}</a>
<nav class="nav-links" aria-label="Main navigation">
<a class="nav-link active" data-page="home" href="#">Home</a>
<a class="nav-link" data-page="about" href="#">About Us</a>
<a class="nav-link" data-page="services" href="#">Services</a>
<a class="nav-link" data-page="portfolio" href="#">Portfolio</a>
<a class="nav-link" data-page="reviews" href="#">Reviews</a>
<a class="nav-link" data-page="faq" href="#">FAQ</a>
<a class="nav-link" data-page="contact" href="#">Contact</a>
</nav>
<div class="nav-actions">
<a class="btn btn-primary" href="#">Book Appointment</a>
<button class="menu-button" id="menu-button" type="button" aria-label="Open menu">☰</button>
</div></div></header>

<div class="mobile-overlay" id="mobile-overlay"></div>
<aside class="mobile-menu" id="mobile-menu">
<button class="mobile-close" type="button" aria-label="Close menu">×</button>
<a class="mobile-link" href="#" data-page="home">Home</a>
<a class="mobile-link" href="#" data-page="about">About Us</a>
<a class="mobile-link" href="#" data-page="services">Services</a>
<a class="mobile-link" href="#" data-page="portfolio">Portfolio</a>
<a class="mobile-link" href="#" data-page="reviews">Reviews</a>
<a class="mobile-link" href="#" data-page="faq">FAQ</a>
<a class="mobile-link" href="#" data-page="contact">Contact</a>
<a class="btn btn-primary" href="#">Book Appointment</a>
</aside>

<main>
<section id="page-home" class="page active">
  <div class="hero"><div class="container hero-content">
    <div class="hero-badge reveal">${biz.years}+ Years · ${biz.city}</div>
    <h1 class="reveal delay-1">Stay fully on top of your ${typeNameLower} projects</h1>
    <p class="hero-description reveal delay-2">Professional ${typeNameLower} services for homes and businesses. Licensed, insured, reliable, and trusted by hundreds.</p>
    <div class="hero-buttons reveal delay-3">
      <a class="btn btn-primary" href="#">Book Appointment</a>
      <button class="btn btn-secondary" data-goto="services">Explore Services</button>
    </div>
  </div></div>
  <div class="stats"><div class="container stats-grid">
    <div class="stat reveal"><span class="stat-number">${biz.rating}★</span><span class="stat-label">Google Rating</span></div>
    <div class="stat reveal delay-1"><span class="stat-number">${biz.reviews}+</span><span class="stat-label">Happy Clients</span></div>
    <div class="stat reveal delay-2"><span class="stat-number">${biz.years}+</span><span class="stat-label">Years Experience</span></div>
    <div class="stat reveal delay-3"><span class="stat-number">${biz.projects || 800}+</span><span class="stat-label">Jobs Completed</span></div>
  </div></div>
  <section class="section"><div class="container">
    <div class="section-header reveal"><div class="section-label">Services</div><h2>What We Do</h2><p>Professional ${typeNameLower} solutions for homes &amp; businesses in ${biz.city}.</p></div>
    <div class="cards-grid">${serviceCards}</div>
  </div></section>
  <section class="section section-alt"><div class="container">
    <div class="section-header reveal"><div class="section-label">Why Choose Us</div><h2>The ${biz.name} Promise</h2><p>Reliable service, honest pricing, and professional execution.</p></div>
    <div class="cards-grid">${whyCards}</div>
  </div></section>
  <section class="section"><div class="container">
    <div class="section-header reveal"><div class="section-label">Portfolio</div><h2>Recent Projects</h2><p>${biz.projects || 800}+ completed projects in ${biz.city}.</p></div>
    <div class="cards-grid">${workCards}</div>
  </div></section>
  <section class="cta"><div class="container">
    <h2 class="reveal">Ready to get started?</h2><p class="reveal delay-1">Make your next ${typeNameLower} project simple and stress-free.</p>
    <a class="btn btn-dark reveal delay-2" href="#">Book Appointment</a>
  </div></section>
</section>

<section id="page-services" class="page">
  <section class="section"><div class="container">
    <div class="section-header reveal"><div class="section-label">All Services</div><h2>Comprehensive ${typeName} Solutions</h2><p>Professional services tailored to your needs in ${biz.city}.</p></div>
    <div class="cards-grid">${serviceCards}</div>
  </div></section>
  <section class="cta"><div class="container">
    <h2 class="reveal">Need a professional ${typeNameLower}?</h2><p class="reveal delay-1">Schedule your appointment today.</p>
    <a class="btn btn-dark reveal delay-2" href="#">Book Appointment</a>
  </div></section>
</section>

<section id="page-about" class="page">
  <section class="section"><div class="container about-grid">
    <div class="reveal"><img class="about-image" src="${aboutImg}" alt="${biz.name} team"></div>
    <div class="about-content">
      <div class="section-label reveal">About ${biz.name}</div>
      <h2 class="reveal delay-1">Trusted ${typeNameLower} specialists since ${startYear}</h2>
      <p class="reveal delay-2">With over ${biz.years} years serving ${biz.city}, ${biz.name} has earned a reputation for reliable and professional ${typeNameLower} services.</p>
      <p class="reveal delay-2">Our certified specialists bring expertise, care, and dedication to every project.</p>
      <ul class="check-list reveal delay-3">
        <li><span class="check">✓</span> Licensed and fully insured professionals</li>
        <li><span class="check">✓</span> Transparent pricing</li>
        <li><span class="check">✓</span> Fast response times</li>
        <li><span class="check">✓</span> Workmanship guarantee</li>
        <li><span class="check">✓</span> Residential and commercial service</li>
      </ul>
    </div>
  </div></section>
  <section class="cta"><div class="container">
    <h2 class="reveal">Let's work together</h2><p class="reveal delay-1">Make your next project easier.</p>
    <a class="btn btn-dark reveal delay-2" href="#">Book Appointment</a>
  </div></section>
</section>

<section id="page-portfolio" class="page">
  <section class="section"><div class="container">
    <div class="section-header reveal"><div class="section-label">Portfolio</div><h2>Recent Projects</h2><p>Take a look at some of our latest work.</p></div>
    <div class="cards-grid">${workCards}</div>
  </div></section>
</section>

<section id="page-reviews" class="page">
  <section class="section"><div class="container">
    <div class="section-header reveal"><div class="section-label">Reviews</div><h2>What our clients say</h2><p>${biz.rating} average rating from more than ${biz.reviews} reviews.</p></div>
    <div class="cards-grid">${reviewCards}</div>
  </div></section>
</section>

<section id="page-faq" class="page">
  <section class="section"><div class="container">
    <div class="section-header reveal"><div class="section-label">FAQ</div><h2>Frequently Asked Questions</h2><p>Everything you need to know about our services.</p></div>
    <div class="faq-list">${faqHtml}</div>
  </div></section>
</section>

<section id="page-contact" class="page">
  <section class="section"><div class="container">
    <div class="section-header reveal"><div class="section-label">Contact Us</div><h2>Get in touch</h2><p>Have a question or need an estimate?</p></div>
    <div class="contact-grid">
      <div class="form-box reveal">
        <h3>Request a Callback</h3>
        <form id="cform"><div class="form-group"><label>Your Name</label><input class="form-input" type="text" placeholder="Full name" required></div>
        <div class="form-group"><label>Phone</label><input class="form-input" type="tel" placeholder="${biz.phone}" required></div>
        <div class="form-group"><label>Email</label><input class="form-input" type="email" placeholder="Email address" required></div>
        <div class="form-group"><label>Service Needed</label><select class="form-select">${allServiceOpts}</select></div>
        <div class="form-group"><label>Message</label><textarea class="form-textarea" placeholder="Describe your requirement"></textarea></div>
        <button class="btn btn-primary" type="submit">Request Callback</button>
        <p id="form-message" style="display:none;margin-top:16px;color:#10b981;font-weight:600">Thanks! Your request has been received.</p></form>
      </div>
      <div class="contact-details reveal delay-1">
        <div class="contact-detail"><span>Phone</span><strong>${biz.phone}</strong></div>
        <div class="contact-detail"><span>Email</span><strong>${biz.email}</strong></div>
        <div class="contact-detail"><span>Address</span><strong>${biz.address || biz.city}</strong></div>
        <div class="contact-detail"><span>Hours</span><strong>${biz.hours}</strong></div>
        ${biz.emergency === 'yes' ? '<div class="contact-detail"><span>Emergency</span><strong>24/7 Available</strong></div>' : ''}
        <br><a class="btn btn-primary" href="#">Book Appointment</a>
      </div>
    </div>
  </div></section>
</section>
</main>

<footer><div class="container">
  <div class="footer-grid">
    <div class="footer-brand"><div class="logo">${biz.name}</div><p>Your trusted ${typeNameLower} partner in ${biz.city}. Professional, reliable, and affordable.</p></div>
    <div class="footer-col"><h4>Services</h4>${biz.services.slice(0, 4).map(s => '<a href="#" data-goto="services">' + s + '</a>').join('')}</div>
    <div class="footer-col"><h4>Company</h4><a href="#" data-goto="about">About Us</a><a href="#" data-goto="portfolio">Portfolio</a><a href="#" data-goto="reviews">Reviews</a><a href="#" data-goto="faq">FAQ</a></div>
    <div class="footer-col"><h4>Contact</h4><a href="tel:${biz.phone.replace(/[^0-9+]/g, '')}">${biz.phone}</a><a href="mailto:${biz.email}">${biz.email}</a><a href="#">Book Appointment</a></div>
  </div>
  <div class="footer-bottom"><span>© ${year} ${biz.name}. All rights reserved.</span><span>Privacy · Terms · Cookies</span></div>
</div></footer>

<nav class="bottom-nav">
  <div class="bottom-item active" data-bottom-page="home"><span class="bottom-icon">⌂</span><span>Home</span></div>
  <div class="bottom-item" data-bottom-page="services"><span class="bottom-icon">⚡</span><span>Services</span></div>
  <div class="bottom-item" data-bottom-page="portfolio"><span class="bottom-icon">▦</span><span>Projects</span></div>
  <div class="bottom-item" data-bottom-page="contact"><span class="bottom-icon">✉</span><span>Contact</span></div>
</nav>

<script>
(function(){
  function showPage(name){
    var t=document.getElementById('page-'+name);if(!t)return;
    document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active')});
    t.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(function(l){l.classList.toggle('active',l.dataset.page===name)});
    document.querySelectorAll('.bottom-item').forEach(function(b){b.classList.toggle('active',b.dataset.bottomPage===name)});
    window.scrollTo({top:0,behavior:'smooth'});
    setTimeout(function(){activateReveals(t)},80);
  }
  document.querySelectorAll('[data-goto]').forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();showPage(this.dataset.goto)})});
  document.querySelectorAll('.nav-link').forEach(function(l){l.addEventListener('click',function(e){e.preventDefault();showPage(this.dataset.page)})});
  document.querySelectorAll('.bottom-item').forEach(function(b){b.addEventListener('click',function(){showPage(this.dataset.bottomPage)})});
  document.querySelectorAll('.mobile-link').forEach(function(l){l.addEventListener('click',function(e){e.preventDefault();showPage(this.dataset.page);toggleMenu()})});

  function toggleMenu(){
    var m=document.getElementById('mobile-menu'),o=document.getElementById('mobile-overlay');
    var open=m.classList.toggle('open');
    if(open){o.classList.add('open');document.body.classList.add('menu-open')}
    else{o.classList.remove('open');document.body.classList.remove('menu-open')}
  }
  document.getElementById('menu-button').onclick=toggleMenu;
  document.getElementById('mobile-overlay').onclick=toggleMenu;
  document.querySelector('.mobile-close').onclick=toggleMenu;
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&document.getElementById('mobile-menu').classList.contains('open'))toggleMenu()});

  window.toggleFaq=function(btn){var item=btn.closest('.faq-item');item.classList.toggle('open')};

  document.getElementById('cform').addEventListener('submit',function(e){e.preventDefault();document.getElementById('form-message').style.display='block';this.reset()});

  var header=document.getElementById('site-header');
  window.addEventListener('scroll',function(){header.classList.toggle('scrolled',window.scrollY>10)});

  var revealObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  function activateReveals(scope){(scope||document).querySelectorAll('.reveal').forEach(function(el){el.classList.remove('visible');revealObserver.observe(el)})}
  activateReveals(document.getElementById('page-home'));
})();
</script></body></html>`;
}
