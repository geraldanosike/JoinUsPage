import React from "react";
import "../css/App.css";
import Icon from "../assets/images/icon.png";

const CoreValues = () => {
  return (
    <div>
      <div className="row pb-4">
        <div className="col-xs-12 text-center">
          <h1 className="font-weight-bolder coreValuesHeader">
            Our Core Values
          </h1>
        </div>
      </div>
      <div className = "row text-center">
        <div className="col-lg-3 col-md-6 ">
        <img src={Icon} alt="icon1" className="" />
          <h3 className="pt-4">Mutual Respect</h3>
        </div>
        <div className="col-lg-3 col-md-6">
        <img src={Icon} alt="icon1" className="" />
          <h3 className="pt-4">Ingenuity</h3>
        </div>
        <div className="col-lg-3 col-md-6">
        <img src={Icon} alt="icon1" className="" />
          <h3 className="pt-4">Ownership</h3>
        </div>
        <div className="col-lg-3 col-md-6">
        <img src={Icon} alt="icon1" className="" />
          <h3 className="pt-4">Client Service</h3>
        </div>
        </div>
        <div className="row text-center pt-5">
        <div className="col-lg-4 col-md-6">
        <img src={Icon} alt="icon1" className="" />
          <h3 className="pt-4">Passion</h3>
        </div>
        <div className="col-lg-4 col-md-6">
        <img src={Icon} alt="icon1" className="" />
          <h3 className="pt-4">Integrity</h3>
        </div>
        <div className="col-lg-4 col-md-6">
        <img src={Icon} alt="icon1" className="" />
          <h3 className="pt-4">Excellence</h3>
        </div>
        
      </div>
    </div>
  );
};

export default CoreValues;
