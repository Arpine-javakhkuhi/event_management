import { CreateEventInput, UpdateEventInput } from "@/API";

export const prepareCreateEventFields = (
  fields: Omit<CreateEventInput, "author">,
  userId: string
) => {
  const updatedFields: CreateEventInput = {
    name: "",
    author: "",
    date: "",
  };

  Object.keys(fields).forEach((key) => {
    if (typeof fields[key] === "string") {
      updatedFields[key] = fields[key].trim();
    } else {
      updatedFields[key] = fields[key];
    }
  });

  updatedFields.author = userId;

  return updatedFields;
};

export const prepareEditEventFields = (
  fields: Omit<UpdateEventInput, "author">,
  userId: string,
  eventId: string
) => {
  const updatedFields: UpdateEventInput = {
    name: "",
    author: "",
    date: "",
    id: eventId,
  };

  Object.keys(fields).forEach((key) => {
    if (typeof fields[key] === "string") {
      updatedFields[key] = fields[key].trim();
    } else {
      updatedFields[key] = fields[key];
    }
  });

  updatedFields.author = userId;

  return updatedFields;
};
