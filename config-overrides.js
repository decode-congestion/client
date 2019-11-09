const webpack = require("webpack");
const path = require('path');
module.exports = function override(config, env) {
  // Extend the config to work with the videojs-record project without ejecting create react app.
  // Reference: https://github.com/collab-project/videojs-record/wiki/React
  // Instead of ejecting apply webpack config changes here.
  const srcAlias = {
    src: path.resolve(__dirname + '/src')
  }
  config.resolve.alias = { ...config.resolve.alias, ...srcAlias };
  return config;
};