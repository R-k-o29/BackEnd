let express = require('express');
let mongoose = require('mongoose');

const { enquiryRouter } = require('./routes/web/enquiryRoutes');
require('dotenv').config()
let app=express();
//connecting to database using mongoose
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to database");
    app.listen(process.env.PORT);
})
app.use(express.json())

app.use("/web/api/enquiry",enquiryRouter);

//http://localhost:8001/web/api/enquiry
