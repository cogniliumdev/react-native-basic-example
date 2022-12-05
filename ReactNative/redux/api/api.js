import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => "/todos"
        })
    })
})

export const { useGetAllTodosQuery } = api;
export { api };