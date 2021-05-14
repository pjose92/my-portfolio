import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  margin: auto 0;
  font-size: 18px;
  color: white;
`;

const Span = styled.span`
  margin: auto 0;
  color: #04c2c9;
`;

const Brand = () => {
  return <Logo>Dev<Span>.JP</Span></Logo>;
};

export default Brand;