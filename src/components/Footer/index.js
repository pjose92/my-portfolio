import React from 'react';
import styled from 'styled-components';
import PDF from '../About/PerezJoseFrontEnd.pdf'

const Wrapper = styled.div`
  min-height: 200px;
  background-color: #0F121A;
`;

const CopyRightText = styled.p`
  color: #fff;
  font-size: .8rem;
  text-align: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Link = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: white;
  transition: 0.2s;
  margin: 30px 15px;
  background-color: #164D85;
  border-radius: 30px;
  padding: 13px;
  &:hover {
    transform: scale(1.1);
    text-decoration: none;
    background-color: #204f80;
    color: #0F121A;
  }
  @media (max-width: 580px) {
    font-size: 1.5rem;
  }
`;

const Footer = () => (
  <Wrapper>
    <div>
      <LinksWrapper>
        <Link href={"https://github.com/pjose92"} target="_blank" className="fa fa-github fa-2x" />
        <Link href="https://www.linkedin.com/in/jose-perez-guerrero-b7a50b175/" target="_blank" className="fa fa-linkedin fa-2x" />
        <Link href={"https://twitter.com/jpDev7"} target="_blank" className="fa fa-twitter fa-2x" />
        <Link href={PDF}  target="_blank" className="fa fa-file" />
      </LinksWrapper>
      <CopyRightText>
        &copy; 2021 Dev.JP. All rights reserved.
      </CopyRightText>
    </div>
  </Wrapper>
);

export default Footer;