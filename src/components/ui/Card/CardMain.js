import classes from './CardMain.module.css';
import { useContext } from 'react';
import GoodsContext from '../../../context/goods-context';

const CardMain = (props) => {
    const GoodsCtx = useContext(GoodsContext);

    const isIncluded = GoodsCtx.onLookForGood(props.name);

    function onToggleGoodInCart() {
        if (isIncluded) {
            GoodsCtx.onRemoveFromCart(props.name)
        } else {
            GoodsCtx.onAddToCart(props.name);
        }
    }

    return (
        <div className={classes.CardMain}>
            <img src={props.src} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.price}$</p>
            <button className={classes.button} onClick={onToggleGoodInCart}>{isIncluded ? 'حذف از سبد خرید': 'افزودن به سبد خرید'}</button>
        </div>
    );
}

export default CardMain;