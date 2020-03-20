/**
 *
 * Tests for Player
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import Player from '../index';

const player = {
  id: 'test',
  name: 'test',
  diceValue: 4,
  wins: 2,
};

library.add(
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faStar,
);

describe('<Player />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Player gameState="test" player={player} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Player gameState="test" player={player} />);
    expect(firstChild).toMatchSnapshot();
  });
});
