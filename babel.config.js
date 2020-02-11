module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', "module:metro-react-native-babel-preset"],
    "plugins": [
      ["module-resolver", {
          "root": ["./"],
          "extensions": [".js", ".ios.js", ".android.js"],
          "alias": {
            "@": "./src",
            components: './src/components',
            layouts: './src/layouts',
            models: './src/models',
            screens: './src/screens',
            store: './src/store',
            utils: './src/utils',
          }
      }]
    ]
  };
};
