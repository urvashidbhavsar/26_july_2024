import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../logic/todoSlice'
import empSlice from '../logic/empSlice'

const mystore = configureStore({
    reducer: {
        alltodos: todoSlice,
        userdata: empSlice,
    }
})

export default mystore;