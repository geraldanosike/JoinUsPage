import React, { Component } from "react";

class JoinUs extends Component {
  state = {};
  render() {
    return (
      <div className="Header">
        <p>HEADER SECTION</p>

        {/* Footer section */}

        <section className="Values">
          <div className="container-fluid ">
            <div className="row values-Container">
              <div className="col-xs-12 ">
                <h1 className="">Our Core Values</h1>
              </div>
            </div>
            
            <div className = "row">
              <div className="col-lg-1">
                <h3>Mutual Respect</h3>
              </div>
              <div className="col-lg-1">
                <h3>Ingenuity</h3>
              </div>
              <div className="col-lg-1">
                <h3>Ownership</h3>
              </div>
              <div className="col-lg-1">
                <h3>Client Service</h3>
              </div>
              <div className="col-lg-1">
                <h3>Passion</h3>
              </div>
              <div className="col-lg-1">
                <h3>Integrity</h3>
              </div>
              <div className="col-lg-1">
                <h3>Excellence</h3>
              </div>
            </div>
          </div>
        </section>
        {/* footer section ends here */}
      </div>
    );
  }
}

export default JoinUs;
