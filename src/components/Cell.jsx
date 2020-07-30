import React from "react";
import styled from "styled-components";

const CellGroup = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
`;

const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-size: 60px;
`;

const CellTitle = styled.h3`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
  padding: 10px 0;
`;

const Cell = (props) => {
  return (
    <CellGroup>
      <CellImage image={props.image}></CellImage>
      <CellTitle>{props.title}</CellTitle>
    </CellGroup>
  );
};

export default Cell;
