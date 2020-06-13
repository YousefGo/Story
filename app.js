var  express = require("express");
var app = express();
var  bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const port =3000||process.env.PORT ;

app.get("/",(req,res)=>
{
res.sendFile(__dirname+"/index.html");
}
)
app.post("/",function(req,res)
{
var one =Number(req.body.num1);
var two = Number(req.body.num2);
var resl = one +two; 
res.send("the result is "+resl );

}
)
app.listen(port,function(req,res)

{
    console.log("work in port 3000");
})