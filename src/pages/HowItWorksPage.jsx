// src/pages/HowItWorksPage.jsx
import React from "react";
import "./HowItWorksPage.css";

const HowItWorksPage = () => {
  return (
    <>
      <section className="how-it-works-wrapper">
        <div className="text-section">
          <h1 className="how-it-works-title">
            Elevate Your Game with{" "}
            <span className="highlight2">Instacoach!</span>
          </h1>
          <p className="how-it-works-subtitle2">
            Unleashing Your Athletic Potential through Elite <br />
            Athlete Coaching and Mentorship
          </p>
        </div>

        <div className="image-section">
          <button className="browse-coaches-btn">Browse coaches →</button>
          <img
            src="https://storage.googleapis.com/instacoach-static-public-assets/how-it-works/hero.png"
            alt="Hero"
            className="how-it-works-img"
          />
        </div>
      </section>

      {/* How it Works? Section - Step 1 */}
      <section className="how-it-works-steps-section">
        <h2 className="how-it-works-heading pb-24">
          <span className="less-bold">How it</span>{" "}
          <span className="highlight-bold">Works?</span>
        </h2>

        <div className="steps-and-details-container">
          <div className="steps-container">
            <div className="step-card step-1">
              <img
                src="https://storage.googleapis.com/instacoach-static-public-assets/how-it-works/search-for-a-coach-frame1.png"
                className="coach-image"
                alt="Water Polo Player"
              />
              <div className="step-details">
                <p className="coach-name">Riley Pittman</p>
                <p className="coach-role">Water Polo • Attacker</p>

              </div>
            </div>

            <div className="step-card step-2">
              <img
                src="https://storage.googleapis.com/instacoach-static-public-assets/how-it-works/search-for-a-coach-frame2.png"
                className="coach-image"
                alt="Softball Catcher"
              />
              <div className="step-details">
                <p className="coach-name text-white">Kylie Saum</p>
                <p className="text-[13px] font-medium text-white">
                  Softball • Catcher
                </p>

              </div>
            </div>

            <div className="step-card step-3">
              <img
                src="https://storage.googleapis.com/instacoach-static-public-assets/how-it-works/search-for-a-coach-frame3.jpg"
                className="coach-image"
                alt="Basketball Forward"
              />
              <div className="step-details">
                <p className="coach-name">Spencer Jones</p>
                <p className="coach-role">Basketball • Forward</p>

              </div>
            </div>
          </div>

          <div className="step-description">
            <div className="step-number">
              <span className="number">1</span>
            </div>
            <span className="step-label px-3">Search for a coach</span>
            <h3>Find the right coach</h3>
            <p>
              Find the coach to help you reach your goals. Filter by Sport,
              Position, Location and more. Review their profiles to browse the
              different session types as well as information on their coaching
              focus areas.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Step 2: Book a Session */}
      <section className="how-it-works-steps-section pt-28">
        <div className="steps2-and-details-container">
          <div className="step-description">
            <div className="step-number">
              <span className="number">2</span>
            </div>
            <span className="step-label px-3">Book your session</span>
            <h3>Book an in-person, virtual, or group lesson</h3>
            <p>
              Once you find the coach that you're looking for, select the day
              and time in just a few clicks. We will send a follow up
              confirmation for your booking.
            </p>
          </div>

          <div className="steps-container">
            <div className="step-4">
              <img
                src="https://storage.googleapis.com/instacoach-static-public-assets/how-it-works/book-your-session-frame-large.JPG"
                className="coach-image large-image"
                alt="Group Lesson"
              />
            </div>

            <div className="step-card step-5 small-image-card">
              <img
                src="https://storage.googleapis.com/instacoach-static-public-assets/how-it-works/book-your-seesion-frame-small.jpg"
                className="coach-image small-image"
                alt="Individual Lesson"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works-steps-section pt-28 pb-12">
        <div className="steps-and-details-container">
          <div className="steps-container">
            <div className="step2-card step-1">
              <img
                src="https://storage.googleapis.com/instacoach-static-public-assets/how-it-works/improve-frame1.jpg"
                className="coach2-image"
                alt="Water Polo Player"
              />
            </div>

            <div className="step-card step-7">
              <video
                className="coach-video"
                controls
                muted
                autoPlay
                loop
                playsInline
              >
                <source
                  src="https://storage.googleapis.com/instacoach-static-public-assets/how-it-works/improve-frame2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="step-description">
            <div className="step-number">
              <span className="number">3</span>
            </div>
            <span className="step-label px-3">Improve</span>
            <h3>Build a great connection</h3>
            <p>
              Get ready to train with your coach and be sure to watch your post
              session video recapping your session and letting you know what
              drills to work on in between your sessions!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;
