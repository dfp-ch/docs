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

	{ text: 'Application Server', header: true, type: 'learn', key: 'app_server' },
	{ text: 'Domain Model', slug: 'app_server/domain_model/docs', key: 'app_server/domain_model/docs' },
	{ text: 'Holding Products', slug: 'app_server/holding_products/holding_products', key: 'app_server/holding_products/holding_products' },
	{ text: 'Goal Products', slug: 'app_server/goal_products/goal_products', key: 'app_server/goal_products/goal_products' },
	{ text: 'Action Products', slug: 'app_server/action_products/action_products', key: 'app_server/action_products/action_products' },
	{ text: 'Product Models', slug: 'app_server/product_models/product_models', key: 'app_server/product_models/product_models' },
	{ text: 'Termsheet Models', slug: 'app_server/termsheet_models/termsheet_models', key: 'app_server/termsheet_models/termsheet_models' },
	{ text: 'References', slug: 'app_server/references/references', key: 'app_server/references/references' },
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

	{ text: 'Infrastructure', header: true, type: 'learn', key: 'infrastructure' },
	{ text: 'Development', slug: 'infrastructure/development/docs', key: 'infrastructure/development/docs' },
	{ text: 'Microsoft', slug: 'infrastructure/microsoft/docs', key: 'infrastructure/microsoft/docs' },

	{ text: 'Tools', header: true, type: 'learn', key: 'tools' },
	{ text: 'Claude Code', header: true, type: 'learn', key: 'tools/claude_code', nested: true },
	{ text: 'Introduction', slug: 'tools/claude_code/introduction/docs', key: 'tools/claude_code/introduction/docs' },
	{ text: 'Installation', slug: 'tools/claude_code/installation/docs', key: 'tools/claude_code/installation/docs' },
	{ text: 'Best Practices', slug: 'tools/claude_code/best_practices/docs', key: 'tools/claude_code/best_practices/docs' },
	{ text: 'Memory', slug: 'tools/claude_code/memory/docs', key: 'tools/claude_code/memory/docs' },
	{ text: 'Commands', slug: 'tools/claude_code/commands/docs', key: 'tools/claude_code/commands/docs' },
	{ text: 'External: repos', slug: 'tools/claude_code/external_repos/docs', key: 'tools/claude_code/external_repos/docs' },
	{ text: 'External: docs', slug: 'tools/claude_code/external_docs/docs', key: 'tools/claude_code/external_docs/docs' },
	{ text: 'External: videos', slug: 'tools/claude_code/videos', key: 'tools/claude_code/videos' },

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
