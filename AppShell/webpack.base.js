const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'es2015',
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ],
          "plugins": ["transform-class-properties",
            ["transform-runtime", {
              "polyfill": false,
              "regenerator": true
            }]]
        }
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          'css-loader?importLoaders=true',
        ]
      }
    ]
  }
};
