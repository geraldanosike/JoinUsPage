import React from 'react';
import "../css/header.css";
import Button from "../components/Button.js";
import Nav from "../components/Nav";


const Header = () => {
    return (
      <div>
        <section className="Header ">
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
     
      </div>
    );
}
 
export default Header;