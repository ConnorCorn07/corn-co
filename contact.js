const SITE_CONFIG = {
    logoSrc:
        "https://i.imgur.com/3vtyVRk.png",
    logoAlt: "Logo",
    wordmark: "Corn Co.",
    nav: [
        { label: "Home",     href: "index.html" },
        { label: "About",    href: "about.html" },
        { label: "Projects", href: "Projects.html" },
        { label: "Contact",  href: "contact.html", active: true },
    ],
};

const SOCIALS = [
    {
        name: "Discord",
        handle: "connorcorn",
        href: "https://discord.gg/xFRzWBAfQh",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
             <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
           </svg>`,
    },
    {
        name: "GitHub",
        handle: "ConnorCorn07",
        href: "https://github.com/ConnorCorn07",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
           </svg>`,
    },
    {
        name: "Modrinth",
        handle: "@ConnorCorn07",
        href: "https://modrinth.com/user/ConnorCorn07",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
             <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
           </svg>`,
    },
    {
        name: "Email",
        handle: "connorcorn07@gmail.com",          
        href: "mailto:connorcorn07@gmail.com",      
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
             <rect width="20" height="16" x="2" y="4" rx="2"/>
             <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
           </svg>`,
    },
];
//rendering
function buildHeader() {
    const navLinks = SITE_CONFIG.nav
        .map(
            ({ label, href, active }) =>
                `<a href="${href}"${active ? ' class="active"' : ""}>${label}</a>`
        )
        .join("\n");

    return `
<header>
  <a href="index.html" class="logo-link" aria-label="Go to home page">
    <img src="${SITE_CONFIG.logoSrc}" alt="${SITE_CONFIG.logoAlt}" class="logo-img">
    <span class="logo-wordmark">${SITE_CONFIG.wordmark}</span>
  </a>

  <nav id="main-nav" role="navigation" aria-label="Main navigation">
    ${navLinks}
  </nav>

  <div class="header-spacer" aria-hidden="true"></div>

  <button class="menu-toggle" id="menu-btn" aria-label="Toggle menu" aria-expanded="false">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <line x1="3" y1="6"  x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  </button>
</header>`;
}

function buildSocialCard({ name, handle, href, icon }) {
    return `
<a class="social-card" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${name}">
  <span class="social-icon">${icon}</span>
  <span class="social-info">
    <span class="social-name">${name}</span>
    <span class="social-handle">${handle}</span>
  </span>
  <span class="social-arrow">
    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
      <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 1 0-1.06L9.44 9.5 5.22 5.28a.75.75 0 0 1 1.06-1.06l4.75 4.75a.75.75 0 0 1 0 1.06l-4.75 4.75a.75.75 0 0 1-1.06 0z" clip-rule="evenodd"/>
    </svg>
  </span>
</a>`;
}
//builds
function buildMain() {
    const cards = SOCIALS.map(buildSocialCard).join("\n");

    return `
<main>
  <div class="contact-hero">
    <h1>Get in touch</h1>
    <p>Find Connor across the internet — pick your platform.</p>
  </div>

  <div class="socials-grid">
    ${cards}
  </div>
</main>`;
}

function injectStyles() {//css
    const css = `
    
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 48px;
      min-height: calc(100vh - var(--header-h));
      padding: 64px 24px 80px;
    }

    .contact-hero {
      text-align: center;
    }

    .contact-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 6vw, 4rem);
      letter-spacing: -0.03em;
      margin-bottom: 12px;
    }

    .contact-hero p {
      color: var(--muted);
      font-size: 1.1rem;
    }

    
    .socials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 780px;
    }

    .social-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 18px 20px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      text-decoration: none;
      color: var(--text);
      transition: border-color var(--transition), transform var(--transition), background var(--transition);
    }

    .social-card:hover {
      border-color: var(--accent);
      background: rgba(232, 201, 126, 0.05);
      transform: translateY(-2px);
    }

    .social-icon {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,0.05);
      border-radius: 10px;
      color: var(--accent);
      transition: background var(--transition);
    }

    .social-card:hover .social-icon {
      background: rgba(232, 201, 126, 0.15);
    }

    .social-icon svg {
      width: 20px;
      height: 20px;
    }

    .social-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
      min-width: 0;
    }

    .social-name {
      font-weight: 600;
      font-size: 15px;
    }

    .social-handle {
      font-size: 13px;
      color: var(--muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .social-arrow {
      flex-shrink: 0;
      color: var(--muted);
      transition: color var(--transition), transform var(--transition);
    }

    .social-card:hover .social-arrow {
      color: var(--accent);
      transform: translateX(3px);
    }
  `;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
}

document.addEventListener("DOMContentLoaded", () => {
    injectStyles();

    //header
    const headerPlaceholder = document.getElementById("site-header");
    if (headerPlaceholder) headerPlaceholder.outerHTML = buildHeader();

    //main content
    const mainPlaceholder = document.getElementById("page-content");
    if (mainPlaceholder) mainPlaceholder.outerHTML = buildMain();

});