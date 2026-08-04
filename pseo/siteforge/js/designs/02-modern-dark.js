// ==================== TEMPLATE: MODERN DARK ====================
function buildModernDark(biz, D, reviews, imgs, portfolio, faqs, typeName, IB, IP, IPS, NAV) {
  const A=D.accent, BG=D.bg, TC=D.text, MU='rgba(255,255,255,0.55)';
  return wrapPage(D, `
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Space Grotesk',system-ui,sans-serif;background:${BG};color:${TC};min-height:100vh}
nav{position:sticky;top:0;z-index:100;background:rgba(13,13,13,0.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,0.06);padding:0 5%}
.nav-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;height:68px;gap:28px}
.nav-logo{font-size:22px;font-weight:900;color:#fff;letter-spacing:-0.5px;margin-right:auto}
.nav-logo span{color:${A}}
.emg-bar{background:#0a0a0a;border-bottom:1px solid rgba(255,255,255,0.05);color:#aaa;display:flex;align-items:center;justify-content:center;gap:12px;padding:12px;font-size:13px;font-weight:500}
@keyframes emgPulse { 0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.6); } 70% { box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); } 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }
.emg-dot { width: 8px; height: 8px; background: #ef4444; border-radius: 50%; animation: emgPulse 2s infinite; }
.emg-link { color: #fff; text-decoration: none; font-weight: 700; transition: color 0.2s; }
.emg-link:hover { color: ${A}; }
.sf-nav-link{font-size:13px;color:rgba(255,255,255,0.55);cursor:pointer;padding:6px 12px;border-radius:6px;transition:all .2s;font-weight:500}
.sf-nav-link:hover,.sf-nav-link.active{color:#fff;background:rgba(255,255,255,0.08)}
.nav-cta{background:${A};color:#000;padding:8px 20px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;border:none}
.nav-links-wrap{display:flex;gap:8px}
.ham{display:none;background:none;border:none;color:#fff;font-size:24px;cursor:pointer}
@media(max-width:768px){.nav-links-wrap{display:none!important}.ham{display:block}}
#mob-menu{display:none;flex-direction:column;gap:16px;padding:80px 24px 24px;background:rgba(13,13,13,0.98);position:fixed;top:0;right:0;width:280px;height:100vh;z-index:2000;box-shadow:-4px 0 24px rgba(0,0,0,0.5);animation:slideIn 0.3s forwards;border-left:1px solid rgba(255,255,255,0.06)}
@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
.mob-close{position:absolute;top:20px;right:20px;background:none;border:none;font-size:28px;color:#fff;cursor:pointer}
#mob-menu .sf-nav-link{display:block;padding:10px 0;color:rgba(255,255,255,0.7);font-size:16px}

.hero{min-height:90vh;display:flex;align-items:center;padding:80px 5%;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-200px;right:-200px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,${A}20,transparent 70%);pointer-events:none}
.hero-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;width:100%}
@media(max-width:768px){.hero-inner{grid-template-columns:1fr}}
.hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.8);padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;margin-bottom:24px;letter-spacing:0.5px}
.hero-tag::before{content:'';width:6px;height:6px;border-radius:50%;background:${A};display:block}
.hero h1{font-size:clamp(38px,5vw,62px);font-weight:700;line-height:1.05;letter-spacing:-2px;margin-bottom:20px}
.hero h1 .hl{background:linear-gradient(135deg,${A},${A}99);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero-sub{font-size:16px;color:rgba(255,255,255,0.55);line-height:1.75;margin-bottom:32px;max-width:440px}
.btn-glow{background:${A};color:#000;padding:12px 28px;border-radius:6px;font-size:14px;font-weight:700;border:none;cursor:pointer;transition:all .2s;box-shadow:0 0 30px ${A}50}
.btn-glow:hover{transform:translateY(-2px);box-shadow:0 0 50px ${A}70}
.btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.2);color:#fff;padding:11px 24px;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;margin-left:12px;transition:all .2s}
.btn-ghost:hover{border-color:${A};color:${A}}
.hero-visual{position:relative}
.hero-img{border-radius:16px;overflow:hidden;aspect-ratio:4/3}
.hero-img img{width:100%;height:100%;object-fit:cover;filter:brightness(0.85)}
.hero-float{position:absolute;bottom:-20px;left:-20px;background:rgba(13,13,13,0.9);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:14px 18px;backdrop-filter:blur(12px)}
.float-val{font-size:24px;font-weight:700;color:${A}}
.float-lbl{font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px}

.section{padding:80px 5%}
.sec-inner{max-width:1100px;margin:0 auto}
.alt-dark{background:rgba(255,255,255,0.02)}
.sec-head{margin-bottom:52px}
.sec-label{font-size:11px;font-weight:700;color:${A};letter-spacing:2px;text-transform:uppercase;margin-bottom:12px}
.sec-head h2{font-size:clamp(28px,3.5vw,44px);font-weight:700;letter-spacing:-1.5px;color:#fff;margin-bottom:10px}
.sec-head p{font-size:15px;color:rgba(255,255,255,0.5);line-height:1.7;max-width:520px}
.sec-head.centered{text-align:center}
.sec-head.centered p{margin:0 auto}

.srv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden}
.srv-card{background:${BG};padding:28px;transition:all .3s}
.srv-card:hover{background:rgba(255,255,255,0.06);transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,0.4)}
.srv-num{font-size:11px;color:${A};font-weight:700;letter-spacing:2px;margin-bottom:14px}
.srv-icon{color:${A};margin-bottom:12px;display:flex;align-items:center}
.srv-card h3{font-size:15px;font-weight:700;color:#fff;margin-bottom:8px}
.srv-card p{font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6}

.about-split{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
@media(max-width:768px){.about-split{grid-template-columns:1fr}}
.about-img-wrap{position:relative}
.about-img-wrap img{width:100%;border-radius:16px;aspect-ratio:4/3;object-fit:cover}
.about-badge{position:absolute;top:20px;right:-20px;background:${A};color:#000;border-radius:12px;padding:14px 18px;font-weight:700;text-align:center}
.about-badge .num{font-size:28px;font-weight:700;display:block}
.about-badge .lbl{font-size:11px;font-weight:600}
.feature-list{list-style:none;margin-top:24px}
.feature-list li{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;color:rgba(255,255,255,0.7)}
.feature-list li .icon{color:${A};font-size:18px;flex-shrink:0;margin-top:2px}

.port-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.port-card{position:relative;border-radius:12px;overflow:hidden;aspect-ratio:4/3;cursor:pointer}
.port-card img{width:100%;height:100%;object-fit:cover;transition:transform .4s}
.port-card:hover img{transform:scale(1.05)}
.port-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.8) 0%,transparent 50%);display:flex;flex-direction:column;justify-content:flex-end;padding:20px;opacity:0;transition:opacity .3s}
.port-card:hover .port-overlay{opacity:1}
.port-overlay h3{color:#fff;font-size:15px;font-weight:700}

.rev-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px}
.rev-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:22px;transition:all .3s}
.rev-card:hover{border-color:${A}40;background:rgba(255,255,255,0.06)}
.rev-stars{color:#fbbf24;font-size:13px;margin-bottom:12px}
.rev-text{font-size:14px;color:rgba(255,255,255,0.6);line-height:1.7;margin-bottom:16px;font-style:italic}
.rev-author{display:flex;align-items:center;gap:10px}
.rev-avatar{width:38px;height:38px;border-radius:50%;background:${A};color:#000;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px}
.rev-name{font-weight:700;font-size:14px;color:#fff}
.rev-date{font-size:12px;color:rgba(255,255,255,0.4)}

.faq-wrap{max-width:700px;margin:0 auto}
.faq-item{border-bottom:1px solid rgba(255,255,255,0.08)}
.faq-q{padding:20px 0;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:15px;color:#fff;user-select:none}
.faq-icon{color:${A};font-size:20px}
.faq-a{display:none;padding:0 0 20px;font-size:14px;color:rgba(255,255,255,0.5);line-height:1.75}

.contact-layout{display:grid;grid-template-columns:1fr 1.4fr;gap:56px;align-items:start}
@media(max-width:768px){.contact-layout{grid-template-columns:1fr}}
.contact-info h2{font-size:clamp(26px,3vw,38px);font-weight:700;letter-spacing:-1px;color:#fff;margin-bottom:12px}
.contact-info p{color:rgba(255,255,255,0.5);font-size:15px;line-height:1.7;margin-bottom:28px}
.cinfo-item{display:flex;gap:14px;align-items:center;padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.06)}
.cinfo-icon{width:42px;height:42px;background:${A}18;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.cinfo-label{font-size:11px;color:rgba(255,255,255,0.4);font-weight:600;text-transform:uppercase;letter-spacing:0.5px}
.cinfo-val{font-size:14px;font-weight:600;color:#fff}
.cform{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:32px}
.cform-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:24px}
.form-f{margin-bottom:16px}
.form-f label{display:block;font-size:11px;color:rgba(255,255,255,0.4);font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px}
.form-f input,.form-f select,.form-f textarea{width:100%;padding:11px 14px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:#fff;font-size:14px;font-family:inherit;outline:none;transition:border-color .2s}
.form-f input:focus,.form-f textarea:focus,.form-f select:focus{border-color:${A}}
.form-f select option{background:#1a1a1a}
.form-f textarea{min-height:90px;resize:vertical}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:500px){.form-row{grid-template-columns:1fr}}
.sbtn{width:100%;padding:13px;background:${A};border:none;border-radius:8px;color:#000;font-size:14px;font-weight:700;cursor:pointer;transition:all .2s;font-family:inherit}
.sbtn:hover{opacity:0.9}
.succ-msg{display:none;background:rgba(0,212,170,0.1);border:1px solid rgba(0,212,170,0.3);color:#00d4aa;padding:12px;border-radius:8px;text-align:center;font-size:14px;margin-top:12px}

footer{background:rgba(0,0,0,0.6);padding:48px 5% 24px;border-top:1px solid rgba(255,255,255,0.06)}
.foot-inner{max-width:1100px;margin:0 auto}
.foot-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:36px}
@media(max-width:768px){.foot-grid{grid-template-columns:1fr 1fr}}
.foot-brand .fl{font-size:18px;font-weight:700;color:${A};margin-bottom:10px}
.foot-brand p{font-size:13px;color:rgba(255,255,255,0.4);line-height:1.7}
.foot-col h4{color:rgba(255,255,255,0.8);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px}
.foot-col a{display:block;color:rgba(255,255,255,0.35);font-size:13px;text-decoration:none;padding:4px 0;cursor:pointer;transition:color .2s}
.foot-col a:hover{color:${A}}
.foot-bottom{border-top:1px solid rgba(255,255,255,0.05);padding-top:20px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:12px;color:#777}

/* MOBILE BOTTOM NAV */
.mobile-bottom-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(13,13,13,0.98);
  border-top: 1px solid rgba(255,255,255,0.06);
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 65px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
}
.mb-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: rgba(255,255,255,0.6);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.mb-nav-item.mb-active { color: ${A}; }
.mb-nav-item svg {
  width: 20px;
  height: 20px;
  margin-bottom: 4px;
  fill: currentColor;
}
.mb-center {
  position: relative;
  top: -20px;
  flex: 0 0 70px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.mb-center-in {
  width: 60px;
  height: 60px;
  background: #111;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0 -4px 10px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.mb-center-in img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
@media(max-width:768px) {
  .mobile-bottom-nav { display: flex; }
  body { padding-bottom: 65px; }
}

.float-btn { position: fixed; bottom: 85px; right: 20px; background: ${A}; color: #000; width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px ${A}60; z-index: 100; text-decoration: none; animation: floatPulse 3s ease-in-out infinite; }
@keyframes floatPulse { 0% { transform: translateY(0) scale(1); box-shadow: 0 4px 12px ${A}60; } 50% { transform: translateY(-6px) scale(1.05); box-shadow: 0 12px 24px ${A}40; } 100% { transform: translateY(0) scale(1); box-shadow: 0 4px 12px ${A}60; } }
@media(min-width: 769px) { .float-btn { bottom: 30px; right: 30px; width: 64px; height: 64px; } }
.sf-modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(12px); z-index: 3000; align-items: center; justify-content: center; padding: 20px; animation: fadeIn 0.2s; }
.sf-modal-inner { background: #111; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; width: 100%; max-width: 500px; padding: 32px; position: relative; animation: modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; transform: translateY(20px) scale(0.95); opacity: 0; }
@keyframes modalIn { to { transform: translateY(0) scale(1); opacity: 1; } }
.sf-modal-close { position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 24px; color: #fff; cursor: pointer; transition: transform 0.2s; }
.sf-modal-close:hover{transform:rotate(90deg)}
</style>
${biz.emergency==='yes'?`<div class="emg-bar"><div class="emg-dot"></div><span><strong>24/7 Emergency ${typeName}</strong> — Call: <a href="tel:${biz.phone}" class="emg-link">${biz.phone}</a></span></div>`:''}
<nav><div class="nav-inner">
<div class="nav-logo">${biz.name.split(' ')[0]}<span>${biz.name.split(' ').slice(1).join(' ')}</span></div>
<div class="nav-links-wrap">
  <span class="sf-nav-link active" data-page="home" onclick="showPage('home')">Home</span>
  <span class="sf-nav-link" data-page="about" onclick="showPage('about')">About</span>
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

<div id="page-home" class="sf-page">
  <div class="hero">
    <div class="hero-inner">
      <div>
        <div class="hero-tag">${biz.years}+ Years Serving ${biz.city}</div>
        <h1>${typeName} Services<br>You Can <span class="hl">Trust</span></h1>
        <p class="hero-sub">${biz.tagline}</p>
        <div>
          <button class="btn-glow" onclick="showPage('bookings')">Book a Service</button>
          <button class="btn-ghost" onclick="showPage('portfolio')">View Portfolio</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-img"><img src="${resolveImageUrl(imgs.hero, IP)}" alt="${typeName}" loading="lazy"></div>
        <div class="hero-float"><div class="float-val">${biz.rating}★</div><div class="float-lbl">${biz.reviews}+ Reviews</div></div>
      </div>
    </div>
  </div>
  <div class="alt-dark" style="padding:28px 5%">
    <div class="sec-inner" style="display:grid;grid-template-columns:repeat(4,1fr);gap:32px;text-align:center">
      <div><div style="font-size:32px;font-weight:700;color:${A}">${biz.rating}★</div><div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">Google Rating</div></div>
      <div><div style="font-size:32px;font-weight:700;color:${A}">${biz.reviews}+</div><div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">Happy Clients</div></div>
      <div><div style="font-size:32px;font-weight:700;color:${A}">${biz.years}+</div><div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">Years Experience</div></div>
      <div><div style="font-size:32px;font-weight:700;color:${A}">${biz.projects}+</div><div style="font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px">Projects Done</div></div>
    </div>
  </div>
  <div class="section">
    <div class="sec-inner">
      <div class="sec-head"><div class="sec-label">Services</div><h2>What We Offer</h2><p>Comprehensive ${typeName.toLowerCase()} services across ${biz.city}</p></div>
      <div class="srv-grid">
        ${biz.services.map((s,i)=>`<div class="srv-card" onclick="openServiceModal('${s.replace(/'/g,"\\'").replace(/"/g,"&quot;")}', '${getServiceDescription(s,biz.type).replace(/'/g,"\\'").replace(/"/g,"&quot;")}')" style="cursor:pointer"><div class="srv-num">${String(i+1).padStart(2,'0')}</div><div class="srv-icon">${getServiceIcon(s)}</div><h3>${s}</h3><p>${getServiceDescription(s,biz.type)}</p></div>`).join('')}
      </div>
    </div>
  </div>
  <div class="section" style="background:#0a0a0a">
    <div class="sec-inner">
      <div class="sec-head centered"><div class="sec-label">Why Choose Us</div><h2>The ${biz.name} Difference</h2></div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:24px">
        ${[[getWhyIcon('expert'),'Industry Experts','All technicians are certified and have years of field experience.'],[getWhyIcon('fast'),'Fast Response','We confirm bookings within 2 hours and arrive on schedule.'],[getWhyIcon('rate'),'Fair Pricing','Transparent quotes with no surprise charges. Best value guaranteed.'],[getWhyIcon('insur'),'Fully Insured','Licensed and insured for your complete peace of mind.'],[getWhyIcon('rate'),'${biz.rating}★ Rated','Consistently rated top in ${biz.city} on Google by our customers.'],[getWhyIcon('guarantee'),'30-Day Guarantee','We stand behind our work with a full workmanship guarantee.']].map(([icon,title,desc])=>`<div class="srv-card" style="text-align:center"><div class="srv-icon" style="justify-content:center;margin:0 auto 16px">${icon}</div><h3 style="margin-bottom:8px">${title}</h3><p style="color:rgba(255,255,255,0.5)">${desc}</p></div>`).join('')}
      </div>
    </div>
  </div>
  <div class="alt-dark section">
    <div class="sec-inner">
      <div class="sec-head centered"><div class="sec-label">Reviews</div><h2>Client Testimonials</h2><p>${biz.rating}★ from ${biz.reviews}+ reviews</p></div>
      <div class="rev-grid">
        ${reviews.slice(0,3).map(r=>`<div class="rev-card"><div class="rev-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div><p class="rev-text">"${r.text}"</p><div class="rev-author"><div class="rev-avatar">${r.name[0]}</div><div><div class="rev-name">${r.name}</div><div class="rev-date">${r.date||'Recently'}</div></div></div></div>`).join('')}
      </div>
    </div>
  </div>
  </div>
</div>

<div id="page-services" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-inner">
      <div class="sec-head centered"><div class="sec-label">All Services</div><h2>Full Service Range</h2><p>Professional solutions tailored to your needs</p></div>
      <div class="srv-grid">
        ${biz.services.map((s,i)=>`<div class="srv-card" onclick="openServiceModal('${s.replace(/'/g,"\\'").replace(/"/g,"&quot;")}', '${getServiceDescription(s,biz.type).replace(/'/g,"\\'").replace(/"/g,"&quot;")}')" style="cursor:pointer"><div class="srv-num">${String(i+1).padStart(2,'0')}</div><div class="srv-icon">${getServiceIcon(s)}</div><h3>${s}</h3><p>${getServiceDescription(s,biz.type)}</p></div>`).join('')}
      </div>
    </div>
  </div>
</div>

<div id="page-about" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-inner">
      <div class="about-split">
        <div class="about-img-wrap">
          <img src="${resolveImageUrl(imgs.about, IP)}" alt="About us" loading="lazy">
          <div class="about-badge"><span class="num">${biz.years}+</span><span class="lbl">Years</span></div>
        </div>
        <div>
          <div class="sec-label">About Us</div>
          <h2 style="font-size:clamp(28px,3vw,42px);font-weight:700;letter-spacing:-1.5px;color:#fff;margin:12px 0 16px">Building Trust<br>Since Day One</h2>
          <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:14px;font-size:15px">With ${biz.years}+ years in ${biz.city}, ${biz.name} has become the area's most trusted ${biz.type} service provider. Our ${biz.team}-strong team of certified professionals handles everything from routine maintenance to complex emergency work.</p>
          <p style="color:rgba(255,255,255,0.55);line-height:1.8;font-size:15px">We believe in transparency, quality workmanship, and treating every client's home or business with the same respect we'd want for our own.</p>
          <ul class="feature-list">
            <li><span class="icon">✓</span>Fully licensed &amp; insured professionals</li>
            <li><span class="icon">✓</span>Transparent pricing — no hidden fees</li>
            <li><span class="icon">✓</span>${biz.emergency==='yes'?'24/7 emergency availability':'Flexible scheduling available'}</li>
            <li><span class="icon">✓</span>30-day workmanship guarantee</li>
            <li><span class="icon">✓</span>${biz.projects}+ projects completed in ${biz.city}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="page-portfolio" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-inner">
      <div class="sec-head centered"><div class="sec-label">Portfolio</div><h2>Our Work</h2><p>${biz.projects}+ projects completed</p></div>
      <div class="port-grid">
        ${portfolio.map(p=>`<div class="port-card"><img src="${resolveImageUrl(p.img, IP)}" alt="${p.title}" loading="lazy"><div class="port-overlay"><h3>${p.title}</h3><span>${p.year} · ${biz.city}</span></div></div>`).join('')}
      </div>
      <div style="margin-top:56px"><div class="sec-head centered"><div class="sec-label">All Services</div><h2>Full Service Range</h2></div><div class="srv-grid">${biz.services.map((s,i)=>`<div class="srv-card" onclick="openServiceModal('${s.replace(/'/g,"\\'").replace(/"/g,"&quot;")}', '${getServiceDescription(s,biz.type).replace(/'/g,"\\'").replace(/"/g,"&quot;")}')" style="cursor:pointer"><div class="srv-num">${String(i+1).padStart(2,'0')}</div><div class="srv-icon">${getServiceIcon(s)}</div><h3>${s}</h3><p>${getServiceDescription(s,biz.type)}</p></div>`).join('')}</div></div>
    </div>
  </div>
</div>

<div id="page-reviews" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-inner">
      <div class="sec-head centered">
        <div class="sec-label">Reviews</div>
        <h2>What Clients Say</h2>
        <p style="margin-bottom:20px">${biz.rating}★ from ${biz.reviews}+ reviews</p>
        ${biz.google ? `<button class="btn-glow" style="padding:12px 24px;font-size:14px" onclick="window.open('${biz.google}','_blank')">⭐ Leave a Review on Google</button>` : ''}
      </div>
      <div class="rev-grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">
        ${reviews.map(r=>`<div class="rev-card"><div class="rev-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div><p class="rev-text">"${r.text}"</p><div class="rev-author"><div class="rev-avatar">${r.name[0]}</div><div><div class="rev-name">${r.name}</div><div class="rev-date">${r.date||'Recently'}</div></div></div></div>`).join('')}
      </div>
    </div>
  </div>
</div>

<div id="page-faq" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-inner">
      <div class="sec-head centered"><div class="sec-label">FAQ</div><h2>Common Questions</h2><p>About our ${typeName.toLowerCase()} services</p></div>
      <div class="faq-wrap">
        ${faqs.map(([q,a])=>`<div class="faq-item"><div class="faq-q" onclick="toggleFaq(this)">${q}<span class="faq-icon">+</span></div><div class="faq-a">${a}</div></div>`).join('')}
      </div>
    </div>
  </div>
</div>

<div id="page-contact" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-inner">
      <div class="contact-layout">
        <div class="contact-info">
          <div class="sec-label">Contact Us</div>
          <h2>Let's Work Together</h2>
          <p>Ready to book a ${biz.type} service? We respond within 30 minutes during business hours.</p>
          <div class="cinfo-item"><div class="cinfo-icon">📞</div><div><div class="cinfo-label">Phone</div><div class="cinfo-val">${biz.phone}</div></div></div>
          <div class="cinfo-item"><div class="cinfo-icon">✉️</div><div><div class="cinfo-label">Email</div><div class="cinfo-val">${biz.email}</div></div></div>
          <div class="cinfo-item"><div class="cinfo-icon">📍</div><div><div class="cinfo-label">Address</div><div class="cinfo-val">${biz.address}</div></div></div>
          <div class="cinfo-item"><div class="cinfo-icon">🕐</div><div><div class="cinfo-label">Hours</div><div class="cinfo-val">${biz.hours}</div></div></div>
        </div>
        <div class="cform">
          <div class="cform-title">Request a Callback</div>
          <div class="form-row">
            <div class="form-f"><label>Name</label><input type="text" placeholder="Your name"></div>
            <div class="form-f"><label>Phone</label><input type="tel" placeholder="${biz.phone}"></div>
          </div>
          <div class="form-row">
            <div class="form-f"><label>Email</label><input type="email" placeholder="Email Address"></div>
            <div class="form-f"><label>Property Address</label><input type="text" placeholder="Street, City, Zip"></div>
          </div>
          <div class="form-f"><label>Service</label><select>${biz.services.map(s=>`<option>${s}</option>`).join('')}</select></div>
          <div class="form-row">
            <div class="form-f"><label>Property Size</label><input type="text" placeholder="e.g. 2000 sq ft"></div>
            <div class="form-f"><label>Preferred Date</label><input type="date"></div>
          </div>
          <div class="form-f"><label>Service Add-ons</label><input type="text" placeholder="Any specific requests?"></div>
          <div class="form-f"><label>Message</label><textarea placeholder="Describe your requirement..."></textarea></div>
          <button class="sbtn" onclick="submitForm(this)">Send Request</button>
          <div class="succ-msg">✅ We'll call you back within 30 minutes!</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="page-bookings" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-inner">
      <div class="sec-head centered"><div class="sec-label">Bookings</div><h2>Schedule an Appointment</h2><p>Select a time that works for you.</p></div>
      <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:20px; overflow:hidden;">
        <!-- Calendly inline widget begin -->
        <div class="calendly-inline-widget" data-url="https://calendly.com/ojasdenge-lx/30min?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        <!-- Calendly inline widget end -->
      </div>
    </div>
  </div>
</div>

<footer><div class="foot-inner">
  <div class="foot-grid">
    <div class="foot-brand">
      <div class="fl">${biz.name}</div>
      <p>${biz.tagline}</p>
      <div style="display:flex;gap:12px;margin-top:16px">
        ${biz.fb ? `<a href="${biz.fb}" target="_blank" style="font-size:24px;text-decoration:none;color:inherit">📱</a>` : ''}
        ${biz.ig ? `<a href="${biz.ig}" target="_blank" style="font-size:24px;text-decoration:none;color:inherit">📸</a>` : ''}
        ${biz.google ? `<a href="${biz.google}" target="_blank" style="font-size:24px;text-decoration:none;color:inherit">⭐</a>` : ''}
      </div>
    </div>
    <div class="foot-col"><h4>Services</h4>${biz.services.slice(0,5).map(s=>`<a onclick="showPage('portfolio')">${s}</a>`).join('')}</div>
    <div class="foot-col"><h4>Company</h4><a onclick="showPage('about')">About Us</a><a onclick="showPage('portfolio')">Portfolio</a><a onclick="showPage('reviews')">Reviews</a><a onclick="showPage('faq')">FAQ</a><a onclick="showPage('contact')">Contact</a></div>
    <div class="foot-col"><h4>Contact</h4><a>${biz.phone}</a><a>${biz.email}</a><a>${biz.city}</a></div>
  </div>
  <div class="foot-bottom">
    <span>© ${new Date().getFullYear()} ${biz.name}</span>
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
    <ul class="feature-list" style="margin-bottom:32px">
      <li><span class="icon">✓</span> Free estimates provided</li>
      <li><span class="icon">✓</span> Satisfaction guaranteed</li>
      <li><span class="icon">✓</span> Professional execution</li>
    </ul>
    <button class="btn-glow" style="width:100%" onclick="document.getElementById('srvModal').style.display='none'; showPage('contact')">Get a Quote</button>
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

