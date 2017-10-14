const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

const mongoose = require('mongoose');
const Location = require('./server-mongoose/models/locationModel');
const locationController = require('./server-mongoose/controllers/locationController');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://teamwind:teamwind@ds119585.mlab.com:19585/trvlr');
mongoose.connection.once('open', (err, success) => {
  if (err) console.log('NOOOOOOOO');
  console.log('CONNECTED YAYYYYY');
})
// then(
//   () => {console.log('SUCCESSFULLY CONNECTED!')},
//   err => {console.log('ERROR CONNECTING')}
// );

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/query', locationController.findMatches);
app.post('/creating', locationController.create);

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});