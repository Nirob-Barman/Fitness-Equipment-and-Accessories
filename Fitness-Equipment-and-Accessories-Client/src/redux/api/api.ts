/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["products", "orders"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/products",
      }),
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          method: "POST",
          url: "/products/create-product",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => ({
        method: "GET",
        url: `/products/${id}`,
      }),
      providesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/products/${id}`,
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/products/${id}`,
      }),
      invalidatesTags: ["products"],
    }),
    getProductsByCategory: builder.query({
      query: (category) => ({
        method: "GET",
        url: `/products/category/${category}`,
      }),
      providesTags: ["products"],
    }),
    getOrders: builder.query({
      query: () => ({
        method: "GET",
        url: "/orders",
      }),
      providesTags: ["orders"],
    }),
    addOrder: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          method: "POST",
          url: "/orders/create-orders",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsByCategoryQuery,
  useGetOrdersQuery,
  useAddOrderMutation,
} = baseApi;
