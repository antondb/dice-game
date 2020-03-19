import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the game state domain
 */

const selectGameDomain = state => state.game || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Game
 */

const makeSelectGame = () =>
  createSelector(selectGameDomain, substate => substate);

const makeSelectPlayers = () =>
  createSelector(makeSelectGame(), substate => substate.players);

const makeSelectGameMeta = () =>
  createSelector(makeSelectGame(), ({ gameMessage, gameState }) => ({
    gameMessage,
    gameState,
  }));

export default makeSelectGame;
export { selectGameDomain, makeSelectPlayers, makeSelectGameMeta };
