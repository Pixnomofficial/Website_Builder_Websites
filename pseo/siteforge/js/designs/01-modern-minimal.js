// ==================== TEMPLATE: MODERN MINIMAL ====================
function buildModernMinimal(biz, D, reviews, imgs, portfolio, faqs, typeName, IB, IP, IPS, NAV) {
  const A = D.accent;
  return wrapPage(D, `
<style>
@font-face{font-family:"Cal Sans";src:url("https://fonts.gstatic.com/s/calsans/v2/fdN99sWUv3gWqXxqqSBevloE4LZx.woff2");font-display:swap;font-style:normal;font-weight:400}
:root {
  --color-primary: ${A};
  --color-bg: #dcdcdc;
  --color-bg-secondary: #f0f0f0;
  --color-text: #000000;
  --color-text-secondary: #5c5c5c;
  --color-border: #0c0c0c;
  --color-surface: #ffffff;
  --color-badge: #131313;
  --color-accent-blue: #0000ee;
  --font-heading: "Cal Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius-card: 13px;
  --radius-pill: 13px;
  --radius-button: 13px;
  --shadow-low: rgba(0, 0, 0, 0.08) 0px 1px 2px 0px, rgba(0, 0, 0, 0.04) 0px 2px 6px 0px;
  --shadow-mid: rgba(26, 26, 26, 0.12) 0px 12px 12px -6px;
  --shadow-high: rgba(255, 255, 255, 0.24) 0px 0.5px 0.5px 0px inset, rgba(255, 255, 255, 0.16) 0px 4px 16px 0px inset, rgba(26, 26, 26, 0.08) 0px 1px 2px 0px, rgba(26, 26, 26, 0.04) 0px 2px 6px 0px;
  --space-base: 29px;
  --space-xs: 6px;
  --space-sm: 12px;
  --space-md: 20px;
  --space-lg: 28px;
  --space-xl: 32px;
  --space-2xl: 40px;
}

*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--font-body);background:var(--color-bg);color:var(--color-text);line-height:1.6;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;overflow-x:hidden}

/* SCROLL ANIMATIONS */
.reveal{opacity:0;transform:translateY(60px);transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1),transform 0.9s cubic-bezier(0.16,1,0.3,1)}
.reveal.visible{opacity:1;transform:translateY(0)}
.reveal-left{opacity:0;transform:translateX(-60px);transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1),transform 0.9s cubic-bezier(0.16,1,0.3,1)}
.reveal-left.visible{opacity:1;transform:translateX(0)}
.reveal-right{opacity:0;transform:translateX(60px);transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1),transform 0.9s cubic-bezier(0.16,1,0.3,1)}
.reveal-right.visible{opacity:1;transform:translateX(0)}
.reveal-scale{opacity:0;transform:scale(0.92);transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1),transform 0.9s cubic-bezier(0.16,1,0.3,1)}
.reveal-scale.visible{opacity:1;transform:scale(1)}
.stagger-1{transition-delay:0.08s}.stagger-2{transition-delay:0.16s}.stagger-3{transition-delay:0.24s}.stagger-4{transition-delay:0.32s}.stagger-5{transition-delay:0.4s}.stagger-6{transition-delay:0.48s}

/* NAV */
/* DEMO BANNER */
.demo-banner{position:fixed;top:0;left:0;right:0;z-index:101;background:${A};color:#fff;text-align:center;padding:10px 16px;font-size:13px;font-weight:500;font-family:var(--font-body);letter-spacing:-0.1px;opacity:0;animation:slideDown 0.5s 0.1s forwards}
@keyframes slideDown{from{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}
.demo-banner a{color:#fff;font-weight:500;text-decoration:underline;margin-left:6px}
.demo-banner a:hover{opacity:0.8}
.nav-pill{position:fixed;top:40px;left:0;right:0;z-index:100;padding:16px 0;display:flex;justify-content:center;background:rgba(245,245,245,0.85);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--color-border);opacity:0;animation:springUp 0.6s 0.2s forwards}
.nav-pill-inner{display:flex;align-items:center;gap:20px;border-radius:var(--radius-pill);padding:10px 16px;transition:all 0.3s}
@media(min-width:768px){.nav-pill{padding:20px 0}}
.nav-logo-pill{display:flex;align-items:center;flex-shrink:0;font-size:18px;font-weight:400;color:var(--color-primary);text-decoration:none;letter-spacing:-0.3px;transition:color 0.3s;font-family:var(--font-heading)}
.nav-links-pill{display:none;align-items:center;gap:2px}
.sf-nav-link-pill{font-size:14px;font-weight:500;color:var(--color-text-secondary);text-decoration:none;padding:6px 14px;border-radius:13px;cursor:pointer;transition:all 0.25s;position:relative}
.sf-nav-link-pill:hover,.sf-nav-link-pill.active{color:var(--color-text);background:rgba(0,0,0,0.04)}
.nav-cta-pill{background:var(--color-text);color:var(--color-surface);padding:10px 24px;border-radius:var(--radius-button);font-size:14px;font-weight:500;cursor:pointer;border:none;transition:all 0.3s;font-family:var(--font-body);margin-left:auto}
.nav-cta-pill:hover{transform:translateY(-1px);opacity:0.9}
.ham-pill{display:none;background:none;border:none;cursor:pointer;color:var(--color-text);padding:8px}
.ham-pill svg{width:24px;height:24px}
#mob-menu{display:none;flex-direction:column;gap:8px;padding:100px 24px 24px;background:var(--color-bg);position:fixed;top:0;right:0;width:300px;height:100vh;z-index:2000;box-shadow:-8px 0 40px rgba(0,0,0,0.15);transform:translateX(100%);transition:transform 0.35s cubic-bezier(0.16,1,0.3,1)}
#mob-menu.open{transform:translateX(0)}
.mob-close{position:absolute;top:20px;right:20px;background:none;border:none;color:var(--color-text);cursor:pointer;padding:8px}
.mob-close svg{width:24px;height:24px}
#mob-menu .sf-nav-link-pill{display:block;padding:12px 0;font-size:16px;border-bottom:1px solid var(--color-border)}
#mob-menu .sf-nav-link-pill:last-of-type{border-bottom:none}
@media(min-width:640px){.nav-links-pill{display:flex}}
@media(max-width:639px){.ham-pill{display:block}}

/* HERO */
.hero-section{position:relative;min-height:100vh;overflow:hidden;display:flex;flex-direction:column;background:var(--color-bg)}
.hero-content-inner{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;padding:120px 5% 60px}
.hero-center{text-align:center;max-width:900px}
@keyframes pulse-dot{0%,100%{opacity:1}50%{opacity:0.5}}
#page-home .hero h1,#page-home .hero-section h1{font-family:var(--font-heading);font-size:clamp(32px,5vw,72px) !important;font-weight:400 !important;line-height:1.05 !important;letter-spacing:-0.03em !important;color:var(--color-text);margin-bottom:18px;opacity:0;animation:springUp 0.8s 0.5s forwards}
.hero h1 em{font-style:normal;color:var(--color-primary)}
.hero-sub{font-size:17px;line-height:1.6;color:var(--color-text-secondary);max-width:560px;margin:0 auto;opacity:0;animation:springUp 0.8s 0.7s forwards;letter-spacing:-0.1px}
.hero-btns{display:flex;gap:var(--space-sm);justify-content:center;flex-wrap:wrap;margin-top:24px;opacity:0;animation:springUp 0.8s 0.9s forwards}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes springUp{0%{opacity:0;transform:translateY(30px)}60%{opacity:1;transform:translateY(-4px)}80%{transform:translateY(2px)}100%{opacity:1;transform:translateY(0)}}
.btn-primary{background:var(--color-text);color:var(--color-surface);padding:14px 32px;border-radius:var(--radius-button);font-size:14px;font-weight:500;cursor:pointer;border:none;transition:all 0.3s;text-decoration:none;display:inline-flex;align-items:center;gap:8px;font-family:var(--font-body);box-shadow:var(--shadow-low)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:var(--shadow-mid)}
.btn-secondary{background:var(--color-bg);border:1px solid var(--color-border);color:var(--color-text);padding:14px 32px;border-radius:var(--radius-button);font-size:14px;font-weight:500;cursor:pointer;transition:all 0.3s;text-decoration:none;font-family:var(--font-body)}
.btn-secondary:hover{border-color:var(--color-primary);transform:translateY(-2px)}
.hero-clients{display:flex;align-items:center;gap:var(--space-sm);margin-top:0;margin-bottom:20px;opacity:0;animation:springUp 0.8s 0.4s forwards}
.hero-avatars{display:flex}
.hero-avatars span{width:40px;height:40px;border-radius:50%;border:2px solid var(--color-bg);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:500;color:#fff;margin-left:-10px}
.hero-avatars span:first-child{margin-left:0}
.hero-avatars span:nth-child(1){background:#4f46e5}
.hero-avatars span:nth-child(2){background:#f43f5e}
.hero-avatars span:nth-child(3){background:#10b981}
.hero-clients-text{font-size:13px;color:var(--color-text-secondary);font-weight:500;letter-spacing:0.02em}
.hero-clients-text strong{color:var(--color-text)}

.content-wrapper{position:relative;z-index:3;background:var(--color-bg)}

/* STATS */
.stats-strip{background:var(--color-text);padding:40px 5%;position:relative;overflow:hidden}
.stats-strip::before{content:'';position:absolute;top:-50%;right:-10%;width:300px;height:300px;background:rgba(255,77,0,0.08);border-radius:50%}
.stats-strip::after{content:'';position:absolute;bottom:-60%;left:-5%;width:400px;height:400px;background:rgba(255,77,0,0.05);border-radius:50%}
.stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-xl);text-align:center;position:relative;z-index:1}
@media(max-width:640px){.stats-inner{grid-template-columns:repeat(2,1fr)}}
.stat-item{opacity:0;transform:translateY(30px);transition:all 0.7s cubic-bezier(0.16,1,0.3,1)}
.stat-item.visible{opacity:1;transform:translateY(0)}
.stat-item:nth-child(1){transition-delay:0.1s}
.stat-item:nth-child(2){transition-delay:0.2s}
.stat-item:nth-child(3){transition-delay:0.3s}
.stat-item:nth-child(4){transition-delay:0.4s}
.stat-val{font-size:clamp(28px,4vw,36px);font-weight:500;color:var(--color-surface);display:block}
.stat-lbl{font-size:12px;color:rgba(255,255,255,0.6);font-weight:500;margin-top:4px;display:block}

/* SECTIONS */
.section{padding:var(--space-base) 5%}
.section-inner{max-width:1200px;margin:0 auto}
.alt-bg{background:var(--color-bg-secondary)}
.section-gradient{background:linear-gradient(135deg,var(--color-bg-secondary) 0%,var(--color-bg) 100%)}
.section-header{text-align:center;margin-bottom:56px}
.eyebrow{display:inline-block;background:rgba(255,77,0,0.08);color:var(--color-primary);font-size:11.5px;font-weight:600;padding:5px 14px;border-radius:var(--radius-pill);letter-spacing:0.5px;text-transform:uppercase;margin-bottom:16px}
.section-header h2{font-family:var(--font-heading);font-size:clamp(32px,5vw,56px);font-weight:400;letter-spacing:-0.02em;color:var(--color-text);margin-bottom:14px;line-height:1.08}
.section-header p{font-size:15px;color:var(--color-text-secondary);max-width:520px;margin:0 auto;line-height:1.5}

/* SERVICES */
.services-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:var(--space-lg)}
.service-card{background:rgba(255,255,255,0.85);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid var(--color-border);border-radius:var(--radius-card);padding:var(--space-lg);transition:all 0.4s cubic-bezier(0.16,1,0.3,1);cursor:pointer;position:relative;overflow:hidden}
.service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--color-primary);transform:scaleX(0);transition:transform 0.4s cubic-bezier(0.16,1,0.3,1);transform-origin:left}
.service-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-mid);border-color:var(--color-primary)}
.service-card:hover::before{transform:scaleX(1)}
.service-icon-wrap{width:48px;height:48px;border-radius:var(--radius-card);display:flex;align-items:center;justify-content:center;margin-bottom:16px;font-size:22px;transition:transform 0.3s;background:var(--color-bg);color:var(--color-text)}
.service-card:hover .service-icon-wrap{transform:scale(1.1)}
.service-card h3{font-size:18px;font-weight:500;margin-bottom:8px;color:var(--color-text);transition:color 0.3s}
.service-card:hover h3{color:var(--color-primary)}
.service-card p{font-size:14px;color:var(--color-text-secondary);line-height:1.5}
.service-card .card-arrow{position:absolute;bottom:20px;right:20px;width:32px;height:32px;border-radius:50%;background:var(--color-bg);display:flex;align-items:center;justify-content:center;transition:all 0.3s;opacity:0;transform:translate(-8px,8px)}
.service-card:hover .card-arrow{opacity:1;transform:translate(0,0)}
.card-arrow svg{width:16px;height:16px;color:var(--color-primary)}

/* PORTFOLIO */
.portfolio-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:var(--space-lg)}
.portfolio-card{border-radius:var(--radius-card);overflow:hidden;position:relative;aspect-ratio:4/3;cursor:pointer;border:1px solid var(--color-border);transition:all 0.4s cubic-bezier(0.16,1,0.3,1);background:var(--color-bg-secondary)}
.portfolio-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-mid)}
.portfolio-card img{width:100%;height:100%;object-fit:cover;transition:transform 0.6s cubic-bezier(0.16,1,0.3,1)}
.portfolio-card:hover img{transform:scale(1.05)}
.portfolio-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.85) 0%,transparent 50%);display:flex;flex-direction:column;justify-content:flex-end;padding:24px;opacity:0;transition:opacity 0.4s}
.portfolio-card:hover .portfolio-overlay{opacity:1}
.portfolio-overlay h3{color:#fff;font-size:18px;font-weight:600;margin-bottom:4px;transform:translateY(8px);transition:transform 0.4s}
.portfolio-card:hover .portfolio-overlay h3{transform:translateY(0)}
.portfolio-overlay span{color:rgba(255,255,255,0.6);font-size:12px;transform:translateY(8px);transition:transform 0.4s 0.05s}
.portfolio-card:hover .portfolio-overlay span{transform:translateY(0)}

/* REVIEWS */
.reviews-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:var(--space-lg)}
.review-card{background:rgba(255,255,255,0.8);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--color-border);border-radius:var(--radius-card);padding:var(--space-lg);transition:all 0.4s cubic-bezier(0.16,1,0.3,1);position:relative}
.review-card::after{content:'\\201C';position:absolute;top:16px;right:20px;font-size:56px;color:rgba(0,0,0,0.04);font-weight:900;line-height:1;font-family:Georgia,serif}
.review-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-low)}
.review-stars{color:#f59e0b;font-size:14px;margin-bottom:12px;letter-spacing:2px}
.review-text{font-size:15px;color:var(--color-text-secondary);line-height:1.6;margin-bottom:20px;font-style:italic;position:relative;z-index:1}
.review-author{display:flex;align-items:center;gap:var(--space-sm)}
.review-avatar{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:500;font-size:14px;flex-shrink:0;color:#fff;background:var(--color-primary)}
.review-name{font-weight:600;font-size:14px;color:var(--color-text)}
.review-role{font-size:12px;color:var(--color-text-secondary)}

/* MARQUEE */
.marquee-section{padding:24px 0;background:var(--color-bg-secondary);overflow:hidden;border-top:1px solid var(--color-border);border-bottom:1px solid var(--color-border)}
.marquee-track{display:flex;gap:48px;animation:marquee 20s linear infinite;width:max-content}
.marquee-item{font-family:var(--font-heading);font-size:20px;color:var(--color-text-secondary);white-space:nowrap;opacity:0.5;transition:opacity 0.3s}
.marquee-item:hover{opacity:1}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

/* FAQ */
.faq-list{max-width:720px;margin:0 auto}
.faq-item{border:1px solid var(--color-border);border-radius:var(--radius-card);overflow:hidden;margin-bottom:12px;transition:all 0.3s}
.faq-item:hover{border-color:var(--color-primary)}
.faq-q{padding:18px 22px;cursor:pointer;font-weight:600;font-size:16px;color:var(--color-text);display:flex;justify-content:space-between;align-items:center;background:var(--color-surface);transition:all 0.3s;user-select:none}
.faq-q:hover{background:var(--color-bg-secondary)}
.faq-icon{color:var(--color-primary);font-size:20px;font-weight:300;flex-shrink:0;transition:transform 0.3s;width:24px;text-align:center}
.faq-item.open .faq-icon{transform:rotate(45deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height 0.4s cubic-bezier(0.16,1,0.3,1),padding 0.4s;padding:0 22px;font-size:14px;color:var(--color-text-secondary);line-height:20px;background:var(--color-bg-secondary)}
.faq-item.open .faq-a{max-height:300px;padding:16px 22px 20px}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:48px;align-items:start}
@media(max-width:768px){.contact-grid{grid-template-columns:1fr}}
.contact-info h2{font-family:var(--font-heading);font-size:clamp(24px,3vw,36px);font-weight:400;letter-spacing:normal;margin-bottom:14px}
.contact-info>p{color:var(--color-text-secondary);line-height:20px;margin-bottom:28px;font-size:14px}
.contact-detail{display:flex;align-items:center;gap:14px;padding:16px 0;border-bottom:1px solid var(--color-border)}
.contact-detail:first-of-type{border-top:1px solid var(--color-border)}
.c-icon{width:42px;height:42px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;background:var(--color-bg);color:var(--color-text)}
.c-label{font-size:11.5px;color:var(--color-text-secondary);font-weight:600;text-transform:uppercase;letter-spacing:0.5px}
.c-val{font-size:14px;font-weight:600;color:var(--color-text)}
.contact-form{background:rgba(255,255,255,0.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--color-border);border-radius:var(--radius-card);padding:var(--space-2xl);box-shadow:var(--shadow-low)}
.form-field{margin-bottom:18px}
.form-field label{display:block;font-size:12px;color:var(--color-text-secondary);font-weight:600;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.3px}
.form-field input,.form-field select,.form-field textarea{width:100%;padding:12px 16px;border:1px solid var(--color-border);border-radius:var(--radius-button);font-size:14px;color:var(--color-text);background:var(--color-surface);font-family:var(--font-body);outline:none;transition:all 0.3s}
.form-field input:focus,.form-field textarea:focus,.form-field select:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px rgba(255,77,0,0.08)}
.form-field textarea{min-height:100px;resize:vertical}
.form-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:500px){.form-grid-2{grid-template-columns:1fr}}
.submit-btn{width:100%;padding:14px;background:var(--color-primary);border:none;border-radius:var(--radius-button);color:#fff;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.3s;font-family:var(--font-body);box-shadow:0 4px 14px rgba(255,77,0,0.3)}
.submit-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(255,77,0,0.4)}
.success-msg{display:none;background:#ecfdf5;border:1px solid #6ee7b7;color:#065f46;padding:12px;border-radius:13px;text-align:center;font-size:13px;margin-top:12px}

/* FOOTER */
footer{background:var(--color-text);color:rgba(255,255,255,0.6);padding:60px 5% 28px}
.footer-inner{max-width:1100px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.footer-grid{grid-template-columns:1fr}}
.footer-brand .logo{font-size:20px;font-weight:400;color:var(--color-primary);margin-bottom:10px;display:inline-block;font-family:var(--font-heading)}
.footer-brand p{font-size:13px;line-height:1.7}
.footer-col h4{color:#fff;font-size:12px;font-weight:600;margin-bottom:14px;text-transform:uppercase;letter-spacing:0.5px}
.footer-col a{display:block;color:rgba(255,255,255,0.5);font-size:13px;text-decoration:none;padding:4px 0;transition:color 0.2s;cursor:pointer}
.footer-col a:hover{color:var(--color-primary)}
.footer-bottom{border-top:1px solid rgba(255,255,255,0.08);padding-top:20px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:12px}
.footer-bottom a{color:inherit;text-decoration:none;transition:color 0.2s}
.footer-bottom a:hover{color:#fff}

/* MOBILE BOTTOM NAV */
.mobile-bottom-nav{display:none;position:fixed;bottom:0;left:0;width:100%;background:rgba(220,220,220,0.95);backdrop-filter:blur(12px);border-top:1px solid var(--color-border);z-index:2000;height:60px;align-items:center;justify-content:space-around}
.mb-nav-item{display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--color-text-secondary);font-size:10px;font-weight:500;text-decoration:none;flex:1;height:100%;transition:color 0.2s}
.mb-nav-item svg{width:20px;height:20px;margin-bottom:3px}
.mb-nav-item.active{color:var(--color-primary)}
.mb-center{flex:0 0 70px;display:flex;justify-content:center;cursor:pointer}
.mb-center-in{width:56px;height:56px;background:var(--color-primary);border-radius:50%;padding:4px;box-shadow:0 -4px 12px rgba(255,77,0,0.3);display:flex;align-items:center;justify-content:center;transform:translateY(-12px);color:#fff;font-weight:500;font-size:16px}
@media(max-width:768px){.mobile-bottom-nav{display:flex}body{padding-bottom:65px}}

/* FLOAT BTN */
.float-btn{position:fixed;bottom:80px;right:20px;background:var(--color-primary);color:#fff;width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(255,77,0,0.4);z-index:100;text-decoration:none;transition:transform 0.3s}
.float-btn:hover{transform:scale(1.08)}
@media(min-width:769px){.float-btn{bottom:30px;right:30px;width:56px;height:56px}}

/* MODAL */
.sf-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(8px);z-index:3000;align-items:center;justify-content:center;padding:20px}
.sf-modal-inner{background:var(--color-surface);border-radius:var(--radius-card);width:100%;max-width:500px;padding:var(--space-2xl);position:relative;animation:modalIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards;transform:translateY(20px) scale(0.95);opacity:0}
@keyframes modalIn{to{transform:translateY(0) scale(1);opacity:1}}
.sf-modal-close{position:absolute;top:16px;right:16px;background:none;border:none;color:var(--color-text);cursor:pointer;transition:transform 0.3s;padding:8px}
.sf-modal-close:hover{transform:rotate(90deg)}
.sf-modal-close svg{width:20px;height:20px}
.check-list{list-style:none;margin-top:16px}
.check-list li{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--color-border);font-size:14px;color:var(--color-text);font-weight:500}
.check-list li::before{content:'\\2713';width:22px;height:22px;background:var(--color-primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;flex-shrink:0}

/* CTA BANNER */
.cta-banner{background:var(--color-text);padding:var(--space-base) 5%;text-align:center;position:relative;overflow:hidden}
.cta-banner::before{content:'';position:absolute;top:-100px;right:-100px;width:400px;height:400px;background:rgba(255,77,0,0.1);border-radius:50%}
.cta-banner::after{content:'';position:absolute;bottom:-150px;left:-80px;width:500px;height:500px;background:rgba(255,77,0,0.06);border-radius:50%}
.cta-banner h2{font-family:var(--font-heading);font-size:clamp(32px,5vw,52px);font-weight:400;color:var(--color-surface);margin-bottom:14px;position:relative;z-index:1}
.cta-banner p{color:rgba(255,255,255,0.6);font-size:15px;margin-bottom:36px;position:relative;z-index:1}
.cta-banner .btn-primary{background:var(--color-primary);color:#fff;box-shadow:0 4px 20px rgba(255,77,0,0.3);position:relative;z-index:1}
.cta-banner .btn-primary:hover{box-shadow:0 8px 30px rgba(255,77,0,0.4)}

.pricing-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:var(--space-lg);max-width:800px;margin:0 auto}
.pricing-card{background:rgba(255,255,255,0.8);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--color-border);border-radius:var(--radius-card);padding:var(--space-2xl);transition:all 0.4s cubic-bezier(0.16,1,0.3,1);position:relative;overflow:hidden}
.pricing-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-mid)}
.pricing-card.featured{border-color:var(--color-primary);box-shadow:0 8px 32px rgba(255,77,0,0.12)}
.pricing-card.featured::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--color-primary)}
.pricing-badge{display:inline-block;background:rgba(255,77,0,0.08);color:var(--color-primary);font-size:11.5px;font-weight:600;padding:4px 12px;border-radius:var(--radius-pill);margin-bottom:16px;text-transform:uppercase;letter-spacing:0.5px}
.pricing-card h3{font-size:28px;font-weight:500;margin-bottom:8px;color:var(--color-text)}
.pricing-card .price{font-size:32px;font-weight:800;color:var(--color-text);margin:16px 0 4px}
.pricing-card .price span{font-size:14px;font-weight:500;color:var(--color-text-secondary)}
.pricing-card .price-desc{font-size:12px;color:var(--color-text-secondary);margin-bottom:24px}
.pricing-features{list-style:none;margin-bottom:28px}
.pricing-features li{display:flex;align-items:center;gap:10px;padding:8px 0;font-size:14px;color:var(--color-text);border-bottom:1px solid var(--color-border)}
.pricing-features li:last-child{border-bottom:none}
.pricing-check{width:20px;height:20px;border-radius:50%;background:rgba(16,185,129,0.1);color:#10b981;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0}
.pricing-btn{width:100%;padding:12px;border-radius:var(--radius-button);font-size:14px;font-weight:500;cursor:pointer;transition:all 0.3s;font-family:var(--font-body);border:none}
.pricing-btn-outline{background:var(--color-surface);border:1px solid var(--color-border);color:var(--color-text)}
.pricing-btn-outline:hover{border-color:var(--color-primary);color:var(--color-primary)}
.pricing-btn-primary{background:var(--color-primary);color:#fff;box-shadow:0 4px 14px rgba(255,77,0,0.3)}
.pricing-btn-primary:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(255,77,0,0.4)}
</style>

<!-- DEMO BANNER -->
<div class="demo-banner">This is a demo site — Make It Yours<a href="https://lonarx.us/appointment.html" target="_blank">Book Appointment</a></div>

<!-- NAV -->
<div class="nav-pill" id="navPill">
  <div class="nav-pill-inner">
    <a href="#" class="nav-logo-pill" onclick="showPage('home');return false">
      <svg width="24" height="24" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right:8px">
        <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="currentColor"/>
        <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="currentColor"/>
      </svg>
      ${biz.name.split(' ')[0]}
    </a>
    <nav class="nav-links-pill">
      <span class="sf-nav-link-pill active" data-page="home" onclick="showPage('home')">Home</span>
      <span class="sf-nav-link-pill" data-page="about" onclick="showPage('about')">About</span>
      <span class="sf-nav-link-pill" data-page="services" onclick="showPage('services')">Services</span>
      <span class="sf-nav-link-pill" data-page="portfolio" onclick="showPage('portfolio')">Works</span>
      <span class="sf-nav-link-pill" data-page="reviews" onclick="showPage('reviews')">Reviews</span>
      <span class="sf-nav-link-pill" data-page="pricing" onclick="showPage('pricing')">Pricing</span>
      <span class="sf-nav-link-pill" data-page="faq" onclick="showPage('faq')">FAQ</span>
    </nav>
    <button class="nav-cta-pill" onclick="showPage('contact')">Contact Us</button>
    <button class="ham-pill" onclick="toggleMob()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button>
  </div>
</div>

<div id="mob-menu">
  <button class="mob-close" onclick="toggleMob()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg></button>
  <span class="sf-nav-link-pill" data-page="home" onclick="showPage('home')">Home</span>
  <span class="sf-nav-link-pill" data-page="about" onclick="showPage('about')">About</span>
  <span class="sf-nav-link-pill" data-page="services" onclick="showPage('services')">Services</span>
  <span class="sf-nav-link-pill" data-page="portfolio" onclick="showPage('portfolio')">Works</span>
  <span class="sf-nav-link-pill" data-page="reviews" onclick="showPage('reviews')">Reviews</span>
  <span class="sf-nav-link-pill" data-page="pricing" onclick="showPage('pricing')">Pricing</span>
  <span class="sf-nav-link-pill" data-page="faq" onclick="showPage('faq')">FAQ</span>
  <span class="sf-nav-link-pill" data-page="contact" onclick="showPage('contact')">Contact</span>
</div>

<!-- HOME PAGE -->
<div id="page-home" class="sf-page">
  <div class="hero-section">
    <div class="hero-content-inner">
      <div class="hero-center">
        <div class="hero-clients">
          <div class="hero-avatars"><span>S</span><span>J</span><span>M</span></div>
          <div class="hero-clients-text">Trusted by <strong>${biz.reviews}+</strong> homeowners.</div>
        </div>
        <h1 style="font-family:var(--font-heading);font-size:clamp(32px,5vw,72px);font-weight:400;line-height:1.05;letter-spacing:-0.03em;color:var(--color-text);margin-bottom:18px"><em>${biz.name}</em><br>Professional <em>${typeName}</em><br>solutions in <em>${biz.city}</em></h1>
        <p class="hero-sub">${biz.tagline}</p>
        <div class="hero-btns">
          <button class="btn-primary" onclick="showPage('contact')">View Plans &rarr;</button>
          <button class="btn-secondary" onclick="showPage('services')">Our Services</button>
        </div>
      </div>
    </div>
  </div>

  <div class="content-wrapper">
    <div class="stats-strip">
      <div class="stats-inner">
        <div class="stat-item"><span class="stat-val">${biz.rating}&#9733;</span><span class="stat-lbl">Google Rating</span></div>
        <div class="stat-item"><span class="stat-val">${biz.reviews}+</span><span class="stat-lbl">Happy Clients</span></div>
        <div class="stat-item"><span class="stat-val">${biz.years}+</span><span class="stat-lbl">Years Experience</span></div>
        <div class="stat-item"><span class="stat-val">${biz.projects}+</span><span class="stat-lbl">Projects Done</span></div>
      </div>
    </div>

    <div class="marquee-section">
      <div class="marquee-track">
        ${biz.services.map(s => `<span class="marquee-item">${s}</span><span class="marquee-item">&bull;</span>`).join('')}
        ${biz.services.map(s => `<span class="marquee-item">${s}</span><span class="marquee-item">&bull;</span>`).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-inner">
        <div class="section-header reveal">
          <div class="eyebrow">Our Services</div>
          <h2>What We Do Best</h2>
          <p>Professional ${typeName.toLowerCase()} solutions for homes and businesses across ${biz.city}</p>
        </div>
        <div class="services-grid">
          ${biz.services.slice(0, 6).map((s, i) => `<div class="service-card reveal stagger-${i + 1}" onclick="openServiceModal('${s.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', '${getServiceDescription(s, biz.type).replace(/'/g, "\\'").replace(/"/g, "&quot;")}')"><div class="service-icon-wrap">${getServiceIcon(s)}</div><h3>${s}</h3><p>${getServiceDescription(s, biz.type)}</p><div class="card-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></div></div>`).join('')}
        </div>
      </div>
    </div>

    <div class="section alt-bg">
      <div class="section-inner">
        <div class="section-header reveal">
          <div class="eyebrow">Our Works</div>
          <h2>Recent Projects</h2>
          <p>${biz.projects}+ successful projects completed across ${biz.city}</p>
        </div>
        <div class="portfolio-grid">
          ${portfolio.slice(0, 3).map((p, i) => `<div class="portfolio-card reveal stagger-${i + 1}"><img src="${resolveImageUrl(p.img, IP)}" alt="${p.title}" loading="lazy"><div class="portfolio-overlay"><h3>${p.title}</h3><span>${p.year} &middot; ${biz.city}</span></div></div>`).join('')}
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-inner">
        <div class="section-header reveal">
          <div class="eyebrow">Testimonials</div>
          <h2>What Clients Say</h2>
          <p>${biz.rating}&#9733; average from ${biz.reviews}+ verified reviews</p>
        </div>
        <div class="reviews-grid">
          ${reviews.slice(0, 3).map((r, i) => `<div class="review-card reveal stagger-${i + 1}"><div class="review-stars">${'&#9733;'.repeat(r.stars)}${'&#9734;'.repeat(5 - r.stars)}</div><p class="review-text">"${r.text}"</p><div class="review-author"><div class="review-avatar">${r.name[0]}</div><div><div class="review-name">${r.name}</div><div class="review-role">${r.date || 'Recently'}</div></div></div></div>`).join('')}
        </div>
      </div>
    </div>

    <div class="cta-banner reveal">
      <h2>Ready to Get Started?</h2>
      <p>Book your service today and experience the ${biz.name} difference.</p>
      <button class="btn-primary" onclick="showPage('contact')">Book a Service &rarr;</button>
    </div>
  </div>
</div>

<!-- SERVICES PAGE -->
<div id="page-services" class="sf-page" style="display:none">
  <div class="section" style="padding-top:120px">
    <div class="section-inner">
      <div class="section-header reveal"><div class="eyebrow">All Services</div><h2>Comprehensive Solutions</h2><p>Professional ${typeName.toLowerCase()} services tailored to your needs in ${biz.city}</p></div>
      <div class="services-grid">
        ${biz.services.map((s, i) => `<div class="service-card reveal stagger-${(i % 6) + 1}" onclick="openServiceModal('${s.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', '${getServiceDescription(s, biz.type).replace(/'/g, "\\'").replace(/"/g, "&quot;")}')"><div class="service-icon-wrap">${getServiceIcon(s)}</div><h3>${s}</h3><p>${getServiceDescription(s, biz.type)}</p><div class="card-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></div></div>`).join('')}
      </div>
    </div>
  </div>
</div>

<!-- ABOUT PAGE -->
<div id="page-about" class="sf-page" style="display:none">
  <div class="section" style="padding-top:120px">
    <div class="section-inner">
      <div class="contact-grid">
        <div class="reveal-left"><div style="border-radius:13px;overflow:hidden;aspect-ratio:4/3;background:#e8eaed"><img src="${resolveImageUrl(imgs.about, IP)}" alt="About ${biz.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover"></div></div>
        <div class="reveal-right">
          <div class="eyebrow">About Us</div>
          <h2 style="font-family:var(--font-heading);font-size:clamp(28px,4vw,44px);font-weight:400;letter-spacing:-0.02em;margin-bottom:16px">The Story Behind ${biz.name}</h2>
          <p style="color:var(--color-text-secondary);line-height:1.8;margin-bottom:12px;font-size:15px">With over <strong>${biz.years} years</strong> of dedicated service in ${biz.city}, ${biz.name} has built a reputation for delivering exceptional ${biz.type} services with integrity, skill, and a genuine care for our customers.</p>
          <p style="color:var(--color-text-secondary);line-height:1.8;margin-bottom:12px;font-size:15px">Founded by seasoned ${biz.type} professionals, our company started with a simple mission: provide reliable, high-quality ${typeName.toLowerCase()} services at fair prices.</p>
          <ul class="check-list">
            <li>Fully licensed &amp; insured professionals</li>
            <li>Transparent pricing &mdash; no hidden fees</li>
            <li>${biz.emergency === 'yes' ? '24/7 emergency response available' : 'Flexible scheduling to suit your needs'}</li>
            <li>30-day workmanship guarantee on all jobs</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- PORTFOLIO PAGE -->
<div id="page-portfolio" class="sf-page" style="display:none">
  <div class="section" style="padding-top:120px">
    <div class="section-inner">
      <div class="section-header reveal"><div class="eyebrow">Our Works</div><h2>Recent Projects</h2><p>${biz.projects}+ successful projects completed across ${biz.city}</p></div>
      <div class="portfolio-grid">
        ${portfolio.map((p, i) => `<div class="portfolio-card reveal stagger-${(i % 6) + 1}"><img src="${resolveImageUrl(p.img, IP)}" alt="${p.title}" loading="lazy"><div class="portfolio-overlay"><h3>${p.title}</h3><span>${p.year} &middot; ${biz.city}</span></div></div>`).join('')}
      </div>
    </div>
  </div>
</div>

<!-- REVIEWS PAGE -->
<div id="page-reviews" class="sf-page" style="display:none">
  <div class="section" style="padding-top:120px">
    <div class="section-inner">
      <div class="section-header reveal"><div class="eyebrow">Client Reviews</div><h2>What Our Clients Say</h2><p>${biz.rating}&#9733; average on Google from ${biz.reviews}+ verified reviews</p></div>
      <div class="reviews-grid">
        ${reviews.map((r, i) => `<div class="review-card reveal stagger-${(i % 6) + 1}"><div class="review-stars">${'&#9733;'.repeat(r.stars)}${'&#9734;'.repeat(5 - r.stars)}</div><p class="review-text">"${r.text}"</p><div class="review-author"><div class="review-avatar">${r.name[0]}</div><div><div class="review-name">${r.name}</div><div class="review-role">${r.date || 'Recently'}</div></div></div></div>`).join('')}
      </div>
      <div style="background:rgba(79,70,229,0.04);border:1px solid rgba(79,70,229,0.1);border-radius:13px;padding:48px;text-align:center;margin-top:48px" class="reveal">
        <div style="font-size:56px;font-weight:800;color:var(--color-primary);line-height:1">${biz.rating}</div>
        <div style="color:#f59e0b;font-size:22px;margin:8px 0">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div style="font-size:16px;font-weight:600;color:var(--color-text);margin-bottom:4px">${biz.reviews}+ Google Reviews</div>
        <div style="color:var(--color-text-secondary);font-size:13px;margin-bottom:20px">Based on verified reviews from customers across ${biz.city}</div>
        ${biz.google ? `<button class="btn-primary" onclick="window.open('${biz.google}','_blank')">&#11088; Leave a Review</button>` : ''}
      </div>
    </div>
  </div>
</div>

<!-- PRICING PAGE -->
<div id="page-pricing" class="sf-page" style="display:none">
  <div class="section" style="padding-top:120px">
    <div class="section-inner">
      <div class="section-header reveal"><div class="eyebrow">Pricing</div><h2>Simple, Transparent Plans</h2><p>Choose the plan that fits your needs</p></div>
      <div class="pricing-grid">
        <div class="pricing-card reveal stagger-1">
          <h3>Standard Plan</h3>
          <p class="price-desc">Ideal for lean teams or startups needing clean, fast service delivery.</p>
          <div class="price">$149<span>/visit</span></div>
          <ul class="pricing-features">
            <li><span class="pricing-check">&#10003;</span> Single service visit</li>
            <li><span class="pricing-check">&#10003;</span> Diagnosis &amp; quote</li>
            <li><span class="pricing-check">&#10003;</span> Standard response time</li>
            <li><span class="pricing-check">&#10003;</span> 30-day guarantee</li>
          </ul>
          <button class="pricing-btn pricing-btn-outline" onclick="showPage('contact')">Get Started</button>
        </div>
        <div class="pricing-card featured reveal stagger-2">
          <div class="pricing-badge">Most Popular</div>
          <h3>Premium Plan</h3>
          <p class="price-desc">A complete experience &mdash; tailored service, polished execution, and flexible collaboration.</p>
          <div class="price">$399<span>/visit</span></div>
          <ul class="pricing-features">
            <li><span class="pricing-check">&#10003;</span> Priority scheduling</li>
            <li><span class="pricing-check">&#10003;</span> Full inspection &amp; repair</li>
            <li><span class="pricing-check">&#10003;</span> Same-day response</li>
            <li><span class="pricing-check">&#10003;</span> 90-day guarantee</li>
            <li><span class="pricing-check">&#10003;</span> Free follow-up visit</li>
          </ul>
          <button class="pricing-btn pricing-btn-primary" onclick="showPage('contact')">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- FAQ PAGE -->
<div id="page-faq" class="sf-page" style="display:none">
  <div class="section" style="padding-top:120px">
    <div class="section-inner">
      <div class="section-header reveal"><div class="eyebrow">FAQ</div><h2>Frequently Asked Questions</h2><p>Quick answers about our ${typeName.toLowerCase()} services</p></div>
      <div class="faq-list">
        ${faqs.map(([q, a], i) => `<div class="faq-item reveal stagger-${(i % 6) + 1}"><div class="faq-q" onclick="toggleFaq(this)">${q}<span class="faq-icon">+</span></div><div class="faq-a">${a}</div></div>`).join('')}
      </div>
    </div>
  </div>
</div>

<!-- CONTACT PAGE -->
<div id="page-contact" class="sf-page" style="display:none">
  <div class="section" style="padding-top:120px">
    <div class="section-inner">
      <div class="section-header reveal"><div class="eyebrow">Contact Us</div><h2>Get in Touch</h2><p>We respond within 30 minutes during business hours</p></div>
      <div class="contact-grid">
        <div class="reveal-left">
          <h2 style="font-family:var(--font-heading);font-size:clamp(24px,3vw,32px);font-weight:400;margin-bottom:14px">Ready to book a service?</h2>
          <p style="color:var(--color-text-secondary);line-height:1.8;margin-bottom:28px;font-size:15px">Our team is available ${biz.hours}.</p>
          <div class="contact-detail"><div class="c-icon">&#128222;</div><div><div class="c-label">Phone</div><div class="c-val">${biz.phone}</div></div></div>
          <div class="contact-detail"><div class="c-icon">&#9993;&#65039;</div><div><div class="c-label">Email</div><div class="c-val">${biz.email}</div></div></div>
          <div class="contact-detail"><div class="c-icon">&#128205;</div><div><div class="c-label">Address</div><div class="c-val">${biz.address}</div></div></div>
          <div class="contact-detail"><div class="c-icon">&#128336;</div><div><div class="c-label">Working Hours</div><div class="c-val">${biz.hours}</div></div></div>
        </div>
        <div class="contact-form reveal-right">
          <h3 style="font-size:18px;font-weight:500;margin-bottom:20px">Request a Callback</h3>
          <div class="form-grid-2">
            <div class="form-field"><label>Your Name</label><input type="text" placeholder="Your Name"></div>
            <div class="form-field"><label>Phone Number</label><input type="tel" placeholder="${biz.phone}"></div>
          </div>
          <div class="form-grid-2">
            <div class="form-field"><label>Email</label><input type="email" placeholder="Email Address"></div>
            <div class="form-field"><label>Property Address</label><input type="text" placeholder="Street, City, Zip"></div>
          </div>
          <div class="form-field"><label>Service Required</label><select>${biz.services.map(s => `<option>${s}</option>`).join('')}</select></div>
          <div class="form-field"><label>Message</label><textarea placeholder="Describe your requirement..."></textarea></div>
          <button class="submit-btn" onclick="submitForm(this)">&#128222; Request Callback</button>
          <div class="success-msg">&#9989; We'll call you back within 30 minutes!</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo">${biz.name}</div>
        <p>Your trusted ${typeName.toLowerCase()} partner in ${biz.city}. Professional, reliable, affordable.</p>
      </div>
      <div class="footer-col"><h4>Services</h4>${biz.services.slice(0, 4).map(s => `<a onclick="showPage('services')">${s}</a>`).join('')}</div>
      <div class="footer-col"><h4>Company</h4><a onclick="showPage('about')">About Us</a><a onclick="showPage('portfolio')">Works</a><a onclick="showPage('reviews')">Reviews</a><a onclick="showPage('faq')">FAQ</a></div>
      <div class="footer-col"><h4>Contact</h4><a href="tel:${biz.phone}">${biz.phone}</a><a href="mailto:${biz.email}">${biz.email}</a><a>${biz.city}</a></div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} ${biz.name}. All rights reserved.</span>
      <span style="display:flex;gap:16px"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></span>
    </div>
  </div>
</footer>

<!-- MOBILE BOTTOM NAV -->
<div class="mobile-bottom-nav">
  <div class="mb-nav-item active" data-page="home" onclick="showPage('home')"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg><span>Home</span></div>
  <div class="mb-nav-item" data-page="services" onclick="showPage('services')"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg><span>Services</span></div>
  <div class="mb-center" onclick="showPage('home')"><div class="mb-center-in">${biz.name.split(' ')[0][0]}</div></div>
  <div class="mb-nav-item" data-page="portfolio" onclick="showPage('portfolio')"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg><span>Works</span></div>
  <div class="mb-nav-item" data-page="contact" onclick="showPage('contact')"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg><span>Contact</span></div>
</div>

<a href="tel:${biz.phone}" class="float-btn">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
</a>

<!-- MODAL -->
<div id="srvModal" class="sf-modal" onclick="if(event.target===this) this.style.display='none'">
  <div class="sf-modal-inner">
    <button class="sf-modal-close" onclick="document.getElementById('srvModal').style.display='none'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg></button>
    <h2 id="srvModalTitle" style="margin-bottom:14px;font-size:22px;font-weight:500">Service Details</h2>
    <p id="srvModalDesc" style="color:var(--color-text-secondary);line-height:1.6;margin-bottom:20px;font-size:14px"></p>
    <ul class="check-list" style="margin-bottom:28px"><li>Free estimates provided</li><li>Satisfaction guaranteed</li><li>Professional execution</li></ul>
    <button class="btn-primary" style="width:100%;justify-content:center" onclick="document.getElementById('srvModal').style.display='none';showPage('contact')">Get a Quote</button>
  </div>
</div>

<script>
function initReveal() {
  var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stat-item');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function(el) { observer.observe(el); });
}
initReveal();
${NAV}
</${'script'}>
`);
}
