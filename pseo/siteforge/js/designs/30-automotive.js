// ==================== TEMPLATE: AUTOMOTIVE DARK ====================
function buildAutomotive(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Rajdhani','Barlow',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap',
    extraCSS:`h1,h2{text-transform:uppercase!important;letter-spacing:3px!important;font-weight:700!important}
    body{background:#050505!important}
    .hero{background:linear-gradient(160deg,#050505 0%,#1a0505 100%)!important;border-bottom:2px solid rgba(255,61,0,0.4)}
    .hero::before{background:radial-gradient(ellipse at 70% 50%,rgba(255,61,0,0.25) 0%,transparent 60%)!important}
    nav{border-bottom:2px solid rgba(255,61,0,0.3)!important;background:rgba(5,5,5,0.98)!important}
    .stats-bar{background:${D.accent}!important;border:none!important}
    .sv,.sl{color:#fff!important}
    .btn-p{border-radius:4px!important;text-transform:uppercase;letter-spacing:1px}
    .srv-card{border-left:3px solid ${D.accent}!important;border-radius:6px!important}
    .hero-img img{filter:brightness(.7) saturate(1.3) contrast(1.1)}`
  });
}

// ==================== EXPORT FUNCTIONS ====================
