const express = require("express");
const { upload, requireSignin, adminMiddleware } = require("../../common-middleware");
const { createHomePage, getHomePage } = require("../../controller/admin/homePage");
const router = express.Router();

router.post('/homePage/create', requireSignin, adminMiddleware, upload.fields([
    { name : 'bannerPics' },
]), createHomePage );
router.get('/getHomePage', getHomePage);

 
module.exports = router;

 