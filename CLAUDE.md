# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation website built with Astro and Starlight for a financial planning platform. The site documents various system components including app server, fincast, UI, and digital advisor modules. This appears to be a fork/customization of the Astro documentation template adapted for internal documentation purposes.

## Common Development Commands

### Development
- `pnpm dev` or `pnpm start` - Start development server at http://localhost:4321/
- `pnpm build` - Build the production site
- `pnpm preview` - Preview the production build locally
- `pnpm check` - Run Astro's built-in checks

### Code Quality
- `pnpm format` - Format code using Prettier
- `pnpm format:ci` - Format imports and code (used in CI)
- `pnpm lint:eslint` - Run ESLint checks
- `pnpm lint:linkcheck` - Check for broken links (builds first, then checks)
- `pnpm lint:linkcheck:nobuild` - Check links without building first
- `pnpm lint:slugcheck` - Check for slug conflicts
- `pnpm lint:a11y` - Run accessibility tests

### Content Generation
- `pnpm docgen` - Generate configuration reference from external sources
- `pnpm docgen:errors` - Generate error documentation
- `pnpm add-language` - Add support for a new language

### Deployment
- `pnpm netlify:build` - Build for Netlify deployment

## Architecture

### Tech Stack
- **Framework**: Astro 4.11.0 with Starlight documentation theme
- **Package Manager**: pnpm 9.3.0
- **TypeScript**: Strict configuration with path aliases (`~/*` → `src/*`)
- **Styling**: Custom CSS with Starlight theming
- **Content**: MDX files with custom components

### Key Directories
- `src/content/docs/en/` - All English documentation content
- `src/components/` - Reusable Astro components
  - `starlight/` - Custom Starlight component overrides
  - `tabs/` - Tab-based navigation components
  - `tutorial/` - Tutorial-specific components
- `config/` - Configuration for sidebar navigation and locales
- `scripts/` - Build and maintenance scripts
- `integrations/` - Custom Astro integrations

### Content Structure
Documentation is organized by domain:
- `advisor/` - Digital advisor system documentation
- `app_server/` - Application server components
- `fincast/` - Financial forecasting system
- `infrastructure/` - Development and deployment infrastructure
- `ui/` - User interface documentation

### Configuration System
- Sidebar navigation configured in `config/sidebar.ts`
- Locale support managed in `config/locales.ts`
- Site configuration in `astro.config.ts`
- Custom plugins for markdown processing and link handling

### Custom Components
The site heavily customizes Starlight with:
- Custom navigation components
- Tab systems for different content types
- Tutorial progress tracking
- Brand-specific styling and logos

### Build Process
- Uses custom build scripts for content generation
- Link checking and validation integrated into build
- Accessibility testing via pa11y
- Automated formatting and linting

### Development Notes
- Content should only be added to English (`/en/`) directory
- Custom markdown plugins handle autolinks and task lists
- Images and diagrams extensively use Excalidraw format
- Site uses custom domain: https://docs.dfp.ch/

### Scripts and Automation
- `scripts/docgen.mjs` - Generates configuration docs from external TypeScript definitions
- `scripts/lint-linkcheck.ts` - Comprehensive link validation with autofix capability
- Link checker supports multiple validation types: target exists, same language, canonical URLs, relative URLs, good labels

## Content Management Guidelines

### Adding New Content
- When adding a new folder, page, or sub-page in this CMS:
  - Navigate to `src/content/docs/en/` directory
  - Create a new folder for the domain if it doesn't exist (e.g., `advisor/`, `app_server/`)
  - Use lowercase, kebab-case naming for folders and files (e.g., `user-management/`)
  - Create an `index.mdx` for section landing pages
  - Write content using MDX format with frontmatter for metadata
  - Update `config/sidebar.ts` to add new navigation entries
  - Ensure consistent formatting and follow existing documentation style
  - Add images or diagrams in the same directory, preferably using Excalidraw format

### Navigation Configuration
- Navigation structure is defined in `src/i18n/en/nav.ts`
- Each entry requires `text`, `key`, and either `slug` or `header: true`
- Use `nested: true` for sub-sections under a main heading
- Use `collapsed: true` to collapse sections by default
- Sidebar is auto-generated from nav.ts via `config/sidebar.ts`

### Testing and Validation
- Always run link checking after content changes: `pnpm lint:linkcheck`
- Use autofix for minor link issues: link checker has built-in autofix capability
- Test accessibility: `pnpm lint:a11y` 
- Validate slug uniqueness: `pnpm lint:slugcheck`
- Check build integrity: `pnpm build` before committing

### Content Standards
- Use MDX for rich content with custom components
- Store Excalidraw files alongside content (.excalidraw + exported .png)
- Follow existing domain structure: concepts/, adr/, products/, etc.
- Use consistent heading hierarchy (# for page title, ## for main sections)
- Include frontmatter with title and description for SEO