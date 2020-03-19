/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.button`
  background-color: #031af8;
  border: none;
  color: #f5f0f7;
  padding: 0.5em 3em;
  border-radius: 0.1em;
  cursor: pointer;
  font-size: 1.5em;
  border-radius: 0.1em;
  box-shadow: 0px 0.3em #091b9f;
  position: relative;
  font-family: 'Anton', sans-serif;

  &:active {
    top: 0.3em;
    background-color: #091b9f;
    box-shadow: 0px 0px #091b9f;
  }
`;

/** UI Button component */
function Button(props) {
  const { onClick, text } = props;
  return (
    <span>
      <StyledInput type="button" onClick={onClick}>
        {text}
      </StyledInput>
    </span>
  );
}

Button.propTypes = {
  /** Button label text */
  text: PropTypes.string,
  /** Button action */
  onClick: PropTypes.func,
};

export default Button;
