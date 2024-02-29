import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="gap-10 flex flex-col items-center" >
      <h1 className="text-center text-lg text-black p-5 pb-0">A espera acabou, a campeã de vendas vai voltar e agora você está ainda mais perto de conquistar a sua.</h1>
      <div className="max-w-screen">
        <Image
            src="/motorbike.jpeg"
            alt="moto"
            className="w-full h-auto"
            width={1920}
            height={1080}
            />
      </div>
        <a href="" className="text-center text-white text-lg font-bold w-6/12 bg-green-500 rounded-md p-2 shadow-md shadow-green-200">Fale Conosco!</a>
      
    </div>
   
  );
};

export default Hero;