import React from "react";
import Information from "../../../component/information/information";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer/footer";

// import Flip_book from "../../../component/flip_book/flip_book";
import Flip_book from '../../../component/flipbook2/bookflip';

export default function profile() {
  return (
    <>
      <Header />
      <Information />
      <Flip_book/>
      <Footer/>
      
      
    </>
  );
}
