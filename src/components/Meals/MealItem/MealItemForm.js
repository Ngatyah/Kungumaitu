import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmountInString = amountInputRef.current.value;
        const enteredAmount = +enteredAmountInString;

        if (
            enteredAmountInString.trim() === 0
            || enteredAmount < 1 || enteredAmount > 5) {

            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(enteredAmount);

    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label="Amount"
            input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'

            }}
        />
        <button className={classes['form button']}>+Add</button>
        <div>{!amountIsValid && <p>Enter Valid Amount(1-5)</p>}</div>
    </form>
}
export default MealItemForm;