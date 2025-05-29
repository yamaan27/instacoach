import React from "react";
import "./HeroSection.css";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

const players = [
  "https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fhero-bubble-5.jpg&w=3840&q=75",
  "https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fhero-bubble-4.jpg&w=3840&q=75",
  "https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fhero-bubble-3.jpg&w=3840&q=75",
  "https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fhero-bubble-6.jpg&w=3840&q=75",
  "https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fhero-bubble-2.jpg&w=3840&q=75",
  "https://instacoach.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Finstacoach-static-public-assets%2Fhome-page%2Fhero-bubble-1.jpg&w=3840&q=75",
];

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {players.map((url, index) => (
          <img
            key={index}
            src={url}
            alt="athlete"
            className={`floating-image img-${index}`}
          />
        ))}
        <div className="text-center mt-10 md:mt-16 lg:mt-24 px-4">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl leading-snug flex justify-center flex-wrap gap-x-2">
            <span className="font-medium text-3xl md:text-5xl lg:text-6xl">
              Train with
            </span>
            <span className="font-bold text-3xl md:text-5xl lg:text-6xl">
              ELITE ATHLETES
            </span>
          </h1>

          <p className="coach-description">
            Book private lessons, virtual coaching, and college mentoring
            sessions with
            <br />
            NCAA, professional and Olympic athletes to help you get better
            everyday.
          </p>
        </div>

        <h3 className="mt-20">Find the perfect coach</h3>

        <div className="search-bar-container">
          <div className="search-section">
            <div className="label-icon">
              <MenuIcon className="icon" />
              <div className="label">Category</div>
            </div>
            <input type="text" placeholder="Type sport name you like" />
          </div>

          <div className="divider"></div>

          <div className="search-section">
            <div className="label-icon">
              <CalendarTodayIcon className="icon" />
              <div className="label">When</div>
            </div>
            <input type="text" placeholder="Whenever" />
          </div>

          <div className="divider"></div>

          <div className="search-section">
            <div className="label-icon">
              <LocationOnIcon className="icon" />
              <div className="label">Location</div>
            </div>
            <input type="text" placeholder="Enter address or zip" />
          </div>

          <button className="search-button">
            <SearchIcon style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
