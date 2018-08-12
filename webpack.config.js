module.exports = {
	//Webapack Configuration
	mode: "development",
	entry: './app/index.jsx',
	output: {
		filename: "./public/bundle.js"
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(jsx?)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				},
				{
					loader: "css-loader",
					options: {
						modules: true,
						camelCase: true,
						sourceMap: true
					}
				},{
					loader: "sass-loader"
				}]
			}
		]
	}
};