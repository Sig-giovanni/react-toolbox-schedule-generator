import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../../assests/images/android-chrome-512x512.png";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar bg-white">
      <div className="container">
        <div className="nav-center">
          <div className="nav-header justify-content-between">
            <Link to="/">
              <img src={Logo} className="logo" alt="logo" />
            </Link>
            <button
              className="nav-btn"
              onClick={() => {
                setShow(!show);
              }}
            >
              nav
            </button>
          </div>
          <div className={show ? "nav-links show-links" : "nav-links"}>
            <Link
              to="/"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => {
                setShow(false);
              }}
            >
              Schedule
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => {
                setShow(false);
              }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
