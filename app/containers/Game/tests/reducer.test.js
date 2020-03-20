import produce from 'immer';
import gameReducer from '../reducer';
import { startDiceRoll } from '../actions';

export const GAME_STATE = {
  LOADING: 'LOADING',
  ROLLING: 'ROLLING',
  IDLE: 'IDLE',
};

/* eslint-disable default-case, no-param-reassign */
describe('gameReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      gameState: GAME_STATE.LOADING,
      gameMessage: 'Lets get started!',
      players: [
        { id: '1', name: 'The Player', diceValue: null, wins: 0 },
        { id: '2', name: 'The Computer', diceValue: null, wins: 0 },
      ],
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(gameReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle starting to roll the dice correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.gameState = GAME_STATE.ROLLING;
      draft.gameMessage = 'Roll up ... Roll up ...';
    });

    expect(gameReducer(state, startDiceRoll())).toEqual(expectedResult);
  });
});
