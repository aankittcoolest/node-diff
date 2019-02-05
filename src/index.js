var http = require("http");
var fs = require("fs");
//var awk = require("awk");
//var shell = require("shelljs");

//create a server object:
http
  .createServer(function(req, res) {
    // let contents = fs.readFileSync("./src/data.txt");
    // let awkScript = fs.readFileSync("./src/test.awk");

    //var results = awk(awkScript, contents);
    //var data = results.stdout;
    //console.log(results);
    //console.log("abc");
    // fs.writeFileSync("./src/data2.txt", results.stdout);
    //var data = shell.sort("./src/data.txt");
    //console.log(data.sort());

    res.write("Hello test!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
