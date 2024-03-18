import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Text,
  Loader,
  Flex,
  Button,
  ButtonGroup,
} from "@aws-amplify/ui-react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { format } from "date-fns";
import { Event } from "@/API";

import { allEvents, deleteEvent } from "../../api";
import { showDescription } from "../../helpers/showDescription";
import { AlertType, Route } from "../../types/enum";
import ResponseMessage from "../ResponseMessage";
import { SUCCESS_MESSAGES } from "../../constants/messages";

interface EventListProps {
  userId: string;
}

const EventsList: FC<EventListProps> = ({ userId }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[] | null>(null);
  const [message, setMessage] = useState({ text: "", type: AlertType.Success });

  useEffect(() => {
    allEvents().then((eventList) => setEvents(eventList ? eventList : []));
  }, []);

  if (!events) {
    return (
      <Flex marginTop="5rem" justifyContent="center">
        <Loader width="5rem" height="5rem" />
      </Flex>
    );
  }

  const goToUpdateEvent = (id: string) => {
    navigate(`${Route.Events}/${id}`, { state: { userId } });
  };

  const onDelete = async (id: string, author: string) => {
    try {
      const res = await deleteEvent({ id }, author);
      if (res.id) {
        const eventsList = await allEvents();
        setEvents(eventsList);
        setMessage({
          type: AlertType.Success,
          text: SUCCESS_MESSAGES.eventSuccessfullyDeleted,
        });
      }
    } catch (err) {
      setMessage({ type: AlertType.Error, text: err.message });
    }
  };

  return (
    <>
      {message?.text && (
        <ResponseMessage
          message={message.text}
          type={message.type}
          setMessage={setMessage}
        />
      )}
      {events?.length ? (
        <Table variation="bordered" caption="" highlightOnHover>
          <TableHead>
            <TableRow>
              <TableCell as="th">Name</TableCell>
              <TableCell as="th">Description</TableCell>
              <TableCell as="th">Date</TableCell>
              <TableCell as="th">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.name}</TableCell>
                <TableCell>
                  {event.description
                    ? showDescription(event.description, 50)
                    : ""}
                </TableCell>
                <TableCell>
                  Date:{format(new Date(event.date), "dd MMM yyyy")}
                </TableCell>

                <TableCell>
                  {event.author === userId && (
                    <ButtonGroup size="small">
                      <Button
                        gap="0.1rem"
                        size="small"
                        onClick={() => goToUpdateEvent(event.id)}
                      >
                        <AiFillEdit />
                      </Button>
                      <Button
                        gap="0.2rem"
                        onClick={() => onDelete(event.id, event.author)}
                      >
                        <AiFillDelete />
                      </Button>
                    </ButtonGroup>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Text
          variation="primary"
          as="p"
          lineHeight="1.5em"
          fontWeight={400}
          fontSize="1em"
          fontStyle="normal"
          textDecoration="none"
          width="30vw"
        >
          No events found!
        </Text>
      )}
    </>
  );
};

export default EventsList;
