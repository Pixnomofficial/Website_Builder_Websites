// ==================== TEMPLATE: CORPORATE PRO ====================
// Standalone builder: emits its own markup via wrapPage(), so the CSS below
// applies to real elements. Does NOT use buildGenericMultipage — that engine
// ignores htmlBody/scripts and only understands its own class names.
function buildCorporate(biz, D, reviews, imgs, portfolio, faqs, typeName, IB, IP, IPS, NAV) {
  const brandName = biz.name.split(' ')[0];
  const year = new Date().getFullYear();
  const heroA = resolveImageUrl(imgs.hero, IP);
  const heroB = resolveImageUrl(imgs.about, IP);
  const heroC = resolveImageUrl(imgs.hero, IP);

  return wrapPage(D, `
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
      :root {
        --bg: #f8f8f8;
        --bg-secondary: #f5f5f5;
        --bg-soft: #dffab7;
        --text: #000000;
        --text-secondary: #475466;
        --primary: #bdff1c;
        --primary-hover: #eaffb9;
        --secondary: #854dff;
        --border: #f5f5f5;
        --border-strong: #e8e8e8;
        --dark: #0b111d;
        --shadow-low: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;
        --shadow-deep: rgba(0, 0, 0, 0.08) 5px 25px 25px 0px;
        --shadow-md: rgba(0, 0, 0, 0.1) 0px 4px 12px 0px;
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        --transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html, body {
        background: var(--bg);
        color: var(--text);
        font-family: 'Poppins', system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 500;
        line-height: 1.4;
        scroll-behavior: smooth;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      img {
        max-width: 100%;
        display: block;
        transition: var(--transition);
      }

      ::selection {
        background: var(--primary);
        color: #000;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
      }

      /* ===== ANIMATIONS ===== */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInDown {
        from {
          transform: translateY(-100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-8px);
        }
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.6;
        }
      }

      /* ===== TOP BAR ===== */
      .top-bar {
        background: var(--dark);
        color: #fff;
        font-size: 13px;
        padding: 10px 24px;
        text-align: center;
        letter-spacing: -0.2px;
        animation: slideInDown 0.6s ease-out;
      }

      .top-bar span {
        color: var(--primary);
        font-weight: 600;
      }

      /* ===== NAVIGATION ===== */
      .nav {
        position: sticky;
        top: 16px;
        z-index: 50;
        margin: 16px auto 0;
        max-width: 1200px;
        padding: 0 24px;
        animation: slideInDown 0.6s ease-out 0.1s both;
      }

      .nav-inner {
        background: rgba(255, 255, 255, 0.92);
        backdrop-filter: blur(12px);
        border: 1px solid var(--border);
        border-radius: 99px;
        padding: 10px 12px 10px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: var(--shadow-low);
        transition: var(--transition);
      }

      .nav-inner:hover {
        box-shadow: var(--shadow-md);
      }

      .brand {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: -0.5px;
        background: linear-gradient(135deg, var(--dark), var(--primary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .brand-dot {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--primary);
        display: grid;
        place-items: center;
        box-shadow: 0 4px 12px rgba(189, 255, 28, 0.3);
        transition: var(--transition-fast);
      }

      .brand-dot:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(189, 255, 28, 0.4);
      }

      .brand-dot svg {
        width: 16px;
        height: 16px;
        color: #000;
      }

      .nav-links {
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .nav-links a {
        padding: 8px 14px;
        border-radius: 99px;
        font-size: 14px;
        color: var(--text);
        transition: var(--transition-fast);
        position: relative;
        overflow: hidden;
      }

      .nav-links a::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--bg-secondary);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: -1;
      }

      .nav-links a:hover::before {
        transform: scaleX(1);
      }

      .nav-cta {
        background: var(--primary);
        color: #000;
        border-radius: 99px;
        padding: 12px 20px;
        font-weight: 600;
        font-size: 14px;
        border: none;
        cursor: pointer;
        transition: var(--transition-fast);
        box-shadow: 0 4px 12px rgba(189, 255, 28, 0.3);
        position: relative;
        overflow: hidden;
      }

      .nav-cta::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.5s ease;
      }

      .nav-cta:hover::before {
        left: 100%;
      }

      .nav-cta:hover {
        background: var(--primary-hover);
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(189, 255, 28, 0.4);
      }

      .nav-cta:active {
        transform: translateY(0);
      }

      .burger {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        transition: var(--transition-fast);
      }

      .burger:hover {
        opacity: 0.7;
      }

      .burger svg {
        width: 22px;
        height: 22px;
      }

      @media(max-width:900px) {
        .nav-links {
          display: none;
        }
        .burger {
          display: block;
        }
      }

      /* ===== HERO ===== */
      .hero {
        padding: 80px 24px 40px;
        text-align: center;
      }

      .hero-tag {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 99px;
        padding: 8px 16px 8px 8px;
        font-size: 13px;
        color: var(--text-secondary);
        margin-bottom: 32px;
        box-shadow: var(--shadow-low);
        animation: fadeInUp 0.6s ease-out;
      }

      .hero-tag .pill {
        background: var(--primary);
        color: #000;
        font-weight: 600;
        font-size: 11px;
        padding: 4px 10px;
        border-radius: 99px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        animation: pulse 2s ease-in-out infinite;
      }

      .hero h1 {
        font-size: 72px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: -2.4px;
        max-width: 900px;
        margin: 0 auto 24px;
        animation: fadeInUp 0.8s ease-out 0.1s both;
      }

      .hero h1 em {
        font-style: normal;
        color: var(--secondary);
        background: linear-gradient(135deg, var(--secondary), #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero p {
        font-size: 20px;
        color: var(--text-secondary);
        max-width: 640px;
        margin: 0 auto 40px;
        letter-spacing: -0.4px;
        line-height: 1.5;
        animation: fadeInUp 0.8s ease-out 0.2s both;
      }

      .hero-btns {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
        animation: fadeInUp 0.8s ease-out 0.3s both;
      }

      .btn-primary {
        background: var(--primary);
        color: #000;
        border: none;
        border-radius: 10px;
        padding: 16px 28px;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        font-family: inherit;
        transition: var(--transition-fast);
        box-shadow: 0 4px 16px rgba(189, 255, 28, 0.3);
        position: relative;
        overflow: hidden;
      }

      .btn-primary::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
      }

      .btn-primary:active::before {
        width: 300px;
        height: 300px;
      }

      .btn-primary:hover {
        background: var(--primary-hover);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(189, 255, 28, 0.4);
      }

      .btn-primary:active {
        transform: translateY(0);
      }

      .btn-secondary {
        background: #fff;
        border: 1px solid var(--border-strong);
        color: #000;
        border-radius: 10px;
        padding: 16px 28px;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        font-family: inherit;
        transition: var(--transition-fast);
      }

      .btn-secondary:hover {
        background: var(--bg-secondary);
        border-color: var(--primary);
        box-shadow: 0 4px 12px rgba(189, 255, 28, 0.15);
      }

      /* ===== HERO VISUAL ===== */
      .hero-visual {
        max-width: 1080px;
        margin: 64px auto 0;
        background: var(--bg-soft);
        border-radius: 24px;
        padding: 24px;
        position: relative;
        overflow: hidden;
        animation: scaleIn 0.8s ease-out 0.4s both;
      }

      .hero-visual::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -10%;
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(189, 255, 28, 0.1), transparent);
        border-radius: 50%;
        animation: float 8s ease-in-out infinite;
      }

      .hero-visual-inner {
        background: #fff;
        border-radius: 16px;
        padding: 32px;
        display: grid;
        grid-template-columns: 1fr 1.4fr;
        gap: 32px;
        align-items: center;
        position: relative;
        z-index: 1;
      }

      .stat-card {
        background: var(--bg-secondary);
        border-radius: 16px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        transition: var(--transition);
        animation: slideInLeft 0.6s ease-out;
        animation-fill-mode: both;
      }

      .stat-card:nth-child(1) { animation-delay: 0.4s; }
      .stat-card:nth-child(2) { animation-delay: 0.5s; background: var(--primary); }
      .stat-card:nth-child(3) { animation-delay: 0.6s; }

      .stat-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
      }

      .stat-card .val {
        font-size: 44px;
        font-weight: 600;
        letter-spacing: -1.5px;
        line-height: 1;
      }

      .stat-card .lbl {
        font-size: 14px;
        color: var(--text-secondary);
      }

      .stat-card:nth-child(2) .lbl {
        color: #000;
      }

      .hero-visual-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      .hero-img {
        border-radius: 16px;
        overflow: hidden;
        aspect-ratio: 1/1;
        background: #eee;
        animation: slideInRight 0.6s ease-out;
        animation-fill-mode: both;
      }

      .hero-img:nth-child(1) { animation-delay: 0.5s; }
      .hero-img:nth-child(2) { animation-delay: 0.6s; }
      .hero-img:nth-child(3) { animation-delay: 0.7s; grid-column: 1/-1; }

      .hero-img:hover img {
        transform: scale(1.05);
      }

      .hero-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media(max-width:900px) {
        .hero h1 {
          font-size: 44px;
          letter-spacing: -1.5px;
        }
        .hero p {
          font-size: 16px;
        }
        .hero-visual-inner {
          grid-template-columns: 1fr;
        }
      }

      /* ===== TRUST BAR ===== */
      .trust {
        padding: 64px 24px 24px;
        text-align: center;
      }

      .trust-title {
        font-size: 14px;
        color: var(--text-secondary);
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-bottom: 24px;
        font-family: 'IBM Plex Mono', monospace;
        animation: fadeInUp 0.6s ease-out;
      }

      .trust-row {
        display: flex;
        justify-content: center;
        gap: 48px;
        flex-wrap: wrap;
        opacity: 0.7;
        animation: fadeInUp 0.8s ease-out 0.1s both;
      }

      .trust-row div {
        font-size: 22px;
        font-weight: 600;
        letter-spacing: -0.6px;
        transition: var(--transition);
      }

      .trust-row div:hover {
        color: var(--primary);
      }

      /* ===== SECTIONS ===== */
      .section {
        padding: 96px 24px;
      }

      .section-alt {
        background: var(--bg-secondary);
      }

      .eyebrow {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 13px;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 20px;
        display: inline-block;
        background: #fff;
        border: 1px solid var(--border-strong);
        border-radius: 99px;
        padding: 6px 14px;
        animation: fadeInUp 0.6s ease-out;
      }

      .sec-head {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 64px;
      }

      .sec-head h2 {
        font-size: 56px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: -2px;
        margin-bottom: 20px;
        animation: fadeInUp 0.8s ease-out 0.1s both;
      }

      .sec-head p {
        font-size: 20px;
        color: var(--text-secondary);
        letter-spacing: -0.4px;
        line-height: 1.5;
        animation: fadeInUp 0.8s ease-out 0.2s both;
      }

      /* ===== BENEFITS ===== */
      .benefits {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .benefit-card {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 24px;
        padding: 40px 32px;
        transition: var(--transition);
        position: relative;
        overflow: hidden;
      }

      .benefit-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary), var(--secondary));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .benefit-card:hover::before {
        transform: scaleX(1);
      }

      .benefit-card:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-deep);
      }

      .benefit-icon {
        width: 56px;
        height: 56px;
        background: var(--bg-soft);
        border-radius: 16px;
        display: grid;
        place-items: center;
        margin-bottom: 24px;
        transition: var(--transition);
      }

      .benefit-card:hover .benefit-icon {
        transform: scale(1.1) rotate(5deg);
        background: var(--primary);
      }

      .benefit-icon svg {
        width: 26px;
        height: 26px;
        color: #000;
      }

      .benefit-card h3 {
        font-size: 22px;
        font-weight: 600;
        letter-spacing: -0.6px;
        margin-bottom: 12px;
        transition: var(--transition);
      }

      .benefit-card:hover h3 {
        color: var(--primary);
      }

      .benefit-card p {
        color: var(--text-secondary);
        font-size: 16px;
        line-height: 1.55;
        letter-spacing: -0.3px;
      }

      @media(max-width:900px) {
        .benefits {
          grid-template-columns: 1fr;
        }
        .sec-head h2 {
          font-size: 36px;
          letter-spacing: -1.4px;
        }
      }

      /* ===== SERVICES ===== */
      .services {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .service {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 24px;
        padding: 32px;
        cursor: pointer;
        transition: var(--transition);
        position: relative;
        overflow: hidden;
      }

      .service::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at top right, rgba(189, 255, 28, 0.08), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
      }

      .service:hover::before {
        opacity: 1;
      }

      .service:hover {
        transform: translateY(-6px);
        border-color: var(--primary);
        box-shadow: var(--shadow-deep);
      }

      .svc-icon {
        width: 52px;
        height: 52px;
        background: var(--primary);
        border-radius: 14px;
        display: grid;
        place-items: center;
        margin-bottom: 24px;
        transition: var(--transition);
        box-shadow: 0 4px 12px rgba(189, 255, 28, 0.3);
      }

      .service:hover .svc-icon {
        transform: scale(1.1) rotate(10deg);
        box-shadow: 0 8px 20px rgba(189, 255, 28, 0.4);
      }

      .svc-icon svg {
        width: 24px;
        height: 24px;
        color: #000;
      }

      .service h3 {
        font-size: 22px;
        font-weight: 600;
        letter-spacing: -0.6px;
        margin-bottom: 12px;
        transition: var(--transition);
      }

      .service:hover h3 {
        color: var(--primary);
      }

      .service p {
        color: var(--text-secondary);
        font-size: 15px;
        line-height: 1.55;
      }

      .service .learn {
        margin-top: 20px;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        font-weight: 600;
        color: var(--secondary);
        transition: var(--transition);
      }

      .service:hover .learn {
        gap: 10px;
      }

      @media(max-width:900px) {
        .services {
          grid-template-columns: 1fr;
        }
      }

      /* ===== METRICS ===== */
      .metrics {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        text-align: center;
      }

      .metric {
        background: var(--bg-soft);
        border-radius: 24px;
        padding: 56px 32px;
        transition: var(--transition);
      }

      .metric:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
      }

      .metric .num {
        font-size: 72px;
        font-weight: 500;
        letter-spacing: -3px;
        line-height: 1;
        margin-bottom: 12px;
        color: var(--text);
      }

      .metric .lbl {
        font-size: 16px;
        color: var(--text-secondary);
        letter-spacing: -0.3px;
      }

      @media(max-width:900px) {
        .metrics {
          grid-template-columns: 1fr;
        }
        .metric .num {
          font-size: 52px;
        }
      }

      /* ===== SHOWCASE ===== */
      .showcase {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
        margin-top: 24px;
      }

      .showcase-card {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 24px;
        padding: 40px;
        overflow: hidden;
        position: relative;
        transition: var(--transition);
      }

      .showcase-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-deep);
      }

      .showcase-card.dark {
        background: var(--dark);
        color: #fff;
        border-color: rgba(255, 255, 255, 0.1);
      }

      .showcase-card.dark p {
        color: #94a3b8;
      }

      .showcase-card.accent {
        background: var(--bg-soft);
      }

      .showcase-card h3 {
        font-size: 32px;
        font-weight: 500;
        letter-spacing: -1px;
        margin-bottom: 16px;
        line-height: 1.1;
      }

      .showcase-card p {
        color: var(--text-secondary);
        font-size: 16px;
        line-height: 1.55;
        max-width: 400px;
      }

      .showcase-visual {
        margin-top: 32px;
        background: var(--bg-secondary);
        border-radius: 16px;
        padding: 24px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 13px;
        line-height: 1.7;
        color: var(--text);
        transition: var(--transition);
      }

      .showcase-card.dark .showcase-visual {
        background: rgba(255, 255, 255, 0.05);
        color: #e5e7eb;
      }

      .code-line {
        display: flex;
        gap: 12px;
        transition: var(--transition);
      }

      .code-line:hover {
        color: var(--primary);
      }

      .code-line .num {
        color: #94a3b8;
        user-select: none;
        min-width: 20px;
        text-align: right;
      }

      .code-line .kw {
        color: var(--secondary);
      }

      .code-line .str {
        color: #059669;
      }

      @media(max-width:900px) {
        .showcase {
          grid-template-columns: 1fr;
        }
      }

      /* ===== TESTIMONIALS ===== */
      .testimonials {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .tcard {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 24px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: var(--transition);
        position: relative;
        overflow: hidden;
      }

      .tcard::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary), var(--secondary));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .tcard:hover::before {
        transform: scaleX(1);
      }

      .tcard:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-deep);
      }

      .tcard .quote {
        font-size: 17px;
        line-height: 1.55;
        letter-spacing: -0.3px;
      }

      .tcard .stars {
        color: #000;
        font-size: 14px;
        letter-spacing: 2px;
      }

      .tperson {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: auto;
        padding-top: 20px;
        border-top: 1px solid var(--border-strong);
        transition: var(--transition);
      }

      .tcard:hover .tperson {
        gap: 16px;
      }

      .tperson .avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: var(--primary);
        display: grid;
        place-items: center;
        font-weight: 600;
        font-size: 16px;
        box-shadow: 0 4px 12px rgba(189, 255, 28, 0.3);
        transition: var(--transition);
      }

      .tcard:hover .avatar {
        transform: scale(1.1);
        box-shadow: 0 8px 20px rgba(189, 255, 28, 0.4);
      }

      .tperson .name {
        font-size: 15px;
        font-weight: 600;
        letter-spacing: -0.3px;
      }

      .tperson .role {
        font-size: 13px;
        color: var(--text-secondary);
      }

      @media(max-width:900px) {
        .testimonials {
          grid-template-columns: 1fr;
        }
      }

      /* ===== FAQ ===== */
      .faq-wrap {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .faq-item {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 16px;
        overflow: hidden;
        transition: var(--transition);
      }

      .faq-item:hover {
        border-color: var(--primary);
        box-shadow: 0 4px 12px rgba(189, 255, 28, 0.15);
      }

      .faq-q {
        padding: 24px 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 17px;
        font-weight: 600;
        letter-spacing: -0.3px;
        user-select: none;
        transition: var(--transition-fast);
      }

      .faq-q:hover {
        color: var(--primary);
      }

      .faq-icon {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--bg-secondary);
        display: grid;
        place-items: center;
        font-size: 18px;
        font-weight: 400;
        transition: var(--transition-fast);
        flex-shrink: 0;
      }

      .faq-item.open .faq-icon {
        transform: rotate(45deg);
        background: var(--primary);
        color: #000;
      }

      .faq-a {
        padding: 0 28px;
        max-height: 0;
        overflow: hidden;
        color: var(--text-secondary);
        font-size: 15px;
        line-height: 1.6;
        transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s ease;
      }

      .faq-item.open .faq-a {
        padding: 0 28px 24px;
        max-height: 400px;
      }

      /* ===== CTA BAND ===== */
      .cta-band {
        background: var(--dark);
        color: #fff;
        border-radius: 24px;
        padding: 80px 32px;
        text-align: center;
        position: relative;
        overflow: hidden;
        transition: var(--transition);
      }

      .cta-band:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
      }

      .cta-band::before {
        content: "";
        position: absolute;
        top: -100px;
        right: -100px;
        width: 300px;
        height: 300px;
        background: var(--primary);
        opacity: 0.15;
        border-radius: 50%;
        filter: blur(60px);
        animation: float 8s ease-in-out infinite;
      }

      .cta-band h2 {
        font-size: 56px;
        font-weight: 500;
        letter-spacing: -2px;
        line-height: 1;
        margin-bottom: 20px;
        position: relative;
      }

      .cta-band p {
        color: #94a3b8;
        font-size: 18px;
        margin-bottom: 32px;
        position: relative;
      }

      .cta-band .btn-primary {
        position: relative;
      }

      @media(max-width:900px) {
        .cta-band h2 {
          font-size: 36px;
          letter-spacing: -1.2px;
        }
      }

      /* ===== CONTACT ===== */
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 24px;
        max-width: 1100px;
        margin: 0 auto;
      }

      .contact-info {
        background: var(--bg-soft);
        border-radius: 24px;
        padding: 40px;
        transition: var(--transition);
      }

      .contact-info:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
      }

      .contact-info h3 {
        font-size: 32px;
        font-weight: 500;
        letter-spacing: -1px;
        margin-bottom: 16px;
        line-height: 1.1;
      }

      .contact-info p {
        color: var(--text-secondary);
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 32px;
      }

      .contact-row {
        display: flex;
        align-items: flex-start;
        gap: 14px;
        padding: 16px 0;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        transition: var(--transition);
      }

      .contact-row:hover {
        gap: 18px;
      }

      .contact-row:first-of-type {
        border-top: none;
      }

      .contact-row-icon {
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 12px;
        display: grid;
        place-items: center;
        flex-shrink: 0;
        transition: var(--transition);
      }

      .contact-row:hover .contact-row-icon {
        background: var(--primary);
        transform: scale(1.1);
      }

      .contact-row-icon svg {
        width: 18px;
        height: 18px;
        color: #000;
      }

      .contact-row .l {
        font-size: 12px;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-family: 'IBM Plex Mono', monospace;
      }

      .contact-row .v {
        font-size: 15px;
        font-weight: 600;
        margin-top: 2px;
      }

      .contact-form {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 24px;
        padding: 40px;
        transition: var(--transition);
      }

      .contact-form:hover {
        border-color: var(--primary);
        box-shadow: 0 8px 24px rgba(189, 255, 28, 0.1);
      }

      .contact-form h3 {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: -0.6px;
        margin-bottom: 24px;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        margin-bottom: 14px;
      }

      .field {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 14px;
      }

      .field label {
        font-size: 13px;
        font-weight: 500;
        color: var(--text-secondary);
      }

      .field input,
      .field select,
      .field textarea {
        width: 100%;
        background: var(--bg-secondary);
        border: 1.5px solid transparent;
        border-radius: 10px;
        padding: 14px 16px;
        font-size: 14px;
        font-family: inherit;
        color: var(--text);
        transition: var(--transition-fast);
        cursor: text;
      }

      .field input:focus,
      .field select:focus,
      .field textarea:focus {
        outline: none;
        border-color: var(--secondary);
        background: #fff;
        box-shadow: 0 0 0 3px rgba(132, 77, 255, 0.1);
      }

      .field textarea {
        min-height: 100px;
        resize: vertical;
      }

      .submit-btn {
        background: var(--primary);
        color: #000;
        border: none;
        border-radius: 10px;
        padding: 16px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        font-family: inherit;
        transition: var(--transition-fast);
        box-shadow: 0 4px 16px rgba(189, 255, 28, 0.3);
        position: relative;
        overflow: hidden;
      }

      .submit-btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
      }

      .submit-btn:active::before {
        width: 300px;
        height: 300px;
      }

      .submit-btn:hover {
        background: var(--primary-hover);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(189, 255, 28, 0.4);
      }

      .submit-btn:active {
        transform: translateY(0);
      }

      .success-msg {
        display: none;
        margin-top: 12px;
        padding: 12px 16px;
        background: var(--bg-soft);
        border-radius: 10px;
        font-size: 14px;
        color: var(--text);
        text-align: center;
        animation: slideInUp 0.3s ease-out;
      }

      .success-msg.show {
        display: block;
      }

      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media(max-width:900px) {
        .contact-grid {
          grid-template-columns: 1fr;
        }
        .form-row {
          grid-template-columns: 1fr;
        }
      }

      /* ===== FOOTER ===== */
      .footer {
        background: var(--dark);
        color: #fff;
        padding: 72px 24px 32px;
        margin-top: 0;
      }

      .footer-top {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1fr;
        gap: 48px;
        padding-bottom: 48px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .footer-brand {
        font-size: 28px;
        font-weight: 500;
        letter-spacing: -0.8px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .footer p.tag {
        color: #94a3b8;
        font-size: 14px;
        line-height: 1.6;
        max-width: 280px;
      }

      .footer h4 {
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 16px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .footer ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .footer ul a {
        color: #94a3b8;
        font-size: 14px;
        transition: var(--transition-fast);
      }

      .footer ul a:hover {
        color: var(--primary);
        transform: translateX(4px);
      }

      .footer-bot {
        max-width: 1200px;
        margin: 32px auto 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #94a3b8;
        font-size: 13px;
        flex-wrap: wrap;
        gap: 12px;
      }

      @media(max-width:900px) {
        .footer-top {
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
      }

      /* ===== MOBILE MENU ===== */
      .mob-menu {
        display: none;
        position: fixed;
        inset: 0;
        background: var(--bg);
        z-index: 100;
        padding: 80px 32px 32px;
        flex-direction: column;
        gap: 12px;
        animation: slideInRight 0.3s ease-out;
      }

      .mob-menu.open {
        display: flex;
      }

      .mob-menu a {
        padding: 18px 20px;
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 16px;
        font-size: 18px;
        font-weight: 600;
        transition: var(--transition-fast);
        animation: fadeInUp 0.3s ease-out;
        animation-fill-mode: both;
      }

      .mob-menu a:nth-child(2) { animation-delay: 0.05s; }
      .mob-menu a:nth-child(3) { animation-delay: 0.1s; }
      .mob-menu a:nth-child(4) { animation-delay: 0.15s; }
      .mob-menu a:nth-child(5) { animation-delay: 0.2s; }
      .mob-menu a:nth-child(6) { animation-delay: 0.25s; }

      .mob-menu a:hover {
        background: var(--bg-soft);
        border-color: var(--primary);
      }

      .mob-close {
        position: absolute;
        top: 24px;
        right: 24px;
        background: #fff;
        border: 1px solid var(--border);
        width: 44px;
        height: 44px;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        display: grid;
        place-items: center;
        transition: var(--transition-fast);
      }

      .mob-close:hover {
        background: var(--primary);
        border-color: var(--primary);
      }

      /* ===== FADE-UP ON SCROLL ===== */
      .fade-up {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .fade-up.visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* ===== SCROLLBAR ===== */
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: var(--bg);
      }

      ::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 5px;
        transition: var(--transition);
      }

      ::-webkit-scrollbar-thumb:hover {
        background: var(--secondary);
      }
/* --- SPA overrides (multi-page mode) --- */
/* showPage() writes an inline display:none onto #mob-menu, which would beat
   .mob-menu.open on specificity; !important keeps the menu openable. */
.mob-menu.open { display: flex !important; }
.sf-page { animation: fadeInUp 0.4s ease-out; }
:root { --nav-offset: 104px; }
@media (max-width: 768px) { :root { --nav-offset: 88px; } }
</style>

<div class="top-bar">24/7 Emergency ${typeName} · Call <span>${biz.phone}</span> · Serving ${biz.city}</div>

      <nav class="nav">
        <div class="nav-inner">
          <div class="brand" onclick="showPage('home')" style="cursor:pointer">
            <div class="brand-dot">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            ${brandName}
          </div>
          <div class="nav-links">
            <a class="sf-nav-link active" data-page="home" href="#" onclick="showPage('home');return false">Home</a>
            <a class="sf-nav-link" data-page="services" href="#" onclick="showPage('services');return false">Services</a>
            <a class="sf-nav-link" data-page="about" href="#" onclick="showPage('about');return false">Benefits</a>
            <a class="sf-nav-link" data-page="reviews" href="#" onclick="showPage('reviews');return false">Testimonials</a>
            <a class="sf-nav-link" data-page="faq" href="#" onclick="showPage('faq');return false">FAQs</a>
            <a class="sf-nav-link" data-page="contact" href="#" onclick="showPage('contact');return false">Contact</a>
          </div>
          <button class="nav-cta" onclick="showPage('contact')">Book a Service</button>
          <button class="burger" id="burger" aria-label="menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </nav>

      <div class="mob-menu" id="mob-menu">
        <button class="mob-close" id="mobClose">✕</button>
        <a class="sf-nav-link" data-page="home" href="#" onclick="showPage('home');return false">Home</a>
        <a class="sf-nav-link" data-page="services" href="#" onclick="showPage('services');return false">Services</a>
        <a class="sf-nav-link" data-page="about" href="#" onclick="showPage('about');return false">Benefits</a>
        <a class="sf-nav-link" data-page="reviews" href="#" onclick="showPage('reviews');return false">Testimonials</a>
        <a class="sf-nav-link" data-page="faq" href="#" onclick="showPage('faq');return false">FAQs</a>
        <a class="sf-nav-link" data-page="contact" href="#" onclick="showPage('contact');return false">Contact</a>
      </div>



<div id="page-home" class="sf-page">
<!-- HERO -->
      <section class="hero">
        <div class="hero-tag">
          <span class="pill">New</span>
          <span>Emergency response in under 60 minutes</span>
        </div>
        <h1>Expert <em>${typeName.toLowerCase()}</em> you can<br />actually trust.</h1>
        <p>Licensed, insured, and trusted by ${biz.reviews}+ homes &amp; businesses across ${biz.city}. Book in 60 seconds — arrive when we say we will.</p>
        <div class="hero-btns">
          <button class="btn-primary" onclick="showPage('contact')">Book a Service</button>
          <button class="btn-secondary" onclick="showPage('services')">View Our Work</button>
        </div>

        <div class="hero-visual">
          <div class="hero-visual-inner">
            <div style="display:flex;flex-direction:column;gap:16px">
              <div class="stat-card">
                <div class="val">${biz.rating}★</div>
                <div class="lbl">Google Rating · ${biz.reviews}+ reviews</div>
              </div>
              <div class="stat-card" style="background:var(--primary)">
                <div class="val">${biz.years}+</div>
                <div class="lbl">Years serving ${biz.city}</div>
              </div>
              <div class="stat-card">
                <div class="val">${biz.projects}+</div>
                <div class="lbl">Jobs completed on time</div>
              </div>
            </div>
            <div class="hero-visual-grid">
              <div class="hero-img"><img src="${heroA}" alt="electrician" /></div>
              <div class="hero-img"><img src="${heroB}" alt="wiring" /></div>
              <div class="hero-img" style="grid-column:1/-1;aspect-ratio:2/1"><img src="${heroC}" alt="lighting" /></div>
            </div>
          </div>
        </div>
      </section>

<!-- Trust bar -->
      <section class="trust">
        <div class="trust-title">// Join other homeowners trusting ${brandName}</div>
        <div class="trust-row">
          <div>Manhattan</div>
          <div>Brooklyn</div>
          <div>Queens</div>
          <div>Bronx</div>
          <div>Staten Island</div>
        </div>
      </section>

<!-- BENEFITS -->
      <section class="section" id="benefits">
        <div class="container">
          <div class="sec-head">
            <span class="eyebrow">// Benefits</span>
            <h2>Good-bye to sketchy contractors.</h2>
            <p>Say farewell to overcharging, no-shows and messy jobs. Welcome to a smoother, cleaner electrical experience.</p>
          </div>
          <div class="benefits">
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Licensed &amp; insured</h3>
              <p>Every specialist on our team is fully certified, background-verified, and covered — so you never carry the risk.</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>Fast response</h3>
              <p>Standard bookings confirmed within 2 hours. Genuine emergency calls handled in under 60 minutes, 24/7.</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Honest pricing</h3>
              <p>Transparent, upfront quotes after a quick assessment. No hidden fees, no surprise charges — ever.</p>
            </div>
          </div>
        </div>
      </section>

<!-- CTA BAND -->
      <section class="section">
        <div class="container">
          <div class="cta-band">
            <h2>Shoot your home into a<br />brighter era. Start now.</h2>
            <p>Emergency response within 60 minutes. Serving ${biz.city} 24/7.</p>
            <button class="btn-primary" onclick="showPage('contact')">Book a Service</button>
          </div>
        </div>
      </section>
</div>

<div id="page-services" class="sf-page" style="display:none">
<!-- SERVICES -->
      <section class="section section-alt" id="services">
        <div class="container">
          <div class="sec-head">
            <span class="eyebrow">// Product</span>
            <h2>Unlock every electrical service in one team.</h2>
            <p>From wiring your new addition to upgrading a commercial panel — everything you need to keep the lights on.</p>
          </div>
          <div class="services">
            ${biz.services.map(s => `<div class="service">
              <div class="svc-icon">${getServiceIcon(s)}</div>
              <h3>${s}</h3>
              <p>${getServiceDescription(s, biz.type)}</p>
              <div class="learn">Learn more →</div>
            </div>`).join('')}
          </div>
        </div>
      </section>

<!-- SHOWCASE -->
      <section class="section">
        <div class="container">
          <div class="sec-head">
            <span class="eyebrow">// Features</span>
            <h2>Everything a modern electrician should be.</h2>
          </div>
          <div class="showcase">
            <div class="showcase-card accent">
              <h3>Same-day scheduling</h3>
              <p>Book online in 60 seconds. Get an ETA text on the day of your visit — no more 4-hour windows.</p>
              <div class="showcase-visual" style="background:#fff">
                <div class="code-line"><span class="num">→</span><span>Booking #A82301 confirmed</span></div>
                <div class="code-line"><span class="num">→</span><span>Technician: <b>Marco R.</b></span></div>
                <div class="code-line"><span class="num">→</span><span>ETA: Today 2:15 – 2:45 PM</span></div>
                <div class="code-line"><span class="num">→</span><span style="color:var(--secondary);font-weight:600">On the way ✓</span></div>
              </div>
            </div>
            <div class="showcase-card dark">
              <h3>Certified &amp; code-compliant</h3>
              <p>Every job passes NEC standards. We handle inspections, permits and paperwork so you don't have to.</p>
              <div class="showcase-visual">
                <div class="code-line"><span class="num">01</span><span><span class="kw">const</span> job = <span class="str">"panel-upgrade-200A"</span></span></div>
                <div class="code-line"><span class="num">02</span><span><span class="kw">status</span>: certified ✓</span></div>
                <div class="code-line"><span class="num">03</span><span><span class="kw">permit</span>: #NY-2024-0928</span></div>
                <div class="code-line"><span class="num">04</span><span><span class="kw">warranty</span>: 30 days</span></div>
                <div class="code-line"><span class="num">05</span><span><span class="kw">inspector</span>: passed</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

<!-- CTA BAND -->
      <section class="section">
        <div class="container">
          <div class="cta-band">
            <h2>Shoot your home into a<br />brighter era. Start now.</h2>
            <p>Emergency response within 60 minutes. Serving ${biz.city} 24/7.</p>
            <button class="btn-primary" onclick="showPage('contact')">Book a Service</button>
          </div>
        </div>
      </section>
</div>

<div id="page-about" class="sf-page" style="display:none">
<!-- BENEFITS -->
      <section class="section" id="benefits">
        <div class="container">
          <div class="sec-head">
            <span class="eyebrow">// Benefits</span>
            <h2>Good-bye to sketchy contractors.</h2>
            <p>Say farewell to overcharging, no-shows and messy jobs. Welcome to a smoother, cleaner electrical experience.</p>
          </div>
          <div class="benefits">
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Licensed &amp; insured</h3>
              <p>Every specialist on our team is fully certified, background-verified, and covered — so you never carry the risk.</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>Fast response</h3>
              <p>Standard bookings confirmed within 2 hours. Genuine emergency calls handled in under 60 minutes, 24/7.</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Honest pricing</h3>
              <p>Transparent, upfront quotes after a quick assessment. No hidden fees, no surprise charges — ever.</p>
            </div>
          </div>
        </div>
      </section>

<!-- METRICS -->
      <section class="section section-alt">
        <div class="container">
          <div class="sec-head">
            <span class="eyebrow">// Metrics</span>
            <h2>You can bet on it.</h2>
          </div>
          <div class="metrics">
            <div class="metric">
              <div class="num">${biz.rating}★</div>
              <div class="lbl">Average Google rating</div>
            </div>
            <div class="metric">
              <div class="num">${biz.projects}+</div>
              <div class="lbl">Successful projects</div>
            </div>
            <div class="metric">
              <div class="num">60m</div>
              <div class="lbl">Emergency response time</div>
            </div>
          </div>
        </div>
      </section>

<!-- Trust bar -->
      <section class="trust">
        <div class="trust-title">// Join other homeowners trusting ${brandName}</div>
        <div class="trust-row">
          <div>Manhattan</div>
          <div>Brooklyn</div>
          <div>Queens</div>
          <div>Bronx</div>
          <div>Staten Island</div>
        </div>
      </section>
</div>

<div id="page-reviews" class="sf-page" style="display:none">
<!-- TESTIMONIALS -->
      <section class="section" id="testimonials">
        <div class="container">
          <div class="sec-head">
            <span class="eyebrow">// Testimonials</span>
            <h2>Real stories.<br />Don't take our word for it.</h2>
          </div>
          <div class="testimonials">
            ${reviews.slice(0, 3).map((rv, idx) => `<div class="tcard">
              <div class="stars">${'★'.repeat(rv.stars || 5)}</div>
              <p class="quote">"${rv.text}"</p>
              <div class="tperson">
                <div class="avatar"${idx === 1 ? ' style="background:var(--secondary);color:#fff"' : ''}>${rv.name.charAt(0)}</div>
                <div>
                  <div class="name">${rv.name}</div>
                  <div class="role">${rv.role || 'Customer'} · ${biz.city}</div>
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </section>

<!-- METRICS -->
      <section class="section section-alt">
        <div class="container">
          <div class="sec-head">
            <span class="eyebrow">// Metrics</span>
            <h2>You can bet on it.</h2>
          </div>
          <div class="metrics">
            <div class="metric">
              <div class="num">${biz.rating}★</div>
              <div class="lbl">Average Google rating</div>
            </div>
            <div class="metric">
              <div class="num">${biz.projects}+</div>
              <div class="lbl">Successful projects</div>
            </div>
            <div class="metric">
              <div class="num">60m</div>
              <div class="lbl">Emergency response time</div>
            </div>
          </div>
        </div>
      </section>

<!-- CTA BAND -->
      <section class="section">
        <div class="container">
          <div class="cta-band">
            <h2>Shoot your home into a<br />brighter era. Start now.</h2>
            <p>Emergency response within 60 minutes. Serving ${biz.city} 24/7.</p>
            <button class="btn-primary" onclick="showPage('contact')">Book a Service</button>
          </div>
        </div>
      </section>
</div>

<div id="page-faq" class="sf-page" style="display:none">
<!-- FAQ -->
      <section class="section section-alt" id="faq">
        <div class="container">
          <div class="sec-head">
            <span class="eyebrow">// FAQs</span>
            <h2>Still not convinced?<br />We've got the answers.</h2>
          </div>
          <div class="faq-wrap">
            ${faqs.map(([q, a]) => `<div class="faq-item">
              <div class="faq-q">${q}<span class="faq-icon">+</span></div>
              <div class="faq-a">${a}</div>
            </div>`).join('')}
          </div>
        </div>
      </section>

<!-- CTA BAND -->
      <section class="section">
        <div class="container">
          <div class="cta-band">
            <h2>Shoot your home into a<br />brighter era. Start now.</h2>
            <p>Emergency response within 60 minutes. Serving ${biz.city} 24/7.</p>
            <button class="btn-primary" onclick="showPage('contact')">Book a Service</button>
          </div>
        </div>
      </section>
</div>

<div id="page-contact" class="sf-page" style="display:none">
<!-- CONTACT -->
      <section class="section section-alt" id="contact">
        <div class="container">
          <div class="sec-head">
            <span class="eyebrow">// Contact</span>
            <h2>Book a service.<br />We respond in 30 minutes.</h2>
          </div>
          <div class="contact-grid">
            <div class="contact-info">
              <h3>Get in touch</h3>
              <p>Ready to book or just have questions? Our team is standing by to help you get the best ${typeName.toLowerCase()} service in ${biz.city}.</p>
              <div class="contact-row">
                <div class="contact-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
                <div>
                  <div class="l">Phone</div>
                  <div class="v">${biz.phone}</div>
                </div>
              </div>
              <div class="contact-row">
                <div class="contact-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" /></svg></div>
                <div>
                  <div class="l">Email</div>
                  <div class="v">${biz.email}</div>
                </div>
              </div>
              <div class="contact-row">
                <div class="contact-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" /></svg></div>
                <div>
                  <div class="l">Address</div>
                  <div class="v">${biz.address || biz.city}</div>
                </div>
              </div>
              <div class="contact-row">
                <div class="contact-row-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" /></svg></div>
                <div>
                  <div class="l">Hours</div>
                  <div class="v">${biz.hours}</div>
                </div>
              </div>
            </div>
            <form class="contact-form" id="contactForm" onsubmit="submitForm(event)">
              <h3>Request a callback</h3>
              <div class="form-row">
                <div class="field"><label>Your name</label><input type="text" placeholder="Full name" required /></div>
                <div class="field"><label>Phone</label><input type="tel" placeholder="${biz.phone}" required /></div>
              </div>
              <div class="form-row">
                <div class="field"><label>Email</label><input type="email" placeholder="you@example.com" required /></div>
                <div class="field"><label>Preferred date</label><input type="date" /></div>
              </div>
              <div class="field"><label>Service needed</label>
                <select>${biz.services.map(s => `<option>${s}</option>`).join('')}</select>
              </div>
              <div class="field"><label>Message</label><textarea placeholder="Describe what you need..."></textarea></div>
              <button type="submit" class="submit-btn">Request Callback →</button>
              <div class="success-msg" id="successMsg">✓ We'll call you back within 30 minutes.</div>
            </form>
          </div>
        </div>
      </section>
</div>



<!-- FOOTER -->
      <footer class="footer">
        <div class="footer-top">
          <div>
            <div class="footer-brand">
              <div class="brand-dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></div>
              ${brandName}
            </div>
            <p class="tag">Licensed, insured and trusted ${typeName.toLowerCase()} services across ${biz.city}.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>${biz.services.slice(0, 4).map(s => `<li><a href="#services">${s}</a></li>`).join('')}</ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="tel:${biz.phone}">${biz.phone}</a></li>
              <li><a href="mailto:${biz.email}">${biz.email}</a></li>
              <li>${biz.address || biz.city}</li>
            </ul>
          </div>
        </div>
        <div class="footer-bot">
          <div>© ${year} ${biz.name} · All rights reserved</div>
          <div>Designed with care in ${biz.city}</div>
        </div>
      </footer>

<script>
${NAV}

      function initFaq() {
        document.querySelectorAll('.faq-item').forEach(function (item) {
          var q = item.querySelector('.faq-q');
          if (!q || q.dataset.bound) return;
          q.dataset.bound = '1';
          q.addEventListener('click', function () { item.classList.toggle('open'); });
        });
      }

      var _io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.12 });

      function initReveal(root) {
        var scope = root || document;
        scope.querySelectorAll('.benefit-card,.service,.tcard,.metric,.showcase-card,.faq-item').forEach(function (el) {
          el.classList.add('fade-up');
          _io.observe(el);
        });
      }

      // Anything already on screen when a page appears must not stay faded out.
      function revealVisibleNow(root) {
        (root || document).querySelectorAll('.fade-up').forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight * 0.95) el.classList.add('visible');
        });
      }

      function onPageShown(id) {
        var el = document.getElementById('page-' + id);
        if (!el) return;
        initFaq();
        initReveal(el);
        requestAnimationFrame(function () { revealVisibleNow(el); });
      }

      // Mobile menu
      var _burger = document.getElementById('burger');
      if (_burger) _burger.addEventListener('click', function () {
        document.getElementById('mob-menu').classList.add('open');
      });
      var _mobClose = document.getElementById('mobClose');
      if (_mobClose) _mobClose.addEventListener('click', function () {
        document.getElementById('mob-menu').classList.remove('open');
      });

      // Form submit
      function submitForm(e) {
        e.preventDefault();
        document.getElementById('successMsg').classList.add('show');
        document.getElementById('contactForm').reset();
        setTimeout(function () { document.getElementById('successMsg').classList.remove('show'); }, 4000);
      }

      initFaq();
      initReveal(document);
      requestAnimationFrame(function () { revealVisibleNow(document.getElementById('page-home')); });

      // NAV (injected above) defines showPage(). Wrap it so each page swap
      // re-arms the reveal observer and closes the mobile menu.
      (function () {
        var _showPage = window.showPage;
        window.showPage = function (id) {
          _showPage(id);
          var m = document.getElementById('mob-menu');
          if (m) m.classList.remove('open');
          onPageShown(id);
        };
      })();
</${'script'}>
`);
}
