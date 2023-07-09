import { configureStore } from "@reduxjs/toolkit";
import countiresSlice from "./countries/countiresSlice";



export const store = configureStore({
    reducer: {
       
       countries:countiresSlice
    }
})