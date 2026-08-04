// ==================== TEMPLATE: HOLOGRAPHIC ====================
function buildHolographic(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Rajdhani','Exo',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap',
    extraCSS:`body{background:linear-gradient(135deg,#0d0d2e,#2e0d2e,#0d2e2e)!important;background-attachment:fixed}
    h1{background:linear-gradient(135deg,#ff00ff,#00ffff,#ffff00,#ff00ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:clamp(40px,5.5vw,66px)!important}
    .btn-p{background:linear-gradient(135deg,#ff00ff,#00ffff)!important;color:#000!important}
    .srv-card,.rev-card{border:1px solid rgba(224,64,251,0.3)!important;box-shadow:0 0 20px rgba(224,64,251,0.1)!important}
    nav{border-bottom:1px solid rgba(224,64,251,0.2)!important;background:rgba(13,13,46,0.9)!important}
    .hero::before{background:conic-gradient(from 0deg,rgba(255,0,255,0.2),rgba(0,255,255,0.2),rgba(255,255,0,0.2),rgba(255,0,255,0.2))!important;animation:holo 8s linear infinite}
    @keyframes holo{to{transform:rotate(360deg) scale(1.5)}}`
  });
}

