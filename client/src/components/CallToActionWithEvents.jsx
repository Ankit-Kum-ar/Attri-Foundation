import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CallToActionWithEvents = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDonateClick = () => {
    if (location.pathname === "/") {
      // If already on the home page, scroll to the Donation section
      const donationSection = document.getElementById("donation-section");
      if (donationSection) {
        donationSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the home page and scroll to the Donation section
      navigate("/");
      setTimeout(() => {
        const donationSection = document.getElementById("donation-section");
        if (donationSection) {
          donationSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure the DOM is updated after navigation
    }
  };

  const events = [
    {
      date: "13 APR",
      title: "A day with our wonderful children",
      description: "Next Events",
    },
    {
      date: "25 APR",
      title: "Seminar: Caring for children with autism",
      description: "Next Events",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-10 px-6 md:px-20 font-roboto">
      {/* Call to Action Section */}
      <div
        className="relative bg-cover bg-center rounded-lg overflow-hidden mb-10"
        style={{ backgroundImage: "url('/cta-background.png')" }}
      >
        <div className=" bg-opacity-50 p-10 md:p-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a <span className="text-[#F2C94C]">Difference?</span>
          </h2>
          <p className="text-lg mb-6">
            Connect with us and be the change in someone's life.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#F2C94C] text-white md:px-6 md:py-3 p-2 text-sm md:text-base rounded-md font-semibold hover:bg-[#F2C94C]/90 cursor-pointer transition">
              Join as a Volunteer
            </button>
            <button
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 cursor-pointer transition"
              onClick={handleDonateClick}
            >
              Donate
            </button>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Our Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-[#FCD34D] p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-black text-white text-center px-4 py-2 rounded-md">
                  <p className="text-lg font-bold">{event.date.split(" ")[0]}</p>
                  <p className="text-sm">{event.date.split(" ")[1]}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-700">{event.description}</p>
                  <h4 className="text-lg font-bold">{event.title}</h4>
                </div>
              </div>
              <button className="flex items-center gap-2 text-black font-semibold">
                <span>Learn More</span>
                <span className="text-xl">&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionWithEvents;