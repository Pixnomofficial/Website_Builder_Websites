// ==================== TEMPLATE: SPORTS ENERGY ====================
function buildSports(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Barlow Condensed','Impact',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&display=swap',
    extraCSS:`h1,h2{text-transform:uppercase!important;letter-spacing:2px!important;font-size:clamp(40px,6vw,76px)!important}
    .hero{background:linear-gradient(135deg,#0d1a0d 0%,#0d2d0d 100%)!important;border-bottom:3px solid ${D.accent}}
    .hero::before{background:radial-gradient(ellipse at 50% 100%,rgba(57,255,20,0.2) 0%,transparent 60%)!important}
    .btn-p{border-radius:4px!important;text-transform:uppercase;letter-spacing:1px}
    .stats-bar{background:${D.accent}!important;border:none!important}
    .sv,.sl{color:#000!important}
    .srv-card{border-top:3px solid ${D.accent}!important;border-radius:8px!important}
    nav{border-bottom:3px solid ${D.accent}!important}`
  });
}

