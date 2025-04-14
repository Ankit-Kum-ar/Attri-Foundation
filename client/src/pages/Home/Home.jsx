import { CallToActionWithEvents, OurSupporters } from "../../components";
import { AboutUs, DonationBreakdown, Hero, WhatWeStandFor } from "./components";

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