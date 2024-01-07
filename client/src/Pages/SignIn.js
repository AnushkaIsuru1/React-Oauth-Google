import React, { useEffect } from 'react'
import btnStyle from './ButtonStyle.css'
import GoogleLogo from './GOOG-0ed88f7c.png'
import { useGoogleLogin } from '@react-oauth/google'

const SignIn = () => {

    const login = useGoogleLogin({
        onSuccess: token => console.log(token),
        flow: 'auth-code',
    })

    return (
        <>
            <button className="btnSignIn" onClick={login}>
                <img src={GoogleLogo} />
                Sign In with Google
            </button>
        </>


    )
}

export default SignIn