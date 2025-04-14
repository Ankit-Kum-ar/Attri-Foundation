const AboutUs = () => {
  return (
    <section className="bg-base-100 md:my-20 my-16 px-6 md:px-20 font-roboto">
      <div className="flex flex-col md:flex-row items-center md:gap-36 md:justify-between">
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
                    Know About Us
                </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2130] mb-6">
            Together, We Rise.
          </h2>
          <p className="text-lg text-[#1D2130] mb-6">
            Empowering women through education, awareness, and opportunity.
          </p>
          <p className="text-[#525560] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Who you are and what
            sparked this mission.
          </p>
          <p className="text-[#525560] mb-6">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo
            cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere. The impact made so far or the vision for the future.
          </p>
          <button className="btn btn-warning text-black font-semibold">
            Learn more
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 hidden md:block">
          <img
            src="/empowering-women.png" // Replace with your image path
            alt="Empowering Women"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;