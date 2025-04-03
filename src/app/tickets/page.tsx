import Heading from "@/components/heading";
import initialTickets from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";

const TicketsPage = () => {
  return (
    <div className="flex flex-col mx-20 gap-y-8 p-4 animate-fade-from-top">
      <Heading title="All Tickets" description="Here are all the tickets." />
      <div className="p-4 rounded-lg ">
        <ul className="gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {initialTickets.map((ticket) => (
            <TicketItem key={ticket.id} ticket={ticket} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TicketsPage;
