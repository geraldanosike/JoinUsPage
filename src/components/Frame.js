import React from "react";
import Button from "../components/Button";
import "../css/Frame.css";

const Frame = () => {
  return (
    <div>
      <div className="container  frameContainer">
        <div className="row mb-5">
          <div className="col-md-6 frame-video mb-4">
            <iframe
              title="Venture garden group"
              width="100%"
              height="230px"
              src="https://www.youtube.com/embed/_3_klf4NuT4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                border: "none",
                borderRadius: "4px"
              }}
              //   ,
              //     width: "500px",
              //     height: "230px"
            ></iframe>
          </div>
          <div className="col-md-6 frameText">
            <h1> JOIN THOUSANDS OF PEOPLE THAT RELY ON VGG</h1>
            <hr />
            <p className="vgg-section-paragraph">
              At Venture Garden Group (VGG), the brightest minds driven by an
              entrepreneurial spirit are transforming Africa through Technology.
            </p>
            <Button children="View Openings" myBtnClass="viewbtntwo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
