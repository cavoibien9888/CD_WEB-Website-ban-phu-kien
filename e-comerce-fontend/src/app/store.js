// import counterReducer from '../features/Counter/counterSlice';
// import userReducer from '../features/Auth/userSlice';
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../customer/pages/Cart/CartSlice";
// const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  // count: counterReducer,
  // user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;