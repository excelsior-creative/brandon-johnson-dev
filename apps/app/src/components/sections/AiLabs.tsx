import { CosmicContainer } from "@/components/cosmic/Container";
import { SectionHeading } from "@/components/cosmic/SectionHeading";
import { aiLabs, type AiLab } from "@/lib/content/aiLabs";

export function AiLabs() {
  return (
    <section id="ai-labs" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 70% 30%, rgba(124,92,255,0.1), transparent 60%), radial-gradient(ellipse 700px 400px at 20% 80%, rgba(56,189,248,0.08), transparent 55%)",
        }}
      />
      <CosmicContainer className="relative z-10">
        <SectionHeading
          eyebrow="AI Labs"
          title="Pioneering AI agent development with the Eliza & OpenClaw frameworks"
          description="Active open-source contributor to the two frameworks shaping how production-grade agents get built — translating upstream work into sophisticated automation systems that handle complex, mission-critical workloads."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {aiLabs.map((lab) => (
            <AgentCard key={lab.title} lab={lab} />
          ))}
        </div>
      </CosmicContainer>
    </section>
  );
}

function AgentCard({ lab }: { lab: AiLab }) {
  return (
    <article
      className="relative flex min-h-[380px] flex-col overflow-hidden rounded-3xl border border-[--border-soft] p-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(124,92,255,0.05), rgba(56,189,248,0.02)), var(--card-soft)",
      }}
    >
      <h3 className="font-display text-[22px] font-semibold leading-snug tracking-[-0.01em] text-[--ink]">
        {lab.title}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-[--ink-dim]">
        {lab.description}
      </p>
      <div className="mt-auto pt-8">
        <LabVisualization variant={lab.variant} />
      </div>
    </article>
  );
}

function LabVisualization({ variant }: { variant: AiLab["variant"] }) {
  if (variant === "chat") {
    return (
      <div className="flex flex-col gap-2">
        <ChatPill>analyze the Q3 automation backlog</ChatPill>
        <ChatPill mine>on it — spinning up 12 agents…</ChatPill>
        <ChatPill mine>found 47 ticket candidates, 9 hot</ChatPill>
        <ChatPill>ship a summary</ChatPill>
      </div>
    );
  }
  if (variant === "stack") {
    return (
      <div className="grid grid-cols-3 gap-2">
        {["GPT-4o", "Claude 4.6", "Llama 3", "Gemini", "Mistral", "Eliza"].map((m) => (
          <div
            key={m}
            className="flex items-center justify-center rounded-lg border border-[--border-soft] bg-white/[0.03] px-3 py-2 text-center font-mono text-[11px] text-[--ink-dim]"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[--cyan] shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            {m}
          </div>
        ))}
      </div>
    );
  }
  if (variant === "grid") {
    return (
      <div className="grid grid-cols-8 gap-1">
        {Array.from({ length: 32 }).map((_, i) => (
          <span
            key={i}
            className="aspect-square rounded-[3px]"
            style={{
              background:
                i % 7 === 0
                  ? "rgba(217,70,239,0.55)"
                  : i % 5 === 0
                    ? "rgba(124,92,255,0.5)"
                    : i % 3 === 0
                      ? "rgba(56,189,248,0.45)"
                      : "rgba(255,255,255,0.06)",
            }}
          />
        ))}
      </div>
    );
  }
  // globe
  return (
    <div className="flex justify-center">
      <div
        className="relative h-40 w-40 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(124,92,255,0.4), transparent 60%), radial-gradient(circle at 70% 70%, rgba(56,189,248,0.3), transparent 60%), #0a0d20",
          border: "1px solid rgba(56,189,248,0.25)",
          boxShadow: "0 0 80px rgba(56,189,248,0.15), inset 0 0 40px rgba(0,0,0,0.6)",
        }}
      >
        <span
          className="absolute inset-[10%] rounded-full border border-dashed"
          style={{ borderColor: "rgba(56,189,248,0.25)" }}
        />
        <span
          className="absolute inset-[22%] rounded-full border border-dashed"
          style={{ borderColor: "rgba(124,92,255,0.25)" }}
        />
      </div>
    </div>
  );
}

function ChatPill({
  children,
  mine,
}: {
  children: React.ReactNode;
  mine?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border px-4 py-2 text-xs leading-snug ${
        mine
          ? "self-end border-[rgba(56,189,248,0.2)] bg-[rgba(56,189,248,0.1)] text-[--ink]"
          : "self-start border-[--border-soft] bg-white/[0.04] text-[--ink-dim]"
      }`}
    >
      {children}
    </div>
  );
}
