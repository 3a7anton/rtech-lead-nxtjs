import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, budget, message } = body

    // Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    const subject = `[RTech Lead] New enquiry from ${name} — ${service}`

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; background: #f8f7f4; padding: 32px 0; margin:0;">
  <div style="max-width:600px; margin:0 auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.07);">
    <!-- Header -->
    <div style="background:#0F0E2A; padding:32px 40px;">
      <p style="color:#E63946; font-size:11px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; margin:0 0 8px;">New project brief</p>
      <h1 style="color:#fff; font-size:24px; font-weight:800; margin:0; line-height:1.2;">
        ${name} wants to talk about <span style="color:#E63946;">${service}</span>
      </h1>
    </div>

    <!-- Body -->
    <div style="padding:32px 40px;">
      <table style="width:100%; border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0; border-bottom:1px solid #f0eee9; width:32%;">
            <span style="font-size:11px; font-weight:600; color:#adadbe; text-transform:uppercase; letter-spacing:0.08em;">Name</span>
          </td>
          <td style="padding:10px 0; border-bottom:1px solid #f0eee9; font-size:15px; color:#0F0E2A; font-weight:500;">
            ${name}
          </td>
        </tr>
        <tr>
          <td style="padding:10px 0; border-bottom:1px solid #f0eee9;">
            <span style="font-size:11px; font-weight:600; color:#adadbe; text-transform:uppercase; letter-spacing:0.08em;">Email</span>
          </td>
          <td style="padding:10px 0; border-bottom:1px solid #f0eee9; font-size:15px; color:#0F0E2A;">
            <a href="mailto:${email}" style="color:#E63946;">${email}</a>
          </td>
        </tr>
        ${phone ? `
        <tr>
          <td style="padding:10px 0; border-bottom:1px solid #f0eee9;">
            <span style="font-size:11px; font-weight:600; color:#adadbe; text-transform:uppercase; letter-spacing:0.08em;">Phone</span>
          </td>
          <td style="padding:10px 0; border-bottom:1px solid #f0eee9; font-size:15px; color:#0F0E2A;">${phone}</td>
        </tr>` : ''}
        <tr>
          <td style="padding:10px 0; border-bottom:1px solid #f0eee9;">
            <span style="font-size:11px; font-weight:600; color:#adadbe; text-transform:uppercase; letter-spacing:0.08em;">Service</span>
          </td>
          <td style="padding:10px 0; border-bottom:1px solid #f0eee9; font-size:15px; color:#0F0E2A; font-weight:600;">${service}</td>
        </tr>
        ${budget ? `
        <tr>
          <td style="padding:10px 0; border-bottom:1px solid #f0eee9;">
            <span style="font-size:11px; font-weight:600; color:#adadbe; text-transform:uppercase; letter-spacing:0.08em;">Budget</span>
          </td>
          <td style="padding:10px 0; border-bottom:1px solid #f0eee9; font-size:15px; color:#0F0E2A;">${budget}</td>
        </tr>` : ''}
      </table>

      <div style="margin-top:24px;">
        <p style="font-size:11px; font-weight:600; color:#adadbe; text-transform:uppercase; letter-spacing:0.08em; margin:0 0 10px;">Project Description</p>
        <div style="background:#f8f7f4; border-radius:10px; padding:20px 24px; font-size:15px; color:#2D2D3A; line-height:1.7; white-space:pre-wrap;">${message}</div>
      </div>

      <div style="margin-top:32px; background:#0F0E2A; border-radius:10px; padding:20px 24px; text-align:center;">
        <a href="mailto:${email}" style="display:inline-block; background:#E63946; color:#fff; padding:12px 32px; border-radius:8px; text-decoration:none; font-size:14px; font-weight:700;">
          Reply to ${name} →
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:20px 40px; border-top:1px solid #f0eee9; text-align:center;">
      <p style="font-size:12px; color:#adadbe; margin:0;">RTech Lead · infortechlead@gmail.com · 01771-778880</p>
    </div>
  </div>
</body>
</html>
    `.trim()

    await transporter.sendMail({
      from: `"RTech Lead Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,          // Send to yourself
      replyTo: email,                        // Reply goes to the client
      subject,
      html,
    })

    // Auto-reply to the client
    await transporter.sendMail({
      from: `"RTech Lead" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We received your brief, ${name.split(' ')[0]}!`,
      html: `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif; background:#f8f7f4; padding:32px 0; margin:0;">
  <div style="max-width:560px; margin:0 auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.07);">
    <div style="background:#0F0E2A; padding:32px 40px;">
      <h1 style="color:#fff; font-size:22px; font-weight:800; margin:0;">Brief received! 🎯</h1>
    </div>
    <div style="padding:32px 40px;">
      <p style="font-size:16px; color:#2D2D3A; line-height:1.7;">Hi ${name.split(' ')[0]},</p>
      <p style="font-size:15px; color:#6B6B80; line-height:1.7;">
        Thank you for reaching out about <strong style="color:#0F0E2A;">${service}</strong>. We've received your brief and our team will review it and respond within <strong style="color:#E63946;">one working day</strong>.
      </p>
      <p style="font-size:15px; color:#6B6B80; line-height:1.7;">
        In the meantime, feel free to explore our <a href="https://rtechlead.com/case-studies" style="color:#E63946;">case studies</a> to see how we've driven results for clients like you.
      </p>
      <p style="font-size:15px; color:#6B6B80; line-height:1.7; margin-top:24px;">Warm regards,<br><strong style="color:#0F0E2A;">The RTech Lead Team</strong></p>
    </div>
    <div style="padding:20px 40px; border-top:1px solid #f0eee9; text-align:center;">
      <p style="font-size:12px; color:#adadbe; margin:0;">RTech Lead · infortechlead@gmail.com · 01771-778880</p>
    </div>
  </div>
</body>
</html>
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
