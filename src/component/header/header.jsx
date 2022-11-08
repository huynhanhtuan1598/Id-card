import React from "react";
import  './style_header.css';
import logo from '../../asset/img/logo_enmasys.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export default function header() {
  return (
   <>
      <Navbar bg="white" variant="light">
        <Container>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
            <Link  to ='/login' className="jss999"><b>Đăng ký &nbsp;</b></Link>
          <div className="jss907">
            <span className="jss909">
                Vi
            </span>
            <span className="jss909">
                En
            </span>
            <div className="jss908"></div>
          </div>
        </Container>
      </Navbar>
   </>
  );
}
