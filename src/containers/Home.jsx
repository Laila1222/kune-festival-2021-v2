import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import HeaderVideo from "../assets/videos/header-video.mp4";
import ContentContainer from "../components/containers/ContentContainer";
import SectionHeadline from "../components/headlines/SectionHeadline";
import TextHeadline from "../components/headlines/TextHeadline";
import Navbar from "../components/navigation/Navigation";

import RegularButton from "../components/buttons/RegularButton";
import Art from "./Art";
import IntroSection from "../components/sections/IntroSection";
import ProgramSection from "../components/sections/ProgramSection";
import PracticalSection from "../components/sections/PracticalSection";
import TicketsSection from "../components/sections/TicketsSection";
import VisionSection from "../components/sections/VisionSection";
import AboutSection from "../components/sections/AboutSection";
import NavbarMobile from "../components/navigation/NavigationMobile";
import TopBackgroundImage from "../assets/images/lake-medium.png"
import SunImage from "../assets/images/sun.png";
import ContactSection from './../components/sections/ContactSection';

const BgVideoContainer = styled.div`
  height: 60vh;
  width: 100%;
  background: pink;

  & .video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const TicketButtonContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 100%;
    top: 45%;
  }
`;

const TicketButton = styled(Button)`
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  background-color: ${(props) => props.theme.palette.colors.orange};
  border: none;
  color: ${(props) => props.theme.palette.primary.main};
  width: 12rem;
  margin-top: 1rem;
  font-weight: bold;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 10rem;
  }

  &:hover {
    background: ${(props) => props.theme.palette.colors.brown};
  }
`;

const Headline = styled(Typography)`
  font-size: 2.9rem;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
  font-size: 2.5rem;
  }
`;

const HeaderBg = styled.div`
  height: 100vh;
  min-height: 100vh;
  /* background-image: ; */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 120%;
  position: relative;


`;

const DarkBg = styled.div`
  width: 100vw;
  height: 10rem;
  position: absolute;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const BgImage = styled.img`
margin-top: 20rem;
width: 100%;
position: relative;
z-index: 2;

// @media (max-width: 1200px) {
//   margin-top: 20rem;
// }

@media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
  position: absolute;
  margin-top: 0;
  bottom: -2rem;
}

@media (max-width: 960px) {
  
  bottom: -16rem;
}

@media (max-width: 850px) {
  bottom: -13rem;
}

@media (max-width: 750px) {
  bottom: -11rem;
}

@media (max-width: 650px) {
  bottom: -10rem;
}


@media (max-width: 550px) {
  bottom: -8rem;
}

@media (max-width: 480px) {
  bottom: -7rem;
}


@media (max-width: 420px) {
  bottom: -6rem;
}

@media (max-width: 320px) {
  bottom: -5rem;
}
`

const SunImageComp = styled.img`
  position: absolute;
  top: 14rem;
  right:13%;
  width: 10rem;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 5rem;
    top: 8rem;
    right: 2rem;
  }
`

function Home(props) {
  return (
    <div>
      {/* <BgVideoContainer>
        <video autoplay="autoplay" loop="true" muted className="video">
          <source src={HeaderVideo} type="video/mp4" /> Your browser is not
          supported.
        </video>
       
      </BgVideoContainer> */}
      <HeaderBg>
        <Navbar />
        <NavbarMobile />
        <TicketButtonContainer>
          <Headline component="h1">Kune Festival</Headline>
          <Headline>2021</Headline>
          <TicketButton variant="outlined">Tickets</TicketButton>
        </TicketButtonContainer>
        <SunImageComp src={SunImage} />
        <BgImage src={TopBackgroundImage} />
      </HeaderBg >

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
