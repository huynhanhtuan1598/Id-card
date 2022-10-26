import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './Reducers/cart';
import {hobbyReducer} from "./Reducers/hobby";
import { userReducer } from './Reducers/user';

const store = configureStore({
    reducer: {
        hobby: hobbyReducer,
        user: userReducer,
        cart: cartReducer,
    }
})

export default store;