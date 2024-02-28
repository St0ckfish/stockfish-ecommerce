import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserProvider, useShoppingCart } from '../Context/CartContext';


const NavBar = () => {

    const { cartQuantity,cartQuantityFav } = useShoppingCart();
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    console.log(cartQuantityFav);

    return (
        <UserProvider>
            <header className="bg-white sticky top-0 border-[1px] border-solid border-l-0 border-r-0 border-t-0 pt-5  z-10 drop-shadow-md">
                <div className="container flex justify-between items-center mx-auto">
                    <Link
                        className="flex items-center gap-1 text-[#8CB7F5] font-bold text-2xl -translate-y-1.5 ml-7"
                        to="/"
                    >
                        <img src="/images/logo.png" alt="LOGO" />
                        Stockfish
                    </Link>
                    <nav className="flex gap-10 -translate-y-1.5 max-[1024px]:hidden">
                <NavLink className={({ isActive }) => isActive ? 'text-[#448ed8]' : ''} to="/">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#448ed8]' : ''} to="/about">
                    About
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#448ed8]' : ''} to="/Contact">
                    Contact
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-[#448ed8]' : ''} to="/Sign">
                    Sign Up
                </NavLink>
            </nav>
            <nav className="max-[1024px]:hidden">
                <form className="flex items-center max-w-sm mx-auto -translate-y-1.5">
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
            </nav>
            <nav className="max-[1024px]:hidden flex justify-between -translate-y-2">
                <NavLink className="flex" to="/ShoppingCard">
                    <div className="text-[13px] px-3 w-1 h-6 bg-[#8CB7F5] rounded-full items-center justify-center flex translate-x-2 translate-y-3">{cartQuantity}</div>
                    <svg
                        className="h-8 w-8 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </NavLink>
                <NavLink className="flex" to="/ShoppingCard">
                    <div className="text-[13px] px-3 w-1 h-6 bg-[#8CB7F5] rounded-full items-center justify-center flex translate-x-2 translate-y-3">{cartQuantityFav}</div>
                    <svg className="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg>
                </NavLink>
            </nav>
                    <nav className="-translate-y-1.5 mr-7  min-[1025px]:hidden">
                        <button onClick={toggleNavbar} >
                            {isOpen ? <svg className="h-8 w-8 text-[#547db8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg> : <svg className="h-8 w-8 text-[#547db8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg>}
                        </button>
                    </nav>
                </div>
                {
                    isOpen && (
                        <div className="">
                                        <div className="grid grid-cols-1 mx-auto w-full items-center justify-between min-[1025px]:hidden ">
                <nav className="mt-5 mx-3">
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
                </nav>
                <nav className="grid grid-cols-1  gap-10 mt-5 mb-4">
                    <NavLink className={({ isActive }) => isActive ? 'text-[#448ed8]' : ''} to="/">
                        Home
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#448ed8]' : ''} to="/about">
                        About
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#448ed8]' : ''} to="/Contact">
                        Contact
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#448ed8]' : ''} to="/Sign">
                        Sign Up
                    </NavLink>
                </nav>
                <nav className="flex justify-between p-4">
                    <NavLink className="flex" to="/ShoppingCard">
                        <div className="text-[13px] px-3 w-1 h-6 bg-[#8CB7F5] rounded-full items-center justify-center flex translate-x-12 translate-y-3">{cartQuantity}</div>
                        <svg
                            className="h-8 w-8 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        {/* <Btn/> */}
                    </NavLink>
                    <NavLink className="flex" to="/ShoppingCard">
                        <div className="text-[13px] px-3 w-1 h-6 bg-[#8CB7F5] rounded-full items-center justify-center flex translate-x-2 translate-y-3">{cartQuantityFav}</div>
                        <svg className="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg>
                    </NavLink>
                </nav>
            </div>
                        </div>
                    )
                }
            </header>
        </UserProvider>
    );
};



export default NavBar;