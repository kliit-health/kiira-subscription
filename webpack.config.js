const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: ['@babel/transform-runtime']
				}
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{
				test: /\.(pdf|jpg|png|gif|svg|ico)$/,
				use: [
					{
						loader: 'url-loader'
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader'
			},
			{
				test: /.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			src: path.resolve(__dirname, 'src/')
		}
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers':
				'X-Requested-With, content-type, Authorization'
		}
	},
	plugins: [new Dotenv()]
}
