import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
const url = "http://192.168.18.11:3000/api/App";
const imageUrl = "http://192.168.18.11:3000/uploads"

const getAllProducts =  async (inputData) =>{
    let result = null
   // axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    await axios.get(`${url}/GetAllProducts`).then(response => {
        result = response.data
    }).catch(err => {
        if (err) {
            result = err.response.data
        }
    });
    return result
}
const GetProductForHome =  async (inputData) =>{
    let result = null
   // axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    await axios.get(`${url}/GetProductForHome`).then(response => {
        result = response.data
    }).catch(err => {
        if (err) {
            result = err.response.data
        }
    });
    return result
}

const RegisterUser = async (data) => {
    let result = null
    await axios.post(`${url}/register`,data).then(response => {
        result = response.data
    }).catch(err => {
        if (err) {
            result = err.response.data
        }
    });
    return result
}

const LoginUser = async (data) => {
    let result = null
    await axios.post(`${url}/login`,data).then(response => {
        result = response.data
    }).catch(err => {
        if (err) {
            result = err.response.data
        }
    });
    return result
}

const getUserInfo = async (id) => {
    let result = null
    const userid = {id:id.userID}
     axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    await axios.post(`${url}/GetloginUserInfo`,userid).then(response => {
        result = response.data
    }).catch(err => {
        if (err) {
            result = err.response.data
        }
    });
    return result
}

const checkOutRequest = async (chackoutData) => {
    let result = null;
    console.log(chackoutData);
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    await axios.post(`${url}/CheckOutRequest`,chackoutData).then(response => {
        result = response
    }).catch(err => {
        if (err) {
            result = err.response
        }
    });
    return result
}

const orderHistory  = async (id) => {
    let result = null
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    await axios.get(`${url}/orders/${id}`).then(response => {
        result = response.data
    }).catch(err => {
        if (err) {
            result = err.response.data
        }
    });
    return result
}

const getAllProductsListing =  async (inputData) =>{
    let result = null
    // axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    await axios.get(`${url}/GetAllProductsForListing`).then(response => {
        result = response.data
    }).catch(err => {
        if (err) {
            result = err.response.data
        }
    });
    return result
}
const getProductsDetail =  async (id) =>{
    let result = null
    // axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    await axios.get(`${url}/productDetail/${id}`).then(response => {
        result = response.data
    }).catch(err => {
        if (err) {
            result = err.response.data
        }
    });
    return result
}

const getAllCategoriescard =  async () =>{
    let result = null
    // axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    await axios.get(`${url}/GetAllCategoriesList`).then(response => {
        result = response.data
    }).catch(err => {
        if (err) {
            result = err.response.data
        }
    });
    return result
}

export {getAllProducts,url,imageUrl,RegisterUser,LoginUser,getUserInfo,checkOutRequest,orderHistory, getAllProductsListing,getProductsDetail,GetProductForHome,getAllCategoriescard}