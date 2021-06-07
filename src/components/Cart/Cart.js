import classes from './Cart.module.css';

const Cart = props => {

    const cartItems = <ul>{[{
        id: 'm4',
        name: 'Green Bowl',
        amount: 3,
        price: 18.99,
    }].map(item => <li className={classes['cart-items']}>{item.name}</li>)}</ul>
    return <div>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>354.56</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order </button>
        </div>
    </div>
}

export default Cart;

