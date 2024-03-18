/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_PI-Hi11_.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './404_CB7Yqar8.mjs';
import sendGrid from '@sendgrid/mail';

const $$Astro = createAstro("https://tinoviana.com.br");
const $$Contato = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contato;
  sendGrid.setApiKey({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://tinoviana.com.br", "ASSETS_PREFIX": undefined}.SENDGRID_API_KEY);
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
      const msg = {
        to: "dsemblano@gmail.com",
        // Change to your recipient
        from: "tinoviana@tinoviana.com.br",
        // Change to your verified sender
        replyTo: { email, name },
        subject: `Contact form submission from ${name}`,
        text: message
      };
      await sendGrid.send(msg).then(() => {
        console.log("Email sent");
      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Livros", "sideBarActiveItemID": "livros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl py-3 w-full font-bold mb-5">Contato</h1> <div class="py-2"> <text class="text-lg"> <p>R. Desembargador Motta, 3456 - CEP 80430-232 - Curitiba/PR</p> <p> <a class="py-3 text-base" href="mailto:tinoviana@tinoviana.com.br" target="_blank" referrerpolicy="no-referrer-when-downgrade">
contato@tinoviana.com.br
</a> </p> <a href="tel:5541-98419-3457">(+55 41) 98419-3457</a> <form method="POST"> <div> <input type="text" name="name" placeholder="Nome"> </div> <div> <input type="email" name="email" placeholder="Email"> </div> <div> <textarea name="message" placeholder="Mensagem"></textarea> </div> <div> <button type="submit">Enviar</button> </div> </form> </text></div>` })}`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/contato.astro", void 0);
const $$file = "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/contato.astro";
const $$url = "/contato";

export { $$Contato as default, $$file as file, $$url as url };
