// ==================== TEMPLATE: CLASSIC ELEGANT ====================
function buildClassicElegant(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Playfair Display',Georgia,serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Lato:wght@400;700&display=swap',
    extraCSS:`body{font-family:'Lato',sans-serif}
    h1,h2,h3{font-family:'Playfair Display',serif!important;font-weight:700}
    .srv-card{border-radius:0!important;border:1px solid #d4c5a9!important}
    .btn-p{border-radius:4px!important;box-shadow:none!important}
    .sec-eyebrow{border-radius:0!important;font-family:'Lato',sans-serif;letter-spacing:3px}
    .hero{padding:100px 5%}
    .hero::before{background:radial-gradient(ellipse at 70% 20%,rgba(139,115,85,0.12) 0%,transparent 60%)}`
  });
}

