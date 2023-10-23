// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension"
import {configureStore} from '@reduxjs/toolkit'
import countReducer from "../components/Count/reducer"
import todolistReducer from "../components/Todolist/reducer"
import countSlice from '../components/Count/countSlice'
import todoSlice from '../components/Todolist/todoSlice'
import bookListSlice from '../components/BookList/bookListSlice'
// const store = createStore(rootReducer,composeWithDevTools())

const store = configureStore({
    reducer:{
    count : countSlice.reducer,
    todolist : todoSlice.reducer,
    booklist : bookListSlice.reducer
    },
})
export default store