import React from "react";
import Navbar from "./Navbar";
// import Routers from "./Components/Routers";

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* <Routers/> */}
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
