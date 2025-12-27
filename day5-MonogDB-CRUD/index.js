let express = require('express');
const { dbConnection } = require('./dbConnection');
let app=express();

app.use(express.json())// middleware cause express is going to use json data 

app.get("/student-read",async (req,res)=>{
    let myDB=await dbConnection();
    let studentCollection=myDB.collection("students");

    let data=await studentCollection.find().toArray();

    let resObj={
        status:1,
        msg:"Student List",
        data
    }

    res.send(resObj);
})

app.post("/student-insert",async (req,res)=>{
    let myDB=await dbConnection();
    let studentCollection = myDB.collection("students")
    //by creating object
    // let obj={
    //     sName:req.body.sName,
    //     sEmail:req.body.sEmail
    // }

    //by destructuring
    let {sName,sEmail}=req.body;
    let obj={sName,sEmail};

    console.log(obj);

    //Inserting the data collected
    let insertRes= await studentCollection.insertOne(obj);

    let resObj={
        status:1,
        msg:"Data inserted",
        insertRes
    }
    
    res.send(resObj);
})

app.listen("3001");

