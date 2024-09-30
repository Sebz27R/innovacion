import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(true); // Estado para controlar si está expandido
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('main')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    // Detectar cuando el usuario empieza a escribir
    useEffect(() => {
        if (search !== '') {
            setExpanded(false); // Reducir cuando empieza a escribir
        } else {
            setExpanded(true); // Expandir cuando el input está vacío
        }
    }, [search]);

    return showSearch && visible ? (
        <div className={`border-t border-b bg-gray-50 text-center py-${expanded ? '40' : '4'}`}>
            {/* Mostrar texto grande si no se está buscando */}
            {search === '' && (
                <div className={`mb-4 transition-all duration-300 ${expanded ? 'text-4xl' : 'text-2xl'}`}>
                    <h2 className={`font-bold mb-2 ${expanded ? 'text-4xl' : 'text-2xl'}`}>¡Bienvenido!</h2>
                    <p className={`text-${expanded ? '2xl' : 'lg'}`}>¿Qué estas buscando?</p>
                </div>
            )}

            {/* Barra de búsqueda */}
            <div className={`inline-flex items-center justify-center border border-gray-900 px-5 py-2 my-5 mx-3 rounded-full ${expanded ? 'w-3/4 sm:w-1/2' : 'w-2/3 sm:w-1/3'}`}>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm'
                    type="text"
                    placeholder='Buscar...'
                />
                <img className='w-7' src='https://icons.veryicon.com/png/o/miscellaneous/light-e-treasure-3/search-286.png' alt="" />
            </div>

            {/* Icono de cerrar */}
            {/* <img
                onClick={() => setShowSearch(false)}
                className='inline w-4 cursor-pointer'
                src='https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png'
                alt=""
            /> */}
        </div>
    ) : null;
};

export default SearchBar;

