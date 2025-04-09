import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Heading from "@/components/heading";
import { Placeholder } from "@/components/placeholder";
import Spinner from "@/components/spinner";
import TicketList from "@/components/ticket-list";
const TicketsPage = () => {
  console.log("TicketsPage");
  return (
    <div className="flex flex-col mx-auto max-w-7xl gap-y-8 p-4 animate-fade-from-top">
      <Heading title="All Tickets" description="Here are all the tickets." />
      <ErrorBoundary fallback={<Placeholder label="Error loading tickets" />}>
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default TicketsPage;
