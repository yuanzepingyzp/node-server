var http = require("http");
var url = require("url");
function start(route) {
	var callback = function(request, response) {
		var pathname = url.parse(request.url).pathname;
	    route(pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(callback).listen(8888);
    console.log("Server runing on http://localhost:8888/");
}

exports.start = start;




