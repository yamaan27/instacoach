import React from "react";
import "./PreFooterSection.css";

const PreFooterSection = () => {
  return (
    <section className="pre-footer-container">
      <div className="pre-footer-content">
        {/* Wrapper to control order */}
        <div className="flex flex-col gap-[40px]">
          {/* Move this row ABOVE on mobile using order */}
          <div className="pre-footer-row order-1 md:order-2">
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
              <h3 className="text-[20px] font-semibold mb-[10px] text-white">
                Follow us
              </h3>
              <p className="social-placeholder">
                Social media links coming soon
              </p>
            </div>
          </div>

          {/* This section should come after in mobile, before in desktop */}
          <div className="pre-footer-row order-2 md:order-1">
            <div className="pre-footer-left instacoach-info">
              <h2>Instacoach</h2>
              <p>
                Book private lessons, virtual coaching, and college mentoring
                sessions with NCAA, professional, and Olympic athletes to help
                you get better everyday.
              </p>
            </div>

            <div className="pre-footer-right mailing-list hidden md:flex">
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
        </div>
      </div>
    </section>
  );
};

export default PreFooterSection;
