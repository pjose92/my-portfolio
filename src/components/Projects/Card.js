import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const width = 100 / 3;

const Img = styled.img`
  height: 30%;
  width: 100%;

`

const Wrapper = styled.div`
  width: ${width - 4}%;
  min-width: 300px;
  min-height: 300px;
  border: 1px solid #eee;
  box-sizing: border-box;
  padding: 0 15px;
  transition: 0.2s;
  margin: 20px;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Title = styled.h1`
  font-family: Pacifico, Helvetica, sans-serif;
  text-align: center;
  font-size: 2.3rem;
  margin-bottom: 40px;
  margin-top: 40px;

  @media (max-width: 580px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  line-height: 1.6;
  height: 90px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.a`
  text-decoration: none;
  border: 1px solid #111;
  color: #111;
  padding: 15px 20px;
  transition: 0.2s;
  border-radius: 2px;
  margin: 2%;
  &:hover {
    background-color: #111;
    color: #fff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Card = props => (
  <Wrapper>
    <Img src={require('./test/test.jpeg')} alt="logo" className="brand-logo"/>
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
    <ButtonWrapper>
      <Button href={props.link} target="_blank">
        Github
      </Button>
      <Button href={props.link2} target="_blank">
        Visit Website
      </Button>
    </ButtonWrapper>
  </Wrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
