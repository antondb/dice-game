/**
 *
 * Die
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledDie = styled(({ isRolling, ...rest }) => (
  <FontAwesomeIcon {...rest} />
))`
  color: #f5f0f7;
  font-size: 2em;

  animation: ${({ isRolling }) =>
    isRolling ? ' spin 1s linear infinite' : 'none'};

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledDiceCup = styled.div`
  border: solid 0.5em #968399;
  padding: 1em 0em;
  height: 5em;
  text-align: center;
  width: 5em;
  display: inline-block;
  border-radius: 50%;
`;

const numberMap = new Map();
numberMap.set(1, 'one');
numberMap.set(2, 'two');
numberMap.set(3, 'three');
numberMap.set(4, 'four');
numberMap.set(5, 'five');
numberMap.set(6, 'six');

function Die(props) {
  const { value, isRolling } = props;

  const dieIcon = value === null ? 'star' : `dice-${numberMap.get(value)}`;
  return (
    <StyledDiceCup>
      <StyledDie isRolling={isRolling} icon={dieIcon} />
    </StyledDiceCup>
  );
}

Die.propTypes = {
  /** The Value of the die */
  value: PropTypes.number,
  /** Should the rolling animation be showing */
  isRolling: PropTypes.bool,
};

export default Die;
