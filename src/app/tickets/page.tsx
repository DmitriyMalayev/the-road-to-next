import Link from "next/link";

import Heading from "@/components/heading";
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
  OPEN: <OpenIcon />,
  DONE: <CheckIcon />,
  IN_PROGRESS: <InProgressIcon />,
};

const Tickets = () => {
  return (
    <div className="flex flex-col mx-20 gap-y-8 p-4 animate-fade-from-top">
      <Heading title="All Tickets" description="Here are all the tickets." />
      <div className="p-4 rounded-lg ">
        <ul className="gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
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
