declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"artigos": {
"A liderança nas organizações e as eleições políticas.md": {
	id: "A liderança nas organizações e as eleições políticas.md";
  slug: "a-liderança-nas-organizações-e-as-eleições-políticas";
  body: string;
  collection: "artigos";
  data: InferEntrySchema<"artigos">
} & { render(): Render[".md"] };
"Futebol e lideranca.md": {
	id: "Futebol e lideranca.md";
  slug: "futebol-e-lideranca";
  body: string;
  collection: "artigos";
  data: InferEntrySchema<"artigos">
} & { render(): Render[".md"] };
"Inspiração para produzir.md": {
	id: "Inspiração para produzir.md";
  slug: "inspiração-para-produzir";
  body: string;
  collection: "artigos";
  data: InferEntrySchema<"artigos">
} & { render(): Render[".md"] };
"Sobre liderança.md": {
	id: "Sobre liderança.md";
  slug: "sobre-liderança";
  body: string;
  collection: "artigos";
  data: InferEntrySchema<"artigos">
} & { render(): Render[".md"] };
"Tem que vir da China.md": {
	id: "Tem que vir da China.md";
  slug: "tem-que-vir-da-china";
  body: string;
  collection: "artigos";
  data: InferEntrySchema<"artigos">
} & { render(): Render[".md"] };
"assertividade.md": {
	id: "assertividade.md";
  slug: "assertividade";
  body: string;
  collection: "artigos";
  data: InferEntrySchema<"artigos">
} & { render(): Render[".md"] };
"comunicacao significativa.md": {
	id: "comunicacao significativa.md";
  slug: "comunicacao-significativa";
  body: string;
  collection: "artigos";
  data: InferEntrySchema<"artigos">
} & { render(): Render[".md"] };
"energizacao.md": {
	id: "energizacao.md";
  slug: "energizacao";
  body: string;
  collection: "artigos";
  data: InferEntrySchema<"artigos">
} & { render(): Render[".md"] };
"lideranca.md": {
	id: "lideranca.md";
  slug: "lideranca";
  body: string;
  collection: "artigos";
  data: InferEntrySchema<"artigos">
} & { render(): Render[".md"] };
"marca empregadora.md": {
	id: "marca empregadora.md";
  slug: "marca-empregadora";
  body: string;
  collection: "artigos";
  data: InferEntrySchema<"artigos">
} & { render(): Render[".md"] };
};
"servicos": {
"lideracao.md": {
	id: "lideracao.md";
  slug: "lideracao";
  body: string;
  collection: "servicos";
  data: InferEntrySchema<"servicos">
} & { render(): Render[".md"] };
};
"store": {
"item1.md": {
	id: "item1.md";
  slug: "item1";
  body: string;
  collection: "store";
  data: InferEntrySchema<"store">
} & { render(): Render[".md"] };
"item2.md": {
	id: "item2.md";
  slug: "item2";
  body: string;
  collection: "store";
  data: InferEntrySchema<"store">
} & { render(): Render[".md"] };
"item3.md": {
	id: "item3.md";
  slug: "item3";
  body: string;
  collection: "store";
  data: InferEntrySchema<"store">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
