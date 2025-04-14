import React from "react";
import CauseCard from "./CauseCard";
import { causes } from "../../../constants";

const CausesSection = () => {

  return (
    <section className="text-[#1D2130] py-16 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="3"
                viewBox="0 0 72 3"
                fill="none"
            >
                <path d="M0 1.50049H72" stroke="black" strokeWidth="2" />
            </svg>
            <h4 className="text-sm font-semibold uppercase text-neutral tracking-wider">
                The Causes We Champion
            </h4>
        </div>
        <h2 className="text-3xl font-bold text-[#1D2130] mb-8">
          Each card below represents a mission close to our heart — explore the
          diverse areas where your support sparks real change.
        </h2>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <CauseCard key={index} cause={cause} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;