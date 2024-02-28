import * as React from 'react';
import { useShoppingCart } from '../Context/CartContext';
import ShoppingCartItem from '../components/ShoppingCartItem';


const ShoppingCard = () => {
    const {cartItems} = useShoppingCart();
    return (
        <>
            <div>
                {cartItems.map((item) => 
                    <ShoppingCartItem key={item.id} {...item} />
                )}
            </div>
        </>
    );
}

export default ShoppingCard;