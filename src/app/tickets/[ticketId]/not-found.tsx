import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

export default function NotFound() {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Button variant="outline" className="h-10" asChild>
          <Link href={ticketsPath()}>Go to tickets</Link>
        </Button>
      }
    />
  );
}
