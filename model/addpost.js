exports.addpost = function(gname,callback){

var http = require('http')
  , mysql = require('mysql');
 
var client = mysql.createConnection({
        host: '127.0.0.1',
	user: 'root',
	password: ''
});

client.connect();
client.query("use cakephp2");

var insert = "insert into posts (title,body,user_id,created) values('"+gname.title+"','"+gname.body+"','"+gname.user_id+"',NOW())" ;
console.log(insert)

client.query(insert, function(err, results, fields) {
				if (err) throw err;

				
				//DBDATA = output; 
				// console.log(output);
				// return output;
				 callback(true) ;//return output;
			}
		); 
 
}
