import initialTickets from "@/data";

import { Ticket } from "../types";

export const getTicket = async (id: string): Promise<Ticket | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const foundTicket = initialTickets.find((ticket) => ticket.id === id);
  return new Promise((resolve) => resolve(foundTicket || null));
};
