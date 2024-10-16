import React from 'react'
import { FaBuilding } from 'react-icons/fa';

const AdminE = () => {
    return (
        <div className="flex flex-col items-center p-10">
          <div className="text-center">
            <div className="text-6xl mb-4">
              <FaBuilding />
            </div>
            <h1 className="text-2xl font-bold">Nombre Empresa</h1>
    
            {/* Usuario */}
            <div className="mt-6 flex justify-between w-72">
              <h2>Usuario</h2>
              <input type="text" className="border p-2 w-40" placeholder="Nombre de usuario" />
            </div>
    
            {/* Cambiar contraseña */}
            <div className="mt-6 flex justify-between w-72">
              <h2>Contraseña</h2>
              <button className="bg-black text-white py-2 px-4">Cambiar contraseña</button>
            </div>
    
            {/* Formato Inventario */}
            <div className="mt-6 text-left w-72">
              <h2 className="font-bold">Formato inventario disponible</h2>
              <p className="text-sm mt-2">
                Formato para subir la información del inventario disponible de cada punto físico. Recomendable actualizarlo cada día.
              </p>
              <div className="flex justify-center mt-2">
                <img src="formato.png" alt="Formato de inventario" />
              </div>
            </div>
    
            {/* Subir inventario */}
            <div className="mt-6 flex justify-between w-72">
              <h2>Subir inventario</h2>
              <input type="file" accept=".xlsx" />
            </div>
          </div>
        </div>
      );
    };

export default AdminE