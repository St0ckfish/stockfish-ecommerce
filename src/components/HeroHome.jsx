import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroHome = () => {
    return (
        <>
            <div className="grid grid-cols-2 mt-10 -translate-x-[150px] max-[1266px]:-translate-x-[100px] max-[1200px]:-translate-x-[50px] max-[1025px]:-translate-x-[0px] max-[1025px]:grid-cols-1 max-[1025px]:justify-center">
                <div className="grid justify-center max-[1200px]:text-[14px] max-[1025px]:overflow-x-scroll">
                    <nav className=" grid justify-center gap-2 border-[1px] border-solid border-l-0 border-b-0 border-t-0 max-[1025px]:flex max-[1025px]:overflow-x-auto max-[1025px]:border-r-0 max-[1025px]:mb-7 max-[678px]:w-[730px]">
                        <NavLink className="mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">Men's Fashion 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 	&gt;</NavLink>
                        <NavLink className="mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">boys's Fashion 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 	&gt;</NavLink>
                        <NavLink className="mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">Electronics</NavLink>
                        <NavLink className="mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">Home & Lifesyle</NavLink>
                        <NavLink className="mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">Medicine</NavLink>
                        <NavLink className="mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">Sports & Outdoor</NavLink>
                    </nav>
                </div>
                <div className="flex justify-center">
                    <img className='rounded-xl max-[906px]:w-[650px] max-[660px]:w-[550px] max-[560px]:w-full max-[560px]:h-[170px]' src="/images/banner2.png" alt="Banner" />
                </div>
            </div>
        </>
    );
}

export default HeroHome;