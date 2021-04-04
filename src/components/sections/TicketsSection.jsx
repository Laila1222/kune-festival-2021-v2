import React from "react";
import styled from "styled-components";
import ContentContainer from "../containers/ContentContainer";
import SectionHeadline from "../headlines/SectionHeadline";

const TicketsSectionComp = styled.div`
  height: 100vh;
`;

function TicketsSection(props) {
  return (
    <TicketsSectionComp>
      <ContentContainer>
        <SectionHeadline title="Tickets" component="h5" />
      </ContentContainer>
    </TicketsSectionComp>
  );
}

export default TicketsSection;
