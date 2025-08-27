var bodyParser = require("body-parser");
var express = require("express");

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var router = express.Router();

router.get("/", function(req,res){
  res.json({message:'This is express router message'})
})

router.get("/student", function(req, res){
  res.json({students:[
    {id:1,name:"santanu"},
    {id:2,name:"sidhanta"},
    {id:3,name:"surekha"}
  ]})
})
router.post("/postdata", function(req, res){
    var body = req.body
    console.log("posted data", body)
    res.json({message:body})
})

app.use("/api",router)

var PORT = 2000;

app.listen(PORT, function(){
    console.log(`Server listening at ${PORT}`)
})