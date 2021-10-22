import { createStore, createEffect, createEvent } from 'effector';
import { RESTActions } from '../../api/utils/RESTActions';
import { Ticker } from '../../model/Ticker';

export const $dataTicker = createStore<any | null>(null);
export const $dataTickerError = createStore<any>(null);
export const $comandTicker = createStore<string>('returnTicker');
export const getTicker = createEvent();

export const getDataTikeckerFx = createEffect<string, any>((command: string) =>
  RESTActions.get(`command=${command}`)
);
