const HomePage = require('../../models/homePage');

exports.createHomePage = (req, res) => {
    const { bannerPics } = req.files;
    const {
        bannerIds,
        bannerSlugs,

        productIddods,
        posterToIddods,
        posterToSlugdods,
        headerdods,
        offerdods,
        subheaderdods,

        productIddtas,
        posterToIddtas,
        posterToSlugdtas,
        headerdtas,
        offerdtas,
        subheaderdtas,

        productIdfbbs,
        posterToIdfbbs,
        posterToSlugfbbs,
        headerfbbs,
        offerfbbs,
        subheaderfbbs,

        productIdtoos,
        posterToIdtoos,
        posterToSlugtoos,
        headertoos,
        offertoos,
        subheadertoos,

        productIdfbss,
        posterToIdfbss,
        posterToSlugfbss,
        headerfbss,
        offerfbss,
        subheaderfbss,

        productIdbpfs,
        posterToIdbpfs,
        posterToSlugbpfs,
        headerbpfs,
        offerbpfs,
        subheaderbpfs,


        productIddoes,
        posterToIddoes,
        posterToSlugdoes,
        headerdoes,
        offerdoes,
        subheaderdoes,

        productIdeydcs,
        posterToIdeydcs,
        posterToSlugeydcs,
        headereydcs,
        offereydcs,
        subheadereydcs,

        productIdhms,
        posterToIdhms,
        posterToSlughms,
        headerhms,
        offerhms,
        subheaderhms,

        productIdnls,
        posterToIdnls,
        posterToSlugnls,
        headernls,
        offernls,
        subheadernls,
    } = req.body;
 


    if (bannerPics && bannerPics.length > 0){
        req.body.banners = bannerPics.map((bannerPic, index) => ({
            img: {
                data: bannerPic.buffer.toString('base64'),
                contentType : "homePageBanner/png"
            },
            navigateTo: `/${bannerSlugs[index]}?cid=${bannerIds[index]}&type=product`,
        }))
    }


    if (productIddods && productIddods.length > 0) {
        req.body.dealsOfThe = productIddods.map((productIddod, index) => ({
            productId: productIddod,
            navigateTo: `/${posterToSlugdods[index]}?cid=${posterToIddods[index]}&type=product`,
            header: headerdods[index],
            offer: offerdods[index],
            subHeader: subheaderdods[index]
        }))
    }

    if (productIddtas && productIddtas.length > 0) {
        req.body.dealsOnTvsAndAppliances = productIddtas.map((productIddta, index) => ({
            productId: productIddta ,
            navigateTo: `/${posterToSlugdtas[index]}?cid=${posterToIddtas[index]}&type=product`,
            header: headerdtas[index],
            offer: offerdtas[index],
            subHeader: subheaderdtas[index]
        }))
    }

    if (productIdfbbs && productIdfbbs.length > 0) {
        req.body.fashionBudgetBuys = productIdfbbs.map((productIdfbb, index) => ({
            productId: productIdfbb ,
            navigateTo: `/${posterToSlugfbbs[index]}?cid=${posterToIdfbbs[index]}&type=product`,
            header: headerfbbs[index],
            offer: offerfbbs[index],
            subHeader: subheaderfbbs[index]
        }))
    }

    if (productIdfbss && productIdfbss.length > 0) {
        req.body.furnitureBestSellers = productIdfbss.map((productIdfbs, index) => ({
            productId: productIdfbs ,
            navigateTo: `/${posterToSlugfbss[index]}?cid=${posterToIdfbss[index]}&type=product`,
            header: headerfbss[index],
            offer: offerfbss[index],
            subHeader: subheaderfbss[index]
        }))
    }

    if (productIdtoos && productIdtoos.length > 0) {
        req.body.topOffersOn = productIdtoos.map((productIdtoo, index) => ({
            productId: productIdtoo,
            navigateTo: `/${posterToSlugtoos[index]}?cid=${posterToIdtoos[index]}&type=product`,
            header: headertoos[index],
            offer: offertoos[index],
            subHeader: subheadertoos[index]
        }))
    }

    if (productIdbpfs && productIdbpfs.length > 0) {
        req.body.bestPriceOnFashion = productIdbpfs.map((productIdbpf, index) => ({
            productId: productIdbpf,
            navigateTo: `/${posterToSlugbpfs[index]}?cid=${posterToIdbpfs[index]}&type=product`,
            header: headerbpfs[index],
            offer: offerbpfs[index],
            subHeader: subheaderbpfs[index]
        }))
    }

    if (productIddoes && productIddoes.length > 0) {
        req.body.topDealsOnElectronics = productIddoes.map((productIddoe, index) => ({
            productId: productIddoe,
            navigateTo: `/${posterToSlugdoes[index]}?cid=${posterToIddoes[index]}&type=product`,
            header: headerdoes[index],
            offer: offerdoes[index],
            subHeader: subheaderdoes[index]
        }))
    }

    if (productIdeydcs && productIdeydcs.length > 0) {
        req.body.easeYourDailyChores = productIdeydcs.map((productIdeydc, index) => ({
            productId: productIdeydc,
            navigateTo: `/${posterToSlugeydcs[index]}?cid=${posterToIdeydcs[index]}&type=product`,
            header: headereydcs[index],
            offer: offereydcs[index],
            subHeader: subheadereydcs[index]
        }))
    }

    if (productIdhms && productIdhms.length > 0) {
        req.body.homeMakeover = productIdhms.map((productIdhm, index) => ({
            productId: productIdhm,
            navigateTo: `/${posterToSlughms[index]}?cid=${posterToIdhms[index]}&type=product`,
            header: headerhms[index],
            offer: offerhms[index],
            subHeader: subheaderhms[index]
        }))
    }

    if (productIdnls && productIdnls.length > 0) {
        req.body.newLaunches = productIdnls.map((productIdnl, index) => ({
            productId: productIdnl,
            navigateTo: `/${posterToSlugnls[index]}?cid=${posterToIdnls[index]}&type=product`,
            header: headernls[index],
            offer: offernls[index],
            subHeader: subheadernls[index]
        }))
    }

        HomePage.find({ })
        .exec((error, homePages) => { 
            if(error) return res.status(400).json({ error });
            if(homePages.length > 0){
                const id = homePages[0]._id
                HomePage.findOneAndUpdate({ _id : id }, req.body)
                .exec((error, updatedHomePage) => {
                    if(error) return res.status(400).json({ error });
                    if(updatedHomePage){
                        return res.status(201).json({ homePage : updatedHomePage });
                    }
                })
            } else {
                const page = new HomePage(req.body);
                page.save((error, homePage) => {
                    if(error) return res.status(400).json({ error });
                    if(homePage){
                        return res.status(201).json({ homePage });
                    }
                });
            }
        })
}

exports.getHomePage = (req, res) => {
        HomePage.find({ })
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
        .exec((error, homePage) => {
            if(error) return res.status(400).json({ error });
            if(homePage){
                return res.status(200).json({ homePage })
            } 
        })
}

 