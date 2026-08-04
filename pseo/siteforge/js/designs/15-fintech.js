// ==================== TEMPLATE: FINTECH GREEN ====================
function buildFintech(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'IBM Plex Mono','Courier New',monospace",
    fontImport:'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap',
    extraCSS:`body{font-family:'IBM Plex Sans',sans-serif!important}
    h1,h2,h3{font-family:'IBM Plex Sans',sans-serif!important}
    .hero-badge,.sec-eyebrow{font-family:'IBM Plex Mono',monospace!important;border-radius:4px!important}
    .stats-bar{background:rgba(0,51,26,0.8)!important}
    .srv-card{border-radius:8px!important;border-left:3px solid ${D.accent}!important}
    nav{border-bottom:1px solid rgba(0,212,170,0.2)!important}
    .hero::before{background:radial-gradient(ellipse at 30% 50%,rgba(0,212,170,0.2) 0%,transparent 60%)!important}`
  });
}

