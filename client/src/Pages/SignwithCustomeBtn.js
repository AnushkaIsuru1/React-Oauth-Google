
import React from 'react'
import btnStyle from './ButtonStyle.css'
import GoogleLogo from './GOOG-0ed88f7c.png'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const SignwithCustomeBtn = () => {

    const googleLogin = useGoogleLogin({
        onSuccess: async ({ access_token }) => {
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${access_token}` } },
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

export default SignwithCustomeBtn