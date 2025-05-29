import React from "react";
import "./PreFooterSection.css";

const PreFooterSection = () => {
  return (
    <section className="pre-footer-container">
      <div className="pre-footer-content">
        <div className="pre-footer-row">
          <div className="pre-footer-left instacoach-info">
            <h2>Instacoach</h2>
            <p>
              Book private lessons, virtual coaching, and college mentoring
              sessions with NCAA, professional, and Olympic athletes to help you
              get better everyday.
            </p>
          </div>

          <div className="pre-footer-right mailing-list">
            <h3>Join our mailing list</h3>
            <p>Join our mailing list to get the latest news and updates.</p>
            <div className="email-input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
                disabled
              />
              <button className="submit-btn" disabled>
                ➔
              </button>
            </div>
          </div>
        </div>

        <div className="pre-footer-row">
          <div className="pre-footer-left footer-links">
            <div className="link-column">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#policy">Policy</a>
                </li>
                <li>
                  <a href="#terms">Terms</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="link-column">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#feedback">Give us feedback</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pre-footer-right follow-us">
            <h3>Follow us</h3>
            <p className="social-placeholder">Social media links coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterSection;
