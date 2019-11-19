import React, { Component } from "react";
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

        {/* END FOOTER POSITION SECTION */}
      </div>
    );
  }
}

export default JoinUs;
