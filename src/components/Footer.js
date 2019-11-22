import React from "react";
import "../css/App.css";
import Buttons from "../components/Button";

const Footer = () => {
  return (
    <div>
      

      <div className="row">
        <div className="col-lg-6">
          <p className="footerText ">
            Venture Garden Group is a holding company for a group of financial
            technology entities dedicated to the innovative and data-driven
            financial technology solutions.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="font-weight-bold pb-4">Our Corporate Office</h3>
              <p className="text-left footerText">
                {" "}
                Vibranium Valley,
                <br />
                42, Local Airport Road,
                <br />
                Lagos.
              </p>
            </div>
            <div className="col-lg-6">
              <h3 className="font-weight-bold pb-4">Contact</h3>
              <ul className="contactList">
                <li className="">
                  <a href="/">jobs@venturegardengroup.com</a>
                </li>
                <li>
                  {" "}
                  <a href="/"> careers@venturegardengroup.com</a>
                </li>
                <li>
                  <a href="/">+2348000000000</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row footerBase">
        <div className=" col-md-6 col-xs-12">
          <p className="font-italic footerText">
            Transforming Africa through technology
          </p>
        </div>
        <div className=" col-md-6 col-xs-12">
          <p className="text-right footerText ">@venturegardengroup</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
