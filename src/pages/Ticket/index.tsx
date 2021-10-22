import { Shared } from '../../shared';
import { useEffect } from 'react';
import { useStore } from 'effector-react';

import { Components } from '../../components';

import {
  $dataTicker,
  getTicker,
  getDataTikeckerFx,
  $dataTickerError,
} from '../../store/ticker';

import { message, Spin } from 'antd';

export const Ticket = () => {
  const dataTicker = useStore($dataTicker);
  const loading = useStore(getDataTikeckerFx.pending);
  const dataTickerError = useStore($dataTickerError);
  console.log('Error', dataTickerError);
  const error = (text: string) => {
    Components.MessageError({ text });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getTicker();
      console.log('dataTicker', dataTicker);
      if (dataTickerError || dataTicker.error) {
        dataTickerError ? error(dataTickerError) : error(dataTicker.error);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [dataTicker, dataTickerError]);

  useEffect(() => {
    getTicker();
  }, []);

  return (
    <>
      <Shared.Layout>
        <ul>
          {loading ? (
            <Spin />
          ) : (
            Object.keys(dataTicker ? dataTicker : {}).map((el, i) => (
              <li key={dataTicker[el].id}>
                <Components.Modal
                  title={el}
                  last={dataTicker[el].last}
                  highestBid={dataTicker[el].highestBid}
                  percentChange={dataTicker[el].percentChange}
                />
              </li>
            ))
          )}
        </ul>
      </Shared.Layout>
    </>
  );
};
