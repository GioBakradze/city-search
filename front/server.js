var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/dist', express.static(__dirname + '/dist'));

app.route('/*').get(function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(8001);
console.log('front server started at 8001');
