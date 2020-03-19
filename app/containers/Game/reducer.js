/* eslint-disable no-case-declarations */
/*
 *
 * Game reducer
 *
 */
import produce from 'immer';
import {
  ROLL_DICE,
  GENERATE_NUMBERS,
  START_DICE_ROLL,
  END_DICE_ROLL,
  UPDATE_SCORES,
  GAME_STATE,
} from './constants';

export const initialState = {
  gameState: GAME_STATE.LOADING,
  gameMessage: 'Lets get started!',
  players: [
    { id: '1', name: 'The Player', diceValue: null, wins: 0 },
    { id: '2', name: 'The Computer', diceValue: null, wins: 0 },
  ],
};

/**
 * Find a winner from a list of players
 *
 * @export
 * @param {*} players
 * @returns {winningId,winningValue,isDraw}
 */
export function findWinner(players) {
  let winningId = null;
  let winningValue = 0;
  let isDraw = false;
  // Find the winner
  players.forEach(({ id, diceValue }) => {
    if (diceValue === winningValue) {
      isDraw = true;
    }
    if (diceValue > winningValue) {
      winningId = id;
      winningValue = diceValue;
    }
  });

  return { winningId, winningValue, isDraw };
}

/* eslint-disable default-case, no-param-reassign */
const gameReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ROLL_DICE:
        break;
      case START_DICE_ROLL:
        draft.gameState = GAME_STATE.ROLLING;
        draft.gameMessage = 'Roll up ... Roll up ...';
        break;
      case END_DICE_ROLL:
        draft.gameState = GAME_STATE.IDLE;
        break;
      case GENERATE_NUMBERS:
        draft.players = state.players.map(player => ({
          ...player,
          diceValue: Math.floor(Math.random() * 6) + 1,
        }));
        break;
      case UPDATE_SCORES:
        // Find the latest winner
        const { isDraw, winningId } = findWinner(state.players);

        if (isDraw) {
          draft.gameMessage = 'Draw!';
        } else {
          // increment their score by 1 if they win
          draft.players = state.players.map(player => {
            if (player.id === winningId) {
              draft.gameMessage = `${player.name} wins`;
              return { ...player, wins: player.wins + 1 };
            }
            return player;
          });
        }
        break;
    }
  });

export default gameReducer;
