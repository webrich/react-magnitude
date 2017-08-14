const webpack = require("webpack");
const path = require("path");

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, "../src");
const OUTPUT_PATH = path.resolve(ROOT_PATH, "../dist");

module.exports = {
    entry: {
        "react-magnitude": path.resolve(SRC_PATH, "index.js")
    },
    output: {
        path: OUTPUT_PATH,
        filename: "[name].min.js"
    },
    externals: {
        classnames: "classNames",
        classNames: "classNames",
        "prop-types": "PropTypes",
        react: "React",
        "react-dom": "ReactDOM",
        "react-router-dom": "react-router-dom",
        shortid: "shortid"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ["react-hot-loader/webpack", "babel-loader"],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ],
    resolve: {
        extensions: [".js"],
        modules: [SRC_PATH, "node_modules"]
    }
};
