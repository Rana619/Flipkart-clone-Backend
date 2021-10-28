const User = require('../../models/user.js')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

exports.signup = (req,res)=>{

    User.findOne({ email : req.body.email })
    .exec(async (error, user) =>{
        if(user) return res.status(400).json({
            message : 'Admin already registered'
        });
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const user_name = email.substr(0, email.indexOf('@'));
        const hash_password = await bcrypt.hash(password, 10);
        const _user = new User({
            firstName,
            lastName,
            email,
            hash_password,
            username : user_name,
            role : 'admin'
        });
        _user.save((error,data)=>{
            if(error){
                return res.status(400).json({
                    message : "something went wrong"
                });
            }
            if(data){
                return res.status(201).json({
                   message : "You are Successfully Registered"
             })
            }
        });
    })

}


exports.signin = (req,res) =>{
    User.findOne({email : req.body.email})
    .exec(async (error, user) =>{
        if(error) return res.status(400).json({ error })
        if(user){
            const isPassword = await user.authenticate(req.body.password);
            if( isPassword && user.role === 'admin'){
                  const token = jwt.sign({ _id : user._id, role : user.role }, process.env.JWT_SECRET, {expiresIn : '1h'})
                  const { _id, firstName, lastName, email, role, fullName } = user
                  res.cookie('token', token, { expiresIn : '1h' });
                  res.status(200).json({
                      token,
                      user
                    //   _id,
                    //   firstName,
                    //   lastName,
                    //   email,
                    //   role,
                    //   fullName
                  });               
                } else {
                    return res.status(400).json({
                        message : "something went wrong"
                    })
                }

        } else {
            return res.status(400).json({
                message : "Admin not registred"
            })
        }
    })

}

exports.signout = (req,res)=>{
    res.clearCookie('token');
    res.status(200).json({
        message : 'Signout Successfully!!'
    })
}