var http = require("http");
// http.createServer(function(req,res){
//     res.writeHead(200, {'content-type':'text/html'})
//     res.end('Hello World')
// }).listen(3000)
var server = http.createServer(function(req,res){
if(req.url == "/"){
    res.end("This is default URL")

}
else if(req.url=="/employee"){
    res.end("This is employee URL")
}
})
server.listen(5000, function(){
    console.log(`Server listening at port`,5000)
})