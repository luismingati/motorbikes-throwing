import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="gap-10 flex flex-col items-center lg:flex-row lg:mt-10 lg:mb-5" >
      <div className='flex flex-col flex-1 lg:items-center lg:gap-7'>
        <h1 className="text-center text-xl text-black p-5 pb-0 lg:max-w-lg">A espera acabou, <b>a campeã de vendas está de volta</b> e agora você está ainda mais perto de conquistar a sua.</h1>
        <a href="#form" className="text-center max-w-52 text-white text-lg font-bold w-6/12 bg-green-700 rounded-md p-2 shadow-lg shadow-green-400 max-lg:hidden">Fale Conosco!</a>
      </div>
      <div className="max-w-screen lg:flex-1">
        <Image
            src="/motorbike.jpeg"
            alt="moto"
            className="w-full h-auto"
            width={1920}
            height={1080}
            />
      </div>
        <a href="#form" className="text-center max-w-52 text-white text-lg font-bold w-6/12 bg-green-700 rounded-md p-2 shadow-lg shadow-green-400 lg:hidden">Fale Conosco!</a>
    </div>
   
  );
};

export default Hero;