/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, u as unescapeHTML, t as Fragment } from '../astro_PI-Hi11_.mjs';
import 'kleur/colors';
import { $ as $$Image, a as $$BaseLayout } from './404_Cjq6OMTm.mjs';
import { p as prependForwardSlash } from '../astro/assets-service_CtoBNud7.mjs';

const $$Astro$5 = createAstro("https://tinoviana.com.br");
const $$HorizontalCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HorizontalCard;
  const { title, img, desc, url, badge, tags, target = "_blank" } = Astro2.props;
  const tag_url = url.split("/").slice(0, -1).join("/") + "/tag";
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%]"> <a${addAttribute(url, "href")}${addAttribute(target, "target")}> <div class="hero-content flex-col md:flex-row"> ${img && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img, "loading": "eager", "width": 750, "height": 422, "format": "webp", "alt": title, "class": "max-w-full md:max-w-[13rem] rounded-lg" })}`} <div class="grow w-full"> <h2 class="text-xl font-bold"> ${title} ${badge && renderTemplate`<div class="badge badge-secondary mx-2">${badge}</div>`} </h2> <p class="py-1 text-1xl">${desc}</p> <div class="card-actions justify-end"> ${tags && tags.map((tag) => renderTemplate`<a${addAttribute(`${tag_url}/${tag}`, "href")} class="badge badge-outline"> ${tag} </a>`)} </div> </div> </div> </a> </div>`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/components/HorizontalCard.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://tinoviana.com.br", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/artigos/A liderança nas organizações e as eleições políticas.md": () => import('../A liderança nas organizações e as eleições políticas_Dqfwpyp6.mjs'),"/src/content/artigos/Futebol e lideranca.md": () => import('../Futebol e lideranca_CKaMHIlA.mjs'),"/src/content/artigos/Inspiração para produzir.md": () => import('../Inspiração para produzir_Dfajc1Zb.mjs'),"/src/content/artigos/Sobre liderança.md": () => import('../Sobre liderança_BOWfOShU.mjs'),"/src/content/artigos/Tem que vir da China.md": () => import('../Tem que vir da China_sgioSjeB.mjs'),"/src/content/artigos/assertividade.md": () => import('../assertividade_DVBdmG0W.mjs'),"/src/content/artigos/comunicacao significativa.md": () => import('../comunicacao significativa_BWAwi8_F.mjs'),"/src/content/artigos/energizacao.md": () => import('../energizacao_Czjwh1EI.mjs'),"/src/content/artigos/lideranca.md": () => import('../lideranca_KRJqwR5X.mjs'),"/src/content/artigos/marca empregadora.md": () => import('../marca empregadora_BOSy9tcZ.mjs'),"/src/content/servicos/lideracao.md": () => import('../lideracao_C4sMnZwU.mjs'),"/src/content/store/item1.md": () => import('../item1_CBjpiDy9.mjs'),"/src/content/store/item2.md": () => import('../item2_C1K3kZSF.mjs'),"/src/content/store/item3.md": () => import('../item3_2h4vkYNX.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"artigos":{"type":"content","entries":{"a-liderança-nas-organizações-e-as-eleições-políticas":"/src/content/artigos/A liderança nas organizações e as eleições políticas.md","futebol-e-lideranca":"/src/content/artigos/Futebol e lideranca.md","inspiração-para-produzir":"/src/content/artigos/Inspiração para produzir.md","sobre-liderança":"/src/content/artigos/Sobre liderança.md","tem-que-vir-da-china":"/src/content/artigos/Tem que vir da China.md","assertividade":"/src/content/artigos/assertividade.md","comunicacao-significativa":"/src/content/artigos/comunicacao significativa.md","energizacao":"/src/content/artigos/energizacao.md","lideranca":"/src/content/artigos/lideranca.md","marca-empregadora":"/src/content/artigos/marca empregadora.md"}},"servicos":{"type":"content","entries":{"lideracao":"/src/content/servicos/lideracao.md"}},"store":{"type":"content","entries":{"item1":"/src/content/store/item1.md","item2":"/src/content/store/item2.md","item3":"/src/content/store/item3.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/artigos/A liderança nas organizações e as eleições políticas.md": () => import('../A liderança nas organizações e as eleições políticas_BCTnFY-r.mjs'),"/src/content/artigos/Futebol e lideranca.md": () => import('../Futebol e lideranca_CInoL4qV.mjs'),"/src/content/artigos/Inspiração para produzir.md": () => import('../Inspiração para produzir_C5r9nsY1.mjs'),"/src/content/artigos/Sobre liderança.md": () => import('../Sobre liderança_DK5L8X4A.mjs'),"/src/content/artigos/Tem que vir da China.md": () => import('../Tem que vir da China_Do2jfBJV.mjs'),"/src/content/artigos/assertividade.md": () => import('../assertividade_erhSJqFF.mjs'),"/src/content/artigos/comunicacao significativa.md": () => import('../comunicacao significativa_ON31hp51.mjs'),"/src/content/artigos/energizacao.md": () => import('../energizacao_WIhv-hCZ.mjs'),"/src/content/artigos/lideranca.md": () => import('../lideranca_CmgZsLOd.mjs'),"/src/content/artigos/marca empregadora.md": () => import('../marca empregadora_DOH1NDz8.mjs'),"/src/content/servicos/lideracao.md": () => import('../lideracao_n7BXN_Uh.mjs'),"/src/content/store/item1.md": () => import('../item1_WXIstQPI.mjs'),"/src/content/store/item2.md": () => import('../item2_C3yfJU9m.mjs'),"/src/content/store/item3.md": () => import('../item3_BOExiTgT.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

function createSlug(title, staticSlug) {
  return title.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "").replace(/^-+|-+$/g, "");
}

const $$Astro$4 = createAstro("https://tinoviana.com.br");
async function getStaticPaths$3({ paginate }) {
  const all_posts = await getCollection("artigos");
  const all_tags = all_posts.flatMap((post) => {
    return post.data.tags || [];
  });
  return all_tags.flatMap((tag) => {
    const filtred_posts = all_posts.filter((post) => {
      return post.data.tags?.includes(tag);
    });
    return paginate(filtred_posts, {
      params: { tag },
      pageSize: 10
    });
  });
}
const $$$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$$3;
  const { page } = Astro2.props;
  const params = Astro2.params;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Artigos - " + params.tag, "sideBarActiveItemID": "artigos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <div class="text-3xl w-full font-bold">Artigos - ${params.tag}</div> </div> ${page.data.length === 0 ? renderTemplate`<div class="bg-base-200 border-l-4 border-secondary w-full p-4 min-w-full"> <p class="font-bold">Sorry!</p> <p>Sem artigos para mostrar</p> </div>` : renderTemplate`<ul> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HorizontalCard", $$HorizontalCard, { "title": post.data.title, "img": post.data.heroImage, "desc": post.data.description, "url": "/artigos/" + createSlug(post.data.title, post.slug), "target": "_self", "badge": post.data.badge, "tags": post.data.tags })} <div class="divider my-0"></div> ` })}`)} </ul>`}<div class="flex justify-between"> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="btn btn-ghost my-10 mx-5"> ${" "} <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path> </svg>${" "}
Recent posts
</a>` : renderTemplate`<div></div>`} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="btn btn-ghost my-10 mx-5">
Older Posts${" "} <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> ${" "} <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path> </svg> </a>` : renderTemplate`<div></div>`} </div> ` })}`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/artigos/tag/[tag]/[...page].astro", void 0);

const $$file$3 = "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/artigos/tag/[tag]/[...page].astro";
const $$url$3 = "/artigos/tag/[tag]/[...page]";

const ____page_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$3,
  file: $$file$3,
  getStaticPaths: getStaticPaths$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://tinoviana.com.br");
async function getStaticPaths$2({ paginate }) {
  const posts = await getCollection("artigos");
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return paginate(posts, { pageSize: 10 });
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$$2;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Artigos", "sideBarActiveItemID": "artigos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl py-3 w-full font-bold mb-5">Artigos</h1> ${page.data.length === 0 ? renderTemplate`<div class="bg-base-200 border-l-4 border-secondary w-full p-4 min-w-full"> <p class="font-bold">Desculpe!</p> <p>Sem artigos para mostrar</p> </div>` : renderTemplate`<ul> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HorizontalCard", $$HorizontalCard, { "title": post.data.title, "img": post.data.heroImage, "desc": post.data.description, "url": "/artigos/" + createSlug(post.data.title, post.slug), "target": "_self", "badge": post.data.badge, "tags": post.data.tags })} <div class="divider my-0"></div> ` })}`)} </ul>`}<div class="flex justify-between"> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="btn btn-ghost my-10 mx-5"> ${" "} <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path> </svg>${" "}
Recent posts
</a>` : renderTemplate`<div></div>`} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="btn btn-ghost my-10 mx-5">
Older Posts${" "} <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> ${" "} <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path> </svg> </a>` : renderTemplate`<div></div>`} </div> ` })}`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/artigos/[...page].astro", void 0);

const $$file$2 = "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/artigos/[...page].astro";
const $$url$2 = "/artigos/[...page]";

const ____page_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://tinoviana.com.br");
async function getStaticPaths$1({ paginate }) {
  const posts = await getCollection("servicos");
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return paginate(posts, { pageSize: 10 });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$1;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Servi\xE7os", "sideBarActiveItemID": "servicos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl py-3 w-full font-bold mb-5">Produtos & Serviços</h1> <section class="prose prose-lg max-w-[750px] prose-img:mx-auto prose-h2:text-gold"> <text class="text-lg">
Atuamos com treinamentos e desenvolvimento, palestras, coaching, mentoria, tradução, intérprete consecutivo, cursos de conversação inglês e francês, teatro-empresa, peças de teatro.
</text> <h2 class="text-2xl w-full font-bold mb-2">Temas trabalhados:</h2> <text class="text-lg">
Liderança, Equipes, Integração, Comunicação, Autorresponsabilização, Gestão da Mudança, Motivação, entre outros.
</text> <h2 class="text-2xl w-full font-bold mb-2">Diferencial</h2> <text class="text-lg">
Nosso diferencial está no desenvolvimento prático dos temas abordados nos treinamentos, assim como em coaching e mentoria.
</text> </section> ${page.data.length === 0 ? renderTemplate`<div class="bg-base-200 border-l-4 border-secondary w-full p-4 min-w-full"> <p class="font-bold">Sorry!</p> <p>There are no servicos posts to show at the moment. Check back later!</p> </div>` : renderTemplate`<ul> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HorizontalCard", $$HorizontalCard, { "title": post.data.title, "img": post.data.heroImage, "desc": post.data.description, "url": "/servicos/" + createSlug(post.data.title, post.slug), "target": "_self", "badge": post.data.badge, "tags": post.data.tags })} <div class="divider my-0"></div> ` })}`)} </ul>`}<div class="flex justify-between"> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="btn btn-ghost my-10 mx-5"> ${" "} <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path> </svg>${" "}
Recent posts
</a>` : renderTemplate`<div></div>`} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="btn btn-ghost my-10 mx-5">
Older Posts${" "} <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> ${" "} <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path> </svg> </a>` : renderTemplate`<div></div>`} </div> ` })}`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/servicos/[...page].astro", void 0);

const $$file$1 = "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/servicos/[...page].astro";
const $$url$1 = "/servicos/[...page]";

const ____page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://tinoviana.com.br");
const $$HorizontalShopItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HorizontalShopItem;
  const {
    title,
    img,
    desc,
    url,
    badge,
    pricing,
    oldPricing,
    checkoutUrl,
    details = true,
    custom_link = false,
    custom_link_label = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%]"> <a${addAttribute(url, "href")}> <div class="hero-content flex-col md:flex-row"> ${img && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 750, "height": 422, "format": "webp", "src": img, "alt": title, "class": "max-w-full md:max-w-[13rem] rounded-lg" })}`} <div class="grow w-full p-5 md:p-0"> <h2 class="text-xl font-bold"> ${title} ${badge && renderTemplate`<div class="badge badge-secondary mx-2">${badge}</div>`} </h2> <div> <span class="text-xl mr-1"> ${pricing}</span> <span class="text-md opacity-50 line-through">${oldPricing}</span> </div> <p class="py-1 text-1xl">${desc}</p> </div> </div> </a> </div>`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/components/HorizontalShopItem.astro", void 0);

const $$Astro = createAstro("https://tinoviana.com.br");
async function getStaticPaths({ paginate }) {
  const items = await getCollection("store");
  items.sort((a, b) => b.data.updatedDate.valueOf() - a.data.updatedDate.valueOf());
  return paginate(items, { pageSize: 10 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Store", "sideBarActiveItemID": "store" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul> ${page.data.map((item) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HorizontalShopItem", $$HorizontalShopItem, { "title": item.data.title, "img": item.data.heroImage, "desc": item.data.description, "pricing": item.data.pricing, "oldPricing": item.data.oldPricing, "checkoutUrl": item.data.checkoutUrl, "badge": item.data.badge, "details": item.data.details, "tags": item.data.tags, "url": "/store/" + item.slug, "custom_link": item.data.custom_link, "custom_link_label": item.data.custom_link_label })} <div class="divider my-0"></div> ` })}`)} </ul> <div class="flex justify-between"> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="btn btn-ghost my-10 mx-5"> ${" "} <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path> </svg>${" "}
Previous page
</a>` : renderTemplate`<div></div>`} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="btn btn-ghost my-10 mx-5">
Next page${" "} <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> ${" "} <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path> </svg> </a>` : renderTemplate`<div></div>`} </div> ` })}`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/store/[...page].astro", void 0);

const $$file = "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/store/[...page].astro";
const $$url = "/store/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HorizontalCard as $, ____page_$3 as _, ____page_$2 as a, ____page_$1 as b, createSlug as c, ____page_ as d, getCollection as g };
