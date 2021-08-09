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

    let myClass = classes.green;

    if (isIncluded){
        myClass = classes.red;
    }

    return (
        <div className={classes.CardMain}>
            <img src={props.src} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.price}$</p>
            <button className={myClass} onClick={onToggleGoodInCart}>{isIncluded ? 'حذف از سبد خرید': 'افزودن به سبد خرید'}</button>
        </div>
    );
}

export default CardMain;