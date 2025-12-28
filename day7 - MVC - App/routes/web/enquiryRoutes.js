let express = require('express');
const { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate } = require('../../controllers/userEnquiryController');

let enquiryRouter = express.Router();

enquiryRouter.post("/enquiry-insert",enquiryInsert)
enquiryRouter.get("/enquiry-list",enquiryList)
enquiryRouter.delete("/enquiry-delete/:id",enquiryDelete)
enquiryRouter.put("/enquiry-update/:id",enquiryUpdate)

module.exports={enquiryRouter};