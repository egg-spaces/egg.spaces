const path = require('path');

const config = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ["webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};

module.exports = config;