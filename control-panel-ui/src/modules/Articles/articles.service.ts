import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SERVER_URL } from '~/lib/constants';
import { TRootState } from '~/store';

export const articlesAPI = createApi({
  reducerPath: 'articlesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/articles`,
    prepareHeaders(headers, { getState }) {
      const { access_token } = (getState() as TRootState).auth;
      if (access_token) headers.set('authorization', `Bearer ${access_token}`);

      return headers;
    },
  }),
  tagTypes: ['Articles'],
  endpoints: (build) => ({
    createArticle: build.mutation<IArticle, FormData>({
      query: (req) => ({
        url: '',
        method: 'POST',
        body: req,
      }),
      invalidatesTags: ['Articles'],
    }),
    readArticles: build.query<IArticle[], void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['Articles'],
    }),
    updateArticle: build.mutation<IArticle, { data: FormData; id: number }>({
      query: ({ data, id }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Articles'],
    }),
    deleteArticle: build.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Articles'],
    }),
  }),
});

export const {
  useCreateArticleMutation,
  useReadArticlesQuery,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articlesAPI;
