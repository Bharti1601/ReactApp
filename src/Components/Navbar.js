import React, {useState}from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [myStyle, setMyStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  })
  const [btnText, setBtnText] = useState("Enable Light Mode")

// useEffect(()=>{
//   toggleStyle();
// },[]);
  
  const toggleStyle = ()=>{
    if(myStyle.color === 'white')
    {
      setMyStyle({color : 'black',
      backgroundColor : 'white',
    });
    setBtnText("Enable Dark Mode");
  }
  else{
    setMyStyle({color : 'white',
      backgroundColor : 'black',
    });
    setBtnText("Enable Light Mode");
  }

  }
  return (
    <>
      <Navbar bg={myStyle} data-bs-theme={myStyle}>
        <Container>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/ContactPage">
              ContactPage
            </NavLink>
            <NavLink className="nav-link" to="/AboutUs">
              AboutUs
            </NavLink>
            <NavLink className="nav-link" to="/SignoutPage">
              LogOut
            </NavLink>
            <div>
              <button onClick ={toggleStyle} type="button" class = "btn btn-primary">{btnText}</button>
            </div>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
};
export default NavBar;
