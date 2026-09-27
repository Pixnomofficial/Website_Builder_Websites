// ==================== TEMPLATE: MODERN MINIMAL ====================
function buildModernMinimal(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Inter',system-ui,sans-serif",
    headFont:"'Cal Sans',sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap@font-face{font-family:"Cal Sans";src:url("https://fonts.gstatic.com/s/calsans/v2/fdN99sWUv3gWqXxqqSBevloE4LZx.woff2");font-display:swap}',
    A:'#ff4d00',BG:'#dcdcdc',TC:'#000000',
    cardBg:'#ffffff',borderColor:'#0c0c0c',
    accentBg:'rgba(255,77,0,0.08)',
    showMarquee:true,
    marqueeItems:['Pipe Repair','Drain Cleaning','Water Heater','Fixture Installation','Emergency Service','Sewer Line'],
    extraJS:`document.addEventListener('DOMContentLoaded',function(){
      var logo=document.querySelector('.nav-logo');
      if(logo){logo.style.cursor='pointer';logo.onclick=function(){showPage('home');};}
      var reveals=document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale');
      var observer=new IntersectionObserver(function(entries){
        entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});
      },{threshold:0.15});
      reveals.forEach(function(el){observer.observe(el);});
    });`,
    extraCSS:`
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#dcdcdc;color:#000;font-family:'Inter',sans-serif}
    h1,h2,h3{font-family:'Cal Sans',sans-serif;font-weight:400}
    nav{background:rgba(220,220,220,0.9)!important;backdrop-filter:blur(12px)!important;border-bottom:1px solid #0c0c0c!important;padding:16px 5%!important}
    .nav-inner{max-width:1100px;margin:0 auto;height:auto!important;display:flex;align-items:center;gap:20px;padding:10px 16px;border-radius:100px}
    .nav-logo{font-size:18px;font-weight:700;color:#ff4d00!important;font-family:'Cal Sans',sans-serif}
    .sf-nav-link{color:#666!important;font-size:14px!important;font-weight:500!important;padding:6px 14px!important;border-radius:8px!important}
    .sf-nav-link:hover,.sf-nav-link.active{color:#000!important;background:rgba(0,0,0,0.04)!important}
    .nav-cta{background:#000!important;color:#fff!important;border-radius:100px!important;padding:10px 24px!important;font-size:14px!important;font-weight:500!important}
    .hero{padding:120px 5% 60px!important;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center}
    .hero::before{content:''!important;position:absolute!important;inset:0!important;background:radial-gradient(ellipse 60% 40% at 50% 30%,rgba(255,77,0,0.06) 0%,transparent 70%)!important;pointer-events:none!important}
    .hero-inner{max-width:900px!important;margin:0 auto!important;display:block!important}
    .hero-badge{display:inline-flex!important;align-items:center!important;gap:8px!important;background:#131313!important;border:none!important;color:#fff!important;font-size:12px!important;font-weight:500!important;padding:8px 18px!important;border-radius:100px!important;margin-bottom:32px!important}
    .hero-badge::before{content:''!important;width:8px!important;height:8px!important;border-radius:50%!important;background:#10b981!important;display:block!important;animation:pulse-dot 2s infinite!important}
    @keyframes pulse-dot{0%,100%{opacity:1}50%{opacity:0.5}}
    .hero h1{font-size:clamp(48px,8vw,100px)!important;font-weight:400!important;line-height:1.05!important;letter-spacing:normal!important;color:#000!important;margin-bottom:24px!important;font-family:'Cal Sans',sans-serif}
    .hero h1 em{color:#ff4d00!important;font-style:normal}
    .hero p{font-size:14px!important;color:#666!important;max-width:560px!important;margin:0 auto 36px!important;line-height:20px!important}
    .hero-btns{justify-content:center!important;display:flex!important;gap:12px!important;flex-wrap:wrap!important}
    .btn-p{background:#fff!important;color:#000!important;border-radius:100px!important;padding:12px 28px!important;font-size:14px!important;font-weight:500!important;box-shadow:rgba(0,0,0,0.08) 0px 1px 2px 0px,rgba(0,0,0,0.04) 0px 2px 6px 0px!important}
    .btn-p:hover{transform:translateY(-2px)!important;box-shadow:rgba(26,26,26,0.12) 0px 12px 12px -6px!important}
    .btn-s{background:transparent!important;border:1px solid #0c0c0c!important;color:#000!important;border-radius:100px!important;padding:12px 28px!important;font-size:14px!important;font-weight:500!important}
    .btn-s:hover{border-color:#ff4d00!important;color:#ff4d00!important}
    .hero-visual{display:none!important}
    .stats-bar{background:#000!important;padding:40px 5%!important;border:none!important}
    .stats-inner{max-width:1100px!important;margin:0 auto!important;display:grid!important;grid-template-columns:repeat(4,1fr)!important;gap:32px!important;text-align:center!important}
    .sv{font-size:clamp(28px,4vw,36px)!important;font-weight:700!important;color:#fff!important;display:block!important}
    .sl{font-size:12px!important;color:rgba(255,255,255,0.6)!important;margin-top:4px!important;display:block!important}
    .section{padding:65px 5%!important}
    .sec-head{text-align:center!important;margin-bottom:56px!important}
    .sec-eyebrow{display:inline-block!important;background:rgba(255,77,0,0.08)!important;color:#ff4d00!important;font-size:11.5px!important;font-weight:600!important;padding:5px 14px!important;border-radius:100px!important;letter-spacing:0.5px!important;text-transform:uppercase!important;margin-bottom:16px!important}
    .sec-head h2{font-size:clamp(28px,4vw,48px)!important;font-weight:400!important;letter-spacing:normal!important;font-family:'Cal Sans',sans-serif}
    .sec-p{font-size:14px!important;color:#666!important;max-width:520px!important;margin:0 auto!important;line-height:20px!important}
    .srv-grid{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))!important;gap:28px!important}
    .srv-card{background:#fff!important;border:1px solid #0c0c0c!important;border-radius:50px!important;padding:28px!important;transition:all 0.4s cubic-bezier(0.16,1,0.3,1)!important;position:relative!important;overflow:hidden!important}
    .srv-card::after{content:''!important;position:absolute!important;top:0!important;left:0!important;right:0!important;height:3px!important;background:#ff4d00!important;transform:scaleX(0)!important;transition:transform 0.4s cubic-bezier(0.16,1,0.3,1)!important;transform-origin:left!important}
    .srv-card:hover::after{transform:scaleX(1)!important}
    .srv-card:hover{transform:translateY(-6px)!important;box-shadow:rgba(26,26,26,0.12) 0px 12px 12px -6px!important;border-color:#ff4d00!important}
    .srv-icon{font-size:22px!important;width:48px!important;height:48px!important;border-radius:50px!important;display:flex!important;align-items:center!important;justify-content:center!important;margin-bottom:16px!important;background:#dcdcdc!important}
    .srv-card h3{font-size:16px!important;font-weight:700!important;margin-bottom:8px!important}
    .srv-card p{font-size:14px!important;color:#666!important;line-height:20px!important}
    .about-g{display:grid!important;grid-template-columns:1fr 1fr!important;gap:56px!important;align-items:center!important}
    .about-img{border-radius:50px!important;overflow:hidden!important}
    .about-text h2{font-size:clamp(24px,3vw,38px)!important;font-weight:400!important;font-family:'Cal Sans',sans-serif}
    .about-text p{color:#666!important;line-height:20px!important;font-size:14px!important}
    .chk-list li{border-bottom:1px solid #0c0c0c!important;padding:8px 0!important;font-size:14px!important}
    .chk-icon{color:#ff4d00!important}
    .port-g{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(320px,1fr))!important;gap:28px!important}
    .port-card{border-radius:50px!important;overflow:hidden!important;position:relative!important;aspect-ratio:4/3!important;border:1px solid #0c0c0c!important;background:#f0f0f0!important}
    .port-card img{height:220px!important}
    .port-info{background:#fff!important;border:1px solid #0c0c0c!important;border-radius:0 0 50px 50px!important;border-top:none!important;padding:16px!important}
    .rev-g{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))!important;gap:28px!important}
    .rev-card{background:#fff!important;border:1px solid #0c0c0c!important;border-radius:50px!important;padding:28px!important;position:relative!important}
    .rev-card::after{content:'\\201C'!important;position:absolute!important;top:16px!important;right:20px!important;font-size:56px!important;color:rgba(0,0,0,0.04)!important;font-weight:900!important;line-height:1!important;font-family:Georgia,serif!important}
    .rev-card:hover{transform:translateY(-4px)!important;box-shadow:rgba(0,0,0,0.08) 0px 1px 2px 0px,rgba(0,0,0,0.04) 0px 2px 6px 0px!important}
    .rev-text{font-size:14px!important;color:#666!important;font-style:italic!important;margin-bottom:20px!important;line-height:20px!important}
    .rev-avatar{background:#ff4d00!important;color:#fff!important}
    .rev-name{color:#000!important;font-weight:600!important}
    .rev-date{color:#666!important}
    .faq-wrap{max-width:720px!important;margin:0 auto!important}
    .faq-item{border:1px solid #0c0c0c!important;border-radius:50px!important;margin-bottom:12px!important}
    .faq-item:hover{border-color:#ff4d00!important}
    .faq-q{background:#fff!important;font-weight:600!important;font-size:16px!important;padding:18px 22px!important}
    .faq-q:hover{background:#f0f0f0!important}
    .faq-icon{color:#ff4d00!important}
    .faq-a{background:#f0f0f0!important;border-top:1px solid #0c0c0c!important}
    .cta-band{background:#000!important;padding:65px 5%!important;text-align:center!important;position:relative!important;overflow:hidden!important}
    .cta-band::before{content:''!important;position:absolute!important;top:-100px!important;right:-100px!important;width:400px!important;height:400px!important;background:rgba(255,77,0,0.1)!important;border-radius:50%!important}
    .cta-band::after{content:''!important;position:absolute!important;bottom:-150px!important;left:-80px!important;width:500px!important;height:500px!important;background:rgba(255,77,0,0.06)!important;border-radius:50%!important}
    .cta-band h2{color:#fff!important;font-family:'Cal Sans',sans-serif!important;font-weight:400!important;position:relative!important;z-index:1!important}
    .cta-band p{color:rgba(255,255,255,0.6)!important;position:relative!important;z-index:1!important}
    .btn-inv{background:#ff4d00!important;color:#fff!important;border-radius:100px!important;box-shadow:0 4px 20px rgba(255,77,0,0.3)!important;position:relative!important;z-index:1!important}
    .btn-inv:hover{box-shadow:0 8px 30px rgba(255,77,0,0.4)!important}
    .ctc-g{display:grid!important;grid-template-columns:1fr 1.3fr!important;gap:48px!important;align-items:start!important}
    .ctc-info h2{font-family:'Cal Sans',sans-serif!important;font-weight:400!important}
    .ctc-info p{color:#666!important;font-size:14px!important}
    .ctc-row{border-bottom:1px solid #0c0c0c!important;padding:16px 0!important}
    .ctc-ic{background:#dcdcdc!important}
    .ctc-form{background:#fff!important;border:1px solid #0c0c0c!important;border-radius:50px!important;padding:40px!important;box-shadow:rgba(0,0,0,0.08) 0px 1px 2px 0px,rgba(0,0,0,0.04) 0px 2px 6px 0px!important}
    .ctc-form-title{font-family:'Cal Sans',sans-serif!important;font-weight:400!important}
    .ff input,.ff select,.ff textarea{border:1px solid #0c0c0c!important;border-radius:100px!important;background:#fff!important;padding:12px 16px!important}
    .ff input:focus,.ff textarea:focus,.ff select:focus{border-color:#ff4d00!important;box-shadow:0 0 0 3px rgba(255,77,0,0.08)!important}
    .sub-btn{background:#ff4d00!important;border-radius:100px!important;color:#fff!important;box-shadow:0 4px 14px rgba(255,77,0,0.3)!important;padding:14px!important}
    .sub-btn:hover{transform:translateY(-1px)!important;box-shadow:0 6px 20px rgba(255,77,0,0.4)!important}
    footer{background:#000!important;color:rgba(255,255,255,0.6)!important;padding:60px 5% 28px!important;border-top:none!important}
    .foot-brand .fl{color:#ff4d00!important;font-family:'Cal Sans',sans-serif!important}
    .foot-col h4{color:#fff!important}
    .foot-col a{color:rgba(255,255,255,0.5)!important}
    .foot-col a:hover{color:#ff4d00!important}
    .foot-bot{border-top:1px solid rgba(255,255,255,0.08)!important}
    @media(max-width:768px){
      .about-g{grid-template-columns:1fr!important}
      .ctc-g{grid-template-columns:1fr!important}
      .hero h1{font-size:clamp(32px,8vw,56px)!important}
    }
    /* Scroll reveal animations */
    .reveal{opacity:0;transform:translateY(30px);transition:all 0.6s cubic-bezier(0.16,1,0.3,1)}
    .reveal-left{opacity:0;transform:translateX(-40px);transition:all 0.6s cubic-bezier(0.16,1,0.3,1)}
    .reveal-right{opacity:0;transform:translateX(40px);transition:all 0.6s cubic-bezier(0.16,1,0.3,1)}
    .reveal-scale{opacity:0;transform:scale(0.95);transition:all 0.6s cubic-bezier(0.16,1,0.3,1)}
    .reveal.visible,.reveal-left.visible,.reveal-right.visible,.reveal-scale.visible{opacity:1;transform:translate(0) scale(1)}
    .stagger-1{transition-delay:0.05s}.stagger-2{transition-delay:0.1s}.stagger-3{transition-delay:0.15s}
    .stagger-4{transition-delay:0.2s}.stagger-5{transition-delay:0.25s}.stagger-6{transition-delay:0.3s}
    /* Hero fadeUp entrance */
    @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
    .hero-badge{animation:fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both}
    .hero h1{animation:fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both}
    .hero p{animation:fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s both}
    .hero-btns{animation:fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.4s both}
    `
  });
}
