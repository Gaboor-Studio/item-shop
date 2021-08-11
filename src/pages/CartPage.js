import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GoodsContext from "../context/goods-context";
import CardCart from "../components/ui/Card/CardCart";
import classes from "./CartPage.module.css";
const CartPage = () => {
  const GoodsCtx = useContext(GoodsContext);

  return (
    <Layout>
      <div className={classes.CartPage} >
        {GoodsCtx.inCart.map((good) => {
          return (
            <CardCart key={good.name} src={good.src} name={good.name} price={good.price} count={good.count}/>
          );
        })}
         <Link to="/Submit" className={classes.button}>نهایی کردن خرید</Link>
      </div>    
    </Layout>
  );
};

export default CartPage;
