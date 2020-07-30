import React from "react";
import styled from "styled-components";
import Wave from "./Wave";

const SectionGroup = styled.div`
  background: url(${(props) => props.image}) !important;
  background-size: cover !important;
  display: grid;
  height: 720px;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
`;

const SectionLogo = styled.img`
  width: 128px;
  align-self: end;
  margin: 0 auto;
`;

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0px 40px;
  grid-gap: 20px;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`;

const SectionText = styled.p`
  color: white;
`;

const BottomWave = styled.div`
  position: absolute;
  width: 100%;
  bottom: -25px;
`;

const TopWave = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  transform: rotate(180deg);
`;

const Section = (props) => {
  return (
    <SectionGroup image={props.image}>
      <TopWave>
        <Wave />
      </TopWave>
      <BottomWave>
        <Wave />
      </BottomWave>
      <SectionLogo src={props.logo} />
      <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
      </SectionTitleGroup>
    </SectionGroup>
  );
};

export default Section;
