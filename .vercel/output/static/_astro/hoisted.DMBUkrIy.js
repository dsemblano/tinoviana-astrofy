import"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";const Z="astro:before-preparation",ee="astro:after-preparation",te="astro:before-swap",ne="astro:after-swap",oe=e=>document.dispatchEvent(new Event(e));class C extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,o,r,c,f,d,i,m){super(t,n),this.from=o,this.to=r,this.direction=c,this.navigationType=f,this.sourceElement=d,this.info=i,this.newDocument=m,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class re extends C{formData;loader;constructor(t,n,o,r,c,f,d,i,m){super(Z,{cancelable:!0},t,n,o,r,c,f,d),this.formData=i,this.loader=m.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ie extends C{direction;viewTransition;swap;constructor(t,n,o){super(te,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function se(e,t,n,o,r,c,f,d){const i=new re(e,t,n,o,r,c,window.document,f,d);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(oe(ee),i.navigationType!=="traverse"&&k({scrollX,scrollY}))),i}async function ae(e,t,n){const o=new ie(e,t,n);return document.dispatchEvent(o),o.swap(),o}const ce=history.pushState.bind(history),S=history.replaceState.bind(history),k=e=>{history.state&&(history.scrollRestoration="manual",S({...history.state,...e},""))},I=!!document.startViewTransition,O=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),_=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let D,g,L=!1,q;const U=e=>document.dispatchEvent(new Event(e)),B=()=>U("astro:page-load"),le=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},w="data-astro-transition-persist",V="data-astro-transition",W="data-astro-transition-fallback";let M,E=0;history.state?(E=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):O()&&(S({index:E,scrollX,scrollY},""),history.scrollRestoration="manual");async function ue(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function j(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function fe(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const c=new Promise(f=>{o.onload=o.onerror=f});e=e.then(()=>c)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const K=(e,t,n,o,r)=>{const c=_(t,e),f=document.title;document.title=o;let d=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const i=history.state;S({...n.state,index:i.index,scrollX:i.scrollX,scrollY:i.scrollY},"",e.href)}else ce({...n.state,index:++E,scrollX:0,scrollY:0},"",e.href);if(document.title=f,D=e,c||(scrollTo({left:0,top:0,behavior:"instant"}),d=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const i=history.state;location.href=e.href,history.state||(S(i,""),c&&window.dispatchEvent(new PopStateEvent("popstate")))}else d||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function de(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${w}="${n.getAttribute(w)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(c=>o.addEventListener(c,r)),document.head.append(o)}))}return t}async function N(e,t,n,o){const r=(s,l)=>{const p=s.getAttribute(w),b=p&&l.head.querySelector(`[${w}="${p}"]`);if(b)return b;if(s.matches("link[rel=stylesheet]")){const T=s.getAttribute("href");return l.head.querySelector(`link[rel=stylesheet][href="${T}"]`)}return null},c=()=>{const s=document.activeElement;if(s?.closest(`[${w}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const l=s.selectionStart,p=s.selectionEnd;return{activeElement:s,start:l,end:p}}return{activeElement:s}}else return{activeElement:null}},f=({activeElement:s,start:l,end:p})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(typeof l=="number"&&(s.selectionStart=l),typeof p=="number"&&(s.selectionEnd=p)))},d=s=>{const l=s.dataset.astroTransitionPersistProps;return l==null||l==="false"},i=s=>{const l=document.documentElement,p=[...l.attributes].filter(({name:a})=>(l.removeAttribute(a),a.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...p].forEach(({name:a,value:u})=>l.setAttribute(a,u));for(const a of document.scripts)for(const u of s.newDocument.scripts)if(!u.hasAttribute("data-astro-rerun")&&(!a.src&&a.textContent===u.textContent||a.src&&a.type===u.type&&a.src===u.src)){u.dataset.astroExec="";break}for(const a of Array.from(document.head.children)){const u=r(a,s.newDocument);u?u.remove():a.remove()}document.head.append(...s.newDocument.head.children);const b=document.body,T=c();document.body.replaceWith(s.newDocument.body);for(const a of b.querySelectorAll(`[${w}]`)){const u=a.getAttribute(w),v=document.querySelector(`[${w}="${u}"]`);v&&(v.replaceWith(a),v.localName==="astro-island"&&d(a)&&(a.setAttribute("ssr",""),a.setAttribute("props",v.getAttribute("props"))))}f(T)};async function m(s){function l(a){const u=a.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const p=document.getAnimations();document.documentElement.setAttribute(W,s);const T=document.getAnimations().filter(a=>!p.includes(a)&&!l(a));return Promise.all(T.map(a=>a.finished))}if(!L)document.documentElement.setAttribute(V,e.direction),o==="animate"&&await m("old");else throw new DOMException("Transition was skipped");const y=document.title,h=await ae(e,g,i);K(h.to,h.from,t,y,n),U(ne),o==="animate"&&!L&&m("new").then(()=>q())}async function G(e,t,n,o,r){if(!O()||location.origin!==n.origin){location.href=n.href;return}const c=r?"traverse":o.history==="replace"?"replace":"push";if(c!=="traverse"&&k({scrollX,scrollY}),_(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){K(n,t,o,document.title,r);return}const f=await se(t,n,e,c,o.sourceElement,o.info,o.formData,d);if(f.defaultPrevented){location.href=n.href;return}async function d(i){const m=i.to.href,y={};if(i.formData){y.method="POST";const l=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");y.body=l?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const h=await ue(m,y);if(h===null){i.preventDefault();return}if(h.redirected&&(i.to=new URL(h.redirected)),M??=new DOMParser,i.newDocument=M.parseFromString(h.html,h.mediaType),i.newDocument.querySelectorAll("noscript").forEach(l=>l.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const s=de(i.newDocument);s.length&&await Promise.all(s)}if(L=!1,I)g=document.startViewTransition(async()=>await N(f,o,r));else{const i=(async()=>{await new Promise(m=>setTimeout(m)),await N(f,o,r,j())})();g={updateCallbackDone:i,ready:i,finished:new Promise(m=>q=m),skipTransition:()=>{L=!0}}}g.ready.then(async()=>{await fe(),B(),le()}),g.finished.then(()=>{document.documentElement.removeAttribute(V),document.documentElement.removeAttribute(W)}),await g.ready}async function F(e,t){await G("forward",D,new URL(e,location.href),t??{})}function me(e){if(!O()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>E?"forward":"back";E=n,G(o,D,new URL(location.href),{},t)}const X=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&k({scrollX,scrollY})};{if(I||j()!=="none")if(D=new URL(location.href),addEventListener("popstate",me),addEventListener("load",B),"onscrollend"in window)addEventListener("scrollend",X);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,X();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const z=new Set,P=new WeakSet;let R,J,Y=!1;function he(e){Y||(Y=!0,R??=e?.prefetchAll??!1,J??=e?.defaultStrategy??"hover",pe(),we(),ye(),be())}function pe(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{A(t.target,"tap")&&x(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function we(){let e;document.body.addEventListener("focusin",o=>{A(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),H(()=>{for(const o of document.getElementsByTagName("a"))P.has(o)||A(o,"hover")&&(P.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{x(r,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function ye(){let e;H(()=>{for(const t of document.getElementsByTagName("a"))P.has(t)||A(t,"viewport")&&(P.add(t),e??=ge(),e.observe(t))})}function ge(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,c=e.get(r);o.isIntersecting?(c&&clearTimeout(c),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),x(r.href,{with:"link"})},300))):c&&(clearTimeout(c),e.delete(r))}})}function be(){H(()=>{for(const e of document.getElementsByTagName("a"))A(e,"load")&&x(e.href,{with:"link"})})}function x(e,t){const n=t?.ignoreSlowConnection??!1;if(!Te(e,n))return;if(z.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function Te(e,t){if(!navigator.onLine||!t&&Q())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!z.has(e)}catch{}return!1}function A(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||R)&&Q()?!0:n==null&&R||n===""?t===J:n===t}function Q(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function H(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function ve(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function $(e){return e.dataset.astroReload!==void 0}(I||ve()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;$(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),F(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||$(t))return;const n=t,o=e.submitter,r=new FormData(n,o),c=typeof n.action=="string"?n.action:n.getAttribute("action"),f=typeof n.method=="string"?n.method:n.getAttribute("method");let d=o?.getAttribute("formaction")??c??location.pathname;const i=o?.getAttribute("formmethod")??f??"get";if(i==="dialog"||location.origin!==new URL(d,location.href).origin)return;const m={sourceElement:o??n};if(i==="get"){const y=new URLSearchParams(r),h=new URL(d);h.search=y.toString(),d=h.toString()}else m.formData=r;e.preventDefault(),F(d,m)}),he({prefetchAll:!0}));
