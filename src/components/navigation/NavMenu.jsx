import { Box, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";

const MenuContainer = styled.div`
  &: hover .submenus {
    display: block;
  } ;
`;

const MenuHeadline = styled(Typography)`
  cursor: ${(props) => (props.clickable === "true" ? "pointer" : "default")};

  &:hover {
    color: ${(props) => props.theme.palette.colors.yellow};
  }
  transition: all .2s;
`;

const Submenus = styled.div.attrs((props) => ({
  className: props.customclassname,
}))`
  display: none;
  cursor: pointer;
  position: absolute;
  background: transparent;
  z-index: 9;
`;

function NavMenu({ menuHeadline, submenusArr }) {
  return (
    <MenuContainer>
      <MenuHeadline
        variant="h6"
        clickable={submenusArr.length > 0 ? "false" : "true"}
      >
        {menuHeadline}
      </MenuHeadline>
      <Submenus customclassname="submenus">
        {submenusArr.length > 0 && (
          <React.Fragment>
            {submenusArr.map((menu) => (
              <SubMenu key={menu.title} title={menu.title} to={menu.link} />
            ))}
          </React.Fragment>
        )}
      </Submenus>
    </MenuContainer>
  );
}

export default NavMenu;
