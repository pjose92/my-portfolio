import React from 'react';
import styled from 'styled-components';
import background from '../../Assets/Cover.jpeg';
import PDF from '../About/josePFrontEnd.pdf'

const Wrapper = styled.div`
  min-height: 200px;
  background-color: black;
  // background: url(${background}) center center no-repeat fixed;
  // background-size: cover;
  // display: flex;
  // align-items: center;
  // justify-content: center;
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
  font-size: 3rem;

  text-decoration: none;
  color: #fff;
  transition: 0.2s;
  margin: 30px 15px;
  &:hover {
    transform: scale(1.1);
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
        <Link href="https://github.com/pjose92" className="fa fa-github fa-2x" />
        <Link href={PDF}  target="_blank" className="fa fa-file" />
      </LinksWrapper>
      <CopyRightText>
        &copy; 2020 Jose Perez. All rights reserved.
      </CopyRightText>
    </div>
  </Wrapper>
);

export default Footer;
