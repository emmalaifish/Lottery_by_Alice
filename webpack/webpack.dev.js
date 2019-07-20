const path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
		    test: /\.css$/,
		    use: [
		      {
		        loader: 'style-loader'
		      },
		      {
		        loader: 'css-loader'
		      },
		      {
		        loader: 'postcss-loader',
		        options: {
		        	config: {
		        		path: './webpack/postcss.config.js'
		        	}
		        }
		       }
		    ]
		  },
		  {
		  	test: /\.(ttf|woff|woff2)$/,
			  use: {
			    loader: "url-loader",
			    options: {
			      limit: 8192,
			    },
			  },
			},
			{
		  	test: /\.svg$/,
			  use: {
			    loader: "url-loader",
			    options: {
			      limit: 8192,
			    },
			  },
			}
		]
	},
	devServer: {
		port: 8080,
		open: true,
		contentBase: path.resolve(__dirname, '../')
	},
}
