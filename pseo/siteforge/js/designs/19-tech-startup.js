// ==================== TEMPLATE: TECH STARTUP ====================
function buildTechStartup(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Inter',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
    extraCSS:`.hero{background:linear-gradient(135deg,#050510 0%,#100530 40%,#050510 100%)!important}
    .hero h1{font-size:clamp(40px,5.5vw,68px)!important}
    .hero::before{background:radial-gradient(circle at 70% 50%,rgba(99,102,241,0.3) 0%,transparent 60%)!important}
    .srv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:0;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:16px;overflow:hidden}
    .srv-card{border-radius:0!important;border:none!important;border-right:1px solid rgba(99,102,241,0.2)!important;border-bottom:1px solid rgba(99,102,241,0.2)!important}
    .nav-logo{color:${D.accent}!important}
    body{background:#050510!important}`
  });
}

