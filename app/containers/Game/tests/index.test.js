/**
 *
 * Tests for Game
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import { Provider } from 'react-redux';
import { Game } from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import configureStore from '../../../configureStore';

const props = {
  onRollDice: () => {},
  gameMeta: { gameMessage: 'a', gameState: 'b' },
  players: [],
};

describe('<Game />', () => {
  let store;

  beforeAll(() => {
    store = configureStore();
  });
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Game {...props} />
        </IntlProvider>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });
  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Game {...props} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
