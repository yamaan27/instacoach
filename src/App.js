import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroSection from "./components/HeroSection";
import FeaturedCoaches from "./components/FeaturedCoaches";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturedSportsSection from "./components/FeaturedSportsSection";
import JoinInstacoachSection from "./components/JoinInstacoachSection";
import PreFooterSection from "./components/PreFooterSection";

import HowItWorksPage from "./pages/HowItWorksPage";
import BecomeCoachPage from "./pages/BecomeCoachPage";

function App() {
  return (
    <Router>
      <div className="font-sans max-w-screen overflow-x-hidden mx-auto">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturedCoaches />
                <HowItWorksSection />
                <FeaturedSportsSection />
                <JoinInstacoachSection />
              </>
            }
          />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route
            path="/learn-more/become-a-coach"
            element={<BecomeCoachPage />}
          />
        </Routes>
        <PreFooterSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
