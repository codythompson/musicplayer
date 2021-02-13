const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    contentBase: "./dist"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /staticAssets\/.*/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
