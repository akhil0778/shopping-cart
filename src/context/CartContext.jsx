import { createContext,useContext, useState } from "react";

const CartContext=createContext();

const products=[
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Smartphone", price: 300 },
    { id: 3, name: "Headphones", price: 100 },
    { id: 4, name: "Smartwatch", price: 150 }, 
];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

export const CartProvider=({children})=>{
     const [cartItems, setCartItems]=useState([]);

     const addToCart=(product)=>{
        const exists=cartItems.find((item)=>item.id===product.id);
        if (exists){
            increaseQty(product.id)
        }else{
            setCartItems([...cartItems, {...product,qty:1}])
        }
     };

     const increaseQty=(id)=>{
        setCartItems((items)=>items.map((item)=>item.id===id ? {...item, qty:item.qty+1}:item));
     };

     const decreaseQty=(id)=>{
        setCartItems((items)=>items.map((item)=>item.id===id ? {...item, qty:item.qty-1}:item).filter((item)=>item.qty>0));
     };

     const total = cartItems.reduce((acc,item)=>acc+item.price*item.qty,0);
     const cartWithGift=
     total>=THRESHOLD && !cartItems.find((item)=>item.id===FREE_GIFT.id) ?
     [...cartItems,FREE_GIFT] :
     total< THRESHOLD ? cartItems.filter((item)=>item.id!==FREE_GIFT.id) : cartItems;

     return(
        <CartContext.Provider value={{products,cartItems:cartWithGift,addToCart,increaseQty,decreaseQty,total}}>
            {children}
        </CartContext.Provider>
     )

};

export const useCart=()=>useContext(CartContext);