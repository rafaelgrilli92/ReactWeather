var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			About: 'app/components/About.jsx',
			ApplicationStyles: 'app/styles/app.css',
			ErrorModal: 'app/components/Shared/ErrorModal.jsx',
			Examples: 'app/components/Examples.jsx',
			Main: 'app/components/Layout/Main.jsx',
			Nav: 'app/components/Layout/Nav.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx',
			Weather: 'app/components/Weather/Weather.jsx'
		},
		extensions: ['','.js', '.jsx']
	},
	module: {
		loaders: [{
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			},
			test: /\.jsx?$/,
			exclude: /(node_module|bower_components)/
		}]
	},
	devtool: 'inline-source-map'
};