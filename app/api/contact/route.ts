import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import twilio from "twilio";

interface ContactPayload {
  name: string;
  company?: string;
  phone: string;
  email: string;
  service: string;
  facilityType?: string;
  message?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildEmailBody(body: ContactPayload): string {
  return `
New Work Order Request — Commercial Pro Clean & More
=====================================================

Name:          ${body.name}
Company:       ${body.company || "—"}
Phone:         ${body.phone}
Email:         ${body.email}
Service:       ${body.service}
Facility Type: ${body.facilityType || "—"}

Message:
${body.message || "No additional details provided."}

=====================================================
Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}
  `.trim();
}

function buildSMSBody(body: ContactPayload): string {
  return (
    `New CPC Work Order:\n` +
    `Name: ${body.name}\n` +
    `Phone: ${body.phone}\n` +
    `Service: ${body.service}\n` +
    `Facility: ${body.facilityType || "—"}\n` +
    `Reply or call to follow up.`
  );
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, email, service } = body;

  if (!name?.trim() || !phone?.trim() || !email?.trim() || !service?.trim()) {
    return NextResponse.json(
      { error: "Missing required fields: name, phone, email, service" },
      { status: 422 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  const errors: string[] = [];

  // ── Email via Gmail SMTP ──────────────────────────────────────────────────
  // Set these in .env.local:
  //   GMAIL_USER=raynehannah06@gmail.com
  //   GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx   (Google App Password, not your login password)
  //
  // To generate an App Password:
  //   1. Go to myaccount.google.com → Security → 2-Step Verification → App passwords
  //   2. Create one for "Mail" → copy the 16-char code → paste as GMAIL_APP_PASSWORD
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"CPC Website" <${process.env.GMAIL_USER}>`,
        to: "raynehannah06@gmail.com",
        replyTo: body.email,
        subject: `New Work Order Request — ${body.service}`,
        text: buildEmailBody(body),
      });
    } catch (err) {
      console.error("[contact] Email send failed:", err);
      errors.push("email");
    }
  } else {
    console.warn("[contact] Email not sent — GMAIL_USER / GMAIL_APP_PASSWORD not set in .env.local");
  }

  // ── SMS via Twilio ────────────────────────────────────────────────────────
  // Set these in .env.local:
  //   TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  //   TWILIO_AUTH_TOKEN=your_auth_token
  //   TWILIO_FROM_NUMBER=+1xxxxxxxxxx   (your Twilio phone number)
  //
  // Sign up at twilio.com → get a free number → copy SID, token, and number
  if (
    process.env.TWILIO_ACCOUNT_SID &&
    process.env.TWILIO_AUTH_TOKEN &&
    process.env.TWILIO_FROM_NUMBER
  ) {
    try {
      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );

      await client.messages.create({
        body: buildSMSBody(body),
        from: process.env.TWILIO_FROM_NUMBER,
        to: "+12295310818",
      });
    } catch (err) {
      console.error("[contact] SMS send failed:", err);
      errors.push("sms");
    }
  } else {
    console.warn("[contact] SMS not sent — Twilio env vars not set in .env.local");
  }

  if (errors.length > 0) {
    console.error("[contact] Delivery failures:", errors);
  }

  // Always return success to the user — don't expose delivery failures
  return NextResponse.json({ success: true }, { status: 200 });
}
