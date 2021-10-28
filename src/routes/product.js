const express = require('express');
const multer = require('multer');
//const { addCategory, getCategories } = require('../controller/category.js');
const { requireSignin, adminMiddleware } = require('../common-middleware/index.js');
const { createProduct, getProductsBySlug, getProductDetailsById, deleteProductById, getProducts } = require('../controller/product.js');
const router = express.Router();
const shortid = require('shortid');
const path = require('path');
const { getProductBySearch } = require('../controller/searchResult.js');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join( path.dirname(__dirname), 'uploads' ))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname )
    }
  })
  
const upload = multer({ storage })

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProduct);
router.get('/products/:slug', getProductsBySlug);
router.get('/product/:productId', getProductDetailsById)
router.delete("/product/deleteProductById", requireSignin, adminMiddleware, deleteProductById);
router.post("/product/getProducts", requireSignin, adminMiddleware, getProducts);

//search Result
router.post('/searchReasult', getProductBySearch)

module.exports = router; 