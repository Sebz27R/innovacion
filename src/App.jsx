import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import First from './pages/First'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginE from './pages/LoginE'
import Inventario from './pages/Inventario'
import Main from './pages/Main'
import Product from './pages/Product'
import { ToastContainer } from 'react-toastify'
import SearchBar from './components/SearchBar'
import ShopContextProvider from './context/ShopContext'

function App() {

  return (
    <div>
    <ShopContextProvider>
    <ToastContainer/>
    <Header/>
    <SearchBar/>
    <Routes>
      <Route path='/' element={<First/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/logine' element={<LoginE/>} />
      <Route path='/inventario' element={<Inventario/>} />
      <Route path='/main' element={<Main/>} />
      <Route path='/product/:productId' element={<Product/>} />
    </Routes>

    <Footer/>
    </ShopContextProvider>
      
    </div>
  )
}

export default App
