const cachoeira = new Proxy({"src":"/_astro/11.BPgy5yGC.webp","width":400,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/daniel/projects/Astro/tinoviana-astrofy/src/assets/cachoeira.webp";
							}
							
							return target[name];
						}
					});

export { cachoeira as default };
