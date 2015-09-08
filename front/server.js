var express = require('express');
var app = express();

app.use(express.static('dist/'));

app.route('/*').get(function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(8001);
console.log('front server started at 8001');
