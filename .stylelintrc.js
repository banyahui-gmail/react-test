module.exports = {
    extends: [
        '@ecomfe/stylelint-config'
    ],
    rules: {
        "indentation": 2,
		"block-closing-brace-newline-before": null,
		"number-leading-zero": null
    },
    ignoreFiles: [
        "src/styles/iconfont.css"
    ]
};