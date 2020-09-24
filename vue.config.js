const path = require("path");
const IS_PRO = ["production", "test"].includes(process.env.NODE_ENV);
module.exports = {
    publicPath: "/",
    // 输出文件目录
    outputDir: "dist",
    assetsDir: "assets",
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.symlinks(true); //热更新
    },
    configureWebpack: config => {
        console.log(config, "config");
        console.log(process.env.NODE_ENV);
        if (process.env.NODE_ENV === "production") {
            // 为生产环境修改配置...
            config.mode = "production";
            // 将每个依赖包打包成单独的js文件
            let optimization = {
                runtimeChunk: "single",
                splitChunks: {
                    chunks: "all",
                    maxInitialRequests: Infinity,
                    minSize: 20000,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                const packageName = module.context.match(
                                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                                )[1];
                                return `npm.${packageName.replace("@", "")}`;
                            }
                        }
                    }
                }
            };
            Object.assign(config, {
                optimization
            });
        } else {
            // 为开发环境修改配置...
            config.mode = "development";
        }
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                extensions: [".js", ".vue", ".json"], //请求本地json
                alias: {
                    "@": path.resolve(__dirname, "./src"),
                    "@c": path.resolve(__dirname, "./src/components"),
                    "@p": path.resolve(__dirname, "./src/pages"),
                    vue$: "vue/dist/vue.esm.js"
                } // 别名配置
            }
        });
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        // 是否使用css分离插件 ExtractTextPlugin
        extract: IS_PRO,
        // extract: true,
        // 开启 CSS source maps?是否在构建样式地图，false将提高构建速度
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    parallel: require("os").cpus().length > 1,
    // webpack-dev-server 相关配置
    devServer: {
        // open: process.platform === 'darwin',
        open: true,
        host: "0.0.0.0",
        port: 8081,
        https: false,
        hotOnly: false,
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            "/api": {
                // 目标 API 地址
                target: "http://192.168.100.10:8088",
                // 如果要代理 websockets
                ws: false,
                changeOrigin: true, // 允许websockets跨域
                pathRewrite: {
                    "^/api/": ""
                }
            }
            // "/app": {
            //     // 目标 API 地址
            //     target: "http://192.168.100.10:8088",
            //     // 如果要代理 websockets
            //     ws: false,
            //     changeOrigin: true // 允许websockets跨域
            // }
        },

        // 代理转发配置，用于调试环境
        disableHostCheck: true
    },
    chainWebpack: config => {
        config.resolve.symlinks(true); // 修复热更新失效
    }
};