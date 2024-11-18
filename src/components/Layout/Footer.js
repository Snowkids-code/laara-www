import React from "react";
import data from "../../data/Footer.json";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-top-container">
          <div className="footer-top-wrapper">
            <div className="footer-top-left-wrapper">
              <img alt="mail" src="/icons/email.svg" width="96" />
              <div>
                <p>Get the latest news and offers</p>
                <p>Subscribe to our newsletter</p>
              </div>
            </div>
            <div className="footer-top-right-wrapper">
              <input placeholder="Enter you email address"/>
              <button className="login-btn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom-container">
          <div className="footer-bottom-wrapper">
            <div className="footer-left-wrapper">
              <h3>Need Any Help?</h3>
              <div>
                <p className="footer-titles">Call 24/7 for any help</p>
                <p className="footer-info">+0536514654823</p>
              </div>
              <div>
                <p className="footer-titles">Mail Our Support Team</p>
                <p className="footer-info">email@domain.com</p>
              </div>
              <div>
                <p className="footer-titles">Follow us on</p>
                <p className="footer-info">+0536514654823</p>
              </div>
            </div>
            <div className="footer-right-wrapper">
              {data.map((item, i) => (
                <div key={i} className="footer-value-wrapper">
                  <h3>{item.title}</h3>
                  <ul>
                    {item.details.map((value, i) => (
                      <li>{value}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
