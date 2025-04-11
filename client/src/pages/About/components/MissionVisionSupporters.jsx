import { OurSupporters } from "../../../components";

const MissionVisionSupporters = () => {
  return (
    <section className="bg-[#FCEDC6] py-16 font-roboto">
      <div className="container mx-auto px-6 md:px-20">
        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Mission */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-[#1D2130] tracking-wider mb-4">
              Our Mission
            </h4>
            <h2 className="text-2xl font-bold text-[#1D2130] mb-4">
              Who We Are & Why We Exist
            </h2>
            <p className="text-lg text-[#525560]">
              Founded with a passion for positive change, [NGO Name] is
              dedicated to tackling the most pressing challenges faced by
              society — be it education, environment, shelter, or care. We unite
              changemakers and communities to uplift lives and protect what
              matters.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-[#1D2130] tracking-wider mb-4">
              Our Vision
            </h4>
            <h2 className="text-2xl font-bold text-[#1D2130] mb-4">
              What We Do & Our Impact
            </h2>
            <p className="text-lg text-[#525560]">
              Our work spans across domains like education access,
              environmental sustainability, child protection, homelessness, and
              animal welfare. Through partnerships, outreach programs, and
              grassroots initiatives, we aim to build a better tomorrow for all.
            </p>
          </div>
        </div>

        {/* Supporters Section */}
        <div className="w-full">
          <OurSupporters bgColor="bg-[#FCEDC6]" />
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSupporters;