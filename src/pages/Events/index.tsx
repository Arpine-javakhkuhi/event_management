import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "aws-amplify/auth";
import { Button } from "@aws-amplify/ui-react";

import EventsList from "../../components/EventsList";
import { Route } from "../../types/enum";

const Events = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user?.userId) {
        setUserId(user.userId);
      }
    });
  }, []);

  const goToCreateEvent = () => {
    navigate(`${Route.Events}/create`, { state: { userId } });
  };

  return (
    <>
      <Button marginBottom={16} onClick={() => goToCreateEvent()}>
        Create an event
      </Button>

      <EventsList userId={userId} />
    </>
  );
};

export default Events;
