import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const Message = useRef("");

  const Message2 = useRef("");

  const LogIn = () => {
    if (
      Message.current.value === "Bharti" &&
      Message2.current.value === "Bharti"
    ) {
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
        <input
          type="text"
          id="Message"
          ref={Message}
          placeholder="UserName"
          autoComplete="off"
        />
        {/* Suggestions will not shown by using autocomplete as off */}
        <p align="center">Password</p>
        <input
          type="text"
          id="Message2"
          ref={Message2}
          placeholder="Password"
          autoComplete="off"
        />
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
