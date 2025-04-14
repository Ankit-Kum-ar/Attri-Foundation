import React from "react";
import { awards } from "../../../constants";

const AwardsAndRecognitions = () => {

  return (
    <section className="bg-base-100 py-16 px-6 md:px-20 font-roboto">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-[#1D2130] mb-12">
          Awards & Recognitions
        </h2>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="w-16 h-16 mb-4">
                <img
                  src={award.icon}
                  alt={award.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Year */}
              <h4 className="text-lg font-bold text-[#1D2130] mb-2">
                {award.year}
              </h4>

              {/* Title */}
              <p className="text-md font-semibold text-[#1D2130] mb-1">
                {award.title}
              </p>

              {/* Location */}
              <p className="text-sm text-[#525560]">{award.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndRecognitions;