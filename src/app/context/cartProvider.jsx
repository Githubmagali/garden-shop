"use client"
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Try to load the cart from local storage, or default to an empty array
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [totalCost, setTotalCost] = useState(0);

    const getItemQuantity = (itemId) => {
        const item = cart.find((cartItem) => cartItem.id === itemId);
        return item ? item.quantity : 0;
    };

    const addToCart = (item) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
            if (itemExists) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }]
            }
        });
    };

    const getItemTotalPrice = (itemId) => {
        const item = cart.find((cartItem) => cartItem.id === itemId);
        return item ? (item.price * item.quantity).toFixed(2) : '0.00';
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find((cartItem) => cartItem.id === itemId);
            if (itemExists && itemExists.quantity > 1) {
                return prevCart.map((cartItem) =>
                    cartItem.id === itemId
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            } else {
                return prevCart.filter((cartItem) => cartItem.id !== itemId);
            }
        });
    };

    useEffect(() => {
        // This effect updates the total cost whenever the cart changes
        const updateTotalCost = () => {
            const total = cart.reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0);
            setTotalCost(parseFloat(total.toFixed(2)));
        };
        updateTotalCost();
    }, [cart]);

    useEffect(() => {
        // This effect saves the cart to local storage whenever the cart changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, totalCost, getItemQuantity, getItemTotalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

  