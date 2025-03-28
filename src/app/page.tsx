import Link from "next/link";

import Heading from "@/components/heading";
import { ticketsPath } from "@/paths";

const Homepage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8 border items-center justify-center">
      <Heading title="Homepage" description="Welcome to your Next.js app." />
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="text-blue-500 hover:underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
