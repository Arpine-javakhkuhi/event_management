import { Dispatch, FC } from "react";
import { Alert } from "@aws-amplify/ui-react";

import { AlertType } from "../../types/enum";

interface ResponseMsg {
  message: string;
  type: AlertType;
  setMessage: Dispatch<
    React.SetStateAction<{
      text: string;
      type: AlertType;
    }>
  >;
}

const ResponseMessage: FC<ResponseMsg> = ({
  message,
  type = AlertType.Success,
  setMessage,
}) => {
  const onClose = () => {
    setMessage({ text: "", type: AlertType.Success });
  };

  return (
    <Alert onDismiss={onClose} isDismissible variation={type}>
      {message}
    </Alert>
  );
};

export default ResponseMessage;
