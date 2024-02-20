import React, { useContext } from 'react';
import { UserContext } from '../Context/Context';
import { NavLink } from 'react-router-dom';



const OffersHome = () => {
    const { count,setCount,incremrnt } = useContext(UserContext); // Access name directly


    return (
        <>
            <div className='grid mt-[100px] '>
                <div className='flex justify-evenly'>
                    <button onClick={() => incremrnt()}>+++</button>
                    <button onClick={() => incremrnt()}>+++</button>
                    <nav className="grid fixed right-2 bottom-[370px] gap-5 p-3 bg-white rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]">
                        <NavLink className="flex" to="/ShoppingCard">
                            <div className="text-[13px] px-3 w-1 h-6 bg-[#8CB7F5] rounded-full items-center justify-center flex translate-x-2 translate-y-3">{count}</div>
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
                            <div className="text-[13px] px-3 w-1 h-6 bg-[#8CB7F5] rounded-full items-center justify-center flex translate-x-2 translate-y-3">0</div>
                            <svg className="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default OffersHome;
