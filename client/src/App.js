import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'

import SignIn from "./Pages/SignIn";
import SignwithCustomeBtn from "./Pages/SignwithCustomeBtn";
import OneTapLogin from "./Pages/OneTapLogin";
import SignIn_and_GetUser_from_Backend from "./Pages/SignIn_and_GetUser_from_Backend";

import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {

  return (
    <Provider store={ store }>

      <GoogleOAuthProvider clientId="<Your_clientID>">
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<SignIn />} />

            <Route path="/1" element={<OneTapLogin />} />

            <Route path="/2" element={<SignwithCustomeBtn />} />

            <Route path="/3" element={<SignIn_and_GetUser_from_Backend />} />

          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>

    </Provider>
  );
}

export default App;
