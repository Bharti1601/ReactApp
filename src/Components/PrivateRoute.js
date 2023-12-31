import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const PrivateRoute =(props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(() =>{
        let LogIn = localStorage.getItem('UserName');
                    localStorage.getItem('Password');
        if(!LogIn){
            navigate('/')
        }
    });
    return(
        <div>
        <Component/>
        </div>
    );
};

export default PrivateRoute;
