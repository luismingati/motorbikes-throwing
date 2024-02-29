import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google'

const Header: React.FC = () => {
  return (
    <div  className="flex bg-white border-b-2 p-4 text-black gap-10 content items-center">
      <Image
      src="/shineray.png"
      alt='logo Shineray'
      width={120}
      height={24}/>
      <p className="font-semibold">PRÉ VENDA SHI 175 EFI</p>
    </div>
  );
};

export default Header;