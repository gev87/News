module.exports = {
	extends: "next/core-web-vitals",
	plugins: ["import"],
	rules: {
		"import/no-unresolved": "error",
		"import/named": "error",
		"import/default": "error",
		"import/namespace": "error",
		"import/no-absolute-path": "error",
	},
	settings: {
		"import/resolver": {
			node: {
				paths: ["."],
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			alias: {
				map: [
					["@", "./"], // Maps the @ alias to the root directory
				],
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
};
