/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, t as Fragment } from '../astro_PI-Hi11_.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './404_CB7Yqar8.mjs';
import { g as getCollection, $ as $$HorizontalCard, c as createSlug } from './__CnDcD-Sn.mjs';

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
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/index.astro", void 0);

const $$file = "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
