import { AboutUs, CallToActionWithEvents, DonationBreakdown, Hero, OurSupporters, WhatWeStandFor } from "./components";

const Home = () => {
    return (
      <>
        <Hero />
        <AboutUs />
        <OurSupporters />
        <WhatWeStandFor />
        <DonationBreakdown />
        <CallToActionWithEvents />
      </>
    );
  };
  
  export default Home;