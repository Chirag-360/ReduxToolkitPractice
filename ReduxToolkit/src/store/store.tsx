import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"
import postReducer from "../features/postSlice"
import userReducer from "../features/userSlice";

export const store = configureStore({
    reducer:{
    counter:counterReducer,
    posts:postReducer,
    users:userReducer,
    }
})