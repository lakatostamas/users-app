import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { REACT_APP_API_URL: API_URL } = process.env;
const { REACT_APP_API_KEY: API_KEY } = process.env;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
    prepareHeaders: (headers) => {
      headers.set('app-id', API_KEY as string);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
