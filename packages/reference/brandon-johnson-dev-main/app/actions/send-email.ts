"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Update these with your actual email addresses
const TO_EMAIL = process.env.TO_EMAIL || "bjohnson@swizzmagik.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "brandon@forgeai.gg";

type ContactFormValues = {
  name: string;
  email: string;
  company?: string;
  walletAddress?: string;
  message: string;
};

export async function sendEmail(formData: ContactFormValues) {
  try {
    const { name, email, company, walletAddress, message } = formData;

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Contact Form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${
          walletAddress
            ? `<p><strong>Wallet Address:</strong> ${walletAddress}</p>`
            : ""
        }
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: "Failed to send email" };
  }
}
