import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import storeItems from '../data/storeitems.json'
import itemss from '../data/itemss.json'
import StoreItem from './StoreItem';
import { UserProvider, useShoppingCart } from '../Context/CartContext';
import AllStoreItems from './AllStoreItems';
import { useEffect } from 'react';
import { useState } from 'react';



const OffersHome = ({ id, price, name, imgUrl, discription, seconds }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600); 
        const m = Math.floor((seconds % 3600) / 60); 
        const s = Math.floor(seconds % 60);
        return `${h.toString().padStart(2, "0")}:${m
            .toString()
            .padStart(2, "0")}:${s.toString().padStart(2, "0")}`; 
    }


    useEffect(() => {
        if (timeLeft > 0) {
            const timeoutId = setTimeout(() => {
                setTimeLeft(timeLeft - 1); 
            }, 1000);
            return () => clearTimeout(timeoutId); 
        }
    }, [timeLeft]);




    return (
        <UserProvider>
            <div className='grid mt-[100px] mb-[100px] justify-center '>
                <div className='flex mb-5 justify-between'>
                    <h1 className='text-[25px] font-bold text-[#3772ad]'>Offers</h1>
                    <p className='text-[25px] font-bold text-[#3772ad]'>{formatTime(timeLeft)}</p>
                </div>
                <div className='grid justify-center grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                    {storeItems.map((item) => (
                        <div key={item.id}>
                            <StoreItem {...item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid justify-center mt-5">
                <img className=" h-full w-full" src="/images/enhance.png" alt="Banner" />
                <div className='flex relative bottom-20 left-10 w-[180px]'>
                    <div className=' z-0'>
                        <NavLink to='/' className="relative inline-block text-lg group">
                            <span className="max-[650px]:px-3  relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative max-[650px]:text-[15px]">
                                    Shopping Now
                                </span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='grid mt-[100px] mb-[100px] justify-center '>
            <div className='flex mb-5 justify-between'>
                    <h1 className='text-[25px] font-bold text-[#3772ad]'>All Products</h1>
                </div>
                <div className='grid justify-center grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                    {itemss.map((item) => (
                        <div key={item.id}>
                            <AllStoreItems {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </UserProvider>
    );
};

export default OffersHome;