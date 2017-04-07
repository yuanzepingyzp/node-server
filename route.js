var addnewblog = require('./addnewblog');

function route(pathname) {
	console.log(pathname);
	var config = {
	    '/addnewblog': function(){
            addnewblog.addnewblog();
	    },
	    '/deleteblog': function(){
            console.log("deleteblog");
	    },
	    '/favicon.ico':function(){
            console.log("not found");
	    }
	}
	config[pathname]();
}

exports.route = route;
