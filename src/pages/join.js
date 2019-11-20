import React, { Component } from "react";
import Jobview from "../components/Jobviews";

import Icon from "../assets/images/icon.png";
import Nav from '../components/Nav';
import '../css/header.css';
import Button from "../components/Button.js"
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Header from '../components/Header';
import Team from "../components/Team";
class JoinUs extends Component {
  render() {
    return (
      <div className="">
        {/* BEGIN HEADER SECTION */}
       <Header/>
        {/* END HEADER SECTION */}

        {/* BEGIN OPEN POSITION SECTION */}
        <Jobview />
        {/* END OPEN POSITION SECTION */}

        {/* BEGIN Why You Will Love it at VGG POSITION SECTION */}
        <Team/>
        {/* BEGIN FOOTER POSITION SECTION */}

        <div className="container-fluid Values">
         <CoreValues/>
        </div>

        <div className="container-fluid footer">
         <Footer/>
        </div>
        {/* END FOOTER POSITION SECTION */}
      </div>
    );
  }
}

export default JoinUs;
