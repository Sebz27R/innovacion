import React from 'react';
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <div className= "w-full relative top-0 left-0 z-10">
    <div className="bg-[#04243B] py-5 flex flex-col items-center">
      {/* Logo */}
      <img
        src={Logo} // Cambia la ruta al logo que estés utilizando
        alt="Logo"
        className="w-74 h-32 mb-4 object-contain" // Ajusta el tamaño del logo según sea necesario
      />

      {/* Lema de la aplicación */}
      <p className="text-white text-lg font-semibold">
        Busca, Encuentra, Viste
      </p>
    </div>
     {/* Barra morada */}
     <div className="w-full h-3 bg-[#4C0070]"></div>

        {/* Barra violeta (más clara) */}
    <div className="w-full h-2 bg-[#8A2BE2]"></div>
    </div>
    
  );
};

export default Header;