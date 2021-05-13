import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const TextHeadlineComp = styled(Typography)`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${(props) => props.color && props.color};
  font-weight: bold;
`;

function TextHeadline({ title, component, color }) {
  return (
    <TextHeadlineComp component={component} color={color} variant="h4">
      {title}
    </TextHeadlineComp>
  );
}

export default TextHeadline;
