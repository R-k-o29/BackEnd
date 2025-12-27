let express = require('express');
const { dbConnection } = require('./dbConnection');
const { ObjectId } = require('mongodb');
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

app.delete("/student-delete/:id",async (req,res)=>{
    let {id} = req.params; //{gets the id of the data}
    let myDB=await dbConnection();
    let studentCollection=myDB.collection("students");

    let delRes = await studentCollection.deleteOne({_id:new ObjectId(id)});

    let resObj={
        status:1,
        msg:"Data deleted",
        delRes
    }
    res.send(resObj);
})

app.put("/student-update/:id",async (req,res)=>{
    let myDB=await dbConnection();
    let studentCollection = myDB.collection("students")

    let {id}=req.params;
    let {sName,sEmail}=req.body;
    let obj={sName,sEmail};

    let updateRes = await studentCollection.updateOne({_id:new ObjectId(id)},{$set:{sName,sEmail}}) //if both key and variable name is same then just pass it once

    let resObj={
        status:1,
        msg:"Data updated succesfully",
        updateRes
    }
    res.send(resObj);
});

app.listen("3001");

