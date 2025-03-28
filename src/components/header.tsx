import Link from "next/link";

import { aboutPath, createTicketPath, homePath, ticketsPath } from "@/paths";

import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            href={homePath()}
            className={buttonVariants({
              variant: "outline",
              className: "min-w-40",
            })}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={aboutPath()}
            className={buttonVariants({
              variant: "outline",
              className: "min-w-40",
            })}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={ticketsPath()}
            className={buttonVariants({
              variant: "outline",
              className: "min-w-40",
            })}
          >
            Tickets
          </Link>
        </li>
        <li>
          <Link
            href={createTicketPath()}
            className={buttonVariants({
              variant: "outline",
              className: "min-w-40",
            })}
          >
            Create Ticket
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
