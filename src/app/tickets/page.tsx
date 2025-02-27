import Link from "next/link";

import initialTickets from "@/data";
import { ticketPath } from "@/paths";
const Tickets = () => {
  return (
    <div className="relative pt-20">
      <h1 className="text-center absolute top-0 left-0 right-0 mt-5">
        All Tickets
      </h1>
      <ul className="grid gap-4 bg-slate-500 p-10 m-10 mt-10">
        {initialTickets.map((ticket) => (
          <li key={ticket.id} className="bg-blue-900 p-4 rounded-lg shadow">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">{ticket.title}</h2>
              <p className="mt-2 text-sm text-red-500">{ticket.status}</p>
            </div>
            <p className="mt-2">{ticket.content}</p>
            <Link
              className="mt-2 text-sm text-orange-300"
              href={ticketPath(ticket.id)}
            >
              View Ticket
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
