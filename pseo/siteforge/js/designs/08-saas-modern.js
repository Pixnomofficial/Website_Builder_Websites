function buildSaasModern(biz, D, reviews, imgs, portfolioItems, faqItems, typeName, imgBase, imgP, imgPs) {
  const accent = biz.accent || '#0073ff';
  const phone = biz.phone || '';
  const email = biz.email || '';
  const siteName = biz.name || 'Business';
  const typeNameLower = typeName.toLowerCase();
  const year = new Date().getFullYear();

  const heroText = D.hero || `Premium ${typeNameLower} services`;
  const heroSub = D.subhero || `Professional ${typeNameLower} solutions you can trust. ${biz.tagline || 'Quality work, transparent pricing, guaranteed results.'}`;
  const aboutText = D.about || `Trusted ${typeNameLower} experts serving ${biz.city || 'your area'} with certified professionals and proven results.`;
  const ctaText = D.cta || `Ready to get started with ${typeNameLower}?`;
  const ctaBtn = D.ctaBtn || 'Get a free quote';

  const features = D.features || (biz.services && biz.services.length >= 4
    ? biz.services.slice(0, 6).map((s, i) => ({
        title: s,
        desc: `Professional ${s.toLowerCase()} services with certified experts and guaranteed quality.`
      }))
    : [
        { title: 'Licensed & insured', desc: `All our ${typeNameLower} professionals are fully certified and carry valid insurance.` },
        { title: 'Transparent pricing', desc: 'No hidden fees. Get upfront quotes before any work begins.' },
        { title: 'Fast response', desc: `Quick scheduling across ${biz.city || 'your area'}. Emergency service available.` },
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
        tag: typeName,
        title: s,
        desc: `Professional ${s.toLowerCase()} with certified experts, guaranteed quality, and transparent pricing.`,
        chips: ['Certified experts', 'Guaranteed quality'],
        img: svcImgs[i % svcImgs.length]
      }))
    : [
        { tag: typeName, title: `${typeName} installation`, desc: `Expert ${typeNameLower} installation services with precision and care.`, chips: ['Professional setup', 'Code compliant'], img: svcImgs[0] },
        { tag: typeName, title: `${typeName} repair`, desc: `Fast, reliable ${typeNameLower} repair and maintenance services.`, chips: ['Same-day service', 'All brands'], img: svcImgs[1] },
        { tag: typeName, title: `${typeName} inspection`, desc: `Thorough ${typeNameLower} inspections and assessments.`, chips: ['Detailed report', 'Expert advice'], img: svcImgs[2] },
        { tag: typeName, title: `${typeName} maintenance`, desc: `Preventive maintenance to keep your systems running.`, chips: ['Annual plans', 'Priority support'], img: svcImgs[3] }
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
    { name: 'Satisfied Client', date: '1 week ago', text: `Excellent ${typeNameLower} service. Professional, on time, and great quality work.` },
    { name: 'Happy Homeowner', date: '2 weeks ago', text: `Very impressed with the quality and transparency. Highly recommend!` },
    { name: 'Business Owner', date: '1 month ago', text: `Reliable, professional, and fair pricing. Will use again for sure.` }
  ];

  const faqs = (faqItems && faqItems.length ? faqItems.map(f => Array.isArray(f) ? { q: f[0], a: f[1] } : f) : D.faqs) || [
    { q: `How quickly can you respond for ${typeNameLower} service?`, a: `For standard bookings in ${biz.city || 'your area'}, we confirm within 2 hours. ${biz.emergency === 'yes' ? 'For genuine emergencies, we are available 24/7 including holidays.' : ''}` },
    { q: 'Do you provide a service guarantee?', a: `Absolutely. All our ${typeNameLower} services come with a 30-day workmanship guarantee. If you're not satisfied, we return and fix it at no cost.` },
    { q: 'Are your professionals certified?', a: `Yes, all our ${typeNameLower} professionals are fully certified, background-verified, and carry valid licenses.` },
    { q: `What areas do you serve?`, a: `We serve all major areas across ${biz.city || 'your region'} and surrounding areas. Contact us to confirm coverage.` },
    { q: 'How is pricing determined?', a: 'We provide transparent, upfront quotes after a brief assessment. No hidden charges.' },
    { q: 'Do you offer emergency service?', a: biz.emergency === 'yes' ? 'Yes! We offer 24/7 emergency service. Call us anytime for urgent needs.' : 'We offer flexible scheduling and priority service for urgent needs.' }
  ];

  const navLinks = D.nav || ['Services', 'Process', 'Pricing', 'FAQ'];

  const brands = D.brands || [siteName, `${typeName} Pro`, 'Certified Experts', 'Trusted Local', `${biz.city || 'Your'} ${typeName}`, 'Quality First'];

  const caseStudies = D.cases || [
    { cat: `${typeName} project`, title: `${biz.city || 'Local'} ${typeName}`, desc: `A complete ${typeNameLower} project delivered on time and within budget.`, metrics: [{ v: '100%', k: 'Satisfaction' }, { v: '0', k: 'Issues' }, { v: biz.rating || '4.9', k: 'Rating' }] },
    { cat: `${typeName} maintenance`, title: `Annual ${typeName} plan`, desc: `Ongoing maintenance keeping systems optimal year-round.`, metrics: [{ v: '0', k: 'Downtime' }, { v: '30%', k: 'Cost savings' }, { v: '24/7', k: 'Support' }] }
  ];

  const checkSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  const starSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8ab7ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  const crossSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7590" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  const plusSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';

  const iconSvgs = [
    '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    '<path d="M20 6L9 17l-5-5"/>',
    '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>',
    '<path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/>',
    '<path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>'
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>${siteName} -- ${typeName}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
<style>
:root{--bg:#010513;--bg-2:#030b26;--primary:${accent};--secondary:#0a63f4;--border:rgba(235,243,254,0.08);--border-strong:rgba(235,243,254,0.14);--text:#ffffff;--text-2:#a9b3c9;--text-3:#6b7590;--shadow-deep:rgba(116,176,253,0.12) 0 0 32px 0 inset,rgba(212,232,255,0.08) 0 3px 12px 0 inset,rgba(212,232,255,0.12) 0 0.5px 0.5px 0 inset;--shadow-low:rgba(6,128,250,0.12) 0 2px 4px 0 inset;--shadow-glow:rgba(0,115,255,0.06) 0 3.6px 3.9px 0,rgba(0,115,255,0.08) 0 6px 8px 0,rgba(0,115,255,0.16) 0 8px 20px 0,rgba(0,115,255,0.30) 0 4px 40px 0}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:"Inter","Inter Display",system-ui,sans-serif;font-size:16px;line-height:1.55;overflow-x:hidden;-webkit-font-smoothing:antialiased;min-height:100vh}
h1,h2,h3,h4,h5,h6{font-family:"Geist","Inter",sans-serif;font-weight:500;letter-spacing:-0.03em;line-height:1.08;color:var(--text)}
h1{font-size:clamp(40px,6vw,72px);letter-spacing:-2.5px}
h2{font-size:clamp(32px,4.4vw,56px);letter-spacing:-2px}
h3{font-size:clamp(24px,2.4vw,32px)}
h4{font-size:clamp(20px,1.8vw,26px)}
p{color:var(--text-2);font-size:16px}
a{color:inherit;text-decoration:none}
img,svg{display:block;max-width:100%}
body::before{content:"";position:fixed;inset:-20%;background:radial-gradient(circle at 20% 10%,rgba(0,115,255,0.20),transparent 45%),radial-gradient(circle at 80% 30%,rgba(10,99,244,0.15),transparent 50%),radial-gradient(circle at 50% 90%,rgba(0,115,255,0.10),transparent 55%);z-index:-2;pointer-events:none;animation:ambient 22s ease-in-out infinite alternate}
@keyframes ambient{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(-2%,2%,0) scale(1.08)}}
body::after{content:"";position:fixed;inset:0;background-image:linear-gradient(rgba(235,243,254,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(235,243,254,0.035) 1px,transparent 1px);background-size:56px 56px;mask-image:radial-gradient(ellipse at center,black 30%,transparent 75%);-webkit-mask-image:radial-gradient(ellipse at center,black 30%,transparent 75%);z-index:-1;pointer-events:none}
.container{max-width:1240px;margin:0 auto;padding:0 28px}
.section{padding:120px 0;position:relative}
.eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:100px;background:rgba(0,115,255,0.08);border:1px solid rgba(0,115,255,0.25);font-size:13px;color:#8ab7ff;letter-spacing:0.02em;box-shadow:var(--shadow-low)}
.eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--primary);box-shadow:0 0 12px var(--primary)}
.section-head{text-align:center;max-width:820px;margin:0 auto 72px}
.section-head h2{margin:20px 0}
.section-head p{color:var(--text-2);font-size:17px}
.nav{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:50;display:flex;align-items:center;gap:20px;padding:10px 12px 10px 24px;background:rgba(3,11,38,0.6);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid var(--border-strong);border-radius:100px;box-shadow:var(--shadow-deep);transition:box-shadow .3s ease;animation:navIn .8s cubic-bezier(.2,.9,.2,1) both;max-width:calc(100vw - 40px);overflow:hidden;white-space:nowrap}
@keyframes navIn{from{opacity:0;transform:translateX(-50%) translateY(-20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
.brand{display:flex;align-items:center;gap:8px;font-weight:500;font-family:"Geist";white-space:nowrap;flex-shrink:0}
.brand-mark{width:26px;height:26px;border-radius:8px;background:conic-gradient(from 180deg at 50% 50%,#0073ff,#0a63f4,#4c9dff,#0073ff);box-shadow:0 0 20px rgba(0,115,255,0.55);animation:spin 8s linear infinite;flex-shrink:0}
@keyframes spin{to{transform:rotate(360deg)}}
.nav-links{display:flex;gap:2px;flex-shrink:1;overflow:hidden}
.nav-links a{padding:8px 12px;border-radius:100px;font-size:13px;color:var(--text-2);transition:background .25s ease,color .25s ease;white-space:nowrap;flex-shrink:0}
.nav-links a:hover{color:#fff;background:rgba(255,255,255,0.06)}
.btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:100px;font-size:14px;font-weight:500;border:1px solid transparent;cursor:pointer;transition:transform .25s ease,box-shadow .3s ease,background .25s ease;font-family:"Inter";white-space:nowrap;flex-shrink:0}
.btn-primary{background:var(--primary);color:#fff;box-shadow:var(--shadow-glow)}
.btn-primary:hover{transform:translateY(-1px);background:#1a83ff;box-shadow:var(--shadow-glow),0 0 0 4px rgba(0,115,255,0.15)}
.btn-ghost{background:rgba(255,255,255,0.04);color:#fff;border:1px solid var(--border-strong)}
.btn-ghost:hover{background:rgba(255,255,255,0.08);transform:translateY(-1px)}
@media(max-width:768px){.nav-links{display:none}.nav{padding:10px 16px}.brand span:last-child{max-width:120px;overflow:hidden;text-overflow:ellipsis}}
.hero{padding:180px 0 100px;text-align:center;position:relative}
.hero .halo{position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:900px;height:900px;border-radius:50%;background:radial-gradient(circle,rgba(0,115,255,0.30),rgba(0,115,255,0) 60%);filter:blur(40px);z-index:-1;pointer-events:none;animation:pulse 6s ease-in-out infinite;max-width:100%}
@keyframes pulse{0%,100%{transform:translateX(-50%) scale(1);opacity:.9}50%{transform:translateX(-50%) scale(1.08);opacity:1}}
.hero h1{max-width:920px;margin:26px auto 24px}
.gradient-text{background:linear-gradient(180deg,#ffffff 0%,#a4c7ff 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero p.sub{max-width:640px;margin:0 auto;font-size:18px;color:var(--text-2)}
.hero-actions{display:flex;gap:14px;justify-content:center;margin-top:36px;flex-wrap:wrap}
.rating{margin-top:32px;display:inline-flex;align-items:center;gap:14px;color:var(--text-2);font-size:14px}
.avatars{display:flex}
.avatars span{width:32px;height:32px;border-radius:50%;border:2px solid var(--bg);margin-left:-8px;background:linear-gradient(135deg,#0073ff,#0a63f4)}
.avatars span:nth-child(2){background:linear-gradient(135deg,#4c9dff,#0073ff)}
.avatars span:nth-child(3){background:linear-gradient(135deg,#7cb3ff,#0a63f4)}
.avatars span:nth-child(4){background:linear-gradient(135deg,#a4c7ff,#0073ff)}
.stars{color:#ffd166;letter-spacing:2px}
.hero-visual{margin-top:80px;padding:12px;border-radius:24px;background:linear-gradient(180deg,rgba(0,115,255,0.15),rgba(0,115,255,0));border:1px solid var(--border-strong);box-shadow:var(--shadow-deep);max-width:1080px;margin-left:auto;margin-right:auto}
.dashboard{border-radius:16px;background:linear-gradient(180deg,#030b26,#010513);border:1px solid var(--border);overflow:hidden;display:grid;grid-template-columns:200px 1fr;min-height:440px}
.dashboard .side{border-right:1px solid var(--border);padding:20px;display:flex;flex-direction:column;gap:8px}
.dashboard .side .item{padding:10px 12px;border-radius:8px;font-size:13px;color:var(--text-2);display:flex;align-items:center;gap:8px;text-align:left}
.dashboard .side .item.active{background:rgba(0,115,255,0.12);color:#fff}
.dashboard .side .dot-i{width:14px;height:14px;border-radius:4px;background:rgba(255,255,255,0.08)}
.dashboard .side .item.active .dot-i{background:var(--primary);box-shadow:0 0 10px var(--primary)}
.dashboard .main{padding:24px}
.dashboard .row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:14px}
.stat{padding:16px;border-radius:14px;background:rgba(255,255,255,0.02);border:1px solid var(--border);text-align:left}
.stat .k{font-size:12px;color:var(--text-3)}
.stat .v{font-size:22px;font-weight:500;margin-top:6px;font-family:"Geist"}
.stat .g{font-size:11px;color:#5ee1a0;margin-top:6px}
.chart{border-radius:14px;padding:20px;background:rgba(255,255,255,0.02);border:1px solid var(--border);height:220px;position:relative;overflow:hidden}
.chart svg{width:100%;height:100%}
.chart .glow{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 100%,rgba(0,115,255,0.25),transparent 60%);pointer-events:none}
@media(max-width:820px){.dashboard{grid-template-columns:1fr}.dashboard .side{border-right:none;border-bottom:1px solid var(--border);flex-direction:row;overflow:auto}}
.logo-strip{padding:56px 0;text-align:center;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.logo-strip p{margin-bottom:28px;font-size:13px;color:var(--text-3);letter-spacing:0.15em;text-transform:uppercase}
.marquee{overflow:hidden;mask-image:linear-gradient(90deg,transparent,black 10%,black 90%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,black 10%,black 90%,transparent)}
.marquee-track{display:flex;gap:80px;width:max-content;animation:track 30s linear infinite}
@keyframes track{to{transform:translateX(-50%)}}
.logo-item{font-family:"Geist";font-size:22px;color:var(--text-3);opacity:.8;white-space:nowrap;display:flex;align-items:center;gap:10px}
.logo-item .lm{width:24px;height:24px;border-radius:6px;background:linear-gradient(135deg,#0073ff,#0a63f4);opacity:.55}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:960px){.grid-3{grid-template-columns:1fr 1fr}}
@media(max-width:640px){.grid-3{grid-template-columns:1fr}}
.card{background:linear-gradient(180deg,rgba(0,115,255,0.05),rgba(0,115,255,0.01));border:1px solid var(--border-strong);border-radius:20px;padding:28px;position:relative;overflow:hidden;transition:transform .35s ease,border-color .35s ease,box-shadow .35s ease}
.card::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,0.09) 1px,transparent 1px);background-size:14px 14px;mask-image:linear-gradient(180deg,black 0%,transparent 70%);-webkit-mask-image:linear-gradient(180deg,black 0%,transparent 70%);opacity:.5;pointer-events:none}
.card:hover{transform:translateY(-4px);border-color:rgba(0,115,255,0.35);box-shadow:var(--shadow-deep),0 10px 40px rgba(0,115,255,0.10)}
.card .ico{width:52px;height:52px;border-radius:12px;background:linear-gradient(180deg,rgba(0,115,255,0.25),rgba(0,115,255,0.05));border:1px solid rgba(0,115,255,0.35);display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-low);margin-bottom:18px;position:relative;z-index:1}
.card .ico svg{width:24px;height:24px;color:#8ab7ff}
.card h4{font-size:20px;margin-bottom:10px;position:relative;z-index:1}
.card p{font-size:15px;color:var(--text-2);position:relative;z-index:1}
.split{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
@media(max-width:960px){.split{grid-template-columns:1fr}}
.steps{display:flex;flex-direction:column;gap:0}
.step{padding:22px 0;display:grid;grid-template-columns:60px 1fr;gap:18px;align-items:start;border-bottom:1px solid var(--border);transition:background .25s ease;cursor:pointer}
.step:hover{background:rgba(0,115,255,0.04)}
.step .num{font-family:"Geist";font-size:15px;color:var(--text-3)}
.step h4{font-size:22px;margin-bottom:6px}
.step p{font-size:14px}
.visual-card{border-radius:24px;border:1px solid var(--border-strong);background:linear-gradient(180deg,rgba(0,115,255,0.08),rgba(0,115,255,0));padding:36px;min-height:460px;box-shadow:var(--shadow-deep);position:relative;overflow:hidden}
.floating-node{position:absolute;padding:10px 14px;border-radius:100px;background:rgba(3,11,38,0.85);border:1px solid var(--border-strong);font-size:13px;display:flex;align-items:center;gap:8px;box-shadow:0 8px 24px rgba(0,0,0,0.4);animation:float 6s ease-in-out infinite}
.floating-node .fd{width:8px;height:8px;border-radius:50%;background:var(--primary);box-shadow:0 0 10px var(--primary)}
.fn1{top:12%;left:8%}.fn2{top:35%;right:6%;animation-delay:1.2s}.fn3{bottom:16%;left:14%;animation-delay:2.4s}.fn4{bottom:32%;right:12%;animation-delay:.6s}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.orb{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:220px;height:220px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#4c9dff,#0073ff 45%,#030b26 90%);box-shadow:0 0 80px rgba(0,115,255,0.5),var(--shadow-deep);animation:pulse2 4s ease-in-out infinite}
@keyframes pulse2{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.05)}}
.ring{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border:1px dashed rgba(0,115,255,0.35);border-radius:50%}
.ring.r1{width:320px;height:320px;animation:spin 20s linear infinite}
.ring.r2{width:420px;height:420px;animation:spin 30s linear infinite reverse}
.service{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:80px}
.service:nth-child(even){direction:rtl}
.service:nth-child(even)>*{direction:ltr}
@media(max-width:960px){.service,.service:nth-child(even){grid-template-columns:1fr;direction:ltr}}
.service .art{border-radius:24px;padding:12px;border:1px solid var(--border-strong);background:linear-gradient(180deg,rgba(0,115,255,0.10),rgba(0,115,255,0));box-shadow:var(--shadow-deep)}
.service .art .inner{aspect-ratio:4/3;border-radius:16px;background:linear-gradient(180deg,#050f2e,#010513);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.service .tag{display:inline-block;padding:6px 12px;border-radius:100px;background:rgba(0,115,255,0.10);border:1px solid rgba(0,115,255,0.25);font-size:12px;color:#8ab7ff;margin-bottom:14px}
.service h3{font-size:32px;margin-bottom:16px}
.service p{margin-bottom:22px;font-size:16px}
.chips{display:flex;gap:10px;flex-wrap:wrap}
.chip{padding:10px 16px;border-radius:100px;background:rgba(255,255,255,0.04);border:1px solid var(--border-strong);font-size:13px;color:#dde6ff}
.process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:960px){.process-grid{grid-template-columns:1fr 1fr}}
@media(max-width:640px){.process-grid{grid-template-columns:1fr}}
.p-card{padding:28px;border-radius:20px;border:1px solid var(--border-strong);background:linear-gradient(180deg,rgba(0,115,255,0.05),rgba(0,115,255,0.01));position:relative;overflow:hidden;transition:transform .3s ease,border-color .3s ease}
.p-card:hover{transform:translateY(-4px);border-color:rgba(0,115,255,0.35)}
.p-card .s{font-size:12px;color:#8ab7ff;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:14px;display:inline-block;padding:5px 12px;border-radius:100px;background:rgba(0,115,255,0.10);border:1px solid rgba(0,115,255,0.25)}
.p-card h4{font-size:22px;margin-bottom:10px}
.p-card p{font-size:14px}
.compare{display:grid;grid-template-columns:1fr 1fr;gap:20px}
@media(max-width:820px){.compare{grid-template-columns:1fr}}
.compare-card{padding:36px;border-radius:24px;border:1px solid var(--border-strong);background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))}
.compare-card.primary{background:linear-gradient(180deg,rgba(0,115,255,0.12),rgba(0,115,255,0.02));border:1px solid rgba(0,115,255,0.35);box-shadow:var(--shadow-deep)}
.compare-card h4{font-size:22px;margin-bottom:10px}
.compare-card>p{margin-bottom:22px;font-size:14px}
.check-list{display:flex;flex-direction:column;gap:14px}
.check-list .item{display:flex;gap:12px;align-items:flex-start;font-size:14px;color:#dde6ff}
.check-list .item svg{flex-shrink:0;margin-top:3px}
.check-list .item.bad{color:var(--text-3)}
.case-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
@media(max-width:768px){.case-grid{grid-template-columns:1fr}}
.case{padding:36px;border-radius:24px;border:1px solid var(--border-strong);background:linear-gradient(180deg,rgba(0,115,255,0.05),rgba(0,115,255,0.01));transition:transform .3s ease}
.case:hover{transform:translateY(-4px)}
.case .cat{font-size:12px;color:#8ab7ff;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:12px;display:inline-block;padding:5px 12px;border-radius:100px;background:rgba(0,115,255,0.10);border:1px solid rgba(0,115,255,0.25)}
.case h3{font-size:24px;margin-bottom:12px}
.case p{font-size:14px;margin-bottom:20px}
.metrics{display:flex;gap:24px}
.metric .v{font-size:28px;font-weight:600;font-family:"Geist";color:var(--text)}
.metric .k{font-size:12px;color:var(--text-3);margin-top:4px}
.tmarq{overflow:hidden;mask-image:linear-gradient(90deg,transparent,black 10%,black 90%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,black 10%,black 90%,transparent);padding:20px 0}
.tmarq-track{display:flex;gap:24px;width:max-content;animation:ttrack 40s linear infinite}
@keyframes ttrack{to{transform:translateX(-50%)}}
.testimonial{min-width:380px;max-width:420px;padding:32px;border-radius:24px;border:1px solid var(--border-strong);background:linear-gradient(180deg,rgba(0,115,255,0.05),rgba(0,115,255,0.01));flex-shrink:0}
.testimonial .top{display:flex;align-items:center;gap:14px;margin-bottom:16px}
.testimonial .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#0073ff,#0a63f4);display:flex;align-items:center;justify-content:center;font-family:"Geist";font-weight:600;font-size:16px;color:#fff}
.testimonial .name{font-weight:500;font-size:15px}
.testimonial .role{font-size:13px;color:var(--text-3)}
.testimonial .stars{margin-bottom:14px;font-size:18px}
.testimonial q{font-size:15px;color:var(--text-2);line-height:1.6;font-style:normal;display:block}
.toggle-wrap{display:flex;justify-content:center;margin-bottom:48px}
.toggle{display:inline-flex;background:rgba(255,255,255,0.04);border:1px solid var(--border-strong);border-radius:100px;padding:4px}
.toggle button{padding:10px 24px;border-radius:100px;border:none;background:transparent;color:var(--text-2);font-size:14px;font-weight:500;cursor:pointer;transition:all .25s ease}
.toggle button.active{background:var(--primary);color:#fff;box-shadow:var(--shadow-glow)}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:start}
@media(max-width:960px){.pricing-grid{grid-template-columns:1fr 1fr}}
@media(max-width:640px){.pricing-grid{grid-template-columns:1fr}}
.plan{padding:36px;border-radius:24px;border:1px solid var(--border-strong);background:linear-gradient(180deg,rgba(0,115,255,0.03),rgba(0,115,255,0.01));position:relative;transition:transform .3s ease}
.plan:hover{transform:translateY(-4px)}
.plan.pop{border:1px solid rgba(0,115,255,0.35);background:linear-gradient(180deg,rgba(0,115,255,0.10),rgba(0,115,255,0.02));box-shadow:var(--shadow-deep)}
.popbadge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);padding:6px 16px;border-radius:100px;background:var(--primary);color:#fff;font-size:11px;font-weight:600;letter-spacing:0.08em;white-space:nowrap}
.plan .tier{font-family:"Geist";font-size:20px;margin-bottom:8px}
.plan .price{font-family:"Geist";font-size:42px;font-weight:600;margin-bottom:8px}
.plan .price small{font-size:14px;color:var(--text-3);font-weight:400}
.plan .desc{font-size:14px;color:var(--text-2);margin-bottom:24px}
.plan .features{display:flex;flex-direction:column;gap:14px;margin-bottom:28px}
.fi{display:flex;gap:10px;align-items:flex-start;font-size:14px;color:#dde6ff}
.fi svg{flex-shrink:0;margin-top:2px;color:var(--primary)}
.plan .btn{width:100%;justify-content:center}
.faq{max-width:780px;margin:0 auto}
.q{border-bottom:1px solid var(--border);padding:24px 0}
.q summary{display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-size:17px;font-weight:500;color:var(--text);list-style:none}
.q summary::-webkit-details-marker{display:none}
.q .plus{transition:transform .25s ease;color:var(--text-3)}
.q[open] .plus{transform:rotate(45deg)}
.q .body{margin-top:14px;font-size:15px;color:var(--text-2);line-height:1.7}
.cta{text-align:center;padding:80px 40px;border-radius:32px;background:linear-gradient(180deg,rgba(0,115,255,0.10),rgba(0,115,255,0.02));border:1px solid var(--border-strong);box-shadow:var(--shadow-deep)}
.cta h2{margin:20px 0 14px}
.cta p{font-size:17px;margin-bottom:32px}
footer{padding:80px 0 40px;border-top:1px solid var(--border)}
.foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px}
@media(max-width:768px){.foot-grid{grid-template-columns:1fr 1fr}}
.foot-col h5{font-size:14px;color:var(--text);margin-bottom:16px;font-weight:500}
.foot-col a{display:block;font-size:14px;color:var(--text-3);margin-bottom:10px;transition:color .2s ease}
.foot-col a:hover{color:var(--text)}
.foot-brand p{font-size:14px;color:var(--text-3);margin-top:12px;max-width:300px}
.foot-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:32px;border-top:1px solid var(--border);font-size:13px;color:var(--text-3)}
@media(max-width:640px){.foot-bottom{flex-direction:column;gap:12px}}
.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.2,.9,.2,1),transform .7s cubic-bezier(.2,.9,.2,1)}
.reveal.in{opacity:1;transform:translateY(0)}
.reveal.d1{transition-delay:.1s}.reveal.d2{transition-delay:.2s}.reveal.d3{transition-delay:.3s}.reveal.d4{transition-delay:.4s}.reveal.d5{transition-delay:.5s}
.ctc-split{display:grid;grid-template-columns:1fr 1.3fr;gap:48px;align-items:start}
@media(max-width:960px){.ctc-split{grid-template-columns:1fr}}
.ctc-info h3{font-size:28px;margin-bottom:14px}
.ctc-row{display:flex;gap:14px;align-items:center;padding:16px 0;border-bottom:1px solid var(--border)}
.ctc-ic{width:42px;height:42px;border-radius:12px;background:rgba(0,115,255,0.10);border:1px solid rgba(0,115,255,0.25);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.ctc-label{font-size:12px;color:var(--text-3);text-transform:uppercase;letter-spacing:0.08em}
.ctc-val{font-size:15px;color:var(--text);font-weight:500;margin-top:2px}
.ctc-form{background:linear-gradient(180deg,rgba(0,115,255,0.06),rgba(0,115,255,0.01));border:1px solid var(--border-strong);border-radius:24px;padding:36px;box-shadow:var(--shadow-deep)}
.ctc-form-title{font-size:24px;margin-bottom:22px}
.ff label{display:block;font-size:13px;color:var(--text-2);margin-bottom:6px;font-weight:500}
.ff input,.ff select,.ff textarea{width:100%;padding:12px 16px;border-radius:12px;border:1px solid var(--border-strong);background:rgba(255,255,255,0.04);color:var(--text);font-size:14px;font-family:"Inter",sans-serif;transition:border-color .25s ease,box-shadow .25s ease}
.ff input:focus,.ff select:focus,.ff textarea:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px rgba(0,115,255,0.15)}
.ff select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236b7590' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center}
.ff textarea{resize:vertical;min-height:80px}
.sub-btn{padding:14px 28px;border-radius:100px;border:none;background:var(--primary);color:#fff;font-weight:600;cursor:pointer;transition:transform .25s ease,box-shadow .3s ease,background .25s ease;font-family:"Inter"}
.sub-btn:hover{transform:translateY(-1px);box-shadow:var(--shadow-glow),0 0 0 4px rgba(0,115,255,0.15)}
</style>
</head>
<body>

<nav class="nav">
  <a href="#" class="brand"><span class="brand-mark"></span><span>${siteName}</span></a>
  <div class="nav-links">
    ${navLinks.map(l => `<a href="#${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">${l}</a>`).join('')}
  </div>
  <a href="#contact" class="btn btn-primary">${ctaBtn}</a>
</nav>

<header class="hero container">
  <div class="halo"></div>
  <div class="reveal in"><span class="eyebrow"><span class="dot"></span> ${typeName} in ${biz.city || 'your area'}</span></div>
  <h1 class="reveal d1 in">${heroText.split(' ').map((w, i) => i === Math.floor(heroText.split(' ').length / 2) ? `<span class="gradient-text">${w}</span>` : w).join(' ')}</h1>
  <p class="sub reveal d2 in">${heroSub}</p>
  <div class="hero-actions reveal d3 in">
    <a href="#contact" class="btn btn-primary">${ctaBtn} &rarr;</a>
    <a href="#services" class="btn btn-ghost">See our services</a>
  </div>
  <div class="rating reveal d4 in">
    <div class="avatars"><span></span><span></span><span></span><span></span></div>
    <div><span class="stars">\u2605\u2605\u2605\u2605\u2605</span> ${biz.rating || '4.9'} from ${biz.reviews || '100'}+ reviews</div>
  </div>
  <div class="hero-visual reveal d5 in">
    <div class="dashboard">
      <aside class="side">
        <div class="item active"><span class="dot-i"></span> Overview</div>
        <div class="item"><span class="dot-i"></span> ${typeName}</div>
        <div class="item"><span class="dot-i"></span> Projects</div>
        <div class="item"><span class="dot-i"></span> Reviews</div>
        <div class="item"><span class="dot-i"></span> Contact</div>
      </aside>
      <div class="main">
        <div class="row">
          <div class="stat"><div class="k">Rating</div><div class="v">${biz.rating || '4.9'}\u2605</div><div class="g">\u25B2 Top rated</div></div>
          <div class="stat"><div class="k">Reviews</div><div class="v">${biz.reviews || '100'}+</div><div class="g">\u25B2 Verified</div></div>
          <div class="stat"><div class="k">Experience</div><div class="v">${biz.years || '5'}+ yrs</div><div class="g">\u25B2 Certified</div></div>
        </div>
        <div class="chart">
          <svg viewBox="0 0 600 200" preserveAspectRatio="none">
            <defs><linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${accent}" stop-opacity="0.6"/><stop offset="100%" stop-color="${accent}" stop-opacity="0"/></linearGradient></defs>
            <path d="M0 160 C 60 140, 100 120, 150 130 S 250 90, 300 80 S 400 60, 460 50 S 560 40, 600 30 L 600 200 L 0 200 Z" fill="url(#lg1)"/>
            <path d="M0 160 C 60 140, 100 120, 150 130 S 250 90, 300 80 S 400 60, 460 50 S 560 40, 600 30" stroke="${accent}" stroke-width="2.5" fill="none"/>
            <circle cx="300" cy="80" r="5" fill="#8ab7ff"/><circle cx="460" cy="50" r="5" fill="#8ab7ff"/>
          </svg>
          <div class="glow"></div>
        </div>
      </div>
    </div>
  </div>
</header>

<section class="logo-strip">
  <div class="container">
    <p>Trusted by homeowners and businesses in ${biz.city || 'your area'}</p>
    <div class="marquee">
      <div class="marquee-track">
        ${brands.concat(brands).map(b => `<div class="logo-item"><span class="lm"></span>${b}</div>`).join('')}
      </div>
    </div>
  </div>
</section>

<section class="section container" id="services">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> Services</span>
    <h2>Professional ${typeNameLower} services</h2>
    <p>${aboutText}</p>
  </div>
  ${services.map((s, i) => `<div class="service reveal">
    <div class="art"><div class="inner">${s.img ? `<img src="${s.img}" alt="${s.title}" style="width:100%;height:100%;object-fit:cover;border-radius:16px">` : `<div class="svc-anim-${(i % 4) + 1}"></div>`}</div></div>
    <div>
      <span class="tag">${s.tag}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="chips">${s.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
    </div>
  </div>`).join('')}
</section>

<section class="section container" id="process">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> How It Works</span>
    <h2>Our proven process</h2>
    <p>Every step is designed to deliver quality ${typeNameLower} service.</p>
  </div>
  <div class="process-grid">
    ${processSteps.map((p, i) => `<div class="p-card reveal${i > 0 ? ' d' + i : ''}"><span class="s">Step ${i + 1}</span><h4>${p.title}</h4><p>${p.desc}</p></div>`).join('')}
  </div>
</section>

<section class="section container">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> Why Choose Us</span>
    <h2>${siteName} is the clear choice</h2>
    <p>See why clients trust us for their ${typeNameLower} needs.</p>
  </div>
  <div class="compare">
    <div class="compare-card primary reveal">
      <h4>${siteName}</h4>
      <p>Professional ${typeNameLower} services with certified experts and guaranteed results.</p>
      <div class="check-list">
        ${['Licensed & fully insured professionals', 'Transparent pricing with no hidden fees', '30-day workmanship guarantee', `${typeName}-specific expertise`, biz.emergency === 'yes' ? '24/7 emergency availability' : 'Flexible scheduling', `${biz.rating || '4.9'} star rating from verified reviews`].map(t => `<div class="item">${starSvg}${t}</div>`).join('')}
      </div>
    </div>
    <div class="compare-card reveal d2">
      <h4>Others</h4>
      <p>Often unreliable with unclear pricing and no guarantees.</p>
      <div class="check-list">
        ${['Unclear pricing and surprise charges', 'No service guarantee or warranty', 'Inconsistent quality of work', 'Slow response and scheduling', 'Limited accountability', 'Unverified credentials'].map(t => `<div class="item bad">${crossSvg}${t}</div>`).join('')}
      </div>
    </div>
  </div>
</section>

<section class="section container" id="portfolio">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> Our Work</span>
    <h2>Recent ${typeNameLower} projects</h2>
    <p>See our quality work across ${biz.city || 'your area'}.</p>
  </div>
  <div class="case-grid">
    ${caseStudies.map((c, i) => `<div class="case reveal${i > 0 ? ' d' + (i + 1) : ''}">
      <span class="cat">${c.cat}</span>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="metrics">${c.metrics.map(m => `<div class="metric"><div class="v">${m.v}</div><div class="k">${m.k}</div></div>`).join('')}</div>
    </div>`).join('')}
  </div>
</section>

<section class="section" id="testimonials">
  <div class="container section-head reveal">
    <span class="eyebrow"><span class="dot"></span> Reviews</span>
    <h2>What our clients say</h2>
    <p>Rated ${biz.rating || '4.9'}\u2605 from ${biz.reviews || '100'}+ verified reviews.</p>
  </div>
  <div class="tmarq">
    <div class="tmarq-track">
      ${testimonials.concat(testimonials).map(t => `<div class="testimonial">
        <div class="top">
          <div class="avatar">${t.name.split(' ').map(w => w[0]).join('')}</div>
          <div><div class="name">${t.name}</div><div class="role">${t.date || ''}</div></div>
        </div>
        <div class="stars">\u2605\u2605\u2605\u2605\u2605</div><q>${t.text}</q>
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="section container" id="pricing">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> Pricing</span>
    <h2>Transparent ${typeNameLower} pricing</h2>
    <p>Competitive rates with no hidden fees. Contact us for a free quote.</p>
  </div>
  <div class="compare">
    <div class="compare-card primary reveal">
      <h4>Our pricing</h4>
      <p>Upfront quotes after assessment. No surprises.</p>
      <div class="check-list">
        ${['Free on-site assessment', 'Transparent upfront quotes', 'No hidden fees or charges', 'Flexible payment options', 'Competitive market rates', 'Price match guarantee'].map(t => `<div class="item">${starSvg}${t}</div>`).join('')}
      </div>
    </div>
    <div class="compare-card reveal d2">
      <h4>How we work</h4>
      <p>You approve the quote before we start.</p>
      <div class="check-list">
        ${['Detailed written estimate', 'Scope clearly defined', 'Timeline agreed upfront', 'Quality checkpoints', 'Final walkthrough', 'Satisfaction guaranteed'].map(t => `<div class="item">${checkSvg}${t}</div>`).join('')}
      </div>
    </div>
  </div>
</section>

<section class="section container" id="faq">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> FAQ</span>
    <h2>Frequently asked questions</h2>
    <p>Got questions? We've got answers.</p>
  </div>
  <div class="faq">
    ${faqs.map((f, i) => `<details class="q reveal${i > 0 ? ' d' + i : ''}"${i === 0 ? ' open' : ''}>
      <summary>${f.q}<span class="plus">${plusSvg}</span></summary>
      <div class="body">${f.a}</div>
    </details>`).join('')}
  </div>
</section>

<section class="section container" id="contact">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> Get in touch</span>
    <h2>${ctaText}</h2>
    <p>We respond within 30 minutes during business hours.</p>
  </div>
  <div class="ctc-split">
    <div class="ctc-info reveal">
      <h3>Contact Information</h3>
      <p style="margin-bottom:28px">Ready to book a ${typeNameLower} service or have a question? Reach out and we'll get back to you quickly.</p>
      <div class="ctc-row"><span class="ctc-ic">\uD83D\uDCDE</span><div><div class="ctc-label">Phone</div><div class="ctc-val">${phone}</div></div></div>
      <div class="ctc-row"><span class="ctc-ic">\u2709\uFE0F</span><div><div class="ctc-label">Email</div><div class="ctc-val">${email}</div></div></div>
      <div class="ctc-row"><span class="ctc-ic">\uD83D\uDCCD</span><div><div class="ctc-label">Location</div><div class="ctc-val">${biz.address || biz.city || 'Your area'}</div></div></div>
      <div class="ctc-row"><span class="ctc-ic">\uD83D\uDD50</span><div><div class="ctc-label">Hours</div><div class="ctc-val">${biz.hours || 'Mon-Fri 8am-6pm'}</div></div></div>
    </div>
    <div class="ctc-form reveal d2">
      <h3 class="ctc-form-title">Request a Free Quote</h3>
      <div class="ff" style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div><label>Full Name</label><input type="text" placeholder="Your name"></div>
        <div><label>Phone</label><input type="tel" placeholder="${phone}"></div>
      </div>
      <div class="ff" style="margin-top:14px"><label>Email</label><input type="email" placeholder="Email address"></div>
      <div class="ff" style="margin-top:14px"><label>Service Needed</label><select>${(biz.services || [`${typeName} installation`, `${typeName} repair`, `${typeName} inspection`, `${typeName} maintenance`]).map(s => `<option>${s}</option>`).join('')}</select></div>
      <div class="ff" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px">
        <div><label>Preferred Date</label><input type="date"></div>
        <div><label>Property Size</label><input type="text" placeholder="e.g. 2000 sq ft"></div>
      </div>
      <div class="ff" style="margin-top:14px"><label>Message</label><textarea placeholder="Describe your ${typeNameLower} needs..." rows="4" style="width:100%;resize:vertical"></textarea></div>
      <button class="sub-btn" style="width:100%;margin-top:18px;font-size:16px;font-weight:600" onclick="this.textContent='Sending...';setTimeout(()=>{this.textContent='Sent! We\\'ll contact you shortly.';this.style.background='#10b981'},1200)">Submit Request</button>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="foot-grid">
      <div class="foot-col foot-brand">
        <a href="#" class="brand"><span class="brand-mark"></span>${siteName}</a>
        <p>Professional ${typeNameLower} services in ${biz.city || 'your area'}. Licensed, insured, and guaranteed.</p>
      </div>
      <div class="foot-col">
        <h5>Services</h5>
        ${(biz.services || []).slice(0, 5).map(s => `<a href="#services">${s}</a>`).join('') || '<a href="#services">Our services</a>'}
      </div>
      <div class="foot-col">
        <h5>Company</h5>
        <a href="#">About</a><a href="#portfolio">Our work</a><a href="#testimonials">Reviews</a><a href="#contact">Contact</a>
      </div>
      <div class="foot-col">
        <h5>Help</h5>
        <a href="#faq">FAQ</a><a href="#pricing">Pricing</a><a href="#contact">Get a quote</a>
      </div>
    </div>
    <div class="foot-bottom">
      <div>\u00A9 ${year} ${siteName}. All rights reserved.</div>
      <div style="display:flex;gap:22px"><a href="#">Privacy</a><a href="#">Terms</a></div>
    </div>
  </div>
</footer>

<script>
var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:0.12,rootMargin:"0px 0px -60px 0px"});
document.querySelectorAll('.reveal').forEach(function(el){if(!el.classList.contains('in'))io.observe(el);});
var nav=document.querySelector('.nav');window.addEventListener('scroll',function(){nav.style.boxShadow=window.scrollY>40?"var(--shadow-deep), 0 10px 30px rgba(0,0,0,0.35)":"var(--shadow-deep)";});
var halo=document.querySelector('.hero .halo');document.addEventListener('mousemove',function(e){if(!halo)return;var x=(e.clientX/window.innerWidth-.5)*20;var y=(e.clientY/window.innerHeight-.5)*20;halo.style.transform='translate(calc(-50% + '+x+'px), '+y+'px)';});
</script>
</body>
</html>`;
}

window.buildSaasModern = buildSaasModern;
