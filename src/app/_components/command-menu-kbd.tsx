import React from "react";
import { cn } from "~/lib/utils";

interface CommandMenuKBDProps {}

const CommandMenuKBD = ({
  className,
  ...props
}: React.ComponentProps<"kbd">) => {
  return (
    <kbd
      className={cn(
        "bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3",
        className,
      )}
      {...props}
    />
  );
};

export default CommandMenuKBD;
