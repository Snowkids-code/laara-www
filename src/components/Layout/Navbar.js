import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/Navbar.json";

const icons = [
  "/icons/whatsapp.svg",
  "/icons/instagram.svg",
  "/icons/facebook.svg",
  "/icons/twitter.svg",
];

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-top-content">
          <div className="right-navbar-wrapper">
            <div className="social-media-navbar-wrapper">
              {icons.map((value, i) => (
                <div key={i} className="icons-wrapper">
                  <img alt="icon" src={value} />
                </div>
              ))}
            </div>
            <div className="contact-navbar-wrapper">
              <p>+00123498561</p>
              <p>email@domain.com</p>
            </div>
          </div>
          <div className="navbar-auth-btns">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </div>
        </div>
        <div className="navbar-mobile">
          <div className="navbar-hamburger">
            <img alt="hamburger" src="/icons/menu.svg" />
          </div>
          <div className="navbar-auth-btns">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </div>
        </div>
        <div className="navbar-bottom-content">
          <ul className="navlinks-container">
            {data.map((value, i) => (
              <li>{value.value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
