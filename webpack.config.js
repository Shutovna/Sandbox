'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/jquery.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map"
};
