import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartPage from './pages/CartPage'
import ProductsPage from './pages/ProductsPage'

function App() {
  return (
    <CartProvider>
      <Router>
        <nav className='p-4 flex gap-4 text-center bg-gray-100'>
             <Link to="/">Products</Link>
             <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path='/' element={<ProductsPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App