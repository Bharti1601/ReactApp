import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import AboutUs from "./AboutUs";
import SignoutPage from "./SignoutPage";
import PrivateRoute from "./PrivateRoute";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element = {<PrivateRoute/>}> */}
          <Route path="/HomePage" element={<PrivateRoute Component={HomePage}/>} />
          <Route path="/ContactPage" element={<PrivateRoute Component= {ContactPage}/>} />
          <Route path="/AboutUs" element={<PrivateRoute Component= {AboutUs}/>} />
          {/* </Route> */}
          <Route path="/SignoutPage" element={<SignoutPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
