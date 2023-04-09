import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SERVER_URL } from '~/lib/constants';
import { TRootState } from '~/store';

export const refInfoAPI = createApi({
  reducerPath: 'refInfoAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/refInfo`,
    prepareHeaders(headers, { getState }) {
      const { access_token } = (getState() as TRootState).auth;
      if (access_token) headers.set('authorization', `Bearer ${access_token}`);

      return headers;
    },
  }),
  tagTypes: ['RefInfo'],
  endpoints: (build) => ({
    updateRefInfo: build.mutation<IRefInfo, Partial<IRefInfo>>({
      query: (req) => ({
        url: '',
        method: 'PUT',
        body: req,
      }),
      invalidatesTags: ['RefInfo'],
    }),
    readRefInfo: build.query<IRefInfo, void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['RefInfo'],
    }),
  }),
});

export const { useUpdateRefInfoMutation, useReadRefInfoQuery } = refInfoAPI;
