import resolve from '@rollup/plugin-node-resolve'

export default [
	{
		input: 'app/browser/main.js',
		output: {
			sourcemap: true,
			format: 'es',
			dir: 'build/browser',
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
			dir: 'build/server',
		},
		plugins: [
			resolve({
				browser: false,
				preferBuiltins: true,
			}),
		],
	},
]
