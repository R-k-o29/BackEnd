require('dotenv').config();
let myToken = process.env.myToken;

let middleware=(req,res,next)=>{
    
    console.log(req.query.token);
    
    if(req.query.token=="" || req.query.token==undefined){
        return res.send(
            {
                "status":0,
                "message":"Fill the token"
            }
        );
    }
    if(req.query.token!=myToken){
        return res.send(
            {
                "status":0,
                "message":"Unauthorized Access"
            }
        );
    }
    next();
}

module.exports={middleware};