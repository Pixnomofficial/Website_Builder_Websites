function buildClassicElegant(biz, D, reviews, imgs, portfolioItems, faqItems, typeName, imgBase, imgP, imgPs, navScript) {
  const A = D.accent || '#0000ee';
  const BG = D.bg || '#f5f5f5';
  const TC = D.text || '#000000';
  const MU = D.muted || '#575757';
  const BD = D.border || '#dfdfdf';
  const SF = D.surface || '#ffffff';
  const DK = D.darkBg || '#222222';
  const heroImg = resolveImageUrl(imgs.hero, imgP);
  const aboutImg = resolveImageUrl(imgs.about, imgP);
  const typeNameLower = typeName.toLowerCase();
  const year = new Date().getFullYear();
  const startYear = year - parseInt(biz.years || 5);

  const serviceIcons = ['▤', '◈', '◇', '◉', '✦', '❖'];
  const serviceDescs = [
    `Lockable, fully furnished spaces for teams that need focus and privacy.`,
    `Flexible seating in our buzzing open areas — grab any desk, any day.`,
    `A prestige business address, mail handling and meeting-room credits.`,
    `Bookable rooms with screens, whiteboards and lightning-fast wifi.`,
    `Access across all locations with credits you can use whenever.`,
    `Host workshops, launches and community nights in our versatile venues.`
  ];

  const serviceCards = biz.services.map((s, i) => `
    <div class="card reveal">
      <div class="ic">${serviceIcons[i % serviceIcons.length]}</div>
      <h3>${s}</h3>
      <p>${serviceDescs[i % serviceDescs.length]}</p>
      <div class="price">From $${19 + i * 20}/month</div>
    </div>`).join('');

  const portfolioTitles = ['The Lounge', 'Studio Suites', 'Collab Hub', 'Private Suites', 'Event Hall', 'Rooftop'];
  const portfolioLocs = ['Downtown · Ground Floor', 'Riverside · Level 3', 'Midtown · Level 2', 'Uptown · Level 5', 'Eastside · Basement', 'Central · Penthouse'];
  const portfolioImgs = [
    'photo-1524758631624-e2822e304c36', 'photo-1600585154340-be6161a56a0c',
    'photo-1521737604893-d14cc237f11d', 'photo-1497215842964-222b430dc094',
    'photo-1540575467063-178a50c2df87', 'photo-1497366811353-6870744d04b2'
  ];
  const workCards = portfolioItems.slice(0, 3).map((p, i) => `
    <div class="work reveal"><img src="${resolveImageUrl(p.img || portfolioImgs[i], imgP)}" alt="${p.title || portfolioTitles[i]}">
      <div class="meta"><h3>${p.title || portfolioTitles[i]}</h3><p>${portfolioLocs[i % portfolioLocs.length]}</p></div>
    </div>`).join('');

  const reviewCards = reviews.slice(0, 3).map(r => `
    <div class="rev reveal">
      <div class="stars">★★★★★</div>
      <blockquote>"${r.text || r}"</blockquote>
      <div class="who">
        <div class="av">${(r.name || r.author || 'A')[0]}</div>
        <div><div class="nm">${r.name || r.author || 'Member'}</div><div class="dt">${r.title || r.role || 'Member'}</div></div>
      </div>
    </div>`).join('');

  const faqHtml = faqItems.slice(0, 6).map(([q, a]) => `
    <div class="faq"><button>${q}<span class="plus">+</span></button>
      <div class="ans"><p>${a}</p></div>
    </div>`).join('');

  return `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${biz.name} — ${typeName}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap" rel="stylesheet">
<style>
:root{--bg:${BG};--surface:${SF};--text:${TC};--muted:${MU};--border:${BD};--accent:${A};--dark:${DK};--r-card:44px;--r-pill:100px;--r-btn:12px;--sh-low:rgba(0,0,0,.26) 0 .63px 1.14px -1.1px,rgba(0,0,0,.25) 0 1.93px 3.47px -2.2px,rgba(0,0,0,.19) 0 5.1px 9.19px -3.3px,rgba(0,0,0,.03) 0 16px 28.8px -4.5px;--sh-deep:rgba(0,0,0,.3) 10px 10px 40px 0;--ease:cubic-bezier(.22,1,.36,1)}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:"DM Sans",sans-serif;font-size:16px;line-height:1.5;-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3,h4{font-weight:500;letter-spacing:-.02em;line-height:1.08}a{color:inherit;text-decoration:none}img{display:block;max-width:100%}
.wrap{max-width:1240px;margin:0 auto;padding:0 24px}::selection{background:var(--accent);color:#fff}
.btn{display:inline-flex;align-items:center;gap:10px;font-weight:500;font-size:15px;padding:15px 26px;border-radius:var(--r-btn);border:1px solid transparent;cursor:pointer;transition:transform .3s var(--ease),background-color .3s var(--ease),color .3s var(--ease),box-shadow .3s var(--ease);will-change:transform}
.btn:hover{transform:translateY(-3px)}.btn-primary{background:var(--accent);color:#fff}.btn-primary:hover{box-shadow:0 12px 30px -8px var(--accent)}
.btn-dark{background:var(--dark);color:#fff}.btn-ghost{background:var(--surface);color:var(--text);border-color:var(--border)}.btn-ghost:hover{border-color:var(--text)}
.btn .arw{transition:transform .3s var(--ease)}.btn:hover .arw{transform:translate(4px,-4px)}
.eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:500;color:var(--accent);background:var(--surface);border:1px solid var(--border);padding:8px 16px;border-radius:var(--r-pill)}
.eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--accent);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}
header.nav{position:fixed;inset:0 0 auto 0;z-index:100;padding:16px 0;transition:padding .4s var(--ease)}
header.nav.scrolled{padding:8px 0}
.nav-inner{display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.72);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid var(--border);border-radius:var(--r-pill);padding:12px 12px 12px 26px;box-shadow:var(--sh-low)}
.logo{display:flex;align-items:center;gap:10px;font-size:19px;font-weight:700;letter-spacing:-.03em}
.logo .mark{width:30px;height:30px;border-radius:9px;background:var(--accent);display:grid;place-items:center;color:#fff;font-size:15px;transform:rotate(-6deg);transition:transform .4s var(--ease)}
.logo:hover .mark{transform:rotate(6deg) scale(1.08)}
.nav-links{display:flex;gap:6px}.nav-links a{font-size:14.5px;font-weight:500;color:var(--muted);padding:9px 16px;border-radius:var(--r-pill);transition:color .25s,background-color .25s}.nav-links a:hover{color:var(--text);background:var(--bg)}
.nav-r{display:flex;align-items:center;gap:10px}
.ham{display:none;width:44px;height:44px;border-radius:var(--r-btn);border:1px solid var(--border);background:var(--surface);cursor:pointer;place-items:center}
.hero{padding:150px 0 70px;position:relative}.hero .badge-row{display:flex;justify-content:center;margin-bottom:26px}
.h-trust{display:inline-flex;align-items:center;gap:10px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-pill);padding:6px 18px 6px 6px;font-size:13px;color:var(--muted)}
.h-trust .avs{display:flex}.h-trust .avs span{width:26px;height:26px;border-radius:50%;border:2px solid var(--surface);margin-left:-8px;background:linear-gradient(135deg,var(--accent),#5b5bff)}.h-trust .avs span:first-child{margin-left:0}
.hero h1{font-size:clamp(40px,7vw,78px);text-align:center;max-width:14ch;margin:0 auto}.hero h1 .ln{display:block;overflow:hidden}.hero h1 .ln>span{display:block;transform:translateY(110%);animation:rise 1s var(--ease) forwards}
.hero h1 .ln:nth-child(1)>span{animation-delay:.15s}.hero h1 .ln:nth-child(2)>span{animation-delay:.3s}.hero h1 .ln:nth-child(3)>span{animation-delay:.45s}
.hero h1 em{font-style:normal;color:var(--accent)}@keyframes rise{to{transform:translateY(0)}}
.hero p.sub{max-width:56ch;margin:26px auto 0;text-align:center;color:var(--muted);font-size:18px;opacity:0;animation:fade .8s var(--ease) .7s forwards}
.hero .cta{display:flex;gap:14px;justify-content:center;margin-top:34px;flex-wrap:wrap;opacity:0;animation:fade .8s var(--ease) .85s forwards}
@keyframes fade{to{opacity:1}}
.hero-visual{margin-top:64px;position:relative;border-radius:var(--r-card);overflow:hidden;box-shadow:var(--sh-deep);opacity:0;animation:fade 1s var(--ease) 1s forwards}
.hero-visual img{width:100%;height:clamp(280px,52vh,540px);object-fit:cover}
.hero-visual .float{position:absolute;background:rgba(255,255,255,.9);backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:20px;padding:16px 20px;box-shadow:var(--sh-low)}
.hero-visual .f1{left:24px;bottom:24px}.hero-visual .f2{right:24px;top:24px}
.float .big{font-size:26px;font-weight:700;letter-spacing:-.03em}.float .sm{font-size:12px;color:var(--muted)}
.marquee{border-top:1px solid var(--border);border-bottom:1px solid var(--border);margin-top:70px;padding:26px 0;overflow:hidden;white-space:nowrap;background:var(--surface)}
.marquee .track{display:inline-flex;gap:56px;animation:scroll 26s linear infinite}
.marquee span{font-size:26px;font-weight:500;letter-spacing:-.02em;color:var(--text);display:inline-flex;align-items:center;gap:56px}
.marquee span::after{content:"✦";color:var(--accent);font-size:18px}
@keyframes scroll{to{transform:translateX(-50%)}}
section{padding:96px 0}.sec-head{max-width:640px;margin-bottom:56px}.sec-head.center{margin-left:auto;margin-right:auto;text-align:center}
.sec-head h2{font-size:clamp(30px,4.4vw,46px);margin-top:18px}.sec-head p{color:var(--muted);font-size:18px;margin-top:16px}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.stat{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-card);padding:36px 30px}
.stat .n{font-size:44px;font-weight:700;letter-spacing:-.04em}.stat .n .u{color:var(--accent)}.stat .l{color:var(--muted);margin-top:6px;font-size:15px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-card);padding:34px;transition:transform .4s var(--ease),box-shadow .4s var(--ease),border-color .4s var(--ease)}
.card:hover{transform:translateY(-6px);box-shadow:var(--sh-low);border-color:transparent}
.card .ic{width:56px;height:56px;border-radius:16px;background:var(--bg);display:grid;place-items:center;color:var(--accent);margin-bottom:22px;transition:background-color .4s var(--ease),color .4s var(--ease)}
.card:hover .ic{background:var(--accent);color:#fff}.card h3{font-size:22px;margin-bottom:10px}.card p{color:var(--muted);font-size:15px}
.card .price{margin-top:20px;font-size:15px;font-weight:500;color:var(--accent)}
.works{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.work{position:relative;border-radius:var(--r-card);overflow:hidden;aspect-ratio:4/5}
.work img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}.work:hover img{transform:scale(1.06)}
.work .meta{position:absolute;inset:auto 16px 16px 16px;background:rgba(255,255,255,.9);backdrop-filter:blur(10px);border-radius:20px;padding:16px 20px;transform:translateY(8px);opacity:0;transition:all .4s var(--ease)}
.work:hover .meta{transform:translateY(0);opacity:1}.work .meta h3{font-size:18px}.work .meta p{font-size:13px;color:var(--muted)}
.about{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}.about .media{border-radius:var(--r-card);overflow:hidden;box-shadow:var(--sh-low)}
.about .media img{width:100%;height:520px;object-fit:cover}.chapters{margin-top:34px;display:flex;flex-direction:column;gap:2px}
.chap{border-top:1px solid var(--border);padding:22px 0;display:flex;gap:20px}.chap .no{font-size:13px;color:var(--accent);font-weight:500;padding-top:4px}
.chap h3{font-size:21px;margin-bottom:6px}.chap p{color:var(--muted);font-size:15px}
.revs{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.rev{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-card);padding:32px;display:flex;flex-direction:column}
.rev .stars{color:var(--accent);letter-spacing:3px;margin-bottom:16px}.rev blockquote{font-size:17px;line-height:1.5;flex:1}
.rev .who{display:flex;align-items:center;gap:12px;margin-top:24px}.rev .who .av{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent),#5b5bff);display:grid;place-items:center;color:#fff;font-weight:700}
.rev .who .nm{font-weight:500;font-size:15px}.rev .who .dt{font-size:13px;color:var(--muted)}
.prices{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;max-width:900px;margin:0 auto}
.plan{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-card);padding:40px;position:relative}
.plan.pop{background:var(--dark);color:#fff;border-color:var(--dark)}.plan.pop .muted,.plan.pop li{color:rgba(255,255,255,.72)}
.plan .tag{position:absolute;top:24px;right:24px;font-size:12px;background:var(--accent);color:#fff;padding:6px 12px;border-radius:var(--r-pill)}
.plan h3{font-size:22px}.plan .amt{font-size:46px;font-weight:700;letter-spacing:-.04em;margin:16px 0}.plan .amt span{font-size:16px;font-weight:400;color:var(--muted)}
.plan.pop .amt span{color:rgba(255,255,255,.6)}.plan ul{list-style:none;margin:22px 0 28px;display:flex;flex-direction:column;gap:12px}
.plan li{font-size:15px;color:var(--muted);display:flex;gap:10px}.plan li::before{content:"✓";color:var(--accent);font-weight:700}.plan .btn{width:100%;justify-content:center}
.faqs{max-width:820px;margin:0 auto}.faq{border-bottom:1px solid var(--border)}
.faq button{width:100%;background:none;border:none;cursor:pointer;text-align:left;padding:26px 0;display:flex;justify-content:space-between;align-items:center;gap:20px;font-family:inherit;font-size:19px;font-weight:500;color:var(--text)}
.faq .plus{flex-shrink:0;width:30px;height:30px;border-radius:50%;border:1px solid var(--border);display:grid;place-items:center;transition:transform .35s var(--ease),background-color .35s,color .35s}
.faq.open .plus{transform:rotate(45deg);background:var(--accent);color:#fff;border-color:var(--accent)}
.faq .ans{max-height:0;overflow:hidden;transition:max-height .4s var(--ease)}.faq .ans p{color:var(--muted);padding-bottom:26px;font-size:16px}
.cta-band{background:var(--dark);border-radius:var(--r-card);padding:80px 48px;text-align:center;color:#fff;position:relative;overflow:hidden}
.cta-band::before{content:"";position:absolute;width:420px;height:420px;background:var(--accent);border-radius:50%;filter:blur(120px);opacity:.4;top:-140px;right:-80px}
.cta-band h2{font-size:clamp(30px,5vw,52px);position:relative;max-width:16ch;margin:0 auto 30px}.cta-band .btn{position:relative}
.contact{display:grid;grid-template-columns:.9fr 1.1fr;gap:40px}.cinfo{display:flex;flex-direction:column;gap:14px}
.crow{background:var(--surface);border:1px solid var(--border);border-radius:22px;padding:20px 24px;display:flex;gap:16px;align-items:center}
.crow .ic{width:44px;height:44px;border-radius:12px;background:var(--bg);display:grid;place-items:center;color:var(--accent)}.crow .l{font-size:13px;color:var(--muted)}.crow .v{font-weight:500}
.cform{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-card);padding:38px}.cform h3{font-size:24px;margin-bottom:22px}
.field{margin-bottom:16px}.field input,.field select,.field textarea{width:100%;font-family:inherit;font-size:15px;padding:14px 18px;border:1px solid var(--border);border-radius:var(--r-btn);background:var(--bg);color:var(--text);transition:border-color .25s,box-shadow .25s}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(0,0,238,.12)}
.cform .ok{display:none;background:var(--accent);color:#fff;padding:14px;border-radius:var(--r-btn);text-align:center;font-size:14px;margin-top:12px}
footer{background:var(--dark);color:#fff;border-radius:var(--r-card) var(--r-card) 0 0;margin-top:96px;padding:70px 0 30px}
.foot-g{display:grid;grid-template-columns:2fr 1fr 1fr 1.4fr;gap:40px}footer h4{font-size:14px;color:rgba(255,255,255,.5);margin-bottom:18px;font-weight:500}
footer .fcol a,footer .fcol p{display:block;color:rgba(255,255,255,.8);font-size:15px;margin-bottom:12px;transition:color .25s}footer .fcol a:hover{color:#fff}
footer .flogo{font-size:22px;font-weight:700;letter-spacing:-.03em;margin-bottom:16px;display:flex;align-items:center;gap:10px}
footer .flogo .mark{width:30px;height:30px;border-radius:9px;background:var(--accent);display:grid;place-items:center;font-size:15px}
.foot-bottom{border-top:1px solid rgba(255,255,255,.12);margin-top:48px;padding-top:24px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:13px;color:rgba(255,255,255,.5)}
.foot-bottom .lg{display:flex;gap:20px}
.reveal{opacity:0;transform:translateY(34px);transition:opacity .8s var(--ease),transform .8s var(--ease)}.reveal.in{opacity:1;transform:none}
.mob{position:fixed;inset:0;z-index:200;background:var(--bg);padding:80px 24px 24px;transform:translateY(-100%);transition:transform .5s var(--ease);display:flex;flex-direction:column;gap:6px}
.mob.open{transform:none}.mob a{font-size:26px;font-weight:500;padding:14px 0;border-bottom:1px solid var(--border)}
.mob .close{position:absolute;top:22px;right:24px;width:44px;height:44px;border:1px solid var(--border);border-radius:12px;background:var(--surface);display:grid;place-items:center;cursor:pointer}
@media(max-width:1024px){.grid,.works,.revs{grid-template-columns:repeat(2,1fr)}.stats{grid-template-columns:repeat(2,1fr)}.about,.contact{grid-template-columns:1fr}.about .media img{height:380px}}
@media(max-width:640px){.wrap{padding:0 16px}.nav-links,.nav-r .btn{display:none}.ham{display:grid}.grid,.works,.revs,.prices,.stats,.foot-g{grid-template-columns:1fr}section{padding:64px 0}.hero{padding:120px 0 40px}.cta-band{padding:56px 24px}.marquee span{font-size:20px}}
</style></head><body>
<header class="nav" id="nav"><div class="wrap"><div class="nav-inner">
<a href="#" class="logo"><span class="mark">${biz.name.charAt(0)}</span>${biz.name}</a>
<nav class="nav-links"><a href="#services">Services</a><a href="#works">Portfolio</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a></nav>
<div class="nav-r"><a href="#contact" class="btn btn-primary">Contact Us <span class="arw">↗</span></a><button class="ham" id="ham" aria-label="Menu">☰</button></div>
</div></div></header>
<div class="mob" id="mob"><button class="close" id="mclose">✕</button>
<a href="#services">Services</a><a href="#works">Portfolio</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></div>
<section class="hero"><div class="wrap">
<div class="badge-row"><div class="h-trust"><span class="avs"><span></span><span></span><span></span></span> Trusted by ${biz.reviews}+ clients</div></div>
<h1><span class="ln"><span>${biz.name}</span></span><span class="ln"><span>${typeName} <em>${biz.city}</em></span></span></h1>
<p class="sub">${biz.tagline}</p>
<div class="cta"><a href="#contact" class="btn btn-primary">Get a Quote <span class="arw">↗</span></a><a href="#services" class="btn btn-ghost">Our Services</a></div>
<div class="hero-visual"><img src="${heroImg}" alt="${typeName}"><div class="float f1"><div class="big">${biz.rating}★</div><div class="sm">Google Rating</div></div><div class="float f2"><div class="big">${biz.years}+</div><div class="sm">Years Experience</div></div></div>
</div>
<div class="marquee"><div class="track">${biz.services.map(s => '<span>' + s + '</span>').join('')}${biz.services.map(s => '<span>' + s + '</span>').join('')}</div></div>
</section>
<section style="padding-top:0"><div class="wrap"><div class="stats">
<div class="stat reveal"><div class="n">${biz.rating}<span class="u">★</span></div><div class="l">Google Rating</div></div>
<div class="stat reveal"><div class="n">${biz.reviews}<span class="u">+</span></div><div class="l">Happy Clients</div></div>
<div class="stat reveal"><div class="n">${biz.years}<span class="u">+</span></div><div class="l">Years Experience</div></div>
<div class="stat reveal"><div class="n">${biz.projects || 50}<span class="u">+</span></div><div class="l">Projects Done</div></div>
</div></div></section>
<section id="services"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow"><span class="dot"></span>Services</span><h2>What We Do</h2><p>Professional ${typeNameLower} solutions for homes &amp; businesses in ${biz.city}</p></div>
<div class="grid">${serviceCards}</div>
</div></section>
<section id="works" style="background:var(--surface)"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow"><span class="dot"></span>Portfolio</span><h2>Recent Projects</h2><p>${biz.projects || 50}+ completed projects in ${biz.city}</p></div>
<div class="works">${workCards}</div>
</div></section>
<section id="about"><div class="wrap"><div class="about">
<div class="media reveal"><img src="${aboutImg}" alt="About ${biz.name}"></div>
<div class="reveal"><span class="eyebrow"><span class="dot"></span>About ${biz.name}</span>
<h2 style="font-size:clamp(28px,4vw,42px);margin-top:18px">Trusted ${typeName} Specialists Since ${startYear}</h2>
<div class="chapters">
<div class="chap"><div class="no">01</div><div><h3>Expert Team</h3><p>Certified professionals with years of hands-on experience in ${biz.city}.</p></div></div>
<div class="chap"><div class="no">02</div><div><h3>Quick Response</h3><p>${biz.emergency === 'yes' ? 'Emergency response within 60 minutes. Serving ' + biz.city + ' 24/7.' : 'Bookings confirmed within 2 hours. Emergency calls in under 60 minutes.'}</p></div></div>
<div class="chap"><div class="no">03</div><div><h3>Honest Pricing</h3><p>Transparent quotes. No surprise charges. Competitive rates.</p></div></div>
</div></div>
</div></div></section>
<section id="reviews" style="background:var(--surface)"><div class="wrap">
<div class="sec-head center reveal"><span class="eyebrow"><span class="dot"></span>Reviews</span><h2>Client Testimonials</h2><p>${biz.rating}★ average · ${biz.reviews}+ reviews</p></div>
<div class="revs">${reviewCards}</div>
</div></section>
<section id="pricing"><div class="wrap">
<div class="sec-head center reveal"><span class="eyebrow"><span class="dot"></span>Pricing</span><h2>Transparent Pricing</h2><p>Choose the plan that fits your needs.</p></div>
<div class="prices">
<div class="plan reveal"><h3>Standard</h3><div class="amt">$${199}<span>/month</span></div><p class="muted" style="color:var(--muted);font-size:15px">Perfect for individuals and small teams.</p>
<ul><li>Core service access</li><li>Standard support</li><li>Monthly reporting</li><li>${biz.city} coverage</li></ul><a href="#contact" class="btn btn-ghost">Get Started</a></div>
<div class="plan pop reveal"><span class="tag">Most Popular</span><h3>Premium</h3><div class="amt">$${399}<span>/month</span></div><p class="muted">Complete solution for growing businesses.</p>
<ul><li>All standard features</li><li>Priority support</li><li>${biz.emergency === 'yes' ? '24/7 emergency service' : 'Dedicated account manager'}</li><li>Advanced reporting</li><li>Team access</li></ul><a href="#contact" class="btn btn-primary">Get Started <span class="arw">↗</span></a></div>
</div></div></section>
<section id="faq" style="background:var(--surface)"><div class="wrap">
<div class="sec-head center reveal"><span class="eyebrow"><span class="dot"></span>FAQ</span><h2>Frequently Asked Questions</h2></div>
<div class="faqs">${faqHtml}</div>
</div></section>
<section><div class="wrap"><div class="cta-band reveal">
<h2>Ready to Get Started?</h2><a href="#contact" class="btn btn-primary">Contact Us <span class="arw">↗</span></a>
</div></div></section>
<section id="contact" style="padding-top:0"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow"><span class="dot"></span>Contact</span><h2>Get in Touch</h2><p>We respond within 30 minutes during business hours.</p></div>
<div class="contact"><div class="cinfo reveal">
<div class="crow"><div class="ic">☏</div><div><div class="l">Phone</div><div class="v">${biz.phone}</div></div></div>
<div class="crow"><div class="ic">✉</div><div><div class="l">Email</div><div class="v">${biz.email}</div></div></div>
<div class="crow"><div class="ic">⌖</div><div><div class="l">Address</div><div class="v">${biz.address || biz.city}</div></div></div>
<div class="crow"><div class="ic">◔</div><div><div class="l">Hours</div><div class="v">${biz.hours}</div></div></div>
${biz.emergency === 'yes' ? '<div class="crow"><div class="ic">🚨</div><div><div class="l">Emergency</div><div class="v">24/7 Available</div></div></div>' : ''}
</div>
<form class="cform reveal" id="cform"><h3>Request a Callback</h3>
<div class="field"><input required placeholder="Your name"></div>
<div class="field"><input required placeholder="Phone number"></div>
<div class="field"><input type="email" placeholder="Email"></div>
<div class="field"><select>${biz.services.map(s => '<option>' + s + '</option>').join('')}</select></div>
<div class="field"><textarea rows="3" placeholder="Message"></textarea></div>
<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center">Send Message</button>
<div class="ok" id="ok">✓ Thanks! We'll get back to you shortly.</div>
</form></div></div></section>
<footer><div class="wrap"><div class="foot-g">
<div class="fcol"><div class="flogo"><span class="mark">${biz.name.charAt(0)}</span>${biz.name}</div><p style="max-width:32ch">Your trusted ${typeNameLower} partner in ${biz.city}. Professional, reliable, affordable.</p></div>
<div class="fcol"><h4>Services</h4>${biz.services.slice(0, 4).map(s => '<a href="#services">' + s + '</a>').join('')}</div>
<div class="fcol"><h4>Company</h4><a href="#about">About</a><a href="#works">Portfolio</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a></div>
<div class="fcol"><h4>Contact</h4><a href="tel:${biz.phone.replace(/[^0-9]/g, '')}">${biz.phone}</a><a href="mailto:${biz.email}">${biz.email}</a><p>${biz.address || biz.city}</p></div>
</div><div class="foot-bottom"><span>© ${year} ${biz.name}. All rights reserved.</span><span class="lg"><a href="#">Privacy</a><a href="#">Terms</a></span></div></div></footer>
<script>
const nav=document.getElementById('nav');addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20));
const mob=document.getElementById('mob');document.getElementById('ham').onclick=()=>mob.classList.add('open');
document.getElementById('mclose').onclick=()=>mob.classList.remove('open');mob.querySelectorAll('a').forEach(a=>a.onclick=()=>mob.classList.remove('open'));
document.querySelectorAll('.faq button').forEach(b=>b.addEventListener('click',()=>{const f=b.parentElement;const open=f.classList.contains('open');f.classList.toggle('open');const ans=f.querySelector('.ans');ans.style.maxHeight=f.classList.contains('open')?ans.scrollHeight+'px':0;}));
document.getElementById('cform').addEventListener('submit',e=>{e.preventDefault();document.getElementById('ok').style.display='block';e.target.reset();});
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%3*.08)+'s';io.observe(el);});
const hv=document.querySelector('.hero-visual');addEventListener('scroll',()=>{if(hv&&scrollY<800)hv.style.transform='translateY('+scrollY*0.06+'px)';});
</script></body></html>`;
}