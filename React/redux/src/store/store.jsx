import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../logic/todoSlice'
import empSlice from '../logic/empSlice'
import cartSlice from '../logic/cartSlice'

const mystore = configureStore({
    reducer: {
        alltodos: todoSlice,
        userdata: empSlice,
        cart: cartSlice,
    }
})

export default mystore;