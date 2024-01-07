import React from 'react'
import btnStyle from './ButtonStyle.css'
import GoogleLogo from './GOOG-0ed88f7c.png'
const SignIn = () => {

    return (

        <button className="btnSignIn">
            <img src={GoogleLogo} />
            Sign In with Google
        </button>

    )
}

export default SignIn