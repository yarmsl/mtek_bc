import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SERVER_URL } from '~/lib/constants';
import { TRootState } from '~/store';

export const filesAPI = createApi({
  reducerPath: 'filesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/files`,
    prepareHeaders(headers, { getState }) {
      const { access_token } = (getState() as TRootState).auth;
      if (access_token) headers.set('authorization', `Bearer ${access_token}`);

      return headers;
    },
  }),
  tagTypes: ['Files'],
  endpoints: (build) => ({
    uploadFile: build.mutation<IFile, FormData>({
      query: (req) => ({
        url: '',
        method: 'POST',
        body: req,
      }),
      invalidatesTags: ['Files'],
    }),
    deleteFile: build.mutation<void, { kind: keyof IFilesKinds }>({
      query: ({ kind }) => ({
        url: `/${kind}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Files'],
    }),
    readFilesInfo: build.query<IFile[], void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['Files'],
    }),
  }),
});

export const { useUploadFileMutation, useDeleteFileMutation, useReadFilesInfoQuery } = filesAPI;
