import assert from "node:assert/strict";
import test from "node:test";
import { validateContactPayload } from "./contact.js";

test("accepts and trims a valid contact payload", () => {
  assert.deepEqual(
    validateContactPayload({ name: "  Ada  ", email: " ada@example.com ", message: " Hello ", website: "" }),
    { ok: true, data: { name: "Ada", email: "ada@example.com", message: "Hello" } },
  );
});

test("rejects missing fields and invalid email addresses", () => {
  assert.deepEqual(validateContactPayload({ name: "", email: "nope", message: "" }), {
    ok: false,
    error: "Please complete all fields.",
  });
  assert.deepEqual(validateContactPayload({ name: "Ada", email: "nope", message: "Hello" }), {
    ok: false,
    error: "Please enter a valid email address.",
  });
});

test("silently accepts honeypot submissions", () => {
  assert.deepEqual(
    validateContactPayload({ name: "Bot", email: "bot@example.com", message: "Spam", website: "filled" }),
    { ok: false, spam: true },
  );
});

test("rejects oversized messages", () => {
  assert.deepEqual(
    validateContactPayload({ name: "Ada", email: "ada@example.com", message: "x".repeat(5001) }),
    { ok: false, error: "One or more fields are too long." },
  );
});
