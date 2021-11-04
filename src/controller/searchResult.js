const Product = require('../models/product.js');

exports.getProductBySearch = async (req, res) => {
    const searchText = await req.body.searchInput.toUpperCase();
    Product.find({})
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