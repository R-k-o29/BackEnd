let express = require('express');
let mongoose = require('mongoose');
let enquiryModel = require('./models/enquiry.model').enquiryModel;
require('dotenv').config()
let app=express();
//connecting to database using mongoose
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to database");
    app.listen(process.env.PORT);
})

app.use(express.json())


app.post("/api/enquiry-insert",(req,res)=>{
    let {sName,sEmail,sPhone,sMessage}=req.body;

    // console.log(sName,sEmail,sPhone,sMessage);
    let newEnquiry= enquiryModel({
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sMessage
    })
    newEnquiry.save().then(()=>{
        res.send({
            status:1,
            msg:"Enquiry saved succesfully"
        })
    }).catch((err)=>{
        res.send({
            status:0,
            msg:"Error while saving enquiry",
            Error:err.errmsg
        })
    })
})

app.get("/api/enquiry-list",async (req,res)=>{
    let enquiryList = await enquiryModel.find();
    res.send(enquiryList)
})

app.delete("/api/enquiry-delete/:id",async (req,res)=>{
    let enquiryId = req.params.id;
    // console.log(enquiryId);

    let deletedEnquiry = await enquiryModel.deleteOne({_id:enquiryId})
    
    res.send({
        status:1,
        msg:"Enquiry deleted",
        Res:deletedEnquiry
    });
})

app.put("/api/enquiry-update/:id",async (req,res)=>{
    let enquiryId = req.params.id;
    let {sName,sEmail,sPhone,sMessage}=req.body;
    let updateObj = {
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sMessage
    }

    let updateRes = await enquiryModel.updateOne({_id:enquiryId},updateObj);
    res.send({
        status:1,
        msg:"Enquiry updated",
        Res:updateRes
    });

})