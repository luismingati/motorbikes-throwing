import { EmailTemplate } from '@/app/components/EmailTemplate';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { firstName } = req.body;


    const data = await resend.emails.send({
      from: 'dontreply@gmail.com',
      to: ['luismingati@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName }),
      text: `Hello, ${firstName}!`,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}
