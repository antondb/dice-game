/**
 *
 * Player
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Die from 'components/Die';
import { GAME_STATE } from 'containers/Game/constants';

const StyledPlayer = styled.div`
  flex: 1;
  text-align: center;
`;

function Player(props) {
  const {
    player: { wins, diceValue, name },
    gameState,
  } = props;

  const isRolling = gameState === GAME_STATE.ROLLING;
  return (
    <StyledPlayer>
      <h2>{name}</h2>
      <h3>wins: {wins}</h3>
      <Die isRolling={isRolling} value={diceValue}></Die>
    </StyledPlayer>
  );
}

Player.propTypes = {
  /** The data about a current player */
  player: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    diceValue: PropTypes.number,
    wins: PropTypes.number,
  }),
  /** The current state of the game Rolling or Idle */
  gameState: PropTypes.string,
};

export default Player;
