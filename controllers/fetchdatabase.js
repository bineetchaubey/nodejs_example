var template = require('../views/template-data');
var test_data = require('../model/fromdatabase');

exports.get = function (req, res){

  test_data.alldatas("game",function(rdata){;

  //console.log(rdata);
  var allconatent = rdata + '<br/><br/><a href="/addform">add new post</a>';

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(template.build( "Database driven Application","All Post",allconatent ));
  res.end();
});
}