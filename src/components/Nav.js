import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/header.css";
import imglogo from "../assets/images/logo.png";

class Nav extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showToggle: false
    };
  }

  showToggle = () => {
    const { showToggle } = this.state;
    this.setState({ showToggle: !showToggle });
  };

  render() {
    const { showToggle } = this.state;
    const { JoinUs, OurTeam, Home, Aboutus, FocusArea } = this.props;
    return (
      <div>
        <div className="container-fluid main_nav">
          <div>
            <NavLink to="/" className="navbar_brand">
              <img src={imglogo} className="img" alt="logo" />
            </NavLink>
          </div>
          <div className="spacer"></div>

          <div>
            {/* <ul   className = {showToggle === true ? " nav_items " : "nav_itemsOpen"}> */}
            <ul className="nav_items deskstop">
              <li className="nav_item">
                <NavLink
                  activeStyle={{
                    color: "green"
                  }}
                  to="/home"
                  className="nav_link"
                >
                  {Home}{" "}
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink
                  activeStyle={{
                    color: "green"
                  }}
                  to="/aboutus"
                  className="nav_link"
                >
                  {Aboutus}{" "}
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink
                  activeStyle={{
                    color: "green"
                  }}
                  to="/focus"
                  className="nav_link"
                >
                  {FocusArea}{" "}
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink
                
                  activeStyle={{
                    color: "green"
                  }}
                  to="/ourteam"
                  className="nav_link"
                >
                  {OurTeam}{" "}
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink
                  activeStyle={{
                    color: "green"
                  }}
                  to="/joinus"
                  className="nav_link"
                >
                  {JoinUs}{" "}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mobileView">
            <ul
              className={
                showToggle === true ? " mobile_nav_items " : "nav_itemsOpen "
              }
            >
              >
              <li className="mobile_nav_item">
                <NavLink
                
                  activeStyle={{
                    color: "green"
                  }}
                  to="/home"
                  className="nav_link"
                >
                  {Home}{" "}
                </NavLink>
              </li>
              <li className="mobile_nav_item">
                <NavLink
                  activeStyle={{
                    color: "green"
                  }}
                  to="/aboutus"
                  className="nav_link"
                >
                  {Aboutus}{" "}
                </NavLink>
              </li>
              <li className="mobile_nav_item">
                <Link
                  activeStyle={{
                    color: "green"
                  }}
                  to="/focus"
                  className="nav_link"
                >
                  {FocusArea}{" "}
                </Link>
              </li>
              <li className="mobile_nav_item">
                <NavLink
                  activeStyle={{
                    color: "green"
                  }}
                  to="/ourteam"
                  className="nav_link"
                >
                  {OurTeam}{" "}
                </NavLink>
              </li>
              <li className="mobile_nav_item">
                <NavLink
                  activeStyle={{
                    color: "green"
                  }}
                  to="/joinus"
                  className="nav_link"
                >
                  {JoinUs}{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={
            showToggle === false
              ? "hamburger showHamburger "
              : "hamburger is-active hamburger2"
          }
          id="hamburger-1"
          onClick={this.showToggle}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    );
  }
}

export default Nav;
