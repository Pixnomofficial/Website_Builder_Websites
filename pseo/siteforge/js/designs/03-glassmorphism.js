// ==================== TEMPLATE: GLASSMORPHISM ====================
function buildGlassmorphism(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Poppins',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap',
    extraCSS:`body{background:linear-gradient(135deg,#1a1a2e 0%,#4a0e8f 50%,#0e3a4a 100%) fixed;min-height:100vh}
    .srv-card,.rev-card,.ctc-form,.port-info{background:rgba(255,255,255,0.08)!important;backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.15)!important}
    .hero-img img{filter:brightness(.7) saturate(1.2)}
    .hero::before{display:none}
    .hero{background:rgba(255,255,255,0.02);backdrop-filter:blur(4px);border-bottom:1px solid rgba(255,255,255,0.1)}
    .stats-bar,.alt{background:rgba(255,255,255,0.03)!important;backdrop-filter:blur(8px)}`
  });
}

