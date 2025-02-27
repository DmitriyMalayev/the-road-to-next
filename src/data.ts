const initialTickets = [
  {
    id: "1",
    title: "Ticket 1",
    content: "Description 1",
    status: "DONE" as const,
  },
  {
    id: "2",
    title: "Ticket 2",
    content: "Description 2",
    status: "DONE" as const,
  },
  {
    id: "3",
    title: "Ticket 3",
    content: "Description 3",
    status: "OPEN" as const,
  },
  {
    id: "4",
    title: "Ticket 4",
    content: "Description 4",
    status: "IN_PROGRESS" as const,
  },
];

export default initialTickets;
