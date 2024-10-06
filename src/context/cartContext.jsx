/*import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id ));
    }
    const clearCart = () => {
        setCart([])
    };

    const addItems = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((current) => current.id === item.id);
    
            if (existingItem) {
                if (item.quantity < 0 && existingItem.quantity === 1) {
                    // Si la cantidad va a ser menor que 1, se elimina el item
                    return prevCart.filter((current) => current.id !== item.id);
                } else {
                    return prevCart.map((current) =>
                        current.id === item.id
                            ? { ...current, quantity: Math.max(0, current.quantity + item.quantity) }
                            : current
                    );
                }
            } else if (item.quantity > 0) {
                return [...prevCart, { ...item, quantity: item.quantity || 1 }];
            }
    
            return prevCart;
        });
    };
console.log(cart);

    return <CartContext.Provider
    value={{cart, addItems, removeItem, clearCart}}
    >
        { children }
    </CartContext.Provider>
}*/

import React, { createContext, useState } from "react";

export const CartContext=createContext();

export const CartContextProvider = ( { children } ) => {
    const [cartItems, setCartItems]= useState([]);

    const addItems = (item) => {
        const existingItem = cartItems.find((current) => current.id === item.id);
    
        if (existingItem) {
            if (item.quantity < 0 && existingItem.quantity === 1) {
                removeItem(item.id); // Si hay solo uno y restas, se elimina
            } else {
                // Si ya existe, actualizamos la cantidad
                setCartItems(
                    cartItems.map((current) =>
                        current.id === item.id
                            ? { ...current, quantity: current.quantity + item.quantity }
                            : current
                    )
                );
            }
        } else if (item.quantity > 0) {
            // Si no existe, lo agregamos con la cantidad inicial
            setCartItems([...cartItems, { ...item, quantity: item.quantity || 1 }]);
        }
    };
    

    const removeItem=(id)=>{
        setCartItems(cartItems.filter(item => item.id !== id));
 
    }


    const clearCart=()=>{
        setCartItems([]);
    }

    return <CartContext.Provider 
    value={{cartItems, addItems, removeItem, clearCart}}
    > 
    {children}
    </CartContext.Provider>
}