import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const getItemsQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0 ;
    };
    const increaseCartQuantity = (id) => {
        setCartItems((currItems) => {
            if (cartItems.find((item) => item.id === id) == null) {
                // console.log(quantity);
                return [...currItems, { id, quantity: 1 }] ;
            }
            else {
                return currItems.map((item) => {
                    if (item.id === id) {
                // console.log(quantity);
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else {
                // console.log(quantity);
                        return item;
                    }
                });
            }
        });
    };
    const decreaseCartQuantity = (id) => {
        setCartItems((currItems) => {
            if (cartItems.find(item => item.id === id) === null) {
                return currItems.filter((item) => item.id !== id);
            }
            else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return item;
                    }
                })
            }
        });
    };
    const removeItemFromCart = (id) => {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id))
    }
    return (
        <UserContext.Provider value={{ cartItems, getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart }}> {/* Provide both name and setName functions */}
            {children}
        </UserContext.Provider>
    );
};

export const useShoppingCart = () => {
    return useContext(UserContext);
};