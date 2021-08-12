import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GoodsContext from "../context/goods-context";
import CardCart from "../components/ui/Card/CardCart";
import classes from "./CartPage.module.css";
import shop from "../assets/picture/emptycart.png";


const CartPage = () => {
  const GoodsCtx = useContext(GoodsContext);

  let content = (
    <div className={classes.CartPageEmpty}>
      <img className={classes.image} src={shop} alt="empty-cart" />
      <h1 className={classes.font}>!سبد خرید خالی است</h1>
    </div>
  );

  if (GoodsCtx.inCart.length > 0) {
    content = (
      <div className={classes.CartPage}>
        {GoodsCtx.inCart.map((good) => {
          return (
            <CardCart
              key={good.name}
              src={good.src}
              name={good.name}
              price={good.price}
              count={good.count}
            />
          );
        })};
        <Link to="/Submit" className={classes.button}>
          نهایی کردن خرید
        </Link>
      </div>
    );
  }

  return (
    <Layout>
      {content}
    </Layout>
  );
};

export default CartPage;
