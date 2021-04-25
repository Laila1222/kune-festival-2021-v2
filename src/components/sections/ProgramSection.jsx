import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ContentContainer from "../containers/ContentContainer";
import SectionHeadline from "../headlines/SectionHeadline";
import TextHeadline from "../headlines/TextHeadline";
import PlaceholderImg from "../../assets/images/placeholder.png";
import RegularButton from "../buttons/RegularButton";
import SeeMoreLink from "../links/SeeMoreLink";

const DescriptionText = styled(Typography)`
  margin-bottom: 1rem;
`;

const ProgramSectionContainer = styled.div`
  // height: 100vh;
  background: ${(props) => props.theme.palette.secondary.main};
`;

const ProgramContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArtContainer = styled.div`
  width: 48%;
  border: 1px solid ${(props) => props.theme.palette.primary.light};
  border-radius: 3px;
`;

const MusicContainer = styled.div`
  width: 48%;
  border: 1px solid ${(props) => props.theme.palette.primary.light};
  border-radius: 3px;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

const ProgramContentContainer = styled.div`
  padding: 0.5rem;
`;

function ProgramSection(props) {
  return (
    <ProgramSectionContainer>
      <ContentContainer>
        <Box pt="1rem">
          <SectionHeadline title="Program" component="h3" />
          <ProgramContainer>
            <MusicContainer>
              <Image src={PlaceholderImg} alt="placeholder" />
              <ProgramContentContainer>
                <TextHeadline title="Music" />
                <DescriptionText variant="body1">
                  Minim proident proident incididunt ut consectetur ex occaecat.
                  Cillum qui eu veniam irure cupidatat et dolore nulla fugiat.
                  Proident irure commodo elit deserunt incididunt aute officia.
                  Amet consequat ut consectetur dolor sint mollit.
                </DescriptionText>
                <SeeMoreLink />
              </ProgramContentContainer>
            </MusicContainer>
            <ArtContainer>
              <Image src={PlaceholderImg} alt="placeholder" />
              <ProgramContentContainer>
                <TextHeadline title="Art" />
                <DescriptionText variant="body1">
                  Irure excepteur consequat adipisicing enim ullamco laborum
                  veniam sunt esse anim quis.Duis mollit dolore sit Lorem sunt
                  ad pariatur aliqua. Adipisicing occaecat dolore ullamco in
                  veniam cupidatat amet.
                </DescriptionText>
                <SeeMoreLink />
              </ProgramContentContainer>
            </ArtContainer>
          </ProgramContainer>
        </Box>
      </ContentContainer>
    </ProgramSectionContainer>
  );
}

export default ProgramSection;
