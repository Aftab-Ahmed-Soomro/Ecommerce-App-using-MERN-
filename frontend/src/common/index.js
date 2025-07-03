export const backendDomain = import.meta.env.VITE_BACKEND_URL

const summaryApi = {
    signup : {
        url : `/api/signup`,
        method : "post"
    },
    signin : {
        url : `/api/signin`,
        method : "post"
    },
    current_user : {
        url : `/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `/api/userLogout`,
        method : "get"
    },
    allUser : {
        url : `/api/all-user`,
        method : "get"
    },
    updateUser : {
        url : `/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url :  `/api/upload-product`,
        method : "post"
    },
    allProduct : {
        url :  `/api/get-product`,
        method : "get"
    },
    updateProduct : {
        url :  `/api/update-product`,
        method : "post"
    },
    categoryProduct : {
        url : `/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `/api/view-cart-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `/api/filter-product`,
        method : 'post'
    }
}

export default summaryApi;