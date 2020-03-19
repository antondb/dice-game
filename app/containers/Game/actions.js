/*
 *
 * Game actions
 *
 */

import {
  ROLL_DICE,
  START_DICE_ROLL,
  END_DICE_ROLL,
  UPDATE_SCORES,
  GENERATE_NUMBERS,
} from './constants';

export function rollDice() {
  return {
    type: ROLL_DICE,
  };
}

export function updateScores() {
  return {
    type: UPDATE_SCORES,
  };
}

export function generateNumbers() {
  return {
    type: GENERATE_NUMBERS,
  };
}

export function startDiceRoll() {
  return {
    type: START_DICE_ROLL,
  };
}

export function endDiceRoll() {
  return {
    type: END_DICE_ROLL,
  };
}
