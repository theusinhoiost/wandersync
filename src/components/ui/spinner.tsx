import { Plane } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <div className="grid h-screen place-items-center">
      <Plane
        role="status"
        aria-label="Loading"
        className={cn(
          "size-4 animate-spin",
          "text-[var(--color-foreground)] ",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Spinner };
