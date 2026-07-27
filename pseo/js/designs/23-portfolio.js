// ==================== TEMPLATE: PORTFOLIO DARK ====================
function buildPortfolioDark(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'DM Sans',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap',
    extraCSS:`.hero{background:#0a0a0a!important;padding:110px 5% 90px!important}
    .hero::before{display:none}
    h1{font-size:clamp(48px,7vw,88px)!important;font-weight:800!important;line-height:0.95!important;letter-spacing:-3px!important}
    .hero-badge{background:rgba(245,197,24,0.1)!important;border:1px solid rgba(245,197,24,0.25)!important}
    nav{background:rgba(10,10,10,0.95)!important}
    .port-g{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .port-card img{height:280px;filter:grayscale(0.2) contrast(1.05)}
    .srv-card{background:rgba(245,197,24,0.05)!important;border-color:rgba(245,197,24,0.15)!important}`
  });
}

