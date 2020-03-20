import { rollDice } from '../actions';
import { ROLL_DICE } from '../constants';

describe('Game actions', () => {
  describe('Default Action', () => {
    it('has a type of ', () => {
      const expected = {
        type: ROLL_DICE,
      };
      expect(rollDice()).toEqual(expected);
    });
  });
});
