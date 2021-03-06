import React from "react";
import styled from "styled-components";
import Logo from "../logo/Logo";
import NavMenu from "./NavMenu";
import ContentContainer from "../containers/ContentContainer";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  z-index: 9;
  position: relative;
`;

const MenusContainer = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-between;
`;

const NavbarDesktopContainer = styled.div`
  display: block;
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    display: none;
  }
`;

function Navbar(props) {
  return (
    <NavbarDesktopContainer>
      <ContentContainer marginTop="0">
        <NavContainer>
          <Logo />
          <MenusContainer display="flex">
            <NavMenu
              menuHeadline="About"
              submenusArr={[
                { title: "Vision", link: "/vision" },
                { title: "Who we are", link: "/who-we-are" },
                { title: "Principles", link: "/principles" },
                { title: "Island", link: "/island" },
              ]}
            ></NavMenu>
            <NavMenu
              menuHeadline="Practical"
              submenusArr={[
                { title: "Practical info", link: "/practical" },
                { title: "Location", link: "/location" },
                { title: "Accommodation", link: "/accommodation" },
                { title: "FAQ", link: "/faq" },
                { title: "Map", link: "/map" },
              ]}
            ></NavMenu>
            <NavMenu menuHeadline="Contact" submenusArr={[]}></NavMenu>
            <NavMenu menuHeadline="Ticket" submenusArr={[]}></NavMenu>
            <NavMenu
              menuHeadline="Program"
              submenusArr={[
                { title: "Music", link: "/music" },
                { title: "Art", link: "/art" },
                { title: "Hangout", link: "/hangout" },
              ]}
            ></NavMenu>
            <NavMenu menuHeadline="Gallery" submenusArr={[]}></NavMenu>
          </MenusContainer>
        </NavContainer>
      </ContentContainer>
    </NavbarDesktopContainer>
  );
}

export default Navbar;
