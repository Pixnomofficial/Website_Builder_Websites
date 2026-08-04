// ==================== TEMPLATE: AI STARTUP ====================
function buildAiStartup(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Inter',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
    extraCSS:`body{background:#000510!important}
    .hero{padding:100px 5%;overflow:hidden;position:relative}
    .hero::before{background:conic-gradient(from 0deg at 30% 50%,${D.accent}15 0deg,transparent 60deg,transparent 300deg,${D.accent}10 360deg)!important;animation:rotateBg 15s linear infinite}
    @keyframes rotateBg{to{transform:rotate(360deg) scale(2)}}
    .hero h1{background:linear-gradient(135deg,#c8e8ff 0%,${D.accent} 60%,#fff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:clamp(40px,5.5vw,68px)!important}
    .srv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1px;background:rgba(0,212,255,0.1);border-radius:16px;overflow:hidden}
    .srv-card{border-radius:0!important;border:none!important}`
  });
}

