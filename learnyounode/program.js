//console.log('HELLO WORLD');
var fs = require('fs');
// var argvs = process.argv;
/**
 * 读取命令行参数
 */
// var result = null;
// for(var i=2;i<argvs.length;i++){
// 	result +=Number(argvs[i]);
// }
// console.log(result);
/**
 * 异步计算文件内有多少个换行
 */
// var path = process.argv[2];
// var buffer = fs.readFileSync(path);
// var contents = buffer.toString();
// var newLines = contents.split('\n');
// console.log(newLines.length-1);
/**
 * 得到指定路径下的指定后缀名的所有文件
 */
// fs.readdir(argvs[2],function(err,list) {
// 		var  files = list.filter(function(filename){		
// 		//return filename.slice(filename.length-argvs[3].length,filename.length) === argvs[3];
// 		return filename.split('.')[1] == argvs[3];
// 	});
// 	for(var i=0;i<files.length;i++){
// 		console.log(files[i]);
// 	}
// });
// function FileFilter(params) {
	
// fs.readFile(argvs[2],function(err,data) {
// 	if(err){
// 	throw err;return ;
// 	}
// 	var newLines = data.toString().split('\n').length -1;
// 	console.log(newLines);
// });	
// }
// exports.fileFilter = function(path, exten, callback) {
// 	fs.readdir(path, function (err, list) {
// 		if(err){
// 			callback(err);return;
// 		}
// 		var files = list.filter(function (filename) {		
// 			//return filename.slice(filename.length-argvs[3].length,filename.length) === argvs[3];
// 			return filename.split('.')[1] == exten;
// 		});
// 		for (var i = 0; i < files.length; i++) {
// 			console.log(files[i]);
// 		}
// 	});
// };
module.exports = function(path, exten, callback) {
	fs.readdir(path, function (err, list) {
		if(err){
			return callback(err);
		}
		var files = list.filter(function (filename) {		
			//return filename.slice(filename.length-argvs[3].length,filename.length) === argvs[3];
			return filename.split('.')[1] == exten;
		});
		callback('',files);
		
	});
};