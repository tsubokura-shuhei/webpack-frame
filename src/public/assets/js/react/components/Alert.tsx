import * as React from "react";

export type Props = {
  message: string;
};

const Alert: React.FC<Props> = (props) => {
  const { message } = props;
  return <div>{message}</div>;
};

export default Alert;
