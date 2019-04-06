//Include HTTP core module
var http = require("http");
var moment = require("moment");

//create server that listens for connections on a specified port.
http.createServer(function (req, res){
  console.log(moment().format("MMM Do YYYY"));
  res.write(moment('09-11-1985').format('dddd [the] Do [of] MMMM [in the year] YYYY'));
  res.write(moment("19930127", "YYYYMMDD").fromNow());
  res.write("Hey it's ya boi, First Node-App.");
  res.end();
}).listen(8000);
