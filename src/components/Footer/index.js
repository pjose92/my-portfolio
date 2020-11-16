import React from 'react';
import styled from 'styled-components';
import PDF from '../About/josePFrontEnd.pdf'

const Wrapper = styled.div`
  min-height: 200px;
  background-color: #232d38;

`;

const CopyRightText = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Link = styled.a`
  font-size: 2rem;
  text-decoration: none;
  color: #f2f2f2;
  transition: 0.2s;
  margin: 30px 15px;
  background-color: #1b232c;
  border-radius: 30px;
  padding: 13px;
  &:hover {
    transform: scale(1.1);
    text-decoration: none;
    background-color: #fff;
    color: #111;
    
  }
  @media (max-width: 580px) {
    font-size: 2.5rem;
  }
`;

const Footer = () => (
  <Wrapper>
    <div>
      
      <LinksWrapper>
        {/* <Link href="#" className="fa fa-envelope fa-2x" />
        <Link href="#" className="fa fa-file fa-2x" /> */}
        <Link href="https://www.linkedin.com/in/jose-perez-guerrero-b7a50b175/" className="fa fa-linkedin fa-2x" />
        <Link href={PDF}  target="_blank" className="fa fa-file" />
      </LinksWrapper>
      <CopyRightText>
        &copy; 2020 Jose Perez. All rights reserved.
      </CopyRightText>
    </div>
  </Wrapper>
);

export default Footer;
