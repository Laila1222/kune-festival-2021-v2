import { Link } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const LinkComponent = styled(Link)`
  text-decoration: underline;
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

function SeeMoreLink(props) {
  return <LinkComponent>See more</LinkComponent>;
}

export default SeeMoreLink;
