import React, { useContext } from 'react'
import { shops } from '../assets/assets'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price, tienda, tallas}) => {

    const getShopName = (id) => {
        // Buscar el modelo por _id
        const shopd = shops.find(shop => {
          return shop._id === id;
        });
        
        // Verificar si el modelo existe antes de acceder a sus propiedades
        return shopd ? shopd.name : "Model not found";
      };
    
      const shopName = getShopName(tienda);



    return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className=' overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out w-48 h-48 object-cover overflow-hidden' src={image[0]} alt=""/>
        </div>
        <p className='pt-3 pb-1 text-lg font-bold'>{name}</p>
        <p className='text-sm pb-1'><span className='font-bold'>Tienda en donde se encuentra:</span> {shopName}</p>
        <p className='text-sm font-medium'>${price}</p>
        <p className='text-sm pb-1'><span className='font-bold'>Tallas disponibles: </span> 
            {tallas.join(', ')}
        </p>
    </Link>
  )
}

export default ProductItem