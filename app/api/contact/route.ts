import { NextRequest, NextResponse } from "next/server";

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

  // TODO: Wire up real email sending here.
  // Option A — Resend:
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({ from: "...", to: "...", subject: "...", text: ... });
  //
  // Option B — Nodemailer (SMTP):
  //   import nodemailer from "nodemailer";
  //   const transporter = nodemailer.createTransport({ ... });
  //   await transporter.sendMail({ from, to, subject, text });

  console.log("[contact] New service request:", {
    name: body.name,
    company: body.company,
    phone: body.phone,
    email: body.email,
    service: body.service,
    facilityType: body.facilityType,
    message: body.message,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
