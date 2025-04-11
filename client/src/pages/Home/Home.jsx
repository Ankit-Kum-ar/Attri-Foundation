import { OurSupporters } from "../../components";
import { AboutUs, CallToActionWithEvents, DonationBreakdown, Hero, WhatWeStandFor } from "./components";

const Home = () => {
    return (
      <>
        <Hero />
        <AboutUs />
        <OurSupporters px="20" />
        <WhatWeStandFor />
        <DonationBreakdown />
        <CallToActionWithEvents />
      </>
    );
  };
  
  export default Home;