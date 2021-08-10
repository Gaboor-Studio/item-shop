import { createContext, useState } from 'react';

const GoodsContext = createContext({
    inCart: [],
    onAddToCart: (good) => {},
    onRemoveFromCart: (goodId) => {},
    onLookForGood: (goodId) => {}
})

export const GoodsContextProvider = (props) => {
    const [cartGoods, setCartGoods] = useState([])

    const addToCartHandler = (newGood) => {
        setCartGoods(prevCartGoods => {
            return prevCartGoods.concat(newGood);
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
        inCart: cartGoods,
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