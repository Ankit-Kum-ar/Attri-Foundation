import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const OurSupporters = ({ bgColor = "bg-base-100", px = "0" }) => {
  const [duration, setDuration] = useState(10); // Default duration

  useEffect(() => {
    // Adjust duration based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration(5); // Faster animation for mobile
      } else {
        setDuration(10); // Default animation for larger screens
      }
    };

    handleResize(); // Set initial duration
    window.addEventListener("resize", handleResize); // Listen for screen size changes

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <section className={`${bgColor} my-16 px-4 md:px-${px}  font-roboto`}>
      <div className="text-center mb-8 flex justify-start items-center gap-4">
        <h4 className="text-lg font-semibold text-[#1D2130] mb-2">
          OUR SUPPORTERS
        </h4>
        <hr className="border-2 border-[#E5E5E5] w-10/12 " />
      </div>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-20 items-center w-max"
          animate={{ x: ["0%", "-50%"] }} // Move halfway to create seamless effect
          transition={{
            repeat: Infinity,
            duration: duration, // Dynamic duration based on screen size
            ease: "linear",
          }}
        >
          {/* Logos */}
          <div className="flex gap-20">
            <img src="/OurService-logo.png" alt="Supporter 1" className="mx-auto" />
            <img src="/OurService-logo.png" alt="Supporter 2" className="mx-auto" />
            <img src="/OurService-logo.png" alt="Supporter 3" className="mx-auto" />
            <img src="/OurService-logo.png" alt="Supporter 4" className="mx-auto" />
            <img src="/OurService-logo.png" alt="Supporter 5" className="mx-auto" />
            <img src="/OurService-logo.png" alt="Supporter 6" className="mx-auto" />
          </div>
          {/* Duplicate Logos for Seamless Scrolling */}
          <div className="flex gap-20">
            <img src="/OurService-logo.png" alt="Supporter 1" className="mx-auto" />
            <img src="/OurService-logo.png" alt="Supporter 2" className="mx-auto" />
            <img src="/OurService-logo.png" alt="Supporter 3" className="mx-auto" />
            <img src="/OurService-logo.png" alt="Supporter 4" className="mx-auto" />
            <img src="/OurService-logo.png" alt="Supporter 5" className="mx-auto" />
            <img src="/OurService-logo.png" alt="Supporter 6" className="mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurSupporters;