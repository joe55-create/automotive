// @ts-check

import { Resend } from 'resend';

const WORKSHOP_EMAIL = 'saravmotors@gmail.com';
const FROM_EMAIL = 'Sarav Motors <quotes@saravmotors.com.au>';

const REQUIRED_FIELDS = [
  'name',
  'phone',
  'email',
  'service',
  'car_model',
  'message',
];

/**
 * @param {unknown} value
 * @returns {string}
 */
function cleanValue(value) {
  return typeof value === 'string' ? value.trim() : '';
}

/**
 * @param {unknown} value
 * @returns {string}
 */
function escapeHtml(value) {
  return cleanValue(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

/**
 * @param {Record<string, unknown>} body
 * @returns {string[]}
 */
function getMissingFields(body) {
  return REQUIRED_FIELDS.filter((field) => !cleanValue(body[field]));
}

/**
 * @param {{
 *   name: string;
 *   phone: string;
 *   email: string;
 *   service: string;
 *   carModel: string;
 *   message: string;
 * }} params
 * @returns {string}
 */
function buildQuoteEmailHtml({
  name,
  phone,
  email,
  service,
  carModel,
  message,
}) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 24px; background: #f8fafc;">
      <div style="max-width: 640px; margin: auto; background: #ffffff; padding: 30px; border-radius: 16px; border: 1px solid #e5e7eb;">
        <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #2563eb;">
          Sarav Motors Website Enquiry
        </p>

        <h2 style="margin: 0 0 24px; color: #111827;">
          New Quote Request
        </h2>

        <p><strong>Full Name:</strong><br />${name}</p>
        <p><strong>Phone:</strong><br />${phone}</p>
        <p><strong>Email:</strong><br />${email}</p>
        <p><strong>Requested Service:</strong><br />${service}</p>
        <p><strong>Vehicle:</strong><br />${carModel}</p>

        <div style="margin-top: 24px;">
          <strong>Customer Message:</strong>

          <div style="margin-top: 10px; padding: 16px; background: #f3f4f6; border-radius: 12px; line-height: 1.7; color: #111827;">
            ${message}
          </div>
        </div>

        <p style="margin-top: 28px; font-size: 12px; color: #6b7280;">
          This enquiry was submitted through the Sarav Motors website quote form.
        </p>
      </div>
    </div>
  `;
}

/**
 * @param {import('next').NextApiRequest} request
 * @param {import('next').NextApiResponse} response
 * @returns {Promise<void>}
 */
export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');

    response.status(405).json({
      success: false,
      message: 'Method not allowed.',
    });

    return;
  }

  if (!process.env.RESEND_API_KEY) {
    response.status(503).json({
      success: false,
      message: 'Quote sending is not configured yet.',
    });

    return;
  }

  try {
    const body = /** @type {Record<string, unknown>} */ (request.body);

    if (cleanValue(body.website)) {
      response.status(200).json({
        success: true,
        message: 'Request received.',
      });

      return;
    }

    const missingFields = getMissingFields(body);

    if (missingFields.length > 0) {
      response.status(400).json({
        success: false,
        message: 'Please complete all required fields.',
        fieldErrors: Object.fromEntries(
          missingFields.map((field) => [field, ['This field is required.']])
        ),
      });

      return;
    }

    const safeName = escapeHtml(body.name);
    const safePhone = escapeHtml(body.phone);
    const safeEmail = escapeHtml(body.email);
    const safeService = escapeHtml(body.service);
    const safeCarModel = escapeHtml(body.car_model);
    const safeMessage = escapeHtml(body.message);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: WORKSHOP_EMAIL,
      replyTo: safeEmail,
      subject: `New Quote Request - ${safeService}`,
      html: buildQuoteEmailHtml({
        name: safeName,
        phone: safePhone,
        email: safeEmail,
        service: safeService,
        carModel: safeCarModel,
        message: safeMessage,
      }),
    });

    if (error) {
      console.error('Resend Error:', error);

      response.status(503).json({
        success: false,
        message: 'Email service failed. Please check Resend settings.',
      });

      return;
    }

    response.status(200).json({
      success: true,
      message: 'Your quote request has been sent successfully.',
    });
  } catch (error) {
    console.error('Quote API Error:', error);

    response.status(500).json({
      success: false,
      message: 'Something went wrong while sending your request.',
    });
  }
}