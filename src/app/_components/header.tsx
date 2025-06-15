import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { Icons } from "~/app/_components/icons";
import CommandMenu from "./command-menu";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header
      className={cn(
        "fixed top-0 z-20 flex w-screen flex-row items-center justify-center gap-0 px-6 py-6 xl:px-14",
        true && "justify-center",
      )}
    >
      <div className="flex w-full items-center justify-between">
        <Link href={"/"}>
          <Icons.Sprout className="stroke-foreground fill-primary h-12 w-12 stroke-1" />
        </Link>
        <CommandMenu />
      </div>
    </header>
  );
};

export default Header;
