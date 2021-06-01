import React from "react";
import styled from "styled-components";
import SectionHeadline from "../headlines/SectionHeadline";
import { Typography, Box } from "@material-ui/core";
import WaterImage from "../../assets/images/contact-image2.png";
import SunImage from "../../assets/images/sun.svg";
import LogoImage from "../../assets/images/logo-rectangle.png";

const MainContainer = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    margin-top: 5rem;
  }
`;

const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.colors.orange};
  font-size: 2.5rem;
  width: fit-content;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 2rem;
  }
`;

const ContactText = styled(Typography)`
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 80%;
    font-size: 1rem;
  }
`;

const WaterImageComp = styled.img`
width: 100%;
position: relative;
`


const SunImageComp = styled.img`
position: absolute;
left: 22rem;
top: 2rem;
@media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
left: 5rem;
width: 5rem;
top: -.5rem;
}
`

const LogoImageComp = styled.img`
    width: 12rem;
    z-index: 3;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
        width: 5rem;
    }

`

const LogoContainer = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    bottom: 3rem;
    @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
        bottom: 1.5rem;

    }
`

function ContactSection(props) {
  return (
    <MainContainer>
      <Title variant="h4">Contact</Title>
      <ContactText variant="body2">
        Velit laboris aliquip consequat sit laboris nostrud consectetur non sunt
        occaecat labore consequat sint. Culpa Lorem officia ex nostrud sit et
        dolor. Esse ut officia occaecat ullamco fugiat sit dolore cillum sit do
        dolore ex sint nulla. Elit Lorem mollit excepteur adipisicing ea labore.
        Et sint Lorem eu eu voluptate pariatur nulla dolor ad. Mollit ullamco
        consequat qui ullamco exercitation labore in pariatur.
      </ContactText>
      <Box mt="8rem" position="relative" width="100%">
         <LogoContainer ><LogoImageComp src={LogoImage} /></LogoContainer> 
      <SunImageComp src={SunImage} />
      <WaterImageComp src={WaterImage} />
      </Box>
    </MainContainer>
  );
}

export default ContactSection;
