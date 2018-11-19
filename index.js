var static = require('node-static');
var file = new static.Server();
console.log("Landing is UP");
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(3000);