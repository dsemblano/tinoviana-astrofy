/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_D2Aa9jdi.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './404_-DdLQnUH.mjs';

const $$Astro = createAstro("https://tinoviana.com.br");
const $$Contato = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contato;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Livros", "sideBarActiveItemID": "livros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl py-3 w-full font-bold mb-5">Contato</h1> <div class="py-2"> <text class="text-lg"> <p>R. Desembargador Motta, 3456 - CEP 80430-232 - Curitiba/PR</p> <p> <a class="py-3 text-base" href="mailto:tinoviana@tinoviana.com.br" target="_blank" referrerpolicy="no-referrer-when-downgrade">
contato@tinoviana.com.br
</a> </p> <a href="tel:5541-98419-3457">(+55 41) 98419-3457</a> </text></div>` })}`;
}, "/home/daniel/projects/Astro/AstroTino/tinoviana-astrofy/src/pages/contato.astro", void 0);

const $$file = "/home/daniel/projects/Astro/AstroTino/tinoviana-astrofy/src/pages/contato.astro";
const $$url = "/contato";

export { $$Contato as default, $$file as file, $$url as url };
