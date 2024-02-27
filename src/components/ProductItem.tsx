import * as React from 'react';
import formatCurrency from './formatPrice';
import { UserProvider, useShoppingCart } from '../Context/CartContext';

const ProductItem = ({ id,price, name, imgUrl, discription,Fulldiscription }) => {
    const {getItemsQuantity , increaseCartQuantity,decreaseCartQuantity ,removeItemFromCart} = useShoppingCart();
    const quantity = getItemsQuantity(id);
    return (
        <>
            <div className='h-[700px] items-center grid justify-center '>
                <div className='grid grid-cols-2 justify-between gap-[200px] max-[1004px]:gap-[100px] max-[870px]:grid-cols-1'>
                    <div className='flex justify-center '>
                        <img className='h-[400px] rounded-2xl' src={imgUrl} alt="product" />
                    </div>
                    <div className='max-[870px]:grid max-[870px]:justify-center max-[870px]:text-center'>
                        <h1 className='text-[25px] text-black font-bold flex justify-start mb-3 max-[870px]:justify-center'>{name}</h1>
                        <p className='text-[20px] flex justify-start mb-3 max-[870px]:justify-center'>{formatCurrency(price)}</p>
                        <p className='text-[14px] text-slate-500 flex justify-start mb-3 max-[870px]:justify-center' >{discription}</p>
                        <p className='text-[14px] text-slate-500 flex max-[870px]:text-start justify-start mb-3  max-[870px]:justify-center'>{Fulldiscription}</p>
                        {quantity === 0 ? (<div className='flex justify-start max-[870px]:justify-center'>
                <button onClick={()=> increaseCartQuantity(id)} className='mt-3 px-24 py-1 bg-[#ecedee] rounded-md '> Add to Bag</button>
            </div>) : (
                <div className='flex items-center justify-start gap-2 max-[870px]:justify-center'>
                    <div >
                        <button onClick={()=> increaseCartQuantity(id)} className='mt-3 px-5 py-1 bg-[#5a8bee77] rounded-md '>+</button>
                        <span className='text-[25px] m-2'>{quantity}</span>
                        <button onClick={()=> decreaseCartQuantity(id)} className='mt-3 px-5 py-1 bg-[#5a8bee77] rounded-md '>-</button>
                    </div>
                    <div>
                        <button onClick={()=>removeItemFromCart(id)} className='mt-3 px-3 py-1 bg-[#dd2f2f] rounded-md text-white'>Remove</button>
                    </div>
                </div>
            )}
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductItem;