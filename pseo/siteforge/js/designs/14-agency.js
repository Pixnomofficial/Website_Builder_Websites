// ==================== TEMPLATE: AGENCY CREATIVE ====================
function buildAgency(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Plus Jakarta Sans',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
    extraCSS:`.hero{background:#0a0a0a;clip-path:polygon(0 0,100% 0,100% 88%,0 100%);padding:100px 5% 140px!important}
    .hero::before{background:radial-gradient(ellipse at 70% 50%,rgba(255,0,153,0.25) 0%,transparent 60%)!important}
    h1{font-size:clamp(44px,6vw,72px)!important;font-weight:800!important}
    .nav-logo{background:linear-gradient(135deg,#ff0099,#7700ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .srv-card:hover{border-color:${D.accent}!important}
    .cta-band{clip-path:polygon(0 12%,100% 0,100% 88%,0 100%);padding:100px 5% 140px!important}`
  });
}

