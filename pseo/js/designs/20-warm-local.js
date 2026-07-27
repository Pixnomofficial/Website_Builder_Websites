// ==================== TEMPLATE: WARM & LOCAL ====================
function buildWarmLocal(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Nunito',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap',
    extraCSS:`.hero{background:linear-gradient(160deg,#2d1500 0%,#5c2a00 100%)!important;border-bottom:2px solid rgba(255,140,66,0.3)}
    nav{background:rgba(45,21,0,0.95)!important;border-bottom:1px solid rgba(255,140,66,0.2)!important}
    .stats-bar{background:rgba(255,140,66,0.1)!important}
    .srv-card:hover{border-color:rgba(255,140,66,0.5)!important}
    h1,h2{letter-spacing:-0.5px!important}
    .sec-eyebrow,.hero-badge{font-family:'Nunito',sans-serif!important}
    .hero-img img{filter:warmth(.8) brightness(.85);filter:brightness(.85) sepia(.2)}`
  });
}

