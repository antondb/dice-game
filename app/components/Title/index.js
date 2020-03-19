/**
 *
 * Title
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: #f5f0f7;
  font-family: 'Anton', sans-serif;
  padding: 0.5em 1em;
`;

function Title(props) {
  const { children } = props;
  return <StyledH1>{children}</StyledH1>;
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
