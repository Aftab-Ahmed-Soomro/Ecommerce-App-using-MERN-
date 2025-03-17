// const backendDomain = 'http://localhost:8080'

const summaryApi = {
    signup : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/signup`,
        method : "post"
    },
    signin : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/signin`,
        method : "post"
    },
    current_user : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/userLogout`,
        method : "get"
    },
    allUser : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/all-user`,
        method : "get"
    },
    updateUser : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url :  `${import.meta.env.VITE_BACKEND_URL}/api/upload-product`,
        method : "post"
    },
    allProduct : {
        url :  `${import.meta.env.VITE_BACKEND_URL}/api/get-product`,
        method : "get"
    },
    updateProduct : {
        url :  `${import.meta.env.VITE_BACKEND_URL}/api/update-product`,
        method : "post"
    },
    categoryProduct : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/view-cart-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${import.meta.env.VITE_BACKEND_URL}/api/filter-product`,
        method : 'post'
    }
}

export default summaryApi;