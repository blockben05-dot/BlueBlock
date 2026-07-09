import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const LEAD_NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL;

type QuoteRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body: QuoteRequestBody = await request.json();
  const { name, phone, email, service, message } = body;

  if (!name || !phone || !email || !service) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  if (!LEAD_NOTIFICATION_EMAIL) {
    return NextResponse.json(
      { error: "Lead notification email is not configured" },
      { status: 500 },
    );
  }

  const { error } = await resend.emails.send({
    from: "Diamond State Block Landscaping <onboarding@resend.dev>",
    to: LEAD_NOTIFICATION_EMAIL,
    replyTo: email,
    subject: `New quote request from ${name}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
