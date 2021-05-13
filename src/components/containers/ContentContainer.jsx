import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ContentContainerComp = styled.div`
  width: 83%;
  padding-top: ${props => props.margintop ? props.margintop : '2rem'};
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

function ContentContainer({ children, marginTop }) {
  return <ContentContainerComp margintop={marginTop}>{children}</ContentContainerComp>;
}

export default ContentContainer;
