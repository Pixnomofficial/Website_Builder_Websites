// ==================== TEMPLATE: BOLD COLOR ====================
function buildBoldColor(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Oswald',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap',
    extraCSS:`body{background:linear-gradient(135deg,#ff0055 0%,#ff6600 100%)!important;min-height:100vh}
    h1,h2,h3{text-transform:uppercase;letter-spacing:2px}
    nav{background:rgba(0,0,0,0.3)!important;border-bottom:1px solid rgba(255,255,255,0.2)!important}
    .hero{background:transparent!important}
    .hero::before{display:none}
    .stats-bar,.alt{background:rgba(0,0,0,0.15)!important;border:none!important}
    .srv-card,.rev-card,.ctc-form{background:rgba(0,0,0,0.2)!important;border:1px solid rgba(255,255,255,0.2)!important;backdrop-filter:blur(8px)}
    .btn-p{background:#fff!important;color:#ff0055!important;box-shadow:none!important}`
  });
}

