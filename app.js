const express= require('express');

var app = express();

app.get('/', (req, res) => {
  res.send({
    hello: 'World'
  });
});


app.listen(3000);

var otherapp = express();

otherapp.get('/', (req, res) => {
  res.send({
    hello: 'World 2'
  });
});


otherapp.listen(3001);
