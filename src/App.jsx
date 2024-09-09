// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Shop from './pages/shop/shop'
import Cart from './pages/cart/cart'
import Navbar from './components/navbar'
import Detail from './pages/detail/detail'
import { toast } from 'react-toastify'



function App() {

  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])

  const handleBuy = (item) => {
    setCart([...cart, item])

    toast.success('Added to cart', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <>
    <BrowserRouter>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Shop search={search} handleBuy={handleBuy} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}



export default App