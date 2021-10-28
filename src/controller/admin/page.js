const Page = require('../../models/page');

exports.createPage = (req, res) =>{

   const { bannersCat, productsCat } = req.body;
   const { bannersCatID, productsCatID } = req.body;
   const { banners, products } = req.files;
   
   if(banners && banners.length > 0){
       req.body.banners = banners.map((banner, index) =>({
           img: banner.filename,
           navigateTo : `/${bannersCat[index]}?cid=${bannersCatID[index]}&type=product`
       }))
   }
   if(products && products.length > 0){
       req.body.products = products.map((product, index) =>({ 
           img: product.filename,
           navigateTo : `/${productsCat[index]}?cid=${productsCatID[index]}&type=product`
       }))
   }
   
    req.body.createdBy = req.user._id;

    Page.findOne({ category : req.body.category })
    .exec((error, page) => {
        if(error) return res.status(400).json({ error });
        if(page){
            Page.findOneAndUpdate({ category : req.body.category }, req.body)
            .exec((error, updatedPage) => {
                if(error) return res.status(400).json({ error });
                if(updatedPage){
                    return res.status(201).json({ page : updatedPage });
                }
            })
        } else {
            const page = new Page(req.body);
            page.save((error, page) => {
                if(error) return res.status(400).json({ error });
                if(page){
                    return res.status(201).json({ page });
                }
            });

        }
    })

}

exports.getPage = (req, res) => {
    const { category, type } = req.params;
    if(type === "page"){
        Page.findOne({ category : category })
        .sort({createdAt : -1})
        .exec((error, page) => {
            if(error) return res.status(400).json({ error });
            if(page){
                return res.status(200).json({ page })
            } 
        })
    }
}


exports.getPages = async (req,res) =>{
     const pages = await Page.find({})
     .sort({createdAt : -1})
    .populate("createdBy")
    .populate("category")
    .exec();

        res.status(200).json({ pages });
}

