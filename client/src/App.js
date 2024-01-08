import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'

import SignIn from "./Pages/SignIn";
import SignwithCustomeBtn from "./Pages/SignwithCustomeBtn";
import OneTapLogin from "./Pages/OneTapLogin";
import SignIn_and_GetUser_from_Backend from "./Pages/SignIn_and_GetUser_from_Backend";

function App() {

  return (
    <GoogleOAuthProvider clientId="466752079259-k91pivjfensmgs2n52gd5d8898k0rsp5.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<SignIn />} />

          <Route path="/1" element={<OneTapLogin />} />

          <Route path="/2" element={<SignwithCustomeBtn />} />

          <Route path="/3" element={<SignIn_and_GetUser_from_Backend/>} />

        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
