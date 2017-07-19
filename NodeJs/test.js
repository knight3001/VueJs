var http = require('http');
var dt = require('./myDatetime');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('../index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("The date and time are currently: " + dt.myDateTime() + "<br />");
        res.write(data);
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
        res.end(txt);
    });
}).listen(8080);