import React, {Component, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {To_home, To_Login} from "../helpers/Constants";

const ProtectedRoutes = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    const getpath = window.location.pathname;
    useEffect(()=>{
        let login = localStorage.getItem('token')
        console.log(login)
        if(login === null){
            console.log("Login")
            navigate(To_Login)
        }else{
            if(login !== "null" && getpath === '/' ){
                console.log("abc")
                navigate(To_home)
            }else {
                console.log(getpath)
                navigate(getpath)
            }

        }
    },[])
    return(
        <>
            <Component/>
        </>
    )
}
export default ProtectedRoutes;
