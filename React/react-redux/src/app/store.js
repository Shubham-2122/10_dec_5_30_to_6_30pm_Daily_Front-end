import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/counter/counterSlice";
import  todoSlice  from "../features/Todo/todoSlice";

export default configureStore({
    reducer : {
        counter : counterSlice,
        todo : todoSlice
    }
})