let mongoose=require('mongoose');

let userEnquirySchema = mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        phone:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        }
    }
);

//creating a model
let enquiryModel=mongoose.model("enquiry",userEnquirySchema);
//enquiry is the collection name that is made in the database
module.exports={enquiryModel};