import React from "react";
import  './style_header.css';
import logo from '../../asset/img/logo_enmasys.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function header() {
  return (
   <>
      <Navbar bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
            <a href="#signup" className="jss6"><b>Đăng ký &nbsp;</b></a>
          <div className="jss907">
            <span className="jss909">
                Vi
            </span>
            <span className="jss909">
                En
            </span>
            <div class="jss908"></div>
          </div>
        </Container>
      </Navbar>
   </>
  );
}
