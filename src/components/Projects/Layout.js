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
    title: 'Rick and Morty Fan App',
    description:
      "A Single Page Application with Client-Side Routing built in a three hour sprint challenge at Lambda School. Built with React, Reactstrap and React Router.",
    link: 'https://github.com/pjose92/Sprint-Challenge-Single-Page-Apps/tree/jose-Perezguerrero',
    link2: 'https://rickandmortyfanapp.netlify.com/',
  },
  {
    title: 'React Wars',
    description:
      'React Wars is a web app that makes a request to SWAPI(Star Wars API) and fetches information about Star Wars characters. Built with React, Axios, Reactstrap.',
    link: 'https://github.com/pjose92/Sprint-Challenge-React-Wars/tree/jose-Perezguerrero',
    link2: '#',
  },
  {
    title: 'NASA Photo of the Day',
    description:
      "This project uses NASA Photo of the Day API to retrieve daily content about cool discoveries or worth sharing facts by NASA. Built React, React Hooks, Axios.",
    link: 'https://github.com/pjose92/nasa-photo-of-the-day/tree/jose-Perezguerrero',
    link2: 'https://photoofthedaynasa.netlify.com/',  },
  {
    title: 'InstaClone',
    description:
      'Built an Instagram clone page using React. Information comes from a dummy-data file not from an actual user account. Built with React.',
    link: 'https://github.com/pjose92/React-Components-Insta-Clone/tree/jose-Perezguerrero',
    link2: 'https://cloneinsta.netlify.com',  },
  {
    title: 'Football Scoreboard',
    description:
      'A Football Scoreboard web app with functional start/stop/rest buttons that updates the web app. Built with React and React Hooks.(Desktop Only)',
    link: 'https://github.com/pjose92/react-american-football-scoreboard/tree/jose-Perezguerrero',
    link2: 'https://scoreboardfootball.netlify.com',  },
      
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
