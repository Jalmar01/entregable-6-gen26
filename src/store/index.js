import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import cart from "./slices/Cart.slice";

export default configureStore({
    reducer: {
        products,
        cart
    }
})

