const path = require('path')
const withPlugins = require('next-compose-plugins')
const withStylus = require('@zeit/next-stylus')
const withImages = require('next-images')
const withReactSvg = require('next-react-svg')

const nextConfig = {
	pageExtensions: ['page.tsx'],
	distDir: 'build',
}

module.exports = withPlugins(
	[
		[
			withStylus,
			{
				cssModules: true,
				cssLoaderOptions: {
					importLoaders: 1,
					localIdentName: '[local]__[hash:base64:5]',
				},
			},
		],
		[
			withImages,
			{
				exclude: path.resolve(__dirname, 'src/assets/svg'),
				inlineImageLimit: 16384,
			},
		],
		[
			withReactSvg,
			{
				include: path.resolve(__dirname, 'src/assets/svg'),
			},
		],
	],
	nextConfig
)
