const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
      },
    },
  },
  publicPath: process.env.BASE_URL,
  assetsDir: process.env.BASE_URL,
  devServer: {
    contentBase: path.join(__dirname, ""),
    proxy: {
      "/": {
        target: "https://openapi.map.naver.com",
        changeOrigin: true,
        pathRewrite: { "^/": "" },
      },
    },
  },
  outputDir: "docs",
};
