const express = require("express");
require("dotenv").config();
const { middleware } = require("./validateToken");
const app = express();

// let myPass = "abcd";

// app.use((req,res,next)=>{
//     if(req.query.pass =="" || req.query.pass==undefined){
//         return res.send(
//             {
//                 "status":0,
//                 "msg":"Enter the password"
//             }
//         )
//     }
//     if(req.query.pass!=myPass){
//         return res.send(
//             {
//                 "status":0,
//                 "msg":"Enter correct password"
//             }
//         )
//     }
//     next();
// })


app.get("/",(req,res)=>{
    res.send("This is the Home page")
})

app.get("/news",middleware,(req,res)=>{
    res.send(
        {
            "status":1,
            "news":"News data 1"
        }
    )
})
app.listen(3001);