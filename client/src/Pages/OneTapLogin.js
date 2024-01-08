import React from 'react'
import { useGoogleOneTapLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const OneTapLogin = () => {
    const successSignIn = (response) => {
        console.log((response))
        console.log(jwtDecode(response.access_token))
    }

    useGoogleOneTapLogin({
        onError: error => console.log(error),
        onSuccess: successSignIn,
        googleAccountConfigs: {
            client_id: "466752079259-k91pivjfensmgs2n52gd5d8898k0rsp5.apps.googleusercontent.com"
        }
    });

    return (
        <></>
    )
}


export default OneTapLogin