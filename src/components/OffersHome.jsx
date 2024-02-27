import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import storeItems from '../data/storeitems.json'
import StoreItem from './StoreItem';
import { UserProvider, useShoppingCart } from '../Context/CartContext';



const OffersHome = ({ id, price, name, imgUrl, discription }) => {

    // const { count,setCount,incremrnt } = useContext(UserContext); // Access name directly


    return (
        <UserProvider>
            <div className='grid mt-[100px] mb-[100px] justify-center '>
                <div className='grid justify-center grid-cols-1 gap-[40px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                    {storeItems.map((item) => (
                        <div key={item.id}>
                            {/* <NavLink to='/Product'> */}
                                <StoreItem {...item}/>
                            {/* </NavLink> */}
                        </div>
                    ))}
                    </div>
                </div>
        </UserProvider>
        );
    };
    
    export default OffersHome;