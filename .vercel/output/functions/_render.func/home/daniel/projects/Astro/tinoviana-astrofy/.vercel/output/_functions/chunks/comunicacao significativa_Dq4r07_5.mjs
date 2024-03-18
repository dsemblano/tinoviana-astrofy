import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_PI-Hi11_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Uma forma de comunicar com maior possibilidade de influenciar e mobilizar as pessoas para uma ação qualificada é a chamada Comunicação Significativa.</p>\n<p>Você já reparou as diferenças entre quando alguém lhe diz simplesmente para realizar uma tarefa e quando lhe dizem também o “porquê” de realizá-la? Em qual situação a aceitação acontece? Nas duas situações a tarefa poderá ser realizada, mas quando se entende o porquê de realizá-la a motivação é maior, porque ela passa a ter um significado, passa a fazer sentido para o executor e isso o motiva a executar.</p>\n<p>Muitos gestores não percebem essa diferença e simplesmente “distribuem tarefas” entre os integrantes da equipe, sem explicar-lhes o significado delas. Tempos depois reclamam que as equipes não estão comprometidas com o resultado e com o processo. Mas, comprometidas com o quê? Com o que estão fazendo sem entenderem as razões e o impacto da realização destas tarefas?</p>\n<p>A Comunicação Significativa, ou seja, explicar ao outro a ação e o seu significado, o que deverá ser feito e o porquê, na grande maioria das vezes, ajuda no comprometimento do profissional escolhido para a realização, sendo também uma ferramenta de persuasão, uma vez que ele é convencido de agir e não obrigado a fazê-lo.</p>\n<p>A melhor forma de se comunicar é passar primeiro o significado e depois a ação. Desta forma o receptor da comunicação já poderá “comprar” o motivo da ação antes de saber o que irá fazer.</p>\n<h2 id=\"dica-para-uma-comunicação-significativa\">Dica para uma Comunicação Significativa:</h2>\n<ol>\n<li>Cenário</li>\n<li>Objetivo</li>\n<li>Regras, procedimentos, diretrizes…</li>\n<li>Prazo</li>\n<li>Como fazer (se necessário)</li>\n</ol>";

				const frontmatter = {"title":"Comunicação Significativa","description":"Muitos gestores não percebem essa diferença e simplesmente “distribuem tarefas” entre os integrantes da equipe, sem explicar-lhes o significado delas. Tempos depois reclamam que as equipes não estão comprometidas com o resultado e com o processo.","pubDate":"Mar 15 2024","heroImage":"/artigos/comunicação significativa.jpg","tags":["comunicação"]};
				const file = "/home/daniel/projects/Astro/tinoviana-astrofy/src/content/artigos/comunicacao significativa.md";
				const url = undefined;
				function rawContent() {
					return "Uma forma de comunicar com maior possibilidade de influenciar e mobilizar as pessoas para uma ação qualificada é a chamada Comunicação Significativa.\n\nVocê já reparou as diferenças entre quando alguém lhe diz simplesmente para realizar uma tarefa e quando lhe dizem também o “porquê” de realizá-la? Em qual situação a aceitação acontece? Nas duas situações a tarefa poderá ser realizada, mas quando se entende o porquê de realizá-la a motivação é maior, porque ela passa a ter um significado, passa a fazer sentido para o executor e isso o motiva a executar. \n\nMuitos gestores não percebem essa diferença e simplesmente “distribuem tarefas” entre os integrantes da equipe, sem explicar-lhes o significado delas. Tempos depois reclamam que as equipes não estão comprometidas com o resultado e com o processo. Mas, comprometidas com o quê? Com o que estão fazendo sem entenderem as razões e o impacto da realização destas tarefas?\n\nA Comunicação Significativa, ou seja, explicar ao outro a ação e o seu significado, o que deverá ser feito e o porquê, na grande maioria das vezes, ajuda no comprometimento do profissional escolhido para a realização, sendo também uma ferramenta de persuasão, uma vez que ele é convencido de agir e não obrigado a fazê-lo. \n\nA melhor forma de se comunicar é passar primeiro o significado e depois a ação. Desta forma o receptor da comunicação já poderá “comprar” o motivo da ação antes de saber o que irá fazer.\n\n## Dica para uma Comunicação Significativa:\n1.\tCenário\n2.\tObjetivo\n3.\tRegras, procedimentos, diretrizes...\n4.\tPrazo\n5.\tComo fazer (se necessário)\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"dica-para-uma-comunicação-significativa","text":"Dica para uma Comunicação Significativa:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
