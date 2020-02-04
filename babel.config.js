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
            screens: './src/screens',
            components: './src/components',
            models: './src/models',
          }
      }]
    ]
  };
};
