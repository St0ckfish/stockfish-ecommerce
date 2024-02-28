// Product.js
import * as React from 'react';
import { UserProvider } from '../Context/CartContext';
import storeItems from '../data/storeitems.json'
import ProductItem from '../components/ProductItem';
import { useParams } from 'react-router-dom'; // Import useParams hook
const Product = () => {
    // Method 3: window.location
    // const id = window.location.pathname.slice(-1);
    const {ProductId} = useParams()

    return (
        <>
            {storeItems.map((item) => (
                // Only render the item that matches the id
                item.id == ProductId && (
                    <div key={ProductId}>
                        {/* <NavLink to='/Product'> */}
                        <ProductItem {...item} />
                        {/* </NavLink> */}
                    </div>
                )
            ))}
        </>
    );
}
export default Product;