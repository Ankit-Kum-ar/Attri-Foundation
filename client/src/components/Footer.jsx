import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0706] text-[#FFFFFF] py-10 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-10">
          {/* Logo Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-3xl font-bold md:mb-4">ATTRI</h2>
          </div>

          {/* Services, Company, and Legal Sections */}
          <div className="w-full md:w-3/4 flex justify-between">
            {/* Services Section */}
            <nav className="w-1/3">
              <h6 className="text-lg font-bold mb-4">Services</h6>
              <ul className="space-y-2 opacity-75">
                <li><a href="#" className="link link-hover md:text-sm text-xs">Community</a></li>
                <li><a href="#" className="link link-hover md:text-sm text-xs">Skill Development</a></li>
                <li><a href="#" className="link link-hover md:text-sm text-xs">Educational Aid</a></li>
                <li><a href="#" className="link link-hover md:text-sm text-xs">Healthcare </a></li>
              </ul>
            </nav>

            {/* Company Section */}
            <nav className="w-1/3">
              <h6 className="text-lg font-bold mb-4">Company</h6>
              <ul className="space-y-2 opacity-75">
                <li><a href="#" className="link link-hover md:text-sm text-xs">About Us</a></li>
                <li><a href="#" className="link link-hover md:text-sm text-xs">Our Mission</a></li>
                <li><a href="#" className="link link-hover md:text-sm text-xs">Our Team</a></li>
                <li><a href="#" className="link link-hover md:text-sm text-xs">Contact Us</a></li>
              </ul>
            </nav>

            {/* Legal Section */}
            <nav className="w-1/3">
              <h6 className="text-lg font-bold mb-4">Legal</h6>
              <ul className="space-y-2 opacity-75">
                <li><a href="#" className="link link-hover md:text-sm text-xs">Terms of Use</a></li>
                <li><a href="#" className="link link-hover md:text-sm text-xs">Privacy Policy</a></li>
                <li><a href="#" className="link link-hover md:text-sm text-xs">Cookie Policy</a></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <form className="w-full md:w-1/2">
          <h6 className="md:text-4xl text-3xl font-bold mb-4">Subscribe to get latest updates</h6>
          <p className="text-sm text-gray-400 mb-4">
            Stay updated with our latest news and events.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="youremail@example.com"
              className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
            />
            <button
              type="submit"
              className="btn btn-primary cursor-pointer transition duration-300 ease-in-out text-white px-4 py-2 rounded-r-md  focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        <p>© 2025 ATTRI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;