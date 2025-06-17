"use client";
import { useState, type FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "~/app/_components/ui/dialog";
import { useIsMac } from "~/hooks/use-mac";
import { Button } from "~/app/_components/ui/button";
import { cn } from "~/lib/utils";
import CommandMenuKbd from "./command-menu-kbd";
import type { DialogProps } from "@radix-ui/react-dialog";

interface CommandMenuProps extends DialogProps {}

const CommandMenu: FC<CommandMenuProps> = ({ ...props }) => {
  const [open, setOpen] = useState<boolean>(false);
  const isMac = useIsMac();

  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            "bg-background text-foreground dark:bg-card relative h-8 w-full justify-start border px-3 pl-2.5 font-normal shadow-none sm:pr-12 md:w-56",
          )}
        >
          <span className="hidden lg:inline-flex">Search Location</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <div className="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
            <CommandMenuKbd>{isMac ? "⌘" : "Ctrl"}</CommandMenuKbd>
            <CommandMenuKbd className="aspect-square">K</CommandMenuKbd>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search Location</DialogTitle>
          <DialogDescription>
            Search for locations and places.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          {/* Add your search input and results here */}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CommandMenu;
