import React, { Component } from "react";
import Icon from "../assets/images/icon.png";
import Nav from '../components/Nav';
import '../css/header.css';
import Button from "../components/Button"
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
        <section>
        <div className="row">
              <div className="col-md-12 m-auto text-center">
                <h1 className="title-heading">Why You Will Love it at VGG</h1>
                  <span className="text-p1 mt-5">
                    Our team members are the coolest and smartest people. We
                    actively encourage diversity and creativity.
                  </span>
                  <span className="text-p1">
                    In addition to a very competitive salary, we offer the
                    following benefits:
                  </span>
              </div>
          </div>
          <div className="container p-5">
            <div className="row m-5">
              <div className="col-md-4">
                <h2 className="title-heading">
                  Best-in-Class
                  <br />
                  Environment
                </h2>
                <p className="text-p mt-4">
                  Our creative workspaces have been designed to help our team
                  members excel and thrive.
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="title-heading">
                  Health
                  <br /> Insurance
                </h2>
                <p className="text-p mt-4">
                  We provide health benefit packages that cover team members and
                  their loved ones.
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="title-heading">
                  Professional
                  <br /> Development
                </h2>
                <p className="text-p mt-4">
                  Your growth is important to us. We actively invest in the
                  professional development of our team members through several
                  means.
                </p>
              </div>
            </div>
            <div className="row m-5">
              <div className="col-md-4">
                <h2 className="title-heading">
                  Pension & <br />
                  Paid Annual Leave
                </h2>
                <p className="text-p mt-4">
                  Our team members enjoy paid leave days and pension benefits
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="title-heading">
                  Flexible
                  <br /> Working Hours
                </h2>
                <p className="text-p mt-4">
                  We allow our team members choose their hours from our flexible
                  plans.
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="title-heading">
                  Maternity & <br />
                  Paternity Leave
                </h2>
                <p className="text-p mt-4">
                  Our team members enjoy 3 months maternity leave and paternity
                  leave up to 5 days.
                </p>
              </div>
            </div>

            <div className="row m-5">
              <div className="col-md-4">
                <h2 className="title-heading">
                  Profit
                  <br /> Sharing
                </h2>
                <p className="text-p mt-4">
                  We have an active profit sharing scheme.
                </p>
              </div>
            </div>
          </div>
        </section>

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
            <div className=" coreValues   coreValuesimg text-center">
              <img src={Icon} alt="icon1" className="" />
              <h2 className="pt-4">
                Client Service
              </h2>
            </div>
            <div className="coreValues coreValuesimg text-center">
              <img src={Icon} alt="icon1" />
              <h2 className="pt-4">Passion</h2>
            </div>
            <div className=" coreValues coreValuesimg text-center">
              <img src={Icon} alt="icon1" />
              <h2 className="pt-4">Integrity</h2>
            </div>
            <div className=" coreValues coreValuesimg text-center">
              <img src={Icon} alt="icon1" />
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
