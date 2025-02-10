import initialTickets from "@/data";

const Tickets = () => {
  return (
    <div>
      <h1>All Tickets</h1>
      <ul className="grid gap-4 bg-gray-600 p-4 mt-10">
        {initialTickets.map((ticket) => (
          <li key={ticket.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">{ticket.title}</h2>
            <p className="mt-2">{ticket.content}</p>
            <p className="mt-2 text-sm text-gray-500">{ticket.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
