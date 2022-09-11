import { getStoreData } from "./Functions/ApiMainFunc";
import productData  from "./Functions/ProductMap.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Images from "./Functions/Images";

import ProductCard from "./Functions/ProductCard";
import {useState, useEffect} from "react";
import React,{} from "react";
function App() {
  getStoreData();
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className=" row ">
            <div className="col d-flex align-self-center ">
              <img
                src={ Images.logo }
                alt="Tailored logo in grey and gold "
                height="50px"
                width=" 50px"
              ></img>
            </div>
            <div className="col d-flex justify-content-center ">
              <h1 className="MainTitle">Tailored Brands</h1>
            </div>
            <div className="col  d-flex justify-content-end ">
              <ul className="Nav-list">
                <li>Home</li>
                <li>Products</li>
                <li>Cart</li>
                <li>Checkout</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className=" hero-section parallax">
        <div className="productCardSection">
          <ProductCard />
          
        </div>
        <footer className="footer">
          <div className="container">  
          <div className=" row d-flex"> 
          <div className="CCLogo col  d-flex justify-content-start align-self-center" >
            <img src={Images.ccLogo} 
            alt="Clark Creative logo" style={{width:"100px" , height :"70px"}} ></img>
          </div>
          <div className="col  d-flex justify-content-center align-self-center">
            <h2 className="footerHead">
              <ul className="footerHeadTitle">
                <li>Integrity.</li>
                <li>Affordability.</li>
                <li>Inclusivity.</li>
              </ul>
               
            </h2>
          </div>
          <div className="col d-flex socials justify-content-end align-self-center">
            <a href="nothing" target="_blank"><img src={Images.facebookLogo} alt="Facebook logo" style={{width:"50px" , height :"50px"}}></img></a>
            <a href="nothing" target="_blank"><img src={Images.youtubeLogo} alt="Youtube logo" style={{width:"50px" , height :"50px"}}></img></a>
            <a href="nothing" target="_blank"><img src={Images.instagramLogo} alt="Instagram logo" style={{width:"50px" , height :"50px"}}></img></a>
            <a href="nothing" target="_blank"><img src={Images.linkedInLogo} alt="linkedIn logo" style={{width:"50px" , height :"50px"}}></img></a>
            <a href="nothing" target="_blank"><img src={Images.twitterLogo} alt="Twitter logo" style={{width:"50px" , height :"50px"}}></img></a>
            <a href="nothing" target="_blank"><img src={Images.githubLogo} alt="Github logo" style={{width:"50px" , height :"50px"}}></img></a>
            <a href="nothing" target="_blank"><img src={Images.pinterestLogo} alt="Pinterest logo" style={{width:"50px" , height :"50px"}}></img></a>
          </div>
          </div>
          </div>
        </footer>
         </div>
    </div>
  );
}

export default App;
