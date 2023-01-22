import React from 'react'
import SignupForm from '../components/SignupForm'
import back from "../assets/images/background.png";

function SignupPage() {
  return (
    <div className="page-wrapper">
        <div className="signup-wrapper">
        <img className='background-image' src={back} alt="" />
            <SignupForm/>
        </div>
    </div>
  )
}

export default SignupPage