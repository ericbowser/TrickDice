const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './build/'),
		filename: 'index_bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		open: true,
		host: 'localhost'
	},
	mode: "development",
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({template: "./public/index.html"}),
	],
	module: {
		rules: [
				{
					test: /\.(js|jsx)$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react']
						}
					},
				},
				{
					test: /\.(css)$/,
					use: ['style-loader', 'css-loader', 'postcss-loader']
				},
				{
					test: /\.(ico|jpg|png)$/i,
					loader: 'file-loader',
					// options: {
					// 	name: './src/assets/dice-six-faces-five_39565.png'
					// }
				}
			]
	}
}

module.exports = config
