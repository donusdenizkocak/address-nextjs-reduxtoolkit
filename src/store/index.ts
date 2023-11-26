import { configureStore } from "@reduxjs/toolkit";

//* REDUCER

import {getCountry} from '@/store/apps/country/index'


export const store =configureStore({
    reducer:{
        getCountry
    },
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck : false})
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>