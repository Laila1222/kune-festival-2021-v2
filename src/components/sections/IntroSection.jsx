import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ContentContainer from "../containers/ContentContainer";
import SectionHeadline from "../headlines/SectionHeadline";
import { overridings } from "../../themes/LightTheme";
import {
  artistNames,
  firstRowArtistNames,
  fourthRowArtistNames,
  secondRowArtistNames,
  thirdRowArtistNames,
  firstRowMobile,
  secondRowMobile,
  thirdRowMobile,
  fourthRowMobile,
  fifthRowMobile,
  sixthRowMobile,
  seventhRowMobile,
  eighthRowMobile,
  ninthRowMobile,
} from "../../data/artist-names";

const IntroSectionContainer = styled.div`
  margin-bottom: 5rem;
`;

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

const Subtitle = styled(Typography)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;
`;

const ArtistNamesContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${(props) => (props.mb ? props.mb : "2rem")};

  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    /* margin-bottom: 0; */
  }
`;

const ArtistName = styled(Typography)`
  font-size: 2.4rem;
  color: ${(props) =>
    props.color && props.color === "orange"
      ? props.theme.palette.colors.orange
      : props.theme.palette.secondary.contrastText};

  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const MoreSign = styled(Typography)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.palette.primary.light};
  width: fit-content;
`;

function IntroSection(props) {
  // Decided whether it should be an orange or black name
  const getArtistColor = (artistId) => {
    if (artistId % 2 === 0) {
      return "orange";
    } else {
      return "black";
    }
  };

  const Desktop = styled.div`
    display: block;
    @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
      display: none;
    }
  `;

  const Mobile = styled.div`
    display: none;
    @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
      display: block;
    }
  `;

  return (
    <IntroSectionContainer>
      <ContentContainer>
        <Box pt="2rem">
          <Box mb="5rem">
            <SectionHeadline
              title="The lineup"
              component="h2"
              color={overridings.palette.primary.main}
              marginBottom=".8rem"
            />
            <Subtitle component="h3" variant="body2">
              Over 30 artists across Scandinavia and surroundings
            </Subtitle>
          </Box>

          <Desktop>
            <ArtistNamesContainer>
              {firstRowArtistNames.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
            </ArtistNamesContainer>
            <ArtistNamesContainer>
              {secondRowArtistNames.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
            </ArtistNamesContainer>
            <ArtistNamesContainer>
              {thirdRowArtistNames.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
            </ArtistNamesContainer>
            <ArtistNamesContainer mb="1rem">
              {fourthRowArtistNames.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
            </ArtistNamesContainer>
            <Box ml="auto" mr="auto" width="fit-content">
              <MoreSign>+ more</MoreSign>
            </Box>
          </Desktop>

          <Mobile>
            <ArtistNamesContainer>
              {firstRowMobile.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
              {secondRowMobile.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
              {thirdRowMobile.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
              {fourthRowMobile.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
              {fifthRowMobile.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
              {sixthRowMobile.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
              {secondRowMobile.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
              {seventhRowMobile.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
              {eighthRowMobile.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
              {ninthRowMobile.map((artist) => (
                <ArtistName color={getArtistColor(artist.id)}>
                  {artist.name}
                </ArtistName>
              ))}
            </ArtistNamesContainer>
          </Mobile>

          {/* <DescriptionContainer>
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
        </DescriptionContainer>*/}
        </Box>
      </ContentContainer>
    </IntroSectionContainer>
  );
}

export default IntroSection;
