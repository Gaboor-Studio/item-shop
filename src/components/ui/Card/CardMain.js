import classes from "./CardMain.module.css";
import { useContext, useState } from "react";
import GoodsContext from "../../../context/goods-context";

const CardMain = (props) => {
  const GoodsCtx = useContext(GoodsContext);
  const [count, setCount] = useState(1);

  const isIncluded = GoodsCtx.onLookForGood(props.name);

  const onCountChangeHandler = (event) => {
    setCount(event.target.value);
  }

  function onToggleGoodInCart() {
    if (isIncluded) {
      GoodsCtx.onRemoveFromCart(props.name);
    } else {
      GoodsCtx.onAddToCart({
        src: props.src,
        name: props.name,
        price: props.price,
        count: count
      });
    }
  }

  let myClass = classes.green;

  if (isIncluded) {
    myClass = classes.red;
  }

  return (
    <div className={classes.CardMain}>
      <img src={props.src} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.price}$</p>
      <input type="number" min="1" value={count} onChange={(event) => onCountChangeHandler(event)} />
      <button className={myClass} onClick={onToggleGoodInCart}>
        {isIncluded ? "حذف از سبد خرید" : "افزودن به سبد خرید"}
      </button>
    </div>
  );
};

export default CardMain;
