import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Importa useLocation para detectar la ruta
import Logo from '../assets/Logo.png';

const Header = () => {
  const location = useLocation(); // Hook para obtener la ruta actual
  const [showMenu, setShowMenu] = useState(false); // Estado para mostrar/ocultar el menú

  // Función para alternar el menú
  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  // Verifica si estamos en las rutas /main o /mainE
  const isMain = location.pathname === '/main';
  const isMainE = location.pathname === '/mainE';

  return (
    <div className="w-full relative top-0 left-0 z-10">
      <div className="bg-[#04243B] py-5 flex flex-col items-center">
        {/* Logo */}
        <img
          src={Logo} 
          alt="Logo"
          className="w-74 h-32 mb-4 object-contain"
        />

        <p className="text-white text-lg font-semibold">
          Busca, Encuentra, Viste
        </p>
      </div>
      <div className="w-full h-3 bg-[#4C0070]"></div>
      <div className="w-full h-2 bg-[#8A2BE2]"></div>

      {/* Renderiza el ícono de perfil solo en /main o /mainE */}
      {(isMain || isMainE) && (
        <div className="absolute top-5 right-5">
          <FaUserCircle
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
          />

          {/* Menú desplegable */}
          {showMenu && (
            <div className="bg-white shadow-lg rounded-md p-4 mt-2 absolute right-0 w-48">
              {/* Si estamos en /main, mostramos datos del usuario */}
              {isMain && (
                <>
                  <p className="text-black font-semibold">Nombre del Usuario</p>
                  <p className="text-gray-500 text-sm">usuario@mail.com</p>
                  <Link to="/adminU">
                    <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">
                      Administrar cuenta
                    </button>
                  </Link>
                </>
              )}

              {/* Si estamos en /mainE, mostramos datos de la empresa */}
              {isMainE && (
                <>
                  <p className="text-black font-semibold">Nombre de la Empresa</p>
                  <p className="text-gray-500 text-sm">empresa@mail.com</p>
                  <Link to="/adminE">
                    <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">
                      Administrar cuenta
                    </button>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;

