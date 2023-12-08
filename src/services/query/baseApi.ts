import { createApi } from '@reduxjs/toolkit/query/react';
import apiClient from '@/services/api-client/index';

export const BASE_API_REDUCER_KEY = 'apiClient';

export const baseApi = createApi({
  reducerPath: BASE_API_REDUCER_KEY,
  baseQuery: apiClient,
  endpoints: () => ({}),
});
