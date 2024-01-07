import React, { useEffect } from 'react'
import btnStyle from './ButtonStyle.css'
import GoogleLogo from './GOOG-0ed88f7c.png'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'


const SignIn = () => {

    return (
        <>
            <GoogleOAuthProvider clientId="466752079259-k91pivjfensmgs2n52gd5d8898k0rsp5.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={(credintialRespnse) => {
                        console.log(credintialRespnse)
                    }}

                    onError={(err) => {
                        console.log(err)
                    }}
                />

            </GoogleOAuthProvider>

            <button className="btnSignIn">
                <img src={GoogleLogo} />
                Sign In with Google
            </button>
        </>


    )
}

export default SignIn