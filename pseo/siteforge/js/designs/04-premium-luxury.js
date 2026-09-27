// ==================== TEMPLATE: PREMIUM LUXURY ====================
function buildPremiumLuxury(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Inter',system-ui,sans-serif",
    headFont:"'Geist Mono',monospace",
    fontImport:'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap',
    A:'#00ff88',BG:'#080808',TC:'#ffffff',
    cardBg:'#111111',borderColor:'rgba(255,255,255,0.06)',
    accentBg:'rgba(0,255,136,0.06)',
    isDark:true,
    extraCSS:`
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#080808;color:#fff;font-family:'Inter',sans-serif}
    h1,h2,h3{font-family:'Geist Mono',monospace;letter-spacing:-0.06em}
    nav{position:fixed!important;top:16px!important;left:16px!important;right:16px!important;z-index:100!important;background:rgba(8,8,8,0.4)!important;backdrop-filter:blur(16px)!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:14px!important;padding:8px 16px!important;display:flex!important;align-items:center!important;justify-content:space-between!important;transition:background 0.3s!important}
    .emg{display:none!important}
    nav.scrolled{background:rgba(8,8,8,0.8)!important}
    .nav-logo{font-family:'Geist Mono',monospace!important;font-size:18px!important;font-weight:700!important;color:#00ff88!important;letter-spacing:-0.06em!important}
    .nav-links{display:flex!important;gap:4px!important;align-items:center!important}
    .sf-nav-link{color:rgba(255,255,255,0.4)!important;font-size:13px!important;padding:6px 12px!important;border-radius:8px!important;font-weight:500!important}
    .sf-nav-link:hover,.sf-nav-link.active{color:#fff!important;background:rgba(255,255,255,0.06)!important}
    .nav-cta{background:#00ff88!important;color:#080808!important;border-radius:8px!important;padding:8px 18px!important;font-size:13px!important;font-weight:600!important}
    .hero{min-height:100vh!important;position:relative!important;overflow:hidden!important;padding:96px 5% 80px!important;background:#080808!important;margin-top:100px!important}
    .hero::before{content:''!important;position:absolute!important;inset:0!important;background:radial-gradient(ellipse 60% 40% at 60% 30%,rgba(0,255,136,0.06) 0%,transparent 70%)!important;pointer-events:none!important;z-index:0!important}
    .hero::after{content:''!important;position:absolute!important;top:80px!important;left:0!important;width:100%!important;height:calc(100% - 80px)!important;z-index:0!important;pointer-events:none!important;background:radial-gradient(ellipse 20% 80% at 55% 0%,rgba(0,255,136,0.18) 0%,transparent 70%),radial-gradient(ellipse 15% 90% at 45% 5%,rgba(0,255,136,0.12) 0%,transparent 65%),radial-gradient(ellipse 25% 70% at 65% 0%,rgba(0,200,100,0.1) 0%,transparent 60%),radial-gradient(ellipse 10% 95% at 50% 0%,rgba(0,255,136,0.22) 0%,transparent 80%)!important;mask-image:linear-gradient(17deg,#0000 44%,#000 100%)!important;-webkit-mask-image:linear-gradient(17deg,#0000 44%,#000 100%)!important;animation:auroraShimmer 8s ease-in-out infinite alternate!important}
    @keyframes auroraShimmer{0%{opacity:0.7;transform:translateX(-2%) scaleX(1)}50%{opacity:1;transform:translateX(1%) scaleX(1.02)}100%{opacity:0.8;transform:translateX(2%) scaleX(0.98)}}
    .hero-noise{position:absolute!important;inset:0!important;z-index:1!important;pointer-events:none!important;opacity:0.12!important;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")!important;background-repeat:repeat!important;background-size:153px auto!important}
    .hero-inner{position:relative!important;z-index:2!important}
    .hero-badge{display:inline-flex!important;align-items:center!important;gap:6px!important;background:rgba(0,255,136,0.06)!important;border:1px solid rgba(0,255,136,0.15)!important;color:#00ff88!important;padding:6px 14px!important;border-radius:20px!important;font-size:11px!important;font-weight:600!important;letter-spacing:0.05em!important;text-transform:uppercase!important;margin-bottom:32px!important}
    .hero-badge::before{content:''!important;width:5px!important;height:5px!important;border-radius:50%!important;background:#00ff88!important;display:block!important}
    .hero h1{font-size:clamp(36px,6vw,72px)!important;font-weight:700!important;line-height:1.05!important;letter-spacing:-0.06em!important;margin-bottom:24px!important}
    .hero h1 em{background:linear-gradient(135deg,#00ff88,rgba(0,255,136,0.6))!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;font-style:normal!important}
    .hero p{font-size:17px!important;color:rgba(255,255,255,0.45)!important;max-width:520px!important;margin:0 auto 40px!important;line-height:1.7!important}
    .hero-btns{display:flex!important;justify-content:center!important;gap:12px!important;flex-wrap:wrap!important}
    .btn-p{background:#00ff88!important;color:#080808!important;border-radius:8px!important;padding:14px 32px!important;font-size:14px!important;font-weight:600!important}
    .btn-p:hover{opacity:0.9!important;transform:translateY(-1px)!important}
    .btn-s{background:transparent!important;border:1px solid rgba(255,255,255,0.06)!important;color:#fff!important;border-radius:8px!important;padding:13px 28px!important;font-size:14px!important}
    .btn-s:hover{border-color:#00ff88!important;color:#00ff88!important}
    .stats-bar{background:transparent!important;border-top:1px solid rgba(255,255,255,0.06)!important;border-bottom:1px solid rgba(255,255,255,0.06)!important;padding:40px 5%!important}
    .stats-inner{max-width:800px!important;margin:0 auto!important;display:grid!important;grid-template-columns:repeat(4,1fr)!important;gap:16px!important;text-align:center!important}
    .sv{font-size:clamp(28px,4vw,40px)!important;font-weight:700!important;color:#00ff88!important;letter-spacing:-0.04em!important;display:block!important;font-family:'Geist Mono',monospace!important}
    .sl{font-size:12px!important;color:rgba(255,255,255,0.4)!important;margin-top:4px!important;display:block!important}
    .section{padding:64px 5%!important}
    .sec-head{margin-bottom:48px!important;text-align:center!important}
    .sec-eyebrow{display:inline-block!important;font-size:11px!important;font-weight:600!important;color:#00ff88!important;letter-spacing:0.05em!important;text-transform:uppercase!important;margin-bottom:12px!important}
    .sec-head h2{font-size:clamp(28px,3.5vw,40px)!important;font-weight:700!important;letter-spacing:-0.06em!important}
    .sec-p{font-size:14px!important;color:rgba(255,255,255,0.45)!important;max-width:480px!important;line-height:1.6!important;margin:12px auto 0!important}
    .srv-grid{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))!important;gap:1px!important;background:rgba(255,255,255,0.06)!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:16px!important;overflow:hidden!important}
    .srv-card{background:#111!important;padding:32px!important;border:1px solid transparent!important;border-radius:16px!important;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)!important}
    .srv-card:hover{background:#1a1a1a!important;border-color:rgba(0,255,136,0.12)!important;box-shadow:0 8px 32px rgba(0,255,136,0.06)!important;transform:translateY(-2px)!important}
    .srv-icon{color:#00ff88!important;margin-bottom:12px!important;display:flex!important;align-items:center!important;font-size:20px!important}
    .srv-card h3{font-size:16px!important;font-weight:600!important;color:#fff!important;letter-spacing:-0.03em!important}
    .srv-card p{font-size:13px!important;color:rgba(255,255,255,0.45)!important;line-height:1.6!important}
    .about-g{display:grid!important;grid-template-columns:1fr 1fr!important;gap:64px!important;align-items:center!important}
    .about-img{border-radius:16px!important;overflow:hidden!important;border:1px solid rgba(255,255,255,0.06)!important}
    .about-img img{aspect-ratio:4/3!important;object-fit:cover!important}
    .about-text h2{font-size:clamp(24px,3vw,36px)!important;font-weight:700!important;letter-spacing:-0.06em!important}
    .about-text p{color:rgba(255,255,255,0.45)!important;font-size:14px!important;line-height:1.6!important}
    .chk-list li{border-bottom:1px solid rgba(255,255,255,0.06)!important;padding:12px 0!important;font-size:14px!important;color:rgba(255,255,255,0.45)!important}
    .chk-icon{color:#00ff88!important;font-size:14px!important}
    .port-g{display:grid!important;grid-template-columns:repeat(2,1fr)!important;gap:16px!important}
    .port-card{border-radius:16px!important;overflow:hidden!important;position:relative!important;aspect-ratio:4/3!important;border:1px solid rgba(255,255,255,0.06)!important}
    .port-card img{height:100%!important}
    .port-info{padding:20px!important;background:#111!important}
    .port-info h3{font-size:15px!important;font-weight:600!important;color:#fff!important;letter-spacing:-0.03em!important}
    .port-info span{color:rgba(255,255,255,0.45)!important}
    .pricing-g{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))!important;gap:1px!important;background:rgba(255,255,255,0.06)!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:16px!important;overflow:hidden!important}
    .pricing-card{background:#111!important;padding:32px!important;border:1px solid transparent!important;border-radius:16px!important}
    .pricing-card.pop{background:rgba(0,255,136,0.06)!important;border-color:rgba(0,255,136,0.15)!important}
    .pricing-label{font-size:12px!important;text-transform:uppercase!important;letter-spacing:0.05em!important;color:rgba(255,255,255,0.45)!important}
    .pricing-price{font-family:'Geist Mono',monospace!important;font-size:48px!important;font-weight:700!important;color:#fff!important;letter-spacing:-0.06em!important}
    .pricing-desc{font-size:13px!important;color:rgba(255,255,255,0.45)!important;margin-bottom:24px!important}
    .pricing-features{list-style:none!important;padding:0!important;margin-bottom:32px!important}
    .pricing-features li{font-size:13px!important;color:rgba(255,255,255,0.65)!important;padding:8px 0!important;border-bottom:1px solid rgba(255,255,255,0.04)!important}
    .pricing-features li::before{content:'✓'!important;color:#00ff88!important;margin-right:8px!important}
    .cta-band{background:#080808!important;border-top:1px solid rgba(255,255,255,0.06)!important;border-bottom:1px solid rgba(255,255,255,0.06)!important;padding:64px 5%!important;text-align:center!important;position:relative!important;overflow:hidden!important}
    .cta-band::before{content:''!important;position:absolute!important;top:-50%;left:50%!important;transform:translateX(-50%)!important;width:800px!important;height:400px!important;background:radial-gradient(ellipse,rgba(0,255,136,0.08),transparent 70%)!important;pointer-events:none!important}
    .cta-band h2{font-size:clamp(28px,3.5vw,40px)!important;font-weight:700!important;letter-spacing:-0.06em!important;position:relative!important;z-index:1!important}
    .cta-band p{color:rgba(255,255,255,0.45)!important;position:relative!important;z-index:1!important}
    .btn-inv{background:#00ff88!important;color:#080808!important;border-radius:8px!important;position:relative!important;z-index:1!important}
    .ctc-g{display:grid!important;grid-template-columns:1fr 1.4fr!important;gap:64px!important;align-items:start!important}
    .ctc-info h2{font-size:clamp(26px,3vw,36px)!important;font-weight:700!important;letter-spacing:-0.06em!important}
    .ctc-info p{color:rgba(255,255,255,0.45)!important;font-size:14px!important}
    .ctc-ic{background:rgba(0,255,136,0.06)!important;border-radius:8px!important}
    .ctc-lbl{color:rgba(255,255,255,0.45)!important;font-size:11px!important;font-weight:600!important;text-transform:uppercase!important;letter-spacing:0.05px!important}
    .ctc-val{color:#fff!important;font-weight:500!important}
    .ctc-form{background:#111!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:16px!important;padding:32px!important}
    .ctc-form-title{font-family:'Geist Mono',monospace!important;font-size:18px!important;font-weight:700!important;letter-spacing:-0.03em!important}
    .ff input,.ff select,.ff textarea{background:rgba(255,255,255,0.04)!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:8px!important;color:#fff!important}
    .ff input:focus,.ff textarea:focus,.ff select:focus{border-color:#00ff88!important}
    .ff select option{background:#111!important}
    .sub-btn{background:#00ff88!important;border-radius:8px!important;color:#080808!important}
    .succ{background:rgba(0,255,136,0.06)!important;border:1px solid rgba(0,255,136,0.15)!important;color:#00ff88!important}
    footer{background:#0a0a0a!important;color:rgba(255,255,255,0.4)!important;border-top:1px solid rgba(255,255,255,0.06)!important}
    .foot-col h4{color:#fff!important}
    .foot-col a{color:rgba(255,255,255,0.4)!important}
    .foot-col a:hover{color:#00ff88!important}
    .foot-bot{border-top:1px solid rgba(255,255,255,0.06)!important}
    .float-cta{position:fixed!important;bottom:24px!important;right:24px!important;z-index:99!important;background:#00ff88!important;color:#080808!important;border-radius:50%!important;width:56px!important;height:56px!important;display:flex!important;align-items:center!important;justify-content:center!important;box-shadow:0 4px 24px rgba(0,255,136,0.3)!important;animation:pulse 2s infinite!important}
    @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,255,136,0.4)}70%{box-shadow:0 0 0 10px rgba(0,255,136,0)}100%{box-shadow:0 0 0 0 rgba(0,255,136,0)}}
    @media(max-width:768px){
      .hero-inner{grid-template-columns:1fr!important;gap:48px!important}
      .about-g{grid-template-columns:1fr!important}
      .ctc-g{grid-template-columns:1fr!important}
      .port-g{grid-template-columns:1fr!important}
      .pricing-g{grid-template-columns:1fr!important}
      nav{position:relative!important;top:0!important;left:0!important;right:auto!important;border-radius:0!important;margin-bottom:16px!important}
    }
    .reveal{opacity:0;transform:translateY(32px);transition:opacity 0.7s cubic-bezier(0.16,1,0.3,1),transform 0.7s cubic-bezier(0.16,1,0.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-left{opacity:0;transform:translateX(-32px);transition:opacity 0.7s cubic-bezier(0.16,1,0.3,1),transform 0.7s cubic-bezier(0.16,1,0.3,1)}
    .reveal-left.visible{opacity:1;transform:translateX(0)}
    .reveal-right{opacity:0;transform:translateX(32px);transition:opacity 0.7s cubic-bezier(0.16,1,0.3,1),transform 0.7s cubic-bezier(0.16,1,0.3,1)}
    .reveal-right.visible{opacity:1;transform:translateX(0)}
    .reveal-scale{opacity:0;transform:scale(0.96);transition:opacity 0.7s cubic-bezier(0.16,1,0.3,1),transform 0.7s cubic-bezier(0.16,1,0.3,1)}
    .reveal-scale.visible{opacity:1;transform:scale(1)}
    .stagger-1{transition-delay:0.05s}.stagger-2{transition-delay:0.1s}.stagger-3{transition-delay:0.15s}.stagger-4{transition-delay:0.2s}.stagger-5{transition-delay:0.25s}.stagger-6{transition-delay:0.3s}
    `
    ,extraJS:`document.addEventListener('DOMContentLoaded',function(){
      /* Nav logo click -> home */
      var logo=document.querySelector('.nav-logo');
      if(logo){logo.style.cursor='pointer';logo.onclick=function(){showPage('home');};}
      /* Inject noise overlay into hero */
      var hero=document.querySelector('.hero');
      if(hero){
        var n=document.createElement('div');n.className='hero-noise';
        hero.insertBefore(n,hero.firstChild);
      }
      /* Add reveal classes */
      document.querySelectorAll('.section,.alt.section,.cta-band').forEach(function(el,i){
        el.classList.add('reveal');
        if(i%3===1) el.classList.add('stagger-2');
      });
      document.querySelectorAll('.srv-card,.rev-card,.port-card').forEach(function(el,i){
        el.classList.add('reveal');
        el.classList.add('stagger-'+((i%6)+1));
      });
      /* IntersectionObserver */
      var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});},{threshold:0.1});
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(function(el){obs.observe(el)});
    });`
  });
}
