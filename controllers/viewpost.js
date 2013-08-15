var template = require('../views/template-data');
var test_data = require('../model/getpost');
url = require('url'),
qs = require('querystring');

exports.get = function (req, res){

    var id = "";
   if(req.method=='GET') {
   // console.log(req);
    var url_parts = url.parse(req.url,true);
    console.log(url_parts.query.id);
     id = url_parts.query.id;
   }
   
   
  if(id != ''){
     test_data.getpost(id,function(returndata){
                
         var allcontent = returndata + '<a href="/fetchdatabase">Return Home</a>';
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(template.build( "view post  | Database driven Application"," view post",allcontent));
        res.end();     


   });
  }else{
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(template.build( "view post  | Database driven Application"," 404 view post","Access wrong post or page " ));
    res.end(); 
     
   }
  
  // console.log(rdata);

}