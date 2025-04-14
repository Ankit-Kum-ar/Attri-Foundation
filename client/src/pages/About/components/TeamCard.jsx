import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const TeamCard = ({ member }) => {
  return (
    <div className="flex flex-col items-center bg-base-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Role */}
      <h4 className="text-lg font-bold text-[#1D2130] mb-2">{member.name}</h4>
      <p className="text-sm text-[#525560] mb-4">{member.role}</p>

      {/* Social Links */}
      <div className="flex gap-4">
        <a
          href={member.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#525560] hover:text-[#1D2130] transition"
        >
          <Facebook size={20} />
        </a>
        <a
          href={member.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#525560] hover:text-[#1D2130] transition"
        >
          <Twitter size={20} />
        </a>
        <a
          href={member.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#525560] hover:text-[#1D2130] transition"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;