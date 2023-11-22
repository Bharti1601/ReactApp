import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import AboutUs from "./AboutUs";
const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          {/* <Route path="/SignoutPage" element={<SignoutPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
