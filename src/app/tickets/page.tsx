import { Suspense } from "react";

import Heading from "@/components/heading";
import Spinner from "@/components/spinner";
import TicketList from "@/components/ticket-list";

const TicketsPage = () => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl gap-y-8 p-4 animate-fade-from-top">
      <Heading title="All Tickets" description="Here are all the tickets." />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
