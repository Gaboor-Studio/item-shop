import Layout from "../components/layout/Layout";
import { useContext } from "react";
import GoodsContext from "../context/goods-context";
import CardMain from "../components/ui/Card/CardMain";

const CartPage = () => {
  const GoodsCtx = useContext(GoodsContext);

  return (
    <Layout>
      <h1>Cart Page</h1>
      <div >
        {GoodsCtx.inCart.map((good) => {
          return (
            <CardMain key={good.name} src={good.src} name={good.name} price={good.price}/>
          );
        })}
      </div>
    </Layout>
  );
};

export default CartPage;
