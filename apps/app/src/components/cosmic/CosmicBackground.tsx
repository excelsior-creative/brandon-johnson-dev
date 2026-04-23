import { cn } from "@/lib/utils";

type CosmicBackgroundProps = {
  className?: string;
  showGrid?: boolean;
  intensity?: number;
  variant?: "hero" | "section";
};

/**
 * Stacked nebula + grid layers used as a section background.
 * Values come from design/styles.css `.space-bg` block.
 */
export function CosmicBackground({
  className,
  showGrid = true,
  intensity = 0.9,
  variant = "section",
}: CosmicBackgroundProps) {
  const i = intensity;
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute -inset-[10%]"
        style={{
          background: [
            `radial-gradient(ellipse 800px 500px at 75% 40%, rgba(124,92,255, ${0.35 * i}), transparent 60%)`,
            `radial-gradient(ellipse 700px 400px at 85% 75%, rgba(217,70,239, ${0.22 * i}), transparent 55%)`,
            `radial-gradient(ellipse 900px 600px at 20% 90%, rgba(56,189,248, ${0.18 * i}), transparent 55%)`,
          ].join(","),
          filter: "blur(20px)",
        }}
      />
      {showGrid && (
        <div className="absolute inset-0 bg-grid-pattern mask-radial-fade opacity-80" />
      )}
      {variant === "hero" && (
        <div
          className="absolute rounded-full"
          style={{
            width: 140,
            height: 140,
            top: "18%",
            left: "42%",
            background:
              "radial-gradient(circle at 30% 30%, #2a2450 0%, #0a0b1f 60%, #000 100%)",
            boxShadow:
              "inset -18px -18px 40px rgba(0,0,0,0.9), 0 0 80px rgba(124,92,255,0.15)",
            opacity: 0.7,
          }}
        />
      )}
    </div>
  );
}
