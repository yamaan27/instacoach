import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedCoaches from "./components/FeaturedCoaches";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturedSportsSection from "./components/FeaturedSportsSection";
import JoinInstacoachSection from "./components/JoinInstacoachSection";
import PreFooterSection from "./components/PreFooterSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <FeaturedCoaches />
      <HowItWorksSection />
      <FeaturedSportsSection />
      <JoinInstacoachSection />
      <PreFooterSection />
      <Footer />
    </div>
  );
}

export default App;
