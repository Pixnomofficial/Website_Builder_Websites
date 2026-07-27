// ==================== TEMPLATE: REAL ESTATE ====================
function buildRealEstate(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Montserrat',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap',
    extraCSS:`.hero{min-height:85vh;padding:0!important;position:relative;display:flex;align-items:center}
    .hero::before,.hero::after{content:'';position:absolute;inset:0}
    .hero::before{background:url('${resolveImageUrl(i.hero, IP)}') center/cover no-repeat;filter:brightness(.45)}
    .hero::after{background:linear-gradient(to right,rgba(13,33,55,0.95) 40%,rgba(13,33,55,0.4) 100%)}
    .hero-inner{position:relative;z-index:2;grid-template-columns:1fr}
    .hero-visual{display:none!important}
    .hero h1{font-size:clamp(40px,5.5vw,68px)}
    .hero-stat-badge{display:none}
    .stats-bar{background:#0d2137!important}`
  });
}

