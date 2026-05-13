import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  revenue: z.string().min(1),
  industry: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, company, revenue, industry, message } = parsed.data;

    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "noreply@marginfy.com";
    const toEmail = process.env.RESEND_TO_EMAIL ?? "admin@marginfy.com";

    await resend.emails.send({
      from: `Marginfy Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name} — ${company}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F2240; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Website Enquiry</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">marginfy.com contact form</p>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;">Name</td><td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #1B4FE4;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Company</td><td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #0f172a;">${company}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Revenue</td><td style="padding: 8px 0; font-size: 14px;">${revenue}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Industry</td><td style="padding: 8px 0; font-size: 14px;">${industry}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="color: #0f172a; font-size: 14px; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to the enquirer
    await resend.emails.send({
      from: `Clemency Mdaya — Marginfy <${fromEmail}>`,
      to: email,
      subject: `Thanks for reaching out, ${name.split(" ")[0]}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F2240; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Thanks for your message</h1>
          </div>
          <div style="background: white; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #374151; font-size: 15px;">Hi ${name.split(" ")[0]},</p>
            <p style="color: #374151; font-size: 15px;">Thank you for reaching out to Marginfy. I&apos;ve received your message and will be in touch within one business day.</p>
            <p style="color: #374151; font-size: 15px;">In the meantime, you can <a href="https://www.marginfy.com/book-a-call" style="color: #1B4FE4;">book a discovery call here</a> if you&apos;d prefer to speak sooner.</p>
            <p style="color: #374151; font-size: 15px; margin-bottom: 4px;">Best regards,</p>
            <p style="color: #0F2240; font-size: 15px; font-weight: 600; margin: 0;">Clemency Mdaya</p>
            <p style="color: #64748b; font-size: 13px; margin: 2px 0 0;">Founder & Fractional CFO, Marginfy</p>
            <p style="color: #64748b; font-size: 13px;"><a href="https://www.marginfy.com" style="color: #1B4FE4;">www.marginfy.com</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
