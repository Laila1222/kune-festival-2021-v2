import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ContentContainer from "../containers/ContentContainer";
import SectionHeadline from "../headlines/SectionHeadline";
import TextHeadline from "../headlines/TextHeadline";
import PlaceholderImg from "../../assets/images/placeholder.png";
import SeeMoreLink from "../links/SeeMoreLink";
import { overridings } from "../../themes/LightTheme";
import { Link } from "react-router-dom";

const DescriptionText = styled(Typography)`
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  width: 90%;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 100%;
  }
`;

const ProgramSectionContainer = styled.div`
  min-height: 100vh;
  padding-top: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
   padding-top: 0;
  }
`;

const ProgramContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    display: block;
  }
`;

const CardContainer = styled.div`
  width: 30%;
  border-radius: 3px;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const ProgramContentContainer = styled.div`
  padding: 0.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    padding: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.colors.orange};
  font-size: 2.5rem;
  width: fit-content;
  margin-bottom: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 2rem;
  }
`;

const ProgramText = styled(Typography)`
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

function ProgramSection(props) {
  return (
    <ProgramSectionContainer>
      <Box ml="auto" mr="auto" width="fit-content">
        <Title variant="h4">Program</Title>
      </Box>
      <ProgramText variant="body2">
        Ea nostrud aute eiusmod labore minim ad Lorem. Officia adipisicing culpa
        voluptate ad aliquip commodo aliqua aliqua nulla duis adipisicing irure.
        Irure consequat duis voluptate ex nostrud do.
      </ProgramText>
      <ContentContainer>
        <Box pt="1rem">
          <ProgramContainer>
            <CardContainer>
              <Link to="/music">
                <Image src={PlaceholderImg} alt="placeholder" />
              </Link>

              <ProgramContentContainer>
                <Link to="/music">
                  <TextHeadline
                    title="Music"
                    color={overridings.palette.colors.orange}
                  />
                </Link>

                <DescriptionText variant="body1">
                  Minim proident proident incididunt ut consectetur ex occaecat.
                  Cillum qui eu veniam irure cupidatat et dolore nulla fugiat.
                  Proident irure commodo elit deserunt incididunt aute officia.
                </DescriptionText>
                <Box ml="auto" mr="auto" width="fit-content">
                  <Link to="/music">
                    <SeeMoreLink color={overridings.palette.colors.orange} />
                  </Link>
                </Box>
              </ProgramContentContainer>
            </CardContainer>
            <CardContainer>
              <Link to="/art">
                <Image src={PlaceholderImg} alt="placeholder" />
              </Link>

              <ProgramContentContainer>
                <Link to="/art">
                  <TextHeadline
                    title="Art"
                    color={overridings.palette.colors.orange}
                  />
                </Link>

                <DescriptionText variant="body1">
                  Irure excepteur consequat adipisicing enim ullamco laborum
                  veniam sunt esse anim quis.Duis mollit dolore sit Lorem sunt
                  ad pariatur aliqua. Adipisicing occaecat.Proident irure
                  commodo.
                </DescriptionText>
                <Box ml="auto" mr="auto" width="fit-content">
                  <Link to="/art">
                    <SeeMoreLink color={overridings.palette.colors.orange} />
                  </Link>
                </Box>
              </ProgramContentContainer>
            </CardContainer>
            <CardContainer>
              <Link to="/hangout">
                <Image src={PlaceholderImg} alt="placeholder" />
              </Link>

              <ProgramContentContainer>
                <Link to="/hangout">
                  <TextHeadline
                    title="Hangout"
                    color={overridings.palette.colors.orange}
                  />
                </Link>

                <DescriptionText variant="body1">
                  Minim proident proident incididunt ut consectetur ex occaecat.
                  Cillum qui eu veniam irure cupidatat et dolore nulla fugiat.
                  Proident irure commodo elit deserunt incididunt aute officia.
                </DescriptionText>
                <Box ml="auto" mr="auto" width="fit-content">
                  <Link to="/hangout">
                    <SeeMoreLink color={overridings.palette.colors.orange} />
                  </Link>
                </Box>
              </ProgramContentContainer>
            </CardContainer>
          </ProgramContainer>
        </Box>
      </ContentContainer>
    </ProgramSectionContainer>
  );
}

export default ProgramSection;
