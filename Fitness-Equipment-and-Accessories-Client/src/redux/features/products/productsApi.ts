import { baseApi } from '../../api/baseApi';

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),

    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    getCategories: builder.query({
      query: () => `/categories`,
    })
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetCategoriesQuery } = productsApi;
