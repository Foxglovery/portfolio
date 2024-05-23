import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
// REFCE!!!!! USe it for shortcut function
const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link to="/#" className="desktopMenuListItem">
          Home
        </Link>
        <Link to="/#" className="desktopMenuListItem">
          About
        </Link>
        <Link to="/#" className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link to="/#" className="desktopMenuListItem">
          Clients
        </Link>
      </div>
      <button className="desktopMenuBtn">
        <img className="desktopMenuImg" src={contactImg} alt="" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
