import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './slices/Todoslice';


export const store = configureStore({
    reducer:{
        todo: todoReducer,
    },
});