import Layout from "../components/layout/Layout";
import CardMain from "../components/ui/Card/CardMain";
import classes from "./MainPage.module.css";


const Goods = [
  {
    src: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG36.png",
    name: "iphone 12",
    price: 1000,
  },
  {
    src: "https://images.samsung.com/is/image/samsung/p6pim/uk/galaxy-s21/gallery/uk-galaxy-s21-5g-g991-sm-g991bzvdeua-368855939?$720_576_PNG$",
    name: "galaxy s21",
    price: 700,
  },
  {
    src: "D:\\Programming\\ReactJS\\Code\\item-shop\\src\\assets\\picture\\Rectangle2.png",
    name: "huawei p50",
    price: 700,
  },
  {
    src: "../assets/picture/Rectangle3.png",
    name: "xiaomi m11",
    price: 600,
  },
];

const MainPage = () => {
  return (
    <Layout>
      <h1>Main Page</h1>
      <div className={classes.mainpage}>
        {Goods.map((good) => {
          return (
            <CardMain src={good.src} name={good.name} price={good.price} />
          );
        })}
      </div>
    </Layout>
  );
};

export default MainPage;
