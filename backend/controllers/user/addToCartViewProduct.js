const addToCartModel = require("../../models/cartProduct")

const addToCartViewProduct = async(req,res) => {
    try {
        const currentUser = req.userId

        const allProduct = await addToCartModel.find({
            userId : currentUser
        }).populate("productId")

        // console.log("Cart Products Fetched:", allProduct); // Debugging

        res.json({
            data : allProduct,
            success : true,
            error : false
        })
    } catch (error) {
        // console.log("Error Fetching Cart Products:", error); // Debugging
        res.json({
            message : error.message || message,
            error : true,
            success : false
        })
    }
}

module.exports = addToCartViewProduct