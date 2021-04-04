import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ContentContainer from "../containers/ContentContainer";
import SectionHeadline from "../headlines/SectionHeadline";
import PlaceHolderImg from "../../assets/images/placeholder.png";
import TextHeadline from "../headlines/TextHeadline";
import RegularButton from "../buttons/RegularButton";

const IntroSectionContainer = styled.div``;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DescriptionTextContainerRight = styled.div`
  margin-left: 3rem;
  margin-bottom: 2rem;
  width: 60%;
`;
const DescriptionTextContainerLeft = styled.div`
  margin-right: 3rem;
  margin-bottom: 3rem;
  width: 60%;
`;

const DescriptionText = styled(Typography)`
  margin-bottom: 1rem;
`;

const DescriptionImageContainer = styled.div`
  width: 40%;
`;

const DescriptionImage = styled.img`
  width: 100%;
`;

const LightBG = styled.div`
  background-color: ${(props) => props.theme.palette.secondary.main};
`;

function IntroSection(props) {
  return (
    <IntroSectionContainer>
      <ContentContainer>
        <Box pt="2rem">
          <SectionHeadline title="Intro part" component="h2" />

          <DescriptionContainer>
            <DescriptionImageContainer>
              <DescriptionImage src={PlaceHolderImg} alt="Placeholder" />
            </DescriptionImageContainer>
            <DescriptionTextContainerRight>
              <TextHeadline title="Headline" component="h3" />
              <DescriptionText variant="body1">
                Prow scuttle parrel provost Sail ho shrouds spirits boom
                mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
                nest nipperkin grog yardarm hempen halter furl. Swab barque
                interloper chantey doubloon starboard grog black jack gangway
                rutters. Swab barque interloper chantey doubloon starboard grog
                black jack gangway rutters. Swab barque interloper chantey
                doubloon.
              </DescriptionText>
            </DescriptionTextContainerRight>
          </DescriptionContainer>
        </Box>
      </ContentContainer>
      <LightBG>
        <ContentContainer>
          <DescriptionContainer>
            <DescriptionTextContainerLeft>
              <TextHeadline title="Headline" component="h3" />
              <DescriptionText variant="body1">
                Nisi pariatur enim Lorem mollit adipisicing duis est ullamco
                irure excepteur ut dolore reprehenderit. Voluptate amet do ipsum
                amet ea aute. Cupidatat pariatur fugiat et quis officia enim do
                esse amet nostrud consectetur.
              </DescriptionText>
              <RegularButton title="Read more" />
            </DescriptionTextContainerLeft>
            <DescriptionImageContainer>
              <DescriptionImage src={PlaceHolderImg} alt="Placeholder" />
            </DescriptionImageContainer>
          </DescriptionContainer>
        </ContentContainer>
      </LightBG>

      <ContentContainer>
        <DescriptionContainer>
          <DescriptionImageContainer>
            <DescriptionImage src={PlaceHolderImg} alt="Placeholder" />
          </DescriptionImageContainer>
          <DescriptionTextContainerRight>
            <TextHeadline title="Headline" component="h3" />
            <DescriptionText variant="body1">
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
              nest nipperkin grog yardarm hempen halter furl. Swab barque
              interloper chantey doubloon starboard grog black jack gangway
              rutters. Swab barque interloper chantey doubloon starboard grog
              black jack gangway rutters. Swab barque interloper chantey
              doubloon.
            </DescriptionText>
            <RegularButton title="Read more" />
          </DescriptionTextContainerRight>
        </DescriptionContainer>
      </ContentContainer>
    </IntroSectionContainer>
  );
}

export default IntroSection;
