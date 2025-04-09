import { notFound } from "next/navigation";

import { getTicket } from "@/features/queries/get-ticket";
import { TicketItem } from "@/features/ticket/components/ticket-item";

type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  console.log("TicketPage");
  const { ticketId } = await params;

  const foundTicket = await getTicket(ticketId);
  if (!foundTicket) {
    notFound();
  } else {
    return (
      <div className="flex justify-center animate-fade-from-top">
        <TicketItem ticket={foundTicket} isDetail />
      </div>
    );
  }
};

export default TicketPage;
