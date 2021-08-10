import { createContext, useState } from "react";

const GoodsContext = createContext({
  inCart: [],
  onAddToCart: (good) => {},
  onRemoveFromCart: (goodId) => {},
  onLookForGood: (goodId) => {},
  onIncreaseCount: (goodId) => {},
  onDecreaseCount: (goodId) => {},
});

export const GoodsContextProvider = (props) => {
  const [cartGoods, setCartGoods] = useState([]);

  const addToCartHandler = (newGood) => {
    setCartGoods((prevCartGoods) => {
      return prevCartGoods.concat(newGood);
    });
  };

  const removeFromCartHandler = (goodId) => {
    setCartGoods((prevCartGoods) => {
      return prevCartGoods.filter((good) => good.name !== goodId);
    });
  };

  const isInCart = (goodId) => {
    return cartGoods.some((good) => {
      return good.name === goodId;
    });
  };

  const onChangeCountHandler = (goodId, op) => {
    setCartGoods((prevCartGoods) => {
      const newCart = [...prevCartGoods];
      const itemIndex = prevCartGoods.findIndex((good) => good.name === goodId);
      const toBeChangedProduct = prevCartGoods[itemIndex];
      const count = toBeChangedProduct.count;
      if (op > 0) {
        const changedProduct = {
          ...toBeChangedProduct,
          count: count + 1,
        };
        newCart[itemIndex] = changedProduct;
      } else if (op < 0 && count > 1){
        const changedProduct = {
            ...toBeChangedProduct,
            count: count - 1,
          };
          newCart[itemIndex] = changedProduct;
      }
      return newCart;
    });
  };

  const content = {
    inCart: cartGoods,
    onAddToCart: addToCartHandler,
    onRemoveFromCart: removeFromCartHandler,
    onLookForGood: isInCart,
    onIncreaseCount: (goodId) => onChangeCountHandler(goodId, 1),
    onDecreaseCount: (goodId) => onChangeCountHandler(goodId, -1),
  };

  return (
    <GoodsContext.Provider value={content}>
      {props.children}
    </GoodsContext.Provider>
  );
};

export default GoodsContext;
