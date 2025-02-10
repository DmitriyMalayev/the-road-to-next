type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  return (
    <div>
      <h1>TicketPage Page</h1>
      <h2>Ticket ID: {ticketId}</h2>
    </div>
  );
};

export default TicketPage;
