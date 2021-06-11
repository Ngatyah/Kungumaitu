import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../Store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = props => {

    const [btnAnimation, setBtnAnimation] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numOfCartItems = items.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnAnimation(true)

        const timer = setTimeout(() => {
            setBtnAnimation(false)

        }, 300)

        return (() => {
            clearTimeout(timer)
        })
    }, [items])



    const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ''}`

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
    </button>
}
export default HeaderCartButton;