import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-600 p-5">
        <h1 className="text-white text-center pb-2">Site Desenvolvido por:</h1>
   
    <div className="flex flex-row border-t-2  text-white items-center text-center justify-center">
        <a href="https://www.linkedin.com/in/pedroandriotti/" target='_blank'><Image
            src="/linkedin.webp"
            alt='logo Linkedin'
            width={50}
            height={50}
        /></a>
        <h2>@pedroandriotti</h2>
        <a href="https://www.linkedin.com/in/luismingati/" target='_blank'><Image
            src="/linkedin.webp"
            alt='logo Linkedin'
            width={50}
            height={50}
        /></a>
        <h2>@luismingati</h2>
    </div> 
    </div>
  );
};

export default Footer;