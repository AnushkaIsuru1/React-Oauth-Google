 import React from 'react'
import btnStyle from './ButtonStyle.css'
import GoogleLogo from './GOOG-0ed88f7c.png'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const SignIn_and_GetUser_from_Backend = () => {

    const googleLogin = useGoogleLogin({
        onSuccess: async ({ access_token }) => {
            console.log(access_token);
            const userInfo = await axios.post(
                'http://localhost:5000/userinfo',
                { access_token},
            );
            console.log(userInfo.data);
        },
    });

    return (
        <>
            <button className="btnSignIn" onClick={googleLogin}>
                <img src={GoogleLogo} />
                Sign In with Google
            </button>
        </>
    )
}

export default SignIn_and_GetUser_from_Backend