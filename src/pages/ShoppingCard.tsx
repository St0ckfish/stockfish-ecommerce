import * as React from 'react';
import { useShoppingCart } from '../Context/CartContext';
import ShoppingCartItem from '../components/ShoppingCartItem';


const ShoppingCard = () => {
    const {cartItems} = useShoppingCart();
    const { cartQuantity,cartQuantityFav } = useShoppingCart();
    return (
        <>
            <div className='grid flex-wrap'>
                <div>
                    <div className='flex p-8'>
                        <p className='text-[25px]'>Shopping Card</p>
                    </div>
                    {cartQuantity >=1 ?
                    <div className='grid gap-5'>
                        {cartItems.map((item) => 
                            <ShoppingCartItem key={item.id} {...item} />
                        )}
                    </div> : <div>
                        <p>Shopping Cart is Empty :)</p>
                    </div>
                    }
                </div>
                <div>
                    <div className='flex p-8'>
                        <p className='text-[25px]'>Favourite Items</p>
                    </div>
                    {cartQuantity >=1 ?
                    <div className='grid gap-5'>
                        {cartItems.map((item) => 
                            <ShoppingCartItem key={item.id} {...item} />
                        )}
                    </div> : <div>
                        <p>Favourite Items is Empty :)</p>
                    </div>
                    }
                </div>
            </div>
        </>
    );
}

export default ShoppingCard;