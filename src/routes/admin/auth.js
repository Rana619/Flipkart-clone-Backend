const express = require("express");
const { requireSignin } = require("../../common-middleware/index.js");
const router = express.Router();
const { signup, signin, signout } = require('../../controller/admin/auth.js');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../../validators/auth.js");

router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin)
router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup)
router.post('/admin/signout', requireSignin, signout)


 
module.exports = router;
