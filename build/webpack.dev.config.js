const webpack = require("webpack");
const path = require("path");

const ROOT_PATH = path.resolve(__dirname);
const EXAMPLES_PATH = path.resolve(ROOT_PATH, "../examples");
const SRC_PATH = path.resolve(ROOT_PATH, "../src");
const OUTPUT_PATH = path.resolve(ROOT_PATH, "../dist");
const PORT = 3000;

module.exports = {
    entry: {
        "react-magnitude": path.resolve(SRC_PATH, "index.js"),
        "react-magnitude-examples": path.resolve(EXAMPLES_PATH, "index.js")
    },
    output: {
        path: OUTPUT_PATH,
        publicPath: "/assets/",
        filename: "[name].js"
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
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        extensions: [".js"],
        alias: {
            "react-magnitude": SRC_PATH
        },
        modules: [EXAMPLES_PATH, "node_modules"]
    },
    devtool: "source-map",
    devServer: {
        contentBase: EXAMPLES_PATH,
        port: PORT,
        noInfo: false, // Supress lots of messages about the modules being packed (--no-info).
        inline: true, // Load the webpack-dev-server client module (--inline).
        hot: true, // Enable hot module loading if the plugin is loaded above (--hot).
        compress: true, // Enable gzip compression of generated files.
        clientLogLevel: "none",
        watchContentBase: true,
        quiet: true,
        watchOptions: {
            ignored: /node_modules/
        },
        overlay: false,
        historyApiFallback: {
            disableDotRule: true
        }
    }
};
