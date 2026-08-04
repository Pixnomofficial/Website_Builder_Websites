// ==================== TEMPLATE: BIO ORGANIC ====================
function buildBioOrganic(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Merriweather',Georgia,serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Nunito:wght@400;600;700;800&display=swap',
    extraCSS:`body{font-family:'Nunito',sans-serif!important}
    h1,h2,h3{font-family:'Merriweather',serif!important;font-weight:700!important}
    .hero{background:linear-gradient(160deg,#0a1a00 0%,#1a3300 100%)!important}
    nav{border-bottom:1px solid rgba(123,198,126,0.2)!important}
    .srv-card{border-radius:20px!important}
    .btn-p{border-radius:30px!important}
    .hero-badge,.sec-eyebrow{border-radius:30px!important}
    .hero-img img{filter:saturate(1.2) brightness(.85)}`
  });
}

