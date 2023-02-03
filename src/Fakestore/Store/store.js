import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Products/cartSlice";
import productReducer from "../Products/ProductSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
