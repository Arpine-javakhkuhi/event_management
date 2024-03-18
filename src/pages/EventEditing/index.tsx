import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { View } from "@aws-amplify/ui-react";
import { UpdateEventInput } from "@/API";

import { EventUpdateForm } from "../../ui-components";
import { prepareEditEventFields } from "../../helpers/prepareFields";
import { AlertType } from "../../types/enum";
import ResponseMessage from "../../components/ResponseMessage";
import { SUCCESS_MESSAGES } from "../..//constants/messages";

const EventEditing = () => {
  const { eventId } = useParams();
  const { state } = useLocation();
  const { userId } = state;

  const [message, setMessage] = useState({ text: "", type: AlertType.Success });

  const submit = (fields: Omit<UpdateEventInput, "author">) => {
    const updatedFields = prepareEditEventFields(fields, userId, eventId);

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
      <EventUpdateForm
        id={eventId}
        onError={(_, message: string) =>
          setMessage({ type: AlertType.Error, text: message })
        }
        onSuccess={() =>
          setMessage({
            type: AlertType.Success,
            text: SUCCESS_MESSAGES.eventSuccessfullyUpdated,
          })
        }
        onSubmit={submit}
      />
    </View>
  );
};

export default EventEditing;
