// Create web server

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// Read file
fs.readFile('demofile1.html', function(err, data) {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("Content: " + data);
  }
});

// Create file
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// Update file
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

// Delete file
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

// Rename file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

// Create folder
fs.mkdir('mynewdir', function (err) {
  if (err) throw err;
  console.log('Folder created!');
});

// Delete folder
fs.rmdir('mynewdir', function (err) {
  if (err) throw err;
  console.log('Folder deleted!');
});

// Read folder
fs.readdir('mynewdir', function (err, files) {
  if (err) throw err;
  console.log('Files in folder: ' + files);
});

// Write to file
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// Update file
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err)