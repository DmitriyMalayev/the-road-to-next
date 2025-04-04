import clsx from "clsx";
import { LucideArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/constants";
import { Ticket } from "@/features/types";
import { ticketPath } from "@/paths";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideArrowUpRightFromSquare className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx("flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card
        className={clsx("min-w-[100%] overflow-hidden", {
          "max-h-[150px]": !isDetail,
        })}
      >
        <CardHeader>
          <CardTitle className="flex justify-evenly items-center w-full">
            <div className="flex gap-x-4 items-center">
              <span>{TICKET_ICONS[ticket.status]}</span>
              <span className="truncate">{ticket.title}</span>
              <div>
                {!isDetail && (
                  <div className="flex-shrink-0">{detailButton}</div>
                )}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
    </div>
  );
};

export { TicketItem };
