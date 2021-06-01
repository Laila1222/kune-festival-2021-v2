import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import TopBackgroundImage from "../../assets/images/lake-medium.png";
import SunImage from "../../assets/images/sun.png";
import TopBackgroundImageMobile from "../../assets/images/lake-mobile.png";

const HeaderBg = styled.div`
  height: 100vh;
  min-height: 700px;
  /* background-image: ; */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 120%;
  position: relative;
  @media (max-width: 500px) {
    min-height: 
  }

  @media (min-width: 1200px) {
    min-height: 800px;
  }

  @media (min-width: 1300px) {
    min-height: 900px;
  }

  @media (min-width: 1400px) {
    min-height: 1000px;
  }

`;

const TicketButtonContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 100%;
    top: 35%;
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

const BgImage = styled.img`
  width: 100%;
  position: absolute;
  z-index: 2;
  bottom: -15rem;

  @media (max-width: 1200px) {
   bottom: -13rem;
  }

  @media (max-width: 1100px) {
    bottom: -10rem;
   }

   @media (max-width: 1000px) {
    bottom: -8rem;
   }

  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
   bottom: -13rem;
  }


  @media (max-width: 850px) {
    bottom: -11rem;
  }

  @media (max-width: 750px) {
    bottom: -9rem;
  }

  @media (max-width: 650px) {
    bottom: -8rem;
  }

  @media (max-width: 550px) {
    display: none;
  }

`;

const BgImageMobile = styled.img`
@media (max-width: 550px) {
  display: block;
  width: 100%;
  position: absolute;
  bottom: -7rem;
}

@media (max-width: 550px) {
  bottom: -5rem;
}

@media (max-width: 350px) {
  bottom: -3rem;
}
display: none;
`

const SunImageComp = styled.img`
  position: absolute;
  top: 6rem;
  right: 13%;
  width: 10rem;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 7rem;
    top: 15rem;
  }

  @media (max-width: 750px) {
    top: 18rem;
    width: 6rem;
  }

  @media (max-width: 600px) {
    width: 5rem;
    top: 20rem;
  }

  @media (max-width: 450px) {
    width: 4rem;
    top: 25rem;
    
  }
`;

function LandingSection(props) {
  return (
    <HeaderBg>
      <TicketButtonContainer>
        <Headline component="h1">Kune Festival</Headline>
        <Headline>2021</Headline>
        <TicketButton variant="outlined">Tickets</TicketButton>
      </TicketButtonContainer>
      <SunImageComp src={SunImage} />
      <BgImage src={TopBackgroundImage} />
      <BgImageMobile src={TopBackgroundImageMobile} />
    </HeaderBg>
  );
}

export default LandingSection;
