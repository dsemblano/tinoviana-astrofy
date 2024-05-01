import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D2Aa9jdi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Hoje eu estou com vontade de escrever. Desde os meus 12 anos, até onde me lembro, já gostava de escrever, sempre gostei das aulas de Português. Tem dias que a inspiração vem, as ideias surgem e os dedos dançam no teclado.</p>\n<p>Mas, apesar da vontade de escrever, não me sinto muito inspirado hoje. Talvez por causa do frio ou porque minha criatividade não está muito aguçada, mesmo.</p>\n<p>Já passei por isso algumas vezes. Às vezes, quando escrevo um livro me dá um branco criativo e não sai nada. Eu paro de escrever, vou fazer outra coisa pra sair desse sentimento de pouca energia e, quando volto, mais relaxado, as ideias vêm.  Em outros momentos, eu começo a escrever, mesmo que não goste muito do que sai de início, mas depois as ideias começam a surgir e a escrita sai. Em outros ainda, não sai nada e eu desisto por aquele dia.</p>\n<p>Eu fico pensando se não acontece a mesma coisa com líderes e liderados. Mesmo motivados, nem sempre os colaboradores estão no melhor momento para criar ou mesmo simplesmente executar. Geralmente exige-se constância, comprometimento, força de vontade, espírito de equipe etc., como se fôssemos máquinas que funcionam exatamente do mesmo jeito todas as vezes que se põem a trabalhar.</p>\n<p>No futebol, nem sempre o craque do time está com a bola toda, como se diz. Numa organização, nem sempre o(a) líder ou os liderados estão no melhor dia, no seu melhor momento de produtividade. Alguns líderes estranham muito isso e não têm empatia. Cobram mais produtividade num momento por vezes difícil do liderado, com problemas de saúde, em casa, no casamento, dívidas, etc. Geralmente esses líderes esquecem quando eles mesmos não estão no melhor dia e que uma cobrança severa nesses momentos pode causar uma desmotivação enorme nos colaboradores.</p>\n<p>Vamos ser produtivos, criativos, motivados e o que mais seja necessário para termos bons resultados. Só não vamos esquecer que as pessoas não são máquinas com alguma peça que eventualmente não está funcionando bem. Até as máquinas precisam esfriar, de lubrificação, de cuidado, por vezes reparos e uma boa manutenção para funcionarem bem.</p>";

				const frontmatter = {"title":"Inspiração para produzir","description":"Eu fico pensando se não acontece a mesma coisa com líderes e liderados. Mesmo motivados, nem sempre os colaboradores estão no melhor momento para criar ou mesmo simplesmente executar.","pubDate":"Mar 15 2024","heroImage":"/artigos/inspiracao produzir.jpg","tags":["inspiração"]};
				const file = "/home/daniel/projects/Astro/AstroTino/tinoviana-astrofy/src/content/artigos/Inspiração para produzir.md";
				const url = undefined;
				function rawContent() {
					return "Hoje eu estou com vontade de escrever. Desde os meus 12 anos, até onde me lembro, já gostava de escrever, sempre gostei das aulas de Português. Tem dias que a inspiração vem, as ideias surgem e os dedos dançam no teclado.\n\nMas, apesar da vontade de escrever, não me sinto muito inspirado hoje. Talvez por causa do frio ou porque minha criatividade não está muito aguçada, mesmo.\n\nJá passei por isso algumas vezes. Às vezes, quando escrevo um livro me dá um branco criativo e não sai nada. Eu paro de escrever, vou fazer outra coisa pra sair desse sentimento de pouca energia e, quando volto, mais relaxado, as ideias vêm.  Em outros momentos, eu começo a escrever, mesmo que não goste muito do que sai de início, mas depois as ideias começam a surgir e a escrita sai. Em outros ainda, não sai nada e eu desisto por aquele dia.\n\nEu fico pensando se não acontece a mesma coisa com líderes e liderados. Mesmo motivados, nem sempre os colaboradores estão no melhor momento para criar ou mesmo simplesmente executar. Geralmente exige-se constância, comprometimento, força de vontade, espírito de equipe etc., como se fôssemos máquinas que funcionam exatamente do mesmo jeito todas as vezes que se põem a trabalhar.\n\nNo futebol, nem sempre o craque do time está com a bola toda, como se diz. Numa organização, nem sempre o(a) líder ou os liderados estão no melhor dia, no seu melhor momento de produtividade. Alguns líderes estranham muito isso e não têm empatia. Cobram mais produtividade num momento por vezes difícil do liderado, com problemas de saúde, em casa, no casamento, dívidas, etc. Geralmente esses líderes esquecem quando eles mesmos não estão no melhor dia e que uma cobrança severa nesses momentos pode causar uma desmotivação enorme nos colaboradores. \n\nVamos ser produtivos, criativos, motivados e o que mais seja necessário para termos bons resultados. Só não vamos esquecer que as pessoas não são máquinas com alguma peça que eventualmente não está funcionando bem. Até as máquinas precisam esfriar, de lubrificação, de cuidado, por vezes reparos e uma boa manutenção para funcionarem bem.\n\n";
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
