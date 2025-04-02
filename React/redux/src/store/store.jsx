import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../logic/todoSlice'

const mystore = configureStore({
    reducer: {
        alltodos: todoSlice,
    }
})

export default mystore;