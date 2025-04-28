import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
  decorative?: string;
}

export function ResponsiveSeparator({
  className,
  decorative,
  ...props
}: SeparatorProps) {
  return (
    <div
      role={decorative ? "none" : "separator"}
      className={cn(
        // Default: horizontal
        "bg-border my-4 h-[1px] w-[75%]",
        // md: vertical
        "min-[1500px]:mx-4 min-[1500px]:my-0 min-[1500px]:h-full min-[1500px]:w-[1px]",
        className,
      )}
      {...props}
    />
  );
}
