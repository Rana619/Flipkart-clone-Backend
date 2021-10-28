const Category = require('../../models/category');
const Product = require('../../models/product');
const Order = require('../../models/order');
const Page = require('../../models/page');
const User = require('../../models/user.js');
const HomePage = require('../../models/homePage');

function createCategories( categories, parentId = null ){

    const categoryList = [];
    let category;
    if( parentId == null ){
       category = categories.filter( cat => cat.parentId == undefined );
    } else {
       category = categories.filter( cat => cat.parentId == parentId );
    }
     
    for( let cate of category ){
        categoryList.push({
            _id : cate._id,
            name : cate.name,
            slug : cate.slug,
            parentId : cate.parentId,
            type : cate.type,
            children : createCategories( categories, cate._id )
        });
    }

    return categoryList;

}


exports.initialData = async (req,res) =>{

    const categories = await Category.find({}).exec();

    const products = await Product.find({})
    .sort({createdAt : -1})
    .select('_id name price quantity slug description productPictures category')
    .populate({ path : 'category', select : '_id name' })
    .populate({ path : 'createdBy', select : 'email firstName lastName' })
    .exec();
    const orders = await Order.find({})
    .sort({createdAt : -1})
    .populate({ 
        path : 'items.productId',
        populate : { 
            path : 'createdBy'
        }         
     })
    .populate("user")
    .exec();

    const pages = await Page.find({})
    .sort({createdAt : -1})
    .populate("createdBy")
    .populate("category") 
    .exec();
 
    const WebsiteUsers = await User.find({ role : 'user' })
    .select('firstName lastName username email contactNumber')
    .exec();

    const adminUsers = await User.find({ role : 'admin' })
    .select('firstName lastName username email contactNumber')
    .exec();

    const homePage = await HomePage.find({})
    .populate({path : 'dealsOfThe.productId', select : 'productPictures'})
    .populate({path : 'dealsOnTvsAndAppliances.productId', select : 'productPictures'})
    .populate({path : 'fashionBudgetBuys.productId', select : 'productPictures'})
    .populate({path : 'furnitureBestSellers.productId', select : 'productPictures'})
    .populate({path : 'topOffersOn.productId', select : 'productPictures'})
    .populate({path : 'bestPriceOnFashion.productId', select : 'productPictures'})
    .populate({path : 'topDealsOnElectronics.productId', select : 'productPictures'})
    .populate({path : 'easeYourDailyChores.productId', select : 'productPictures'})
    .populate({path : 'homeMakeover.productId', select : 'productPictures'})
    .populate({path : 'newLaunches.productId', select : 'productPictures'})
    .exec();

    res.status(200).json({
        categories : createCategories(categories),
        products,
        orders,
        pages,
        WebsiteUsers,
        adminUsers,
        homePage
    })
}
