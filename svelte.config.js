import adapter from '@sveltejs/adapter-static';

const base = process.env['NODE_ENV'] === 'production' ? '/svelte' : '';

export default {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),

		paths: {
			base: base
		},

		prerender: {
			default: true
		}
	}
};
