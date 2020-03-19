/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, put, delay } from 'redux-saga/effects';
import gameSaga from '../saga';
import { ROLL_DICE } from '../constants';
import {
  rollDice,
  startDiceRoll,
  generateNumbers,
  endDiceRoll,
  updateScores,
} from '../actions';

const generator = gameSaga();
// Brittle saga tests, should be refactored
describe('gameSaga Saga', () => {
  it('Expect to wait for a roll request', () => {
    expect(generator.next().value).toEqual(take(ROLL_DICE));
  });
  it('Expect to start roll', () => {
    expect(generator.next().value).toEqual(put(rollDice()));
  });
  it('Expect to start dice roll', () => {
    expect(generator.next().value).toEqual(put(startDiceRoll()));
  });
  it('Expect to delay the next action', () => {
    expect(generator.next().value).toEqual(delay(2000));
  });
  it('Expect to generate new numbers', () => {
    expect(generator.next().value).toEqual(put(generateNumbers()));
  });
  it('Expect to finish the dice roll', () => {
    expect(generator.next().value).toEqual(put(endDiceRoll()));
  });
  it('Expect to update the user scores', () => {
    expect(generator.next().value).toEqual(put(updateScores()));
  });
});
