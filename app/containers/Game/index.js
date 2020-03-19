/**
 *
 * Game
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Button from 'components/Button';
import Player from 'components/Player';
import Title from 'components/Title';
import styled from 'styled-components';
import { rollDice } from './actions';
import { makeSelectPlayers, makeSelectGameMeta } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const StyledPlayers = styled.div`
  display: flex;
  align-items: stretch;
  flex: 2;
`;

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const StyledButtonArea = styled.div`
  padding: 2em;
  text-align: center;
`;

const StyledMessageArea = styled.p``;

export function Game(props) {
  const { onRollDice, players, gameMeta } = props;
  // Inject game data
  useInjectReducer({ key: 'game', reducer });
  useInjectSaga({ key: 'game', saga });
  return (
    <StyledGame>
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
      <StyledPlayers>
        {players.map(player => (
          <Player
            key={player.id}
            gameState={gameMeta.gameState}
            player={player}
          ></Player>
        ))}
      </StyledPlayers>
      <StyledButtonArea>
        <StyledMessageArea>{gameMeta.gameMessage}</StyledMessageArea>
        <Button text="ROLL" onClick={onRollDice}></Button>
      </StyledButtonArea>
    </StyledGame>
  );
}

Game.propTypes = {
  /** Roll the dice to advance the game */
  onRollDice: PropTypes.func.isRequired,
  /** A list of player data for the game */
  players: PropTypes.array,
  gameMeta: PropTypes.shape({
    /** A message about the current status of the game */
    gameMessage: PropTypes.string,
    /** The current state of the game Idle or rolling */
    gameState: PropTypes.string,
  }),
};

const mapStateToProps = createStructuredSelector({
  players: makeSelectPlayers(),
  gameMeta: makeSelectGameMeta(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRollDice: data => dispatch(rollDice(data)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Game);
