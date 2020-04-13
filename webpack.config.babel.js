"use strict";

import path from "path";
import webpack from "webpack";

const paths = {
	output: path.join(__dirname, "/build"),
	src: "./src/js",
	bundles: "bundles",
	chunks: "chunks",
	public: "/build/",
};

module.exports = {
	entry: "./src/main.js",
	output: {
		path: paths.output,
		filename: `${paths.bundles}/[name].bundle.js`,
		chunkFilename: `${paths.chunks}/[id].chunk.js`,
		publicPath: paths.public,
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: `${paths.bundles}/[name].bundle.js`,
			minChunks: 2,
		}),
	],
	node: {
		fs: "empty",
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /.vue$/,
				loader: "eslint-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					postcss: [require('postcss-cssnext')()]
				}
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]?[hash]",
				},
			},

		],
	},

	devServer: {
		historyApiFallback: true,
	},
	devtool: "#eval-source-map",
};
