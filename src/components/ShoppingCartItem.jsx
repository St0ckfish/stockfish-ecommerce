import React from 'react';
import storeItems from '../data/storeitems.json';
import itemss from '../data/itemss.json';
import formatCurrency from './formatPrice';
const ShoppingCartItem = ({id,quantity}) => {
    const item = storeItems.find((i)=> i.id === id)
    if(item==null) return null;

    return ( 
        <>
            <div>
                <img src={item.imgUrl} alt="" />
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                <div>
                {quantity>1 && <span>x{quantity}</span>}
                </div>
                <div>
                    {formatCurrency(item.price)}
                </div>
                <div>
                {formatCurrency(item.price*quantity)}
                </div>
            </div>

        </>
    );
}

export default ShoppingCartItem;