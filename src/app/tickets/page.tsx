import clsx from "clsx";
import Link from "next/link";

import initialTickets from "@/data";
import { ticketPath } from "@/paths";

export const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={clsx("size-6", className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);
export const OpenIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={clsx("size-6", className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
  </svg>
);

export const InProgressIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={clsx("size-6", className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
    />
  </svg>
);
export const TICKET_ICONS = {
  OPEN: <OpenIcon className="text-orange-300" />,
  DONE: <CheckIcon className="text-orange-300" />,
  IN_PROGRESS: <InProgressIcon className="text-orange-300" />,
};

const Tickets = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8 p-4">
      <header className="text-center">
        <h1 className="text-2xl font-bold">All Tickets</h1>
        <p className="text-muted-foreground">Here are all the tickets.</p>
      </header>

      <ul className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {initialTickets.map((ticket) => (
          <li
            key={ticket.id}
            className="bg-blue-600 p-4 rounded-lg shadow w-full max-w-[500px] border border-slate-500"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold truncate  text-orange-300">
                {ticket.title}
              </h3>
              <span className="text-sm font-bold ">
                {TICKET_ICONS[ticket.status]}
              </span>
            </div>

            <p
              className={clsx("text-sm text-slate-600 truncate", {
                "line-through": ticket.status === "DONE",
              })}
            ></p>
            <Link
              href={ticketPath(ticket.id)}
              className="inline-block mt-2 text-sm underline text-blue-100 hover:text-orange-400 transition-colors"
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
