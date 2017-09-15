var evh = require('express-vhost'),
    express = require('express');

var appFactory = function(echo) {
    var appTest = express();
    appTest.get('/', function(req, res) {
        res.send(echo);
    });

    return appTest;
};

var server = express();
server.use(evh.vhost(server.enabled('trust proxy')));
server.listen(3000);

evh.register('api.infestus.cc', require('./apps/infestus.api/app.js'));
var app2 = appFactory('test2');
evh.register('apinew.infestus.cc', app2);
//evh.register('*.test2-local', appFactory('test2'));
