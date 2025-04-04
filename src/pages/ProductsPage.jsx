import React from 'react'
import {useCart} from '../context/CartContext';
import ProductCard from '../components/ProductCard';

function ProductsPage() {
    const {products} = useCart();
  return (
    <div className='p-4'>
        <h1 className='text-xl font-bold'>Products</h1>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
    </div>
  )
}

export default ProductsPage