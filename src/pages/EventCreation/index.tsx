import { useState } from "react";
import { useLocation } from "react-router-dom";
import { View } from "@aws-amplify/ui-react";

import EventCreateForm from "../../ui-components/EventCreateForm";
import { CreateEventInput } from "../../API";
import { prepareCreateEventFields } from "../../helpers/prepareFields";
import { AlertType } from "../../types/enum";
import ResponseMessage from "../../components/ResponseMessage";
import { SUCCESS_MESSAGES } from "../../constants/messages";

const EventCreation = () => {
  const { state } = useLocation();
  const { userId } = state;

  const [message, setMessage] = useState({ text: "", type: AlertType.Success });

  const submit = (fields: Omit<CreateEventInput, "author">) => {
    const updatedFields = prepareCreateEventFields(fields, userId);

    return updatedFields;
  };

  return (
    <View width="50%">
      {message?.text && (
        <ResponseMessage
          message={message.text}
          type={message.type}
          setMessage={setMessage}
        />
      )}
      <EventCreateForm
        onError={(_, message) =>
          setMessage({
            type: AlertType.Error,
            text: message,
          })
        }
        onSuccess={() =>
          setMessage({
            type: AlertType.Success,
            text: SUCCESS_MESSAGES.eventSuccessfullyCreated,
          })
        }
        onSubmit={submit}
      />
    </View>
  );
};

export default EventCreation;
