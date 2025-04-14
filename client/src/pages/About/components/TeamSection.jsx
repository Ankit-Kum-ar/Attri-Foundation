import React from "react";
import TeamCard from "./TeamCard";
import { teamMembers } from "../../../constants";

const TeamSection = () => {

  return (
    <section className="bg-base-100 py-16 px-6 md:px-20 font-roboto">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-[#1D2130] mb-4">
          Hearts Behind the Mission
        </h2>
        <p className="text-lg text-[#525560] mb-12">
          Meet the dreamers, doers, and changemakers powering our purpose.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;