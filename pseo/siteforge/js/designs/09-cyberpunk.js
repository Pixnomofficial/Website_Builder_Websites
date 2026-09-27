function buildCyberpunk(biz, D, reviews, imgs, portfolioItems, faqItems, typeName, imgBase, imgP, imgPs) {
  biz = biz || {};
  D = D || {};
  const accent = biz.accent || D.accent || '#00fff0';
  const accent2 = D.accent2 || '#ff00ff';
  const phone = biz.phone || '';
  const email = biz.email || '';
  const siteName = biz.name || 'Business';
  const typeNameLower = typeName.toLowerCase();
  const year = new Date().getFullYear();
  const city = biz.city || 'your area';

  const heroText = D.hero || `${typeName} that never stops`;
  const heroSub = D.subhero || `Professional ${typeNameLower} solutions powered by cutting-edge technology. ${biz.tagline || 'Reliable, fast, and built to last.'}`;
  const aboutText = D.about || `Trusted ${typeNameLower} experts serving ${city} with certified professionals and proven results.`;

  const features = D.features || (biz.services && biz.services.length >= 4
    ? biz.services.slice(0, 6).map((s, i) => ({
        title: s,
        desc: `Professional ${s.toLowerCase()} services with certified experts and guaranteed quality.`
      }))
    : [
        { title: 'Licensed & insured', desc: `All our ${typeNameLower} professionals are fully certified and carry valid insurance.` },
        { title: 'Transparent pricing', desc: 'No hidden fees. Get upfront quotes before any work begins.' },
        { title: 'Fast response', desc: `Quick scheduling across ${city}. Emergency service available.` },
        { title: 'Quality guarantee', desc: '30-day workmanship guarantee on all services. Satisfaction assured.' },
        { title: '24/7 availability', desc: biz.emergency === 'yes' ? 'Round-the-clock emergency service when you need it most.' : 'Flexible scheduling to fit your calendar.' },
        { title: 'Expert team', desc: `Team of certified ${typeNameLower} specialists with years of experience.` }
      ]);

  const svcImgs = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&h=450&fit=crop'
  ];
  const services = D.services || (biz.services && biz.services.length >= 4
    ? biz.services.slice(0, 4).map((s, i) => ({
        title: s,
        desc: `Professional ${s.toLowerCase()} with certified experts, guaranteed quality, and transparent pricing.`,
        img: svcImgs[i % svcImgs.length]
      }))
    : [
        { title: `${typeName} installation`, desc: `Expert ${typeNameLower} installation services with precision and care.`, img: svcImgs[0] },
        { title: `${typeName} repair`, desc: `Fast, reliable ${typeNameLower} repair and maintenance services.`, img: svcImgs[1] },
        { title: `${typeName} inspection`, desc: `Thorough ${typeNameLower} inspections and assessments.`, img: svcImgs[2] },
        { title: `${typeName} maintenance`, desc: `Preventive maintenance to keep your systems running.`, img: svcImgs[3] }
      ]);

  const processSteps = D.process || [
    { title: 'Contact us', desc: `Reach out by phone or our contact form. We'll schedule a convenient time.` },
    { title: 'Assessment', desc: `Our certified specialist arrives on time and evaluates your ${typeNameLower} needs.` },
    { title: 'Quote', desc: 'You receive a transparent, upfront quote with no hidden fees.' },
    { title: 'Service', desc: `Our expert team completes the ${typeNameLower} work to the highest standards.` },
    { title: 'Quality check', desc: 'Thorough inspection ensures everything meets our quality benchmarks.' },
    { title: 'Follow-up', desc: 'We follow up to ensure your complete satisfaction.' }
  ];

  const testimonials = D.testimonials || reviews || [
    { name: 'Satisfied Client', text: `Excellent ${typeNameLower} service. Professional, on time, and great quality work.`, date: '1 week ago' },
    { name: 'Happy Homeowner', text: `Very impressed with the quality and transparency. Highly recommend!`, date: '2 weeks ago' },
    { name: 'Business Owner', text: `Reliable, professional, and fair pricing. Will use again for sure.`, date: '1 month ago' }
  ];

  const faqList = (faqItems && faqItems.length ? faqItems.map(f => {
    const q = Array.isArray(f) ? f[0] : (f.q || f.question || '');
    const a = Array.isArray(f) ? f[1] : (f.a || f.answer || '');
    return `<div class="faq-item">
      <div class="faq-q" onclick="toggleFaq(this)"><span>${q}</span><span class="faq-icon">+</span></div>
      <div class="faq-a"><p>${a}</p></div>
    </div>`;
  }).join('\n') : '') || D.faqs || [
    { q: `How quickly can you respond for ${typeNameLower} service?`, a: `For standard bookings in ${city}, we confirm within 2 hours. ${biz.emergency === 'yes' ? 'For genuine emergencies, we are available 24/7 including holidays.' : ''}` },
    { q: 'Do you provide a service guarantee?', a: `Absolutely. All our ${typeNameLower} services come with a 30-day workmanship guarantee. If you're not satisfied, we return and fix it at no cost.` },
    { q: 'Are your professionals certified?', a: `Yes, all our ${typeNameLower} professionals are fully certified, background-verified, and carry valid licenses.` },
    { q: `What areas do you serve?`, a: `We serve all major areas across ${city} and surrounding areas. Contact us to confirm coverage.` },
    { q: 'How is pricing determined?', a: 'We provide transparent, upfront quotes after a brief assessment. No hidden charges.' }
  ];

  const faqHtml = Array.isArray(faqList) && faqList.length && typeof faqList[0] === 'object' && !faqList[0].tagName
    ? faqList.map(f => `<div class="faq-item"><div class="faq-q" onclick="toggleFaq(this)"><span>${f.q}</span><span class="faq-icon">+</span></div><div class="faq-a"><p>${f.a}</p></div></div>`).join('\n')
    : faqList;

  const navLinks = D.nav || ['Services', 'Process', 'Pricing', 'FAQ'];

  const css = `
<style>
:root{--bg:#000;--bg2:#0d0d0d;--surface:#131313;--surface2:#171717;--border:#1f1f21;--border-soft:rgba(255,255,255,.08);--primary:${accent};--secondary:${accent2};--text:#f2f2f3;--text-muted:#999;--text-dim:#6b6b6f;--radius-pill:100px;--radius-card:30px;--radius-btn:12px;--radius-sm:8px;--space:24px;--maxw:1180px}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,-apple-system,sans-serif;background:var(--bg);color:var(--text);line-height:1.6;-webkit-font-smoothing:antialiased;font-weight:300;overflow-x:hidden}
h1,h2,h3,h4{font-family:'Geist','Inter',sans-serif;font-weight:500;color:var(--text);letter-spacing:-.02em}
a{color:inherit}
img{max-width:100%;display:block}
.container{max-width:var(--maxw);margin:0 auto;padding:0 5%}
.eyebrow{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(0,255,240,.35);background:linear-gradient(135deg,rgba(0,255,240,.08),rgba(255,0,255,.08));color:#cfe0ff;font-size:13px;font-weight:400;padding:8px 18px;border-radius:var(--radius-pill);margin-bottom:28px;letter-spacing:.01em}
.eyebrow-dot{width:6px;height:6px;border-radius:50%;background:var(--primary);box-shadow:0 0 8px var(--primary)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:'Inter',sans-serif;font-weight:500;font-size:14.5px;padding:14px 28px;border-radius:var(--radius-pill);cursor:pointer;border:none;text-decoration:none;transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease;white-space:nowrap}
.btn-primary{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#fff;box-shadow:0 0 0 1px rgba(255,255,255,.06) inset,0 8px 24px -8px rgba(0,255,240,.5)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 0 0 1px rgba(255,255,255,.1) inset,0 14px 32px -8px rgba(0,255,240,.65)}
.btn-ghost{background:rgba(255,255,255,.03);border:1px solid var(--border-soft);color:var(--text)}
.btn-ghost:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.18)}
.btn-dark{background:#0d0d0d;color:#fff;border:1px solid rgba(255,255,255,.12)}
.btn-dark:hover{background:#1a1a1a}
.btn-block{width:100%}
header{position:sticky;top:0;z-index:200;background:rgba(0,0,0,.65);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--border-soft)}
.nav{max-width:var(--maxw);margin:0 auto;padding:0 5%;height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.logo{display:flex;align-items:center;gap:10px;font-family:'Geist',sans-serif;font-weight:500;font-size:18px;letter-spacing:-.01em}
.logo-mark{width:30px;height:30px;border-radius:9px;background:linear-gradient(135deg,var(--primary),var(--secondary));display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#fff;box-shadow:0 4px 14px -3px rgba(0,255,240,.6)}
.nav-links{display:flex;align-items:center;gap:4px;background:rgba(255,255,255,.02);border:1px solid var(--border-soft);padding:5px;border-radius:var(--radius-pill)}
.nav-link{font-size:14px;color:var(--text-muted);text-decoration:none;padding:8px 16px;border-radius:var(--radius-pill);transition:all .2s;font-weight:400}
.nav-link:hover,.nav-link.active{background:rgba(255,255,255,.08);color:var(--text)}
.nav-right{display:flex;align-items:center;gap:14px}
.ham{display:none;background:none;border:none;color:var(--text);font-size:22px;cursor:pointer;width:40px;height:40px;align-items:center;justify-content:center}
@media(max-width:900px){.nav-links{display:none}.ham{display:flex}}
#mobmenu{display:none;flex-direction:column;gap:6px;padding:16px 5% 28px;background:#050505;border-bottom:1px solid var(--border-soft)}
#mobmenu a{padding:12px 6px;color:var(--text-muted);text-decoration:none;font-size:15px;border-bottom:1px solid var(--border-soft)}
#mobmenu.show{display:flex}
.hero{position:relative;padding:110px 0 90px;overflow:hidden}
.hero-glow{position:absolute;top:-200px;right:-160px;width:700px;height:700px;background:radial-gradient(circle,rgba(175,83,255,.22),rgba(56,131,255,.10) 45%,transparent 70%);filter:blur(10px);pointer-events:none;z-index:0}
.hero-inner{position:relative;z-index:1;display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center}
@media(max-width:980px){.hero-inner{grid-template-columns:1fr}}
.hero h1{font-size:clamp(38px,5.6vw,72px);line-height:1.04;letter-spacing:-.035em;margin-bottom:26px;color:#e9e9ec}
.hero h1 span{background:linear-gradient(135deg,#fff,#9fb8ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p.lead{font-size:17px;color:var(--text-muted);max-width:480px;margin-bottom:36px;font-weight:300;line-height:1.7}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap}
.hero-visual{position:relative;display:flex;align-items:center;justify-content:center;min-height:440px}
.hero-img{width:100%;max-width:480px;border-radius:var(--radius-card);border:1px solid var(--border);object-fit:cover}
@media(max-width:980px){.hero-img{max-width:100%;max-height:360px}}
.metallic-wrap{position:relative;width:380px;height:380px;filter:drop-shadow(0 30px 70px rgba(0,255,240,.25));animation:floatY 6s ease-in-out infinite}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@media(prefers-reduced-motion:reduce){.metallic-wrap{animation:none}}
.paint-container{display:block;height:100%;width:100%;object-fit:contain}
@media(max-width:980px){.metallic-wrap{width:300px;height:300px}}
.section{padding:110px 0}
.section-tight{padding:80px 0}
.section-head{max-width:640px;margin-bottom:56px}
.section-head.center{max-width:620px;margin-left:auto;margin-right:auto;text-align:center}
.section-head h2{font-size:clamp(28px,3.4vw,44px);letter-spacing:-.03em;margin-bottom:16px;line-height:1.12}
.section-head p{color:var(--text-muted);font-size:16px;font-weight:300;line-height:1.7}
.bg-alt{background:linear-gradient(180deg,rgba(255,255,255,.015),transparent 40%)}
.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:900px){.feature-grid{grid-template-columns:1fr}}
.feature-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-card);padding:36px 32px;transition:transform .3s,border-color .3s}
.feature-card:hover{transform:translateY(-4px);border-color:rgba(0,255,240,.35)}
.feature-icon{font-size:28px;margin-bottom:18px}
.feature-card h3{font-size:18px;margin-bottom:10px}
.feature-card p{color:var(--text-muted);font-size:15px;line-height:1.65}
.service-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
@media(max-width:768px){.service-grid{grid-template-columns:1fr}}
.service-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-card);overflow:hidden;transition:transform .3s,border-color .3s}
.service-card:hover{transform:translateY(-4px);border-color:rgba(0,255,240,.35)}
.service-img{width:100%;height:220px;object-fit:cover}
.service-body{padding:28px 28px 32px}
.service-body h3{font-size:18px;margin-bottom:8px}
.service-body p{color:var(--text-muted);font-size:15px;line-height:1.65}
.process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:900px){.process-grid{grid-template-columns:1fr}}
.process-step{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-card);padding:36px 32px;text-align:center;transition:transform .3s,border-color .3s}
.process-step:hover{transform:translateY(-4px);border-color:rgba(0,255,240,.35)}
.step-num{font-size:48px;font-weight:700;background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px}
.process-step h3{font-size:18px;margin-bottom:10px}
.process-step p{color:var(--text-muted);font-size:15px;line-height:1.65}
.pricing-toggle{display:flex;justify-content:center;gap:8px;margin-bottom:48px}
.toggle-opt{padding:10px 24px;border-radius:var(--radius-pill);font-size:14px;font-weight:500;cursor:pointer;background:var(--surface);border:1px solid var(--border);color:var(--text-muted);transition:all .2s}
.toggle-opt.active{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#fff;border-color:transparent}
.save-chip{font-size:11px;background:rgba(255,255,255,.15);padding:2px 8px;border-radius:var(--radius-pill);margin-left:4px}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:start}
@media(max-width:900px){.pricing-grid{grid-template-columns:1fr}}
.price-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-card);padding:36px 32px;transition:transform .3s,border-color .3s;position:relative}
.price-card:hover{transform:translateY(-4px);border-color:rgba(0,255,240,.35)}
.price-card.popular{border-color:var(--primary);box-shadow:0 0 40px -10px rgba(0,255,240,.2)}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--primary),var(--secondary));color:#fff;font-size:12px;font-weight:600;padding:4px 16px;border-radius:var(--radius-pill);white-space:nowrap}
.plan-name{font-size:18px;font-weight:600;margin-bottom:12px}
.plan-price{font-size:40px;font-weight:700;margin-bottom:8px}
.plan-desc{color:var(--text-muted);font-size:14px;margin-bottom:24px;line-height:1.6}
.plan-feats{list-style:none;margin-top:24px}
.plan-feats li{padding:8px 0;color:var(--text-muted);font-size:14px;border-bottom:1px solid var(--border-soft);display:flex;align-items:center;gap:8px}
.plan-feats li::before{content:'\\2713';color:var(--primary);font-weight:700}
.faq-list{max-width:720px;margin:0 auto}
.faq-item{border-bottom:1px solid var(--border-soft)}
.faq-q{display:flex;justify-content:space-between;align-items:center;padding:20px 0;cursor:pointer;font-weight:500;font-size:16px}
.faq-icon{font-size:20px;color:var(--text-muted);transition:transform .3s}
.faq-a{max-height:0;overflow:hidden;transition:max-height .3s ease,padding .3s ease}
.faq-item.open .faq-a{max-height:300px;padding-bottom:20px}
.faq-item.open .faq-icon{transform:rotate(45deg)}
.faq-a p{color:var(--text-muted);font-size:15px;line-height:1.7}
.testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:900px){.testimonial-grid{grid-template-columns:1fr}}
.testimonial-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-card);padding:32px}
.testimonial-card p{color:var(--text-muted);font-size:15px;line-height:1.7;margin-bottom:16px;font-style:italic}
.testimonial-name{font-weight:600;font-size:14px}
.testimonial-date{color:var(--text-dim);font-size:12px;margin-top:4px}
.cta-final{text-align:center;padding:100px 5%;background:linear-gradient(135deg,rgba(0,255,240,.06),rgba(255,0,255,.06));border-top:1px solid var(--border-soft)}
.cta-final h2{font-size:clamp(28px,3.4vw,44px);letter-spacing:-.03em;margin-bottom:16px}
.cta-final p{color:var(--text-muted);font-size:16px;max-width:540px;margin:0 auto 32px;line-height:1.7}
footer{background:var(--bg2);border-top:1px solid var(--border-soft);padding:60px 0 30px}
.footer-inner{max-width:var(--maxw);margin:0 auto;padding:0 5%}
.footer-top{display:grid;grid-template-columns:1.5fr 1fr;gap:40px;margin-bottom:40px}
@media(max-width:768px){.footer-top{grid-template-columns:1fr}}
.footer-brand p{color:var(--text-muted);font-size:14px;line-height:1.7;margin-top:16px;max-width:320px}
.footer-col h4{font-size:14px;font-weight:600;margin-bottom:16px}
.footer-col a{display:block;color:var(--text-muted);font-size:14px;padding:4px 0;text-decoration:none;transition:color .2s}
.footer-col a:hover{color:var(--text)}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:24px;border-top:1px solid var(--border-soft);font-size:13px;color:var(--text-dim)}
.socials{display:flex;gap:12px}
.socials a{color:var(--text-dim);text-decoration:none;transition:color .2s}
.socials a:hover{color:var(--text)}
</style>`;

  const html = `
<header>
  <div class="nav">
    <div class="logo"><div class="logo-mark">${siteName.charAt(0)}</div>${siteName}</div>
    <nav class="nav-links">
      ${navLinks.map(n => `<a class="nav-link" href="#${n.toLowerCase().replace(/\s+/g,'-')}">${n}</a>`).join('\n      ')}
    </nav>
    <div class="nav-right">
      <a href="#contact" class="btn btn-dark">Contact Us</a>
      <button class="ham" onclick="document.getElementById('mobmenu').classList.toggle('show')">&#9776;</button>
    </div>
  </div>
  <div id="mobmenu">
    ${navLinks.map(n => `<a href="#${n.toLowerCase().replace(/\s+/g,'-')}">${n}</a>`).join('\n    ')}
  </div>
</header>

<section class="hero">
  <div class="hero-glow"></div>
  <div class="container hero-inner">
    <div>
      <div class="eyebrow"><span class="eyebrow-dot"></span>${aboutText}</div>
      <h1>${heroText}<br><span>${heroSub.split('.')[0]}.</span></h1>
      <p class="lead">${heroSub}</p>
      <div class="hero-actions">
        <a href="#contact" class="btn btn-primary">Get a Quote</a>
        <a href="#services" class="btn btn-ghost">See our services</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="metallic-wrap" id="metallicWrap">
        <canvas id="metallicCanvas" class="paint-container"></canvas>
      </div>
    </div>
  </div>
</section>

<section class="section bg-alt" id="services">
  <div class="container">
    <div class="section-head center">
      <h2>Our ${typeName} services</h2>
      <p>${aboutText}</p>
    </div>
    <div class="service-grid">
      ${services.map(s => `
      <div class="service-card">
        ${s.img ? `<img src="${s.img}" alt="${s.title}" class="service-img">` : ''}
        <div class="service-body">
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="section" id="features">
  <div class="container">
    <div class="section-head center">
      <h2>Why choose ${siteName}</h2>
      <p>Features engineered for exceptional ${typeNameLower} performance.</p>
    </div>
    <div class="feature-grid">
      ${features.map(f => `<div class="feature-card"><div class="feature-icon">&#9889;</div><h3>${f.title}</h3><p>${f.desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section" id="process">
  <div class="container">
    <div class="section-head center">
      <h2>How it works</h2>
      <p>From first contact to completed ${typeNameLower} — simple, transparent, professional.</p>
    </div>
    <div class="process-grid">
      ${processSteps.slice(0, 3).map((s, i) => `<div class="process-step"><div class="step-num">0${i + 1}</div><h3>${s.title}</h3><p>${s.desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section bg-alt" id="pricing">
  <div class="container">
    <div class="section-head center">
      <h2>Transparent pricing</h2>
      <p>Clear, upfront pricing with no hidden fees. Choose the plan that works for you.</p>
    </div>
    <div class="pricing-grid">
      <div class="price-card">
        <div class="plan-name">Basic</div>
        <div class="plan-price">Custom</div>
        <div class="plan-desc">Essential ${typeNameLower} services for standard needs.</div>
        <a href="#contact" class="btn btn-ghost btn-block">Get Quote</a>
        <ul class="plan-feats">
          <li>Standard ${typeNameLower} services</li><li>Business hours support</li><li>Quality guarantee</li><li>Transparent pricing</li>
        </ul>
      </div>
      <div class="price-card popular">
        <div class="price-badge">Most popular</div>
        <div class="plan-name">Professional</div>
        <div class="plan-price">Custom</div>
        <div class="plan-desc">Comprehensive ${typeNameLower} solutions with priority support.</div>
        <a href="#contact" class="btn btn-primary btn-block">Get Quote</a>
        <ul class="plan-feats">
          <li>Full ${typeNameLower} service range</li><li>Priority scheduling</li><li>Extended warranty</li><li>Dedicated specialist</li>
        </ul>
      </div>
      <div class="price-card">
        <div class="plan-name">Enterprise</div>
        <div class="plan-price">Custom</div>
        <div class="plan-desc">Tailored ${typeNameLower} solutions for large-scale operations.</div>
        <a href="#contact" class="btn btn-ghost btn-block">Get Quote</a>
        <ul class="plan-feats">
          <li>Custom ${typeNameLower} packages</li><li>24/7 emergency service</li><li>SLA guarantee</li><li>Account manager</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section" id="testimonials">
  <div class="container">
    <div class="section-head center">
      <h2>What our clients say</h2>
      <p>Trusted by hundreds of satisfied customers across ${city}.</p>
    </div>
    <div class="testimonial-grid">
      ${testimonials.slice(0, 3).map(r => `
      <div class="testimonial-card">
        <p>"${r.text}"</p>
        <div class="testimonial-name">${r.name}</div>
        ${r.date ? `<div class="testimonial-date">${r.date}</div>` : ''}
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="section bg-alt" id="faq">
  <div class="container">
    <div class="section-head center">
      <h2>Frequently asked questions</h2>
      <p>Everything you need to know about our ${typeNameLower} services.</p>
    </div>
    <div class="faq-list">${faqHtml}</div>
  </div>
</section>

<section class="cta-final" id="contact">
  <h2>Ready to get started?</h2>
  <p>Contact us today for a free consultation and transparent quote. ${biz.phone ? `Call us at ${biz.phone}` : 'We respond within 2 hours'}.</p>
  <a href="tel:${(biz.phone || '').replace(/[^0-9+]/g, '')}" class="btn btn-primary">${biz.phone ? 'Call ' + biz.phone : 'Get a Free Quote'}</a>
</section>

<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="logo"><div class="logo-mark">${siteName.charAt(0)}</div>${siteName}</div>
        <p>${aboutText}</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Quick Links</h4>
          ${navLinks.map(n => `<a href="#${n.toLowerCase().replace(/\s+/g,'-')}">${n}</a>`).join('<a href="#contact">Contact</a>')}
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${year} ${siteName}. All rights reserved.</span>
      <div class="socials">
        <a href="#" aria-label="Instagram">IG</a><a href="#" aria-label="Facebook">FB</a><a href="#" aria-label="LinkedIn">in</a>
      </div>
    </div>
  </div>
</footer>`;

  const script = `
<script>
(function(){
  var sectionIds=['services','features','process','pricing','testimonials','faq'];
  var sections=sectionIds.map(function(id){return document.getElementById(id)}).filter(Boolean);
  var navLinks=document.querySelectorAll('.nav-link');
  window.addEventListener('scroll',function(){
    var current='';
    sections.forEach(function(sec){
      var rect=sec.getBoundingClientRect();
      if(rect.top<=120&&rect.bottom>120) current=sec.id;
    });
    navLinks.forEach(function(l){l.classList.toggle('active',l.getAttribute('href')==='#'+current)});
  });
  document.querySelectorAll('#mobmenu a').forEach(function(a){a.addEventListener('click',function(){
    document.getElementById('mobmenu').classList.remove('show');
  })});
  window.toggleFaq=function(el){
    var item=el.parentElement;
    var answer=item.querySelector('.faq-a');
    var isOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function(o){
      o.classList.remove('open');
      o.querySelector('.faq-a').style.maxHeight=null;
    });
    if(!isOpen){item.classList.add('open');answer.style.maxHeight=answer.scrollHeight+'px';}
  };

  /* MetallicPaint (React Bits, MIT) — vanilla JS/WebGL2 port */
  (function(){
    var vertexShader='#version 300 es\\nprecision highp float;\\nin vec2 a_position;\\nout vec2 vP;\\nvoid main(){vP=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}';
    var fragmentShader='#version 300 es\\nprecision highp float;\\nin vec2 vP;\\nout vec4 oC;\\nuniform sampler2D u_tex;\\nuniform float u_time,u_ratio,u_imgRatio,u_seed,u_scale,u_refract,u_blur,u_liquid;\\nuniform float u_bright,u_contrast,u_angle,u_fresnel,u_sharp,u_wave,u_noise,u_chroma;\\nuniform float u_distort,u_contour;\\nuniform vec3 u_lightColor,u_darkColor,u_tint;\\nvec3 sC,sM;\\nvec3 pW(vec3 v){\\n  vec3 i=floor(v),f=fract(v),s=sign(fract(v*.5)-.5),h=fract(sM*i+i.yzx),c=f*(f-1.);\\n  return s*c*((h*16.-4.)*c-1.);\\n}\\nvec3 aF(vec3 b,vec3 c){return pW(b+c.zxy-pW(b.zxy+c.yzx)+pW(b.yzx+c.xyz));}\\nvec3 lM(vec3 s,vec3 p){return(p+aF(s,p))*.5;}\\nvec2 fA(){\\n  vec2 c=vP-.5;\\n  c.x*=u_ratio>u_imgRatio?u_ratio/u_imgRatio:1.;\\n  c.y*=u_ratio>u_imgRatio?1.:u_imgRatio/u_ratio;\\n  return vec2(c.x+.5,.5-c.y);\\n}\\nvec2 rot(vec2 p,float r){float c=cos(r),s=sin(r);return vec2(p.x*c+p.y*s,p.y*c-p.x*s);}\\nfloat bM(vec2 c,float t){\\n  vec2 l=smoothstep(vec2(0.),vec2(t),c),u=smoothstep(vec2(0.),vec2(t),1.-c);\\n  return l.x*l.y*u.x*u.y;\\n}\\nfloat mG(float hi,float lo,float t,float sh,float cv){\\n  sh*=(2.-u_sharp);\\n  float ci=smoothstep(.15,.85,cv),r=lo;\\n  float e1=.08/u_scale;\\n  r=mix(r,hi,smoothstep(0.,sh*1.5,t));\\n  r=mix(r,lo,smoothstep(e1-sh,e1+sh,t));\\n  float e2=e1+.05/u_scale*(1.-ci*.35);\\n  r=mix(r,hi,smoothstep(e2-sh,e2+sh,t));\\n  float e3=e2+.025/u_scale*(1.-ci*.45);\\n  r=mix(r,lo,smoothstep(e3-sh,e3+sh,t));\\n  float e4=e1+.1/u_scale;\\n  r=mix(r,hi,smoothstep(e4-sh,e4+sh,t));\\n  float rm=1.-e4,gT=clamp((t-e4)/rm,0.,1.);\\n  r=mix(r,mix(hi,lo,smoothstep(0.,1.,gT)),smoothstep(e4-sh*.5,e4+sh*.5,t));\\n  return r;\\n}\\nvoid main(){\\n  sC=fract(vec3(.7548,.5698,.4154)*(u_seed+17.31))+.5;\\n  sM=fract(sC.zxy-sC.yzx*1.618);\\n  vec2 sc=vec2(vP.x*u_ratio,1.-vP.y);\\n  float angleRad=u_angle*3.14159/180.;\\n  sc=rot(sc-.5,angleRad)+.5;\\n  sc=clamp(sc,0.,1.);\\n  float sl=sc.x-sc.y,an=u_time*.001;\\n  vec2 iC=fA();\\n  vec4 texSample=texture(u_tex,iC);\\n  float dp=texSample.r;\\n  float shapeMask=texSample.a;\\n  vec3 hi=u_lightColor*u_bright;\\n  vec3 lo=u_darkColor*(2.-u_bright);\\n  lo.b+=smoothstep(.6,1.4,sc.x+sc.y)*.08;\\n  vec2 fC=sc-.5;\\n  float rd=length(fC+vec2(0.,sl*.15));\\n  vec2 ag=rot(fC,(.22-sl*.18)*3.14159);\\n  float cv=1.-pow(rd*1.65,1.15);\\n  cv*=pow(sc.y,.35);\\n  float vs=shapeMask;\\n  vs*=bM(iC,.01);\\n  float fr=pow(1.-cv,u_fresnel)*.3;\\n  vs=min(vs+fr*vs,1.);\\n  float mT=an*.0625;\\n  vec3 wO=vec3(-1.05,1.35,1.55);\\n  vec3 wA=aF(vec3(31.,73.,56.),mT+wO)*.22*u_wave;\\n  vec3 wB=aF(vec3(24.,64.,42.),mT-wO.yzx)*.22*u_wave;\\n  vec2 nC=sc*45.*u_noise;\\n  nC+=aF(sC.zxy,an*.17*sC.yzx-sc.yxy*.35).xy*18.*u_wave;\\n  vec3 tC=vec3(.00041,.00053,.00076)*mT+wB*nC.x+wA*nC.y;\\n  tC=lM(sC,tC);\\n  tC=lM(sC+1.618,tC);\\n  float tb=sin(tC.x*3.14159)*.5+.5;\\n  tb=tb*2.-1.;\\n  float noiseVal=pW(vec3(sc*8.+an,an*.5)).x;\\n  float edgeFactor=smoothstep(0.,.5,dp)*smoothstep(1.,.5,dp);\\n  float lD=dp+(1.-dp)*u_liquid*tb;\\n  lD+=noiseVal*u_distort*.15*edgeFactor;\\n  float rB=clamp(1.-cv,0.,1.);\\n  float fl=ag.x+sl;\\n  fl+=noiseVal*sl*u_distort*edgeFactor;\\n  fl*=mix(1.,1.-dp*.5,u_contour);\\n  fl-=dp*u_contour*.8;\\n  float eI=smoothstep(0.,1.,lD)*smoothstep(1.,0.,lD);\\n  fl-=tb*sl*1.8*eI;\\n  float cA=cv*clamp(pow(sc.y,.12),.25,1.);\\n  fl*=.12+(1.05-lD)*cA;\\n  fl*=smoothstep(1.,.65,lD);\\n  float vA1=smoothstep(.08,.18,sc.y)*smoothstep(.38,.18,sc.y);\\n  float vA2=smoothstep(.08,.18,1.-sc.y)*smoothstep(.38,.18,1.-sc.y);\\n  fl+=vA1*.16+vA2*.025;\\n  fl*=.45+pow(sc.y,2.)*.55;\\n  fl*=u_scale;\\n  fl-=an;\\n  float rO=rB+cv*tb*.025;\\n  float vM1=smoothstep(-.12,.18,sc.y)*smoothstep(.48,.08,sc.y);\\n  float cM1=smoothstep(.35,.55,cv)*smoothstep(.95,.35,cv);\\n  rO+=vM1*cM1*4.5;\\n  rO-=sl;\\n  float bO=rB*1.25;\\n  float vM2=smoothstep(-.02,.35,sc.y)*smoothstep(.75,.08,sc.y);\\n  float cM2=smoothstep(.35,.55,cv)*smoothstep(.75,.35,cv);\\n  bO+=vM2*cM2*.9;\\n  bO-=lD*.18;\\n  rO*=u_refract*u_chroma;\\n  bO*=u_refract*u_chroma;\\n  float sf=u_blur;\\n  float rP=fract(fl+rO);\\n  float rC=mG(hi.r,lo.r,rP,sf+.018+u_refract*cv*.025,cv);\\n  float gP=fract(fl);\\n  float gC=mG(hi.g,lo.g,gP,sf+.008/max(.01,1.-sl),cv);\\n  float bP=fract(fl-bO);\\n  float bC=mG(hi.b,lo.b,bP,sf+.008,cv);\\n  vec3 col=vec3(rC,gC,bC);\\n  col=(col-.5)*u_contrast+.5;\\n  col=clamp(col,0.,1.);\\n  col=mix(col,1.-min(vec3(1.),(1.-col)/max(u_tint,vec3(.001))),length(u_tint-1.)*.5);\\n  col=clamp(col,0.,1.);\\n  oC=vec4(col*vs,vs);\\n}';
    function processImage(img){
      var w=img.naturalWidth||img.width,h=img.naturalHeight||img.height;
      if(w>1000||h>1000||w<500||h<500){var sc=w>h?(w>1000?1000/w:(w<500?500/w:1)):(h>1000?1000/h:(h<500?500/h:1));w=Math.round(w*sc);h=Math.round(h*sc);}
      var c=document.createElement('canvas');c.width=w;c.height=h;var ctx=c.getContext('2d');ctx.drawImage(img,0,0,w,h);
      var id=ctx.getImageData(0,0,w,h),d=id.data,sz=w*h,av=new Float32Array(sz),sm=new Uint8Array(sz),bm=new Uint8Array(sz);
      for(var i=0;i<sz;i++){var ix=i*4,r=d[ix],g=d[ix+1],b=d[ix+2],a=d[ix+3];var bg=(r>250&&g>250&&b>250&&a===255)||a<5;av[i]=bg?0:a/255;sm[i]=av[i]>0.1?1:0;}
      for(var y=0;y<h;y++)for(var x=0;x<w;x++){var ix=y*w+x;if(!sm[ix])continue;if(x===0||x===w-1||y===0||y===h-1||!sm[ix-1]||!sm[ix+1]||!sm[ix-w]||!sm[ix+w])bm[ix]=1;}
      var u=new Float32Array(sz),C=0.01,om=1.85;
      for(var it=0;it<200;it++)for(var y=1;y<h-1;y++)for(var x=1;x<w-1;x++){var ix=y*w+x;if(!sm[ix]||bm[ix])continue;var s=(sm[ix+1]?u[ix+1]:0)+(sm[ix-1]?u[ix-1]:0)+(sm[ix+w]?u[ix+w]:0)+(sm[ix-w]?u[ix-w]:0);u[ix]=om*((C+s)/4)+(1-om)*u[ix];}
      var mx=0;for(var i=0;i<sz;i++)if(u[i]>mx)mx=u[i];if(mx===0)mx=1;
      var od=ctx.createImageData(w,h);for(var i=0;i<sz;i++){var px=i*4,dp=u[i]/mx,gy=Math.round(255*(1-dp*dp));od.data[px]=od.data[px+1]=od.data[px+2]=gy;od.data[px+3]=Math.round(av[i]*255);}
      return od;
    }
    function hexRgb(h){var r=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(h);return r?[parseInt(r[1],16)/255,parseInt(r[2],16)/255,parseInt(r[3],16)/255]:[1,1,1];}
    var cfg={seed:42,scale:4,refraction:0.01,blur:0.015,liquid:0.75,speed:0.3,brightness:2,contrast:0.5,angle:0,fresnel:1,lightColor:'#ffffff',darkColor:'#000000',patternSharpness:1,waveAmplitude:1,noiseScale:0.5,chromaticSpread:2,mouseAnimation:false,distortion:1,contour:0.2,tintColor:'#feb3ff'};
    var logoSvg='<svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700"><g fill="#000000"><polygon points="185,140 350,315 515,140 560,183 393,350 560,517 515,560 350,385 185,560 140,517 307,350 140,183"/></g></svg>';
    var logoDataUrl='data:image/svg+xml;base64,'+btoa(logoSvg);
    var canvas=document.getElementById('metallicCanvas');
    if(!canvas)return;
    var gl=canvas.getContext('webgl2',{antialias:true,alpha:true});
    if(!gl){console.warn('WebGL2 not supported');return;}
    function compile(src,type){var s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))console.error(gl.getShaderInfoLog(s));return s;}
    var vs=compile(vertexShader,gl.VERTEX_SHADER),fs=compile(fragmentShader,gl.FRAGMENT_SHADER);
    var prog=gl.createProgram();gl.attachShader(prog,vs);gl.attachShader(prog,fs);gl.linkProgram(prog);
    if(!gl.getProgramParameter(prog,gl.LINK_STATUS))console.error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    var uniforms={};var uCount=gl.getProgramParameter(prog,gl.ACTIVE_UNIFORMS);
    for(var i=0;i<uCount;i++){var info=gl.getActiveUniform(prog,i);if(info)uniforms[info.name]=gl.getUniformLocation(prog,info.name);}
    var verts=new Float32Array([-1,-1,1,-1,-1,1,1,1]);var buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,verts,gl.STATIC_DRAW);
    var posLoc=gl.getAttribLocation(prog,'a_position');gl.enableVertexAttribArray(posLoc);gl.vertexAttribPointer(posLoc,2,gl.FLOAT,false,0,0);
    var side=1000*(window.devicePixelRatio||1);canvas.width=side;canvas.height=side;gl.viewport(0,0,side,side);
    gl.uniform1f(uniforms.u_seed,cfg.seed);gl.uniform1f(uniforms.u_scale,cfg.scale);gl.uniform1f(uniforms.u_refract,cfg.refraction);gl.uniform1f(uniforms.u_blur,cfg.blur);gl.uniform1f(uniforms.u_liquid,cfg.liquid);gl.uniform1f(uniforms.u_bright,cfg.brightness);gl.uniform1f(uniforms.u_contrast,cfg.contrast);gl.uniform1f(uniforms.u_angle,cfg.angle);gl.uniform1f(uniforms.u_fresnel,cfg.fresnel);
    var lt=hexRgb(cfg.lightColor),dk=hexRgb(cfg.darkColor),tn=hexRgb(cfg.tintColor);
    gl.uniform3f(uniforms.u_lightColor,lt[0],lt[1],lt[2]);gl.uniform3f(uniforms.u_darkColor,dk[0],dk[1],dk[2]);gl.uniform1f(uniforms.u_sharp,cfg.patternSharpness);gl.uniform1f(uniforms.u_wave,cfg.waveAmplitude);gl.uniform1f(uniforms.u_noise,cfg.noiseScale);gl.uniform1f(uniforms.u_chroma,cfg.chromaticSpread);gl.uniform1f(uniforms.u_distort,cfg.distortion);gl.uniform1f(uniforms.u_contour,cfg.contour);gl.uniform3f(uniforms.u_tint,tn[0],tn[1],tn[2]);
    var texture=null;
    function uploadTexture(imgData){if(texture)gl.deleteTexture(texture);texture=gl.createTexture();gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,imgData.width,imgData.height,0,gl.RGBA,gl.UNSIGNED_BYTE,imgData.data);gl.uniform1i(uniforms.u_tex,0);gl.uniform1f(uniforms.u_imgRatio,imgData.width/imgData.height);gl.uniform1f(uniforms.u_ratio,1);}
    var animTime=0,lastTime=performance.now(),textureReady=false;
    function render(time){var delta=time-lastTime;lastTime=time;animTime+=delta*cfg.speed;if(textureReady){gl.uniform1f(uniforms.u_time,animTime);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);}requestAnimationFrame(render);}
    var img=new Image();img.onload=function(){var imgData=processImage(img);uploadTexture(imgData);textureReady=true;};img.src=logoDataUrl;
    requestAnimationFrame(render);
  })();
})();
<\/script>`;

  return wrapPage(D, css + html + script);
}
var buildPerpetualX = buildCyberpunk;
