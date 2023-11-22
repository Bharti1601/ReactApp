import React from "react";
import Navbar from "./Navbar";
//import { Link } from "react-router-dom";
//import Navbar from "./components/Navbar";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <h1> Welcome User </h1>
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

export default HomePage;
