// ==================== TEMPLATE: CORPORATE PRO ====================
function buildCorporate(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Roboto',Arial,system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap',
    extraCSS:`.hero{background:linear-gradient(160deg,#003366 0%,#0052cc 100%);padding:80px 5%}
    .hero-inner{grid-template-columns:1.2fr 0.8fr}
    .hero::before{display:none}
    .hero-badge,.sec-eyebrow{border-radius:4px!important}
    .srv-card,.rev-card{border-radius:6px!important}
    h1{letter-spacing:-1px}
    .stats-bar{background:#0052cc!important;border:none!important}
    .sv{color:#fff!important}
    .sl{color:rgba(255,255,255,0.6)!important}`
  });
}

