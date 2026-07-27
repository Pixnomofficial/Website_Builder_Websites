// ==================== TEMPLATE: EDUCATION BRIGHT ====================
function buildEducation(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Nunito',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap',
    extraCSS:`body{background:#fff5e6!important}
    nav{background:rgba(255,245,230,0.98)!important;border-bottom:2px solid #ffe0b2!important}
    .hero{background:linear-gradient(160deg,#fff5e6 0%,#ffe0b2 100%)!important}
    .hero::before{background:radial-gradient(ellipse at 70% 30%,rgba(255,152,0,0.15) 0%,transparent 60%)!important}
    .stats-bar{background:#ff9800!important;border:none!important}
    .sv,.sl{color:#fff!important}
    .srv-card{border-radius:20px!important;border-top:3px solid #ff9800!important;border-left:none!important;border-right:none!important}
    .srv-card::after{display:none}
    .btn-p{border-radius:30px!important}
    h1,h2{font-weight:900!important}
    .hero-img img{filter:brightness(.9) saturate(1.1)}`
  });
}

