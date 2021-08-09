import classes from './CardCart.module.css';
import { useContext } from 'react';
import GoodsContext from '../../../context/goods-context';
import trash from '..//..//..//assets/picture/Trash.png'

const CardCart = (props) => {
    const GoodsCtx = useContext(GoodsContext);

    const isIncluded = GoodsCtx.onLookForGood(props.name);

    function onToggleGoodInCart() {
        if (isIncluded) {
            GoodsCtx.onRemoveFromCart(props.name)
        }
    }

    return (
        <div className={classes.CardCart}>
            <img src={trash} className={classes.button} onClick={onToggleGoodInCart}/>
            {props.name}
            {props.price}$
            <img src={props.src} className={classes.image} alt={props.name}/>
        </div>
    );
}

export default CardCart;