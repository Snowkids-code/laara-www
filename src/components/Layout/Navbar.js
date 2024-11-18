import React from "react";

const icons = [
  "/icons/whatsapp.svg",
  "/icons/instagram.svg",
  "/icons/facebook.svg",
  "/icons/twitter.svg",
];

const links = ["Home", "Category", "Pages", "Dashboard", "News", "Contact"];

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
            <img alt="hamburger" src="/icons/menu.svg"/>
          </div>
          <div className="navbar-auth-btns">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </div>
        </div>
        <div className="navbar-bottom-content">
            <ul className="navlinks-container">
                {links.map((value, i) => (
                    <li key={i}>{value}</li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}
