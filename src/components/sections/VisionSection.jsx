import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { overridings } from "../../themes/LightTheme";
import RegularButton from "../buttons/RegularButton";
import VisionImage from "../../assets/images/island.png";

const VisionSectionContainer = styled(Box)`
  min-height: 100vh;
  padding-top: 3rem;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    padding-top: 0rem;
  }
`;

const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.colors.green};
  font-size: 2.5rem;
  width: fit-content;
  margin-bottom: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 2rem;
  }
`;

const VisionText = styled(Typography)`
  margin-left: auto;
  margin-right: auto;
  width: 48%;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 80%;
    font-size: 1rem;
  }
`;

const VisionImageComp = styled.img`
  width: 100%;

`

function VisionSection(props) {
  return (
    <VisionSectionContainer>
      <Box mb="2rem">
      <Box ml="auto" mr="auto" width="fit-content">
        <Title variant="h4">Our vision</Title>
      </Box>
      <VisionText variant="body2">
        Ea nostrud aute eiusmod labore minim ad Lorem. Officia adipisicing culpa
        voluptate ad aliquip commodo aliqua aliqua nulla duis adipisicing irure.
        Irure consequat duis voluptate ex nostrud do. Aliqua sit veniam nisi
        aute excepteur cillum pariatur Lorem minim dolor magna quis.
      </VisionText>
      <VisionText variant="body2">
        Eiusmod exercitation minim culpa cillum enim excepteur duis elit
        cupidatat laborum sunt. Nostrud fugiat in enim laboris anim pariatur
        quis. Magna sint mollit cupidatat irure eiusmod amet do. Velit irure et
        aliqua proident est veniam sint proident voluptate quis anim do amet.
        Ullamco deserunt cillum reprehenderit voluptate anim nostrud qui.
      </VisionText>
      <Box ml="auto" mr="auto" mt="2rem" width="fit-content">
        <RegularButton
          title="Read more"
          color={overridings.palette.colors.green}
          hoverBackground={overridings.palette.colors.green}
          hoverColor={overridings.palette.primary.main}
          borderWidth="2px"
        />
      </Box>
      </Box>
      <VisionImageComp src={VisionImage} />
    </VisionSectionContainer>
  );
}

export default VisionSection;
