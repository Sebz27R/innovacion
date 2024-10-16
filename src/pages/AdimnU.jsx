import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const AdimnU = () => {
    return (
        <div className="flex flex-col items-center p-10">
          <div className="text-center">
            <div className="ml-[115px] text-6xl mb-4">
              <FaUserCircle />
            </div>
            <h1 className="text-2xl font-bold">Usuario</h1>
    
            {/* Selección de Ciudad */}
            <div className="mt-6 flex justify-between w-72">
              <h2 className='font-bold' >Ubicación</h2>
              <select className="border p-2 w-40 border-black">
                <option>Medellin</option>
                <option>Bucaramanga</option>
                <option>Bogotá</option>
                <option>Ibagué</option>
              </select>
            </div>
    
            {/* Cambiar contraseña */}
            <div className="mt-6 flex justify-between w-72">
              <h2 className='font-bold'>Contraseña</h2>
              <button className="bg-black text-white py-2 px-4 h-15 w-40">Cambiar contraseña</button>
            </div>
    
            {/* Ubicación */}
            <div className="mt-6 flex justify-between w-72">
              <h2 className='font-bold'>Usuario</h2>
              <input type="text" className="border p-2 w-40 border-black" placeholder="correo.registrado@usuario" />
            </div>
    
            {/* Bonos Obtenidos */}
            <div className="mt-6 flex justify-between w-72">
              <h2 className='font-bold'>Bonos obtenidos</h2>
              <div className="border p-2 w-40 border-black">
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