import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/header.css";
import imglogo from "../assets/images/logo.png";

const Nav = ({ JoinUs, OurTeam, Home, Aboutus, FocusArea }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top ">
        <div className="container mt-2">
          <NavLink to="/" className="navbar-brand">
            <img src={imglogo} alt="" style={{ width: "200px" }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">
                  {Home} <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link">
                  {Aboutus} <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="/focus" className="nav-link">
                  {FocusArea} <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to="/ourteam" className="nav-link">
                  {OurTeam} <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/joinus" className="nav-link">
                  {JoinUs} <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;