/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, h as addAttribute, m as maybeRenderHead } from '../astro_D2Aa9jdi.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './404_BpV4MMcb.mjs';
import fs from 'fs';
import path from 'path';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tinoviana.com.br");
const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Galeria;
  const galleryDir = path.join(process.cwd(), "/src/assets/galeria");
  const filenames = fs.readdirSync(galleryDir);
  const imageFilenames = filenames.filter(
    (filename) => filename.endsWith(".jpg") || filename.endsWith(".png") || filename.endsWith(".webp")
  );
  const photos = imageFilenames.map((filename) => ({
    id: filename,
    url: `/src/assets/galeria/${filename}`,
    thumbnailUrl: `/src/assets/galeria/${filename}`,
    title: filename
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Galeria", "sideBarActiveItemID": "galeria" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<h1 class="text-4xl py-3 w-full font-bold mb-5">Galeria de fotos</h1> <section class="prose prose-lg max-w-[750px] prose-img:mx-auto"> <!-- <script type="module">
      import GLightbox from '/node_modules/glightbox/src/js/glightbox.js';
      window.addEventListener('load', () => {
        const lightbox = GLightbox({selector: 'a[data-gallery="gallery1"]'});
      });
    <\/script> --> <!-- <div class="gallery">
      {photos.map((photo) => (
        <a class="glightbox3" data-gallery="gallery1" href={photo.url}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </a>
      ))}
    </div> --> <script type="module">
      import GLightbox from "/node_modules/glightbox/src/js/glightbox.js";
      window.addEventListener("load", () => {
          const lightbox = GLightbox({ selector: 'a[data-gallery="gallery1"]' });
      });
  <\/script> <div class="gallery"> `, " </div> </section> "])), maybeRenderHead(), photos.map((photo) => renderTemplate`<a class="glightbox3" data-gallery="gallery1"${addAttribute(photo.url, "href")}> <img${addAttribute(photo.thumbnailUrl, "src")}${addAttribute(photo.title, "alt")}> </a>`)) })}`;
}, "/home/daniel/projects/Astro/AstroTino/tinoviana-astrofy/src/pages/galeria.astro", void 0);

const $$file = "/home/daniel/projects/Astro/AstroTino/tinoviana-astrofy/src/pages/galeria.astro";
const $$url = "/galeria";

export { $$Galeria as default, $$file as file, $$url as url };