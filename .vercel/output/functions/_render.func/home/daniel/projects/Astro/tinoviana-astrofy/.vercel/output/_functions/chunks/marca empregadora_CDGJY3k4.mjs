import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_PI-Hi11_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Nesta época digital e tecnológica em que vivemos, contratar um profissional não é uma tarefa fácil. Mesmo com uma taxa de desemprego alta os profissionais de RH têm dificuldade em selecionar, reter e engajar colaboradores. Muitas vezes exigem experiência de sênior em cargos para juniores. Muitas outras, o mercado não tem gente capacitada disponível. O remédio é investir em capacitação. Assim, melhora também o employer branding, a marca empregadora, o orgulho dos colaboradores de fazerem parte do time e estimula outros profissionais a quererem fazer parte dele.</p>\n<p>Tudo depende, também e principalmente, do ambiente de trabalho da empresa. O comprometimento quer dizer “querer” fazer alguma coisa, estar motivado a isso. Eu não posso dizer a uma pessoa que ela “queira” fazer alguma coisa. Ela pode fazer a contragosto, porque foi mandada ou entendeu que é importante, mas não porque queira fazer.</p>\n<p>Para que os colaboradores queiram trabalhar e se engajem cada vez mais, o ambiente de trabalho deve ser produtivo, amigável, criativo, solidário, acompanhado, recompensador, desafiador, em equipe. Várias cabeças juntas pensam melhor do que uma sozinha, diz o ditado. E é verdade, a troca de ideias é produtiva e criativa. Quanto mais ilhado é o colaborador, mais ele fica à margem da equipe e não se integra com os colegas, o que pode fazer cair a produtividade da equipe.</p>";

				const frontmatter = {"title":"Marca empregadora: employer branding","description":"O remédio é investir em capacitação. Assim, melhora também o employer branding, a marca empregadora, o orgulho dos colaboradores de fazerem parte do time e estimula outros profissionais a quererem fazer parte dele.","pubDate":"Mar 15 2024","heroImage":"/artigos/employer branding.png","tags":["employer branding","Marca empregadora"]};
				const file = "/home/daniel/projects/Astro/tinoviana-astrofy/src/content/artigos/marca empregadora.md";
				const url = undefined;
				function rawContent() {
					return "Nesta época digital e tecnológica em que vivemos, contratar um profissional não é uma tarefa fácil. Mesmo com uma taxa de desemprego alta os profissionais de RH têm dificuldade em selecionar, reter e engajar colaboradores. Muitas vezes exigem experiência de sênior em cargos para juniores. Muitas outras, o mercado não tem gente capacitada disponível. O remédio é investir em capacitação. Assim, melhora também o employer branding, a marca empregadora, o orgulho dos colaboradores de fazerem parte do time e estimula outros profissionais a quererem fazer parte dele. \n\nTudo depende, também e principalmente, do ambiente de trabalho da empresa. O comprometimento quer dizer “querer” fazer alguma coisa, estar motivado a isso. Eu não posso dizer a uma pessoa que ela “queira” fazer alguma coisa. Ela pode fazer a contragosto, porque foi mandada ou entendeu que é importante, mas não porque queira fazer. \n\nPara que os colaboradores queiram trabalhar e se engajem cada vez mais, o ambiente de trabalho deve ser produtivo, amigável, criativo, solidário, acompanhado, recompensador, desafiador, em equipe. Várias cabeças juntas pensam melhor do que uma sozinha, diz o ditado. E é verdade, a troca de ideias é produtiva e criativa. Quanto mais ilhado é o colaborador, mais ele fica à margem da equipe e não se integra com os colegas, o que pode fazer cair a produtividade da equipe.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
