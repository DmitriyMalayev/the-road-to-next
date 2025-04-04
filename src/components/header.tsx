import Link from "next/link";

import { aboutPath, createTicketPath, homePath, ticketsPath } from "@/paths";

import ThemeSwitcher from "./theme/theme-switcher";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav className="flex justify-between border-b border-gray-200 py-4 px-1 ">
      <div className="flex gap-x-4 w-full">
        <Link
          href={homePath()}
          className={buttonVariants({
            variant: "outline",
          })}
        >
          Home
        </Link>
        <Link
          href={aboutPath()}
          className={buttonVariants({
            variant: "outline",
          })}
        >
          About
        </Link>
        <Link
          href={ticketsPath()}
          className={buttonVariants({
            variant: "outline",
          })}
        >
          Tickets
        </Link>
        <Link
          href={createTicketPath()}
          className={buttonVariants({
            variant: "outline",
          })}
        >
          Create Ticket
        </Link>
      </div>
      <div className="flex justify-end text-center">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Header;
