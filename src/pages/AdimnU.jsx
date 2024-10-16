import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const AdimnU = () => {
    return (
        <div className="flex flex-col items-center p-10">
          <div className="text-center">
            <div className="text-6xl mb-4">
              <FaUserCircle />
            </div>
            <h1 className="text-2xl font-bold">Usuario</h1>
    
            {/* Selección de Ciudad */}
            <div className="mt-6 flex justify-between w-72">
              <h2>Ubicación</h2>
              <select className="border p-2">
                <option>Ciudad 1</option>
                <option>Ciudad 2</option>
              </select>
            </div>
    
            {/* Cambiar contraseña */}
            <div className="mt-6 flex justify-between w-72">
              <h2>Contraseña</h2>
              <button className="bg-black text-white py-2 px-4">Cambiar contraseña</button>
            </div>
    
            {/* Ubicación */}
            <div className="mt-6 flex justify-between w-72">
              <h2>Ubicación</h2>
              <input type="text" className="border p-2 w-40" placeholder="Escribe tu ubicación" />
            </div>
    
            {/* Bonos Obtenidos */}
            <div className="mt-6 flex justify-between w-72">
              <h2>Bonos obtenidos</h2>
              <div className="border p-2 w-40">
                <p>Bono 1</p>
                <p>Bono 2</p>
              </div>
            </div>
    
            {/* Botón de Descargar Bonos */}
            <button className="bg-black text-white mt-6 py-2 px-4">Descargar bonos</button>
          </div>
        </div>
      );
    };

export default AdimnU