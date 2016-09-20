module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path:__dirname + '/static',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loaders: ['style', 'css?modules'] },
      {test: /\.(jpg|png)$/, loader: 'url-loader'}
    ]
  }
};
