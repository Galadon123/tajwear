import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import './header.css'
const Header = () => {
    return (
        <div className="container">
        <div className="anchor">
           <div className="maindiv">
           <div className="hover" >
               <a href="#home">Home</a>
               <a href="#about">About Us</a>
               <a href="#contct">Contact Us</a>
               <a href="#player">Teacher's Panel</a>
             </div> 
            <div className="login">
               <a href="#home"> <FontAwesomeIcon icon={faArrowRight} /> Log in</a> 
            </div>
           </div>
           <div className="header">
            <h3 className="title">Science Blueprint Teacher panel Selection</h3>
           <p className="title">Total Value $ 100000 TAKA</p>
           </div>
        </div>
        </div>
    );
};

export default Header;