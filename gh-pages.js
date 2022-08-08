import ghpages from 'gh-pages';

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/lsburtonBYU/svelte', // Update to point to your repository
		user: {
			name: 'lsburtonBYU', // update to use your name
			email: 'lsburton@byu.edu' // Update to use your email
		}
	},
	() => {
		console.log('Deploy Complete!');
	}
);
