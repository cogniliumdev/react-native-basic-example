import { configureStore } from '@reduxjs/toolkit'
import aboutSlice from './aboutSlice'
import { api } from './api/api'
export const store = configureStore({
    reducer: {
        about: aboutSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})