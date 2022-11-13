import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'


// creating a protectec/private route to prevent authenticated user from entering login/signup page

function ProtectedLogin() {

    // getting the stringified authentication from cookies
    const auth_string = Cookies.get("user");

    // if the cookie exists
    if(auth_string){
        const auth = JSON.parse(auth_string)
        // if user token exists, pass to home(or profile) page, if not, to child route(login/signup page)
        return (auth.token ? <Navigate to="/"/> : <Outlet/>)  // TO BE CHANGED TO PROFILE
    }else{
        //if cookie doesn't exist pass to login page
        return(<Outlet/>)
    }
}

export default ProtectedLogin