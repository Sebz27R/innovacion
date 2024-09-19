import React from 'react';
import { Link } from 'react-router-dom';

const First = () => {
  return (
    <div className="mt-[170px] mb-[170px] flex flex-col items-center">
      {/* Mensaje de bienvenida */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">¡Bienvenido a nuestra plataforma!</h1>
      
      <div className="flex flex-col gap-4">
        {/* Botón para persona */}
        <Link
          to={'/login'}
          className="bg-[#4C0070] text-white font-bold px-8 py-2 rounded-md hover:bg-[#3F0060]"
        >
          Soy persona
        </Link>

        {/* Botón para empresa */}
        <Link
          to={'/logine'}
          className="bg-[#4C0070] text-white font-bold px-8 py-2 rounded-md hover:bg-[#3F0060]"
        >
          Soy empresa
        </Link>
      </div>
    </div>
  );
};

export default First;
