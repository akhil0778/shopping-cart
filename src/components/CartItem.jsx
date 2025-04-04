import React from 'react'
import { useCart } from '../context/CartContext'

function CartItem({item}) {
    const {increaseQty,decreaseQty} = useCart();
  return (
    <div className='flex justify-between items-center p-2 border'>
        <span className='font-medium'>{item.name}</span>
        {item.price === 0 ?(
            <span className='italic text-green-600'>Free Gift</span>
        ):(<div className='flex items-center gap-2'>
            <button className='bg-gray-300 px-2' onClick={()=>decreaseQty(item.id)}> - </button>
            <span>{item.qty}</span>
            <button className='bg-gray-300 px-2' onClick={()=>increaseQty(item.id)}> + </button>
        </div>)}
        <span> {item.price <= 0 ? "Free" : `₹ ${item.qty* item.price}`}</span>
        </div>
  )
}

export default CartItem