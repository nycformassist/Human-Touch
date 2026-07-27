import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';

interface IntakePayload {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  goals: string;
  preferredExperience: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidPayload(body: unknown): body is IntakePayload {
  if (!body || typeof body !== 'object') return false;
  const b = body as Record<string, unknown>;
  const requiredFields = ['fullName', 'email', 'phone', 'experience', 'goals', 'preferredExperience'];
  return requiredFields.every((field) => typeof b[field] === 'string' && (b[field] as string).trim().length > 0);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isValidPayload(req.body)) {
    return res.status(400).json({ error: 'Missing or invalid intake fields.' });
  }

  const { fullName, email, phone, experience, goals, preferredExperience } = req.body;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.INTAKE_TO_EMAIL || 'valentine@thehumananchor.com';
  const fromEmail = process.env.INTAKE_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error('Missing SendGrid configuration: SENDGRID_API_KEY or INTAKE_FROM_EMAIL not set.');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  sgMail.setApiKey(apiKey);

  const textBody = [
    `New Human Anchor intake submission`,
    ``,
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Preferred Experience: ${preferredExperience}`,
    ``,
    `What they're experiencing:`,
    experience,
    ``,
    `Wellness goals:`,
    goals,
  ].join('\n');

  const htmlBody = `
    <h2>New Human Anchor Intake Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Preferred Experience:</strong> ${escapeHtml(preferredExperience)}</p>
    <p><strong>What they're experiencing:</strong><br/>${escapeHtml(experience).replace(/\n/g, '<br/>')}</p>
    <p><strong>Wellness goals:</strong><br/>${escapeHtml(goals).replace(/\n/g, '<br/>')}</p>
  `;

  try {
    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: `New Intake Assessment: ${fullName}`,
      text: textBody,
      html: htmlBody,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('SendGrid submission error:', error);
    return res.status(502).json({ error: 'Failed to send intake email.' });
  }
}
