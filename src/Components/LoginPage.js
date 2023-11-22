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
        <input type="text" id="Message" placeholder="UserName"></input>
        <p align="center">Password</p>
        <input type="text" id="Message2" placeholder="Password"></input>
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

// rows is basically used for multiline input which can not be used in input type as the input is only used for single line input. We can use this with textarea to increase the multiple input.nd the height of the textarea will adjust based on the specified number of rows.
