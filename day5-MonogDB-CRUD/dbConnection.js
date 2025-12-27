const {MongoClient} = require('mongodb');

let dbConnectionUrl = 'mongodb://127.0.0.1:27017/' 
//IP 127.0.0.1 instead of localhost
const client=new MongoClient(dbConnectionUrl)

let dbConnection=async ()=>{
    await client.connect();
    console.log("Connected to server successfully");
    let db=client.db("mongoDBProject_Database");
    return db;
}

module.exports={dbConnection};