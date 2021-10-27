import { createStore, createEffect, createEvent } from 'effector';
import { RESTActions } from '../../api/utils/RESTActions';

export const $dataTicker = createStore<any | null>(null);
export const $dataTickerError = createStore<any>(null);
export const $commandTicker = createStore<string>('returnTicker');
export const getTicker = createEvent();

export const getDataTickerFx = createEffect<string, any>((command: string) =>
  RESTActions.get(`command=${command}`)
);
