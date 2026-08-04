// ==================== TEMPLATE: CYBERPUNK ====================
function buildCyberpunk(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Courier New',monospace",
    extraCSS:`*{font-family:'Courier New',monospace!important}
    h1,h2{text-shadow:0 0 20px ${D.accent},0 0 40px ${D.accent}50;letter-spacing:3px!important}
    .btn-p{border:2px solid ${D.accent}!important;background:transparent!important;color:${D.accent}!important;box-shadow:0 0 20px ${D.accent}50;text-shadow:0 0 10px ${D.accent}}
    .btn-p:hover{background:${D.accent}20!important;box-shadow:0 0 40px ${D.accent}80!important}
    .srv-card,.rev-card{border:1px solid ${D.accent}40!important;box-shadow:0 0 10px ${D.accent}15!important}
    .srv-card:hover{box-shadow:0 0 30px ${D.accent}40!important;border-color:${D.accent}!important}
    nav{border-bottom:1px solid ${D.accent}40!important}
    .hero::before{background:radial-gradient(ellipse at 50% 0,${D.accent}20 0%,transparent 60%)!important}
    .hero-badge{animation:blink 2s step-end infinite;border-color:${D.accent}!important}
    @keyframes blink{50%{opacity:0.5}}`
  });
}

