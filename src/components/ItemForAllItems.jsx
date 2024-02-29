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
    const { getItemsQuantityFav, increaseCartQuantityFav, decreaseCartQuantityFav, removeItemFromCartFav } = useShoppingCart();
    const quantity = getItemsQuantity(id);
    return (
        <>
            <div className='h-[850px] items-center grid justify-center bg-white'>
                <div className='grid grid-cols-2 justify-between gap-[100px] max-[1004px]:gap-[100px] max-[870px]:grid-cols-1 max-[870px]:gap-[0px]'>
                    <div className='flex justify-center '>
                        <img className='h-[400px] max-[1004px]:h-[200px] rounded-2xl ' src={imgUrl} alt="product" />
                    </div>
                    <div className='max-[870px]:grid max-[870px]:justify-center max-[870px]:text-center'>
                        <h1 className='text-[25px] text-black font-bold flex justify-start mb-3 max-[870px]:justify-center'>{name}</h1>
                        <p className='text-[20px] flex justify-start mb-3 max-[870px]:justify-center'>{formatCurrency(price)}</p>
                        <p className='text-[14px] text-slate-500 flex justify-start mb-3 max-[870px]:justify-center' >{discription}</p>
                        <p className='text-[14px] text-slate-500 flex min-[870px]:text-start justify-start mb-3  max-[870px]:justify-center '>{Fulldiscription}</p>
                        <hr className='border-[1px] ' />
                        {quantity === 0 ? (<div className='flex justify-start max-[870px]:justify-center'>
                            <a onClick={() => increaseCartQuantity(id)} className=" cursor-pointer mt-3 inline-flex overflow-hidden text-white bg-gray-900 rounded group">
                                <span className="px-3.5 py-2 text-white bg-[#3b73e2] group-hover:bg-[#4773cad5] flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                </span>
                                <span className="pl-4 pr-5 py-2.5">Add to Bag</span>
                            </a>
                        </div>) : (
                            <div className='flex items-center justify-start gap-2 max-[870px]:justify-center'>
                                <div >
                                    <button onClick={() => increaseCartQuantity(id)} className='hover:bg-[#6b96eb] shadow-xl mt-3 px-5 py-1 bg-[#5a8bee77] rounded-md '>+</button>
                                    <span className='text-[25px] m-2'>{quantity}</span>
                                    <button onClick={() => decreaseCartQuantity(id)} className='hover:bg-[#6b96eb] shadow-xl mt-3 px-5 py-1 bg-[#5a8bee77] rounded-md '>-</button>
                                </div>
                                <div>
                                    <button onClick={() => removeItemFromCart(id)} className='hover:bg-[#af2121] shadow-xl mt-3 px-3 py-1 bg-[#dd2f2f] rounded-md text-white'>Remove</button>
                                </div>
                            </div>
                        )}
                        <div className='flex mt-5 items-center max-[870px]:justify-center'>
                            <div className='flex items-center mr-4'>
                                <NavLink to='/ShoppingCard' className="shadow-2xl relative inline-flex items-center justify-start py-3 pl-10 pr-12 overflow-hidden font-semibold text-[#5182FD] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-12 bg-gray-50 group">
                                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#5182FD] group-hover:h-full"></span>
                                    <span className="absolute right-0 pr-5 duration-200 ease-out group-hover:translate-x-12">
                                        <svg className="w-7 h-5 text-[#27299b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute left-0 pl-4 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg className="w-7 h-5 text-[#27299b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Buy Now</span>
                                </NavLink>
                            </div>
                            <div className='flex items-center translate-y-1'>
                                <button onClick={toggleNavbar} >
                                    {isOpen ? <svg onClick={() => increaseCartQuantityFav(id)} className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg> : <img onClick={() => removeItemFromCartFav(id)} className='w-[37px]' src='/images/fav.svg' alt="fav" />}
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