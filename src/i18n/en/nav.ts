/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - The first entry MUST be a heading
 * - Heading entries MUST include `header: true` and `type`
 * - Heading entries MAY include `nested: true` to move that heading and following links under the previous unnested heading
 * - Heading entries MAY include `collapsed: true` to mark it and its children as collapsed by default
 * - Link entries MUST include `slug` (which excludes the language code)
 *
 * For translators:
 *
 * Copy the English `key` value unchanged and translate only the `text` into your language:
 *
 * `src/i18n/en/nav.ts`: `{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },`
 * `src/i18n/ja/nav.ts`: `'getting-started': 'はじめに',`
 */
export default [

	{ text: 'Infrastructure', header: true, type: 'learn', key: 'infrastructure' },
	{ text: 'Development', slug: 'infrastructure/development/docs', key: 'infrastructure/development/docs' },
	{ text: 'Microsoft', slug: 'infrastructure/microsoft/docs', key: 'infrastructure/microsoft/docs' },

	{ text: 'Application Server', header: true, type: 'learn', key: 'app_server' },
	{ text: 'Domain Model', slug: 'app_server/domain_model/docs', key: 'app_server/domain_model/docs' },
	{ text: 'Products', slug: 'app_server/products/products', key: 'app_server/products/products' },
	{ text: 'Product Models', slug: 'app_server/product_models/product_models', key: 'app_server/product_models/product_models' },
	{ text: 'Termsheets', slug: 'app_server/termsheets/termsheet_models', key: 'app_server/termsheets/termsheet_models' },
	{ text: 'Holdings', slug: 'app_server/holdings/holdings', key: 'app_server/holdings/holdings' },
	{ text: 'ADR', slug: 'app_server/adr/adr', key: 'app_server/adr/adr' },

	{ text: 'fincast', header: true, type: 'learn', key: 'fincast' },
	{ text: 'Concepts', slug: 'fincast/concepts/docs', key: 'fincast/concepts/docs' },
	{ text: 'Products', slug: 'fincast/products/docs', key: 'fincast/products/docs' },
	{ text: 'ADR', slug: 'fincast/adr/adr', key: 'fincast/adr/adr' },

	{ text: 'Expert UI', header: true, type: 'learn', key: 'ui' },
	{ text: 'ADR', slug: 'ui/adr/adr', key: 'ui/adr/adr' },

	{ text: 'Advisor', header: true, type: 'learn', key: 'advisor' },
	{ text: 'Concepts', slug: 'advisor/concepts/docs', key: 'advisor/concepts/docs' },
	{ text: 'ADR', slug: 'advisor/adr/adr', key: 'advisor/adr/adr' },

] satisfies NavEntry[];

type NavEntry = {
	/** The visible label for this link or heading. */
	text: string;
	/**
	 * A unique key for this entry. Used in translation files to provide a translation for this entry’s label.
	 * Often the same as `slug` for links (but doesn’t have to be).
	 */
	key: string;
} & (
		| {
			/** The content collection slug for this page *without* the language code. */
			slug: string;
		}
		| {
			/** Marks this entry as a group heading and starts a new group. */
			header: true;
			/** Whether this group is in the learn or API category (currently unused). */
			type: 'learn' | 'api';
			/** Whether this group should be nested inside the preceding group. */
			nested?: boolean;
			/** Whether this group should be collapsed by default. */
			collapsed?: boolean;
		}
	);
