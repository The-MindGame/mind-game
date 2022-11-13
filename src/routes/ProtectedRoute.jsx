import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'


// creating a protectec/private route to prevent unauthenticated user from entering game page

function ProtectedRoute() {

    // getting the stringified authentication from cookies
    const auth_string = Cookies.get("user");

    // if the cookie exists
    if(auth_string){
        const auth = JSON.parse(auth_string)       //converting the string to obj
        // if user token exists, pass to child route, if not, to login page
        return (auth.token ? <Outlet/> : <Navigate to="/login" />) 
    }else{
        // if the cookie doesn't exist, redirect to login page
        return(<Navigate to="/login" />)
    }

}

export default ProtectedRoute