// ==================== TEMPLATE: B&W MINIMALIST ====================
function buildMinimalistBW(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Helvetica Neue','Helvetica',Arial,sans-serif",
    extraCSS:`h1{font-size:clamp(48px,7vw,88px)!important;font-weight:900!important;line-height:0.95!important;letter-spacing:-4px!important}
    h2{font-size:clamp(32px,4vw,56px)!important;font-weight:900!important;letter-spacing:-2px!important}
    .srv-card{border-radius:0!important;border-right:none!important;border-top:none!important;border-bottom:none!important;border-left:3px solid #000!important}
    .srv-card:hover{border-left-color:#000!important;background:#f5f5f5!important;transform:none!important}
    nav{border-bottom:2px solid #000!important}
    .hero::before{display:none}
    .stats-bar{background:#111!important}
    .sv,.sl{color:#fff!important}
    .btn-p{background:#000!important;color:#fff!important;border-radius:0!important}
    .sec-eyebrow{border-radius:0!important;background:transparent!important;border:1px solid #000!important}`
  });
}

