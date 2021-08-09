import { createContext, useState } from 'react';

const GoodsContext = createContext({
    Goods: [],
    inCart: [],
    onSetGoods: (newGoods) => {},
    onAddToCart: (goodId) => {},
    onRemoveFromCart: (goodId) => {},
    onLookForGood: (goodId) => {}
})

export const GoodsContextProvider = (props) => {
    const [goods, setGoods] = useState([])
    const [cartGoods, setCartGoods] = useState([])

    const addGoodsHandler = (Goods) => {
        setGoods(Goods);
    }

    const addToCartHandler = (goodId) => {
        const addedItem = goods.filter((good) => {
            return good.name === goodId
        })

        setCartGoods(prevCartGoods => {
            return prevCartGoods.concat(addedItem);
        })
    }

    const removeFromCartHandler = (goodId) => {
        setCartGoods(prevCartGoods => {
            return prevCartGoods.filter(good => good.name !== goodId);
        })
    }

    const isInCart = (goodId) => {
        return cartGoods.some(good => {
            return(good.name === goodId);
        });
    }

    const content = {
        Goods: goods,
        inCart: cartGoods,
        onSetGoods: addGoodsHandler,
        onAddToCart: addToCartHandler,
        onRemoveFromCart: removeFromCartHandler,
        onLookForGood: isInCart
    };

    return(
        <GoodsContext.Provider value={content}>
            {props.children}
        </GoodsContext.Provider>
    );
}

export default GoodsContext;