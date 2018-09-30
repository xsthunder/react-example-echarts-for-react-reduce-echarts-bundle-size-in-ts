const path = require('path');

module.exports = {
  mode:'production',
  entry:{
    app:'./ts-dist/index.js',
    simple:'./ts-dist/Simple.js',
    "simple-core":'./ts-dist/SimpleCore.js',
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
