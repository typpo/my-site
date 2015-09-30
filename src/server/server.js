import path from 'path'
import express from 'express';
import React from 'react';
import Router from 'react-router';
var httpProxy = require('http-proxy');

const app = express();

app.set('views', './views');
app.set('view engine', 'hjs');

import routes from '../shared/routes';

var isProduction = process.env.NODE_ENV === 'production';
if (isProduction) {
  console.log('*** In production mode');
console.log(__dirname);
  app.use('/build', express.static(path.join(__dirname, '../../build')));
} else {
  console.log('*** In development mode');
  var proxy = httpProxy.createProxyServer({
    changeOrigin: true,
  });

  app.get('/build/*', function(req, res) {
    // Proxy to webpack server.
    proxy.web(req, res, {
      target: 'http://localhost:8080',
    });
  });
}

app.get('/*', function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', {
      content: content,
    });
  });
});

var server = app.listen(isProduction ? process.env.PORT || 3456 : 3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Portfolio site listening at http://%s:%s', host, port);

});
