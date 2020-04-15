const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
    fixBabelImports("antd-mobile", {
        libraryName: "antd-mobile",
        libraryDirectory: "es",
        style: "css",
    }),
    fixBabelImports("antd", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
    })
);
