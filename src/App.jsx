// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Shop from './pages/shop/shop'
import Cart from './pages/cart/cart'
import Navbar from './components/navbar'
import Detail from './pages/detail/detail'



function App() {

  const [search, setSearch] = useState('')

  return (
    <>
    <BrowserRouter>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Shop search={search} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}



export default App