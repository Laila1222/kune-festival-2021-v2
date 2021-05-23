import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const SectionHeadlineComp = styled(Typography)`
  font-size: 3rem;
  margin-bottom: ${(props) => (props.mb ? props.mb : "3rem")};
  text-align: center;
  color: ${(props) =>
    props.color ? props.color : props.theme.palette.primary.contrastText};
    position: relative;
    z-index: 3;

  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 2rem;
    color: ${props => props.theme.palette.primary.contrastText};
  }
`;

function SectionHeadline({ title, component, color, marginBottom }) {
  return (
    <SectionHeadlineComp
      component={component}
      variant="h2"
      color={color}
      mb={marginBottom}
    >
      {title}
    </SectionHeadlineComp>
  );
}

export default SectionHeadline;
