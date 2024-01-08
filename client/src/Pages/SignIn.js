import React from 'react'
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../redux/store'

const SignIn = () => {
    const dispatch = useDispatch()
    const authStore = useSelector(state => state)

    console.log(authStore)

    const successSignIn = (response) => {
        console.log(response)
        const decode = jwtDecode(response.credential)

        dispatch(authActions.login(decode))
       // dispatch(authActions.login({ name: decode.name, email: decode.email, picture: decode.picture }))
    }

    const logout = () => {
        googleLogout()
        dispatch(authActions.logout())
        console.log(authStore)
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
                authStore.email &&
                <>
                    <button onClick={logout}>
                        Sign Out
                    </button>

                    <img src={authStore.picture} />
                    <h3>{authStore.email}</h3>
                    <h3>{authStore.name}</h3>
                    <h3>{authStore.isLoggedIn}</h3>
                </>
            }
        </>
    )
}

export default SignIn