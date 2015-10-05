'use strict';

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
        { test: /\.css$/, loader: "style!css" },
	    {
        	test: /\.js?$/,
        	exclude: /node_modules/,
       		loaders: [ 'babel?optional[]=runtime&optional[]=es7.decorators&optional[]=es7.exportExtensions&stage=2' ]
     	},
        {
        test: /\.json$/,
        loader: 'json-loader'
        }
        ]
    }
};
