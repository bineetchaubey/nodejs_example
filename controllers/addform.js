var template = require('../views/template-data');
var test_data = require('../model/addpost');
url = require('url'),
qs = require('querystring');

exports.get = function (req, res){

   if(req.method=='GET') {
   // console.log(req);
   var url_parts = url.parse(req.url,true);
	console.log(url_parts.query.title);
   }
   if(req.method=='POST') {
       var body = '';
        req.on('data', function (data) {
            body += data;
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                request.connection.destroy();
            }
        });
        req.on('end', function () {
            var POST = qs.parse(body);
            // use POST
           console.log(POST);
         
         test_data.addpost(POST,function(returndata){

                     console.log("save data in table");
               });
        });


   }
  
  // console.log(rdata);

  var form = '<form action="http://127.0.0.1:8899/addform" method="post">'+
            '<label>Title</label> <input name="title" type="text" /><br/>'+
	  '<label>Body </label> <textarea name="body"></textarea><br/>'+
	  '<label>Author Id</label><input name="user_id" type="text" /><br/>'+
           '<input name="submit" value="add Posts" type="submit" />'+
	  '</form>'+
          '<a href="/fetchdatabase">all post</a>';
       

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(template.build( "add post | Database driven Application","Add New Post", form ));
  res.end();

}