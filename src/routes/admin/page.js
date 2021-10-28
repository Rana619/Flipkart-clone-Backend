const express = require("express");
const { upload, requireSignin, adminMiddleware } = require("../../common-middleware");
const { createPage, getPage, getPages } = require("../../controller/admin/page");
const router = express.Router();

router.post('/page/create', requireSignin, adminMiddleware, upload.fields([
    { name : 'banners' },
    { name : 'products' }
]), createPage );

router.get(`/page/:category/:type`, getPage);
router.get(`/pages`, requireSignin, adminMiddleware, getPages);

 
module.exports = router;

