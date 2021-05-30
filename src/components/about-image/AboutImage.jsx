import React from 'react';
import styled from 'styled-components';
import SunImage from "../../assets/images/sun.png";
import IslandImage from "../../assets/images/water-medium.png"

const MainContainer = styled.div`
position: relative;
top: -3rem;
@media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
   top: 0;
  }
`

const SunImageComp = styled.img`
position: absolute;
right: 25rem;
top: -2.5rem;
width: 10rem;
@media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
  width: 4rem;
right: 7rem;
top: -1rem;
}
`

const IslandImageComp = styled.img`
position: absolute;
right: 0;
width: 100%;
@media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    width: 80%;
  }
`

function AboutImage(props) {
    return (
        <MainContainer>
            <SunImageComp src={SunImage}/>
            <IslandImageComp src={IslandImage}/>
        </MainContainer>
    );
}

export default AboutImage;