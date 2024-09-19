import React, { useContext, useEffect, useState } from 'react'
import { products } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'

const Main = () => {
  const {search, showSearch} = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [talla, setTalla] = useState([])
  const [sortType, setSortType] = useState('relevant')
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');


  const toggleCategory = (e) => {
    if (category.includes(e.target.value) ){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleTalla = (e) => {
    if (talla.includes(e.target.value)) {
      setTalla(prev => prev.filter(item => item !== e.target.value))
    } else {
      setTalla(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.color))
    }

    //buscar con el array de tallas
    if (talla.length > 0) {
      productsCopy = productsCopy.filter(item => 
        talla.some(size => item.talla.includes(size))
      );
    }

    //buscar con el precio
    if (minPrice || maxPrice) {
      const min = parseFloat(minPrice) || 0; // Si minPrice no está definido, se usa 0
      const max = parseFloat(maxPrice) || Infinity; // Si maxPrice no está definido, se usa Infinity
  
      productsCopy = productsCopy.filter(item => {
        const productPrice = parseFloat(item.price);
        return productPrice >= min && productPrice <= max;
      });
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)))
        break
      
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price-a.price)))
        break

      default:
        applyFilter()
        break
    }

  }

  useEffect(() => {
    applyFilter()
  }, [category,subCategory,talla,minPrice,maxPrice, search, showSearch])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*Filter */}
      <div className='min-w-60'>
        <p onClick={()=> setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTROS
          <img className={`h-3 sm:hidden ${showFilter && 'rotate-90'}`} src='https://cdn-icons-png.flaticon.com/512/32/32213.png' alt=""/>
        </p>
        {/*Category */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${!showFilter && 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIA</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Camisas'} onChange={toggleCategory}/> Camisas
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Pantalones'} onChange={toggleCategory}/> Pantalones
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Zapatos'} onChange={toggleCategory}/> Zapatos
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Accesorios'} onChange={toggleCategory}/> Accesorios
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Gorras'} onChange={toggleCategory}/> Gorras
            </p>
          </div>
        </div>
        {/* Subcategory */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>COLOR</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Negro'} onChange={toggleSubCategory}/> Negro
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Blanco'} onChange={toggleSubCategory}/> Blanco
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Azul'} onChange={toggleSubCategory}/> Azul
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Verde'} onChange={toggleSubCategory}/> Verde
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Pastel'} onChange={toggleSubCategory}/> Pastel
            </p>
          </div>
        </div>
        {/* Subcategory */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TALLA</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'XS'} onChange={toggleTalla}/> XS
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'S'} onChange={toggleTalla}/> S
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'M'} onChange={toggleTalla}/> M
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'L'} onChange={toggleTalla}/> L
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'XL'} onChange={toggleTalla}/> XL
            </p>
          </div>
        </div>
        {/* Subcategory */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
  <p className='mb-3 text-sm font-medium'>PRECIO</p>
  <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
    <p className='flex gap-2'>
      <label htmlFor='minPrice'>Precio Mínimo:</label>
      <input
        id='minPrice'
        className='w-20 border p-1'
        type='number'
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder='0'
      />
    </p>
    <p className='flex gap-2'>
      <label htmlFor='maxPrice'>Precio Máximo:</label>
      <input
        id='maxPrice'
        className='w-20 border p-1'
        type='number'
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder='1000'
      />
    </p>
  </div>
</div>


      </div>

      {/*right */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'TODOS LOS'} text2={' PRODUCTOS'}/>
          {/**Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Organizar por: Relevancia</option>
            <option value="low-high">Organizar por precio: Menor a Mayor</option>
            <option value="high-low">Organizar por precio: Mayor a Menor</option>
          </select>
        </div>

        {/*Map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item,index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} tienda={item.tienda} tallas={item.talla}/>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Main