import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

//var port = 3000;
const port = 3000; //ES6 const from var
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  //Hard coding to pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Danny","lastName":"Tran","email":"dtran007@protonmail.com"},
    {"id": 2,"firstName":"JavaScript","lastName":"NodeJS","email":"JavaScriptNodeJS@hotmail.com"},
    {"id": 3,"firstName":"Dev","lastName":"Enviro","email":"devEnviro@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
