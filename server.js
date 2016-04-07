var path = require('path');
var express = require('express');
var port = 3000;
var app = express();

app.listen(port, () => {
  console.log('HTTP on http://localhost:3000/');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/user', (req, res) => {
  console.log('req: ', req);
  res.send({ message: 'response'});
});