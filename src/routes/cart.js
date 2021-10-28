const express = require('express');
const { addItemToCart, getCartItems, removeCartItems } = require('../controller/cart.js');
const { requireSignin, userMiddleware } = require('../common-middleware/index.js');
const router = express.Router();


router.post('/user/cart/addtocart', requireSignin, userMiddleware , addItemToCart);
router.post('/user/getCartItems', requireSignin, userMiddleware, getCartItems);
router.post("/user/cart/removeItem", requireSignin, userMiddleware, removeCartItems);

module.exports = router; 