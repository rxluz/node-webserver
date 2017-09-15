var express = require('express');
var app = express();

app
.use(express.vhost('api.infestus.cc', (req, res) => {
   res.send('Hello api.infestus.cc');
}))

.use(express.vhost('apinew.infestus.cc', (req,res) => {
  res.send('Hello apinew.infestus.cc');
}))
.listen(3000);
