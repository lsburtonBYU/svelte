import adapter from '@sveltejs/adapter-static';

const base = process.env['NODE_ENV'] === 'production' ? '/svelte' : '';
// const base = import.meta.env.DEV ? '' : '/svelte';
// const base = '/svelte';
// const base = '';

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),

		paths: {
			base: base
		},

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};
