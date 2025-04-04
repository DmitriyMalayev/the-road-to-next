import { getTickets } from "@/features/queries/get-tickets";
import { TicketItem } from "@/features/ticket/components/ticket-item";

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <div className="p-4 rounded-lg">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <TicketItem ticket={ticket} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
