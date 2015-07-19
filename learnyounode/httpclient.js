// var http = require('http');
// var url = process.argv[2];
// http.get(url, function (res) { 
// 	res.setEncoding('UTF-8');
// 	res.on("data", function (data) {
// 		console.log(data);
// 	});
// });
// var http = require('http');
// var count = 0;
// var contents = [];
// var bl = require('bl');
// function printResult() {
// 	for (var i = 0; i < contents.length; i++) {
// 		console.log(contents[i]);
// 	}
// }
// function getUrl(index) {
// 	http.get(process.argv[2 + index], function (res) {
// 		res.pipe(bl(function (err, data) {
// 			if (err) {
// 				return console.error(err);
// 			}
// 			contents[index] = data.toString();
// 			count++;
// 			if (count == 3) {
// 				printResult();
// 			}

// 		}));
// 	});

// }
// for (var i = 0; i < 3; i++) {
// 	getUrl(i);
// }
// var net = require('net');
// var strftime = require('strftime'); //运用strftime模块格式化日期
// var port = process.argv[2];
//  var it_IT = {
//         formats: {
// 			F: '%Y-%m-%d',
//             T: '%H:%M'
//         }
//     };
// var strftimeIT = strftime.localize(it_IT)
// var server = net.createServer(function(socket) {
//      var strTime = strftimeIT('%F %T', new Date());
// 	socket.write(strTime);
// 	socket.end();
//
// });
//server.listen(port);
var http= require('http');
//var fs = require('fs');
var port = process.argv[2];
//var path = process.argv[3];
//var server = http.createServer(function(req,res){
// fs.createReadStream(path).pipe(res);
//});
//server.listen(Number(port));
//var map = require('through2-map')
//var server = http.createServer(function(req,res){
// if(req.method != 'post'){
//  return res.end('send me a POST\n')
// }
// else{
//  req.pipe(map(function (chunk) {
//   return chunk.toString().toUpperCase();
//  })).pipe(res);
// }
//
//});
//server.listen(Number(port));

function parsetime (time) {
 return {
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds()
 }
}

function unixtime (time) {
 return { unixtime : time.getTime() }
}
var myurl = require('url');
var server = http.createServer(function(req,res){
 res.writeHead(200, { 'Content-Type': 'application/json' });
 var parsedUrl = myurl.parse(req.url, true);
 var time = new Date(parsedUrl.query.iso);
 var result;
 if(/^\/api\/parsetime/.test(req.url)){
  result = parsetime(time);
 }
 if(/^\/api\/unixtime/.test(req.url)){
    result = unixtime(time);
 }
 res.end(JSON.stringify(result));
});
server.listen(Number(port));

