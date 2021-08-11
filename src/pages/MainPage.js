import Layout from "../components/layout/Layout";
import CardMain from "../components/ui/Card/CardMain";
import classes from "./MainPage.module.css";
// import apple from "../assets/picture/iphone.png";
// import huawei from "../assets/picture/huawei.png";
// import xiaomi from "../assets/picture/xiaomi.png";
// import samsung from "../assets/picture/samsung.png";
import { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner/Spinner";

// const Goods = [
//   {
//     src: apple,
//     name: "iphone 12",
//     price: 1000,
//   },
//   {
//     src: samsung,
//     name: "galaxy s21",
//     price: 700,
//   },
//   {
//     src: huawei,
//     name: "huawei p50",
//     price: 700,
//   },
//   {
//     src: xiaomi,
//     name: "xiaomi m11",
//     price: 600,
//   },
//   {
//     src: samsung,
//     name: "galaxy s10",
//     price: 500,
//   },
//   {
//     src: apple,
//     name: "iphone 12",
//     price: 1000,
//   },
//   {
//     src: huawei,
//     name: "galaxy s21",
//     price: 700,
//   },
//   {
//     src: xiaomi,
//     name: "huawei p50",
//     price: 700,
//   },
//   {
//     src: samsung,
//     name: "xiaomi m11",
//     price: 600,
//   },
//   {
//     src: samsung,
//     name: "galaxy s10",
//     price: 500,
//   },
// ];

const MainPage = () => {
  const [goodsState, setGoodsState] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://item-shop-5676c-default-rtdb.europe-west1.firebasedatabase.app/phones.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const goods = [];

        for (const key in data) {
          const newGood = {
            ...data[key],
          };

          goods.push(newGood);
        }
        setGoodsState(goods);
        setIsLoading(false);
      }).catch(err => {
        console.log(err);
        setIsLoading(false);
        // handle error by showing some message
      });
  }, []);


  return (
    <Layout>
      <Spinner show={isLoading} />
      <div className={classes.mainpage}>
        <div className={classes.scroll}>
          {goodsState.map((good) => {
            return (
              <CardMain
                key={Math.random() * 100}
                src={good.src}
                name={good.name}
                price={good.price}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
