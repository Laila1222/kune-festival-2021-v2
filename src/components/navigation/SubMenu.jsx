import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const SubMenuComp = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.contrastText};

  &:hover {
    color: ${(props) => props.theme.palette.colors.yellow};
    transition: all 0.2s;
  }
`;

const SubMenuContainer = styled.div`
  & a {
    text-decoration: none;
  }
`;

function SubMenu({ to, title }) {
  return (
    <SubMenuContainer>
      <Link to={to}>
        <SubMenuComp variant="h6">{title}</SubMenuComp>
      </Link>
    </SubMenuContainer>
  );
}

export default SubMenu;
