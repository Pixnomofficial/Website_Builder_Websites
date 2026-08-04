// ==================== TEMPLATE: RETRO VINTAGE ====================
function buildRetro(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Courier New','Lucida Console',monospace",
    extraCSS:`body{background:#1a0a00!important}
    h1,h2{font-family:'Georgia',serif!important;letter-spacing:1px}
    .hero{background:linear-gradient(160deg,#1a0a00,#2d1400)!important;border-bottom:2px solid ${D.accent}}
    .srv-card,.rev-card{background:rgba(255,119,0,0.08)!important;border:1px solid rgba(255,119,0,0.3)!important}
    .nav-logo{font-family:'Georgia',serif!important}
    .stats-bar{background:rgba(255,119,0,0.1)!important}
    .sec-eyebrow,.hero-badge{border-radius:0!important;font-family:'Courier New',monospace!important}
    .hero-img img{filter:sepia(0.4) contrast(1.1) brightness(0.85)}`
  });
}

