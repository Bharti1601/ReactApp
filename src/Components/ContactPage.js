import React from "react";
import Navbar from "./Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <h1> Welcome to the Contact Page </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "centre",
          alignItems: "centre",
          height: "100vh",
        }}
      ></div>
    </>
  );
};

export default ContactPage;
