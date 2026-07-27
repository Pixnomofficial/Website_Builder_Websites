// ==================== TEMPLATE: SAAS MODERN ====================
function buildSaasModern(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Inter',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
    extraCSS:`.hero{background:linear-gradient(160deg,#0a0a1a 0%,#1a0a3a 60%,#0a0a1a 100%)}
    .hero::before{background:conic-gradient(from 180deg at 50% 50%,transparent 0deg,${D.accent}15 90deg,transparent 180deg)!important;animation:spin 20s linear infinite}
    @keyframes spin{to{transform:rotate(360deg)}}
    .srv-grid{gap:1px!important;background:rgba(124,58,237,0.2)!important;border-radius:16px!important;overflow:hidden}
    .srv-card{border-radius:0!important;border:none!important}
    .nav-logo{background:linear-gradient(135deg,#7c3aed,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .hero h1{background:linear-gradient(135deg,#fff 60%,${D.accent});-webkit-background-clip:text;-webkit-text-fill-color:transparent}`
  });
}

