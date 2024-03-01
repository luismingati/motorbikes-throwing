"use client";
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { sendEmail } from '../sendEmail';
import { toast } from 'sonner';


const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpf: '',
    dataNascimento: '',
    telefoneWhatsapp: '',
    possuiHabilitacao: '', 
    comoConquistar: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      await sendEmail(formDataToSend);
      toast.success('Formulário enviado com sucesso!');
    } catch (error) {
      toast.error('Erro ao enviar o formulário. Tente novamente.');
    } finally {
      setIsLoading(false);
      setFormData({
        nomeCompleto: '',
        cpf: '',
        dataNascimento: '',
        telefoneWhatsapp: '',
        possuiHabilitacao: '', 
        comoConquistar: '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  return (
    <div id='form' className='px-4 mb-12 flex flex-col items-center'>
      <h2 className='text-2xl mb-3 text-center'>Preencha o formulário, para que possamos entrar em contato!</h2>
      <form onSubmit={handleSubmit} className="md:max-w-md lg:max-w-lg bg-white p-4 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomeCompleto">
            Nome Completo*
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="nomeCompleto" id="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label htmlFor="cpf" className="block text-gray-700 text-sm font-bold mb-2">
            CPF*
          </label>
          <InputMask mask="999.999.999-99" value={formData.cpf} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="cpf" id="cpf" placeholder="000.000.000-00" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataNascimento">
            Data de Nascimento*
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="dataNascimento" id="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label htmlFor="telefoneWhatsapp" className="block text-gray-700 text-sm font-bold mb-2">
            Telefone (Whatsapp)*
          </label>
          <InputMask mask="(99) 99999-9999" value={formData.telefoneWhatsapp} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="telefoneWhatsapp" id="telefoneWhatsapp" placeholder="(00) 00000-0000" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="possuiHabilitacao">
            Você possui Habilitação?*
          </label>
          <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="possuiHabilitacao" id="possuiHabilitacao" value={formData.possuiHabilitacao} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="SIM">SIM</option>
            <option value="NÃO">NÃO</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comoConquistar">
            Como você pretende conquistar a sua SHI 175 EFI?*
          </label>
          <select className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="comoConquistar" id="comoConquistar" value={formData.comoConquistar} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="FINANCIAMENTO COM ENTRADA">FINANCIAMENTO COM ENTRADA</option>
            <option value="FINANCIAMENTO SEM ENTRADA">FINANCIAMENTO SEM ENTRADA</option>
            <option value="À VISTA">À VISTA</option>
          </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      <div className='text-sm p-4 text-center font-thin max-w-lg'>
        <p><span className='text-red-800 font-medium'>*</span> Os seus dados são importantes para que nosso time te atenda ainda melhor. Lembrando que conosco seus dados estão protegidos e respeitamos todas as diretrizes de privacidade.
Um de nossos vendedores irá falar com você com uma proposta. <span className='text-red-800 font-medium'>*</span></p>
      </div>
    </div>
  );
};

export default Form;
