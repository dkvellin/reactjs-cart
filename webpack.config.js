module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
            	test: /\.css$/, loader: "style-loader!css-loader" 
            },
            {
				      test: /\.js$/,
				      exclude: /(node_modules|bower_components)/,
				      use: {
				        loader: 'babel-loader',
				        options: {
				          presets: ['es2015', 'stage-0', 'react', 'env'],
				          plugins: ['transform-runtime'],
				        }
				      }
				    }
        ]
    }
};