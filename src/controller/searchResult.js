const Product = require('../models/product.js');

exports.getProductBySearch = (req, res) => {
    const searchText = req.body.searchInput.toUpperCase();
    Product.find({})
    .sort({createdAt : -1})
        .exec((error, productsk) => {
            if (error) return res.status(400).json({ error });
            if(productsk){
                let products = [];
                products = productsk.filter((str) => {
                    const productName = str.slug.toUpperCase();
                    return productName.includes(searchText);
                });
    
                res.status(200).json({ products });
            }            
        })
}