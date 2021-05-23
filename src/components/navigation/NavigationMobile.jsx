import { Box, Typography } from "@material-ui/core";
import React from "react";

import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavMenusMobile from "./NavMenusMobile";
import Logo from '../logo/Logo';

const NavigationMobile = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    display: block;
  }
`;

const MainContainer = styled(Box)`
  background: ${(props) => props.theme.palette.secondary.main};
  width: 100%;
  position: fixed;
  z-index: 10;
`;

const LogoContainer = styled.div`
  padding-top: .7rem;
  margin-left: 2rem;
`

function NavbarMobile(props) {
  return (
    <NavigationMobile>
    <MainContainer> 
      <LogoContainer> <Logo /></LogoContainer>
     
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
        width={"100%"}
      >
        <NavMenusMobile />
      </Menu>
    </MainContainer>
    </NavigationMobile>
  );
}

export default NavbarMobile;
