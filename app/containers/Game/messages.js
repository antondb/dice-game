/*
 * Game Messages
 *
 * This contains all the text for the Game container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Game';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Battle Dice',
  },
});
