import React, {useEffect, useState} from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import {
    To_home,
    To_About,
    To_contact,
    To_Login,
    To_Register,
    To_cart,
    To_Checkout,
    To_Order_History,
    To_Product_List, To_Product_Details, To_Categories
} from "../helpers/Constants";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../containers/Home";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Header from "../components/Header";
import Footer from "../components/Footer";
import 'react-notifications/lib/notifications.css';
import Cart from "../containers/Cart";
import {NotificationContainer} from "react-notifications";
import CheckOut from "../containers/CheckOut";
import ProtectedRoutes from "./ProtectedRoutes";
import OrderHistory from "../containers/OrderHistory";
import ProductListing from "../containers/ProductListing";
import ProductDetail from "../containers/ProductDetail";
import CategoryList from "../components/CategoryList";
import Categories from "../containers/Categories";

const AppRoutes = () => {
    const [checkLogin,setLogin] = useState(localStorage.getItem('token'));
    useEffect(()=>{

    },[checkLogin])

    return(
        <>
            <Header prop={setLogin} />
            <Routes>
                <Route exact path={To_home}  element={<Home/>}/>
                <Route exact path={To_About}  element={<About/>}/>
                <Route exact path={To_contact}  element={<Contact/>}/>
                <Route exact path={To_cart}  element={<Cart/>}/>
                <Route exact path={To_Product_List}  element={<ProductListing/>}/>
                <Route exact path={To_Categories}  element={<Categories/>}/>
                <Route exact path={To_Product_List+To_Product_Details+"/:id"}  element={<ProductDetail/>}/>
                <Route exact path={To_Login}  element={<Login check={setLogin} />}/>
                <Route exact path={To_Register}  element={<Register check={setLogin}/>}/>
                <Route exact path={To_Checkout}  element={<ProtectedRoutes Component={CheckOut}  />}/>
                <Route exact path={To_Order_History}  element={<ProtectedRoutes Component={OrderHistory}  />}/>
            </Routes>
            <NotificationContainer/>
            <Footer/>
        </>
    )
}
export default AppRoutes