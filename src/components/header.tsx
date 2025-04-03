import Link from "next/link";

import { aboutPath, createTicketPath, homePath, ticketsPath } from "@/paths";

import { buttonVariants } from "./ui/button";
const Header = () => {
  return (
    <nav className="bg-slate-600 py-2 ">
      <ul className="flex justify-center space-x-8 w-full">
        <li>
          <Link
            href={homePath()}
            className={buttonVariants({
              variant: "outline",
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
