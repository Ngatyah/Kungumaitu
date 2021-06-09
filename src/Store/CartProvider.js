import React, { useReducer } from 'react';
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIdex = state.items.findIndex(
            item => item.id === action.item.id);
        console.log(existingCartItemIdex)

        const existingCartItem = state.items[existingCartItemIdex];

        console.log(existingCartItem);

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIdex] = updatedItem;

        } else {

            updatedItems = state.items.concat(action.item);

        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };



    }

    return defaultCartState;

};

const CartProvider = props => {

    const [cartState, cartDispatchFn] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        cartDispatchFn({ type: "ADD", item: item })
    }
    const removeItemFromCartHandler = id => {
        cartDispatchFn({ type: "REMOVE", id: id })
    }


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;