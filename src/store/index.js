import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/user';
import { hobbyReducer } from './reducers/hobby';


const {store} = configureStore({
    reducer: {
        hobby: hobbyReducer,
        user: userReducer,
    }
})

export default store;