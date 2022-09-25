import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addToCart = (productTitle, productImgUrl, productPrice, productId) => {
        setItems((prevState) => [...prevState, {productTitle, productImgUrl, productPrice, productId}]);
    }

    return (
        <CartContext.Provider value={{ items, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;