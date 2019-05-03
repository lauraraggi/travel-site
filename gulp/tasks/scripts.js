const gulp = require("gulp");
const webpack = require("webpack");
const config = require("../../webpack.config.js");

function scripts() {
  return new Promise(resolve =>
    webpack(config, (err, stats) => {
      if (err) console.log("Webpack", err);

      console.log(stats.toString());

      resolve();
    })
  );
}

module.exports = scripts;
