import React from 'react'
import { useCart } from '../context/CartContext'

function ProductCard({product}) {
    const {cartItems,addToCart,increaseQty,decreaseQty} = useCart()
    const {name,price,id}=product
    const itemsInCart=cartItems.find((item)=>item.id ===id)
  return (
    <div className='border p-4 rounded'>
        <h2 className='font-bold'>{name}</h2>
        <p>₹{price}</p>
        {!itemsInCart ? (<button onClick={()=>addToCart(product)} className='bg-blue-500 text-white px-2 py-1 mt-2'>Add To Cart</button>)
        : (<div className="flex items-center gap-2 mt-2">
           <button className='bg-gray-300 px-2' onClick={()=>decreaseQty(id)}> - </button>
           <span>{itemsInCart.qty}</span>
           <button className='bg-gray-300 px-2' onClick={()=>increaseQty(id)}> + </button>
        </div>)}
        </div>
  )
}

export default ProductCard