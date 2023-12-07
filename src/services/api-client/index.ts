import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiClient = fetchBaseQuery({
  baseUrl: '',
});

export default apiClient;
