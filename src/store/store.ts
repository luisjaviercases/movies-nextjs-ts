import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authApi } from '@/services/query/authApi';

const rootReducer = combineReducers({ [authApi.reducerPath]: authApi.reducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
