import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import RegularButton from "../buttons/RegularButton";
import ContentContainer from "../containers/ContentContainer";
import { overridings } from "../../themes/LightTheme";
import AboutImage from "../about-image/AboutImage";

const AboutContainer = styled(Box)`
  min-height: 100vh;
  padding-top: 6rem;
`;

const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.colors.blue};
  font-size: 2.5rem;
  width: fit-content;
  margin-bottom: 1.5rem;
  font-weight: bold;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 2rem;
  }
`;

const AboutText = styled(Typography)`
  width: 50%;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  margin-bottom: 1rem;
  font-size: 1.1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 100%;
    font-size: 1rem;
  }
`;

function AboutSection(props) {
  return (
    <AboutContainer>
      <ContentContainer>
        <Title variant="h4">About the island</Title>
        <AboutText>
          Mollit mollit labore magna in occaecat laborum sunt. Laboris tempor
          mollit do exercitation tempor adipisicing. Minim exercitation cillum
          laboris ea sit quis pariatur. Non qui ut minim eu ipsum.
        </AboutText>
        <AboutText>
          Magna occaecat culpa sit sunt Lorem. Irure amet quis in veniam. Cillum
          voluptate cillum cillum sit amet ipsum occaecat enim excepteur ad id
          sunt. Do est aliquip velit voluptate consectetur laborum. Et est nulla
          aliquip ex.
        </AboutText>
        <RegularButton
          title="Read more"
          color={overridings.palette.colors.blue}
          hoverBackground={overridings.palette.colors.blue}
          hoverColor={overridings.palette.primary.main}
          borderWidth="2px"
        />
      </ContentContainer>
      <AboutImage />
    </AboutContainer>
  );
}

export default AboutSection;
