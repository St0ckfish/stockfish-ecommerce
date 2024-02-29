import * as React from 'react';
import { useShoppingCart } from '../Context/CartContext';
import ShoppingCartItem from '../components/ShoppingCartItem';
import formatCurrency from '../components/formatPrice';
import storeItems from "../data/storeitems.json"
import itemss from "../data/itemss.json"
import AllItemsForShoppingCart from '../components/AllProductsForShoppingCart';
import FavItems from '../components/FavItems';
import AllFavItems from '../components/AllFavItems';


const ShoppingCard = () => {
    const { cartItems, favItems } = useShoppingCart();
    const { cartQuantity, cartQuantityFav } = useShoppingCart();
    return (
        <>
            <div className='grid flex-wrap bg-white p-10'>
                <div>
                    <div className='flex p-8'>
                        <p className='text-[25px]'>Shopping Card</p>
                    </div>
                    {cartQuantity >= 1 ?
                        <div className='grid gap-5'>
                            {cartItems.map((item) =>
                                <ShoppingCartItem key={item.id} {...item} />
                            )}
                        </div> : <div>
                            <p>Shopping Cart is Empty :)</p>
                        </div>
                    }
                    {
                        <div className='grid gap-5'>
                            {cartItems.map((item) =>
                                <AllItemsForShoppingCart key={item.id} {...item} />
                            )}
                        </div>
                    }
                </div>
                <div className='font-bold bg-cyan-700 text-white rounded-xl mt-3'>
                    <p>Total Items Price</p>
                {
                    formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item1 = storeItems.find((i) => i.id === cartItem.id);
                            const item2 = itemss.find((i) => i.id === cartItem.id);
                            return total + ((item1?.price || 0) + (item2?.price || 0)) * cartItem.quantity;
                        }, 0)
                    )
                }
                </div>
                <div>
                    <div className='flex p-8'>
                        <p className='text-[25px]'>Favourite Items</p>
                    </div>
                    {cartQuantityFav >= 1 ?
                        <div className='grid gap-5'>
                            {favItems.map((item) =>
                                <FavItems key={item.id} {...item} />
                            )}
                        </div> : <div>
                            <p>Favourite Items is Empty :)</p>
                        </div>
                    }
                    {
                        <div className='grid gap-5'>
                            {favItems.map((item) =>
                                <AllFavItems key={item.id} {...item} />
                            )}
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default ShoppingCard;