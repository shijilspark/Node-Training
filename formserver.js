const http = require('http');
const formidable = require ('formidable');
const fs = require('fs');

http.createServer(function(req,res){
  // res.writeHead(200,{'Content-type':'text/plain'});
  // res.end('Hello World\n');
  if (req.url == '/fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
      console.log(files.filetoupload.path);
      var oldpath = files.filetoupload.path;
      var newpath = '/home/sivain/Node-udemy/' + files.filetoupload.name;
      console.log(newpath);
      fs.copyFile(oldpath, newpath, function(err){
        if (err) throw err;
        res.write('File uploaded');
        res.end();
      });

    });



  } else {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
console.log("Starting server at http://localhost:8080");
