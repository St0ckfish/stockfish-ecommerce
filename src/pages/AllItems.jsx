// Product.js
import * as React from 'react';
import { UserProvider } from '../Context/CartContext';
import itemss from '../data/itemss.json';
import { useParams } from 'react-router-dom'; // Import useParams hook
import ItemForAllItems from '../components/ItemForAllItems';
const AllItems = () => {
    // Method 3: window.location
    // const id = window.location.pathname.slice(-1);
    const {ItemtId} = useParams()

    return (
        <>
            {itemss.map((item) => (
                // Only render the item that matches the id
                item.id == ItemtId && (
                    <div key={ItemtId}>
                        {/* <NavLink to='/Product'> */}
                        <ItemForAllItems {...item} />
                        {/* </NavLink> */}
                    </div>
                )
            ))}
        </>
    );
}
export default AllItems;