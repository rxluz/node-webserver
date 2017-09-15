var evh = require('express-vhost'),
    express = require('express');

var appFactory = function(echo) {
    var app = express();
    app.get('/', function(req, res) {
        res.send(echo);
    });

    return app;
};

var server = express();
server.use(evh.vhost(server.enabled('trust proxy')));
server.listen(3000);

evh.register('api.infestus.cc', require('/apps/infestus.api/app.js').app);
var app2 = appFactory('test2');
evh.register('apinew.infestus.cc', app2);
//evh.register('*.test2-local', appFactory('test2'));
