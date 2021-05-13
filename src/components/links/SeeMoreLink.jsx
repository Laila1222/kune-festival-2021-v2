import { Link } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const LinkComponent = styled(Link)`
  text-decoration: underline;
  color: ${(props) =>
    props.color ? props.color : props.theme.palette.primary.contrastText};
`;

function SeeMoreLink({ color }) {
  return <LinkComponent color={color}>See more</LinkComponent>;
}

export default SeeMoreLink;
