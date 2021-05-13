import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../assets/images/logo-rectangle.png";

const LogoContainer = styled.div`
cursor: pointer;`;

const ImageContainer = styled.div`
  /* position: absolute;
  top: 1rem; */
`;

const Image = styled.img``;

function Logo(props) {
  const handleOnclick = () => {
    props.history.push("/");
  };

  return (
    <LogoContainer onClick={() => handleOnclick()}>
      <ImageContainer>
        <Image src={LogoImage}  width="180" alt="Kune logo" />
      </ImageContainer>
    </LogoContainer>
  );
}

export default withRouter(Logo);
