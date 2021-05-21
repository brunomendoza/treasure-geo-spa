const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}