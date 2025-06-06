import React from "react";
import CoachCard from "./CoachCard";
import coaches from "../data/coaches";

const FeaturedCoaches = () => {
  return (
    <section className="px-4 sm:px-6 py-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Coaches</h2>
        <a href="#" className="text-blue-500 font-medium">
          See All
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {coaches.map((coach, idx) => (
          <CoachCard key={idx} coach={coach} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCoaches;
