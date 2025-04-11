import { Activity, Building, GraduationCap, Users } from 'lucide-react';
const WhatWeStandFor = () => {
    return (
      <section className="bg-[#FCEDC6] py-10 px-6 md:px-20 font-roboto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h3 className="text-sm font-semibold text-[#1D2130] uppercase mb-6">
              What We Do
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D2130] mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-[#1D2130] mb-16">
              We create opportunities that empower and uplift.
            </p>
            <ul className="space-y-12">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 p-2 bg-black text-white flex items-center justify-center rounded-full">
                  <Building />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1D2130]">
                    Skill Training
                  </h4>
                  <p className="text-sm text-[#1D2130]">
                    Upskilling women to be self-reliant.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 p-2  bg-black text-white flex items-center justify-center rounded-full">
                    <GraduationCap />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1D2130]">
                    Educational Aid
                  </h4>
                  <p className="text-sm text-[#1D2130]">
                    Providing access to quality education for all.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 p-2 bg-black text-white flex items-center justify-center rounded-full">
                    <Activity />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1D2130]">
                    Healthcare Awareness
                  </h4>
                  <p className="text-sm text-[#1D2130]">
                    Spreading knowledge, improving lives.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 p-2 bg-black text-white flex items-center justify-center rounded-full">
                    <Users />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1D2130]">
                    Community Support
                  </h4>
                  <p className="text-sm text-[#1D2130]">
                    Building a support network for growth and safety.
                  </p>
                </div>
              </li>
            </ul>
          </div>
  
          {/* Right Image */}
          <div className="md:w-1/3 hidden md:block">
            <img
              src="/women-unite.png"
              alt="Women Unite"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default WhatWeStandFor;