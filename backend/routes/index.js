const express = require("express");

const router = express.Router();

const userSignUpController = require("../controllers/user/userSignUp");
const userSignInController = require("../controllers/user/userSignIn");
const userDetailsController = require("../controllers/user/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controllers/user/userLogout");
const allUsers = require("../controllers/user/AllUsers");
const updateUser = require("../controllers/user/updateUser");
const UploadProductController = require("../controllers/product/uploadProduct");
const getProductController = require("../controllers/product/getProduct");
const updateProductController = require("../controllers/product/updateProduct");
const getCategoryProductOne = require("../controllers/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controllers/product/getCategoryWiseProduct");
const getProductDetails = require("../controllers/product/getProductDetails");
const addToCartController = require("../controllers/user/addToCartController");
const countAddToCartProduct = require("../controllers/user/countAddToCartProduct");
const addToCartViewProduct = require("../controllers/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controllers/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controllers/user/deleteAddToCartProduct");
const searchProduct = require("../controllers/product/searchProduct");
const filterProductController = require("../controllers/product/filterProduct");

// ************************** User *********************************

// Sign Up
router.post("/signup",userSignUpController);

// Sign In
router.post("/signin",userSignInController);

// User Details
router.get("/user-details",authToken,userDetailsController);

// User Logout
router.get("/userLogout",userLogout);

// ************************** Admin Panel *********************************

// admin panel 
router.get("/all-user",authToken,allUsers);

// update user
router.post('/update-user',authToken,updateUser);

// ************************** Product *************************************

// product
router.post('/upload-product',authToken,UploadProductController);

// get products
router.get('/get-product',getProductController);

// update product
router.post('/update-product',authToken,updateProductController);

// Get Category Product
router.get('/get-categoryProduct',getCategoryProductOne);

// Get Category wise Product
router.post("/category-product",getCategoryWiseProduct);

// get product details on detail page
router.post("/product-details",getProductDetails);

// Search
router.get("/search",searchProduct);

// filter product by category
router.post("/filter-product",filterProductController)

// ***************************** Add To Cart ***********************************

// user add to cart
router.post("/addtocart",authToken,addToCartController)

// cart length 
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)

// View Cart Product 
router.get("/view-cart-product",authToken,addToCartViewProduct)

// single cart increment
router.post("/update-cart-product",authToken,updateAddToCartProduct)

// delete product 
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)

module.exports = router