var template = require('../views/template-data');
var test_data = require('../model/getjson');

exports.get = function(req, res) {
      
  var abc = test_data.allposts;
  // console.log(abc);
  var Strtem = '', i = 0;
  for (i=0; i<3;){
     Strtem = Strtem + "<li> post id id " + abc[i].id+ "and title is " + abc[i].title + "</li>";
     i = i+1;
    }
  Strtem = "<ul>"+ Strtem +"<ul>"

  console.log(Strtem);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(template.build( "My first custom application","this is test for find post with json data","this is  my first application with static post data <br/>"+ Strtem ));
  res.end();
}
