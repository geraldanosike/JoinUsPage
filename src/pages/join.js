import React, { Component } from "react";
import Nav from '../components/Nav';
import '../css/header.css';
import Button from "../components/Button.js"
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
class JoinUs extends Component {
  render() {
    return (
      <div className="">
        {/* BEGIN HEADER SECTION */}
        <section className="Header container-fluid">
          <Nav Home="Home" Aboutus="About Us" FocusArea="Focus Area" OurTeam="Our team" JoinUs="Join Us" />
          <div className="join">
            <p className="join_team">Join Our Team</p>
            <Button children="View Openings" myBtnClass="viewbtn" />
          </div>
        </section>
        <section className="vgg-section">
          <p className="vgg-section-paragraph">
            At Venture Garden Group (VGG), the brightest minds driven by an
            entrepreneurial spirit are transforming Africa through Technology.
          </p>

        
        {/* footer section ends here */}
          <Button children="View Openings" myBtnClass="viewbtntwo" />
        </section>
        {/* END HEADER SECTION */}

        {/* BEGIN OPEN POSITION SECTION */}

        {/* END OPEN POSITION SECTION */}

        {/* BEGIN Why You Will Love it at VGG POSITION SECTION */}

        {/* END Why You Will Love it at VGG POSITION SECTION */}

        {/* BEGIN FOOTER POSITION SECTION */}
{/* Footer section */}

        {/* <section className="Values"> */}
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
