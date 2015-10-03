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

var reactRouter = function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', {
      content: content,
      isProduction: isProduction,
    });
  });
};

// NOTE every new react route will have to be here as well. This is so I can
// serve static content from nginx.
app.get('/', reactRouter);
app.get('/talks', reactRouter);
app.get('/press', reactRouter);
app.get('/hackathons', reactRouter);

if (isProduction) {
  app.use(express.static('/home/ian/ianww.com'));
} else {
  app.use(express.static(path.join(__dirname, '../../')));
}

var server = app.listen(isProduction ? process.env.PORT || 3456 : 3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Portfolio site listening at http://%s:%s', host, port);

});
