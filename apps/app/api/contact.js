const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

function json(response, status, body) {
  response.status(status).json(body);
}

export function validateContactPayload(payload) {
  const name = typeof payload?.name === "string" ? payload.name.trim() : "";
  const email = typeof payload?.email === "string" ? payload.email.trim() : "";
  const message = typeof payload?.message === "string" ? payload.message.trim() : "";
  const website = typeof payload?.website === "string" ? payload.website.trim() : "";

  if (website) return { ok: false, spam: true };
  if (!name || !email || !message) {
    return { ok: false, error: "Please complete all fields." };
  }
  if (name.length > MAX_NAME_LENGTH || email.length > MAX_EMAIL_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    return { ok: false, error: "One or more fields are too long." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  return { ok: true, data: { name, email, message } };
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return json(response, 405, { error: "Method not allowed." });
  }

  const result = validateContactPayload(request.body);
  if (!result.ok) {
    if (result.spam) return json(response, 200, { ok: true });
    return json(response, 400, { error: result.error });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || "hello@brandonjohnson.dev";
  const from = process.env.FROM_EMAIL || "BrandonJohnson.dev <website@brandonjohnson.dev>";

  if (!apiKey) {
    console.error("Contact form is missing RESEND_API_KEY.");
    return json(response, 503, { error: "The contact form is temporarily unavailable. Please email Brandon directly." });
  }

  const { name, email, message } = result.data;
  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New website inquiry from ${name}`,
        text: `${message}\n\nFrom: ${name}\nEmail: ${email}`,
        html: `<h2>New website inquiry</h2><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p><hr><p><strong>From:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p>`,
      }),
    });

    if (!resendResponse.ok) {
      const providerError = await resendResponse.text();
      console.error("Resend rejected contact email:", resendResponse.status, providerError.slice(0, 500));
      return json(response, 502, { error: "Your message could not be sent. Please try again or email Brandon directly." });
    }

    const sent = await resendResponse.json();
    console.info("Contact form email accepted by Resend:", sent.id);
    return json(response, 200, { ok: true });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return json(response, 502, { error: "Your message could not be sent. Please try again or email Brandon directly." });
  }
}
