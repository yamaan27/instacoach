import React from "react";

const CoachCard = ({ coach }) => {
  return (
    <div className="bg-white sm:shadow-md rounded-xl p-2 sm:p-4 overflow-hidden">
      <img
        src={coach.image}
        alt={coach.name}
        className="rounded-2xl sm:rounded-lg w-full h-[200px] sm:h-[300px] object-cover mb-4"
      />
      <div className="text-sm text-gray-500">{coach.location}</div>
      <h3 className="text-lg font-bold">{coach.name}</h3>

      <div className="flex items-center space-x-1 mt-1">
        <span className="text-[14px] font-medium text-blue-600 mr-1">
          {coach.sport}
        </span>
        <span className="text-[14px] font-medium text-gray-500">
          {coach.role}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-2 pt-2 border-t border-gray-200">
        {coach.bio}
      </p>
    </div>
  );
};

export default CoachCard;
