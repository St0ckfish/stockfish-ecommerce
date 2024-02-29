import React from 'react';
import storeItems from '../data/storeitems.json';
import itemss from '../data/itemss.json';
import formatCurrency from './formatPrice';
const AllItemsForShoppingCart = ({ id, quantity }) => {
    const item = itemss.find((i) => i.id === id)
    if (item == null) return null;

    return (
        <>
            <div className='flex items-center'>
                <img className='w-[150px] rounded-xl' src={item.imgUrl} alt="" />
                <div className='text-start m-8'>
                    <h1>Name: {item.name}</h1>
                    <p>Price: {formatCurrency(item.price)}</p>
                    <div>
                        {quantity >= 1 && <span>Number of Items: x{quantity}</span>}
                    </div>
                    <div>
                        Total Price: {formatCurrency(item.price * quantity)}
                    </div>
                </div>
            </div>

        </>
    );
}

export default AllItemsForShoppingCart;