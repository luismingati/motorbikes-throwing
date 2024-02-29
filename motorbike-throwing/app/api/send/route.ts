import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { firstName } = req.body;


    const data = await resend.emails.send({
      from: 'dontreply@gmail.com',
      to: ['luismingati@gmail.com'],
      subject: 'Hello world',
      // Aqui assumimos que você ajustou a chamada para funcionar com um dos dois: text ou react.
      text: `Hello, ${firstName}!`, // Exemplo simples usando texto
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
}
