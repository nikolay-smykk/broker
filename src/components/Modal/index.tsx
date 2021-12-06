import { useState } from 'react';

type PropsTypesModal = {
  title: string;
  last: string;
  highestBid: string;
  percentChange: string;
};

export const ModalComponents = ({
  title,
  last,
  highestBid,
  percentChange,
}: PropsTypesModal) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return <>modal</>;
};
