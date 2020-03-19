import { take, put, delay } from 'redux-saga/effects';
import { ROLL_DICE } from './constants';
import {
  rollDice,
  startDiceRoll,
  endDiceRoll,
  generateNumbers,
  updateScores,
} from './actions';

// Individual exports for testing
export default function* gameSaga() {
  // See example in containers/HomePage/saga.js

  while (true) {
    yield take(ROLL_DICE);

    yield put(rollDice());

    yield put(startDiceRoll());

    // Build the suspense
    yield delay(2000);

    yield put(generateNumbers());

    yield put(endDiceRoll());

    yield put(updateScores());
  }
}
