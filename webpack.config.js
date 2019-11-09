const project = require("./package.json");

const path = require("path");
const webpack = require("webpack");
const arrowFunctionTransform = require("babel-plugin-transform-es2015-arrow-functions");
const objectSpreadTransform = require("babel-plugin-transform-object-rest-spread");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");

const stylesheets = [
    "resources/css/app.min.css",
];

const externalResources = [
    { lib: "resources/css/reset.min.css", version: "2.0.0" },

    { lib: "resources/js/es5-shim.min.js", version: "4.5.6" },
    { lib: "resources/js/es6-shim.min.js", version: "0.35.3" },
    { lib: "resources/js/later.min.js", version: "1.2.0" },
    { lib: "resources/js/dragscroll.min.js", version: "0.0.8" },
];

const version = JSON.stringify(project.version);
const isProduction = process.env.NODE_ENV === "production";

const importBabelConfig = [
    "import",
    {
        libraryName: "antd",
        style: true
    }
];

module.exports = {
    entry: "./index.jsx",
    devtool: isProduction ? "hidden-source-map" : "source-map",

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "",
    },

    node: {
        fs: "empty",
    },

    plugins: isProduction ? [
        new webpack.ExtendedAPIPlugin(),

        new webpack.DefinePlugin({
            __webpack_version__: version,
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: { drop_console: true },
        }),

        new HtmlWebpackPlugin({
            template: "index.production.html",
            hash: true,
        }),

        new HtmlWebpackIncludeAssetsPlugin({
            assets: stylesheets.map((item) => {
                const asset = { path: item };
                asset.attributes = { async: "true" };
                return asset;
            }),
            append: false,
            hash: true,
        }),

        new HtmlWebpackIncludeAssetsPlugin({
            assets: externalResources.map((item) => {
                const asset = { path: `${item.lib}?v${item.version}` };
                asset.attributes = item.async === false ? {} : { async: "true" };
                return asset;
            }),
            append: false,
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "libs",
            filename: "libs.js",
            minChunks(module) {
                const context = module.context;
                return context && context.indexOf("node_modules") >= 0;
            },
        }),
    ] : [
        new webpack.DefinePlugin({
            __webpack_version__: version,
            __webpack_hash__: null,
        }),

        new HtmlWebpackPlugin({
            template: "index.development.html",
        }),
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules\/(?!(common-components|common-functions))/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"],
                    plugins: [arrowFunctionTransform, objectSpreadTransform, importBabelConfig],
                },
            }, {
                test: /\.html$/,
                loader: "html-loader",
                options: { minimize: true },
            },
        ],
    },

};
