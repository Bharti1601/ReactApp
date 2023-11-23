import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignoutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
    localStorage.clear();
  }, [navigate]);
  return (
    <>
      <h1>Logging Out</h1>
    </>
  );
};
export default SignoutPage;
