"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail =  async (formData: FormData) => {
  const nomeCompleto = formData.get('nomeCompleto');
  const cpf = formData.get('cpf');
  const dataNascimento = formData.get('dataNascimento');
  const telefoneWhatsapp = formData.get('telefoneWhatsapp');
  const possuiHabilitacao = formData.get('possuiHabilitacao');
  const comoConquistar = formData.get('comoConquistar');

  const { data } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "luismingati@gmail.com",
    subject: "New user",
    text: `New user: ${nomeCompleto} - ${cpf} - ${dataNascimento} - ${telefoneWhatsapp} - ${possuiHabilitacao} - ${comoConquistar}`
  })
  console.log(data);
}