import { makeSelectPlayers, makeSelectGameMeta } from '../selectors';

const state = {
  game: { gameMessage: 'a', gameState: 'b', players: [1, 2, 3] },
};
const playerSelector = makeSelectPlayers();
const metaDataSelector = makeSelectGameMeta();

describe('selectGameDomain', () => {
  it('Expect an array of players to be picked from state', () => {
    expect(playerSelector(state)).toEqual([1, 2, 3]);
  });
  it('Expect game metadata to be returned', () => {
    expect(metaDataSelector(state)).toEqual({
      gameMessage: 'a',
      gameState: 'b',
    });
  });
});
