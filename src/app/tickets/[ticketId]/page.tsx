import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import initialTickets from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const foundTicket = initialTickets.find((ticket) => ticket.id === ticketId);
  if (!foundTicket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link
              className="text-sm underline text-blue-300"
              href={ticketsPath()}
            >
              Back to Tickets
            </Link>
          </Button>
        }
      />
    );
  } else {
    return (
      <div className="flex justify-center animate-fade-from-top">
        <TicketItem ticket={foundTicket} isDetail />
      </div>
    );
  }
};

export default TicketPage;
