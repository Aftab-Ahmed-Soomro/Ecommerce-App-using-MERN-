const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

async function userSignInController(req,res) {
    try {
        const {email, password} = req.body

        const user = await userModel.findOne({email});

        if (!user) {
            throw new Error("User Not Found");
        }

        if (!email) {
            throw new Error("Please Provide Email");
        }

        if (!password) {
            throw new Error("Please Provide Password");
        }

        const checkPassword = await bcrypt.compare(password,user.password);

        console.log("checkPassword",checkPassword);

        if (checkPassword) {
            const tokenData = {
                _id : user._id,
                email : user.email,
            }

            const token = await jwt.sign({ tokenData }, process.env.TOKEN_SECRET_KEY , { expiresIn: 60 * 60 * 8 });

            const tokenOption = {
                httpOnly : true,
                secure : true
            }

            res.cookie("token",token,tokenOption).json({
                message : "Login Successfully",
                data : token,
                success : true,
                error : false,
            })
        } else {
            throw new Error("Please Check Password Again");
        }

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = userSignInController;