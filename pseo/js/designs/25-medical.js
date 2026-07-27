// ==================== TEMPLATE: MEDICAL CLEAN ====================
function buildMedical(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Source Sans Pro','Open Sans',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap',
    extraCSS:`body{background:#f0f8ff!important}
    nav{background:rgba(255,255,255,0.98)!important;border-bottom:2px solid #e0eef9!important}
    .hero{background:linear-gradient(160deg,#f0f8ff 0%,#e6f0ff 100%)!important}
    .hero::before{background:radial-gradient(ellipse at 70% 30%,rgba(0,113,188,0.1) 0%,transparent 60%)!important}
    .stats-bar{background:#0071bc!important;border:none!important}
    .sv,.sl{color:#fff!important}
    .srv-card{border-top:3px solid #0071bc!important;border-radius:12px!important}
    .btn-p{border-radius:6px!important}
    .hero-img img{filter:brightness(.95) saturate(0.9) hue-rotate(-5deg)}`
  });
}

