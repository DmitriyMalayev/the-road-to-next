"use client";
import { useEffect, useState } from "react";

import Heading from "@/components/heading";
import { getTickets } from "@/features/queries/get-tickets";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { Ticket } from "@/features/types";

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const fetchedTickets = await getTickets();
        setTickets(fetchedTickets);
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setTickets([]);
      }
    };
    fetchTickets();
  }, []);

  return (
    <div className="flex flex-col mx-auto max-w-7xl gap-y-8 p-4 animate-fade-from-top">
      <Heading title="All Tickets" description="Here are all the tickets." />
      <div className="p-4 rounded-lg">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tickets.map((ticket) => (
            <li key={ticket.id}>
              <TicketItem ticket={ticket} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TicketsPage;
