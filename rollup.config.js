import resolve from '@rollup/plugin-node-resolve'

export default [
	{
		input: 'app/browser/main.js',
		output: {
			sourcemap: true,
			format: 'es',
			dir: 'deploy/browser/build',
		},
		plugins: [
			resolve({
				browser: true,
				preferBuiltins: false,
			}),
		],
	},
	{
		input: 'app/server/main.js',
		output: {
			sourcemap: true,
			format: 'cjs',
			exports: undefined,
			dir: 'deploy/server/build',
		},
		plugins: [
			resolve({
				browser: false,
				preferBuiltins: true,
			}),
		],
	},
]
