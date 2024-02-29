import React from 'react';
import formatCurrency from './formatPrice';
import { UserProvider, useShoppingCart } from '../Context/CartContext';
import { useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
const AllStoreItems = ({ id, price, name, imgUrl, discription }) => {
    const {getItemsQuantity , increaseCartQuantity,decreaseCartQuantity ,removeItemFromCart} = useShoppingCart();
    const quantity = getItemsQuantity(id);

    return (
        <>
        <NavLink to={`/Items/${id}`} onClick={()=> increaseCartQuantity(console.log(id))}>
        <div className='bg-white border-solid border-[1px] rounded-lg w-[280px] grid justify-center p-3 hover:shadow-2xl'>
                <div className='flex justify-center'>
                    <img className='h-[170px] rounded-2xl' src={imgUrl} alt="product" />
                </div>
                <p className='font-bold flex justify-start  mt-2'>{formatCurrency(price)}</p>
                <h1 className='text-[17px] text-slate-500 flex justify-start'>{name}</h1>
                <p className='text-[14px] text-slate-500 flex justify-start'>{discription}</p>
            </div>
        </NavLink>
        </>
    );
}

export default AllStoreItems;