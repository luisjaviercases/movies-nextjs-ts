import { baseApi } from '@/services/query/baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    authSignIn: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (body) => {
        return {
          url: '/films/auth/sign-in',
          method: 'post',
          body,
        };
      },
    }),
  }),
});

export const { useAuthSignInMutation } = authApi;
