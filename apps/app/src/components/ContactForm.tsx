"use client";

import { Loader2, Mail, MessageSquare, Send, User } from "lucide-react";
import React, { useCallback, useState } from "react";
import { GradientButton } from "@/components/cosmic/GradientButton";

type FormState = "idle" | "submitting" | "success" | "error";

type ContactFormProps = {
  className?: string;
  successTitle?: string;
  successMessage?: string;
  submitLabel?: string;
  onSuccess?: () => void;
};

export const ContactForm = ({
  className,
  successTitle = "Message Sent!",
  successMessage = "I'll be in touch with you as soon as possible.",
  submitLabel = "Send Message",
  onSuccess,
}: ContactFormProps = {}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setState("submitting");
      setErrorMessage("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to send message");
        }

        setState("success");
        onSuccess?.();
      } catch (err) {
        setState("error");
        setErrorMessage(
          err instanceof Error ? err.message : "Something went wrong"
        );
      }
    },
    [name, email, message, onSuccess]
  );

  const cardBase =
    "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_8px_40px_-12px_rgba(56,189,248,0.15)] backdrop-blur-xl backdrop-saturate-150";

  if (state === "success") {
    return (
      <div
        className={`${cardBase} text-center${className ? ` ${className}` : ""}`}
      >
        <span
          aria-hidden
          className="absolute inset-x-8 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(56,189,248,0.9), rgba(124,92,255,0.9), transparent)",
          }}
        />
        <div
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
          style={{ background: "var(--gradient-primary)" }}
        >
          <svg
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display mb-3 text-2xl font-bold text-[--ink]">
          {successTitle}
        </h3>
        <p className="mb-8 text-[--ink-dim]">{successMessage}</p>
        <GradientButton
          type="button"
          variant="primary"
          size="md"
          onClick={() => setState("idle")}
        >
          Send Another
        </GradientButton>
      </div>
    );
  }

  return (
    <div className={`${cardBase}${className ? ` ${className}` : ""}`}>
      {/* Gradient top stroke */}
      <span
        aria-hidden
        className="absolute inset-x-8 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.9), rgba(124,92,255,0.9), transparent)",
        }}
      />
      {/* Decorative corner glows */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[rgba(56,189,248,0.18)] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[rgba(124,92,255,0.18)] blur-[100px]" />

      <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
        <Field
          icon={User}
          label="Your Name"
          placeholder="Jane Doe"
          type="text"
          value={name}
          onChange={setName}
          disabled={state === "submitting"}
        />
        <Field
          icon={Mail}
          label="Email Address"
          placeholder="you@example.com"
          type="email"
          value={email}
          onChange={setEmail}
          disabled={state === "submitting"}
        />

        <div>
          <label className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[--cyan]">
            <MessageSquare className="h-3 w-3" />
            What can I help you with?
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project…"
            rows={4}
            required
            disabled={state === "submitting"}
            className="w-full resize-none rounded-lg border border-white/10 bg-[--bg-2]/60 p-4 font-mono text-sm text-[--ink] outline-none transition-all placeholder:text-[--ink-faint] focus:border-[rgba(56,189,248,0.5)] focus:bg-[--bg-2]/80 disabled:opacity-50"
          />
        </div>

        {state === "error" && (
          <p className="font-mono text-sm text-red-400">{errorMessage}</p>
        )}

        <GradientButton
          type="submit"
          variant="primary"
          size="lg"
          disabled={state === "submitting"}
          className="w-full"
        >
          {state === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {submitLabel}
            </>
          )}
        </GradientButton>
      </form>
    </div>
  );
};

function Field({
  icon: Icon,
  label,
  placeholder,
  type,
  value,
  onChange,
  disabled,
}: {
  icon: typeof User;
  label: string;
  placeholder: string;
  type: "text" | "email";
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[--cyan]">
        <Icon className="h-3 w-3" />
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        disabled={disabled}
        className="w-full rounded-lg border border-white/10 bg-[--bg-2]/60 p-4 font-mono text-sm text-[--ink] outline-none transition-all placeholder:text-[--ink-faint] focus:border-[rgba(56,189,248,0.5)] focus:bg-[--bg-2]/80 disabled:opacity-50"
      />
    </div>
  );
}
