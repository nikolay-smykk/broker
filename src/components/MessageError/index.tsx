import { message } from 'antd';

type PropsMessage = {
  text: string;
};

export const MessageError = ({ text }: PropsMessage) => {
  message.error(text);
};
