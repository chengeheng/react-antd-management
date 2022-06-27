const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");
module.exports = {
	webpack: {
		alias: {
			"@": path.join(__dirname, "src"),
		},
		configure: (webpackConfig, { env, paths }) => {
			webpackConfig.stats = "errors-warnings";
			paths.appBuild = "build";
			webpackConfig.output = {
				...webpackConfig.output,
				path: path.resolve(__dirname, "build"),
				publicPath: "/",
			};
			webpackConfig.devtool = "cheap-module-source-map";
			return webpackConfig;
		},
	},
	plugins: [
		{
			plugin: CracoAntDesignPlugin,
			options: {
				customizeTheme: {
					"@primary-color": "#1DA57A",
				},
			},
		},
	],
};
