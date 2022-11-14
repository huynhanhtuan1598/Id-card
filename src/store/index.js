import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './Reducers/user';
import { hobbyReducer } from './Reducers/hobby';


const store = configureStore({
    reducer: {
        hobby: hobbyReducer,
        user: userReducer,
    }
})

export default store;
