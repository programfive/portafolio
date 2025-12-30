import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_DBoMHC80.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_THdiUqDg.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CEfGTo_V.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Josue/Documents/development/portafolio/","cacheDir":"file:///C:/Users/Josue/Documents/development/portafolio/node_modules/.astro/","outDir":"file:///C:/Users/Josue/Documents/development/portafolio/dist/","srcDir":"file:///C:/Users/Josue/Documents/development/portafolio/src/","publicDir":"file:///C:/Users/Josue/Documents/development/portafolio/public/","buildClientDir":"file:///C:/Users/Josue/Documents/development/portafolio/dist/client/","buildServerDir":"file:///C:/Users/Josue/Documents/development/portafolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DiYEMBOl.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://josuekennedy.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Josue/Documents/development/portafolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/entrypoint":"entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_3ssZsB7p.mjs","C:/Users/Josue/Documents/development/portafolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DU_4T-5f.mjs","C:/Users/Josue/Documents/development/portafolio/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.B0Ic8F8m.js","C:/Users/Josue/Documents/development/portafolio/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.DfLIl89W.js","C:/Users/Josue/Documents/development/portafolio/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.d2_LlysS.js","C:/Users/Josue/Documents/development/portafolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.C6MupDv-.js","C:/Users/Josue/Documents/development/portafolio/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.DY0EXZno.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Josue/Documents/development/portafolio/src/pages/index.astro?astro&type=script&index=0&lang.ts","const o={root:null,rootMargin:\"0px\",threshold:.15},s=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&r.target.classList.add(\"active\")})},o);document.querySelectorAll('[class*=\"reveal\"]').forEach(e=>{s.observe(e)});"],["C:/Users/Josue/Documents/development/portafolio/src/components/Navigation.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"navbar-desktop\");const o=document.querySelectorAll(\".mobile-nav-item\"),c=document.querySelectorAll(\"section\");let i=!1;window.addEventListener(\"scroll\",()=>{const e=document.getElementById(\"nav-pill\");window.scrollY>50?(e?.classList.add(\"bg-white/5\",\"border-white/10\",\"backdrop-blur-xl\"),e?.classList.remove(\"border-white/0\",\"bg-white/0\")):(e?.classList.remove(\"bg-white/5\",\"border-white/10\",\"backdrop-blur-xl\"),e?.classList.add(\"border-white/0\",\"bg-white/0\"))});const n={root:null,rootMargin:\"-30% 0px -30% 0px\",threshold:[0,.1,.5]},a=e=>{e&&o.forEach(t=>{t.getAttribute(\"href\")===`#${e}`?t.classList.add(\"active\"):t.classList.remove(\"active\")})},d=new IntersectionObserver(e=>{if(i)return;const t=e.filter(s=>s.isIntersecting);if(t.length>0){const s=t.reduce((r,l)=>r.intersectionRatio>l.intersectionRatio?r:l);a(s.target.id)}},n);c.forEach(e=>d.observe(e));o.forEach(e=>{e.addEventListener(\"click\",t=>{i=!0,e.getAttribute(\"href\")&&(o.forEach(r=>r.classList.remove(\"active\")),e.classList.add(\"active\"),e.style.transform=\"scale(0.9)\",setTimeout(()=>e.style.transform=\"scale(1)\",150),setTimeout(()=>{i=!1},1e3))})});"],["C:/Users/Josue/Documents/development/portafolio/src/components/Hero.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"socials-container\"),e=document.getElementById(\"socials-line\"),t=document.getElementById(\"home\"),i=new IntersectionObserver(o=>{o.forEach(c=>{c.isIntersecting?(s?.classList.remove(\"bg-white/5\",\"backdrop-blur-xl\",\"border-white/10\",\"shadow-2xl\"),e&&(e.style.opacity=\"1\",e.style.transform=\"scaleY(1)\")):(s?.classList.add(\"bg-white/5\",\"backdrop-blur-xl\",\"border-white/10\",\"shadow-2xl\"),e&&(e.style.opacity=\"0\",e.style.transform=\"scaleY(0)\"))})},{threshold:.1});t&&i.observe(t);"],["C:/Users/Josue/Documents/development/portafolio/src/components/Footer.astro?astro&type=script&index=0&lang.ts","const i=document.getElementById(\"scroll-to-top\");window.addEventListener(\"scroll\",()=>{window.scrollY>400?(i?.classList.remove(\"opacity-0\",\"invisible\"),i?.classList.add(\"opacity-100\",\"visible\")):(i?.classList.add(\"opacity-0\",\"invisible\"),i?.classList.remove(\"opacity-100\",\"visible\"))});i?.addEventListener(\"click\",()=>{window.scrollTo({top:0,behavior:\"smooth\"})});"]],"assets":["/_astro/inter-greek-ext-300-normal.l2DDyC6M.woff2","/_astro/inter-cyrillic-300-normal.BnqRxXuy.woff2","/_astro/inter-cyrillic-ext-300-normal.CgCALhwJ.woff2","/_astro/inter-greek-300-normal.DmGD3g_f.woff2","/_astro/inter-vietnamese-300-normal.Bdr24Bqb.woff2","/_astro/inter-cyrillic-600-normal.CWCymEST.woff2","/_astro/inter-latin-300-normal.BVlfKGgI.woff2","/_astro/inter-latin-ext-300-normal.CPgO9Ksf.woff2","/_astro/inter-cyrillic-ext-600-normal.Dfes3d0z.woff2","/_astro/inter-greek-600-normal.plRanbMR.woff2","/_astro/inter-vietnamese-600-normal.Cc8MFFhd.woff2","/_astro/inter-greek-ext-600-normal.DRtmH8MT.woff2","/_astro/inter-latin-ext-600-normal.D2bJ5OIk.woff2","/_astro/inter-cyrillic-400-normal.obahsSVq.woff2","/_astro/inter-cyrillic-ext-400-normal.BQZuk6qB.woff2","/_astro/inter-latin-600-normal.LgqL8muc.woff2","/_astro/inter-greek-ext-400-normal.DGGRlc-M.woff2","/_astro/inter-greek-400-normal.B4URO6DV.woff2","/_astro/inter-latin-ext-400-normal.C1nco2VV.woff2","/_astro/inter-vietnamese-400-normal.DMkecbls.woff2","/_astro/inter-latin-400-normal.C38fXH4l.woff2","/_astro/inter-cyrillic-ext-500-normal.B0yAr1jD.woff2","/_astro/inter-greek-ext-500-normal.C4iEst2y.woff2","/_astro/inter-greek-500-normal.BIZE56-Y.woff2","/_astro/inter-cyrillic-500-normal.BasfLYem.woff2","/_astro/inter-vietnamese-500-normal.DOriooB6.woff2","/_astro/inter-latin-ext-500-normal.CV4jyFjo.woff2","/_astro/inter-latin-500-normal.Cerq10X2.woff2","/_astro/inter-cyrillic-ext-700-normal.BjwYoWNd.woff2","/_astro/inter-cyrillic-700-normal.CjBOestx.woff2","/_astro/inter-greek-ext-700-normal.qfdV9bQt.woff2","/_astro/inter-greek-700-normal.C3JjAnD8.woff2","/_astro/inter-vietnamese-700-normal.DlLaEgI2.woff2","/_astro/outfit-latin-ext-300-normal.BYS6Dpvq.woff2","/_astro/inter-latin-700-normal.Yt3aPRUw.woff2","/_astro/inter-latin-ext-700-normal.Ca8adRJv.woff2","/_astro/outfit-latin-ext-500-normal.zeox_O30.woff2","/_astro/outfit-latin-300-normal.CRYTwY6m.woff2","/_astro/outfit-latin-500-normal.DKnIMDSk.woff2","/_astro/outfit-latin-ext-400-normal.5tcqmc2S.woff2","/_astro/outfit-latin-400-normal.BGsTXAXT.woff2","/_astro/outfit-latin-ext-700-normal.CI4iH74K.woff2","/_astro/outfit-latin-700-normal.Cu9v6i1X.woff2","/_astro/outfit-latin-ext-600-normal.B85nYjL1.woff2","/_astro/outfit-latin-600-normal.B7SfZ07L.woff2","/_astro/inter-greek-ext-300-normal.DLbbeei1.woff","/_astro/inter-cyrillic-300-normal.LR1W_oT8.woff","/_astro/inter-cyrillic-ext-300-normal.RId2JxDB.woff","/_astro/inter-greek-300-normal.BrhSP0vQ.woff","/_astro/inter-vietnamese-300-normal.DDGmYYdT.woff","/_astro/inter-cyrillic-600-normal.4D_pXhcN.woff","/_astro/inter-latin-300-normal.i8F0SvXL.woff","/_astro/inter-latin-ext-300-normal.Dp1L8vcn.woff","/_astro/inter-vietnamese-600-normal.BuLX-rYi.woff","/_astro/inter-cyrillic-ext-600-normal.Bcila6Z-.woff","/_astro/inter-greek-600-normal.BZpKdvQh.woff","/_astro/inter-greek-ext-600-normal.B8X0CLgF.woff","/_astro/inter-cyrillic-400-normal.HOLc17fK.woff","/_astro/inter-latin-ext-600-normal.CIVaiw4L.woff","/_astro/inter-latin-600-normal.CiBQ2DWP.woff","/_astro/inter-greek-ext-400-normal.KugGGMne.woff","/_astro/inter-greek-400-normal.q2sYcFCs.woff","/_astro/inter-vietnamese-400-normal.Bbgyi5SW.woff","/_astro/inter-cyrillic-ext-400-normal.DQukG94-.woff","/_astro/inter-latin-400-normal.CyCys3Eg.woff","/_astro/inter-latin-ext-400-normal.77YHD8bZ.woff","/_astro/inter-cyrillic-ext-500-normal.BmqWE9Dz.woff","/_astro/inter-greek-ext-500-normal.2j5mBUwD.woff","/_astro/inter-greek-500-normal.Xzm54t5V.woff","/_astro/inter-cyrillic-500-normal.CxZf_p3X.woff","/_astro/inter-vietnamese-500-normal.mJboJaSs.woff","/_astro/inter-latin-ext-500-normal.BxGbmqWO.woff","/_astro/inter-latin-500-normal.BL9OpVg8.woff","/_astro/inter-cyrillic-700-normal.DrXBdSj3.woff","/_astro/inter-greek-ext-700-normal.BoQ6DsYi.woff","/_astro/inter-cyrillic-ext-700-normal.LO58E6JB.woff","/_astro/inter-greek-700-normal.BUv2fZ6O.woff","/_astro/inter-vietnamese-700-normal.BZaoP0fm.woff","/_astro/inter-latin-700-normal.BLAVimhd.woff","/_astro/outfit-latin-ext-300-normal.CMIMshEd.woff","/_astro/inter-latin-ext-700-normal.TidjK2hL.woff","/_astro/outfit-latin-ext-400-normal.DHm7mdGe.woff","/_astro/outfit-latin-ext-500-normal.DrCvqoFD.woff","/_astro/outfit-latin-300-normal.AWLfuCom.woff","/_astro/outfit-latin-400-normal.DMwTpYkH.woff","/_astro/outfit-latin-ext-700-normal.fjS8-Gm7.woff","/_astro/outfit-latin-500-normal.ClnHRwRh.woff","/_astro/outfit-latin-700-normal.D4itBLBr.woff","/_astro/outfit-latin-ext-600-normal.CWJcPgd7.woff","/_astro/outfit-latin-600-normal.BEfTtDA7.woff","/_astro/index.DiYEMBOl.css","/favicon.svg","/Josue-david-kennedy.pdf","/robots.txt","/images/logo.svg","/images/profile.png","/images/project-1.png","/images/project-2.png","/images/project-3.png","/images/project-4.png","/_astro/Contact.astro_astro_type_script_index_0_lang.C6MupDv-.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"0arjWA44wovmxc75k1WqqpaSix8XZe4WwvU8YOjhpjc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
