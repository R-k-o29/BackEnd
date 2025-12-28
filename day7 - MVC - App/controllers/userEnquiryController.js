let enquiryModel = require('../models/web/userEnquiry.model').enquiryModel;

let enquiryInsert = (req,res)=>{
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
}

let enquiryList = async (req,res)=>{
    let enquiryList = await enquiryModel.find();
    res.send(enquiryList)
}

let enquiryDelete = async (req,res)=>{
    let enquiryId = req.params.id;
    // console.log(enquiryId);

    let deletedEnquiry = await enquiryModel.deleteOne({_id:enquiryId})
    
    res.send({
        status:1,
        msg:"Enquiry deleted",
        Res:deletedEnquiry
    });
}

let enquiryUpdate = async (req,res)=>{
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
}

module.exports={enquiryInsert,enquiryList,enquiryDelete,enquiryUpdate}