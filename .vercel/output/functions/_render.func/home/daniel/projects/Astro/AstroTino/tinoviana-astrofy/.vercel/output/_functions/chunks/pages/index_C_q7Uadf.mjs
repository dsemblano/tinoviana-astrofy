/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as renderComponent, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, u as unescapeHTML, t as Fragment } from '../astro_D2Aa9jdi.mjs';
import 'kleur/colors';
import { a as $$Image, $ as $$BaseLayout } from './404_BI2fdlyN.mjs';
import pLimit from 'p-limit';
import { p as prependForwardSlash } from '../astro/assets-service_D_5fbzzE.mjs';

const $$Astro$1 = createAstro("https://tinoviana.com.br");
const $$HorizontalCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HorizontalCard;
  const { title, img, desc, url, badge, tags, target = "_blank" } = Astro2.props;
  const tag_url = url.split("/").slice(0, -1).join("/") + "/tag";
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%]"> <a${addAttribute(url, "href")}${addAttribute(target, "target")}> <div class="hero-content flex-col md:flex-row"> ${img && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img, "loading": "eager", "width": 750, "height": 422, "format": "webp", "alt": title, "class": "max-w-full md:max-w-[13rem] rounded-lg" })}`} <div class="grow w-full"> <h2 class="text-xl font-bold"> ${title} ${badge && renderTemplate`<div class="badge badge-secondary mx-2">${badge}</div>`} </h2> <p class="py-1 text-1xl">${desc}</p> <div class="card-actions justify-end"> ${tags && tags.map((tag) => renderTemplate`<a${addAttribute(`${tag_url}/${tag}`, "href")} class="badge badge-outline"> ${tag} </a>`)} </div> </div> </div> </a> </div>`;
}, "/home/daniel/projects/Astro/AstroTino/tinoviana-astrofy/src/components/HorizontalCard.astro", void 0);

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
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://tinoviana.com.br", "ASSETS_PREFIX": undefined}, {})?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
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
        )
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/artigos/A liderança nas organizações e as eleições políticas.md": () => import('../A liderança nas organizações e as eleições políticas_B05HtkWS.mjs'),"/src/content/artigos/Futebol e lideranca.md": () => import('../Futebol e lideranca_C6lJyGts.mjs'),"/src/content/artigos/Inspiração para produzir.md": () => import('../Inspiração para produzir_C9i7YZBd.mjs'),"/src/content/artigos/Sobre liderança.md": () => import('../Sobre liderança_QHOUxBzu.mjs'),"/src/content/artigos/Tem que vir da China.md": () => import('../Tem que vir da China_CkyPbxbR.mjs'),"/src/content/artigos/assertividade.md": () => import('../assertividade_RbjmXAFo.mjs'),"/src/content/artigos/comunicacao significativa.md": () => import('../comunicacao significativa_Cc3HGmI6.mjs'),"/src/content/artigos/energizacao.md": () => import('../energizacao_z0XRWHvU.mjs'),"/src/content/artigos/lideranca.md": () => import('../lideranca_AEGwGBlr.mjs'),"/src/content/artigos/marca empregadora.md": () => import('../marca empregadora_qBktlFUT.mjs'),"/src/content/servicos/lideracao.md": () => import('../lideracao_BRKPd4ie.mjs'),"/src/content/store/item1.md": () => import('../item1_Clht1Xnl.mjs'),"/src/content/store/item2.md": () => import('../item2_Ix4dFCYJ.mjs'),"/src/content/store/item3.md": () => import('../item3_Bb-9kPQz.mjs')});
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

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/artigos/A liderança nas organizações e as eleições políticas.md": () => import('../A liderança nas organizações e as eleições políticas_DJ_X3DdQ.mjs'),"/src/content/artigos/Futebol e lideranca.md": () => import('../Futebol e lideranca_OHULkibL.mjs'),"/src/content/artigos/Inspiração para produzir.md": () => import('../Inspiração para produzir_4dQlBSa5.mjs'),"/src/content/artigos/Sobre liderança.md": () => import('../Sobre liderança_wEZGbFb9.mjs'),"/src/content/artigos/Tem que vir da China.md": () => import('../Tem que vir da China_M5nC8eP4.mjs'),"/src/content/artigos/assertividade.md": () => import('../assertividade_CwtXyjhO.mjs'),"/src/content/artigos/comunicacao significativa.md": () => import('../comunicacao significativa_ByiQ0-70.mjs'),"/src/content/artigos/energizacao.md": () => import('../energizacao_CNKPlfqT.mjs'),"/src/content/artigos/lideranca.md": () => import('../lideranca_CigPfqzp.mjs'),"/src/content/artigos/marca empregadora.md": () => import('../marca empregadora_BLTBjMe3.mjs'),"/src/content/servicos/lideracao.md": () => import('../lideracao_CRrDdimZ.mjs'),"/src/content/store/item1.md": () => import('../item1_DHYBl0d-.mjs'),"/src/content/store/item2.md": () => import('../item2_u3ros_Jb.mjs'),"/src/content/store/item3.md": () => import('../item3_cykV5kHO.mjs')});
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

const $$Astro = createAstro("https://tinoviana.com.br");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("artigos")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const last_posts = posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-12 mt-5"> <!-- <div class="text-xl py-1">Hey there 👋</div> --> <h1> <div class="text-7xl font-bold animate__animated animate__fadeInLeft">Tino Viana</div> <div class="mt-6 animate__animated animate__jackInTheBox animate__delay-1s animate__faster"> <div class="text-2xl font-bold text-white">Consultoria & Produções</div> <div class="text-2xl mt-2 font-bold text-white">Desenvolvimento & Arte</div> </div> </h1> <!-- <text class="text-lg">
      Em atividade desde 2003, a Tino Viana Consultoria & Produções, sediada em Curitiba/PR, conta com uma equipe de profissionais efetivos e parceiros com enorme experiência em consultoria organizacional e em artes cênicas.
    </text> --> <div class="mt-12"> <a class="btn text-xl animate__animated animate__jello animate__delay-2s" href="mailto:tinoviana@tinoviana.com.br?subject=Contato via site: Digite seu assunto" target="_blank">Entre em contato!</a> <!-- <a href="https://github.com/manuelernestog/astrofy" target="_blank" class="btn btn-outline ml-5">
        Get This template
      </a> --> </div> </div> <div class="pb-12 mt-5"> <h2 class="text-4xl py-3 font-bold">Quem Somos</h2> <article class="prose prose-lg max-w-[750px] prose-img:mx-auto"> <p>
Em atividade desde 2003, a Tino Viana Consultoria & Produções, sediada em Curitiba/PR, conta com uma equipe de profissionais efetivos e parceiros com enorme experiência em consultoria organizacional e em artes cênicas.
</p> <picture id="heroimage"> <img class="my-2 rounded-2xl animate__animated animate__fadeInUp animate__delay-2s" src="/encontro.jpeg" alt=""> </picture> <p>
Com programas feitos sob medida para as necessidades de nossos clientes, utilizamos e criamos metodologia para o desenvolvimento de profissionais e empresas de pequeno, médio e grande portes, nos idiomas português, inglês e francês.
</p> <p>
Nossa metodologia construtivista, onde atitudes e conceitos profissionais não são impostos, mas construídos com nossos clientes, inclui atividades individuais e de grupo, em sala e ao ar livre, experienciais e teóricas, dramatizações com participantes e esquetes teatrais com atores profissionais, entre outras, para pequenos, médios e grandes grupos, com material de apoio cuidadosamente elaborado. Atuamos com treinamento e desenvolvimento, palestras, coaching, mentoria, cursos de conversação em inglês e francês, tradução e intérprete consecutivo, além de teatro-empresa e peças de teatro
</p> </article> </div> <div> <h2 class="text-3xl w-full font-bold mb-2">Missão, Visão e Valores</h2> </div> <div class="lg:grid lg:grid-cols-3 lg:grid-flow-row"> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Miss\xE3o", "desc": "Estimular o desenvolvimento de pessoas e empresas, utilizando metodologia e recursos desafiantes e inovadores, que possibilitem n\xE3o apenas o autocrescimento, mas tamb\xE9m a multiplica\xE7\xE3o de valores \xE9ticos, profissionais e de qualidade de vida.", "url": "#" })} <!-- <div class="divider my-0"></div> --> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Vis\xE3o", "desc": "Tornar-se refer\xEAncia em consultoria, auxiliando no desenvolvimento de profissionais e empresas com o comprometimento com a qualidade e o aperfei\xE7oamento de l\xEDderes e equipes de trabalho.", "url": "#" })} <!-- <div class="divider my-0"></div> --> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Valores", "desc": "Nossos valores est\xE3o calcados na \xE9tica, no desempenho pautado nas necessidades do cliente, assim como integridade e honestidade, dedica\xE7\xE3o com a qualidade, assumir responsabilidade pelos compromissos e resultados perante os clientes e parceiros.", "url": "#" })} </div> <div> <h2 class="text-3xl w-full font-bold mb-5 mt-10">Artigos</h2> </div> ${last_posts.map((post) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HorizontalCard", $$HorizontalCard, { "title": post.data.title, "img": post.data.heroImage, "desc": post.data.description, "url": "/artigos/" + createSlug(post.data.title, post.slug), "target": "_self", "badge": post.data.badge })} <div class="divider my-0"></div> ` })}`)}` })}`;
}, "/home/daniel/projects/Astro/AstroTino/tinoviana-astrofy/src/pages/index.astro", void 0);

const $$file = "/home/daniel/projects/Astro/AstroTino/tinoviana-astrofy/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HorizontalCard as $, createSlug as c, getCollection as g, index as i };
