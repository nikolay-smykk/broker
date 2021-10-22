import { sample } from 'effector';
// import { delay } from 'patronum/delay';

import {
  getDataTikeckerFx,
  getTicker,
  $comandTicker,
  $dataTicker,
  $dataTickerError,
} from '.';

$dataTicker.on(getDataTikeckerFx.doneData, (_, data) => data);
$dataTickerError.on(getDataTikeckerFx.failData, (_, { message }) => message);

sample({
  clock: getTicker,
  source: $comandTicker,
  target: getDataTikeckerFx,
});

// delay({
//   source: getTicker,
//   timeout: 5000,
//   target: getTicker,
// });
