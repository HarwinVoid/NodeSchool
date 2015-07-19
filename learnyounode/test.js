var FileFilter = require('./program');
var argvs = process.argv;
FileFilter(argvs[2],argvs[3],function(err,data) {
	if(err){
	console.log(err);
	return;
	}
	data.forEach(function(file) {
		console.log(file);
	});
});
