import React from "react";

const Hero = () => {
  return (
    <section className="text-[#1D2130] py-16 px-6 md:px-20 rounded-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-36 md:justify-between">
        {/* Left Content */}
        <div className="md:w-1/2">
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
                    What We Do
                </h4>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-12">
                Making a Difference, <br /> One Cause at a Time
            </h2>
            <p className="text-[#525560]">
                From education and environment to animal welfare and beyond, our
                work is rooted in compassion and focused on impact. Each initiative
                reflects our commitment to a more just, kind, and sustainable world.
            </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 hidden md:block">
          <img
            src="/do.png" // Replace with the actual image path
            alt="Making a Difference"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;