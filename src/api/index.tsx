import { generateClient } from "aws-amplify/api";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import {
  CreateEventInput,
  DeleteEventInput,
  Event,
  UpdateEventInput,
} from "@/API";

const client = generateClient();

export const allEvents = async (): Promise<Event[]> => {
  try {
    const events = await client.graphql({
      query: queries.listEvents,
      variables: { filter: { date: { gt: new Date().toISOString() } } },
    });
    return events.data.listEvents.items;
  } catch (err) {
    return err.message;
  }
};

export const getEvent = async (id: string): Promise<Event> => {
  try {
    const event = await client.graphql({
      query: queries.getEvent,
      variables: { id },
    });
    return event?.data?.getEvent;
  } catch (err) {
    return err.message;
  }
};

export const createEvent = async (data: CreateEventInput): Promise<Event> => {
  try {
    const event = await client.graphql({
      query: mutations.createEvent,
      variables: { input: data },
    });
    return event?.data?.createEvent;
  } catch (err) {
    return err.message;
  }
};

export const deleteEvent = async (
  id: DeleteEventInput,
  authorId: string
): Promise<Event> => {
  try {
    const event = await client.graphql({
      query: mutations.deleteEvent,
      variables: {
        input: id,
        condition: {
          author: { eq: authorId },
        },
      },
    });

    return event.data.deleteEvent;
  } catch (err) {
    return err.message;
  }
};

export const updateEvent = async (data: UpdateEventInput): Promise<Event> => {
  try {
    const event = await client.graphql({
      query: mutations.updateEvent,
      variables: { input: data },
    });
    return event?.data?.updateEvent;
  } catch (err) {
    return err.message;
  }
};
