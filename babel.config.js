module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            'babel-preset-expo',
            ['@babel/preset-env', {targets: {node: 'current'}}],
            '@babel/preset-typescript',
        ],
        "sourceType": "unambiguous",
        plugins: [
            ["module-resolver", {
                "alias": {
                    "@components": "./app/components",
                    "@styles": "./app/styles",
                    "@helpers": "./app/helpers",
                    "@i18n": "./app/i18n",
                }
            }],
        ]
    };
};
