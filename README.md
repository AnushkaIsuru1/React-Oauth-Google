# React-Oauth/Google with jwt-decode, Redux

<br>

## ✅ Features

- Google auth sign in
- Google oneTapLogin
- Google Sign in with Custome Button
- Google SignIn and GetUser from Backend
- Auth save in frond end using redux
<br>

## 🧑‍💻 Tech Stack

- ### Frontend:
  - **1. React**
  - **2. @react-oauth/google** for use call Google Oauth API
  - **3. React Router Dom** for navigation
  - **4. Axios** for API requests
  - **5. jwt-decode** for decode google token
  - **6. Redux** for store auth

- ### Backend:
  - **1. Express**
  - **2. CORS** for allow secure cross-origin resource sharing, enabling the frontend to interact with the backend.
  - **3. Axios** for get userinfo from google API

<br>

## ⚡ Setup

### 1. Create OAuth client and get CLientId

Follow below tutorial
[https://youtu.be/rTIwdDxdDDA?t=220](https://youtu.be/rTIwdDxdDDA?t=220)

**<Your_ClientID> Replace to your cleint ID in below files**

|File path                             |Line       |
|--------------------------------------|-----------|
|client\src\App.js                     |17         |
|client\src\Pages\OneTapLogin.js       |15         |
|client\src\Pages\SignIn.js            |29         |


<br>
   
2. **Install Packageous:**
    ```bash
      cd backend
    ```
    ```bash
      npm install
    ```

    ```bash
      cd ../client
    ```
    
    ```bash
      npm install
    ```


<br>

## 📗 How use Google Oauth hooks

I have include **<GoogleLogin>, useGoogleLogin with cumstom button , and OneTapLogin** in this repostory. but all those hooks should be in a **<GoogleOAuthProvider>** Component. So I use those Login pages in **<GoogleOAuthProvider>**

```js
//App.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'

import SignIn from "./Pages/SignIn";
import SignwithCustomeBtn from "./Pages/SignwithCustomeBtn";
import OneTapLogin from "./Pages/OneTapLogin";
import SignIn_and_GetUser_from_Backend from "./Pages/SignIn_and_GetUser_from_Backend";

function App() {

  return (

      <GoogleOAuthProvider clientId="Your_ClientID">
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<SignIn />} />

            <Route path="/1" element={<OneTapLogin />} />

            <Route path="/2" element={<SignwithCustomeBtn />} />

            <Route path="/3" element={<SignIn_and_GetUser_from_Backend />} />

          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>

  );
}

export default App;

```
<br>

### 1. Login with Google button

<p align="center">
  <img width="70%"  src="/README/Sign in.jpg" alt="Sign in">
</p>

```js
import React from 'react'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const SignIn = () => {

    const successSignIn = (response) => {
        console.log(response)
        const decode = jwtDecode(response.credential)
        console.log(decode)
    }

    const logout = () => {
        googleLogout()
    }

    return (
        <>
            <GoogleLogin
                onSuccess={successSignIn}
                onError={(err) => console.log(err)}
            />

            <button onClick={logout}>
                Sign Out
            </button>
        </>
    )
}

export default SignIn
```

<br>

### 2. Login with Custome button

<p align="center">
  <img width="70%"  src="/README/Sign in with Custome Button.jpg" alt="Sign in with Custome Button">
</p>

```js

import React from 'react'

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
```
<br>

### 3. One Tap Login

<p align="center">
  <img width="70%"  src="/README/One Tap Login.jpg" alt="One Tap Login">
</p>

```js
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
            client_id: "<Your_ClientID>"
        }
    });

    return (
        <></>
    )
}

export default OneTapLogin
```
<br>

## 📗 Redux useDispatch with parameters


```js
//store.js

import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        name: "",
        email: "",
        picture: ""
    },

    reducers: {
        login(state, actions) {
            const { name, email, picture } = actions.payload

            state.name = name
            state.email = email
            state.picture = picture
        }
    }
})

export const authActions = authSlice.actions

export const store = configureStore({
    reducer : authSlice.reducer
})
```

```js
//SignIn.js
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../redux/store'

const SignIn = () => {
  const dispatch = useDispatch()

  const authStore = useSelector(state => state)
  console.log(authStore)

  dispatch(authActions.login({name:"anuska", email:"kavi", picture:"asd"}))
  console.log(authStore)

  return (
    <></>
  )
  
}
export default SignIn
```
