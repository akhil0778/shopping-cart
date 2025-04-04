import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem';

function CartPage() {
    const {cartItems,total} = useCart();
    const progress=Math.min(total/1000*100,100);
    const remaining=1000-total;
  return (
    <div className='p-4'>
        <h1 className='text-xl font-bold mb-4'>Cart</h1>
        {total<1000 ?
        (<div className='mb-4'>
        <p className='text-red-600'>Please Add Product Worth ₹{remaining} to get a Free Gift</p>
        <div className='w-full bg-gray-200 rounded-full p-3 mt-2'>
            <div className='bg-green-500 h-3 rounded-full' style={{width:`${progress}%`}}></div>
        </div>
        </div>): (
            <p className='text-green-600 mb-4'>You Have Unlock a Free Gift !</p>
        )}
        {cartItems.map((item)=>
        (<CartItem key={item.id} item={item}/>))}
        <div className='mt-4 font-bold'>Total : ₹{total} </div>
    </div>
  )
}

export default CartPage