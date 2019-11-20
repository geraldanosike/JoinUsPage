import React from 'react';
import "../css/header.css";
import Button from "../components/Button.js";
import Nav from "../components/Nav";


const Header = () => {
    return (
      <div>
        <section className="Header container-fluid">
          <Nav
            Home="Home"
            Aboutus="About Us"
            FocusArea="Focus Area"
            OurTeam="Our team"
            JoinUs="Join Us"
          />
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
      </div>
    );
}
 
export default Header;