import React from 'react';
//import { useNavigate } from 'react-router-dom';

export default function LoginPage(props) {
  const LogIn = () => {
    // Retrieve username and password values
    const Message = document.getElementById('Message');
    console.log(Message.value);
    const Message2 = document.getElementById('Message2');
    console.log(Message2.value);

    // Perform login logic here...
    // For demonstration purposes, let's assume the login is successful
    // Replace this with your actual login logic
    };

  return (
    <>
      <div className="container">
        <h1>{props.Login}</h1>
        <p align="center">User Name</p>
        <textarea className="form-control" id="Message" rows="2"></textarea>
        <p align="center">Password</p>
        <textarea className="form-control" id="Message2" rows="2"></textarea>
        <div className="mb-3">
          <button className="btn btn-primary" onClick={LogIn}>
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
}
