import React, { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    const numOfCartItems = cartCtx.items.reduce((currentNum, items) => {
        return currentNum + items.amount;
    }, 0);

    const btnClasses = `${classes.button} ${classes.bump}`

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
    </button>
}
export default HeaderCartButton;