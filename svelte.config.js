import adapter from '@sveltejs/adapter-static';

// const dev = process.env.NODE_ENV === 'development';
const base = '/svelte';
// const base = '';

export default {
	kit: {
		paths: {
			base: base
		},
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};
