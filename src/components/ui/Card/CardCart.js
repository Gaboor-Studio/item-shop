import classes from "./CardCart.module.css";
import { useContext } from "react";
import GoodsContext from "../../../context/goods-context";
import trash from "..//..//..//assets/picture/Trash.png";

const CardCart = (props) => {
  const GoodsCtx = useContext(GoodsContext);

  const isIncluded = GoodsCtx.onLookForGood(props.name);

  function onToggleGoodInCart() {
    if (isIncluded) {
      GoodsCtx.onRemoveFromCart(props.name);
    }
  }

  return (
    <div className={classes.CardCart}>
      <div className={classes.left}>
        <img
          src={trash}
          onClick={onToggleGoodInCart}
          alt="remove"
        />
      </div>
      <div className={classes.middle}>
        <p>{props.name}</p>
        <p>{props.price}$</p>
      </div>
      <div className={classes.right}>
        <img src={props.src} alt={props.name} />
      </div>
    </div>
  );
};

export default CardCart;
