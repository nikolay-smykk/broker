import { Shared } from '../../shared';
import { useEffect } from 'react';
import { useStore } from 'effector-react';

import { Components } from '../../components';

import { $dataTicker, getTicker, getDataTikeckerFx } from '../../store/ticker';

import { Spin } from 'antd';

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
