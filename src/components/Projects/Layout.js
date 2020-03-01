import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3% 0;
`;

const Projects = [
  {
    title: 'Rick and Morty Ultimate Fan App',
    description:
      "lala",
    link: 'http://initior.ga',
    link2: '#',
  },
  {
    title: 'Butns',
    description:
      'An advanced buttons library for your website, using a set of pre defined classes you can fully customize your buttons.',
    link: 'http://butns.ml',
  },
  {
    title: 'gridcss',
    description:
      "A small, 565bytes minified grid system for these times where you don't need a fully fledged framework.",
    link: 'https://github.com/ahmedtarek2134/grid.css',
  },
  {
    title: 'Backspace',
    description:
      'A fully featured, free website template for photography with google maps and smooth css animations to please the viewers',
    link: 'https://github.com/ahmedtarek2134/Backspace',
  },
  {
    title: 'Palettor',
    description:
      "A random color paletter generator for these times where you can't choose a color so you go random instead :)",
    link: 'https://github.com/ahmedtarek2134/Palettor',
  },
  {
    title: 'materializing colors',
    description:
      "All of google's material design colors in a form of variables in most popular css pre-processors",
    link: 'https://github.com/ahmedtarek2134/MaterializingColors',
  },
];

const Cards = Projects.map(project => (
  <Card
    title={project.title}
    description={project.description}
    link={project.link}
    link2={project.link2}
    key={project.title}
  />
));

const Layout = props => (
  <div onEnter={props.onEnter} onLeave={props.onLeave}>
    <Wrapper active={props.active}>{Cards}</Wrapper>
  </div>
);

Layout.propTypes = {
  active: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default Layout;
