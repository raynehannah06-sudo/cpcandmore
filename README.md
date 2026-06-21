# Commercial Pro Clean & More — Marketing Website

Modern marketing website for **Commercial Pro Clean & More, LLC** (Valdosta, GA). Built with Next.js 16 App Router, Tailwind CSS v4, and lucide-react.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build — must pass with zero errors
npm start       # serve production build locally
```

---

## Where to Put the Real Logo

Drop your logo file at:

```
/public/logo.png
```

- **Format:** PNG with transparent background recommended
- **Size:** 200x200 px minimum (renders at 44x44 in the header, 280x280 in the hero)
- The Image components reference `/logo.png` with alt text already set

---

## TODO Placeholders to Replace

Search for `// TODO` in the codebase to find all placeholders:

| File | What to replace |
|---|---|
| `app/page.tsx` | Phone `(229) 555-0100` and email `info@cpcandmore.com` |
| `app/components/Footer.tsx` | Same phone and email |
| `app/api/contact/route.ts` | Wire up real email sending (see below) |

---

## Wiring Up Real Email (Contact Form)

Open `app/api/contact/route.ts`. The form data is validated and logged — swap the `console.log` stub with one of:

### Option A — Resend (recommended)

```bash
npm install resend
```

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "noreply@cpcandmore.com",
  to: "info@cpcandmore.com",
  subject: `New Service Request — ${body.service}`,
  text: `Name: ${body.name}\nPhone: ${body.phone}\nEmail: ${body.email}\n...`,
});
```

Set `RESEND_API_KEY` in `.env.local`.

### Option B — Nodemailer (SMTP)

```bash
npm install nodemailer && npm install -D @types/nodemailer
```

```ts
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});
await transporter.sendMail({ from, to, subject, text });
```

---

## Project Structure

```
cpc-site/
app/
  api/contact/route.ts     Contact form POST handler
  components/
    Header.tsx             Sticky nav with mobile hamburger
    Hero.tsx               Full-screen hero section
    Section.tsx            Section wrapper + SectionHeading helper
    ServiceCard.tsx        Individual service card
    ScheduleTable.tsx      Cleaning frequency table
    ContactForm.tsx        Work-order style contact form
    Footer.tsx             Footer with logo, nav, contact
  globals.css              Tailwind v4 + CSS custom properties
  layout.tsx               Root layout, SEO metadata
  page.tsx                 Main page assembling all sections
public/
  logo.png                 REPLACE with real logo (transparent PNG)
  og-image.png             REPLACE with real 1200x630 OG image
```

---

## Brand Tokens

Defined as CSS variables in `globals.css`:

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0a0a0a` | Dark backgrounds |
| `--color-surface` | `#ffffff` | Light backgrounds |
| `--color-accent` | `#d11a1a` | Red — buttons, borders, highlights |
| `--color-muted` | `#6b7280` | Secondary text |

---

## Deployment

No database or environment variables required to run (only needed once you wire up email sending).

```bash
vercel --prod
```
