import { TicketItem } from "@/features/ticket/components/ticket-item";
import { prisma } from "@/lib/prisma";

const TicketList = async () => {
  const tickets = await prisma.ticket.findMany();
  console.log("TicketList");
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
