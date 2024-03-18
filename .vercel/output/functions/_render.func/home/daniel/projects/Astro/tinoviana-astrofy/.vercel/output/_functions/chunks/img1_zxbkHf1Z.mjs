const img1 = new Proxy({"src":"/_astro/img1.DIiWmvRL.png","width":485,"height":328,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/daniel/projects/Astro/tinoviana-astrofy/src/assets/img1.png";
							}
							
							return target[name];
						}
					});

export { img1 as default };
