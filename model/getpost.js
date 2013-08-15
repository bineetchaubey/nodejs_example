exports.getpost = function(id,callback){

var http = require('http')
  , mysql = require('mysql');
 
var client = mysql.createConnection({
        host: '127.0.0.1',
	user: 'root',
	password: ''
});

client.connect();
client.query("use cakephp2");
var select = "SELECT * FROM posts WHERE id="+id ;
console.log(select)

client.query(select, function(err, results, fields) {
				if (err) throw err;

				
				//DBDATA = output; 
				// console.log(output);
				// return output;

                                var output = "";
                                 output = output + "<h3>"+ results[0].title+"</h3>";
                                 output = output + "<span>Created On "+ results[0].created+"</span>";
 				 output = output + "<p>"+ results[0].body+"</p>";
				 callback(output) ;//return output;
			}
		); 
 
}
