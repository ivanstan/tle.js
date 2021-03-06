const path = require("path");

module.exports = {
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: ['/node_modules/', '/tests/']
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'tle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Tle',
    libraryTarget: 'umd2'
  }
};
