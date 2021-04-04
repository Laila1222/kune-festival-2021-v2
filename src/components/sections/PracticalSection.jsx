import React from "react";
import styled from "styled-components";
import ContentContainer from "../containers/ContentContainer";
import SectionHeadline from "../headlines/SectionHeadline";

const PracticalSectionComp = styled.div`
  height: 100vh;
  //   background-image: linear-gradient(
  //       rgba(250, 250, 250, 0.6) 1%,
  //       rgba(250, 250, 250, 0.6) 100%
  //     ),
  //     url("/images/header-8.png");
  background-image: url("/images/header-8.png");
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  & h4 {
  }
`;

const PracticalContainer = styled.div`
  width: 100%;
  height: 20rem;
  background: rgba(250, 250, 250, 0.7);
  margin-left: auto;
  margin-right: auto;
`;

function PracticalSection(props) {
  return (
    <PracticalSectionComp>
      <ContentContainer>
        <SectionHeadline title="Practical" component="h4" />
        {/* <PracticalContainer >

        </PracticalContainer> */}
      </ContentContainer>
    </PracticalSectionComp>
  );
}

export default PracticalSection;
