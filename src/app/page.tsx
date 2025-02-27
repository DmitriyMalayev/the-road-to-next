import Link from "next/link";

import { ticketsPath } from "@/paths";

const Homepage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8 border items-center justify-center">
      <main className="p-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold">Homepage</h1>
        <p className="text-muted-foreground">Welcome to your Next.js app.</p>
      </main>
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="text-blue-500 hover:underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
