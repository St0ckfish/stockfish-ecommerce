import React, { useContext } from 'react';
import { UserContext } from '../Context/Context';

export const P = () => {
    const { count,setCount,incremrnt } = useContext(UserContext); // Access name directly
    return <p>{count}</p> 
        
}

const OffersHome = () => {
    const { count,setCount,incremrnt } = useContext(UserContext); // Access name directly


    return (
    <div className='grid mt-[100px]'>
        <div className='flex justify-evenly'>
            <button onClick={() => incremrnt()}>+++</button>
            <P/>
        </div>
    </div>
    );
};

export default OffersHome;
