let express= require("express");

let app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send({status:1,msg:"Home Page API"})
})

app.get("/news",(req,res)=>{
    res.send({status:1,msg:"News Page API"})
})

app.get("/news/:id",(req,res)=>{
    res.send({status:1,msg:"News Page API",id:req.params.id})
})

app.post("/login",(req,res)=>{
    console.log(req.body);
    res.send(
        {
            status:1,
            msg:"Login API",
            bodydata:req.body,
            querydata:req.query
        }
    )
    
});

app.listen("8000")