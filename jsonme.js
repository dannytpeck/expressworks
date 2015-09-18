var express = require('express');
var fs = require('fs');
var app = express();

app.set('json spaces', 0);
app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        if (err) return res.send(500);
        res.json(JSON.parse(data));
    });
});

app.listen(process.argv[2]);