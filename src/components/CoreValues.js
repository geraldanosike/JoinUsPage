import React from 'react';
import '../css/App.css';
import Icon from "../assets/images/icon.png";


 const CoreValues = () => {
    return (
        <div>
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
    )
}

export default CoreValues;