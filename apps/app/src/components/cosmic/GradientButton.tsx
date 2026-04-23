"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const gradientButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium border transition-[transform,box-shadow,background,border-color] duration-200 will-change-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cyan] focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "text-white border-transparent [background:var(--gradient-primary)] shadow-[0_8px_32px_rgba(56,189,248,0.28),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_42px_rgba(56,189,248,0.42),inset_0_1px_0_rgba(255,255,255,0.22)]",
        ghost:
          "text-[--ink] bg-white/[0.04] border-[--border-mid] hover:bg-white/[0.08] hover:border-[--border-strong]",
        outline:
          "text-[--ink] bg-transparent border-[--border-mid] hover:bg-white/[0.04] hover:border-[--cyan]/60",
        cyan:
          "text-[--cyan] bg-[rgba(56,189,248,0.08)] border-[--border-mid] hover:bg-[rgba(56,189,248,0.16)] hover:border-[rgba(56,189,248,0.4)]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean;
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GradientButton.displayName = "GradientButton";

export { gradientButtonVariants };
