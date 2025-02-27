import Link from "next/link";

import initialTickets from "@/data";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const foundTicket = initialTickets.find((ticket) => ticket.id === ticketId);
  if (!foundTicket) {
    return (
      <div className="text-center mt-10">
        <h1>Ticket not found</h1>
        <p>Please go back to the tickets page and try again.</p>
        <Link className="text-sm underline text-blue-300" href={ticketsPath()}>
          Back to Tickets
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>TicketPage Page</h1>
      <h2>Ticket ID: {ticketId}</h2>
      <h2>Title: {foundTicket.title}</h2>
      <p>{foundTicket.content}</p>
      <p>Status: {foundTicket.status}</p>
    </div>
  );
};

export default TicketPage;
