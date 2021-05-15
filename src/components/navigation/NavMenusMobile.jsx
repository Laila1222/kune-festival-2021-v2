import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavMenu from "./NavMenu";

const NavContainerComponent = styled.div`
  display: block;
  position: static;
  & a {
    display: block;
  }
  @media (min-width: 960px) {
    display: none;
  }
`;

function NavMenusMobile(props) {
  return (
    <div>
      <React.Fragment>
        <NavContainerComponent>
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
        </NavContainerComponent>
      </React.Fragment>
    </div>
  );
}

export default NavMenusMobile;
