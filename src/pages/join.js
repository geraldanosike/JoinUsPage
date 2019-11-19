import React, { Component } from "react";
import Nav from '../components/Nav';
import '../css/header.css';
import Button from "../components/Button.js"
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

          <Button children="View Openings" myBtnClass="viewbtntwo" />
        </section>
        {/* END HEADER SECTION */}

        {/* BEGIN OPEN POSITION SECTION */}

        {/* END OPEN POSITION SECTION */}

        {/* BEGIN Why You Will Love it at VGG POSITION SECTION */}

        {/* END Why You Will Love it at VGG POSITION SECTION */}

        {/* BEGIN FOOTER POSITION SECTION */}

        {/* END FOOTER POSITION SECTION */}
      </div>
    );
  }
}

export default JoinUs;
