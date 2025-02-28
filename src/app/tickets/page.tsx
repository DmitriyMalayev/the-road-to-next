import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import initialTickets from "@/data";

import { CheckIcon, InProgressIcon, OpenIcon } from "../Icons";

export const TICKET_ICONS = {
  OPEN: <OpenIcon className="text-orange-300" />,
  DONE: <CheckIcon className="text-orange-300" />,
  IN_PROGRESS: <InProgressIcon className="text-orange-300" />,
};

const Tickets = () => {
  return (
    <div className="flex flex-col mx-20 gap-y-8 p-4">
      <header className="text-center">
        <h1 className="text-2xl font-bold">All Tickets</h1>
        <p className="text-muted-foreground">Here are all the tickets.</p>
      </header>

      <div className="p-4 rounded-lg">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {initialTickets.map((ticket) => (
            <Card
              key={ticket.id}
              className="bg-blue-600 rounded-lg overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span className="truncate text-orange-300">
                    {ticket.title}
                  </span>
                  <span>{TICKET_ICONS[ticket.status]}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-100">{ticket.content}</p>
              </CardContent>
              <CardFooter>
                <Link
                  className="text-orange-300 underline"
                  href={`/tickets/${ticket.id}`}
                >
                  View Details
                </Link>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tickets;
