import { useLocation, useNavigate } from "react-router-dom";

const Hero = () => {
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

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/home-bg.png')", // Replace with your image URL
      }}
    >
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-10 text-left text-white font-roboto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Empowering Women <br /> Transforming Futures.
        </h1>
        <p className="text-xl md:text-5xl mb-6 text-[#D1DBFF] md:font-bold">
          Bringing change, one click at a time
        </p>
        <button className="btn btn-primary" onClick={handleDonateClick}>
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Hero;