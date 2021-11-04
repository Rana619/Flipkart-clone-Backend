const jwt = require("jsonwebtoken");
const shortid = require('shortid');
const path = require('path');
const multer = require('multer');

var storage = multer.memoryStorage()
exports.upload = multer({ storage: storage });



exports.requireSignin = (req,res,next) =>{

    if( req.headers.authorization ){
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET );
    req.user = user;
    } else {
        return res.status(500).json({ message : "Authorization require" });
    }
    next();
}

exports.userMiddleware = (req,res,next) =>{
    if(req.user.role !== 'user'){
        return res.status(400).json({ message : "user Access denied" });
    }
    next();
}

exports.adminMiddleware = (req,res, next) =>{
    if(req.user.role !== 'admin'){
        return res.status(500).json({ message : "Admin Access denied" });
    }
    next();
}


