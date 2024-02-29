import React from 'react';

const Card: React.FC = () => {
  return (
    <div className='flex flex-col gap-5 items-center lg:flex-row lg:items-stretch lg:justify-center xl:gap-10'>
    <div className='w-full max-w-96 shadow-md bg-slate-50 text-black p-3 rounded-lg'>
      <div className='flex content-between items-center mb-4 gap-4'>
        <p className='text-2xl '>Equipada com a mais sofisticada tecnologia!</p>
        <p className='text-6xl'>🏍️</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='list-item ml-3'>Sistema de injeçao eletronica</p>
        <p className='list-item ml-3'>Freio a disco nas 2 rodas</p>
        <p className='list-item ml-3'>Freios CBS</p>
        <p className='list-item ml-3'>Painel 100% digital</p>
        <p className='list-item ml-3'>Carregador de celular</p>
        <p className='list-item ml-3'>Partida elétrica</p>
      </div>
    </div>
    
    <div className='w-full max-w-96 shadow-md bg-slate-50 text-black p-3 rounded-lg'>
      <div className='flex content-between items-center mb-4 gap-4'>
        <p className='text-2xl '>A <span className='font-bold'>unica</span> concessionaria Shinerai que oferece hoje 1 ano de garantia!</p>
        <p className='text-6xl'>🤝</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-bold text-lg'>Na sua compra voce ainda ganha:</p>
        <p className='list-item ml-3'>1 capacete</p>
        <p className='list-item ml-3'>Tanque cheio</p>
        <p className='list-item ml-3'>2 primeiras revisoes de garantia 100% gratis</p>
        <p className='list-item ml-3'>1 ano de garantia</p>
      </div>
    </div>

    <div className='w-full max-w-96 shadow-md bg-slate-50 text-black p-3 rounded-lg'>
    <div className='flex content-between items-center mb-4 gap-4'>
      <p className='text-2xl '>Um preco justo que cabe no seu bolso!</p>
      <p className='text-6xl'>🤑</p>
    </div>
    <div className='flex flex-col gap-2'>
      <p className='text-lg'>Valor de apenas <span className='text-xl font-bold text-green-600'>R$15.490,00</span>!</p>
      <p>Financiamos em ate 48x sem entrada!</p>
      <div>
        <h3>Disponivel nas cores:</h3>
        <p className='list-item ml-3'>Preto</p>
        <p className='list-item ml-3'>Vermelho</p>
        <p className='list-item ml-3'>Cinza</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Card;