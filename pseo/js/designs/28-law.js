// ==================== TEMPLATE: LAW FIRM ====================
function buildLaw(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'EB Garamond',Georgia,serif",
    fontImport:'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Libre+Franklin:wght@400;600;700&display=swap',
    extraCSS:`body{font-family:'Libre Franklin',sans-serif!important}
    h1,h2,h3{font-family:'EB Garamond',serif!important;letter-spacing:1px}
    h1{font-size:clamp(40px,5vw,62px)!important;font-weight:400!important}
    .hero{background:linear-gradient(160deg,#0d0d00 0%,#1a1a00 100%)!important;border-bottom:2px solid rgba(184,150,12,0.3)}
    nav{background:rgba(13,13,0,0.98)!important;border-bottom:1px solid rgba(184,150,12,0.3)!important}
    .btn-p{background:linear-gradient(135deg,#b8960c,#d4af37)!important;color:#000!important;border-radius:4px!important}
    .stats-bar{background:rgba(184,150,12,0.1)!important}
    .srv-card{border-radius:0!important;border-bottom:2px solid rgba(184,150,12,0.3)!important;border-top:none!important;border-right:none!important}
    .hero::before{background:radial-gradient(ellipse at 50% 0,rgba(184,150,12,0.15) 0%,transparent 60%)!important}`
  });
}

