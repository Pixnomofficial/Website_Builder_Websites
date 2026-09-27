// ==================== TEMPLATE: MODERN DARK ====================
function buildModernDark(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Inter',system-ui,sans-serif",
    headFont:"'Inter Variable',sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    A:'#00ffdd',BG:'#000000',TC:'#ffffff',
    cardBg:'#080808',borderColor:'rgba(255,255,255,0.06)',
    accentBg:'rgba(0,255,221,0.08)',
    isDark:true,
    extraCSS:`
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#000000;color:#fff;font-family:'Inter',sans-serif}
    h1,h2,h3{font-family:'Inter Variable',sans-serif;font-weight:800;letter-spacing:-1.44px}
    .aurora{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden}
    .aurora::before{content:'';position:absolute;top:-20%;left:-10%;width:60%;height:70%;background:radial-gradient(ellipse at center,rgba(0,255,221,0.12),transparent 60%);filter:blur(80px);animation:auroraPulse 8s ease-in-out infinite}
    .aurora::after{content:'';position:absolute;bottom:-10%;right:-5%;width:40%;height:50%;background:radial-gradient(ellipse at center,rgba(0,255,221,0.06),transparent 60%);filter:blur(60px);animation:auroraPulse 10s ease-in-out infinite reverse}
    @keyframes auroraPulse{0%,100%{opacity:0.7;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}}
    nav{position:fixed!important;top:44px!important;left:50%!important;transform:translateX(-50%)!important;z-index:100!important;width:calc(100% - 32px)!important;max-width:800px!important;background:transparent!important;backdrop-filter:none!important;border:none!important;padding:0!important}
    .nav-inner{background:rgba(0,0,0,0.7)!important;backdrop-filter:blur(20px)!important;border:1px solid rgba(255,255,255,0.08)!important;border-radius:16px!important;padding:0 24px!important;display:flex!important;align-items:center!important;height:56px!important;gap:24px!important}
    .nav-logo{font-size:16px!important;font-weight:700!important;color:#fff!important;letter-spacing:-0.3px!important}
    .nav-logo span{color:#00ffdd!important}
    .sf-nav-link{color:rgba(255,255,255,0.5)!important;font-size:13px!important;padding:6px 12px!important;border-radius:8px!important}
    .sf-nav-link:hover,.sf-nav-link.active{color:#fff!important;background:rgba(255,255,255,0.06)!important}
    .nav-cta{background:#fff!important;color:#000!important;border-radius:8px!important;padding:8px 18px!important;font-size:13px!important;font-weight:600!important}
    .hero{min-height:100vh!important;display:flex!important;align-items:center!important;padding:120px 5% 80px!important;position:relative!important;overflow:hidden!important}
    .hero::before{content:''!important;position:absolute!important;top:-200px!important;right:-200px!important;width:600px!important;height:600px!important;border-radius:50%!important;background:radial-gradient(circle,rgba(0,255,221,0.12),transparent 70%)!important;pointer-events:none!important}
    .hero-inner{max-width:1100px!important;margin:0 auto!important;display:grid!important;grid-template-columns:1fr 1fr!important;gap:64px!important;align-items:center!important;width:100%!important}
    .hero-badge{display:inline-flex!important;align-items:center!important;gap:8px!important;background:rgba(0,255,221,0.08)!important;border:1px solid rgba(0,255,221,0.2)!important;color:#00ffdd!important;padding:6px 14px!important;border-radius:20px!important;font-size:11px!important;font-weight:700!important;letter-spacing:1.5px!important;text-transform:uppercase!important;margin-bottom:32px!important}
    .hero-badge::before{content:''!important;width:5px!important;height:5px!important;border-radius:50%!important;background:#00ffdd!important;display:block!important}
    .hero h1{font-size:clamp(40px,7vw,80px)!important;font-weight:800!important;line-height:1.02!important;letter-spacing:-3px!important;margin-bottom:24px!important}
    .hero h1 em{background:linear-gradient(135deg,#00ffdd,rgba(0,255,221,0.6))!important;-webkit-background-clip:text!important;-webkit-text-fill-color:transparent!important;font-style:normal!important}
    .hero p{font-size:17px!important;color:rgba(255,255,255,0.55)!important;max-width:440px!important;line-height:1.7!important;margin-bottom:36px!important}
    .hero-btns{display:flex!important;gap:12px!important;flex-wrap:wrap!important}
    .btn-p{background:#00ffdd!important;color:#000!important;border-radius:8px!important;padding:12px 28px!important;font-size:14px!important;font-weight:400!important;box-shadow:rgba(0,0,0,0.17) 0px 0.6px 1.6px -1.5px,rgba(0,0,0,0.14) 0px 2.3px 6px -3px,rgba(0,0,0,0.02) 0px 10px 26px -4.5px!important}
    .btn-p:hover{opacity:0.9!important;transform:translateY(-1px)!important}
    .btn-s{background:transparent!important;border:1px solid rgba(255,255,255,0.08)!important;color:#fff!important;border-radius:8px!important;padding:11px 24px!important;font-size:14px!important}
    .btn-s:hover{border-color:#00ffdd!important;color:#00ffdd!important}
    .hero-visual{position:relative}
    .hero-img{border-radius:16px!important;overflow:hidden!important;border:1px solid rgba(255,255,255,0.08)!important;background:#0c0c0c!important}
    .hero-img img{filter:brightness(0.9)!important}
    .hero-stat-badge{position:absolute!important;bottom:-16px!important;left:-16px!important;background:#0a0a0a!important;border:1px solid rgba(255,255,255,0.08)!important;border-radius:12px!important;padding:16px 20px!important;backdrop-filter:blur(12px)!important}
    .sb-val{font-size:24px!important;font-weight:700!important;color:#00ffdd!important;letter-spacing:-0.5px!important}
    .sb-lbl{font-size:12px!important;color:rgba(255,255,255,0.4)!important;margin-top:2px!important}
    .stats-bar{background:#080808!important;border-top:1px solid rgba(255,255,255,0.06)!important;border-bottom:1px solid rgba(255,255,255,0.06)!important;padding:40px 5%!important}
    .stats-inner{max-width:1100px!important;margin:0 auto!important;display:grid!important;grid-template-columns:repeat(4,1fr)!important;gap:32px!important;text-align:center!important}
    .sv{font-size:clamp(28px,4vw,36px)!important;font-weight:400!important;color:#00ffdd!important;letter-spacing:-1px!important;display:block!important;font-family:'Inter Variable',sans-serif!important}
    .sl{font-size:12px!important;color:#999!important;margin-top:4px!important;display:block!important}
    .section{padding:64px 5%!important}
    .sec-head{margin-bottom:48px!important}
    .sec-eyebrow{display:inline-block!important;font-size:11px!important;font-weight:400!important;color:#00ffdd!important;letter-spacing:2px!important;text-transform:uppercase!important;margin-bottom:12px!important}
    .sec-head h2{font-size:clamp(28px,3.5vw,36px)!important;font-weight:400!important;letter-spacing:-1.44px!important}
    .sec-p{font-size:14px!important;color:#999!important;max-width:480px!important;line-height:1.6!important}
    .srv-grid{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))!important;gap:1px!important;background:rgba(255,255,255,0.06)!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:16px!important;overflow:hidden!important}
    .srv-card{background:#000!important;padding:32px!important;border:1px solid transparent!important;border-radius:16px!important;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)!important}
    .srv-card:hover{background:#080808!important;border-color:rgba(0,255,221,0.15)!important;box-shadow:0 8px 32px rgba(0,255,221,0.08)!important;transform:translateY(-2px)!important}
    .srv-icon{color:#00ffdd!important;margin-bottom:12px!important;display:flex!important;align-items:center!important;font-size:20px!important}
    .srv-card h3{font-size:16px!important;font-weight:400!important;color:#fff!important;letter-spacing:-0.5px!important}
    .srv-card p{font-size:13px!important;color:#999!important;line-height:1.6!important}
    .about-g{display:grid!important;grid-template-columns:1fr 1fr!important;gap:64px!important;align-items:center!important}
    .about-img{border-radius:16px!important;overflow:hidden!important;box-shadow:rgb(0,0,0) 0px 0px 0px 1px inset!important}
    .about-img img{aspect-ratio:4/3!important;object-fit:cover!important}
    .about-text h2{font-size:clamp(24px,3vw,36px)!important;font-weight:400!important;letter-spacing:-1.44px!important}
    .about-text p{color:#999!important;font-size:14px!important;line-height:1.6!important}
    .chk-list li{border-bottom:1px solid rgba(255,255,255,0.06)!important;padding:12px 0!important;font-size:14px!important;color:#999!important}
    .chk-icon{color:#00ffdd!important;font-size:14px!important}
    .port-g{display:grid!important;grid-template-columns:repeat(2,1fr)!important;gap:16px!important}
    .port-card{border-radius:16px!important;overflow:hidden!important;position:relative!important;aspect-ratio:4/3!important;box-shadow:rgb(0,0,0) 0px 0px 0px 1px inset!important}
    .port-card img{height:100%!important}
    .port-info{padding:20px!important;background:#0a0a0a!important}
    .port-info h3{font-size:15px!important;font-weight:400!important;color:#fff!important;letter-spacing:-0.5px!important}
    .port-info span{color:#999!important}
    .rev-g{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))!important;gap:16px!important}
    .rev-card{background:#080808!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:16px!important;padding:24px!important}
    .rev-card:hover{border-color:rgba(0,255,221,0.15)!important;box-shadow:0 8px 32px rgba(0,255,221,0.08)!important;transform:translateY(-2px)!important}
    .rev-stars{color:#fbbf24!important;font-size:13px!important;margin-bottom:12px!important}
    .rev-text{font-size:14px!important;color:#999!important;line-height:1.7!important;margin-bottom:16px!important;font-style:italic!important}
    .rev-avatar{background:rgba(0,255,221,0.08)!important;color:#00ffdd!important}
    .rev-name{color:#fff!important;font-weight:400!important;font-size:13px!important}
    .rev-date{color:#999!important;font-size:11px!important}
    .faq-wrap{max-width:680px!important;margin:0 auto!important}
    .faq-item{border-bottom:1px solid rgba(255,255,255,0.06)!important;border-radius:0!important;border-left:none!important;border-right:none!important;border-top:none!important}
    .faq-q{padding:20px 0!important;font-weight:400!important;font-size:15px!important}
    .faq-q:hover{background:transparent!important}
    .faq-icon{color:#00ffdd!important;font-size:18px!important}
    .faq-a{background:transparent!important;border-top:none!important;padding:0 0 20px!important}
    .cta-band{background:#080808!important;border-top:1px solid rgba(255,255,255,0.06)!important;border-bottom:1px solid rgba(255,255,255,0.06)!important;padding:64px 5%!important;text-align:center!important;position:relative!important;overflow:hidden!important}
    .cta-band::before{content:''!important;position:absolute!important;top:-100px!important;left:50%!important;transform:translateX(-50%)!important;width:500px!important;height:500px!important;background:radial-gradient(circle,rgba(0,255,221,0.06),transparent 70%)!important;pointer-events:none!important}
    .cta-band h2{font-size:clamp(28px,3.5vw,36px)!important;font-weight:400!important;letter-spacing:-1.44px!important;position:relative!important;z-index:1!important}
    .cta-band p{color:#999!important;position:relative!important;z-index:1!important}
    .btn-inv{background:#fff!important;color:#000!important;border-radius:8px!important;position:relative!important;z-index:1!important}
    .ctc-g{display:grid!important;grid-template-columns:1fr 1.4fr!important;gap:64px!important;align-items:start!important}
    .ctc-info h2{font-size:clamp(26px,3vw,36px)!important;font-weight:400!important;letter-spacing:-1.44px!important}
    .ctc-info p{color:#999!important;font-size:14px!important}
    .ctc-ic{background:rgba(0,255,221,0.08)!important;border-radius:8px!important}
    .ctc-lbl{color:#999!important;font-size:11px!important;font-weight:400!important;text-transform:uppercase!important;letter-spacing:0.5px!important}
    .ctc-val{color:#fff!important;font-weight:400!important}
    .ctc-form{background:#080808!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:16px!important;padding:32px!important}
    .ctc-form-title{font-size:18px!important;font-weight:400!important;letter-spacing:-0.5px!important}
    .ff input,.ff select,.ff textarea{background:rgba(255,255,255,0.04)!important;border:1px solid rgba(255,255,255,0.06)!important;border-radius:8px!important;color:#fff!important}
    .ff input:focus,.ff textarea:focus,.ff select:focus{border-color:#00ffdd!important}
    .ff select option{background:#080808!important}
    .sub-btn{background:#00ffdd!important;border-radius:8px!important;color:#000!important}
    .succ{background:rgba(0,255,221,0.08)!important;border:1px solid rgba(0,255,221,0.2)!important;color:#00ffdd!important}
    footer{background:rgba(0,0,0,0.5)!important;color:rgba(255,255,255,0.4)!important;border-top:1px solid rgba(255,255,255,0.06)!important}
    .foot-col h4{color:#fff!important}
    .foot-col a{color:rgba(255,255,255,0.4)!important}
    .foot-col a:hover{color:#00ffdd!important}
    .foot-bot{border-top:1px solid rgba(255,255,255,0.06)!important}
    @media(max-width:768px){
      .hero-inner{grid-template-columns:1fr!important;gap:48px!important}
      .about-g{grid-template-columns:1fr!important}
      .ctc-g{grid-template-columns:1fr!important}
      .port-g{grid-template-columns:1fr!important}
      nav{position:relative!important;top:0!important;left:0!important;transform:none!important;width:100%!important;max-width:100%!important}
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
      var logo=document.querySelector('.nav-logo');
      if(logo){logo.style.cursor='pointer';logo.onclick=function(){showPage('home');};}
      var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});},{threshold:0.1});
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(function(el){obs.observe(el)});
    });`
  });
}
