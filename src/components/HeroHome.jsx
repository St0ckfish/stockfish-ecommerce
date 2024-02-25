import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroHome = () => {
    return (
        <>
            <div className="flex flex-wrap  justify-around max-[1025px]:gap-3 ">
                <div className="whitespace-nowrap  text-nowrap grid justify-center border-[1px] border-solid border-l-0 border-b-0 border-t-0 max-[1025px]:border-r-0 max-[1200px]:text-[14px] ">
                    <nav className="grid whitespace-nowrap  mt-5 max-[1079px]:flex max-[1025px]:overflow-x-scroll text-nowrap gap-3 ">
                        <NavLink className="whitespace-nowrap  text-nowrap mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#79bdf55b] bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">Men's Fashion	 	</NavLink>
                        <NavLink className="whitespace-nowrap  text-nowrap mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#79bdf55b] bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">boys's Fashion 	</NavLink>
                        <NavLink className="whitespace-nowrap  text-nowrap mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#79bdf55b] bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">Electronics</NavLink>
                        <NavLink className="whitespace-nowrap  text-nowrap mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#79bdf55b] bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">Home & Lifesyle</NavLink>
                        <NavLink className="whitespace-nowrap  text-nowrap mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#79bdf55b] bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">Medicine</NavLink>
                        <NavLink className="whitespace-nowrap  text-nowrap mr-4 flex items-center text-center py-2 px-6 rounded-xl hover:bg-[#79bdf55b] bg-[#8cb8f533] max-[1025px]:px-2 max-[1025px]:m-0">Sports & Outdoor</NavLink>
                    </nav>
                </div>
                <div className="flex justify-center mt-5">
                    <img className=" h-full w-full" src="/images/banner2.png" alt="Banner" />
                </div>
            </div>
        </>
    );
}

export default HeroHome;