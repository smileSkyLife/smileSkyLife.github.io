module.exports = {
	// resolve: {
	// 	extensions: ['', 'js']
	// },
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'css-loader'
			}
		]
	}
}