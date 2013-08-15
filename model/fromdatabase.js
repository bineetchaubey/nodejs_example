/**
var DBDATA="dsfdsfsd";
var alldata = function(){
**/ 
exports.alldatas = function(gname,callback){

var http = require('http')
  , mysql = require('mysql');
 
var client = mysql.createConnection({
        host: '127.0.0.1',
	user: 'root',
	password: ''
});

client.connect();
client.query("use cakephp2");

client.query("SELECT id, title,created from posts", 
			function(err, results, fields) {
				if (err) throw err;

				var output = '<ul><table class="table table-striped" ><tr>';
				for (var index in fields) {
					output += '<td>' + fields[index].name + '</td>';
				}
				output += '</tr>';
				for (var index in results) {
					output += '<tr><td>' + results[index].id + '</td>';
					output += '<td><a href="/viewpost?id='+results[index].id+'">'+ results[index].title + '</a></td>';
					output += '<td>' + results[index].created + '</td></tr>';
				}
				output += '</ul>';
				//DBDATA = output; 
				// console.log(output);
				// return output;
				 callback(output ) ;//return output;
			}
		); 
 
}
