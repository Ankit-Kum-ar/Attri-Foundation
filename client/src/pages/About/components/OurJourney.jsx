const OurJourney = () => {
  return (
    <section className="bg-[#FCD34D] py-16 my-6 px-6 md:px-20 rounded-lg font-roboto w-11/12 mx-auto left-0 right-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h4 className="text-sm font-semibold uppercase text-[#1D2130] tracking-wider mb-4">
            Our Journey
          </h4>
          <h2 className="text-4xl font-bold text-[#1D2130] mb-6">
            Turning passion into progress
          </h2>
          <p className="text-lg text-[#525560] mb-8">
            Since our inception, we’ve worked across diverse causes — from
            education to environment, child safety to animal welfare. Guided by
            compassion and community support, our journey reflects the real
            impact we’re proud to create.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#1D2130]">5000+</h3>
              <p className="text-sm text-[#525560]">Lives Impacted</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1D2130]">200+</h3>
              <p className="text-sm text-[#525560]">Volunteers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1D2130]">100+</h3>
              <p className="text-sm text-[#525560]">Communities</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1D2130]">10+</h3>
              <p className="text-sm text-[#525560]">Causes Supported</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/our-journey.png" // Replace with the actual image path
            alt="Our Journey"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurJourney;