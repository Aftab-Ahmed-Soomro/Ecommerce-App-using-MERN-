const userModel = require("../../models/userModel")

async function userDetailsController(req,res) {
    try {
        if (!req.userId) {
            return res.status(401).json({
              message: "Unauthorized access",
              error: true,
              success: false,
            });
        }

        console.log("userId",req.userId);
        const user = await userModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
              message: "User not found",
              error: true,
              success: false,
            });
        }

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User Details Retrieved", 

        })

        console.log("user", user);

    } catch (error) {
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = userDetailsController;