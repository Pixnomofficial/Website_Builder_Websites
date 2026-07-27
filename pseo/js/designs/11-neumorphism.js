// ==================== TEMPLATE: NEUMORPHISM ====================
function buildNeumorphism(biz,D,r,i,p,f,t,IB,IP,IPS,N){
  return buildGenericMultipage(biz,D,r,i,p,f,t,IB,IP,IPS,N,{
    bodyFont:"'Poppins',system-ui,sans-serif",
    fontImport:'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap',
    extraCSS:`body{background:#e0e5ec!important}
    .srv-card,.rev-card,.ctc-form{background:#e0e5ec!important;border:none!important;box-shadow:8px 8px 16px #b8bec7,-8px -8px 16px #ffffff!important}
    .srv-card:hover{box-shadow:12px 12px 24px #b0b5bd,-12px -12px 24px #ffffff!important;transform:none!important}
    .btn-p{box-shadow:6px 6px 12px #b8bec7,-6px -6px 12px #ffffff!important}
    nav{background:#e0e5ec!important;box-shadow:0 2px 12px rgba(0,0,0,0.08)!important;border:none!important}
    .hero{background:#e0e5ec!important}
    .hero::before{display:none}
    .stats-bar,.alt{background:#d6dbe5!important}
    .hero-img,.about-img,.port-card{box-shadow:8px 8px 20px #b8bec7,-8px -8px 20px #ffffff}`
  });
}

