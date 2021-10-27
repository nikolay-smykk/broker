import { sample } from 'effector';
// import { delay } from 'patronum/delay';

import {
  getDataTickerFx,
  getTicker,
  $commandTicker,
  $dataTicker,
  $dataTickerError,
} from '.';

$dataTicker.on(getDataTickerFx.doneData, (_, data) => data);
$dataTickerError.on(getDataTickerFx.failData, (_, { message }) => message);

sample({
  clock: getTicker,
  source: $commandTicker,
  target: getDataTickerFx,
});

// delay({
//   source: getTicker,
//   timeout: 5000,
//   target: getTicker,
// });
