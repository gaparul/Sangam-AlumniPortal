const Posts=require("../models/posts");
const logger = require('../logger');

exports.newPost=async(req,res)=>{
    try {

        // const data={
        //     userId:req.user,
        //     ...req.body
        // }
        // const newPost=new Posts(data);
    } catch (err) {
        logger.error(err);
        return res.status(500).json({ errors: [{ message: "server error" }] });
    }
}