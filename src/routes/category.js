const express = require('express');
//const Category = require('../models/category.js');
//const slugify = require('slugify');
const { addCategory, getCategories, updateCategories, deleteCategories } = require('../controller/category.js');
const { requireSignin, adminMiddleware } = require('../common-middleware/index.js');
const router = express.Router();
const shortid = require('shortid');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join( path.dirname(__dirname), 'uploads' ))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname )
    }
  })
   
  const upload = multer({ storage }) 


//   with signin
router.post('/category/create', requireSignin, adminMiddleware, upload.single('categoryImage'), addCategory);

//   without sign in
//router.post('/category/create', upload.single('categoryImage'), addCategory);
router.get('/category/getCategory', getCategories);
router.post('/category/update', requireSignin, adminMiddleware, upload.array('categoryImage'), updateCategories)
router.post('/category/delete', requireSignin, adminMiddleware, deleteCategories)

module.exports = router;