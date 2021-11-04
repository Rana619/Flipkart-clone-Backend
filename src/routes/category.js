const express = require('express');
const { addCategory, getCategories, updateCategories, deleteCategories } = require('../controller/category.js');
const { requireSignin, adminMiddleware } = require('../common-middleware/index.js');
const router = express.Router();
const shortid = require('shortid');
const path = require('path');
const multer = require('multer');
   
// with file upload in database
var storage = multer.memoryStorage()
var upload = multer({ storage: storage });


//   with signin
router.post('/category/create', requireSignin, adminMiddleware, upload.single('categoryImage'), addCategory);

router.get('/category/getCategory', getCategories);
router.post('/category/update', requireSignin, adminMiddleware, upload.array('categoryImage'), updateCategories)
router.post('/category/delete', requireSignin, adminMiddleware, deleteCategories)

module.exports = router;