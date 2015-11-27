var express     = require('express');
var bodyparser  = require('body-parser');
var connection  = require('express-myconnection');
var mysql       = require('mysql');
var config      = require('./config.js');
var app         = express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use( connection( mysql, config.dbOptions, 'request') );

var apiRoutes   = require('./routes.js');

app.use('/api', apiRoutes);

app.listen(app.get('port'), function(){
    console.log('The API is running on http://localhost:' + app.get('port'));
});
