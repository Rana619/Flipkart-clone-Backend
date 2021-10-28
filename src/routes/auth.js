const express = require("express");
const router = express.Router();
const { signup, signin } = require('../controller/auth.js');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../validators/auth.js");

router.post('/signin', validateSigninRequest, isRequestValidated, signin)
router.post('/signup', validateSignupRequest, isRequestValidated, signup)

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user : "profile" })
// });


module.exports = router;
