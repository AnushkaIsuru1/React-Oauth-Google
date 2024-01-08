import React from 'react'
import { useGoogleOneTapLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const OneTapLogin = () => {
    const successSignIn = (response) => {
        console.log((response))
        console.log(jwtDecode(response.credential))
    }

    useGoogleOneTapLogin({
        onError: error => console.log(error),
        onSuccess: successSignIn,
        googleAccountConfigs: {
            client_id: "<your CLienID>"
        }
    });

    return (
        <></>
    )
}


export default OneTapLogin