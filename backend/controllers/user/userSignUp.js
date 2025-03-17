const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");

async function userSignUpController(req,res) {
    try {
        const {name, email, password} = req.body

        const user = await userModel.findOne({email});

        if (user) {
            throw new Error("User already exists");
        }

        if (!email) {
            throw new Error("Please Provide Email");
        }

        if (!password) {
            throw new Error("Please Provide Password");
        }

        if (!name) {
            throw new Error("Please Provide Name");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save();

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User Created Successfully!"
        })

    } catch (error) {
        // console.log("error", error.message)
        // res.status(400).send({status:"failed", message:error});
        res.json({
            message: error.message || error,
            error: true,
            success: false
        })  
    }
}

module.exports = userSignUpController;