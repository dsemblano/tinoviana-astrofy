/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, k as renderHead } from '../astro_PI-Hi11_.mjs';
import 'kleur/colors';
import 'clsx';
import sendGrid from '@sendgrid/mail';

const $$Astro = createAstro("https://tinoviana.com.br");
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
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
  return renderTemplate`<html lang="en"> <head><title>Contact Me</title>${renderHead()}</head> <body> <h1>Say Hi to me!</h1> <form method="POST"> <div> <input type="text" name="name" placeholder="Name"> </div> <div> <input type="email" name="email" placeholder="Email"> </div> <div> <textarea name="message" placeholder="Message"></textarea> </div> <div> <button type="submit">Send</button> </div> </form> </body></html>`;
}, "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/test.astro", void 0);
const $$file = "/home/daniel/projects/Astro/tinoviana-astrofy/src/pages/test.astro";
const $$url = "/test";

export { $$Test as default, $$file as file, $$url as url };
