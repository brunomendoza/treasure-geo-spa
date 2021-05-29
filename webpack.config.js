const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: [
            path.join(__dirname, "public"),
            path.join(__dirname, "assets")
        ],
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
            },
            {
                test: /\.s(ass|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    }
}