import classes from './MealItem.module.css';
const MealItem = props => {

    const price = `$${props.price.toFixed(2)}`
    return <li className={classes.meal}>
        <div>
            <div className={classes['meal h3']}><h3>{props.name}</h3></div>
            <div className={classes.description}><p>{props.description}</p></div>
            <div className={classes.price}>{price}</div>
        </div>
    </li>
};
export default MealItem;