import * as React from 'react';
import formatCurrency from './formatPrice';
import { UserProvider, useShoppingCart } from '../Context/CartContext';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const ItemForAllItems = ({ id, price, name, imgUrl, discription, Fulldiscription }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    const { getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useShoppingCart();
    const quantity = getItemsQuantity(id);
    return (
        <>
            <div className='h-[850px] items-center grid justify-center '>
                <div className='grid grid-cols-2 justify-between gap-[100px] max-[1004px]:gap-[100px] max-[870px]:grid-cols-1 max-[870px]:gap-[0px]'>
                    <div className='flex justify-center '>
                        <img className='h-[400px] rounded-2xl' src={imgUrl} alt="product" />
                    </div>
                    <div className='max-[870px]:grid max-[870px]:justify-center max-[870px]:text-center'>
                        <h1 className='text-[25px] text-black font-bold flex justify-start mb-3 max-[870px]:justify-center'>{name}</h1>
                        <p className='text-[20px] flex justify-start mb-3 max-[870px]:justify-center'>{formatCurrency(price)}</p>
                        <p className='text-[14px] text-slate-500 flex justify-start mb-3 max-[870px]:justify-center' >{discription}</p>
                        <p className='text-[14px] text-slate-500 flex min-[870px]:text-start justify-start mb-3  max-[870px]:justify-center'>{Fulldiscription}</p>
                        <hr className='border-[1px] '/>
                        {quantity === 0 ? (<div className='flex justify-start max-[870px]:justify-center'>
                            <button onClick={() => increaseCartQuantity(id)} className='mt-3 px-24 py-1 bg-[#ecedee] rounded-md '> Add to Bag</button>
                        </div>) : (
                            <div className='flex items-center justify-start gap-2 max-[870px]:justify-center'>
                                <div >
                                    <button onClick={() => increaseCartQuantity(id)} className='mt-3 px-5 py-1 bg-[#5a8bee77] rounded-md '>+</button>
                                    <span className='text-[25px] m-2'>{quantity}</span>
                                    <button onClick={() => decreaseCartQuantity(id)} className='mt-3 px-5 py-1 bg-[#5a8bee77] rounded-md '>-</button>
                                </div>
                                <div>
                                    <button onClick={() => removeItemFromCart(id)} className='mt-3 px-3 py-1 bg-[#dd2f2f] rounded-md text-white'>Remove</button>
                                </div>
                            </div>
                        )}
                        <div className='flex mt-5 m-2 items-center max-[870px]:justify-center'>
                            <div className='flex items-center mr-4'>
                                <NavLink to='/ShoppingCard' className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#5182FD] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#5182FD] group-hover:h-full"></span>
                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg className="w-5 h-5 text-[#27299b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg className="w-5 h-5 text-[#27299b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Buy Now</span>
                                </NavLink>
                            </div>
                            <div className='flex items-center translate-y-1'>
                                <button onClick={toggleNavbar} >
                                    {isOpen ? <img className='w-[37px]' src="/public/images/heart.svg" alt="heart" /> : <img className='w-[37px]' src='/images/fav.svg' alt="fav" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemForAllItems;