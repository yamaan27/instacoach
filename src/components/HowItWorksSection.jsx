import React, { useState } from "react";
import "./HowItWorksSection.css";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState("students");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="how-it-works-container">
      <h2>How does Instacoach work?</h2>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "students" ? "active" : ""}`}
          onClick={() => handleTabChange("students")}
        >
          For Students
        </button>
        <button
          className={`tab ${activeTab === "coaches" ? "active" : ""}`}
          onClick={() => handleTabChange("coaches")}
        >
          For Coaches
        </button>
      </div>
      <div className="cards">
        {activeTab === "students" ? (
          <>
            <div className="card">
              <div className="header">
                <img
                  src="https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fstudent-section-image1.png&w=3840&q=75"
                  alt="Search icon"
                  className="icon"
                />
                <h3>Search</h3>
              </div>
              <p>Find the coach to help you reach your goals.</p>
            </div>
            <div className="card">
              <div className="header">
                <img
                  src="https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fstudent-section-image2.png&w=3840&q=75"
                  alt="Book icon"
                  className="icon"
                />
                <h3>Book</h3>
              </div>
              <p>
                Select your coach, the day, and finally the time in just a few
                clicks. We will send a follow up confirmation for your booking.
              </p>
            </div>
            <div className="card">
              <div className="header">
                <img
                  src="https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fstudent-section-image3.png&w=3840&q=75"
                  alt="Improve icon"
                  className="icon"
                />
                <h3>Improve</h3>
              </div>
              <p>
                Get ready to train with your coach and be sure to watch your
                post session video recapping your session and letting you know
                what drills to work on in between your sessions!
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="card">
              <div className="header">
                <img
                  src="https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fcoach-section-image1.png&w=3840&q=75"
                  alt="Create Profile icon"
                  className="icon"
                />
                <h3>Create Profile</h3>
              </div>
              <p>
                Sign up and create your coach profile in minutes, highlighting
                your experience and skills.
              </p>
            </div>
            <div className="card">
              <div className="header">
                <img
                  src="https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fcoach-section-image2.png&w=3840&q=75"
                  alt="Set Availability icon"
                  className="icon"
                />
                <h3>Set Availability</h3>
              </div>
              <p>
                Choose the days and times you're available to coach, giving you
                full control of your schedule.
              </p>
            </div>
            <div className="card">
              <div className="header">
                <img
                  src="https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fcoach-section-image3.png&w=3840&q=75"
                  alt="Get Booked icon"
                  className="icon"
                />
                <h3>Get Booked</h3>
              </div>
              <p>
                Start earning money by coaching students who book your sessions,
                helping them achieve their goals.
              </p>
            </div>
          </>
        )}
      </div>
      <button className="text-us-btn">
        <span role="img" aria-label="message">
          💬
        </span>{" "}
        Text us
      </button>
    </section>
  );
};

export default HowItWorksSection;
