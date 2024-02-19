import React, { useContext } from 'react';
import { UserContext } from '../Context/Context';

const OffersHome = () => {
    const { count,setCount,incremrnt } = useContext(UserContext); // Access name directly


    return (
    <div className='grid mt-[100px]'>
        <div className='flex justify-evenly'>
            <button onClick={() => incremrnt()}>+++</button>
            
        <p>{count}</p> 
        </div>
    </div>
    );
};

export default OffersHome;
