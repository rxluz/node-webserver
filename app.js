var express = require('express');
var evh = require('express-vhost');
var app = express();

app
.use(evh.vhost('api.infestus.cc', (req, res) => {
   res.send('Hello api.infestus.cc');
}))

.use(evh.vhost('apinew.infestus.cc', (req,res) => {
  res.send('Hello apinew.infestus.cc');
}))
.listen(3000);
