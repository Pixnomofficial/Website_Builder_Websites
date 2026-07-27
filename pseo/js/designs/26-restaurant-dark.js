// ==================== TEMPLATE: RESTAURANT DARK ====================
function buildRestaurantDark(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Cormorant Garamond','Georgia',serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Mulish:wght@400;600;700&display=swap',
    extraCSS:`body{font-family:'Mulish',sans-serif!important}
    h1,h2,h3{font-family:'Cormorant Garamond',serif!important;font-style:italic}
    h1{font-size:clamp(44px,6vw,76px)!important;font-weight:600!important}
    .hero{background:linear-gradient(160deg,#1a0800 0%,#2d1200 100%)!important;border-bottom:1px solid rgba(232,168,56,0.3)}
    nav{border-bottom:1px solid rgba(232,168,56,0.2)!important;background:rgba(26,8,0,0.95)!important}
    .stats-bar{background:rgba(232,168,56,0.1)!important}
    .srv-card{border-radius:8px!important}
    .hero-img img{filter:brightness(.7) saturate(1.3)}`
  });
}

