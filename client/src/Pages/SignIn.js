import React, { useState } from 'react'
import { GoogleLogin, GoogleOAuthProvider,googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const SignIn = () => {
    const [user, setUser] = useState({
        email: '',
        name: '',
        picture: ''
    })

    const successSignIn = (response) => {
        console.log(response)
        const decode = jwtDecode(response.credential)
        setUser({
            ...user,
            email : decode.email,
            name : decode.name,
            picture : decode.picture,
        })
    }

    return (
        <>
            <GoogleOAuthProvider clientId="466752079259-k91pivjfensmgs2n52gd5d8898k0rsp5.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={successSignIn}
                    onError={(err) => console.log(err)}
                />
            </GoogleOAuthProvider>

            {
                user.email &&
                <>
                <button onClick={googleLogout}>
                    Sign Out
                </button>
                    <img src={user.picture} />
                    <h3>{user.email}</h3>
                    <h3>{user.name}</h3>
                </>
            }
        </>


    )
}

export default SignIn