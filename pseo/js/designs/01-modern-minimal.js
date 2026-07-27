// ==================== TEMPLATE: MODERN MINIMAL ====================
function buildModernMinimal(biz, D, reviews, imgs, portfolio, faqs, typeName, IB, IP, IPS, NAV) {
  const A=D.accent, BG='#ffffff', TC='#111111', MU='#6b7280';
  return wrapPage(D, `
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',system-ui,sans-serif;background:#fff;color:#111;line-height:1.6}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid #e5e7eb;padding:0 5%}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;height:68px;gap:32px}
.nav-logo{font-size:20px;font-weight:900;color:${A};flex:1;letter-spacing:-0.5px}
.emergency-bar{background:#111;color:#fff;display:flex;align-items:center;justify-content:center;gap:12px;padding:12px;font-size:13px;font-weight:500;letter-spacing:0.3px}
@keyframes emgPulse { 0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.6); } 70% { box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); } 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }
.emg-dot { width: 8px; height: 8px; background: #ef4444; border-radius: 50%; animation: emgPulse 2s infinite; }
.emg-link { color: #fff; text-decoration: none; font-weight: 700; transition: color 0.2s; }
.emg-link:hover { color: ${A}; }
.nav-links{display:flex;gap:8px}
.sf-nav-link{font-size:14px;color:#555;text-decoration:none;padding:6px 12px;border-radius:6px;cursor:pointer;transition:all .2s;font-weight:500}
.sf-nav-link:hover,.sf-nav-link.active{background:${A}15;color:${A}}
.nav-cta{background:${A};color:#fff;padding:9px 20px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;border:none;transition:all .2s}
.nav-cta:hover{background:${A}dd;transform:translateY(-1px)}
.ham{display:none;background:none;border:none;font-size:24px;cursor:pointer;color:#111}
#mob-menu{display:none;flex-direction:column;gap:16px;padding:80px 24px 24px;background:#fff;position:fixed;top:0;right:0;width:280px;height:100vh;z-index:2000;box-shadow:-4px 0 24px rgba(0,0,0,0.15);animation:slideIn 0.3s forwards}
@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
.mob-close{position:absolute;top:20px;right:20px;background:none;border:none;font-size:28px;color:#111;cursor:pointer}
#mob-menu .sf-nav-link{display:block;padding:10px 0;font-size:16px}
@media(max-width:768px){.nav-links{display:none}.ham{display:block}}

/* HOME */
.hero{padding:96px 5%;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1200px;margin:0 auto}
@media(max-width:768px){.hero{grid-template-columns:1fr;padding:48px 5%}}
.hero-eyebrow{display:inline-block;background:${A}12;color:${A};font-size:12px;font-weight:700;padding:5px 14px;border-radius:20px;letter-spacing:1px;text-transform:uppercase;margin-bottom:20px}
.hero h1{font-size:clamp(36px,4.5vw,58px);font-weight:900;line-height:1.05;letter-spacing:-2px;color:#111;margin-bottom:18px}
.hero h1 em{color:${A};font-style:normal}
.hero-sub{font-size:17px;color:${MU};line-height:1.75;margin-bottom:32px;max-width:480px}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap}
.btn-primary{background:${A};color:#fff;padding:13px 28px;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;border:none;transition:all .2s;text-decoration:none;display:inline-flex;align-items:center;gap:8px}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 30px ${A}40}
.btn-secondary{background:#fff;border:2px solid #e5e7eb;color:#111;padding:11px 24px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;text-decoration:none}
.btn-secondary:hover{border-color:${A};color:${A}}
.hero-img{border-radius:20px;overflow:hidden;aspect-ratio:4/3;position:relative}
.hero-img img{width:100%;height:100%;object-fit:cover}
.hero-img-badge{position:absolute;bottom:20px;left:20px;background:#fff;border-radius:12px;padding:12px 16px;box-shadow:0 8px 32px rgba(0,0,0,0.12);display:flex;align-items:center;gap:10px}
.badge-val{font-size:22px;font-weight:900;color:${A}}
.badge-txt{font-size:11px;color:${MU};font-weight:600}
.stats-strip{background:#f9fafb;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;padding:28px 5%}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:32px;text-align:center}
@media(max-width:640px){.stats-inner{grid-template-columns:repeat(2,1fr)}}
.stat-val{font-size:32px;font-weight:900;color:${A};display:block}
.stat-lbl{font-size:13px;color:${MU};font-weight:500}

/* SECTIONS */
.section{padding:80px 5%}
.section-inner{max-width:1200px;margin:0 auto}
.alt-bg{background:#f9fafb}
.section-header{text-align:center;margin-bottom:56px}
.eyebrow{display:inline-block;background:${A}12;color:${A};font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px}
.section-header h2{font-size:clamp(28px,3.5vw,42px);font-weight:900;letter-spacing:-1px;color:#111;margin-bottom:12px}
.section-header p{font-size:16px;color:${MU};max-width:520px;margin:0 auto;line-height:1.7}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
@media(max-width:768px){.about-grid{grid-template-columns:1fr}}
.about-img{border-radius:20px;overflow:hidden;aspect-ratio:4/3}
.about-img img{width:100%;height:100%;object-fit:cover}
.about-text h2{font-size:clamp(26px,3vw,38px);font-weight:900;letter-spacing:-1px;margin-bottom:16px}
.about-text p{color:${MU};line-height:1.8;margin-bottom:14px;font-size:15px}
.check-list{list-style:none;margin-top:20px}
.check-list li{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#333;font-weight:500}
.check-list li::before{content:'✓';width:22px;height:22px;background:${A};color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;flex-shrink:0}

/* SERVICES */
.services-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px}
.service-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:28px;transition:all .3s;position:relative;overflow:hidden}
.service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:${A};transform:scaleX(0);transition:transform .3s;transform-origin:left}
.service-card:hover{border-color:${A}50;box-shadow:0 12px 48px ${A}15;transform:translateY(-4px)}
.service-card:hover::before{transform:scaleX(1)}
.service-icon{color:${A};margin-bottom:16px}
.service-card h3{font-size:16px;font-weight:800;margin-bottom:8px;color:#111}
.service-card p{font-size:13px;color:${MU};line-height:1.65}

/* PORTFOLIO */
.portfolio-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px}
.portfolio-card{border-radius:16px;overflow:hidden;position:relative;aspect-ratio:4/3;cursor:pointer;transition:transform .3s}
.portfolio-card:hover{transform:scale(1.02)}
.portfolio-card img{width:100%;height:100%;object-fit:cover}
.portfolio-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 60%);display:flex;flex-direction:column;justify-content:flex-end;padding:20px}
.portfolio-overlay h3{color:#fff;font-size:15px;font-weight:700}
.portfolio-overlay span{color:rgba(255,255,255,0.7);font-size:12px}

/* REVIEWS */
.reviews-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px}
.review-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:24px;transition:all .3s}
.review-card:hover{box-shadow:0 8px 32px rgba(0,0,0,0.08);transform:translateY(-2px)}
.review-stars{color:#f59e0b;font-size:14px;margin-bottom:12px}
.review-text{font-size:14px;color:#444;line-height:1.7;margin-bottom:18px;font-style:italic}
.review-author{display:flex;align-items:center;gap:10px}
.review-avatar{width:40px;height:40px;border-radius:50%;background:${A};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;flex-shrink:0}
.review-name{font-weight:700;font-size:14px;color:#111}
.review-date{font-size:12px;color:${MU}}

/* FAQ */
.faq-list{max-width:720px;margin:0 auto}
.faq-item{border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:12px}
.faq-q{padding:18px 22px;cursor:pointer;font-weight:700;font-size:15px;color:#111;display:flex;justify-content:space-between;align-items:center;background:#fff;transition:background .2s;user-select:none}
.faq-q:hover{background:${A}06}
.faq-icon{color:${A};font-size:20px;font-weight:400;flex-shrink:0}
.faq-a{display:none;padding:16px 22px 20px;font-size:14px;color:${MU};line-height:1.75;background:#f9fafb;border-top:1px solid #e5e7eb}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:48px;align-items:start}
@media(max-width:768px){.contact-grid{grid-template-columns:1fr}}
.contact-info h2{font-size:clamp(26px,3vw,36px);font-weight:900;letter-spacing:-1px;margin-bottom:16px}
.contact-info p{color:${MU};line-height:1.8;margin-bottom:28px;font-size:15px}
.contact-detail{display:flex;align-items:center;gap:16px;padding:16px 0;border-bottom:1px solid #e5e7eb}
.contact-detail:first-of-type{border-top:1px solid #e5e7eb}
.c-icon{width:44px;height:44px;background:${A}12;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
.c-label{font-size:12px;color:${MU};font-weight:600}
.c-val{font-size:14px;font-weight:700;color:#111}
.contact-form{background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:32px;box-shadow:0 4px 40px rgba(0,0,0,0.06)}
.form-field{margin-bottom:18px}
.form-field label{display:block;font-size:12px;color:${MU};font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px}
.form-field input,.form-field select,.form-field textarea{width:100%;padding:12px 16px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;color:#111;background:#fff;font-family:inherit;outline:none;transition:border-color .2s}
.form-field input:focus,.form-field textarea:focus,.form-field select:focus{border-color:${A}}
.form-field textarea{min-height:90px;resize:vertical}
.form-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:500px){.form-grid-2{grid-template-columns:1fr}}
.submit-btn{width:100%;padding:14px;background:${A};border:none;border-radius:10px;color:#fff;font-size:15px;font-weight:700;cursor:pointer;transition:all .2s;font-family:inherit}
.submit-btn:hover{background:${A}dd;transform:translateY(-1px)}
.success-msg{display:none;background:#d1fae5;border:1px solid #6ee7b7;color:#065f46;padding:12px;border-radius:8px;text-align:center;font-size:14px;margin-top:12px}

footer{background:#111;color:rgba(255,255,255,0.7);padding:48px 5% 24px}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.footer-grid{grid-template-columns:1fr}}
.footer-brand .logo{font-size:20px;font-weight:900;color:${A};margin-bottom:10px}
.footer-brand p{font-size:13px;line-height:1.7}
.footer-col h4{color:#fff;font-size:13px;font-weight:700;margin-bottom:14px;text-transform:uppercase;letter-spacing:0.5px}
.footer-col a{display:block;color:rgba(255,255,255,0.5);font-size:13px;text-decoration:none;padding:4px 0;transition:color .2s;cursor:pointer}
.footer-col a:hover{color:${A}}
.footer-bottom{border-top:1px solid rgba(255,255,255,0.1);padding-top:20px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:12px}
/* MOBILE BOTTOM NAV */
.mobile-bottom-nav{display:none;position:fixed;bottom:0;left:0;width:100%;background:#fff;border-top:1px solid #e5e7eb;z-index:2000;box-shadow:0 -4px 12px rgba(0,0,0,0.05);height:65px;align-items:center;justify-content:space-around}
.mb-nav-item{display:flex;flex-direction:column;align-items:center;justify-content:center;color:#6b7280;font-size:11px;font-weight:600;text-decoration:none;flex:1;height:100%}
.mb-nav-item svg{width:22px;height:22px;margin-bottom:4px;fill:currentColor}
.mb-nav-item.active{color:${A}}
.mb-center{flex:0 0 70px;display:flex;justify-content:center;cursor:pointer}
.mb-center-in{width:60px;height:60px;background:#fff;border-radius:50%;padding:4px;box-shadow:0 -4px 10px rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:center;transform:translateY(-15px)}
.mb-center-in img{width:100%;height:100%;object-fit:cover;border-radius:50%}
@media(max-width:768px){.mobile-bottom-nav{display:flex}body{padding-bottom:65px}}

.float-btn { position: fixed; bottom: 85px; right: 20px; background: ${A}; color: #fff; width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px ${A}60; z-index: 100; text-decoration: none; animation: floatPulse 3s ease-in-out infinite; }
@keyframes floatPulse { 0% { transform: translateY(0) scale(1); box-shadow: 0 4px 12px ${A}60; } 50% { transform: translateY(-6px) scale(1.05); box-shadow: 0 12px 24px ${A}40; } 100% { transform: translateY(0) scale(1); box-shadow: 0 4px 12px ${A}60; } }
@media(min-width: 769px) { .float-btn { bottom: 30px; right: 30px; width: 64px; height: 64px; } }
.sf-modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); z-index: 3000; align-items: center; justify-content: center; padding: 20px; animation: fadeIn 0.2s; }
.sf-modal-inner { background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; width: 100%; max-width: 500px; padding: 32px; position: relative; animation: modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; transform: translateY(20px) scale(0.95); opacity: 0; }
@keyframes modalIn { to { transform: translateY(0) scale(1); opacity: 1; } }
.sf-modal-close { position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 24px; color: #111; cursor: pointer; transition: transform 0.2s; }
.sf-modal-close:hover{transform:rotate(90deg)}
</style>
${biz.emergency==='yes'?`<div class="emergency-bar"><div class="emg-dot"></div><span><strong>24/7 Emergency ${typeName}</strong> in ${biz.city} — Call: <a href="tel:${biz.phone}" class="emg-link">${biz.phone}</a></span></div>`:''}
<nav><div class="nav-inner">
<div class="nav-logo">${biz.name}</div>
<div class="nav-links">
  <span class="sf-nav-link active" data-page="home" onclick="showPage('home')">Home</span>
  <span class="sf-nav-link" data-page="about" onclick="showPage('about')">About Us</span>
  <span class="sf-nav-link" data-page="services" onclick="showPage('services')">Services</span>
  <span class="sf-nav-link" data-page="portfolio" onclick="showPage('portfolio')">Portfolio</span>
  <span class="sf-nav-link" data-page="reviews" onclick="showPage('reviews')">Reviews</span>
  <span class="sf-nav-link" data-page="faq" onclick="showPage('faq')">FAQ</span>
  <span class="sf-nav-link" data-page="contact" onclick="showPage('contact')">Contact</span>
</div>
<button class="nav-cta" onclick="showPage('bookings')">Book Now</button>
<button class="ham" onclick="toggleMob()">☰</button>
</div></nav>
<div id="mob-menu">
  <button class="mob-close" onclick="toggleMob()">✕</button>
  <span class="sf-nav-link" data-page="home" onclick="showPage('home')">Home</span>
  <span class="sf-nav-link" data-page="about" onclick="showPage('about')">About Us</span>
  <span class="sf-nav-link" data-page="services" onclick="showPage('services')">Services</span>
  <span class="sf-nav-link" data-page="portfolio" onclick="showPage('portfolio')">Portfolio</span>
  <span class="sf-nav-link" data-page="reviews" onclick="showPage('reviews')">Reviews</span>
  <span class="sf-nav-link" data-page="faq" onclick="showPage('faq')">FAQ</span>
  <span class="sf-nav-link" data-page="contact" onclick="showPage('contact')">Contact Us</span>
</div>

<!-- HOME PAGE -->
<div id="page-home" class="sf-page">
  <div style="max-width:1200px;margin:0 auto;padding:80px 5%">
    <div class="hero" style="padding:0;margin:0">
      <div>
        <div class="hero-eyebrow">⭐ ${biz.years}+ Years in ${biz.city}</div>
        <h1>${biz.name.split(' ')[0]}'s<br><em>Expert ${typeName}</em><br>Services</h1>
        <p class="hero-sub">${biz.tagline}</p>
        <div class="hero-btns">
          <button class="btn-primary" onclick="showPage('bookings')">Book a Service</button>
          <button class="btn-secondary" onclick="showPage('portfolio')">View Our Work</button>
        </div>
      </div>
      <div class="hero-img">
        <img src="${resolveImageUrl(imgs.hero, IP)}" alt="${typeName} services" loading="lazy">
        <div class="hero-img-badge">
          <div><div class="badge-val">${biz.rating}★</div><div class="badge-txt">Google Rating</div></div>
          <div style="width:1px;height:36px;background:#e5e7eb"></div>
          <div><div class="badge-val">${biz.reviews}+</div><div class="badge-txt">Reviews</div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="stats-strip">
    <div class="stats-inner">
      <div><span class="stat-val">${biz.rating}★</span><span class="stat-lbl">Google Rating</span></div>
      <div><span class="stat-val">${biz.reviews}+</span><span class="stat-lbl">Happy Clients</span></div>
      <div><span class="stat-val">${biz.years}+</span><span class="stat-lbl">Years Experience</span></div>
      <div><span class="stat-val">${biz.projects}+</span><span class="stat-lbl">Projects Done</span></div>
    </div>
  </div>
  <div class="section">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">Our Services</div>
        <h2>What We Do Best</h2>
        <p>Professional ${typeName.toLowerCase()} solutions for homes and businesses across ${biz.city}</p>
      </div>
      <div class="services-grid">
        ${biz.services.slice(0,6).map(s=>`<div class="service-card" onclick="openServiceModal('${s.replace(/'/g,"\\'").replace(/"/g,"&quot;")}', '${getServiceDescription(s,biz.type).replace(/'/g,"\\'").replace(/"/g,"&quot;")}')" style="cursor:pointer"><div class="service-icon">${getServiceIcon(s)}</div><h3>${s}</h3><p>${getServiceDescription(s,biz.type)}</p></div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:32px"><button class="btn-secondary" onclick="showPage('services')">View All Services →</button></div>
    </div>
  </div>
  <div class="section" style="background:#f9fafb">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">Why Choose Us</div>
        <h2>The ${biz.name} Difference</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:24px">
        ${[[getWhyIcon('expert'),'Industry Experts','All technicians are certified and have years of field experience.'],[getWhyIcon('fast'),'Fast Response','We confirm bookings within 2 hours and arrive on schedule.'],[getWhyIcon('rate'),'Fair Pricing','Transparent quotes with no surprise charges. Best value guaranteed.'],[getWhyIcon('insur'),'Fully Insured','Licensed and insured for your complete peace of mind.'],[getWhyIcon('rate'),'5★ Rated','Consistently rated top in ${biz.city} on Google by our customers.'],[getWhyIcon('guarantee'),'30-Day Guarantee','We stand behind our work with a full workmanship guarantee.']].map(([icon,title,desc])=>`<div class="service-card"><div class="service-icon">${icon}</div><h3>${title}</h3><p>${desc}</p></div>`).join('')}
      </div>
    </div>
  </div>
  <div class="section alt-bg">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">Testimonials</div>
        <h2>What Clients Say</h2>
        <p>${biz.rating}★ average from ${biz.reviews}+ verified reviews</p>
      </div>
      <div class="reviews-grid">
        ${reviews.slice(0,3).map(r=>`<div class="review-card"><div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div><p class="review-text">"${r.text}"</p><div class="review-author"><div class="review-avatar">${r.name[0]}</div><div><div class="review-name">${r.name}</div><div class="review-date">${r.date||'Recently'}</div></div></div></div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:32px"><button class="btn-secondary" onclick="showPage('reviews')">Read All Reviews →</button></div>
    </div>
  </div>
  <div class="section" style="background:${A};padding:64px 5%">
    <div style="max-width:700px;margin:0 auto;text-align:center">
      <h2 style="color:#fff;font-size:clamp(28px,3vw,40px);font-weight:900;letter-spacing:-1px;margin-bottom:16px">Ready to Get Started?</h2>
      <p style="color:rgba(255,255,255,0.85);font-size:16px;margin-bottom:32px;line-height:1.7">${biz.emergency==='yes'?'We respond within 30 minutes for emergencies.':'Book your service today.'}</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
        <button class="btn-primary" style="background:#fff;color:${A}" onclick="showPage('bookings')">Book a Service</button>
        <a href="tel:${biz.phone}" style="background:transparent;border:2px solid rgba(255,255,255,0.6);color:#fff;padding:13px 28px;border-radius:8px;font-size:15px;font-weight:700;text-decoration:none">${biz.phone}</a>
      </div>
    </div>
  </div>
</div>

</div>

<!-- SERVICES PAGE -->
<div id="page-services" class="sf-page" style="display:none">
  <div class="section">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">All Services</div>
        <h2>Comprehensive Solutions</h2>
        <p>Professional ${typeName.toLowerCase()} services tailored to your needs in ${biz.city}</p>
      </div>
      <div class="services-grid">
        ${biz.services.map(s=>`<div class="service-card" onclick="openServiceModal('${s.replace(/'/g,"\\'").replace(/"/g,"&quot;")}', '${getServiceDescription(s,biz.type).replace(/'/g,"\\'").replace(/"/g,"&quot;")}')" style="cursor:pointer"><div class="service-icon">${getServiceIcon(s)}</div><h3>${s}</h3><p>${getServiceDescription(s,biz.type)}</p></div>`).join('')}
      </div>
    </div>
  </div>
</div>

<!-- ABOUT PAGE -->
<div id="page-about" class="sf-page" style="display:none">
  <div class="section">
    <div class="section-inner">
      <div class="about-grid">
        <div class="about-img"><img src="${resolveImageUrl(imgs.about, IP)}" alt="About ${biz.name}" loading="lazy"></div>
        <div class="about-text">
          <div class="eyebrow">About Us</div>
          <h2>The Story Behind ${biz.name}</h2>
          <p>With over <strong>${biz.years} years</strong> of dedicated service in ${biz.city}, ${biz.name} has built a reputation for delivering exceptional ${biz.type} services with integrity, skill, and a genuine care for our customers.</p>
          <p>Founded by seasoned ${biz.type} professionals, our company started with a simple mission: provide reliable, high-quality ${typeName.toLowerCase()} services at fair prices. Today, we're proud to be ${biz.city}'s most trusted name in ${biz.type} with a team of ${biz.team} certified professionals.</p>
          <p>Every job we take on — whether a routine service call or a complex installation — receives the same level of attention and professionalism. We don't cut corners, and we always clean up after ourselves.</p>
          <ul class="check-list">
            <li>Fully licensed & insured professionals</li>
            <li>Transparent pricing — no hidden fees</li>
            <li>${biz.emergency==='yes'?'24/7 emergency response available':'Flexible scheduling to suit your needs'}</li>
            <li>30-day workmanship guarantee on all jobs</li>
            <li>Serving ${biz.city} for ${biz.years}+ years</li>
            <li>Team of ${biz.team} certified specialists</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>

</div>

<!-- PORTFOLIO PAGE -->
<div id="page-portfolio" class="sf-page" style="display:none">
  <div class="section">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">Our Work</div>
        <h2>Recent Projects</h2>
        <p>${biz.projects}+ successful projects completed across ${biz.city}</p>
      </div>
      <div class="portfolio-grid">
        ${portfolio.map((p,i)=>`<div class="portfolio-card"><img src="${resolveImageUrl(p.img, IP)}" alt="${p.title}" loading="lazy"><div class="portfolio-overlay"><h3>${p.title}</h3><span>${p.year} · ${biz.city}</span></div></div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:48px">
        <div class="eyebrow">Trusted By</div>
        <h2 style="font-size:clamp(24px,2.5vw,34px);font-weight:900;letter-spacing:-1px;margin:14px 0 8px">Our Services at a Glance</h2>
        <p style="color:${MU};margin-bottom:40px">Full range of professional ${typeName.toLowerCase()} services</p>
        <div class="services-grid">
          ${biz.services.map(s=>`<div class="service-card" style="text-align:left;cursor:pointer" onclick="openServiceModal('${s.replace(/'/g,"\\'").replace(/"/g,"&quot;")}', '${getServiceDescription(s,biz.type).replace(/'/g,"\\'").replace(/"/g,"&quot;")}')"><div class="service-icon">${getServiceIcon(s)}</div><h3>${s}</h3><p>${getServiceDescription(s,biz.type)}</p></div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</div>

<!-- REVIEWS PAGE -->
<div id="page-reviews" class="sf-page" style="display:none">
  <div class="section">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">Client Reviews</div>
        <h2>What Our Clients Say</h2>
        <p>${biz.rating}★ average on Google from ${biz.reviews}+ verified reviews</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;margin-bottom:48px">
        ${reviews.map(r=>`<div class="review-card"><div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div><p class="review-text">"${r.text}"</p><div class="review-author"><div class="review-avatar">${r.name[0]}</div><div><div class="review-name">${r.name}</div><div class="review-date">${r.date||'Recently'}</div></div></div></div>`).join('')}
      </div>
      <div style="background:${A}08;border:1px solid ${A}20;border-radius:20px;padding:40px;text-align:center">
        <div style="font-size:64px;font-weight:900;color:${A};line-height:1">${biz.rating}</div>
        <div style="color:#f59e0b;font-size:24px;margin:8px 0">★★★★★</div>
        <div style="font-size:18px;font-weight:700;color:#111;margin-bottom:6px">${biz.reviews}+ Google Reviews</div>
        <div style="color:${MU};font-size:14px;margin-bottom:20px">Based on verified reviews from customers across ${biz.city}</div>
        ${biz.google ? `<button class="btn-primary" onclick="window.open('${biz.google}','_blank')">⭐ Leave a Review on Google</button>` : ''}
      </div>
    </div>
  </div>
</div>

<!-- FAQ PAGE -->
<div id="page-faq" class="sf-page" style="display:none">
  <div class="section">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">FAQ</div>
        <h2>Frequently Asked Questions</h2>
        <p>Quick answers about our ${typeName.toLowerCase()} services</p>
      </div>
      <div class="faq-list">
        ${faqs.map(([q,a])=>`<div class="faq-item"><div class="faq-q" onclick="toggleFaq(this)">${q}<span class="faq-icon">+</span></div><div class="faq-a">${a}</div></div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:40px;padding:32px;background:#f9fafb;border-radius:16px">
        <h3 style="font-size:20px;font-weight:800;margin-bottom:8px">Still have questions?</h3>
        <p style="color:${MU};margin-bottom:20px">Our team is happy to help answer any questions about our services.</p>
        <button class="btn-primary" onclick="showPage('contact')">📞 Contact Us</button>
      </div>
    </div>
  </div>
</div>

<!-- CONTACT PAGE -->
<div id="page-contact" class="sf-page" style="display:none">
  <div class="section">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">Contact Us</div>
        <h2>Book a Service</h2>
        <p>We respond within 30 minutes during business hours</p>
      </div>
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>Ready to book a ${biz.type} service or have a question? We'd love to hear from you. Our team is available ${biz.hours}.</p>
          <div class="contact-detail"><div class="c-icon">📞</div><div><div class="c-label">Phone</div><div class="c-val">${biz.phone}</div></div></div>
          <div class="contact-detail"><div class="c-icon">✉️</div><div><div class="c-label">Email</div><div class="c-val">${biz.email}</div></div></div>
          <div class="contact-detail"><div class="c-icon">📍</div><div><div class="c-label">Address</div><div class="c-val">${biz.address}</div></div></div>
          <div class="contact-detail"><div class="c-icon">🕐</div><div><div class="c-label">Working Hours</div><div class="c-val">${biz.hours}</div></div></div>
          ${biz.emergency==='yes'?'<div class="contact-detail"><div class="c-icon">🚨</div><div><div class="c-label">Emergency</div><div class="c-val">24/7 Available</div></div></div>':''}
        </div>
        <div class="contact-form">
          <h3 style="font-size:20px;font-weight:800;margin-bottom:24px">Request a Callback</h3>
          <div class="form-grid-2">
            <div class="form-field"><label>Your Name</label><input type="text" placeholder="Rahul Sharma"></div>
            <div class="form-field"><label>Phone Number</label><input type="tel" placeholder="${biz.phone}"></div>
          </div>
          <div class="form-grid-2">
            <div class="form-field"><label>Email</label><input type="email" placeholder="Email Address"></div>
            <div class="form-field"><label>Property Address</label><input type="text" placeholder="Street, City, Zip"></div>
          </div>
          <div class="form-field"><label>Service Required</label><select>${biz.services.map(s=>`<option>${s}</option>`).join('')}</select></div>
          <div class="form-grid-2">
            <div class="form-field"><label>Property Size</label><input type="text" placeholder="e.g. 2000 sq ft"></div>
            <div class="form-field"><label>Preferred Date</label><input type="date"></div>
          </div>
          <div class="form-field"><label>Service Add-ons</label><input type="text" placeholder="Any specific requests?"></div>
          <div class="form-field"><label>Message</label><textarea placeholder="Describe your requirement..."></textarea></div>
          <button class="submit-btn" onclick="submitForm(this)">📞 Request Callback</button>
          <div class="success-msg">✅ We'll call you back within 30 minutes!</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- BOOKINGS PAGE -->
<div id="page-bookings" class="sf-page" style="display:none">
  <div class="section">
    <div class="section-inner">
      <div class="section-header">
        <div class="eyebrow">Bookings</div>
        <h2>Schedule an Appointment</h2>
        <p>Select a time that works for you.</p>
      </div>
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:20px; overflow:hidden; padding:20px; box-shadow:0 4px 40px rgba(0,0,0,0.06);">
        <!-- Calendly inline widget begin -->
        <div class="calendly-inline-widget" data-url="https://calendly.com/ojasdenge-lx/30min?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        <!-- Calendly inline widget end -->
      </div>
    </div>
  </div>
</div>

<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="logo">${biz.name}</div>
      <p>Your trusted ${typeName.toLowerCase()} partner in ${biz.city}. Professional, reliable, affordable.</p>
      <div style="display:flex;gap:12px;margin-top:16px">
        ${biz.fb ? `<a href="${biz.fb}" target="_blank" style="font-size:24px;text-decoration:none">📱</a>` : ''}
        ${biz.ig ? `<a href="${biz.ig}" target="_blank" style="font-size:24px;text-decoration:none">📸</a>` : ''}
        ${biz.google ? `<a href="${biz.google}" target="_blank" style="font-size:24px;text-decoration:none">⭐</a>` : ''}
      </div>
    </div>
    <div class="footer-col"><h4>Services</h4>${biz.services.slice(0,5).map(s=>`<a onclick="showPage('portfolio')">${s}</a>`).join('')}</div>
    <div class="footer-col"><h4>Company</h4><a onclick="showPage('about')">About Us</a><a onclick="showPage('portfolio')">Portfolio</a><a onclick="showPage('reviews')">Reviews</a><a onclick="showPage('faq')">FAQ</a><a onclick="showPage('contact')">Contact</a></div>
    <div class="footer-col"><h4>Contact</h4><a href="tel:${biz.phone}">${biz.phone}</a><a href="mailto:${biz.email}">${biz.email}</a><a>${biz.city}</a><a>${biz.hours}</a></div>
  </div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} ${biz.name}. All rights reserved.</span>
    <span style="display:flex;gap:16px">
      <a href="privacy-policy.html" style="color:inherit;text-decoration:none">Privacy</a>
      <a href="terms-of-service.html" style="color:inherit;text-decoration:none">Terms</a>
      <a href="cookie-policy.html" style="color:inherit;text-decoration:none">Cookies</a>
    </span>
  </div>
</div></footer>

<div class="mobile-bottom-nav">
  <div class="mb-nav-item mb-active" data-page="home" onclick="showPage('home')">
    <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
    <span>Home</span>
  </div>
  <div class="mb-nav-item" data-page="services" onclick="showPage('services')">
    <svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
    <span>Services</span>
  </div>
  <div class="mb-center" onclick="showPage('home')">
    <div class="mb-center-in">
      <img src="${resolveImageUrl(imgs.hero, IP)}" alt="Logo">
    </div>
  </div>
  <div class="mb-nav-item" data-page="portfolio" onclick="showPage('portfolio')">
    <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
    <span>Portfolio</span>
  </div>
  <div class="mb-nav-item" data-page="contact" onclick="showPage('contact')">
    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    <span>Contact</span>
  </div>
</div>

<a href="tel:${biz.phone}" class="float-btn">${SVGS.phone}</a>

<div id="srvModal" class="sf-modal" onclick="if(event.target===this) this.style.display='none'">
  <div class="sf-modal-inner">
    <button class="sf-modal-close" onclick="document.getElementById('srvModal').style.display='none'">✕</button>
    <h2 id="srvModalTitle" style="margin-bottom:16px;font-size:24px">Service Details</h2>
    <p id="srvModalDesc" style="color:${MU};line-height:1.6;margin-bottom:24px"></p>
    <ul class="check-list" style="margin-bottom:32px">
      <li>Free estimates provided</li>
      <li>Satisfaction guaranteed</li>
      <li>Professional execution</li>
    </ul>
    <button class="btn-primary" style="width:100%" onclick="document.getElementById('srvModal').style.display='none'; showPage('contact')">Get a Quote</button>
  </div>
</div>

<script>
  function openServiceModal(name, desc) {
    document.getElementById('srvModalTitle').textContent = name;
    document.getElementById('srvModalDesc').textContent = desc || 'Comprehensive ' + name.toLowerCase() + ' solutions tailored to your specific needs.';
    document.getElementById('srvModal').style.display = 'flex';
  }
${NAV}
</${'script'}>
`);
}

// ==================== TEMPLATE 2: MODERN DARK ====================
