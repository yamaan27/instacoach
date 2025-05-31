// src/components/TestimonialCarousel.jsx
import React, { useState } from "react";
import "./TestimonialCarousel.css"; // Reuse existing CSS or rename if needed

const testimonials = [
  {
    img: "https://storage.googleapis.com/instacoach-static-public-assets/become-a-coach/testimonial-kennedy-wesley.png",
    text: `"I love Instacoach because it has provided me with the opportunity to connect with younger athletes pursuing high athletic goals! Instacoach adjusts things quickly to our busy schedules and has increased my number of clients significantly! I have made thousands of dollars since joining only a few months ago and have been so happy with the platform!"`,
    author: "Kennedy Wesley, Stanford Soccer",
  },
  {
    img: "https://storage.googleapis.com/instacoach-static-public-assets/become-a-coach/testimonial-riley-pittman.png", // Replace if not available
    text: `"Instacoach is the perfect job for a student athlete like myself. Not only can I charge however much I’d like, but the hours are as flexible as I make them and the Instacoach team works with me by providing opportunities to help me reach my goals."`,
    author: "Riley Pittman, Stanford Water Polo",
  },
  {
    img: "https://storage.googleapis.com/instacoach-static-public-assets/become-a-coach/testimonial-cole-hinkelman.png", // Replace if not available
    text: `"Instacoach provides an amazing opportunity for student-athletes like myself to give back to the communities that support us and to make money doing what we love. One of the best parts of working with Instacoach is the scheduling flexibility; I was able to earn about thousands this spring even with school and my sports season in full swing."`,
    author: "Cole Hinkelman, Stanford Baseball",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-carousel">
        <button className="nav left" onClick={handlePrev}>
          ←
        </button>

        <div className="testimonial-card">
          <img
            className="testimonial-img"
            src={testimonials[current].img}
            alt={testimonials[current].author}
          />
          <div className="testimonial-text">
            <p>{testimonials[current].text}</p>
            <p className="testimonial-author">
              <strong>{testimonials[current].author}</strong>
            </p>
          </div>
        </div>

        <button className="nav right" onClick={handleNext}>
          →
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
