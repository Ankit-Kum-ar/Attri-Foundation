import { DonationForm, OurSupporters } from "../../components";
import { AboutUs, CallToActionWithEvents, DonationBreakdown, Hero, WhatWeStandFor } from "./components";

const Home = () => {
    return (
      <>
        <Hero />
        <DonationForm />
        <AboutUs />
        <OurSupporters px="20" />
        <WhatWeStandFor />
        <DonationBreakdown />
        <CallToActionWithEvents />
      </>
    );
  };
  
  export default Home;