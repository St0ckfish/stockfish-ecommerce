import React from 'react';
import formatCurrency from './formatPrice';
import { UserProvider, useShoppingCart } from '../Context/CartContext';
import { useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
const StoreItem = ({ id, price, name, imgUrl, discription }) => {
    const {getItemsQuantity , increaseCartQuantity,decreaseCartQuantity ,removeItemFromCart} = useShoppingCart();
    const quantity = getItemsQuantity(id);

    return (
        <>
        <NavLink to={`/Products/${id}`} onClick={()=> increaseCartQuantity(console.log(id))}>
        <div className='bg-white border-solid border-[1px] rounded-lg w-[280px] grid justify-center pb-3'>
                <div className='flex justify-center'>
                    <img className='h-[200px] rounded-2xl' src={imgUrl} alt="product" />
                </div>
                <p className='font-bold flex justify-start  mt-2'>{formatCurrency(price)}</p>
                <h1 className='text-[17px] text-slate-500 flex justify-start'>{name}</h1>
                <p className='text-[14px] text-slate-500 flex justify-start'>{discription}</p>
            </div>
        </NavLink>
            {quantity === 0 ? (<div className='flex justify-center'>
                <button onClick={()=> increaseCartQuantity(id)} className='mt-3 px-24 py-1 bg-[#ecedee] rounded-md '> Add to Bag</button>
            </div>) : (
                <div className='flex items-center justify-evenly'>
                    <div>
                        <button onClick={()=>removeItemFromCart(id)} className='mt-3 px-3 py-1 bg-[#dd2f2f] rounded-md text-white'>Remove</button>
                    </div>
                    <div >
                        <button onClick={()=> increaseCartQuantity(id)} className='mt-3 px-5 py-1 bg-[#5a8bee77] rounded-md '>+</button>
                        <span className='text-[25px] m-2'>{quantity}</span>
                        <button onClick={()=> decreaseCartQuantity(id)} className='mt-3 px-5 py-1 bg-[#5a8bee77] rounded-md '>-</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default StoreItem;