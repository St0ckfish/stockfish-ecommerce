import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import storeItems from '../data/storeitems.json'
import StoreItem from './StoreItem';
import { UserProvider } from '../Context/Context';



const OffersHome = () => {
    // const { count,setCount,incremrnt } = useContext(UserContext); // Access name directly


    return (
        <UserProvider>
            <div className='grid mt-[100px] mb-[100px] justify-center '>
                <div className='grid justify-center grid-cols-1 gap-[40px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                    {storeItems.map((item) => (
                        <div key={item.id}>
                            <StoreItem {...item}/>
                        </div>
                    ))}
                    </div>
                </div>
            </UserProvider>
        );
    };
    
    export default OffersHome;
                    










                    {/*
                                                <form className="flex items-center max-w-sm mx-auto">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full" placeholder="Search brand name..." required />
                            </div>
                            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-black bg-[#8CB7F5] rounded-full  border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>
                     */}
