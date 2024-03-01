import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <div className='flex flex-col bg-white border-b-2 p-4 items-center'>
      <div className="flex  text-black gap-10 content items-center">
        <Image
        src="/shineray.png"
        alt='logo Shineray'
        width={120}
        height={24}/>
        <Image 
          src={'/logovalter.jpeg'}
          alt='logo Valter Moto'
          width={60}
          height={60}
          className='lg:hidden'
        />
        <Image 
          src={'/logovalter.jpeg'}
          alt='logo Valter Moto'
          width={80}
          height={80}
          className='max-lg:hidden'
        />
      </div>
      <p className='font-bold uppercase'>Pré venda SHI 175 EFI</p>
    </div>
  );
};

export default Header;