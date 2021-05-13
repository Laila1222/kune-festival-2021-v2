import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ButtonComp = styled(Button)`
  border: 1px solid
    ${(props) =>
      props.color ? props.color : props.theme.palette.primary.contrastText};
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  transition: all 0.5s;
  color: ${(props) => props.color && props.color};
  border-width: ${(props) => props.borderwidth && props.borderwidth};

  &:hover {
    background: ${(props) =>
      props.hoverbackground
        ? props.hoverbackground
        : props.theme.palette.primary.contrastText};
    color: ${(props) =>
      props.hovercolor ? props.hovercolor : props.theme.palette.primary.main};
  }
`;

function RegularButton({
  title,
  color,
  hoverBackground,
  hoverColor,
  borderWidth,
}) {
  console.log(borderWidth);
  return (
    <ButtonComp
      variant="outline"
      color={color}
      hoverbackground={hoverBackground}
      hovercolor={hoverColor}
      borderwidth={borderWidth}
    >
      {title}
    </ButtonComp>
  );
}

export default RegularButton;
