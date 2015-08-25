var nodeStatic = require('node-static');
var exec = require('child_process').exec;
var fileServer = new nodeStatic.Server('.');

exec('watchify index.js -o bundle.js -t babelify');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);
