import { e as createAstro, f as createComponent, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, n as renderScript, s as spreadAttributes, o as renderComponent, u as unescapeHTML } from '../chunks/astro/server_DBoMHC80.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$p = createAstro("https://josuekennedy.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Josue Kennedy | Desarrollador Fullstack",
    description = "Portafolio profesional de Josue Kennedy, Desarrollador Fullstack especializado en Laravel y Next.js. Creando experiencias digitales de alto impacto.",
    image = "/og-image.png"
    // Asegúrate de tener esta imagen en public
  } = Astro2.props;
  const canonicalURL = new URL(
    Astro2.url.pathname,
    Astro2.site || "https://josuekennedy.com"
  );
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Prevenciones de Performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>${renderHead()}</head> <body class="bg-[#1a1a1a] selection:bg-[#FFD700] selection:text-black"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/layouts/Layout.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Desktop Navigation -->${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4 hidden md:block" id="navbar-desktop" data-astro-cid-pux6a34n> <div class="max-w-7xl mx-auto flex items-center justify-center" data-astro-cid-pux6a34n> <div class="rounded-full flex items-center gap-8 px-8 py-3 transition-all duration-500 border border-white/0 bg-white/0" id="nav-pill" data-astro-cid-pux6a34n> <a href="#home" class="text-gray-300 hover:text-[#FFD700] transition-colors font-medium tracking-wide relative group" data-astro-cid-pux6a34n>
Inicio
<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full" data-astro-cid-pux6a34n></span> </a> <a href="#about" class="text-gray-300 hover:text-[#FFD700] transition-colors font-medium tracking-wide relative group" data-astro-cid-pux6a34n>
Sobre mí
<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full" data-astro-cid-pux6a34n></span> </a> <a href="#portfolio" class="text-gray-300 hover:text-[#FFD700] transition-colors font-medium tracking-wide relative group" data-astro-cid-pux6a34n>
Portafolio
<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full" data-astro-cid-pux6a34n></span> </a> <a href="#experience" class="text-gray-300 hover:text-[#FFD700] transition-colors font-medium tracking-wide relative group" data-astro-cid-pux6a34n>
Experiencia
<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full" data-astro-cid-pux6a34n></span> </a> <a href="#skills" class="text-gray-300 hover:text-[#FFD700] transition-colors font-medium tracking-wide relative group" data-astro-cid-pux6a34n>
Tecnologías
<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full" data-astro-cid-pux6a34n></span> </a> <a href="#contact" class="text-gray-300 hover:text-[#FFD700] transition-colors font-medium tracking-wide relative group" data-astro-cid-pux6a34n>
Contacto
<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full" data-astro-cid-pux6a34n></span> </a> </div> </div> </nav> <!-- Mobile Floating Bottom Navigation --> <nav class="fixed bottom-6 left-1/2 -translate-x-1/2 z-100 w-[90%] max-w-sm md:hidden" id="mobile-nav" data-astro-cid-pux6a34n> <div class="bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-4xl px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-around" data-astro-cid-pux6a34n> ${[
    { id: "home", label: "Inicio", href: "#home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "about", label: "Yo", href: "#about", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { id: "portfolio", label: "Proyectos", href: "#portfolio", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
    { id: "experience", label: "Exp", href: "#experience", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V20a2 2 0 002 2h14a2 2 0 002-2v-6.745zM16 8V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v3h8z" },
    { id: "contact", label: "Email", href: "#contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
  ].map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="mobile-nav-item relative flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] px-3 py-2 rounded-2xl group"${addAttribute(item.id, "data-id")} data-astro-cid-pux6a34n> <div class="relative z-10 flex items-center gap-2" data-astro-cid-pux6a34n> <svg class="w-6 h-6 text-white/40 group-[.active]:text-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-astro-cid-pux6a34n> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(item.icon, "d")} data-astro-cid-pux6a34n></path> </svg> <span class="text-black text-xs font-bold hidden group-[.active]:block whitespace-nowrap overflow-hidden animate-in fade-in slide-in-from-left-2 transition-all duration-300" data-astro-cid-pux6a34n> ${item.label} </span> </div> <!-- Background Pill for Active State --> <div class="absolute inset-0 bg-white scale-0 opacity-0 group-[.active]:scale-100 group-[.active]:opacity-100 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" data-astro-cid-pux6a34n></div> </a>`)} </div> </nav>  ${renderScript($$result, "C:/Users/Josue/Documents/development/portafolio/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/Navigation.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="home" class="relative pt-10 lg:pt-20 flex items-center justify-center overflow-hidden bg-[#1a1a1a]" data-astro-cid-bbe6dxrz> <!-- Elementos de Fondo (Glows/Blur) --> <div class="absolute top-1/4 -left-20 w-80 h-80 bg-[#FFD700] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse-slow" data-astro-cid-bbe6dxrz></div> <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse-slow" style="animation-delay: 2s;" data-astro-cid-bbe6dxrz></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#1a1a1a_80%)] opacity-60 z-0" data-astro-cid-bbe6dxrz></div> <!-- Grid Principal --> <div class="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-astro-cid-bbe6dxrz> <!-- Columna Izquierda: Texto --> <div class="space-y-10 lg:pl-12 relative z-20 pt-4 lg:pt-0" data-astro-cid-bbe6dxrz> <div class="flex flex-col gap-2" data-astro-cid-bbe6dxrz> <!-- Label Superior --> <div class="reveal-content flex items-center gap-4" style="--delay: 0.2s;" data-astro-cid-bbe6dxrz> <span class="text-white/60 text-sm font-bold tracking-[0.5em] uppercase font-sans" data-astro-cid-bbe6dxrz>SOY</span> <div class="h-px w-12 bg-[#FFD700]/40" data-astro-cid-bbe6dxrz></div> </div> <!-- Nombre Principal --> <div class="reveal-content" style="--delay: 0.3s;" data-astro-cid-bbe6dxrz> <h1 class="text-6xl sm:text-7xl lg:text-8xl xl:text-[110px] font-bold text-[#FFD700] leading-[0.9] font-heading tracking-tight drop-shadow-2xl" data-astro-cid-bbe6dxrz>
Josue <br class="hidden sm:block" data-astro-cid-bbe6dxrz>Kennedy
</h1> </div> <!-- Cargo y Descripción --> <div class="space-y-6 mt-2 reveal-content" style="--delay: 0.5s;" data-astro-cid-bbe6dxrz> <h2 class="text-2xl lg:text-4xl text-white font-heading font-medium tracking-wide border-l-2 border-[#FFD700] pl-6" data-astro-cid-bbe6dxrz>
Desarrollador Fullstack
</h2> </div> </div> <!-- Boton Contact Me --> <div class="reveal-content w-full pt-4" style="--delay: 0.7s;" data-astro-cid-bbe6dxrz> <a href="#contact" class="group w-full md:w-fit relative inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-[#FFD700] text-[#FFD700] text-sm md:text-lg font-bold rounded-lg overflow-hidden transition-all duration-500 uppercase tracking-[0.2em] hover:text-black shadow-lg shadow-[#FFD700]/5" data-astro-cid-bbe6dxrz> <span class="relative z-10" data-astro-cid-bbe6dxrz>Contáctame</span> <div class="absolute inset-0 bg-[#FFD700] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" data-astro-cid-bbe6dxrz></div> </a> </div> </div> <!-- Columna Derecha: Imagen y Redes --> <div class="relative flex justify-center lg:justify-end items-end w-full" data-astro-cid-bbe6dxrz> <!-- Contenedor Imagen (Se mantiene igual como se pidió) --> <div class="relative lg:pr-12 z-10 w-full h-full flex items-end justify-center lg:justify-end reveal-image" data-astro-cid-bbe6dxrz> <div class="relative w-full h-full flex items-end justify-center lg:justify-end group" data-astro-cid-bbe6dxrz> <!-- Glow detrás de la cabeza/perfil --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFD700] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" data-astro-cid-bbe6dxrz></div> <img src="/images/profile.png" alt="Josue Kennedy - Desarrollador Fullstack especializado en Laravel & Next.js" class="relative w-auto h-full object-contain filter grayscale brightness-90 animate-float lg:pr-32" style="mask-image: linear-gradient(to bottom, black 85%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);" data-astro-cid-bbe6dxrz> </div> </div> <!-- Sidebar Redes Sociales --> <div id="fixed-socials" class="fixed right-4 md:right-6 bottom-40 md:bottom-32 z-100 reveal-socials flex flex-col items-center" data-astro-cid-bbe6dxrz> <!-- Línea Dorada Vertical --> <div id="socials-line" class="w-px h-16 md:h-32 bg-linear-to-t from-[#FFD700] via-[#FFD700]/40 to-transparent mb-4 transition-all duration-500" data-astro-cid-bbe6dxrz></div> <div id="socials-container" class="flex flex-col items-center gap-6 md:gap-8 px-3 py-6 rounded-full transition-all duration-500 border border-transparent" data-astro-cid-bbe6dxrz> <!-- Iconos --> ${[
    {
      name: "CV",
      tooltip: "Descargar CV",
      path: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
      link: "/Josue-david-kennedy.pdf"
    },
    {
      name: "GitHub",
      tooltip: "Ver GitHub",
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
      link: "https://github.com/programfive"
    },
    {
      name: "LinkedIn",
      tooltip: "LinkedIn",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      link: "https://linkedin.com/in/josue-kennedy"
    }
  ].map((social) => renderTemplate`<a${addAttribute(social.link, "href")} target="_blank" rel="noopener noreferrer" class="social-icon relative text-white/50 hover:text-[#FFD700] hover:scale-125 transition-all duration-300 transform group/tooltip"${addAttribute(social.name, "aria-label")} data-astro-cid-bbe6dxrz> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path${addAttribute(social.path, "d")} data-astro-cid-bbe6dxrz></path> </svg> <!-- Tooltip --> <span class="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1.5 bg-[#FFD700] text-black text-[10px] font-bold uppercase tracking-widest rounded opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible group-hover/tooltip:-translate-x-2 transition-all duration-300 whitespace-nowrap z-50 pointer-events-none shadow-[0_4px_15px_rgba(255,215,0,0.3)]" data-astro-cid-bbe6dxrz> ${social.tooltip} <!-- Triangle --> <div class="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#FFD700] rotate-45" data-astro-cid-bbe6dxrz></div> </span> </a>`)} </div> </div> ${renderScript($$result, "C:/Users/Josue/Documents/development/portafolio/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} </div>  </div> </section>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="relative py-16 lg:py-24 px-6 max-w-6xl mx-auto" data-astro-cid-v2cbyr3p> <div class="relative z-10" data-astro-cid-v2cbyr3p> <!-- Título de la sección --> <div class="mb-12 reveal" data-astro-cid-v2cbyr3p> <h2 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-heading mb-6 tracking-tight" data-astro-cid-v2cbyr3p>
Sobre mí
</h2> </div> <!-- Contenido --> <div class="flex flex-col lg:flex-row gap-8 items-start reveal reveal-delay-200" data-astro-cid-v2cbyr3p> <div class="flex items-start gap-6 group w-full" data-astro-cid-v2cbyr3p> <!-- Línea Dorada Decorativa Desktop --> <div class="w-16 h-px bg-[#FFD700] shrink-0 mt-4 hidden md:block opacity-60" data-astro-cid-v2cbyr3p></div> <div class="space-y-8 text-white/80 text-lg lg:text-2xl leading-relaxed font-light tracking-wide max-w-4xl" data-astro-cid-v2cbyr3p> <div class="relative" data-astro-cid-v2cbyr3p> <!-- Línea Dorada Decorativa Mobile --> <div class="w-12 h-px bg-[#FFD700] mb-6 md:hidden opacity-60" data-astro-cid-v2cbyr3p></div> <p data-astro-cid-v2cbyr3p>
Soy un <span class="text-[#FFD700] mt-4 font-medium" data-astro-cid-v2cbyr3p>Desarrollador Fullstack</span> especializado en <span class="text-white font-medium" data-astro-cid-v2cbyr3p>Laravel & Next.js</span>. Mi enfoque combina la arquitectura técnica
                            robusta con una estética visual impecable,
                            transformando ideas complejas en experiencias
                            digitales fluidas y escalables.
</p> </div> <p data-astro-cid-v2cbyr3p>
Con una sólida base en ingeniería y una pasión por el
                        diseño, busco siempre el equilibrio perfecto entre <span class="text-white font-medium" data-astro-cid-v2cbyr3p>rendimiento</span> y <span class="text-white font-medium" data-astro-cid-v2cbyr3p>minimalismo</span>. Creo firmemente que el software de calidad no solo
                        debe funcionar perfectamente, sino también deleitar al
                        usuario en cada interacción.
</p> </div> </div> </div> </div> </section> `;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/About.astro", void 0);

const $$Astro$o = createAstro("https://josuekennedy.com");
const $$Laravel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Laravel;
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 264"${spreadAttributes(Astro2.props)}><path d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z" fill="#FF2D20"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/laravel.astro", void 0);

const $$Astro$n = createAstro("https://josuekennedy.com");
const $$Git = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Git;
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"${spreadAttributes(Astro2.props)}><path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/git.astro", void 0);

const $$Astro$m = createAstro("https://josuekennedy.com");
const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 1052 1052"${spreadAttributes(Astro2.props)}><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/javascript.astro", void 0);

const $$Astro$l = createAstro("https://josuekennedy.com");
const $$Typescript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Typescript;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"${spreadAttributes(Astro2.props)}><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"></path><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/typescript.astro", void 0);

const $$Astro$k = createAstro("https://josuekennedy.com");
const $$Php = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Php;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 -1 100 50"${spreadAttributes(Astro2.props)}><path fill="#fff" d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/php.astro", void 0);

const $$Astro$j = createAstro("https://josuekennedy.com");
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg fill="none" viewBox="0 0 54 33"${spreadAttributes(Astro2.props)}><g clip-path="url(#tailwindcss__a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="tailwindcss__a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/tailwind.astro", void 0);

const $$Astro$i = createAstro("https://josuekennedy.com");
const $$Mysql = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Mysql;
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"${spreadAttributes(Astro2.props)}><path fill="#FFF" d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z"></path><path fill="#FFF" d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/mysql.astro", void 0);

const $$Astro$h = createAstro("https://josuekennedy.com");
const $$Mongodb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Mongodb;
  return renderTemplate`${maybeRenderHead()}<svg fill="none" viewBox="0 0 120 257"${spreadAttributes(Astro2.props)}><path fill="#00ED64" d="M82.323 28.55C71.537 15.795 62.249 2.84 60.35.15c-.2-.2-.5-.2-.7 0-1.897 2.69-11.185 15.645-21.971 28.4C-54.902 146.238 52.26 225.661 52.26 225.661l.9.597c.798 12.258 2.795 29.896 2.795 29.896h7.99s1.998-17.539 2.797-29.896l.899-.697c.1 0 107.263-79.323 14.68-197.01ZM59.95 223.867s-4.793-4.086-6.092-6.179v-.199l5.793-128.151c0-.4.6-.4.6 0l5.792 128.151v.199c-1.299 2.093-6.093 6.179-6.093 6.179Z"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/mongodb.astro", void 0);

const $$Astro$g = createAstro("https://josuekennedy.com");
const $$Supabase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Supabase;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 109 113" fill="none"${spreadAttributes(Astro2.props)}><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase__paint0_linear)"></path><path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase__paint1_linear)" fill-opacity="0.2"></path><path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path><defs><linearGradient id="supabase__paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse"><stop stop-color="#249361"></stop><stop offset="1" stop-color="#3ECF8E"></stop></linearGradient><linearGradient id="supabase__paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-opacity="0"></stop></linearGradient></defs></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/supabase.astro", void 0);

const $$Astro$f = createAstro("https://josuekennedy.com");
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="-11.5 -10.23174 23 20.46348"${spreadAttributes(Astro2.props)}><title>React Logo</title><circle cx="0" cy="0" r="2.05" fill="#61dafb"></circle><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/react.astro", void 0);

const $$Astro$e = createAstro("https://josuekennedy.com");
const $$Nextjs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Nextjs;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 512 512"${spreadAttributes(Astro2.props)}> <circle cx="256" cy="256" r="256" fill="black"></circle> <path fill="url(#nextjs-a)" d="M374.6 401.3 194.5 170.8H151v170.4h30.1V218l157.9 203.1c11.9-6.3 23.9-13.1 35.6-19.8z"></path> <rect width="30.2" height="170.4" x="329.1" y="170.8" fill="url(#nextjs-b)"></rect> <defs> <linearGradient id="nextjs-a" x1="50%" y1="0%" x2="75%" y2="100%"> <stop offset="0%" stop-color="white"></stop> <stop offset="100%" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="nextjs-b" x1="50%" y1="0%" x2="50%" y2="100%"> <stop offset="0%" stop-color="white"></stop> <stop offset="100%" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/nextjs.astro", void 0);

const $$Astro$d = createAstro("https://josuekennedy.com");
const $$Java = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Java;
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 346"${spreadAttributes(Astro2.props)}><path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"></path><path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"></path><path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"></path><path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"></path><path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/java.astro", void 0);

const $$Astro$c = createAstro("https://josuekennedy.com");
const $$Prisma = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Prisma;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 310" preserveAspectRatio="xMidYMid"${spreadAttributes(Astro2.props)}><path fill="#fff" d="M254.313 235.519L148 9.749A17.063 17.063 0 00133.473.037a16.87 16.87 0 00-15.533 8.052L2.633 194.848a17.465 17.465 0 00.193 18.747L59.2 300.896a18.13 18.13 0 0020.363 7.489l163.599-48.392a17.929 17.929 0 0011.26-9.722 17.542 17.542 0 00-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 01-4.18 9.18h.007z"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/prisma.astro", void 0);

const $$Astro$b = createAstro("https://josuekennedy.com");
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 1024 1024" fill="none"${spreadAttributes(Astro2.props)}><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="currentColor"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/github.astro", void 0);

const $$Astro$a = createAstro("https://josuekennedy.com");
const $$AStro = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AStro;
  return renderTemplate`${maybeRenderHead()}<svg fill="none" viewBox="0 0 85 107"${spreadAttributes(Astro2.props)}><path fill="#fff" d="M27.59 91.136c-4.834-4.418-6.246-13.703-4.232-20.429 3.492 4.241 8.33 5.584 13.342 6.343 7.737 1.17 15.336.732 22.523-2.804.822-.405 1.582-.943 2.48-1.489.675 1.957.85 3.932.615 5.943-.573 4.896-3.01 8.678-6.885 11.545-1.55 1.147-3.19 2.172-4.79 3.253-4.917 3.323-6.247 7.22-4.4 12.888.044.139.084.277.183.614-2.51-1.124-4.344-2.76-5.742-4.911-1.475-2.27-2.177-4.78-2.214-7.498-.019-1.322-.019-2.656-.197-3.96-.434-3.178-1.926-4.601-4.737-4.683-2.884-.084-5.166 1.699-5.771 4.507-.046.216-.113.429-.18.68l.004.001Z"></path><path fill="url(#astro_icon_dark__a)" d="M27.59 91.136c-4.834-4.418-6.246-13.703-4.232-20.429 3.492 4.241 8.33 5.584 13.342 6.343 7.737 1.17 15.336.732 22.523-2.804.822-.405 1.582-.943 2.48-1.489.675 1.957.85 3.932.615 5.943-.573 4.896-3.01 8.678-6.885 11.545-1.55 1.147-3.19 2.172-4.79 3.253-4.917 3.323-6.247 7.22-4.4 12.888.044.139.084.277.183.614-2.51-1.124-4.344-2.76-5.742-4.911-1.475-2.27-2.177-4.78-2.214-7.498-.019-1.322-.019-2.656-.197-3.96-.434-3.178-1.926-4.601-4.737-4.683-2.884-.084-5.166 1.699-5.771 4.507-.046.216-.113.429-.18.68l.004.001Z"></path><path fill="#fff" d="M0 69.587s14.314-6.973 28.668-6.973L39.49 29.12c.405-1.62 1.588-2.72 2.924-2.72 1.335 0 2.518 1.1 2.924 2.72L56.16 62.614c17 0 28.668 6.973 28.668 6.973S60.514 3.352 60.467 3.219C59.769 1.261 58.591 0 57.003 0H27.827c-1.588 0-2.718 1.261-3.464 3.22C24.311 3.35 0 69.586 0 69.586Z"></path><defs><linearGradient id="astro_icon_dark__a" x1="22.47" x2="69.145" y1="107" y2="84.947" gradientUnits="userSpaceOnUse"><stop stop-color="#D83333"></stop><stop offset="1" stop-color="#F041FF"></stop></linearGradient></defs></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/a_stro.astro", void 0);

const $$Astro$9 = createAstro("https://josuekennedy.com");
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Skills;
  const allSkills = [
    { name: "TypeScript", Icon: $$Typescript, color: "#3178C6" },
    { name: "JavaScript", Icon: $$Javascript, color: "#F7DF1E" },
    { name: "PHP", Icon: $$Php, color: "#777BB4" },
    { name: "Next.js", Icon: $$Nextjs, color: "#FFFFFF" },
    { name: "Astro", Icon: $$AStro, color: "#FF5D01" },
    { name: "Laravel", Icon: $$Laravel, color: "#FF2D20" },
    { name: "React", Icon: $$React, color: "#61DAFB" },
    { name: "Tailwind", Icon: $$Tailwind, color: "#06B6D4" },
    { name: "Java", Icon: $$Java, color: "#007396" },
    { name: "MySQL", Icon: $$Mysql, color: "#4479A1" },
    { name: "MongoDB", Icon: $$Mongodb, color: "#47A248" },
    { name: "Supabase", Icon: $$Supabase, color: "#3ECF8E" },
    { name: "GitHub", Icon: $$Github, color: "#FFFFFF" },
    { name: "Prisma", Icon: $$Prisma, color: "#2D3748" },
    { name: "Git", Icon: $$Git, color: "#F05032" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-16 lg:py-24 px-6 max-w-6xl mx-auto relative overflow-hidden bg-[#1a1a1a]" data-astro-cid-ab4ihpzs> <div class="relative z-10" data-astro-cid-ab4ihpzs> <!-- Título de la sección --> <div class="mb-12 reveal" data-astro-cid-ab4ihpzs> <h2 class="text-5xl lg:text-7xl font-bold text-white font-serif mb-8" data-astro-cid-ab4ihpzs>
Tecnologías
</h2> <div class="w-16 h-[2px] bg-[#FFD700] opacity-50" data-astro-cid-ab4ihpzs></div> </div> <!-- Grid Orgánico y Elegante --> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 justify-items-center" data-astro-cid-ab4ihpzs> ${allSkills.map((skill, index) => renderTemplate`<div class="group relative reveal reveal-scale"${addAttribute(`transition-delay: ${index * 50}ms;`, "style")} data-astro-cid-ab4ihpzs> <!-- Glass Card --> <div class="relative w-[140px] h-[140px] lg:w-[180px] lg:h-[180px] bg-white/5 border border-white/10 rounded-4xl lg:rounded-[3rem] p-6 lg:p-8 flex flex-col items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden group-hover:scale-105 group-hover:bg-white/10 group-hover:border-[#FFD700]/30 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]" data-astro-cid-ab4ihpzs> <!-- Shine effect on hover --> <div class="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" data-astro-cid-ab4ihpzs></div> <!-- Icon Container with Glow --> <div class="relative z-10 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center transition-all duration-700 group-hover:-translate-y-2" data-astro-cid-ab4ihpzs> <!-- Background Bloom Glow --> <div class="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"${addAttribute(`background-color: ${skill.color}`, "style")} data-astro-cid-ab4ihpzs></div> ${renderComponent($$result, "skill.Icon", skill.Icon, { "class": "w-full h-full object-contain relative z-20 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700", "data-astro-cid-ab4ihpzs": true })} </div> <!-- Name Label (Sophisticated) --> <div class="relative z-10 flex flex-col items-center" data-astro-cid-ab4ihpzs> <span class="text-white/50 text-[10px] lg:text-xs font-bold uppercase tracking-[0.25em] transition-all duration-700 group-hover:text-[#FFD700] group-hover:tracking-[0.4em]" data-astro-cid-ab4ihpzs> ${skill.name} </span> </div> </div> </div>`)} </div> </div> </section> `;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/Skills.astro", void 0);

const $$Astro$8 = createAstro("https://josuekennedy.com");
const $$MaterialUi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MaterialUi;
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 222"${spreadAttributes(Astro2.props)}><path d="M215.8 151.1a7.1 7.1 0 0 0 3.5-6.1l.2-41.2c0-2.5 1.3-4.9 3.5-6.1l22.3-12.8A7.1 7.1 0 0 1 256 91v74.8c0 2.6-1.4 5-3.6 6.2l-84.2 48.4a7.1 7.1 0 0 1-7 0L95 182.6a7.1 7.1 0 0 1-3.6-6.2v-37.7h.1v-.1l.1-.1 54.5-31.3v-.1h-.1V70a7.1 7.1 0 0 0-10.6-6.2L95.1 87.2a7.1 7.1 0 0 1-7.1 0L47.4 63.8A7.1 7.1 0 0 0 36.7 70v66.8a7.1 7.1 0 0 1-10.6 6.2L3.6 130A7.1 7.1 0 0 1 0 124L.2 7.1A7.1 7.1 0 0 1 10.9.9l77 44.3a7.1 7.1 0 0 0 7.2 0L172 1a7.1 7.1 0 0 1 10.7 6.2V124c0 2.5-1.3 4.9-3.6 6.1L139 153.4a7.1 7.1 0 0 0 0 12.3l22.3 12.7a7.1 7.1 0 0 0 7 0l47.6-27.3Zm4.6-104.8a7.1 7.1 0 0 0 10.8 6l21.3-12.7a7.1 7.1 0 0 0 3.5-6.1V7.4a7.1 7.1 0 0 0-10.8-6.1L224 14.1a7.1 7.1 0 0 0-3.5 6v26.2Z" fill="#007FFF"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/material_ui.astro", void 0);

const $$Astro$7 = createAstro("https://josuekennedy.com");
const $$Strapi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Strapi;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"${spreadAttributes(Astro2.props)}><path fill="#4945FF" d="M0 88.747c0-41.836 0-62.754 12.997-75.75C25.993 0 46.91 0 88.747 0h78.507c41.835 0 62.752 0 75.75 12.997C256 25.993 256 46.91 256 88.747v78.507c0 41.835 0 62.752-12.997 75.75C230.006 256 209.09 256 167.253 256H88.748c-41.836 0-62.754 0-75.75-12.997C0 230.006 0 209.09 0 167.253V88.748Z"></path><path fill="#FFF" d="M176.64 77.653H90.453V121.6H134.4v43.946h43.946V79.36c0-.943-.764-1.707-1.706-1.707Z"></path><path fill="#FFF" d="M132.693 121.6h1.707v1.707h-1.707z"></path><path fill="#9593FF" d="M90.453 121.6h42.24c.943 0 1.707.764 1.707 1.706v42.24H92.16a1.706 1.706 0 0 1-1.707-1.706V121.6ZM134.4 165.546h43.946l-42.49 42.49c-.537.538-1.456.157-1.456-.602v-41.888ZM90.453 121.6H48.566c-.76 0-1.14-.92-.603-1.457l42.49-42.49V121.6Z"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/strapi.astro", void 0);

const $$Astro$6 = createAstro("https://josuekennedy.com");
const $$Gitlab = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Gitlab;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 32 32" fill="none" aria-labelledby="tanukiHomeDesktop"${spreadAttributes(Astro2.props)}><path d="m31.46 12.78-.04-.12-4.35-11.35A1.14 1.14 0 0 0 25.94.6c-.24 0-.47.1-.66.24-.19.15-.33.36-.39.6l-2.94 9h-11.9l-2.94-9A1.14 1.14 0 0 0 6.07.58a1.15 1.15 0 0 0-1.14.72L.58 12.68l-.05.11a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48 6.67-5h.02a8.09 8.09 0 0 0 2.7-9.36Z" fill="#E24329"></path><path d="m31.46 12.78-.04-.12a14.75 14.75 0 0 0-5.86 2.64l-9.55 7.24 6.09 4.6 6.67-5h.02a8.09 8.09 0 0 0 2.67-9.36Z" fill="#FC6D26"></path><path d="m9.9 27.14 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48-6.1-4.6-6.07 4.6Z" fill="#FCA326"></path><path d="M6.44 15.3a14.71 14.71 0 0 0-5.86-2.63l-.05.12a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 6.1-4.6-9.56-7.24Z" fill="#FC6D26"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/gitlab.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      year: "2025 - Presente",
      title: "Desarrollador Web",
      company: "Desarrollamelo",
      url: "https://desarrollamelo.com/inmobiliario/",
      description: "Participaci\xF3n activa en el an\xE1lisis y expansi\xF3n de modelos de negocio digitales. Contribu\xED en la creaci\xF3n y mejora de plataformas clave como: <br/><br/> \u2022 <b>LBC Seguros:</b> Desarrollo de landing page con conexi\xF3n robusta a Strapi CMS para gesti\xF3n din\xE1mica de contenido.<br/> \u2022 <b>TLC ecommerce Telecompro:</b> Implementaci\xF3n de funcionalidades avanzadas para comercio electr\xF3nico, optimizaci\xF3n de la gesti\xF3n de productos y refinamiento de la interfaz de usuario.",
      technologies: [
        { name: "Next.js", Icon: $$Nextjs },
        { name: "Tailwind", Icon: $$Tailwind },
        { name: "Material UI", Icon: $$MaterialUi },
        { name: "Strapi", Icon: $$Strapi },
        { name: "GitLab", Icon: $$Gitlab }
      ],
      delay: "100"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-16 lg:py-24 px-6 max-w-6xl mx-auto relative overflow-hidden" data-astro-cid-xpq65ryk> <div data-astro-cid-xpq65ryk> <!-- Título Editorial Izquierda --> <div class="mb-20 reveal" data-astro-cid-xpq65ryk> <h2 class="text-5xl lg:text-7xl font-bold text-white font-serif mb-4" data-astro-cid-xpq65ryk>
Experiencia
</h2> <div class="w-16 h-[2px] bg-[#FFD700] opacity-50" data-astro-cid-xpq65ryk></div> </div> <!-- Timeline Container --> <div class="relative" data-astro-cid-xpq65ryk> <!-- Línea Vertical Central (Desplazada a la izquierda) --> <div class="absolute left-46 lg:left-48 top-0 bottom-0 w-px bg-white/10 hidden sm:block" data-astro-cid-xpq65ryk></div> <!-- Items de Experiencia --> <div class="space-y-16 lg:space-y-24" data-astro-cid-xpq65ryk> ${experiences.map((exp, index) => renderTemplate`<div class="relative flex flex-col sm:flex-row items-start gap-8 lg:gap-12 reveal"${addAttribute(`transition-delay: ${index * 200}ms;`, "style")} data-astro-cid-xpq65ryk> <!-- Año y Punto --> <div class="flex items-center gap-4 sm:w-56 shrink-0" data-astro-cid-xpq65ryk> <!-- Año Box --> <div class="bg-white/5 border border-white/10 rounded px-4 py-1 w-auto text-center" data-astro-cid-xpq65ryk> <span class="text-white/70 text-xs font-bold tracking-widest" data-astro-cid-xpq65ryk>${exp.year}</span> </div> <!-- Punto Dorado Recto en la línea --> <div class="relative z-10 w-4 h-4 rounded-full bg-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.5)] hidden sm:block" data-astro-cid-xpq65ryk> <div class="absolute inset-0 rounded-full bg-[#FFD700] animate-ping opacity-20" data-astro-cid-xpq65ryk></div> </div> </div> <!-- Contenido --> <div class="flex-1 pt-1" data-astro-cid-xpq65ryk> <h3 class="text-2xl lg:text-3xl font-bold text-white mb-2 font-sans tracking-tight" data-astro-cid-xpq65ryk> ${exp.title} </h3> <a${addAttribute(exp.url, "href")} target="_blank" rel="noopener noreferrer" class="inline-block text-[#FFD700]/80 hover:text-[#FFD700] font-medium text-sm lg:text-base mb-4 tracking-wide transition-colors duration-300 hover:underline hover:underline-offset-4" data-astro-cid-xpq65ryk> ${exp.company} </a> <!-- Tags de Tecnologías --> <div class="flex flex-wrap gap-3 mb-6" data-astro-cid-xpq65ryk> ${exp.technologies?.map((tech) => renderTemplate`<div class="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full group hover:border-[#FFD700]/50 transition-all duration-300" data-astro-cid-xpq65ryk> ${renderComponent($$result, "tech.Icon", tech.Icon, { "class": "w-4 h-4 text-white/50 group-hover:text-white transition-colors", "data-astro-cid-xpq65ryk": true })} <span class="text-white/70 text-[10px] font-bold uppercase tracking-wider group-hover:text-white transition-colors" data-astro-cid-xpq65ryk> ${tech.name} </span> </div>`)} </div> <div class="relative" data-astro-cid-xpq65ryk> <p class="text-white/70 leading-relaxed text-sm lg:text-base font-light text-justify sm:text-left" data-astro-cid-xpq65ryk>${unescapeHTML(exp.description)}</p> </div> </div> </div>`)} </div> </div> </div> </section> `;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/Experience.astro", void 0);

const $$Astro$5 = createAstro("https://josuekennedy.com");
const $$Openai = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Openai;
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 260"${spreadAttributes(Astro2.props)}><path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/openai.astro", void 0);

const $$Astro$4 = createAstro("https://josuekennedy.com");
const $$FramerMotion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FramerMotion;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 384" preserveAspectRatio="xMidYMid"${spreadAttributes(Astro2.props)}><path fill="#fff" d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/framer_motion.astro", void 0);

const $$Astro$3 = createAstro("https://josuekennedy.com");
const $$Clerk = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Clerk;
  return renderTemplate`${maybeRenderHead()}<svg fill="none" viewBox="0 0 128 128"${spreadAttributes(Astro2.props)}><circle cx="64" cy="64" r="20" fill="#fff"></circle><path fill="#fff" fill-opacity=".4" d="M99.572 10.788c1.999 1.34 2.17 4.156.468 5.858L85.424 31.262c-1.32 1.32-3.37 1.53-5.033.678A35.846 35.846 0 0 0 64 28c-19.882 0-36 16.118-36 36a35.846 35.846 0 0 0 3.94 16.391c.851 1.663.643 3.712-.678 5.033L16.646 100.04c-1.702 1.702-4.519 1.531-5.858-.468C3.974 89.399 0 77.163 0 64 0 28.654 28.654 0 64 0c13.163 0 25.399 3.974 35.572 10.788Z"></path><path fill="#fff" d="M100.04 111.354c1.702 1.702 1.531 4.519-.468 5.858C89.399 124.026 77.164 128 64 128c-13.164 0-25.399-3.974-35.572-10.788-2-1.339-2.17-4.156-.468-5.858l14.615-14.616c1.322-1.32 3.37-1.53 5.033-.678A35.847 35.847 0 0 0 64 100a35.846 35.846 0 0 0 16.392-3.94c1.662-.852 3.712-.643 5.032.678l14.616 14.616Z"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/clerk.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "ChatGPT Clone",
      category: "Fullstack",
      description: "R\xE9plica funcional de ChatGPT con streaming de respuestas e historial.",
      image: "/images/project-1.png",
      link: "https://clone-chatgpt-nextjs.vercel.app/",
      repo: "https://github.com/programfive/chatgpt-clone",
      tags: [
        { name: "Next.js", Icon: $$Nextjs },
        { name: "OpenAI", Icon: $$Openai },
        { name: "Prisma", Icon: $$Prisma },
        { name: "Clerk", Icon: $$Clerk }
      ],
      delay: "100"
    },
    {
      title: "WhatsApp Clone",
      category: "Fullstack",
      description: "Mensajer\xEDa en tiempo real con estados de presencia y autenticaci\xF3n.",
      image: "/images/project-2.png",
      link: "https://clone-whatsapp-nextjs.vercel.app/",
      repo: "https://github.com/programfive/whatsapp-clone",
      tags: [
        { name: "Next.js", Icon: $$Nextjs },
        { name: "Supabase", Icon: $$Supabase },
        { name: "Tailwind", Icon: $$Tailwind }
      ],
      delay: "200"
    },
    {
      title: "Weather Forecast",
      category: "Frontend",
      description: "App de clima con animaciones fluidas y datos de OpenWeather.",
      image: "/images/project-3.png",
      link: "https://programfive.github.io/WeatherForecast/",
      repo: "https://github.com/programfive/WeatherForecast",
      tags: [
        { name: "React", Icon: $$React },
        { name: "Framer", Icon: $$FramerMotion },
        { name: "Tailwind", Icon: $$Tailwind }
      ],
      delay: "300"
    },
    {
      title: "Sistema Restaurante",
      category: "ERP / POS",
      description: "Gesti\xF3n integral: inventario, ventas y reportes PDF.",
      image: "/images/project-4.png",
      repo: "https://github.com/programfive/restaurante",
      tags: [
        { name: "Laravel", Icon: $$Laravel },
        { name: "Filament", Icon: $$Php },
        { name: "Tailwind", Icon: $$Tailwind },
        { name: "MySQL", Icon: $$Mysql }
      ],
      delay: "400"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="portfolio" class="relative py-16 lg:py-24 px-6 bg-[#1a1a1a] overflow-hidden" data-astro-cid-uhrerali> <div class="max-w-6xl mx-auto" data-astro-cid-uhrerali> <!-- Título de la sección --> <div class="mb-20 text-center lg:text-left reveal" data-astro-cid-uhrerali> <h2 class="text-5xl lg:text-7xl font-bold text-white font-serif mb-4 flex flex-col lg:flex-row lg:items-center gap-4" data-astro-cid-uhrerali>
Mis Proyectos
</h2> <div class="w-20 h-[3px] bg-[#FFD700] mx-auto lg:mx-0" data-astro-cid-uhrerali></div> </div> <!-- Grid de Proyectos Mejorado --> <div class="grid grid-cols-1 md:grid-cols-2 gap-10" data-astro-cid-uhrerali> ${projects.map((project, index) => renderTemplate`<div${addAttribute(`group flex flex-col bg-[#1f1f1f] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FFD700]/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] reveal ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`, "class")}${addAttribute(`transition-delay: ${index * 150}ms;`, "style")} data-astro-cid-uhrerali> <!-- Contenedor de Imagen con Overlay --> <div class="relative aspect-[16/9] overflow-hidden" data-astro-cid-uhrerali> <img${addAttribute(project.image, "src")}${addAttribute(`Vista previa del proyecto ${project.title} - ${project.category}`, "alt")} loading="lazy" class="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" data-astro-cid-uhrerali> <div class="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent opacity-60" data-astro-cid-uhrerali></div> <!-- Categoría flotante --> <span class="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-[#FFD700] text-[10px] font-bold uppercase tracking-wider rounded-full" data-astro-cid-uhrerali> ${project.category} </span> </div> <!-- Contenido del Card --> <div class="p-8 flex flex-col flex-grow" data-astro-cid-uhrerali> <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors" data-astro-cid-uhrerali> ${project.title} </h3> <p class="text-white/70 text-sm leading-relaxed mb-6" data-astro-cid-uhrerali> ${project.description} </p> <!-- Tags de Tecnologías --> <div class="flex flex-wrap gap-2 mb-8 mt-auto" data-astro-cid-uhrerali> ${project.tags.map((tag) => renderTemplate`<span class="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-white/70 font-medium group/tag hover:bg-white/10 hover:border-[#FFD700]/30 transition-all duration-300" data-astro-cid-uhrerali> ${renderComponent($$result, "tag.Icon", tag.Icon, { "class": "w-3.5 h-3.5 text-[#FFD700]/70 group-hover/tag:text-[#FFD700] transition-colors", "data-astro-cid-uhrerali": true })} ${tag.name} </span>`)} </div> <!-- Botones de Acción --> <div class="grid grid-cols-2 gap-4" data-astro-cid-uhrerali> ${project.link && renderTemplate`<a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 py-3 bg-[#FFD700] text-black text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-all duration-300" data-astro-cid-uhrerali> <span data-astro-cid-uhrerali>Demo Live</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uhrerali><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-uhrerali></path><polyline points="15 3 21 3 21 9" data-astro-cid-uhrerali></polyline><line x1="10" y1="14" x2="21" y2="3" data-astro-cid-uhrerali></line></svg> </a>`} ${project.repo && renderTemplate`<a${addAttribute(project.repo, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-black transition-all duration-300" data-astro-cid-uhrerali> <span data-astro-cid-uhrerali>GitHub</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uhrerali><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-astro-cid-uhrerali></path></svg> </a>`} </div> </div> </div>`)} </div> <!-- Botón Ver Más --> <div class="mt-20 flex justify-center reveal reveal-scale" data-astro-cid-uhrerali> <a href="https://github.com/programfive" target="_blank" class="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-bold text-sm tracking-widest uppercase rounded-lg overflow-hidden transition-all duration-300 hover:text-black shadow-[0_0_20px_rgba(255,215,0,0.05)]" data-astro-cid-uhrerali> <span class="relative z-10 flex items-center gap-3" data-astro-cid-uhrerali>
Explorar Todos los Repositorios
<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-uhrerali><line x1="5" y1="12" x2="19" y2="12" data-astro-cid-uhrerali></line><polyline points="12 5 19 12 12 19" data-astro-cid-uhrerali></polyline></svg> </span> <div class="absolute inset-0 bg-[#FFD700] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" data-astro-cid-uhrerali></div> </a> </div> </div> </section> `;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/Portfolio.astro", void 0);

const $$Astro$2 = createAstro("https://josuekennedy.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="relative py-16 lg:py-24 px-6 bg-[#1a1a1a] overflow-hidden"> <!-- Decoración de fondo --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700] opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div> <div class="max-w-6xl mx-auto relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"> <!-- Columna Izquierda: Formulario --> <div class="order-2 lg:order-1 reveal reveal-left"> <form id="contact-form"> <div class="space-y-4"> <label for="email" class="block text-sm font-medium text-white/80 ml-1">Tu Email</label> <input type="email" id="email" name="email" placeholder="correo@ejemplo.com" class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD700]/50 transition-colors"> <p id="error-email" class="text-xs text-red-400 mt-1 h-3"></p> </div> <div class="space-y-4"> <label for="subject" class="block text-sm font-medium text-white/80 ml-1">Asunto</label> <input type="text" id="subject" name="subject" placeholder="¿En qué puedo ayudarte?" class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD700]/50 transition-colors"> <p id="error-subject" class="text-xs text-red-400 mt-1 h-3"></p> </div> <div class="space-y-4"> <label for="message" class="block text-sm font-medium text-white/80 ml-1">Tu Mensaje</label> <textarea id="message" name="message" rows="5" placeholder="Cuéntame sobre tu proyecto..." class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD700]/50 transition-colors resize-none"></textarea> <p id="error-message" class="text-xs text-red-400 mt-1 h-3"></p> </div> <button type="submit" class="flex items-center justify-center gap-2 w-full lg:w-auto px-10 py-3 bg-[#FFD700] text-black text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-all duration-300"> <span>Enviar Mensaje</span> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="22" y1="2" x2="11" y2="13"></line> <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon> </svg> </button> <div id="form-status" class="text-center lg:text-left text-sm font-medium mt-4 h-6"></div> </form> </div> <!-- Columna Derecha: Información de Contacto --> <div class="order-1 lg:order-2 space-y-12 reveal reveal-right"> <div> <span class="text-[#FFD700] font-medium tracking-[0.3em] uppercase text-xs">Contacto</span> <h2 class="text-5xl lg:text-7xl font-bold text-white mt-4 font-serif leading-tight">
Hablemos<span class="text-[#FFD700]">.</span> </h2> <p class="text-white/70 mt-6 text-lg font-light leading-relaxed max-w-md">
Transformando ideas en experiencias digitales de <span class="text-white font-normal">clase mundial</span>. Estoy listo para el siguiente desafío.
</p> </div> <!-- Info Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-10"> <div class="flex gap-5 group"> <div class="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> </div> <div> <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-1">
Llamar
</h4> <p class="text-white/60 text-sm font-light">
+591 76620678
</p> </div> </div> <div class="flex gap-5 group"> <div class="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> </div> <div> <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-1">
Email
</h4> <p class="text-white/60 text-sm font-light">
josuekennedy@gmail.com
</p> </div> </div> <div class="flex gap-5 group"> <div class="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> </div> <div> <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-1">
Sitio Web
</h4> <p class="text-white/60 text-sm font-light">
josuekennedy.com
</p> </div> </div> <div class="flex gap-5 group"> <div class="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> </div> <div> <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-1">
Ubicación
</h4> <p class="text-white/60 text-sm font-light">
Santa Cruz de la Sierra, Bolivia
</p> </div> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/Josue/Documents/development/portafolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/Contact.astro", void 0);

const $$Astro$1 = createAstro("https://josuekennedy.com");
const $$Linkeding = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Linkeding;
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"${spreadAttributes(Astro2.props)}><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/linkeding.astro", void 0);

const $$Astro = createAstro("https://josuekennedy.com");
const $$Instragram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Instragram;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${spreadAttributes(Astro2.props)}> <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg>`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/icons/instragram.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-[#1a1a1a] pb-24 pt-10 overflow-hidden"> <div class="max-w-6xl mx-auto px-6 relative z-10"> <!-- Línea con Iconos Sociales --> <div class="relative flex items-center justify-center mb-16"> <!-- Línea Izquierda --> <div class="grow h-px bg-linear-to-r from-transparent via-[#FFD700]/30 to-[#FFD700]"></div> <!-- Contenedor de Iconos --> <div class="flex items-center gap-6 px-8 relative z-10 bg-[#1a1a1a]"> <a href="https://github.com/programfive" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-white/60 hover:text-[#FFD700] transition-all duration-300 hover:scale-110"> ${renderComponent($$result, "GitHub", $$Github, { "class": "w-5 h-5" })} </a> <a href="https://www.linkedin.com/in/josue-kennedy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-white/60 hover:text-[#FFD700] transition-all duration-300 hover:scale-110"> ${renderComponent($$result, "LinkedIn", $$Linkeding, { "class": "w-5 h-5" })} </a> <a href="https://www.instagram.com/josuekennedy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-white/60 hover:text-[#FFD700] transition-all duration-300 hover:scale-110"> ${renderComponent($$result, "Instagram", $$Instragram, { "class": "w-5 h-5" })} </a> </div> <!-- Línea Derecha --> <div class="grow h-px bg-linear-to-r from-[#FFD700] via-[#FFD700]/30 to-transparent"></div> </div> <!-- Texto Final --> <div class="text-center space-y-8 reveal reveal-scale"> <h2 class="text-3xl lg:text-5xl font-serif text-[#FFD700]/90 italic tracking-tight opacity-70 hover:opacity-100 transition-opacity duration-700">
"Thanks for Scrolling"
</h2> <div class="pt-8 flex flex-col items-center gap-4"> <p class="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">
&copy; ${currentYear} Josué David Kennedy
</p> <div class="w-1 h-1 rounded-full bg-[#FFD700]/40"></div> </div> </div> </div> </footer> <!-- Botón de scroll to top Minimalista --> <button id="scroll-to-top" class="fixed bottom-8 right-8 w-12 h-12 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center shadow-2xl hover:border-[#FFD700]/50 hover:text-[#FFD700] text-white/50 opacity-0 invisible transition-all duration-500 z-50 group" aria-label="Volver arriba"> <svg class="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> </svg> </button> ${renderScript($$result, "C:/Users/Josue/Documents/development/portafolio/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Josue/Documents/development/portafolio/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Josue Kennedy | Desarrollador Fullstack - Laravel & Next.js", "description": "Descubre el portafolio de Josue Kennedy. Especialista en crear soluciones web robustas con Laravel, Next.js y tecnolog\xEDas modernas. Disponible para proyectos freelance." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-[#1a1a1a] text-white"> <!-- Navegación --> ${renderComponent($$result2, "Navigation", $$Navigation, {})} <!-- Secciones --> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Portfolio", $$Portfolio, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} <!-- Footer --> ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })} ${renderScript($$result, "C:/Users/Josue/Documents/development/portafolio/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Josue/Documents/development/portafolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Josue/Documents/development/portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
