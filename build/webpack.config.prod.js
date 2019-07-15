const path = require("path");
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const nodeExternals = require("webpack-node-externals");
function resolve(dir) {
    return path.join(__dirname, "..", dir);
}
module.exports = {
    mode: "production",
    entry: resolveApp("index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist"),
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx)$/,
                enforce: "pre",
                use: [
                    {
                        options: {
                            formatter: require.resolve(
                                "react-dev-utils/eslintFormatter"
                            ),
                            eslintPath: require.resolve("eslint")
                        },
                        loader: require.resolve("eslint-loader")
                    }
                ],
                include: resolve("components")
            },
            {
                oneOf: [
                    {
                        test: /\.(js|mjs|jsx)$/,
                        include: resolve("components"),

                        loader: require.resolve("babel-loader"),
                        options: {
                            customize: require.resolve(
                                "babel-preset-react-app/webpack-overrides"
                            ),

                            cacheDirectory: true,
                            cacheCompression: true,
                            compact: true
                        }
                    },
                    {
                        test: /\.(js|mjs)$/,
                        exclude: /@babel(?:\/|\\{1,2})runtime/,
                        loader: require.resolve("babel-loader"),
                        options: {
                            babelrc: false,
                            configFile: false,
                            compact: false,
                            presets: [
                                [
                                    require.resolve(
                                        "babel-preset-react-app/dependencies"
                                    ),
                                    { helpers: true }
                                ]
                            ],
                            cacheDirectory: true,
                            cacheCompression: true,
                            sourceMaps: false
                        }
                    },
                    {
                        test: /\.css$/,
                        exclude: /node_modules/,
                        use: ["style-loader", "css-loader"]
                    }
                ]
            }
            // {
            //     test: /\.js$/,
            //     options: { babelrc: true },
            //     loader: require.resolve("babel-loader"),
            //     exclude: /node_modules/
            // },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,

            //     use: ["style-loader", "css-loader"]
            // }
        ]
    },
    externals: [nodeExternals()]
};
