import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ButtonComp = styled(Button)`
  border: 1px solid white;
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  transition: all .5s;

  &:hover {
      background: ${props => props.theme.palette.primary.contrastText};
      color: ${props => props.theme.palette.primary.main}
  }
`;

function RegularButton({ title }) {
  return <ButtonComp variant="outline">{title}</ButtonComp>;
}

export default RegularButton;
