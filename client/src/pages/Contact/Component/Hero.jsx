import {  Facebook, Instagram, Linkedin } from 'lucide-react';


const Hero = () => {
  return (
    <section className="bg-[#f9eac1] px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Column */}
        <div className="flex-1">
          <div className="mb-4">
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
                    Contact Us
                </h4>
            </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
            We'd love to hear from you
          </h2>
          <p className="text-base text-neutral-700">
            Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-8 text-neutral-900">
          <div>
            <h3 className="text-lg font-semibold">Let's talk!</h3>
            <p className="mt-1 text-sm">
              <a href="tel:+23409012346514" className="mr-4 hover:underline">+234 09012346514</a>
              <a href="mailto:hello@attrifoundation.com" className="hover:underline">hello@attrifoundation.com</a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Headoffice</h3>
            <p className="text-sm">
              8 Brewery Drive, Lagos,<br />
              Nigeria.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Branch Office</h3>
            <p className="text-sm">
              Opp Opolo round about, Yenagoa, Bayelsa,<br />
              Nigeria
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="#" className="text-neutral-900 hover:text-blue-600 transition">
            <Facebook />
            </a>
            <a href="#" className="text-neutral-900 hover:text-blue-400 transition">
            <Linkedin />
            </a>
            <a href="#" className="text-neutral-900 hover:text-blue-700 transition">
            <Instagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
