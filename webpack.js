const path = require('path');

module.exports = {
  mode:'development',
  entry:{
    app:'./ts-dist/index.js',
  },
  resolve:{
  },
  module:{
    rules:[
    ],
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve('./dist'),
  },
  devtool:'source-map',
  devServer:{
    contentBase:path.resolve('./dist'),
  }
}
