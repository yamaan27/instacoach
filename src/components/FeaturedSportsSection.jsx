import React, { useRef, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./FeaturedSportsSection.css";

const sports = [
  {
    name: "Basketball",
    image:
      "https://storage.googleapis.com/instacoach-static-public-assets/home-page/featured-sports/basketball-01.jpg",
  },
  {
    name: "Football",
    image:
      "https://storage.googleapis.com/instacoach-static-public-assets/home-page/featured-sports/football-01.jpg",
  },
  {
    name: "Soccer",
    image:
      "https://storage.googleapis.com/instacoach-static-public-assets/home-page/featured-sports/soccer-01.jpg",
  },
  {
    name: "Baseball",
    image:
      "https://storage.googleapis.com/instacoach-static-public-assets/home-page/featured-sports/baseball-01.jpg",
  },
  {
    name: "Chess",
    image:
      "https://storage.googleapis.com/instacoach-static-public-assets/home-page/featured-sports/chess-01.jpg",
  },
  {
    name: "Lacrosse",
    image:
      "https://storage.googleapis.com/instacoach-static-public-assets/home-page/featured-sports/lacrosse-01.jpg",
  },
];

const duplicatedSports = [...sports, ...sports, ...sports];

const FeaturedSportsSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const initialOffset = container.scrollWidth / 3;
    container.scrollLeft = initialOffset;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        container.scrollLeft = scrollWidth / 3;
      } else if (scrollLeft <= 1) {
        container.scrollLeft = (scrollWidth / 3) * 2 - clientWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="featured-sports-container">
      <h2>Featured Sports</h2>
      <div className="sports-scroll-container">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <ArrowBackIosIcon
            style={{ color: "#1273eb", fontSize: 24, marginLeft: 10 }}
          />
        </button>
        <div className="sports-cards" ref={scrollRef}>
          {duplicatedSports.map((sport, index) => (
            <div key={index} className="sport-card">
              <img src={sport.image} alt={sport.name} className="sport-image" />
              <h3>{sport.name}</h3>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          <ArrowForwardIosIcon style={{ color: "#1273eb", fontSize: 24 }} />
        </button>
      </div>
    </section>
  );
};

export default FeaturedSportsSection;
