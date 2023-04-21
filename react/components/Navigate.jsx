import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import burger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import { Link } from "react-router-dom";

function Navigate() {
  const [open, setOpen] = useState(false);

  const closeIcon = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav className={`nav ${open ? `show` : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li className="active">
            <Link to="/">00 Home</Link>
          </li>
          <li>
            <Link to="/destination">01 Destination</Link>
          </li>
          <li>
            <Link to="/crew">02 Crew</Link>
          </li>
          <li>
            <Link to="/technology">03 Technology</Link>
          </li>
        </ul>
        <div onClick={closeIcon} className="burger">
          {open === false ? (
            <img src={burger} alt="burger-icon" />
          ) : (
            <img src={close} alt="close-icon" />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navigate;
