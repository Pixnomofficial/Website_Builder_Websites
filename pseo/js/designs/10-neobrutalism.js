// ==================== TEMPLATE: NEOBRUTALISM ====================
function buildNeobrutalism(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Arial Black','Arial',sans-serif",
    extraCSS:`*{border-radius:0!important;font-family:'Arial Black',Arial,sans-serif!important}
    h1,h2,h3{text-transform:uppercase;letter-spacing:1px}
    .btn-p{background:#000!important;color:#fff700!important;border:3px solid #000!important;box-shadow:5px 5px 0 #ff4500!important;border-radius:0!important}
    .btn-p:hover{transform:translate(2px,2px)!important;box-shadow:3px 3px 0 #ff4500!important}
    .srv-card,.rev-card,.ctc-form{border:3px solid #000!important;box-shadow:6px 6px 0 #000!important;background:#fff!important}
    .srv-card:hover{transform:translate(3px,3px)!important;box-shadow:3px 3px 0 #000!important}
    .hero{background:#fff700!important;border-bottom:4px solid #000}
    .hero::before{display:none}
    nav{border-bottom:4px solid #000!important;background:#fff!important}
    .stats-bar{background:#ff4500!important;border:none!important;border-bottom:4px solid #000!important}
    .sv,.sl{color:#fff!important}
    .alt{background:#e0f7fa!important}`
  });
}

