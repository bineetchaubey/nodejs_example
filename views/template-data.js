exports.build = function(title, pagetitle, content) {
 return ['<!doctype html>',
 '<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>{title}</title>',
 '<link rel="stylesheet" href="/assets/style.css" /><link rel="stylesheet" href="/assets/bootstrap.css" />\n</head>',
 '<body><div id="wrapper"><div class="navbar">',
  '<div class="navbar-inner">',
   '<a class="brand" href="#">Node Js Apps</a>',
   '<ul class="nav">',
    '<li class="active"><a href="/fetchdatabase">Home</a></li>',
    '<li><a href="/addform">add post</a></li>',
    '</ul>',
    '</div>',
    '</div><h1>{pagetitle}</h1>',
 '<div id="content">{content}</div>\n</div></body>\n</html>'
 ].join('\n')
 .replace(/{title}/g, title)
 .replace(/{pagetitle}/g, pagetitle)
 .replace(/{content}/g, content);
}