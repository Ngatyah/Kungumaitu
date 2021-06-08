import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../Store/cart-context';

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const cartItems = <ul>{
        cartCtx.items.map(item => <li className={classes['cart-items']}>{item.name}</li>)}</ul>
    return <Modal onclose={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>354.56</span>
        </div>

        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order </button>
        </div>
    </Modal>
}

export default Cart;

