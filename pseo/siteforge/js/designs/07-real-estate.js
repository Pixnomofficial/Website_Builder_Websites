function buildRealEstate(biz, D, reviews, imgs, portfolioItems, faqItems, typeName, imgBase, imgP, imgPs, navScript) {
    // Hardcoded to match 7.html reference exactly
    const A = '#d0ff00';   // surface-raised (accent)
    const A2 = '#e2fa06';  // hover state
    const BG = '#000000';  // surface-base
    const SF = '#0d0d0d';  // surface-muted
    const SF2 = '#171717'; // surface-strong
    const BD = '#262626';  // border
    const TC = '#ffffff';  // text-inverse
    const MU = '#7a7a7a';  // text-secondary
    const CY = '#00d1ff';
    const PU = '#7f00ff';
    const GR = '#6ce57d';

    const typeNameLower = typeName.toLowerCase();
    const year = new Date().getFullYear();

    // ---- Features (5 cards, no 6th) ----
    const featureTitles = biz.services && biz.services.length >= 5
        ? biz.services.slice(0, 5)
        : ['Cost effective solution', 'Tailor-made design', 'Scalable as you grow', 'Workflow integration', 'Collaborate real-time'];
    const featureDescs = [
        'Get high-quality ' + typeNameLower + ' work at a fraction of the cost.',
        "We've got the expertise to make your vision a reality.",
        "We're ready to meet your evolving needs.",
        'Seamlessly connect all your existing apps.',
        'Seamlessly connect all your existing apps.'
    ];

    const featureVisuals = [
        // 1 - Growth chart
        `<div class="card-visual"><div class="chart">
            <div class="chart-top"><span>Growth</span><span>Today</span></div>
            <div class="chart-bars">
                <div class="bar" style="height:30%"></div>
                <div class="bar" style="height:45%"></div>
                <div class="bar" style="height:35%"></div>
                <div class="bar" style="height:60%"></div>
                <div class="bar" style="height:50%"></div>
                <div class="bar active" style="height:85%"><div class="chart-label">Nov, 11</div></div>
                <div class="bar" style="height:70%"></div>
            </div>
        </div></div>`,
        // 2 - Design preview
        `<div class="card-visual"><div class="design-preview">
            <div class="design-card">
                <div class="row"><span>Latest ${typeNameLower}</span><span class="design-tag">REVIEWED</span></div>
                <div class="design-thumb"></div>
                <div class="row" style="margin-top:8px;margin-bottom:0"><span>Today, 11:50</span><span style="color:${GR}">● NEW</span></div>
            </div>
        </div></div>`,
        // 3 - Scale bars
        `<div class="card-visual"><div class="scale-visual">
            <div class="bar-s" style="height:20%"></div>
            <div class="bar-s" style="height:35%"></div>
            <div class="bar-s" style="height:50%"></div>
            <div class="bar-s" style="height:65%"></div>
            <div class="bar-s" style="height:80%"></div>
            <div class="bar-s" style="height:95%"></div>
        </div></div>`,
        // 4 - Workflow
        `<div class="card-visual"><div class="workflow">
            <div class="app a1">F</div>
            <div class="app a2">N</div>
            <div class="app center">${(biz.name || 'A')[0]}</div>
            <div class="app a3">S</div>
            <div class="app a4">L</div>
        </div></div>`,
        // 5 - Collab
        `<div class="card-visual"><div class="collab">
            ${reviews.slice(0, 3).map((r, i) => {
                const nm = (r.name || r.author || ('U' + i));
                return `<div class="av-init" style="background:${[PU, CY, GR][i % 3]};color:#0d0d0d">${nm[0]}</div>`;
            }).join('')}
            <div class="cursor">${(reviews[0]?.name || 'Eliah').split(' ')[0]}</div>
        </div></div>`
    ];

    const featureCards = [0, 1, 2, 3, 4].map(i => `
        <div class="card f-${i + 1}">
            ${featureVisuals[i]}
            <h3>${featureTitles[i]}</h3>
            <p>${featureDescs[i]}</p>
        </div>`).join('');

    // ---- Chips ----
    const chipItems = biz.services && biz.services.length > 5
        ? biz.services.slice(5)
        : ['Design workshops', 'Workshops', 'Trend reports', 'Asset library', 'Rollover hours', 'Premium designers', 'Multilingual support'];
    const chipsHtml = chipItems.map(c => `<span class="chip">${c}</span>`).join('');

    // ---- Steps ----
    const stepsHtml = `
        <div class="step"><div class="step-num">1</div><h3>Tell us your vision</h3><p>Choose a plan and share your ${typeNameLower} project details with us: we're here to listen.</p></div>
        <div class="step"><div class="step-num">2</div><h3>Receive the magic</h3><p>Sit back and relax: our expert team will turn your vision into reality.</p></div>
        <div class="step"><div class="step-num">3</div><h3>Get ongoing support</h3><p>${biz.emergency === 'yes' ? '24/7 emergency support available for all clients in ' + biz.city + '.' : 'Continuous access to our team, whenever you need us.'}</p></div>`;

    // ---- Testimonials ----
    const testimonialCards = reviews.slice(0, 3).map((r, i) => `
        <div class="testimonial">
            <p>"${r.text || r}"</p>
            <div class="who">
                <div class="av-init sm" style="background:${[A, PU, CY][i % 3]};color:#0d0d0d">${((r.name || r.author || 'M')[0])}</div>
                <div>
                    <div class="name">${r.name || r.author || 'Member'}</div>
                    <div class="role">${r.title || r.role || 'Client'}</div>
                </div>
            </div>
        </div>`).join('');

    // ---- Stats ----
    const statsHtml = `
        <div class="stat"><div class="num">${biz.reviews || '45'}+</div><div class="lbl">Happy customers</div></div>
        <div class="stat"><div class="num">${biz.projects || '5k'}+</div><div class="lbl">Hours spent on craft</div></div>
        <div class="stat"><div class="num">${biz.rating || '4.8'}</div><div class="lbl">Review rate</div></div>`;

    // ---- FAQ ----
    const faqHtml = faqItems.slice(0, 6).map(([q, a], i) => `
        <div class="faq-item${i === 0 ? ' open' : ''}">
            <div class="faq-q" role="button" tabindex="0" aria-expanded="${i === 0 ? 'true' : 'false'}">${q}<span class="plus">+</span></div>
            <div class="faq-a"><p>${a}</p></div>
        </div>`).join('');

    // ---- Customer story ----
    const storyHtml = `
        <div class="story">
            <div class="eyebrow">Customer story</div>
            <h2>"${reviews[0]?.text || 'Working with ' + biz.name + ' transformed the way our team ships work.'}"</h2>
            <div class="who">
                <div class="av-init sm" style="background:${A};color:#0d0d0d">${((reviews[0]?.name || reviews[0]?.author || 'A')[0])}</div>
                <div style="text-align:left">
                    <div class="name">${reviews[0]?.name || reviews[0]?.author || 'Client'}</div>
                    <div class="role">${reviews[0]?.title || reviews[0]?.role || 'Verified customer'}</div>
                </div>
            </div>
            <div><a class="story-link" href="#contact">Read the story →</a></div>
        </div>`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${biz.name} - ${typeName}</title>
<meta name="description" content="${biz.tagline || (typeName + ' in ' + biz.city)}" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
    --color-surface-base:${BG};
    --color-surface-muted:${SF};
    --color-surface-strong:${SF2};
    --color-surface-raised:${A};
    --color-text-inverse:${TC};
    --color-text-tertiary:#cccccc;
    --color-text-secondary:${MU};
    --color-danger:#ff5c5c;
    --font-family-primary:'Inter','Inter Placeholder',sans-serif;
    --font-size-base:18px;
    --font-weight-base:400;
    --line-height-base:25.2px;
    --font-size-xs:8.14px;
    --font-size-sm:10px;
    --font-size-md:11px;
    --font-size-lg:12px;
    --font-size-xl:14px;
    --font-size-2xl:15px;
    --font-size-3xl:16px;
    --font-size-4xl:18px;
    --space-1:6px;
    --space-2:10px;
    --space-3:16px;
    --space-4:25px;
    --space-5:26px;
    --space-6:28px;
    --space-7:32px;
    --space-8:40px;
    --radius-xs:10px;
    --radius-sm:16px;
    --radius-md:24px;
    --radius-lg:40px;
    --radius-xl:50px;
    --shadow-1:rgb(38,38,38) 0px 0px 0px 1px inset;
    --shadow-2:rgba(221,255,0,0.2) 0px 20px 35px 0px;
    --shadow-3:rgba(0,0,0,0.26) 0px 0.636953px 1.14652px -1.125px,rgba(0,0,0,0.24) 0px 1.9316px 3.47689px -2.25px,rgba(0,0,0,0.192) 0px 5.10612px 9.19102px -3.375px,rgba(0,0,0,0.03) 0px 16px 28.8px -4.5px;
    --motion-instant:300ms;
    --ease:cubic-bezier(0.4,0,0.2,1);
    --display-1:80px;
    --display-2:44px;
    --display-3:26px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--color-surface-base);color:var(--color-text-tertiary);font-family:var(--font-family-primary);font-size:var(--font-size-base);font-weight:var(--font-weight-base);line-height:var(--line-height-base);-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3,h4{font-family:var(--font-family-primary);font-weight:500;letter-spacing:-0.03em;color:var(--color-text-inverse);line-height:1.15}
h1{font-size:var(--display-1);letter-spacing:-2.4px;line-height:1.15}
h2{font-size:var(--display-2);letter-spacing:-1.32px;line-height:1.2;font-weight:400}
h3{font-size:var(--display-3);letter-spacing:-0.52px;line-height:1.2;font-weight:400}
p{color:var(--color-text-secondary);font-size:var(--font-size-3xl);line-height:1.5}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}

a:focus-visible,button:focus-visible,.btn:focus-visible,input:focus-visible,[tabindex]:focus-visible{outline:2px solid var(--color-surface-raised);outline-offset:2px;border-radius:var(--radius-xs)}

.container{max-width:1200px;margin:0 auto;padding:0 var(--space-3)}

/* NAV */
.nav-wrap{position:fixed;top:20px;left:0;right:0;z-index:100;display:flex;justify-content:center;padding:0 20px}
.nav{display:flex;align-items:center;gap:var(--space-2);background:rgba(13,13,13,0.75);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:var(--radius-xl);padding:var(--space-2) var(--space-2) var(--space-2) var(--space-4);box-shadow:var(--shadow-1);transition:box-shadow var(--motion-instant) var(--ease)}
.nav-logo{display:flex;align-items:center;gap:var(--space-2);font-weight:600;font-size:var(--font-size-2xl);padding-right:var(--space-3);border-right:1px solid #262626;margin-right:var(--space-2)}
.nav-logo .dot{width:22px;height:22px;background:var(--color-surface-raised);border-radius:var(--radius-xs);display:inline-block}
.nav ul{display:flex;list-style:none;gap:4px}
.nav ul a{padding:var(--space-2) var(--space-3);font-size:var(--font-size-xl);color:#e6e6e6;border-radius:var(--radius-xl);transition:background var(--motion-instant) var(--ease),color var(--motion-instant) var(--ease)}
.nav ul a:hover{background:var(--color-surface-strong);color:var(--color-text-inverse)}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;gap:6px;padding:var(--space-2) var(--space-4);border-radius:var(--radius-sm);font-family:var(--font-family-primary);font-weight:500;font-size:var(--font-size-xl);border:none;cursor:pointer;transition:transform var(--motion-instant) var(--ease),background var(--motion-instant) var(--ease),box-shadow var(--motion-instant) var(--ease),opacity var(--motion-instant) var(--ease)}
.btn-primary{background:var(--color-surface-raised);color:#0d0d0d;box-shadow:var(--shadow-2)}
.btn-primary:hover{background:#e2fa06;transform:translateY(-1px)}
.btn-primary:active{transform:translateY(0);background:#b8db00}
.btn-primary:disabled,.btn-primary[aria-disabled="true"]{opacity:0.45;cursor:not-allowed;box-shadow:none;transform:none}
.btn-ghost{background:transparent;color:#fff;box-shadow:var(--shadow-1)}
.btn-ghost:hover{background:var(--color-surface-strong)}
.btn-ghost:active{background:#0d0d0d}
.btn-ghost:disabled{opacity:0.4;cursor:not-allowed}
.btn-dark{background:var(--color-surface-muted);color:#fff;box-shadow:var(--shadow-1)}
.btn-dark:hover{background:var(--color-surface-strong)}
.btn-pill{border-radius:var(--radius-xl)}

/* HERO */
.hero{padding:180px 0 80px;text-align:center;position:relative}
.badge{display:inline-flex;align-items:center;gap:var(--space-2);padding:6px 14px 6px 6px;border-radius:var(--radius-xl);background:var(--color-surface-muted);box-shadow:var(--shadow-1);font-size:var(--font-size-lg);color:#e6e6e6;margin-bottom:var(--space-7)}
.badge .pill{background:var(--color-surface-raised);color:#0d0d0d;padding:4px 10px;border-radius:var(--radius-xl);font-weight:600;font-size:var(--font-size-md)}
.hero h1{max-width:900px;margin:0 auto var(--space-3)}
.hero p.lead{font-size:var(--font-size-4xl);max-width:560px;margin:0 auto var(--space-8);color:var(--color-text-secondary);line-height:var(--line-height-base)}

/* Email capture */
.hero-form{display:flex;justify-content:center;gap:var(--space-2);flex-wrap:wrap;max-width:560px;margin:0 auto}
.field{flex:1;min-width:240px;background:var(--color-surface-muted);box-shadow:var(--shadow-1);border-radius:var(--radius-sm);padding:var(--space-3) var(--space-4);color:var(--color-text-inverse);font-family:var(--font-family-primary);font-size:var(--font-size-xl);transition:box-shadow var(--motion-instant) var(--ease)}
.field::placeholder{color:var(--color-text-secondary)}
.field:hover{box-shadow:rgb(58,58,58) 0px 0px 0px 1px inset}
.field:focus-visible{outline:2px solid var(--color-surface-raised);outline-offset:2px;box-shadow:var(--shadow-1)}
.field.is-error{box-shadow:rgb(255,92,92) 0px 0px 0px 1px inset}
.field-error-msg{color:var(--color-danger);font-size:var(--font-size-lg);margin-top:var(--space-1);display:none}
.field.is-error+.field-error-msg{display:block}
.hero-cta{display:flex;justify-content:center;gap:var(--space-3);flex-wrap:wrap}

/* AVATARS ROW */
.avatars-row{display:flex;align-items:center;justify-content:center;gap:var(--space-4);margin-top:var(--space-8);flex-wrap:wrap}
.avatars{display:flex;align-items:center}
.av-init{width:44px;height:44px;border-radius:50%;border:2px solid #000;margin-left:-10px;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px}
.av-init:first-child{margin-left:0}
.av-init.sm{width:40px;height:40px;font-size:14px;margin-left:0;border:none}
.avatars-row .text{font-size:var(--font-size-xl);color:var(--color-text-secondary)}
.stars{color:var(--color-surface-raised);letter-spacing:2px;font-size:var(--font-size-xl)}

/* HERO flanking panels */
.hero-flank{position:absolute;top:260px;width:240px;z-index:1}
.hero-flank.left{left:40px}
.hero-flank.right{right:40px;top:200px}
.hero-flank .panel{border-radius:var(--radius-md);box-shadow:var(--shadow-3),var(--shadow-1);overflow:hidden}
.hero-flank .caption{margin-top:var(--space-2);font-size:var(--font-size-xl);color:var(--color-text-secondary)}
.flank-phone{background:linear-gradient(160deg,#171717,#0d0d0d);padding:var(--space-4) var(--space-3);height:340px;display:flex;flex-direction:column;justify-content:space-between}
.flank-phone .greeting{font-size:var(--font-size-2xl);color:var(--color-text-inverse);line-height:1.3}
.flank-phone .send-card{background:linear-gradient(135deg,#7f00ff,#00d1ff);border-radius:var(--radius-sm);height:140px;display:flex;align-items:flex-end;padding:var(--space-3);font-size:var(--font-size-xl);color:#fff;font-weight:500}
.flank-dashboard{background:var(--color-surface-strong);padding:var(--space-4);height:280px}
.flank-dashboard .stat-row{display:flex;justify-content:space-between;margin-bottom:var(--space-3)}
.flank-dashboard .stat-row .lbl{font-size:var(--font-size-md);color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:1px}
.flank-dashboard .stat-row .val{font-size:28px;font-weight:600;color:var(--color-text-inverse);margin-top:4px}
.flank-dashboard .up{color:var(--color-surface-raised);font-size:var(--font-size-md)}
.flank-dashboard .spark{display:flex;align-items:flex-end;gap:4px;height:60px;margin-top:var(--space-3)}
.flank-dashboard .spark div{flex:1;background:rgba(208,255,0,0.25);border-radius:3px 3px 0 0}
.flank-dashboard .spark div:last-child{background:var(--color-surface-raised)}
@media(max-width:1440px){.hero-flank{display:none}}

/* LOGOS marquee */
.logos{padding:60px 0 40px;text-align:center}
.logos .label{font-size:var(--font-size-lg);color:var(--color-text-secondary);text-transform:uppercase;letter-spacing:2px;margin-bottom:var(--space-7)}
.logos-marquee{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.logos-track{display:flex;align-items:center;gap:var(--space-8);width:max-content;opacity:.7;animation:logos-scroll 28s linear infinite}
.logos-marquee:hover .logos-track{animation-play-state:paused}
@keyframes logos-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){.logos-track{animation:none}}
.logos-track span{font-size:22px;font-weight:600;color:#d9d9d9;letter-spacing:-.3px;font-family:var(--font-family-primary);white-space:nowrap}

/* SECTIONS */
section{padding:96px 0}
.section-head{max-width:900px;margin:0 auto var(--space-8);text-align:center}
.eyebrow{display:inline-block;background:var(--color-surface-muted);box-shadow:var(--shadow-1);padding:6px 14px;border-radius:var(--radius-xl);font-size:var(--font-size-lg);letter-spacing:2px;text-transform:uppercase;color:#c9c9c9;margin-bottom:var(--space-3)}

/* FEATURES */
.features{display:grid;grid-template-columns:repeat(6,1fr);gap:var(--space-3)}
.card{background:var(--color-surface-strong);border-radius:var(--radius-md);padding:var(--space-6);overflow:hidden;position:relative;box-shadow:var(--shadow-1);transition:box-shadow var(--motion-instant) var(--ease),transform var(--motion-instant) var(--ease)}
.card:hover{box-shadow:var(--shadow-3);transform:translateY(-2px)}
.card h3{margin-top:var(--space-3);margin-bottom:var(--space-1);font-size:22px}
.card p{font-size:var(--font-size-3xl)}
.card-visual{height:180px;background:var(--color-surface-muted);box-shadow:var(--shadow-1);border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}
.f-1{grid-column:span 3}.f-2{grid-column:span 3}
.f-3{grid-column:span 2}.f-4{grid-column:span 2}.f-5{grid-column:span 2}

.chart{width:100%;height:100%;padding:var(--space-3);display:flex;flex-direction:column;justify-content:space-between}
.chart-top{display:flex;justify-content:space-between;font-size:var(--font-size-lg);color:var(--color-text-secondary)}
.chart-bars{display:flex;gap:var(--space-2);align-items:flex-end;height:80px;margin-top:var(--space-2)}
.bar{flex:1;background:#262626;border-radius:6px;position:relative}
.bar.active{background:var(--color-surface-raised)}
.chart-label{position:absolute;top:-24px;left:50%;transform:translateX(-50%);background:var(--color-surface-raised);color:#0d0d0d;font-size:var(--font-size-md);font-weight:600;padding:2px 8px;border-radius:6px;white-space:nowrap}

.design-preview{width:100%;height:100%;background:linear-gradient(135deg,#1a1a1a,#0f0f0f);display:flex;align-items:center;justify-content:center;position:relative}
.design-card{background:#000;box-shadow:var(--shadow-1);border-radius:var(--radius-sm);padding:var(--space-3);width:80%;box-shadow:rgba(0,0,0,0.4) 0px 20px 40px,var(--shadow-1)}
.design-card .row{display:flex;justify-content:space-between;align-items:center;font-size:var(--font-size-md);color:var(--color-text-secondary);margin-bottom:var(--space-2)}
.design-tag{background:var(--color-surface-raised);color:#0d0d0d;padding:2px 8px;border-radius:6px;font-size:var(--font-size-sm);font-weight:600}
.design-thumb{height:60px;background:linear-gradient(120deg,#7f00ff,#00d1ff);border-radius:8px}

.scale-visual{width:100%;height:100%;padding:var(--space-3);display:flex;align-items:flex-end;gap:6px}
.scale-visual .bar-s{flex:1;background:linear-gradient(180deg,var(--color-surface-raised),rgba(208,255,0,0.1));border-radius:4px 4px 0 0}

.workflow{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center}
.workflow .app{width:52px;height:52px;background:#1a1a1a;box-shadow:var(--shadow-1);border-radius:var(--radius-xs);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;position:absolute;box-shadow:rgba(0,0,0,0.4) 0px 10px 20px,var(--shadow-1)}
.workflow .center{width:64px;height:64px;background:var(--color-surface-raised);color:#0d0d0d;border-radius:var(--radius-xs)}
.workflow .app.a1{transform:translate(-100px,-40px)}
.workflow .app.a2{transform:translate(100px,-40px);background:#7f00ff;color:#fff}
.workflow .app.a3{transform:translate(-100px,40px);background:#00d1ff;color:#0d0d0d}
.workflow .app.a4{transform:translate(100px,40px);background:#6ce57d;color:#0d0d0d}

.collab{width:100%;height:100%;padding:var(--space-3);display:flex;align-items:center;justify-content:center;gap:var(--space-2);position:relative}
.collab .av-init{border:2px solid #000;margin-left:-10px}
.collab .cursor{position:absolute;font-size:var(--font-size-md);background:#7f00ff;color:#fff;padding:3px 8px;border-radius:6px;top:30%;right:20%}

.chips{display:flex;flex-wrap:wrap;gap:var(--space-2);justify-content:center;margin-top:var(--space-7)}
.chip{padding:var(--space-2) var(--space-4);background:var(--color-surface-strong);border-radius:var(--radius-xl);font-size:var(--font-size-xl);color:#e6e6e6}

/* STEPS */
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-4)}
.step{background:var(--color-surface-strong);border-radius:var(--radius-md);padding:var(--space-7);box-shadow:var(--shadow-1)}
.step-num{width:36px;height:36px;background:var(--color-surface-raised);color:#0d0d0d;border-radius:var(--radius-xs);display:flex;align-items:center;justify-content:center;font-weight:600;margin-bottom:var(--space-3)}
.step h3{margin-bottom:var(--space-2);font-size:22px}
.step p{font-size:var(--font-size-3xl)}

/* CUSTOMER STORY */
.story{background:var(--color-surface-strong);border-radius:var(--radius-lg);padding:var(--space-8) 64px;text-align:center;box-shadow:rgba(221,255,0,0.08) 0px 20px 35px 0px,var(--shadow-1)}
.story h2{max-width:820px;margin:0 auto var(--space-8)}
.story .who{display:flex;align-items:center;justify-content:center;gap:var(--space-3)}
.story .who .name{font-weight:500;color:var(--color-text-inverse)}
.story .who .role{color:var(--color-text-secondary);font-size:var(--font-size-xl)}
.story-link{display:inline-flex;align-items:center;gap:6px;margin-top:var(--space-3);color:var(--color-surface-raised);font-weight:500;font-size:var(--font-size-xl)}
.story-link:hover{text-decoration:underline}

/* TESTIMONIALS */
.testimonials{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-4);margin-top:var(--space-8)}
.testimonial{background:var(--color-surface-strong);border-radius:var(--radius-md);padding:var(--space-6)}
.testimonial p{color:#e6e6e6;font-size:var(--font-size-4xl);line-height:1.5;margin-bottom:var(--space-3)}
.testimonial .who{display:flex;align-items:center;gap:var(--space-3)}
.testimonial .who .name{color:#fff;font-weight:500;font-size:var(--font-size-xl)}
.testimonial .who .role{color:var(--color-text-secondary);font-size:var(--font-size-lg)}

/* STATS */
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-4);margin-top:var(--space-8)}
.stat{background:var(--color-surface-strong);border-radius:var(--radius-md);padding:var(--space-8);text-align:center}
.stat .num{font-size:64px;font-weight:500;letter-spacing:-2px;color:var(--color-surface-raised);line-height:1}
.stat .lbl{color:var(--color-text-secondary);margin-top:var(--space-2);font-size:var(--font-size-xl)}

/* FAQ */
.faq{max-width:800px;margin:0 auto}
.faq-item{background:var(--color-surface-strong);border-radius:var(--radius-sm);margin-bottom:var(--space-2);overflow:hidden}
.faq-q{padding:var(--space-4);display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-size:var(--font-size-2xl);color:#fff;font-weight:500;user-select:none}
.faq-q .plus{width:24px;height:24px;border-radius:50%;background:#262626;display:flex;align-items:center;justify-content:center;font-size:var(--font-size-3xl);transition:transform var(--motion-instant) var(--ease),background var(--motion-instant) var(--ease)}
.faq-item.open .plus{transform:rotate(45deg);background:var(--color-surface-raised);color:#0d0d0d}
.faq-a{max-height:0;overflow:hidden;transition:max-height var(--motion-instant) var(--ease);padding:0 var(--space-4)}
.faq-item.open .faq-a{max-height:400px;padding:0 var(--space-4) var(--space-4)}
.faq-a p{color:var(--color-text-secondary);font-size:var(--font-size-3xl);line-height:1.6}

/* CTA */
.cta-block{background:linear-gradient(180deg,#171717 0%,#0d0d0d 100%);border-radius:var(--radius-lg);padding:80px 40px;text-align:center;position:relative;overflow:hidden;box-shadow:rgba(221,255,0,0.15) 0px 20px 60px 0px,var(--shadow-1)}
.cta-block::before{content:'';position:absolute;inset:auto 0 -50% 0;height:60%;background:radial-gradient(ellipse at center,rgba(208,255,0,0.15),transparent 60%);pointer-events:none}
.cta-block h2{max-width:640px;margin:0 auto var(--space-7);position:relative}

/* FOOTER */
footer{padding:60px 0 40px;border-top:1px solid #262626;margin-top:var(--space-8)}
.footer-inner{display:flex;justify-content:space-between;flex-wrap:wrap;gap:var(--space-8)}
.footer-col h4{color:#fff;font-size:var(--font-size-xl);font-weight:600;margin-bottom:var(--space-3)}
.footer-col ul{list-style:none}
.footer-col li{margin-bottom:var(--space-2)}
.footer-col a{color:var(--color-text-secondary);font-size:var(--font-size-xl);transition:color var(--motion-instant) var(--ease)}
.footer-col a:hover{color:var(--color-surface-raised)}
.footer-brand{max-width:280px}
.footer-brand p{margin-top:var(--space-3);font-size:var(--font-size-xl)}
.footer-bottom{margin-top:var(--space-8);padding-top:var(--space-4);border-top:1px solid #262626;display:flex;justify-content:space-between;align-items:center;color:var(--color-text-secondary);font-size:var(--font-size-lg);flex-wrap:wrap;gap:var(--space-2)}

/* Responsive */
@media(max-width:1024px){
    h1{font-size:56px;line-height:1.05;letter-spacing:-1.6px}
    h2{font-size:36px;line-height:1.15;letter-spacing:-1px}
    .features{grid-template-columns:repeat(2,1fr)}
    .f-1,.f-2,.f-3,.f-4,.f-5{grid-column:span 1}
    .steps,.testimonials,.stats{grid-template-columns:1fr}
    .nav ul{display:none}
    .story{padding:40px 24px}
    .cta-block{padding:60px 24px}
}
@media(max-width:640px){
    h1{font-size:42px;line-height:1.05}
    h2{font-size:30px}
    .hero{padding:140px 0 60px}
    section{padding:64px 0}
    .nav-logo{padding-right:var(--space-2);margin-right:0}
    .stat .num{font-size:48px}
    .hero-form{flex-direction:column}
}
@media(prefers-reduced-motion:reduce){*{transition-duration:0.01ms!important;scroll-behavior:auto!important}}
</style>
</head>
<body>

<div class="nav-wrap">
    <nav class="nav">
        <div class="nav-logo"><span class="dot"></span> ${biz.name}</div>
        <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQs</a></li>
        </ul>
        <a class="btn btn-primary btn-pill" href="#cta">Notify me</a>
    </nav>
</div>

<header class="hero">
    <div class="hero-flank left">
        <div class="panel flank-phone">
            <div class="greeting">Good evening,<br>Henry</div>
            <div class="send-card">Send money</div>
        </div>
        <div class="caption">Vlad Muslakov</div>
    </div>
    <div class="hero-flank right">
        <div class="panel flank-dashboard">
            <div class="stat-row"><div><div class="lbl">Total online sales</div><div class="val">$59,410</div></div><div class="up">▲ 18.62%</div></div>
            <div class="stat-row" style="margin-bottom:0"><div><div class="lbl">Total new users</div><div class="val">5.9k</div></div></div>
            <div class="spark"><div style="height:30%"></div><div style="height:45%"></div><div style="height:35%"></div><div style="height:60%"></div><div style="height:50%"></div><div style="height:85%"></div><div style="height:70%"></div></div>
        </div>
        <div class="caption">Nur Praditya</div>
    </div>
    <div class="container">
        <div class="badge"><span class="pill">NEW</span> Introducing ${typeName} · ${biz.services?.[0] || 'Design Sprints'}</div>
        <h1>${biz.tagline ? biz.tagline.replace(/,\s*/g, ',<br/>') : typeName + ',<br/>the efficient way'}</h1>
        <p class="lead">${biz.description || 'Innovative ' + typeNameLower + ' solutions for technology firms and emerging businesses. Arriving shortly.'}</p>
        <form class="hero-form" novalidate>
            <label for="hero-email" class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">Email address</label>
            <input class="field" type="email" id="hero-email" name="email" placeholder="name@email.com" autocomplete="email" required aria-describedby="hero-email-error">
            <button type="submit" class="btn btn-primary btn-pill">Get notified</button>
            <span id="hero-email-error" class="field-error-msg" role="alert">Enter a valid email address.</span>
        </form>
        <div class="avatars-row">
            <div class="avatars">
                ${reviews.slice(0, 4).map((r, i) => `<div class="av-init" style="background:${[A, PU, CY, GR][i % 4]};color:#0d0d0d">${(r.name || r.author || 'U' + i)[0]}</div>`).join('')}
            </div>
            <div class="text">
                <div class="stars">★★★★★</div>
                Already chosen by the leaders
            </div>
        </div>
    </div>
</header>

<section class="logos" style="padding-top:20px;padding-bottom:40px">
    <div class="container">
        <div class="label">TRUSTED BY INNOVATIVE TEAMS</div>
        <div class="logos-marquee">
            <div class="logos-track">
                <span>Shopify</span><span>Volvo</span><span>Mobbin</span><span>Pinterest</span><span>duolingo</span><span>Framer</span>
                <div aria-hidden="true" style="display:contents"><span>Shopify</span><span>Volvo</span><span>Mobbin</span><span>Pinterest</span><span>duolingo</span><span>Framer</span></div>
            </div>
        </div>
    </div>
</section>

<section id="services">
    <div class="container section-head">
        <div class="eyebrow">Introducing ${typeName}</div>
        <h2>We know what's going on. You need top-notch ${typeNameLower} to stand out, but hiring in‑house teams can be costly and time‑consuming. That's when ${biz.name} comes in.</h2>
    </div>
</section>

<section style="padding-top:0">
    <div class="container">
        <div class="section-head">
            <div class="eyebrow">What you'll get</div>
            <h2>We resolve problems associated with ${typeNameLower} procedures.</h2>
        </div>
        <div class="features">${featureCards}</div>
        <div class="chips">${chipsHtml}</div>
    </div>
</section>

<section id="how">
    <div class="container">
        <div class="section-head">
            <div class="eyebrow">How it works</div>
            <h2>Top-notch ${typeNameLower}, delivered at your doorstep.</h2>
        </div>
        <div class="steps">${stepsHtml}</div>
    </div>
</section>

<section>
    <div class="container">
        ${storyHtml}
        <div class="testimonials">${testimonialCards}</div>
        <div class="stats">${statsHtml}</div>
    </div>
</section>

<section id="faq">
    <div class="container">
        <div class="section-head">
            <div class="eyebrow">FAQs</div>
            <h2>We've got the answers</h2>
        </div>
        <div class="faq">${faqHtml}</div>
    </div>
</section>

<section id="cta">
    <div class="container">
        <div class="cta-block">
            <div class="eyebrow" style="position:relative">Get started</div>
            <h2>Elevate the way you source ${typeNameLower}</h2>
            <p style="max-width:520px;margin:0 auto 32px;position:relative;color:#b3b3b3">Get ready to start producing stunning, efficient ${typeNameLower} work without the hassles of hiring. Soon available.</p>
            <a class="btn btn-primary" href="#" style="position:relative">Join the waitlist →</a>
        </div>
    </div>
</section>

<footer>
    <div class="container">
        <div class="footer-inner">
            <div class="footer-brand">
                <div class="nav-logo" style="border:none;padding:0;margin:0;color:#fff"><span class="dot"></span> ${biz.name}</div>
                <p>${biz.tagline || (typeName + ' in ' + biz.city + '. Innovative solutions for technology firms and emerging businesses.')}</p>
            </div>
            <div class="footer-col">
                <h4>Product</h4>
                <ul><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li><li><a href="#">Changelog</a></li><li><a href="#">Roadmap</a></li></ul>
            </div>
            <div class="footer-col">
                <h4>Company</h4>
                <ul><li><a href="#">About</a></li><li><a href="#">Customers</a></li><li><a href="#">Blog</a></li><li><a href="#">Careers</a></li></ul>
            </div>
            <div class="footer-col">
                <h4>Resources</h4>
                <ul><li><a href="#">Help center</a></li><li><a href="#">Community</a></li><li><a href="#">Terms</a></li><li><a href="#">Privacy</a></li></ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div>© ${year} ${biz.name}. All rights reserved.</div>
            <div>Made with Framer</div>
        </div>
    </div>
</footer>

<script>
function toggleFaq(item){
    const wasOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-q').setAttribute('aria-expanded','false')});
    if(!wasOpen){item.classList.add('open');item.querySelector('.faq-q').setAttribute('aria-expanded','true')}
}
document.querySelectorAll('.faq-item').forEach(item=>{
    const trigger=item.querySelector('.faq-q');
    trigger.addEventListener('click',()=>toggleFaq(item));
    trigger.addEventListener('keydown',(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleFaq(item)}});
});
const firstFaq=document.querySelector('.faq-item');
if(firstFaq){firstFaq.classList.add('open');firstFaq.querySelector('.faq-q').setAttribute('aria-expanded','true')}
const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>{if(window.scrollY>20){nav.style.boxShadow='rgba(0,0,0,0.4) 0px 10px 30px, rgb(38,38,38) 0px 0px 0px 1px inset'}else{nav.style.boxShadow='rgb(38,38,38) 0px 0px 0px 1px inset'}});
const heroForm=document.querySelector('.hero-form');
if(heroForm){const emailField=heroForm.querySelector('#hero-email');heroForm.addEventListener('submit',(e)=>{e.preventDefault();const valid=emailField.checkValidity();emailField.classList.toggle('is-error',!valid);emailField.setAttribute('aria-invalid',String(!valid));if(valid){emailField.value='';emailField.placeholder="You're on the list ✓"}});emailField.addEventListener('input',()=>{if(emailField.classList.contains('is-error')&&emailField.checkValidity()){emailField.classList.remove('is-error');emailField.setAttribute('aria-invalid','false')}});}
${navScript || ''}
</script>
</body>
</html>`;
}

window.buildAtomic = buildRealEstate;
if(typeof module!=='undefined'&&module.exports){module.exports=buildRealEstate;}
