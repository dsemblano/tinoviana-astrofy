/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, h as addAttribute, l as renderSlot } from '../astro_PI-Hi11_.mjs';
import 'kleur/colors';
import { g as getCollection, c as createSlug } from './__HtmmfbCi.mjs';
import { $ as $$Image, a as $$BaseLayout } from './404_Cjq6OMTm.mjs';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';

const $$Astro$4 = createAstro("https://tinoviana.com.br");
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title, description, pubDate, updatedDate, heroImage, badge, tags = [] } = Astro2.props;
  dayjs.extend(localizedFormat);
  const displayDate = dayjs(pubDate).format("ll");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "image": heroImage, ",": true, "ogType": "article" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="md:flex md:justify-center"> <article class="prose prose-lg max-w-[750px] prose-img:mx-auto prose-h1:text-gold"> ${heroImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "width": 750, "height": 422, "format": "webp", "src": heroImage, "alt": title, "class": "w-full mb-6" })}`} <h1 class="title my-2 text-4xl font-bold">${title}</h1> ${pubDate && renderTemplate`<time>${displayDate}</time>`} <br> ${badge && renderTemplate`<div class="badge badge-secondary my-1">${badge}</div>`} ${tags && tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag}`, "href")} class="badge badge-outline ml-2 no-underline"> ${tag} </a>`)} ${updatedDate && renderTemplate`<div> ${" "}
Last updated on <time>${updatedDate}</time>${" "} </div>`} <div class="divider my-2"></div> ${renderSlot($$result2, $$slots["default"])} </article> </main> ` })}`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/layouts/PostLayout.astro", void 0);

const $$Astro$3 = createAstro("https://tinoviana.com.br");
async function getStaticPaths$2() {
  const postEntries = await getCollection("artigos");
  return postEntries.map((entry) => ({
    params: { slug: createSlug(entry.data.title, entry.slug) },
    props: { entry }
  }));
}
const $$slug$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$slug$2;
  const { entry } = Astro2.props;
  const post = entry.data;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "title": post.title, "description": post.description, "pubDate": post.pubDate, "heroImage": post.heroImage, "updatedDate": post.updatedDate, "badge": post.badge, "tags": post.tags }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/artigos/[slug].astro", void 0);

const $$file$2 = "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/artigos/[slug].astro";
const $$url$2 = "/artigos/[slug]";

const _slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://tinoviana.com.br");
async function getStaticPaths$1() {
  const postEntries = await getCollection("servicos");
  return postEntries.map((entry) => ({
    params: { slug: createSlug(entry.data.title, entry.slug) },
    props: { entry }
  }));
}
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$slug$1;
  const { entry } = Astro2.props;
  const post = entry.data;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "title": post.title, "description": post.description, "pubDate": post.pubDate, "heroImage": post.heroImage, "updatedDate": post.updatedDate, "badge": post.badge, "tags": post.tags }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/servicos/[slug].astro", void 0);

const $$file$1 = "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/servicos/[slug].astro";
const $$url$1 = "/servicos/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://tinoviana.com.br");
const $$StoreItemLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StoreItemLayout;
  const {
    title,
    description,
    updatedDate,
    heroImage,
    pricing,
    oldPricing,
    checkoutUrl,
    badge,
    custom_link,
    custom_link_label
  } = Astro2.props;
  dayjs.extend(localizedFormat);
  dayjs(updatedDate).format("ll");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "image": heroImage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="md:flex md:justify-center"> <article class="prose prose-lg max-w-[750px] prose-img:mx-auto"> ${heroImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "width": 750, "height": 422, "format": "webp", "src": heroImage, "alt": title, "class": "w-full mb-6" })}`} <div class=""> <h1 class="title my-2 text-4xl font-bold"> ${title} ${badge && renderTemplate`<div class="badge badge-secondary mx-2">${badge}</div>`} </h1> <div class="flex place-content-between items-center"> <div class="grow md:grow-0"> <span class="text-xl mr-1"> ${pricing}</span> <span class="text-md opacity-50 line-through">${oldPricing}</span> </div> <div> ${custom_link && renderTemplate`<a class="btn btn-outline grow md:grow-0 ml-4"${addAttribute(custom_link, "href")} target="_blank"> ${custom_link_label} </a>`} <a class="btn btn-primary grow md:grow-0 ml-4"${addAttribute(checkoutUrl, "href")} target="_blank">Buy Now</a> </div> </div> </div> <div class="divider my-2"></div> ${renderSlot($$result2, $$slots["default"])} </article> </main> ` })}`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/layouts/StoreItemLayout.astro", void 0);

const $$Astro = createAstro("https://tinoviana.com.br");
async function getStaticPaths() {
  const itemEntries = await getCollection("store");
  return itemEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const item = entry.data;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "StoreItemLayout", $$StoreItemLayout, { "title": item.title, "description": item.description, "heroImage": item.heroImage, "updatedDate": item.updatedDate, "heroImage": item.heroImage, "pricing": item.pricing, "oldPricing": item.oldPricing, "checkoutUrl": item.checkoutUrl, "badge": item.badge, "custom_link": item.custom_link, "custom_link_label": item.custom_link_label }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/store/[slug].astro", void 0);

const $$file = "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/store/[slug].astro";
const $$url = "/store/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_$2 as _, _slug_$1 as a, _slug_ as b };
