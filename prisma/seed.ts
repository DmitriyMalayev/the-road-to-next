import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const tickets = [
  {
    title: "Sample ticket 1",
    content: "This is a sample ticket 1.",
    status: "DONE" as const,
  },
  {
    title: "Sample ticket 2",
    content: "This is a sample ticket 2.",
    status: "IN_PROGRESS" as const,
  },
  {
    title: "Sample ticket 3",
    content: "This is a sample ticket 3.",
    status: "DONE" as const,
  },
  {
    title: "Sample ticket 4",
    content: "This is a sample ticket 4.",
    status: "DONE" as const,
  },
  {
    title: "Sample ticket 5",
    content: "This is a sample ticket 5.",
    status: "DONE" as const,
  },
];

const seed = async () => {
  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
