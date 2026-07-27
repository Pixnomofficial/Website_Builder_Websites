// ==================== TEMPLATE: MAGAZINE EDITORIAL ====================
function buildMagazine(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Lora',Georgia,serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&family=Source+Sans+Pro:wght@400;600;700&display=swap',
    extraCSS:`body{font-family:'Source Sans Pro',sans-serif!important}
    h1,h2,h3{font-family:'Lora',serif!important}
    h1{font-size:clamp(40px,5vw,68px)!important;font-style:italic}
    nav{border-bottom:3px double #c0392b!important}
    .hero{border-bottom:1px solid #e0d6c8}
    .sec-eyebrow{background:transparent!important;color:#c0392b!important;font-size:12px;font-family:'Source Sans Pro',sans-serif!important;letter-spacing:3px;border:none!important}
    .stats-bar{background:#c0392b!important;border:none!important}
    .sv,.sl{color:#fff!important}
    .srv-card{border-radius:0!important;border:1px solid #e0d6c8!important}
    .port-card img{filter:sepia(.1) contrast(1.05)}`
  });
}

