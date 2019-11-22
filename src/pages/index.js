import React, { Component } from "react";
import Jobview from "../components/Jobviews";
import "../css/header.css";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Team from "../components/Team";
import Frame from "../components/Frame";
import { NewsLetter } from "../components/NewsLetter";
class JoinUs extends Component {
  render() {
    return (
      <div className="">
        <Header />

        <Frame />

        <Jobview />

        <Team />

        <div className="container-fluid Values py-5">
          <div className="container">
            <CoreValues />
          </div>
        </div>
        <div className="container">
          <NewsLetter />
        </div>
        <div className="container-fluid footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default JoinUs;
