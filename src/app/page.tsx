import Link from "next/link";

import { ticketsPath } from "@/paths";

const Homepage = () => {
  return (
    <div>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Homepage</h1>
        <Link href={ticketsPath()} className="text-blue-500 hover:underline">
          Go to Tickets
        </Link>
      </main>
    </div>
  );
};

export default Homepage;
