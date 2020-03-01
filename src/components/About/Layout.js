import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from './About';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 876px) {
    flex-wrap: wrap;
  }
`;

const Layout = props => (
  <div onEnter={props.onEnter} onLeave={props.onLeave}>
    <Wrapper>
      <Paragraph active={props.active} />
    </Wrapper>
  </div>
);

Layout.propTypes = {
  active: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default Layout;
