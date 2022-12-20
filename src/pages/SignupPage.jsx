import React from 'react'
import SignupForm from '../components/SignupForm'


function SignupPage() {
  return (
    <div className="page-wrapper">
        <div className="signup-wrapper">
        <img className='background-image' src="/src/assets/images/background.png" alt="" />
            <SignupForm/>
        </div>
    </div>
  )
}

export default SignupPage