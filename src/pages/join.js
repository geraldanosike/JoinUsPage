import React, { Component } from "react";
import Icon from "../assets/images/icon.png";
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
          <div className="row py-5">
            <div className="col-xs-12 text-center">
              <h1 className="font-weight-bolder coreValuesHeader">Our Core Values</h1>
            </div>
          </div>

          <div className="row valuesRows py-5">
            <div className=" coreValues text-center">
              <img src={Icon} alt="icon1" className="" />
              <h2 className="pt-4">
                Mutual 
                Respect
              </h2>
            </div>
            <div className="coreValues text-center">
              <img src={Icon} alt="icon1" />
              <h2 className="pt-4"> Ingenuity</h2>
            </div>
            <div className="coreValues  text-center">
              <img src={Icon} alt="icon1" />
              <h2 className="pt-4"> Ownership </h2>
            </div>
            <div className=" coreValues coreValuesimg text-center">
              <img src={Icon} alt="icon1" className="tabletImg" />
              <h2 className="pt-4">
                Client Service
              </h2>
            </div>
            <div className="coreValues coreValuesimg text-center">
              <img src={Icon} alt="icon1" className="tabletImg"/>
              <h2 className="pt-4">Passion</h2>
            </div>
            <div className=" coreValues coreValuesimg text-center">
              <img src={Icon} alt="icon1" className="tabletImg"/>
              <h2 className="pt-4">Integrity</h2>
            </div>
            <div className=" coreValues coreValuesimg text-center">
              <img src={Icon} alt="icon1" className="tabletImg"/>
              <h2 className="pt-4 ">Excellence</h2>
            </div>
          </div>
        </div>

        <div className="container-fluid footer">
          <div className="row">
            <div className="col-lg-6">
            <p className = "footerText ">
                    Venture Garden Group is a holding company for a group of
                    financial technology entities dedicated to the innovative
                    and data-driven financial technology solutions.
                  </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                 <h3 className ="font-weight-bold pb-4">Our Corporate Office</h3>
                  <p className = "text-left footerText"> Vibranium Valley,
<br/>42, Local Airport Road,<br/>Lagos.

</p>
                </div>
                <div className="col-lg-6">
                  <h3 className ="font-weight-bold pb-4">Contact</h3>
                  <ul  className ="contactList">
                    <li className = ""><a href='/'>jobs@venturegardengroup.com</a></li>
                    <li> <a href='/'> careers@venturegardengroup.com</a></li>
                    <li><a href='/'>+2348000000000</a></li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
          <div className = "row footerBase">
            <div className= " col-md-6 col-xs-12">
<p className="font-italic footerText">Transforming Africa through technology
</p>
            </div>
            <div className= " col-md-6 col-xs-12">
<p className = "text-right footerText ">@venturegardengroup
</p>
            </div>

          </div>
        </div>
        {/* END FOOTER POSITION SECTION */}
      </div>
    );
  }
}

export default JoinUs;
