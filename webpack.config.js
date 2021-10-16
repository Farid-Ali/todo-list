const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //mode of the development
  mode: 'development',
  //Source map for debuging purpose
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //clean the dist directory in every build
    clean: true,
  },
  plugins: [
    //automatically generate html file and add script tag dyanamically to it
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
