import React from "react";
import "./JoinInstacoachSection.css";

const JoinInstacoachSection = () => {
  return (
    <section className="join-instacoach-container">
      <div className="join-instacoach-content">
        <div className="join-text">
          <h2>Join Instacoach!</h2>
          <p className="join-description">
            Earn upwards of $2,500 per month - set your own rate and schedule.
            Earn flexibly and help people reach their goals!
          </p>
          <button className="join-cta">Become a Coach</button>
        </div>
        <div className="join-image">
          <img
            src="https://storage.googleapis.com/instacoach-static-public-assets/home-page/join-instacoach.png"
            alt="Join Instacoach"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinInstacoachSection;
