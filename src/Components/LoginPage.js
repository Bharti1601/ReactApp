import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const LogIn = () => {
    //TODO: Read the concept of use ref hook and replace the below code with useref
    const Message = document.getElementById("Message");
    console.log(Message.value);

    const Message2 = document.getElementById("Message2");
    console.log(Message2.value);

    if (Message.value === "Bharti" && Message2.value === "Bharti") {
      navigate("/HomePage");
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
      <div className="loginPage">
        <h1>Login Page</h1>
        <p align="center">UserName</p>
        <textarea className="form-control" id="Message" rows="2"></textarea>
        <p align="center">Password</p>
        <textarea className="form-control" id="Message2" rows="2"></textarea>
        <div className="mb-3">
          <button className="btn btn-primary loginButton" onClick={LogIn}>
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
