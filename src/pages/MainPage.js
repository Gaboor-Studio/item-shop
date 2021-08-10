import Layout from "../components/layout/Layout";
import CardMain from "../components/ui/Card/CardMain";
import classes from "./MainPage.module.css";
import apple from '../assets/picture/iphone.png';
import huawei from '../assets/picture/huawei.png';
import xiaomi from '../assets/picture/xiaomi.png';
import samsung from '../assets/picture/samsung.png';
import {  useEffect, useState } from 'react';

const Goods = [
  {
    src: apple,
    name: "iphone 12",
    price: 1000,
  },
  {
    src: samsung,
    name: "galaxy s21",
    price: 700,
  },
  {
    src: huawei,
    name: "huawei p50",
    price: 700,
  },
  {
    src: xiaomi,
    name: "xiaomi m11",
    price: 600,
  },
];

const MainPage = () => {
  const [goodsState, setGoodsState] = useState([]);

  useEffect(() => {
    setGoodsState(Goods);
    console.log("[Main page rendered]");
  }, []);

  return (
    <Layout>
      <div className={classes.mainpage}>
        {goodsState.map((good) => {
          return (
            <CardMain key={good.name} src={good.src} name={good.name} price={good.price} />
          );
        })}
      </div>
    </Layout>
  );
};

export default MainPage;
