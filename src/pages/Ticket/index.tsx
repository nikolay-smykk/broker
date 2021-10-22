import { Shared } from '../../shared';
import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';

import { $dataTicker, getTicker, getDataTikeckerFx } from '../../store/ticker';

import { Button, Modal, Spin } from 'antd';

export const Ticket = () => {
  const dataTicker = useStore($dataTicker);
  const loading = useStore(getDataTikeckerFx.pending);

  useEffect(() => {
    const timer = setTimeout(() => {
      getTicker();
    }, 5000);
    return () => clearTimeout(timer);
  }, [dataTicker]);

  return (
    <>
      <Shared.Layout>
        <ul>
          {loading ? (
            <Spin />
          ) : (
            Object.keys(dataTicker ? dataTicker : {}).map((el, i) => (
              <li key={dataTicker[el].id}>
                <Button type='primary'>{dataTicker[el].id}</Button>
                <Button type='primary'>{dataTicker[el].last}</Button>
              </li>
            ))
          )}
        </ul>
      </Shared.Layout>
    </>
  );
};
