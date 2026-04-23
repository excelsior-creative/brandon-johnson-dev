import { cn } from "@/lib/utils";

export function CosmicContainer({
  children,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <As className={cn("mx-auto w-full max-w-[1280px] px-5 md:px-8", className)}>
      {children}
    </As>
  );
}
