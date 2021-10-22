import { useState } from 'react';
import { Modal, Button } from 'antd';

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

  return (
    <>
      <Button type='primary' onClick={showModal}>
        {title}
      </Button>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>Last: {last}</p>
        <p>highestBid: {highestBid}</p>
        <p>percentChange: {percentChange}</p>
      </Modal>
    </>
  );
};
