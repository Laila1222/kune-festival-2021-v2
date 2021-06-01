import React from "react";
import styled from "styled-components";
import Navbar from "../components/navigation/Navigation";

import IntroSection from "../components/sections/IntroSection";
import ProgramSection from "../components/sections/ProgramSection";
import VisionSection from "../components/sections/VisionSection";
import AboutSection from "../components/sections/AboutSection";
import NavbarMobile from "../components/navigation/NavigationMobile";

import ContactSection from "./../components/sections/ContactSection";
import LandingSection from "../components/sections/LandingSection";

function Home(props) {
  return (
    <div>
      <Navbar />
      <NavbarMobile />
      <LandingSection />

      <IntroSection />

      <VisionSection />

      <ProgramSection />

      <AboutSection />

      <ContactSection />

      {/* <PracticalSection />

      <TicketsSection /> */}
    </div>
  );
}

export default Home;
