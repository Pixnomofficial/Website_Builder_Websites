// ==================== TEMPLATE: PREMIUM LUXURY ====================
function buildPremiumLuxury(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"Georgia,'Times New Roman',serif",
    extraCSS:`h1,h2,h3{letter-spacing:2px!important;font-weight:400!important}
    .btn-p,.nav-cta{background:linear-gradient(135deg,#d4af37,#f5c518)!important;color:#000!important}
    .sec-eyebrow,.hero-badge{background:rgba(212,175,55,0.15)!important;border-color:rgba(212,175,55,0.4)!important}
    .hero::before{background:radial-gradient(ellipse at top,rgba(212,175,55,0.15) 0%,transparent 70%)}
    .srv-card:hover{box-shadow:0 8px 40px rgba(212,175,55,0.2)!important}
    nav{border-bottom:1px solid rgba(212,175,55,0.2)!important}
    .hero-img img{filter:sepia(0.15) contrast(1.05)}`
  });
}

