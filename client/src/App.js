import React from "react";
import SignIn from "./Pages/SignIn";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/p" element={<ProtectedRoute />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
