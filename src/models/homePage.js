const mongoose = require('mongoose');
const homePageSchema = new mongoose.Schema({
    banners : [ 
        {
            img: { type : String },
            navigateTo : { type : String },
        }
    ],
    dealsOfThe : [ 
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              },
            navigateTo : { type : String },
            header : { type : String },
            offer : { type : String },
            subHeader : { type : String }
        }
    ],
    dealsOnTvsAndAppliances : [ 
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              },
            navigateTo : { type : String },
            header : { type : String },
            offer : { type : String },
            subHeader : { type : String }
        }
    ],
    fashionBudgetBuys : [ 
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              },
            navigateTo : { type : String },
            header : { type : String },
            offer : { type : String },
            subHeader : { type : String }
        }
    ],
    furnitureBestSellers : [ 
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              },
            navigateTo : { type : String },
            header : { type : String },
            offer : { type : String },
            subHeader : { type : String }
        }
    ],
    topOffersOn : [ 
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              },
            navigateTo : { type : String },
            header : { type : String },
            offer : { type : String },
            subHeader : { type : String }
        }
    ],
    bestPriceOnFashion : [ 
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              },
            navigateTo : { type : String },
            header : { type : String },
            offer : { type : String },
            subHeader : { type : String }
        }
    ],
    topDealsOnElectronics : [ 
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              },
            navigateTo : { type : String },
            header : { type : String },
            offer : { type : String },
            subHeader : { type : String }
        }
    ],
    easeYourDailyChores : [ 
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              },
            navigateTo : { type : String },
            header : { type : String },
            offer : { type : String },
            subHeader : { type : String }
        }
    ],
    homeMakeover : [ 
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              },
            navigateTo : { type : String },
            header : { type : String },
            offer : { type : String },
            subHeader : { type : String }
        }
    ],
    newLaunches : [ 
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
              },
            navigateTo : { type : String },
            header : { type : String },
            offer : { type : String },
            subHeader : { type : String }
        }
    ]
}, {timestamps : true})

module.exports = mongoose.model('HomePage', homePageSchema);