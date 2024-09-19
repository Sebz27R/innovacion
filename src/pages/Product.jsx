import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products, shops } from '../assets/assets'


const Product = () => {

  const { productId } = useParams()
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [format, setFormat] = useState('')

  const getProductDetails = (productId) => {
    return products.find(product => product._id === productId);
  };

  const getShopDetails = (shopId) => {
    return shops.find(shop => shop._id === shopId);
  };

  const producto = getProductDetails(productId);
  const shopDetails = producto ? getShopDetails(producto.tienda) : null;

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=''
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt='' />
          </div>
        </div>

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex item-center gap-1 mt-2'>
            {/* Estrellas */}
            {/*...*/}
            <p className='pl-2'>(122)</p>
          </div>
          <h1 className='mt-3 text-lg font-bold'>Precio:</h1>
          <p className='mt-1 text-3xl font-medium'>${productData.price}</p>

          {shopDetails && (
            <div className='mt-5'>
              <h1 className='text-lg font-bold'>Lo puedes encontrar en:</h1>
              <div className="mt-3 mb-3 flex justify-center items-center">
                <img src={shopDetails.image} alt={shopDetails.name} className='w-45 h-45' />
              </div>
              <h1 className='text-lg font-bold'>Direcciones disponibles:</h1>
              <ul className='list-disc list-inside'>
                {shopDetails.locations.map((address, index) => (
                  <li key={index} className='text-sm text-gray-600'>
                    {address}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tallas y cantidades disponibles */}
          {producto.talla && producto.disp && (
            <div className="mt-4">
              <p className="font-bold">Tallas disponibles:</p>
              <ul className="list-disc list-inside">
                {productData.talla.map((size, index) => (
                  <li key={index} className="text-sm">
                    {size} - {productData.disp[index]} unidades disponibles
                  </li>
                ))}
              </ul>
            </div>
          )}

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p className='font-bold'>¿Te interesa el producto?</p>
            <p className='font-bold'>Recibe asistencia en tiempo real</p>
            <p className='font-bold'>¡Comunicate y reserva en el punto fisico aqui!</p>

            {/* Botón más pequeño con ícono de chat */}
            <div className="flex items-center gap-2 mt-3">
              <button className="bg-[#4C0070] text-white font-bold px-6 py-3 rounded-md hover:bg-[#3F0060]">
              Chatea con nosotros
              </button>
              <div className="border-2 border-[#4C0070] p-2 rounded-md">
              <img
              src="https://cdn-icons-png.flaticon.com/512/14/14558.png"
              alt="Chat Icon"
              className="w-6 h-6"
              />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Descripción y reseñas */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Descripción</b>
          <p className='border px-5 py-3 text-sm'>Reseñas (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
}

export default Product;
