// ==================== TEMPLATE: WEDDING SOFT ====================
function buildWedding(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Playfair Display',Georgia,serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Raleway:wght@400;500;600;700&display=swap',
    extraCSS:`body{font-family:'Raleway',sans-serif!important;background:#fff5f8!important}
    h1,h2,h3{font-family:'Playfair Display',serif!important;font-style:italic}
    h1{font-size:clamp(40px,5.5vw,70px)!important;font-weight:400!important}
    nav{background:rgba(255,245,248,0.98)!important;border-bottom:1px solid #fce4ec!important}
    .hero{background:linear-gradient(160deg,#fff5f8,#fce4ec)!important}
    .hero::before{background:radial-gradient(ellipse at 70% 30%,rgba(233,30,99,0.08) 0%,transparent 60%)!important}
    .stats-bar{background:#e91e63!important;border:none!important}
    .sv,.sl{color:#fff!important}
    .srv-card{border-radius:20px!important}
    .btn-p{border-radius:30px!important}
    .hero-img img{filter:brightness(.9) saturate(1.1) hue-rotate(5deg)}`
  });
}

