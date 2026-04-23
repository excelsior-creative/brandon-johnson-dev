import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  showDot?: boolean;
};

export function Eyebrow({ children, className, showDot = true }: EyebrowProps) {
  return (
    <span className={cn("eyebrow", className)}>
      {showDot && <span className="eyebrow-dot" />}
      {children}
    </span>
  );
}
